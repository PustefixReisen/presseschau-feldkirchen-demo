# Dokumentationslandkarte – Feldkirchen im Blick / Demonstrator

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.0 | 12.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

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
| Projektfortschritt / nächster Schritt | `docs/Roadmap.md` | neu als aktives Steuerungsdokument |
| Arbeitsregeln für KI-/Entwicklungsarbeit | `AGENTS.md` | lokale Ergänzung zur zentralen Governance |

## Erkannte Dokumentationslücken

Im aktuellen Repository fehlen beziehungsweise sind nicht eindeutig als primäre GitHub-Quellen vorhanden:

- ein vollständiges fachliches Gesamt-/Produktkonzept des FIB,
- eine eindeutige Architektur- und Betriebsbeschreibung für einen späteren Echtbetrieb,
- eine zusammengeführte Beschreibung von Referenzwissen, politischer Einordnung und Sprachregeln, soweit diese für die redaktionelle Produktion verbindlich sind,
- Backup-/Restore-, Deployment- und Administrationsregeln für den späteren Echtbetrieb.

Diese Punkte sind **Dokumentationsschuld** und werden im Bestandsaudit konkretisiert. Externe oder lokal vorhandene Dokumente müssen vor einem produktiven Echtbetrieb entweder als verbindliche GitHub-Quelle übernommen oder eindeutig referenziert werden.

## Repository-Rolle

Dieses Repository ist derzeit der **Demonstrator**. Entscheidungen für einen späteren Echtbetrieb dürfen nicht stillschweigend als bereits implementierter Demonstrator-Stand dargestellt werden. Falls der Echtbetrieb ein eigenes Repository erhält, bekommt dieses eine eigene Dokumentationslandkarte und verweist auf gemeinsam genutzte zentrale Standards.

## Konfliktregel

Ein Sachverhalt wird nur in seiner Primärquelle verbindlich festgelegt. Andere Dokumente dürfen zusammenfassen oder referenzieren. Widersprüche werden als Dokumentationsdefekt behandelt und nicht durch stillschweigende Auswahl einer Fundstelle gelöst.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 1.0 | 12.09.2026 | Dokumentationslandkarte, Governance-Verknüpfung, Primärquellen und Dokumentationsschuld eingeführt |
