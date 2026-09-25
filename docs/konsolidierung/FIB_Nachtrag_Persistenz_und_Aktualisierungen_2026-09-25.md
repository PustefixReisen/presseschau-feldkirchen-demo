# FIB – Nachtrag Persistenz und Aktualisierungen

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.1 | 25.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Zweck

Dieser Nachtrag sichert neuere verbindliche Entscheidungen aus dem laufenden Demonstrator auf `main`, ohne sie vorschnell nach `main` zurückzuführen. Er ergänzt während des kontrollierten Branchabgleichs den Dokumentationsaudit.

## 1. Persistenter fachlicher Bestand

Beiträge, Sitzungen und Themen werden im Demonstrator in `data/beitraege.json`, `data/sitzungen.json` und `data/themen.json` als kanonischer persistenter fachlicher Bestand geführt. `index.html` ist eine daraus synchronisierte statische Ausgabe.

Verbindlich gilt:

- Fachliche Beiträge, Themen oder Sitzungsstände dürfen nicht ausschließlich beim Seitenaufruf per JavaScript erzeugt, entfernt oder überschrieben werden.
- Historische Update- und Korrekturskripte dürfen zur Nachvollziehbarkeit erhalten bleiben, sind aber keine kanonische Datenhaltung und keine fachliche Laufzeitquelle.
- JavaScript ergänzt Darstellung und Bedienung, nicht den persistenten fachlichen Bestand.
- Bei vollständigen FIB-Updates werden Datenbestand und statische Ausgabe abgeglichen; sichtbare fachliche IDs dürfen weder fehlen noch doppelt vorkommen.
- Für den Echtbetrieb bleibt ein strukturierter persistenter Bestand als einzige fachliche Quelle verbindliches Ziel; die öffentliche Ausgabe wird daraus erzeugt.

## 2. Fortschreibung bestehender Beiträge

Wird ein bestehender Beitrag wegen eines neuen öffentlich belegten Sachstands fortgeschrieben, wird die Aktualisierung sichtbar historisiert.

- Im Untertitel steht nur die neueste Aktualisierung im Format `Aktualisierung vom TT.MM.JJJJ: [kurzes Stichwort].`.
- Frühere Aktualisierungen werden mit Datum und Stichwort in einem eigenen Abschnitt „Aktualisierungen“ bzw. „Was sich geändert hat“ geführt.
- Der Haupttext bildet den aktuellen Sachstand ab.
- Reine redaktionelle Korrekturen eigener Fehler oder technische Darstellungsfehler erhalten keinen öffentlichen Aktualisierungshinweis.
- Hat eine Entwicklung eigenständigen Nachrichtenwert, insbesondere eine neue Entscheidung, einen neuen Verfahrensschritt oder eine neue öffentliche Auseinandersetzung, wird ein neuer Beitrag angelegt und mit Vorgeschichte bzw. Thema verknüpft.

## 3. Cache-Busting bei sichtbaren Demonstrator-Updates

Zentrale CSS- und JavaScript-Assets werden mit einer Versionskennung eingebunden. Bei sichtbaren Frontend-Änderungen wird diese Kennung mit aktualisiert, damit nach Auslieferung der neuen GitHub-Pages-Version ein normales Neuladen den aktuellen Stand lädt.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 25.09.2026 | Persistenten JSON-Fachbestand, Aktualisierungshistorie bestehender Beiträge und Cache-Busting aus dem neueren Demonstratorstand auf `main` für die spätere Kanonisierung gesichert. |
