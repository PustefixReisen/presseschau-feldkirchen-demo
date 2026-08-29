# Feldkirchen im Blick – GitHub-Pages-Release

Robuste, lesbare Release-Struktur ohne Base64/Gzip-Payloads.

## Inhalt
- `index.html` – veröffentlichte Seite
- `assets/style.css` – Gestaltung
- `assets/app.js` – Interaktion
- `data/beitraege.json` – öffentlicher Beitragsbestand
- `data/themen.json` – Themenbestand
- `data/sitzungen.json` – öffentlicher Sitzungsbestand

Interne Recherche- und Quellenbestände sind bewusst **nicht** Bestandteil dieses öffentlichen Releases.

## Veröffentlichung
Kopiere den Inhalt dieses Ordners in das Repository `PustefixReisen/presseschau-feldkirchen-demo` und führe aus:

```bash
git add .
git commit -m "Update Feldkirchen im Blick"
git push
```

Die bisherige GitHub-Pages-Konfiguration kann unverändert bleiben.
