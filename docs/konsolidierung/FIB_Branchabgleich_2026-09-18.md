# FIB – Branchabgleich Konsolidierung

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.1 | 18.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 18.09.2026 | Divergenz zwischen `docs/canonical-markdown` und `main` geprüft; fachliche und technische Nachführungsregeln festgelegt |

## 1. Anlass

Der Arbeitsbranch `docs/canonical-markdown` und `main` haben sich während der laufenden Dokumentationskonsolidierung parallel weiterentwickelt. Ein Vergleich am 18.09.2026 ergibt einen divergierten Stand. Deshalb darf weder `main` pauschal in den Konsolidierungsbranch übernommen noch der Konsolidierungsbranch vorschnell nach `main` gemergt werden.

## 2. Seit dem gemeinsamen Stand auf `main` hinzugekommene bzw. geänderte Bereiche

Der Branchvergleich weist insbesondere Änderungen an folgenden für die Konsolidierung relevanten Dateien aus:

- `README.md`
- `assets/app.js`
- `assets/update-20260917.js`
- `data/source-monitor-inbox.json`
- `data/source-monitor-state.json`
- `docs/Dokumentation.md`
- `docs/FIB_Frontend_und_Darstellung.md`
- `docs/Roadmap.md`
- `docs/audits/2026-09-12-bestandsaudit.md`
- `docs/projektgrundlagen/KI-Leitfaden_Homepage-Presseschau.md`

Daneben sind weitere Demonstrator- und Bildänderungen vorhanden.

## 3. Fachlich verbindliche neue Regel aus `main`

Der KI-Leitfaden auf `main` enthält seit 17.09.2026 eine nachgeschärfte Regel zur lokalen Relevanz. Diese Entscheidung ist fachlich verbindlich und muss in den konsolidierten Leitfaden übernommen werden, ohne dessen Dokumentlenkung zurückzusetzen:

- lokale Relevanz bewusst weit auslegen;
- Pressemitteilungen und redaktionelle Nachrichten der Gemeinde Feldkirchen grundsätzlich als FIB-relevant behandeln;
- auch lokale Ereignisse aus verlässlichen Medien, Behörden, Polizei, Vereinen, Initiativen und anderen geeigneten Quellen grundsätzlich veröffentlichungsfähig behandeln;
- keinen zusätzlichen kommunalpolitischen Beschluss oder Verwaltungsvorgang als Voraussetzung verlangen;
- im Versuchsbetrieb bei Zweifeln eher aufnehmen als wegen einer zu engen Relevanzdefinition verwerfen;
- sensible Ereignisse sachlich, proportional und ohne unnötige personenbezogene Details darstellen;
- nicht jede lokale Meldung benötigt `Unsere Einordnung`;
- für originär lokale Meldungen keine zusätzliche kommunalpolitische Relevanzschwelle verlangen.

Diese Regel ist beim nächsten gezielten Abgleich des KI-Leitfadens in die dokumentgelenkte Fassung auf `docs/canonical-markdown` einzubauen.

## 4. Konsolidierungsregel für parallele Änderungen

Für jede auf `main` seit der Abzweigung geänderte Dokumentations-, Konfigurations- oder Geschäftslogikdatei gilt:

1. Inhalt gegen den Konsolidierungsbranch vergleichen.
2. Neuere fachliche oder technische Entscheidungen einzeln identifizieren.
3. Nur die weiterhin gültigen Entscheidungen in die kanonische Zielstruktur übernehmen.
4. Dokumentstand und Änderungshistorie der Zielunterlage fortschreiben.
5. Code-/Konfigurationsänderungen auf Auswirkungen für Fachkonzept, Architektur, Datenmodell, Betrieb, Tests und Deployment prüfen.
6. Konflikte nicht durch pauschales Überschreiben lösen.
7. Erst nach abgeschlossenem Audit über die Übernahme des Konsolidierungsstands nach `main` entscheiden.

## 5. Nächste Prüfpunkte

Priorität haben der gezielte Abgleich von `KI-Leitfaden_Homepage-Presseschau.md`, `FIB_Frontend_und_Darstellung.md`, `README.md`, `docs/Dokumentation.md`, `docs/Roadmap.md` und dem Bestandsaudit vom 12.09.2026. Anschließend sind `assets/update-20260917.js` sowie die Source-Monitor-Daten darauf zu prüfen, ob daraus weitere persistente fachliche oder betriebliche Regeln folgen.

## 6. Status

Die Branchdivergenz ist erkannt und persistent dokumentiert. Sie ist kein Grund für einen Merge. Die Konsolidierung wird als kontrollierter Einzelabgleich fortgesetzt.