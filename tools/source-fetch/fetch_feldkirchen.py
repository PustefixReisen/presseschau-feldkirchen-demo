#!/usr/bin/env python3
"""Prototype: retrieve a FIB source page directly and discover/download PDFs.

Designed for GitHub Actions or local execution. It deliberately does not depend
on search-engine indexing. Example:
  python tools/source-fetch/fetch_feldkirchen.py \
    https://www.feldkirchen.de/bauen/nachrichten-aus-dem-bauamt/neues-parkraumkonzept-in-feldkirchen
"""
from __future__ import annotations

import hashlib
import json
import pathlib
import re
import sys
import urllib.parse
import urllib.request
from html.parser import HTMLParser

UA = "FIB-Quellencheck/0.1 (+https://pustefixreisen.github.io/presseschau-feldkirchen-demo/)"
OUT = pathlib.Path("source-fetch-output")


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


def request(url: str) -> tuple[bytes, str, str]:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8",
            "Accept-Language": "de-DE,de;q=0.9,en;q=0.5",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read(), r.geturl(), r.headers.get("Content-Type", "")


def safe_name(url: str, index: int) -> str:
    name = pathlib.PurePosixPath(urllib.parse.urlparse(url).path).name or f"document-{index}.pdf"
    name = re.sub(r"[^A-Za-z0-9._-]+", "_", urllib.parse.unquote(name))
    if not name.lower().endswith(".pdf"):
        name += ".pdf"
    return f"{index:02d}-{name}"


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: fetch_feldkirchen.py PAGE_URL", file=sys.stderr)
        return 2
    page_url = sys.argv[1]
    OUT.mkdir(parents=True, exist_ok=True)
    html, final_url, ctype = request(page_url)
    (OUT / "page.html").write_bytes(html)

    parser = LinkParser()
    parser.feed(html.decode("utf-8", errors="replace"))
    discovered = []
    for href, text in parser.links:
        absolute = urllib.parse.urljoin(final_url, href)
        path = urllib.parse.urlparse(absolute).path.lower()
        # Direct PDF links are the primary case. Also retain links whose visible
        # label announces a PDF; some CMS installations use download endpoints.
        if path.endswith(".pdf") or "pdf" in text.lower():
            discovered.append((absolute, text))

    # Stable de-duplication while preserving page order.
    seen = set()
    discovered = [x for x in discovered if not (x[0] in seen or seen.add(x[0]))]
    result = {
        "requested_page": page_url,
        "final_page": final_url,
        "page_content_type": ctype,
        "pdf_links": [],
    }
    for i, (url, text) in enumerate(discovered, 1):
        item = {"url": url, "link_text": text}
        try:
            data, pdf_final, pdf_type = request(url)
            item.update({
                "final_url": pdf_final,
                "content_type": pdf_type,
                "bytes": len(data),
                "sha256": hashlib.sha256(data).hexdigest(),
            })
            if data.startswith(b"%PDF") or "application/pdf" in pdf_type.lower():
                name = safe_name(pdf_final, i)
                (OUT / name).write_bytes(data)
                item["saved_as"] = name
            else:
                item["warning"] = "Response is not recognisable as PDF"
        except Exception as exc:
            item["error"] = f"{type(exc).__name__}: {exc}"
        result["pdf_links"].append(item)

    (OUT / "result.json").write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if result["pdf_links"] else 3


if __name__ == "__main__":
    raise SystemExit(main())
