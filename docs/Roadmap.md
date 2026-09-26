# Roadmap – Feldkirchen im Blick / Demonstrator

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.3 | 26.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Statusmodell

Es gelten die zentralen Roadmap-Status aus `PustefixReisen/pustivo/docs/governance/Dokumentenpflege.md`.

## Aktueller Stand

| Phase | Status | Ergebnis / nächster Schritt |
|---|---|---|
| Demonstrator und Darstellung | **Teilweise umgesetzt** | Demonstrator vorhanden; Darstellung und Inhaltslogik können weiter konsolidiert werden |
| Quellenmonitor / Rechercheunterstützung | **Teilweise umgesetzt** | Fach- und Architekturunterlagen vorhanden; produktive Integration noch nicht als Echtbetrieb nachgewiesen |
| Projektdokumentation konsolidieren | **In Arbeit** | Bestandsaudit abgeschlossen; fachliche/redaktionelle Primärquellen über #11 vervollständigen |
| Echtbetriebsarchitektur | **In Arbeit** | Architektur-, Betriebs-, Sicherheits-, Daten-, Deployment- und Backupentscheidungen über #12 verbindlich konsolidieren |
| Produktivsetzung | **Geplant** | erst nach Abschluss der wesentlichen Fach- und Echtbetriebsgrundlagen |

## Audit-Ergebnis 12.09.2026

Der Bestandsaudit ist abgeschlossen. Ergebnis: **wesentliche Lücken**.

Positiv vorhanden sind KI-Leitfaden, Frontend-/Darstellungsdokumentation, Quellenmonitor-Dokumente, Dokumentationslandkarte und Roadmap.

Wesentliche offene Punkte:

1. **#11 Fachliche/redaktionelle Primärquellen vollständig kanonisch verankern.**
2. **#12 Echtbetriebsarchitektur und Betriebsverfahren verbindlich festlegen.**

Der Demonstrator bleibt bis dahin klar vom späteren Echtbetrieb getrennt.

## Übernahme der Demonstrator-Erkenntnisse in den Echtbetrieb

Die im Demonstrator verbindlich dokumentierten fachlichen und redaktionellen Regeln sind **Anforderungen an das Echtsystem** und dürfen beim technischen Neubau nicht verloren gehen. Der Demonstrator ist keine wegwerfbare Fachlogik.

Vor Beginn der Programmierung des Echtsystems wird deshalb ein verbindlicher Übernahmecheck durchgeführt. Mindestens zu übernehmen sind:

- Zwei-Achsen-Recherche aus Orts- und Themenabdeckung,
- direkte Quellenbeobachtung einschließlich RIS-Dokumentfreigaben und relevanter Presseübersichten,
- vollständige Auswertung öffentlicher Beschlussvorlagen und relevanter Anlagen,
- Trennung von Dokumentfreigabe, Tagesordnung, Beratung und tatsächlichem Beschluss,
- persistente Recherchehistorie und Erkennung bereits geprüfter Fundstellen,
- Quellen- und Verifikationsstatus je Aussage bzw. Beitrag,
- Themenfortschreibung und Verknüpfung neuer Beiträge mit bestehenden Vorgängen,
- getrennte Sachinformation und „Unsere Einordnung“,
- redaktioneller Prüf-/Freigabestatus,
- robuste statische bzw. generierte Ausgabe ohne Abhängigkeit von historisch gewachsenen Update-Skripten,
- nachvollziehbare Updateprotokolle mit „neu / geändert / geprüft ohne Änderung“.

Für den **Echtbetrieb** ist zusätzlich verbindlich vorgesehen:

- Bereitstellung von FIB als installierbare **Progressive Web App (PWA)** auf unterstützten Endgeräten,
- eigenes FIB-App-Icon und Start im App-/Standalone-Modus,
- eine für Nutzer leicht zugängliche Installationsmöglichkeit; die eigentliche Installation erfolgt nach Zustimmung über den jeweiligen Browser bzw. das Betriebssystem,
- Unterstützung von Benachrichtigungen über neue Beiträge und wesentliche Aktualisierungen bestehender Beiträge,
- Kennzeichnung ungelesener Meldungen durch einen internen Zähler in FIB und – soweit vom jeweiligen Betriebssystem/Launcher unterstützt – zusätzlich durch ein Badge bzw. einen Hinweis am App-Icon,
- keine Festlegung auf eine bestimmte Badge-Darstellung (z. B. Zahl oder Punkt), da diese vom Endgerät abhängen kann.

Die technische Ausgestaltung von Push-Dienst, Berechtigungsmodell, Zählerlogik, Gelesen-Status, Datenschutz und Offline-Verhalten wird erst bei Vorbereitung der Echtbetriebsumsetzung verbindlich festgelegt.

Für die Echtbetriebsarchitektur ist fachliche Parität mit dem aktuellen dokumentierten Demonstratorstand ein Abnahmekriterium. Verbesserungen, die bis zum Entwicklungsstart hinzukommen, werden über die kanonischen Projektdokumente automatisch Bestandteil dieses Sollstands.

## Nächster konkreter Schritt

**Issue #11** ist der nächste Dokumentationsschritt: Zuerst werden Produkt-/Fachbeschreibung, Referenzwissen, politische Einordnung und Sprachregeln eindeutig als Primärquellen verankert.

Danach folgt **#12** zur konsolidierten Echtbetriebsarchitektur. Erst auf dieser Grundlage sollen weitere grundlegende Echtbetriebsentscheidungen umgesetzt werden.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 1.3 | 26.09.2026 | PWA-Installation, App-Icon, Benachrichtigungen und Ungelesen-Zähler/Badge als verbindliche Anforderungen für den Echtbetrieb ergänzt; technische Detailentscheidungen auf die spätere Umsetzungsplanung vertagt. |
| 1.2 | 21.09.2026 | Verbindlichen Übernahmecheck Demonstrator → Echtsystem ergänzt; fachliche Parität mit dem dokumentierten Demonstratorstand als Abnahmekriterium festgelegt. |
| 1.1 | 12.09.2026 | Bestandsaudit abgeschlossen; Folgearbeiten #11 und #12 als verbindliche nächste Schritte verankert |
| 1.0 | 12.09.2026 | Roadmap als aktives Steuerungsdokument eingeführt |
