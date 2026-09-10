#!/usr/bin/env python3
from pathlib import Path
import base64

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "_migration_docs"
OUT = ROOT / "docs" / "projektgrundlagen"
OUT.mkdir(parents=True, exist_ok=True)

DOCS = {
    "KI-Leitfaden_Homepage-Presseschau.md": [f"ki.{i:02d}.b64" for i in range(1, 10)],
    "Fachliche_Beschreibung_Homepage-Presseschau.md": [f"fach.{i:02d}.b64" for i in range(1, 3)],
    "Gruene_Werte_und_politische_Ziele.md": [f"werte.{i:02d}.b64" for i in range(1, 4)],
    "Merkblatt_Wissenschaftlich-Politische_Sprache.md": [f"sprache.{i:02d}.b64" for i in range(1, 3)],
}

for name, parts in DOCS.items():
    payload = "".join((SRC / part).read_text(encoding="ascii").strip() for part in parts)
    data = base64.b64decode(payload)
    (OUT / name).write_bytes(data)
    print(f"wrote {name}: {len(data)} bytes")
