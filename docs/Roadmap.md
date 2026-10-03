# Roadmap – Feldkirchen im Blick / Demonstrator

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 2.2 | 03.10.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Statusmodell

Es gelten die zentralen Roadmap-Status aus `PustefixReisen/pustivo/docs/governance/Dokumentenpflege.md`.

## Aktueller Stand

| Phase | Status | Ergebnis / nächster Schritt |
|---|---|---|
| Demonstrator und Darstellung | **Abgeschlossen** | Demonstrator wird nicht weiter zur Produktivbasis ausgebaut; er bleibt fachliche, visuelle und historische Referenz für das neue Echtsystem. |
| Quellenmonitor / Rechercheunterstützung | **Teilweise umgesetzt** | Fach- und Architekturunterlagen vorhanden; produktive Integration noch nicht als Echtbetrieb nachgewiesen |
| „Mehr wissen?“ / FIB-Assistent | **KI-Anbindung vorbereitet** | Adaptive Hintergrundfragen FIB-weit; Supabase Edge Function und OpenAI-Webrecherche technisch angebunden; Aktivierung nach Hinterlegung des serverseitigen OpenAI-Secrets |
| KI-Kostenmodell / Providervergleich | **Grundlage dokumentiert** | Besucher-, Redaktions- und Vorabgenerierungskosten für OpenAI, Mistral, Grünerator und weitere Kandidaten vergleichen; reale Demonstratorwerte nachziehen; Produktivabrechnung in OV-Account überführen |
| Management Approach / Marketing | **Konzept weitgehend vollständig** | Marketing in eigenes Primärdokument ausgelagert; vollständige Kanalliste dokumentiert; offene Entscheidungen betreffen vor allem Mastodon/Signal und produktive Umsetzung |
| SEO / Auffindbarkeit | **Konzept vollständig** | Schritte A–E dokumentiert: Seitentypen, Onpage-Standards, technische Umsetzung, redaktionelle Regeln und Erfolgsmessung; technische Realisierung erfolgt im Echtsystem |
| Projektdokumentation konsolidieren | **In Arbeit** | Allgemein verständliches inhaltliches Konzept angelegt; fachliche/redaktionelle Primärquellen über #11 weiter vervollständigen |
| Echtbetriebsarchitektur | **In Arbeit** | Architektur-, Betriebs-, Sicherheits-, Daten-, Deployment- und Backupentscheidungen über #12 verbindlich konsolidieren |
| Übergabe an Echtsystem | **Abgeschlossen** | Konsolidierter Übergabestand in `docs/FIB_Uebergabe_Echtsystem.md`; Entwicklung wird in neuem Projekt mit Projektgründungsphase fortgesetzt. |
| **G2.5 Transfer-Audit Demonstrator → Echtsystem** | **In Arbeit** | Demonstrator-Erkenntnisse, Betriebs-/Fehlerfälle, Übergabedokumente und relevante frühere FIB-Chats gegen die Echtsystem-Regeln prüfen; fehlende Regeln unmittelbar übernehmen; Transfer-Gate vor fachlicher Fortsetzung von G3. |
| Produktivsetzung | **Neues Projekt** | Planung und Umsetzung erfolgen im separaten FIB-Echtsystem-Projekt. |

## Audit-Ergebnis 12.09.2026

Der Bestandsaudit ist abgeschlossen. Ergebnis: **wesentliche Lücken**.

Positiv vorhanden sind KI-Leitfaden, Frontend-/Darstellungsdokumentation, Quellenmonitor-Dokumente, Dokumentationslandkarte und Roadmap.

Wesentliche offene Punkte:

1. **#11 Fachliche/redaktionelle Primärquellen vollständig kanonisch verankern.**
2. **#12 Echtbetriebsarchitektur und Betriebsverfahren verbindlich festlegen.**

Der Demonstrator bleibt bis dahin klar vom späteren Echtbetrieb getrennt.

## G2.5 – Transfer-Audit Demonstrator → Echtsystem

G2.5 wurde am 03.10.2026 nachträglich als verbindlicher Zwischenschritt eingeführt. Anlass war die Prüfung, ob die im aufwändigen Demonstratorbetrieb entstandenen fachlichen, redaktionellen, funktionalen und technischen Erkenntnisse vollständig in das Echtsystem übernommen wurden.

### Ziel

Der Demonstrator wird als **Anforderungs- und Referenzquelle** behandelt. Kein fachlich relevanter Testbefund soll allein deshalb verloren gehen, weil er nur in einem Spezialdokument, einem Betriebs-/Fehlerfall oder einem früheren Chat festgehalten wurde.

### Prüfquellen

G2.5 berücksichtigt mindestens:

1. kanonische GitHub-Dokumentation,
2. Demonstrator und persistente Datenbestände,
3. Betriebs-, Update- und Fehlerprotokolle,
4. Übergabe- und Spezialkonzepte,
5. relevante frühere FIB-Chats als Lückenfinder.

Frühere Chats sind dabei **keine kanonische Projektdokumentation**. Wiedergewonnene Erkenntnisse werden erst nach fachlicher Prüfung in GitHub-Regeln, Anforderungen oder Regressionstests überführt.

### Transfer-Matrix

Jede relevante Erkenntnis erhält einen Status:

- **ÜBERNOMMEN**,
- **ANGEPASST**,
- **OFFEN**,
- **NICHT ÜBERNEHMEN**.

Eine Anforderung gilt erst als vollständig transferiert, wenn mindestens geklärt sind:

1. fachliche Regel bzw. Ziel,
2. kanonischer Dokumentationsort,
3. notwendige Daten-/Prozessabbildung,
4. technische Umsetzung bzw. Umsetzungsauftrag,
5. Referenz- oder Regressionstest.

### Transfer-Gate vor G3

G3 wird fachlich erst dann ohne Vorbehalt fortgeführt, wenn:

1. die relevanten Demonstrator-Erkenntnisse inventarisiert sind,
2. jede Anforderung in der Transfer-Matrix klassifiziert wurde,
3. fachlich kritische OFFEN-Punkte geschlossen oder bewusst verworfen wurden,
4. die kanonischen Echtsystem-Dokumente die gültigen Regeln enthalten,
5. Datenmodell und Redaktionsworkflow die benötigten Objekte und Zustände abbilden können,
6. die wesentlichen Demonstratorfälle als Regressionstests beschrieben sind,
7. konkurrierende bzw. veraltete Dokumentfassungen nicht mehr als gleichwertige Wahrheitsquelle erscheinen.

### Unmittelbare Regelübernahme in G2.5

Fehlende oder nur unvollständig transferierte Regeln werden **nicht auf eine spätere technische Phase verschoben**, sondern während G2.5 in die zuständigen kanonischen Echtsystem-Dokumente übernommen. Technische Detailumsetzungen können anschließend in G3/G4 geplant werden; die fachliche Anforderung muss jedoch vor dem Transfer-Gate verbindlich feststehen.

Aktuelle Audit-Dokumente:

- `docs/audits/2026-10-03_Transfer-Audit_Demonstrator-Echtsystem.md`
- `docs/audits/2026-10-03_Chat-Erinnerungs-Audit.md`
- `docs/projektgrundlagen/FIB_Echtsystem_Recherche_und_Relevanzregeln.md`

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
- strukturierte Such-/Filtermetadaten: Kategorien, Orte und fachliche Schlagworte getrennt speichern; Volltextsuche darf Kategorien nicht als versteckte Unterthemen-Tags behandeln,
- strukturierte Bezugsebene für konkrete wiederkehrende Objekte mit stabilen IDs, Aliasnamen und explizit geprüften Beziehungen zu Beiträgen und Themen; keine automatische Verknüpfung aus bloßen Volltexttreffern,
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

Die Arbeit am Demonstrator ist abgeschlossen.

Der nächste Schritt erfolgt im **neuen Projekt „FIB – Echtsystem“**:

1. Projektgründungsphase durchführen,
2. Übergabedokument als verbindlichen Ausgangsstand verwenden,
3. **G2.5 Transfer-Audit vollständig durchführen und fehlende Regeln übernehmen,**
4. Transfer-Gate bestätigen,
5. Demonstrator-vs-Echtsystem-Matrix abschließen,
6. MVP, Zielarchitektur, Rollen/Rechte, Betrieb und Migration festlegen,
7. Gründungsaudit,
8. **G3 Datenmodell und fachliche Systemstruktur fortführen,**
9. anschließend mit der technischen Umsetzung beginnen.

Offene historische Demonstrator-Issues werden dabei nicht automatisch als Produktiv-Backlog übernommen, sondern im neuen Projekt fachlich neu eingeordnet.

## Qualitätsziel: Modellunabhängigkeit

Für den Echtbetrieb ist Modellunabhängigkeit ein verbindliches Architektur- und Qualitätsziel. Fachliche Regeln sollen bevorzugt als technische Geschäftsregeln, strukturierte Datenmodelle oder explizite modellübergreifende KI-Regeln umgesetzt werden. Nur der verbleibende semantische Rest soll echtes Modellurteil bleiben.

Vor produktivem Modell- oder Anbieterwechsel wird ein **Modellabhängigkeits-Check** mit definierten FIB-Testfällen durchgeführt. Dabei wird geprüft, welche Funktionen modellunabhängig abgesichert sind, wo ein Modellurteil verbleibt und ob Abweichungen fachlich akzeptabel und transparent sind.

Primärdokument: `docs/FIB_Modellunabhaengigkeit_und_Qualitaetspruefung.md`.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 2.2 | 03.10.2026 | G2.5 Transfer-Audit Demonstrator → Echtsystem einschließlich Chat-Erinnerungs-Audit, unmittelbarer Regelübernahme und Transfer-Gate vor G3 als verbindlichen Roadmap-Schritt ergänzt. |
| 2.1 | 29.09.2026 | Demonstrator abgeschlossen; Übergabe an separates Echtsystem-Projekt mit konsolidiertem Übergabedokument und vorgeschalteter Projektgründungsphase festgelegt. |
| 2.0 | 28.09.2026 | „Mehr wissen?“ zum funktionalen KI-Testsystem erweitert: Supabase-Edge-Function, OpenAI-Webrecherche, freie Fragen und Kostenlimit vorbereitet. |
| 1.9 | 27.09.2026 | Bezugsebene vom B471-Test auf eine allgemeine datengetriebene Lösung erweitert. Acht initiale Bezugsobjekte angelegt; mehrere Bezüge pro Beitrag/Thema und automatische Frontend-Erzeugung aus `data/bezuege.json` umgesetzt. |
| 1.8 | 27.09.2026 | Modellunabhängigkeit als verbindliches Architektur- und Qualitätsziel aufgenommen; Modellabhängigkeits-Check und Teststrategie vor Modell-/Anbieterwechsel verankert. |
| 1.7 | 27.09.2026 | Bezugsebene unterhalb der redaktionellen Themen als Test eingeführt; B471 als erstes Objekt. Für den Echtbetrieb strukturierte Objekt-IDs, Aliasnamen und explizit geprüfte Beziehungen vorgesehen; Mehrwert-Schwelle verhindert Treffer aus bloßen beiläufigen Nennungen. |
| 1.6 | 27.09.2026 | Such- und Filterlogik als Anforderung für den Echtbetrieb ergänzt; Kategorien, Orte und fachliche Schlagworte werden getrennt modelliert. Themenbildungslogik nach dem übersehenen Sachstrang Tempo 30/B471 nachgeschärft. |
| 1.5 | 27.09.2026 | Testweise Trend-Rubrik wieder aus dem öffentlichen FIB entfernt. Übergreifende kommunalpolitische Trendanalyse wird künftig als interne Stoffsammlung außerhalb von FIB behandelt; öffentliche FIB-Struktur bleibt Presseschau/Sitzungen/Themen. |
| 1.4 | 26.09.2026 | Testweise Rubrik `Trends` und eigener Trend-Datenbestand vorübergehend in den Demonstrator aufgenommen; allgemein verständliches inhaltliches Konzept als neue Diskussionsgrundlage berücksichtigt. |
| 1.3 | 26.09.2026 | PWA-Installation, App-Icon, Benachrichtigungen und Ungelesen-Zähler/Badge als verbindliche Anforderungen für den Echtbetrieb ergänzt; technische Detailentscheidungen auf die spätere Umsetzungsplanung vertagt. |
| 1.2 | 21.09.2026 | Verbindlichen Übernahmecheck Demonstrator → Echtsystem ergänzt; fachliche Parität mit dem dokumentierten Demonstratorstand als Abnahmekriterium festgelegt. |
| 1.1 | 12.09.2026 | Bestandsaudit abgeschlossen; Folgearbeiten #11 und #12 als verbindliche nächste Schritte verankert |
| 1.0 | 12.09.2026 | Roadmap als aktives Steuerungsdokument eingeführt |
