# Dokumentationslandkarte – Feldkirchen im Blick / Demonstrator

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.9 | 29.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Zweck

Diese Datei ist die verbindliche Dokumentationslandkarte für das Repository `presseschau-feldkirchen-demo`. Sie legt fest, welche vorhandenen Dokumente für welche Sachverhalte primär zuständig sind und welche Dokumentationslücken noch bestehen.

## Zentrale Governance

Für dieses IT-Projekt gelten die zentralen Governance-Regeln aus `PustefixReisen/pustivo` für Dokumentation, Dokumentenpflege, Dokumentationsstruktur, Audit, Projektmoderation, Kommunikation/Auslöser und Projektgründung.

Diese Regeln gelten unabhängig davon, dass FIB nicht zwingend auf der pustivo-Plattform betrieben wird.

## Primäre Quellen im Repository

| Themenbereich | Primäre verbindliche Quelle | Hinweis |
|---|---|---|
| Übergabe Demonstrator → Echtsystem | `docs/FIB_Uebergabe_Echtsystem.md` | verbindlicher konsolidierter Übergabestand für den Start des neuen Echtsystem-Projekts; benennt Übernahme, Ablösung, Migration und offene Gründungsentscheidungen |
| Management Approach / Gesamtsicht für Kolleginnen und Kollegen | `docs/FIB_Management-Approach.md` | übergreifende Primärquelle für Zielbild, Suchraum, Rollen, Betrieb, Kosten, Qualität, Erfolgskontrolle, Marketingrahmen und Weiterentwicklung |
| inhaltliche Ausrichtung / fachliches Detailkonzept | `docs/FIB-Inhaltliches-Konzept.md` | fachliche Detailquelle für Zielbild, Zweck, Reichweite und Abgrenzung von Presseschau, Sitzungen und Themen |
| „Mehr wissen?“ / FIB-Assistent | `docs/FIB_Mehr_wissen_Assistent.md` | verbindliche Primärquelle für Mehrwert-Schwelle, Anschlussfragen, Kontextpaket, funktionale Quellenrollen und Trennung zur politischen Einordnung |\n| Modellunabhängigkeit / KI-Qualitätsprüfung | `docs/FIB_Modellunabhaengigkeit_und_Qualitaetspruefung.md` | verbindliche Primärquelle für Trennung Geschäftsregeln / explizite KI-Regeln / Modellurteil, Modellabhängigkeits-Check und Modellwechsel-Teststrategie |
| KI-Kosten / produktive Betriebsverantwortung | `docs/FIB_KI-Kosten_und_Betriebsmodell.md` | verbindliche Primärquelle für Besucher- und Redaktionskosten, Anbieter-Preisvergleich, Cache-/Aktualitätsstrategie und organisatorische Eigentümerschaft der Produktivkonten |
| redaktionelle KI-Regeln / Quellenarbeit | `docs/projektgrundlagen/KI-Leitfaden_Homepage-Presseschau.md` | fachlich-redaktionelle Primärquelle für KI-gestützte Erstellung |
| Marketing und Kommunikation | `docs/FIB_Marketing-und-Kommunikation.md` | verbindliche Primärquelle für Marketingziele, Kanäle, Automatisierung, PWA/Push, Newsletter, Mastodon/Signal, Offline-Materialien und QR-Codes |
| SEO / Auffindbarkeit | `docs/FIB_SEO-und-Auffindbarkeit.md` | verbindliche Primärquelle für SEO-Ziele, Seitentypen, URL-/Meta-/Überschriftenregeln, interne Verlinkung, Canonical, strukturierte Daten und technische Auffindbarkeit |
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

Dieses Repository ist der **abgeschlossene Demonstrator**. Es bleibt als fachliche, visuelle und historische Referenz bestehen und wird nicht zur technischen Produktivbasis des Echtsystems weiterentwickelt.

Das Echtsystem wird in einem **separaten Projekt / Produktivrepository** aufgebaut. Maßgeblicher Übergabestand ist `docs/FIB_Uebergabe_Echtsystem.md`. Das neue Projekt erhält eine eigene Dokumentationslandkarte und klärt in seiner Projektgründungsphase, welche bisherigen Primärquellen übernommen, referenziert oder ersetzt werden.

## Konfliktregel

Ein Sachverhalt wird nur in seiner Primärquelle verbindlich festgelegt. Andere Dokumente dürfen zusammenfassen oder referenzieren. Widersprüche werden als Dokumentationsdefekt behandelt und nicht durch stillschweigende Auswahl einer Fundstelle gelöst.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 1.9 | 29.09.2026 | Demonstrator als abgeschlossen markiert; separates Echtsystem-Projekt festgelegt und `FIB_Uebergabe_Echtsystem.md` als verbindlicher Übergabestand aufgenommen. |
| 1.8 | 28.09.2026 | `FIB_Marketing-und-Kommunikation.md` als eigene Primärquelle aufgenommen; Management Approach auf Kanalübersicht plus vollständige Printtexte reduziert. |
| 1.7 | 28.09.2026 | `FIB_SEO-und-Auffindbarkeit.md` als eigene Primärquelle aufgenommen; SEO-Details aus dem Management Approach ausgelagert. |
| 1.6 | 28.09.2026 | `FIB_Management-Approach.md` als übergreifende Primärquelle für Kolleginnen und Kollegen aufgenommen; inhaltliches Konzept bleibt fachliche Detailquelle. |
| 1.5 | 28.09.2026 | KI-Kosten- und Betriebsmodell als eigene Primärquelle aufgenommen; produktive Accounts und Abrechnung sollen bei der GRÜNEN Ortsgruppe liegen. |
| 1.4 | 27.09.2026 | Modellunabhängigkeit als eigenes Qualitäts- und Architekturthema in die Dokumentationslandkarte aufgenommen; neues Primärdokument für Modellabhängigkeits-Check und Modellwechsel-Tests verankert. |
| 1.3 | 27.09.2026 | Öffentliche Trend-Ebene aus der FIB-Dokumentation entfernt; interne Trend-/Stoffsammlung ausdrücklich außerhalb der öffentlichen FIB-Struktur verortet. |
| 1.3 | 27.09.2026 | Fachkonzept `FIB_Mehr_wissen_Assistent.md` als Primärquelle für die FIB-weite Vertiefungs- und Quellenlogik aufgenommen. |\n| 1.2 | 26.09.2026 | `FIB-Inhaltliches-Konzept.md` als allgemein verständliche Primärquelle für Zweck, Reichweite und die Ebenen Presseschau/Sitzungen/Themen aufgenommen; offene Dokumentationslücke auf technische Produkt-/Echtbetriebsbeschreibung eingegrenzt. |
| 1.1 | 12.09.2026 | Auditstatus, offene Primärquellen und Folge-Issues #11/#12 verankert; Repository-Grenze zum Echtbetrieb präzisiert |
| 1.0 | 12.09.2026 | Dokumentationslandkarte, Governance-Verknüpfung, Primärquellen und Dokumentationsschuld eingeführt |
