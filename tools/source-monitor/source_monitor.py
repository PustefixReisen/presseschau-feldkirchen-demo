#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import pathlib
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser

UA = "FIB-Quellenmonitor/1.0 (+https://pustefixreisen.github.io/presseschau-feldkirchen-demo/)"


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links: list[tuple[str, str]] = []
        self._href: str | None = None
        self._text: list[str] = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() == "a":
            self._href = dict(attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.links.append((self._href, " ".join(self._text).strip()))
            self._href = None
            self._text = []


def now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def request(url: str) -> tuple[bytes, str, str]:
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept": "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8",
        "Accept-Language": "de-DE,de;q=0.9,en;q=0.5",
    })
    with urllib.request.urlopen(req, timeout=35) as response:
        return response.read(), response.geturl(), response.headers.get("Content-Type", "")


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def normalize(url: str) -> str:
    parts = urllib.parse.urlsplit(url)
    return urllib.parse.urlunsplit((parts.scheme, parts.netloc, parts.path, parts.query, ""))


def relevant_link(source: dict, base_url: str, url: str) -> bool:
    p = urllib.parse.urlsplit(url)
    b = urllib.parse.urlsplit(base_url)
    if p.scheme not in {"http", "https"}:
        return False
    if source.get("follow_same_host", True) and p.netloc != b.netloc:
        return False
    match = source.get("match", [])
    return not match or any(token in p.path for token in match)


def is_document(source: dict, url: str, text: str) -> bool:
    path = urllib.parse.urlsplit(url).path.lower()
    exts = source.get("document_extensions", [".pdf"])
    return any(path.endswith(ext.lower()) for ext in exts) or "pdf" in text.lower()


def parse_links(html: bytes, final_url: str) -> list[dict]:
    parser = LinkParser()
    parser.feed(html.decode("utf-8", errors="replace"))
    seen = set()
    result = []
    for href, text in parser.links:
        if not href:
            continue
        url = normalize(urllib.parse.urljoin(final_url, href))
        if url in seen:
            continue
        seen.add(url)
        result.append({"url": url, "text": text})
    return result


def load_json(path: pathlib.Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", default="config/source-monitor.json")
    ap.add_argument("--state", default="data/source-monitor-state.json")
    ap.add_argument("--inbox", default="data/source-monitor-inbox.json")
    ap.add_argument("--output", default="source-monitor-output")
    args = ap.parse_args()

    config_path = pathlib.Path(args.config)
    state_path = pathlib.Path(args.state)
    inbox_path = pathlib.Path(args.inbox)
    out_dir = pathlib.Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "documents").mkdir(exist_ok=True)

    config = load_json(config_path, {"sources": []})
    state = load_json(state_path, {"version": 1, "sources": {}})
    previous_inbox = load_json(inbox_path, {"version": 1, "items": []})
    previous_keys = {x.get("event_key") for x in previous_inbox.get("items", [])}
    inbox_items = []
    run = {"started_at": now_iso(), "sources": [], "new_events": []}

    for source in config.get("sources", []):
        sid = source["id"]
        old = state.setdefault("sources", {}).get(sid, {})
        report = {"id": sid, "name": source.get("name"), "url": source["url"]}
        try:
            body, final_url, ctype = request(source["url"])
            page_hash = sha256(body)
            links = parse_links(body, final_url) if "html" in ctype.lower() else []
            page_changed = old.get("page_sha256") not in {None, page_hash}
            first_seen = old.get("page_sha256") is None
            emit_on_baseline = bool(source.get("emit_on_baseline", False))

            known_links = old.get("links", {})
            current_links = {}
            candidates = []
            for link in links:
                url = link["url"]
                if not relevant_link(source, final_url, url) and not is_document(source, url, link["text"]):
                    continue
                current_links[url] = {"text": link["text"]}
                if url not in known_links:
                    candidates.append(link)

            documents = old.get("documents", {}).copy()
            doc_links = [x for x in links if is_document(source, x["url"], x["text"])]
            for idx, link in enumerate(doc_links, 1):
                url = link["url"]
                try:
                    data, doc_final, doc_type = request(url)
                    digest = sha256(data)
                    previous = documents.get(url, {})
                    changed = previous.get("sha256") not in {None, digest}
                    new = previous.get("sha256") is None
                    documents[url] = {
                        "final_url": doc_final,
                        "content_type": doc_type,
                        "bytes": len(data),
                        "sha256": digest,
                        "checked_at": now_iso(),
                    }
                    if data.startswith(b"%PDF") or "application/pdf" in doc_type.lower():
                        safe = re.sub(r"[^A-Za-z0-9._-]+", "_", pathlib.PurePosixPath(urllib.parse.urlsplit(doc_final).path).name)
                        filename = f"{sid}-{idx:02d}-{safe or 'document.pdf'}"
                        (out_dir / "documents" / filename).write_bytes(data)
                    if (new or changed) and (not first_seen or emit_on_baseline):
                        event_key = f"document:{sid}:{url}:{digest}"
                        event = {
                            "event_key": event_key,
                            "detected_at": now_iso(),
                            "source_id": sid,
                            "source_name": source.get("name"),
                            "kind": "document_new" if new else "document_changed",
                            "url": url,
                            "sha256": digest,
                            "bytes": len(data),
                            "link_text": link["text"],
                            "status": "unprocessed",
                        }
                        if event_key not in previous_keys:
                            inbox_items.append(event)
                            run["new_events"].append(event)
                except Exception as exc:
                    documents[url] = {**documents.get(url, {}), "error": f"{type(exc).__name__}: {exc}", "checked_at": now_iso()}

            if not first_seen or emit_on_baseline:
                for link in candidates:
                    event_key = f"link:{sid}:{link['url']}"
                    event = {
                        "event_key": event_key,
                        "detected_at": now_iso(),
                        "source_id": sid,
                        "source_name": source.get("name"),
                        "kind": "link_new",
                        "url": link["url"],
                        "link_text": link["text"],
                        "status": "unprocessed",
                    }
                    if event_key not in previous_keys:
                        inbox_items.append(event)
                        run["new_events"].append(event)

            state["sources"][sid] = {
                "name": source.get("name"),
                "url": source["url"],
                "priority": source.get("priority"),
                "last_success_at": now_iso(),
                "final_url": final_url,
                "content_type": ctype,
                "page_sha256": page_hash,
                "page_changed": page_changed,
                "first_seen": first_seen,
                "links": current_links,
                "documents": documents,
                "error": None,
            }
            report.update({"status": "ok", "links": len(current_links), "documents": len(doc_links), "page_changed": page_changed, "baseline": first_seen})
        except Exception as exc:
            state["sources"][sid] = {**old, "name": source.get("name"), "url": source["url"], "priority": source.get("priority"), "last_attempt_at": now_iso(), "error": f"{type(exc).__name__}: {exc}"}
            report.update({"status": "error", "error": f"{type(exc).__name__}: {exc}"})
        run["sources"].append(report)

    state["last_run_at"] = now_iso()
    combined = previous_inbox.get("items", []) + inbox_items
    state_path.parent.mkdir(parents=True, exist_ok=True)
    inbox_path.parent.mkdir(parents=True, exist_ok=True)
    state_path.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    inbox_path.write_text(json.dumps({"version": 1, "updated_at": now_iso(), "items": combined}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    run["finished_at"] = now_iso()
    (out_dir / "run-report.json").write_text(json.dumps(run, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(run, ensure_ascii=False, indent=2))

    mandatory_errors = [x for x in run["sources"] if x["status"] == "error" and next((s for s in config["sources"] if s["id"] == x["id"]), {}).get("priority") == "mandatory"]
    return 1 if mandatory_errors else 0


if __name__ == "__main__":
    sys.exit(main())
