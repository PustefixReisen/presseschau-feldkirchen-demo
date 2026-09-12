# Dokumentationslandkarte – Feldkirchen im Blick / Demonstrator

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.1 | 12.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Zweck

Diese Datei ist die verbindliche Dokumentationslandkarte für das Repository `presseschau-feldkirchen-demo`. Sie legt fest, welche vorhandenen Dokumente für welche Sachverhalte primär zuständig sind und welche Dokumentationslücken noch bestehen.

## Zentrale Governance

Für dieses IT-Projekt gelten die zentralen Governance-Regeln aus `PustefixReisen/pustivo` für Dokumentation, Dokumentenpflege, Dokumentationsstruktur, Audit, Projektmoderation, Kommunikation/Auslöser und Projektgründung.

Diese Regeln gelten unabhängig davon, dass FIB nicht zwingend auf der pustivo-Plattform betrieben wird.

## Primäre Quellen im Repository

| Themenbereich | Primäre verbindliche Quelle | Hinweis |
|---|---|---|
| redaktionelle KI-Regeln / Quellenarbeit | `docs/projektgrundlagen/KI-Leitfaden_Homepage-Presseschau.md` | fachlich-redaktionelle Primärquelle für KI-gestützte Erstellung |
| Frontend und Darstellung | `docs/FIB_Frontend_und_Darstellung.md` | UI-/Darstellungsregeln des Demonstrators |
| Quellenmonitor – Fachfunktion | `docs/FIB-Quellenmonitor.md` | fachliche Funktionsbeschreibung |
| Quellenmonitor – Architektur | `docs/FIB-Quellenmonitor-Architektur.md` | technische Architektur des Quellenmonitors |
| Projektfortschritt / nächster Schritt | `docs/Roadmap.md` | aktives Steuerungsdokument |
| Auditstatus | `docs/audits/2026-09-12-bestandsaudit.md` | dokumentiert Lücken und Folgearbeiten |
| Arbeitsregeln für KI-/Entwicklungsarbeit | `AGENTS.md` | lokale Ergänzung zur zentralen Governance |

## Noch nicht vollständig belegte Primärquellen

Der Bestandsaudit hat bestätigt, dass folgende Bereiche noch keine vollständige kanonische Quelle im Repository besitzen:

- fachliche Gesamt-/Produktbeschreibung des FIB,
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
| 1.1 | 12.09.2026 | Auditstatus, offene Primärquellen und Folge-Issues #11/#12 verankert; Repository-Grenze zum Echtbetrieb präzisiert |
| 1.0 | 12.09.2026 | Dokumentationslandkarte, Governance-Verknüpfung, Primärquellen und Dokumentationsschuld eingeführt |
