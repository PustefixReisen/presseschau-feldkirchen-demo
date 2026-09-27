# Dokumentationslandkarte – Feldkirchen im Blick / Demonstrator

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.4 | 27.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Zweck

Diese Datei ist die verbindliche Dokumentationslandkarte für das Repository `presseschau-feldkirchen-demo`. Sie legt fest, welche vorhandenen Dokumente für welche Sachverhalte primär zuständig sind und welche Dokumentationslücken noch bestehen.

## Zentrale Governance

Für dieses IT-Projekt gelten die zentralen Governance-Regeln aus `PustefixReisen/pustivo` für Dokumentation, Dokumentenpflege, Dokumentationsstruktur, Audit, Projektmoderation, Kommunikation/Auslöser und Projektgründung.

Diese Regeln gelten unabhängig davon, dass FIB nicht zwingend auf der pustivo-Plattform betrieben wird.

## Primäre Quellen im Repository

| Themenbereich | Primäre verbindliche Quelle | Hinweis |
|---|---|---|
| inhaltliche Ausrichtung / allgemein verständliches Konzept | `docs/FIB-Inhaltliches-Konzept.md` | verständliche Primärquelle für Zielbild, Zweck, Reichweite und Abgrenzung von Presseschau, Sitzungen und Themen; Diskussionsgrundlage für die politische/redaktionelle Ausrichtung |
| Modellunabhängigkeit / KI-Qualitätsprüfung | `docs/FIB_Modellunabhaengigkeit_und_Qualitaetspruefung.md` | verbindliche Primärquelle für Trennung Geschäftsregeln / explizite KI-Regeln / Modellurteil, Modellabhängigkeits-Check und Modellwechsel-Teststrategie |
| redaktionelle KI-Regeln / Quellenarbeit | `docs/projektgrundlagen/KI-Leitfaden_Homepage-Presseschau.md` | fachlich-redaktionelle Primärquelle für KI-gestützte Erstellung |
| Frontend und Darstellung | `docs/FIB_Frontend_und_Darstellung.md` | UI-/Darstellungsregeln des Demonstrators |
| Quellenmonitor – Fachfunktion | `docs/FIB-Quellenmonitor.md` | fachliche Funktionsbeschreibung |
| Quellenmonitor – Architektur | `docs/FIB-Quellenmonitor-Architektur.md` | technische Architektur des Quellenmonitors |
| Projektfortschritt / nächster Schritt | `docs/Roadmap.md` | aktives Steuerungsdokument |
| Auditstatus | `docs/audits/2026-09-12-bestandsaudit.md` | dokumentiert Lücken und Folgearbeiten |
| Arbeitsregeln für KI-/Entwicklungsarbeit | `AGENTS.md` | lokale Ergänzung zur zentralen Governance |

## Noch nicht vollständig belegte Primärquellen

Der Bestandsaudit hat bestätigt, dass folgende Bereiche noch keine vollständige kanonische Quelle im Repository besitzen:

- vollständige technische Produkt-/Echtbetriebsbeschreibung des FIB; die allgemein verständliche inhaltliche Ausrichtung ist inzwischen in `docs/FIB-Inhaltliches-Konzept.md` kanonisch beschrieben,
- vollständige Zuordnung von Referenzwissen, politischer Einordnung und Sprachregeln,
- Echtbetriebsarchitektur einschließlich Datenhaltung, Workflow, Sicherheit, Deployment, Backup/Restore und Administration.

Diese Lücken werden über **Issue #11** und **Issue #12** geschlossen.

Bis dahin darf weder der KI-Leitfaden noch ein Demonstrator-Dokument stillschweigend als vollständiger Ersatz für diese noch fehlenden Primärquellen behandelt werden.

## Repository-Rolle

Dieses Repository ist derzeit der **Demonstrator**. Entscheidungen für einen späteren Echtbetrieb dürfen nicht stillschweigend als bereits implementierter Demonstrator-Stand dargestellt werden.

Im Rahmen von Issue #12 wird verbindlich entschieden, ob dieses Repository in den Echtbetrieb überführt wird oder ein separates Produktivrepository entsteht. Ein separates Repository erhält eine eigene Dokumentationslandkarte und referenziert gemeinsame Primärquellen ohne konkurrierende Kopien.

## Konfliktregel

Ein Sachverhalt wird nur in seiner Primärquelle verbindlich festgelegt. Andere Dokumente dürfen zusammenfassen oder referenzieren. Widersprüche werden als Dokumentationsdefekt behandelt und nicht durch stillschweigende Auswahl einer Fundstelle gelöst.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 1.4 | 27.09.2026 | Modellunabhängigkeit als eigenes Qualitäts- und Architekturthema in die Dokumentationslandkarte aufgenommen; neues Primärdokument für Modellabhängigkeits-Check und Modellwechsel-Tests verankert. |
| 1.3 | 27.09.2026 | Öffentliche Trend-Ebene aus der FIB-Dokumentation entfernt; interne Trend-/Stoffsammlung ausdrücklich außerhalb der öffentlichen FIB-Struktur verortet. |
| 1.2 | 26.09.2026 | `FIB-Inhaltliches-Konzept.md` als allgemein verständliche Primärquelle für Zweck, Reichweite und die Ebenen Presseschau/Sitzungen/Themen aufgenommen; offene Dokumentationslücke auf technische Produkt-/Echtbetriebsbeschreibung eingegrenzt. |
| 1.1 | 12.09.2026 | Auditstatus, offene Primärquellen und Folge-Issues #11/#12 verankert; Repository-Grenze zum Echtbetrieb präzisiert |
| 1.0 | 12.09.2026 | Dokumentationslandkarte, Governance-Verknüpfung, Primärquellen und Dokumentationsschuld eingeführt |
