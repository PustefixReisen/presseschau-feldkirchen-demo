# Feldkirchen im Blick – Übergabe Demonstrator → Echtsystem

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.0 | 29.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## 1. Zweck

Dieses Dokument bildet den **verbindlichen Übergabestand** vom abgeschlossenen FIB-Demonstrator zum neu aufzubauenden Echtsystem.

Der Demonstrator bleibt erhalten als:

- fachliche Referenz,
- visuelle Referenz,
- Testfall- und Beispielsammlung,
- Nachweis bisheriger Entscheidungen,
- Quelle für zu migrierende Inhalte und Beziehungen.

Er wird **nicht** als technische Produktivbasis fortentwickelt.

Das Echtsystem wird in einem neuen Projekt und mit eigener technischer Struktur aufgebaut. Maßgeblich sind die dokumentierten fachlichen und organisatorischen Entscheidungen; demonstratorspezifische Provisorien werden nicht ungeprüft übernommen.

---

## 2. Zielbild des Echtsystems

FIB ist ein öffentliches Informationsangebot von BÜNDNIS 90/DIE GRÜNEN Feldkirchen.

Es soll:

- lokale Entwicklungen verständlich und quellengebunden darstellen,
- Sitzungen, Vorlagen, Beratungen und Beschlüsse sauber unterscheiden,
- länger laufende Themen fortschreiben,
- relevante Entwicklungen außerhalb Feldkirchens mit nachvollziehbarem lokalen Bezug einordnen,
- Sachinformation und grüne politische Einordnung klar trennen,
- über „Mehr wissen?“ zusätzliche Hintergründe und Zusammenhänge erschließen,
- im digitalen und analogen Raum Reichweite erzeugen,
- freiwillige Bindung über PWA, Push, Newsletter und weitere Kanäle ermöglichen,
- mit geringem laufendem Redaktionsaufwand betreibbar bleiben,
- und modellunabhängig aufgebaut sein.

Grundsatz:

> **Die Meldung oder das Thema ist der Einstieg, nicht das Ende des Informationsangebots.**

---

## 3. Fachliche Struktur, die übernommen wird

Das Echtsystem übernimmt die drei öffentlichen redaktionellen Ebenen:

1. **Presseschau / Beiträge** – konkrete neue Entwicklungen,
2. **Sitzungen** – Beratungs- und Entscheidungskontext,
3. **Themen** – länger laufende Sachzusammenhänge.

Zusätzlich bestehen:

- **Quellen**,
- **Bezugsobjekte** mit stabilen IDs und Aliasnamen,
- **„Mehr wissen?“** als Vertiefungsebene,
- **„Unsere Einordnung“** als klar getrennte politische Bewertung,
- strukturierte Kategorien, Orte und fachliche Schlagworte,
- Aktualisierungs- und Versionsinformationen.

Eine öffentlich sichtbare eigene Rubrik „Trends“ wird **nicht** übernommen. Trend-/Stoffbeobachtung bleibt gegebenenfalls interne Rechercheunterstützung.

---

## 4. Verbindliche redaktionelle Regeln

Zu übernehmen sind insbesondere:

- direkte RIS-Beschlussvorlagen bevorzugen,
- Sitzungsliste nur als Fallback verwenden,
- Beschlussvorlage und Beschluss nicht verwechseln,
- Quelldatum = tatsächliches Veröffentlichungs-/Freigabedatum,
- bei Aktualisierung eines älteren Beitrags Hinweis:
  `Aktualisierung vom TT.MM.JJJJ: [Stichwort].`
- Sachinformation und „Unsere Einordnung“ klar trennen,
- Positionen als Positionen kennzeichnen,
- Unsicherheiten sichtbar machen,
- mittelbare/erweiterte Relevanz nur mit nachvollziehbarem Feldkirchen-Bezug,
- erweiterte Relevanz bleibt Minderheit; Arbeitsgrenze derzeit etwa 30 %,
- Quellen konkret und nachvollziehbar angeben,
- keine Verknüpfung von Bezugsobjekten allein aufgrund von Volltexttreffern,
- interne Such-/Filterlogik auf strukturierten Feldern aufbauen.

---

## 5. „Mehr wissen?“ – Sollzustand

„Mehr wissen?“ wird übernommen als optionale Vertiefungsebene.

Grundregeln:

- keine feste Zahl von Fragen,
- nur Fragen mit zusätzlichem Erkenntniswert,
- keine bloße Wiederholung des Beitrags,
- Fragen aus dem vollständigen strukturierten Kontext erzeugen,
- vorgeschlagene Fragen im Echtsystem in der Regel vorab erzeugen und persistent speichern,
- freie Besucherfragen dürfen eine Live-KI-Abfrage auslösen,
- vorbereitete Antworten können vorab erzeugt, gespeichert und gecacht werden,
- Quellen werden mit ihrer Funktion ausgewiesen,
- Fakten und politische Einordnung bleiben getrennt,
- Unsicherheit und Reifegrad werden sichtbar gemacht.

Quellenrollen umfassen insbesondere:

- Ausgangsmeldung,
- Kontext,
- lokaler Kontext,
- regionaler Kontext,
- Fach-/Rechtsrahmen,
- Praxisbeispiel,
- Pressebericht,
- Position/Akteur,
- FIB-Zusammenhang,
- Themenkontext.

Die im Demonstrator verwendeten Browser-Heuristiken zur Frageerzeugung gelten nur als Übergangslösung und werden **nicht** als Zielarchitektur übernommen.

---

## 6. Modellunabhängigkeit

Modellunabhängigkeit ist verbindliches Architektur- und Qualitätsziel.

Reihenfolge:

1. **technische Geschäftsregel**, wenn formal abbildbar,
2. **explizite modellübergreifende KI-Regel**, wenn semantische Verarbeitung nötig ist,
3. **Modellurteil** nur dort, wo unvermeidbar.

Vor produktivem Modell- oder Anbieterwechsel wird mit festem Testkorpus geprüft.

Qualitätsdimensionen umfassen insbesondere:

- Faktentreue,
- Quellenpräzision,
- Quellenfunktion,
- Vollständigkeit,
- Unsicherheitsmanagement,
- Neutralität der Sachinformation,
- Trennung von Ebenen,
- Relevanz und Verständlichkeit,
- Fragequalität,
- Nicht-Redundanz,
- Hintergrundabdeckung,
- Regeltreue,
- Kosten.

---

## 7. Zielarchitektur – bereits festgelegte Leitplanken

Bevorzugte Architektur:

- GitHub für Code, Regeln und Projektdokumentation,
- Supabase/PostgreSQL für persistente Fachdaten,
- Supabase Storage für Bilder und Dateien,
- Redaktions-Web-App,
- serverseitige KI-/Provider-Anbindung,
- öffentliche FIB-Webseite,
- Progressive Web App (PWA),
- organisationsgebundene Produktivkonten.

Produktive KI-Schlüssel dürfen nicht im Browser liegen.

Produktive Konten, Abrechnung und Secrets sollen der GRÜNEN Ortsgruppe zugeordnet sein. Persönliche Konten dürfen kein Single Point of Failure sein.

Mindestens zwei Personen benötigen ausreichende technische Zugriffsrechte.

---

## 8. Rollen und Betrieb

Aktuell vorgesehen:

| Rolle | Technik | Redaktion |
|---|:---:|:---:|
| NN 1 | ✓ | ✓ |
| NN 2 | ✓ | ✓ |
| NN 3 | – | ✓ |
| NN 4 | – | ✓ |

Grundsätze:

- NN 1 und NN 2 sind gegenseitige technische Vertretung,
- alle vier können je nach Berechtigung redaktionell prüfen/freigeben,
- Administration, Secrets, Deployment, Backup/Restore und Providerwechsel dürfen nicht an einer Einzelperson hängen,
- Dokumentation wird als Teil der Umsetzung aktualisiert, nicht als separater Redaktionsprozess.

---

## 9. Redaktionssystem – Sollfunktionen

Das Echtsystem benötigt ein internes Redaktionssystem für:

- Fundstellen / Quellenmonitor,
- Beitragsentwürfe,
- Themen und Sitzungen,
- Bezugsobjekte,
- Quellen und Quellenrollen,
- „Mehr wissen?“-Fragen und vorbereitete Antworten,
- „Unsere Einordnung“,
- Bilder,
- Freigabe,
- Veröffentlichung,
- Aktualisierung,
- Marketing-/Verbreitungsranking,
- Newsletter-/Mastodon-/Push-Teaser,
- QR-Code-Erzeugung,
- technisches Monitoring,
- Kostenübersicht,
- kompaktes internes Dashboard.

Grundsatz für das Dashboard:

> **small and simple**

Es wird automatisch erzeugt und soll möglichst auf eine Seite passen.

---

## 10. Veröffentlichung und Nutzerfunktionen

Verbindlich vorgesehen:

- responsive öffentliche Website,
- installierbare PWA,
- eigenes App-Icon,
- „Neu seit letztem Besuch“ gerätebezogen ohne Benutzerkonto,
- Web Push nur nach Opt-in,
- Präferenzen für Themen/Häufigkeit soweit sinnvoll,
- Teilen,
- Drucken/PDF,
- stabile Direktlinks,
- funktionierende Social Previews,
- Info-/Disclaimer-Funktion je Beitrag,
- kein Footer als primärer Disclaimer-Zugang.

Ein Badge am App-Icon soll nur soweit unterstützt werden, wie Betriebssystem/Launcher dies ermöglichen.

---

## 11. SEO / Auffindbarkeit

Das SEO-Konzept A–E ist fachlich abgeschlossen.

Im Echtsystem umzusetzen:

- eigene stabile URLs für Landing Page, Themen, Beiträge und Sitzungen,
- Themenseite als langfristige Hauptseite eines dauerhaften Sachverhalts,
- sprechende URLs,
- Seitentitel,
- Meta-Descriptions,
- H1/H2-Regeln,
- interne Verlinkung,
- Canonical-Tags,
- Sitemap,
- robots/index/noindex,
- strukturierte Daten,
- Open Graph,
- Redirects,
- technische SEO-Prüfungen,
- Search Console,
- spätere Baseline über 3–6 Monate.

SEO-Struktur wird technisch abgesichert und darf nicht von einer KI-API abhängen.

Primärquelle:
`docs/FIB_SEO-und-Auffindbarkeit.md`

---

## 12. Marketing, Reichweite und Bindung

FIB wirkt in **zwei Räumen: digital und analog**.

Digital:

- GRÜNE Homepage,
- Suchmaschinen,
- bestehender Newsletter,
- eigener FIB-Newsletter,
- Mastodon,
- PWA,
- Web Push,
- persönliche digitale Weitergabe,
- QR-verlinkte Einstiege.

Analog:

- persönliche Gespräche,
- direkte Ansprache,
- Vereine,
- Initiativen,
- örtliche Multiplikatoren,
- Veranstaltungen,
- offene Treffen,
- Infostände,
- FIB-Kärtchen,
- FIB-Postkarte.

Grundidee:

- Reichweite bringt Menschen zu FIB,
- Bindung sorgt für freiwillige Wiederkehr.

Marketing-/Verbreitungsranking:

- 0 = nicht aktiv teilen,
- 1 = teilenswert,
- 2 = aktiv verbreiten,
- 3 = FIB-Aufmacher.

Instagram wird nicht als regulärer FIB-Kanal priorisiert.

Primärquelle:
`docs/FIB_Marketing-und-Kommunikation.md`

---

## 13. Erfolgsmessung

Die Erfolgskontrolle beantwortet drei Fragen:

1. Wird FIB gefunden und genutzt?
2. Hilft FIB tatsächlich weiter?
3. Bleibt FIB mit vertretbarem Aufwand und Kosten betreibbar?

Das interne Dashboard im Redaktionssystem soll kompakt zeigen:

- Reichweite,
- Suchmaschinen-Auffindbarkeit,
- meistgenutzte Inhalte,
- „Mehr wissen?“-Nutzung,
- Quellenklicks,
- Bindung über PWA/Push/Newsletter,
- Verbreitung nach Kanal,
- Fehler/Korrekturen,
- redaktionellen Aufwand,
- KI-/Betriebskosten.

In den ersten 3–6 Monaten wird eine Baseline aufgebaut. Erst danach werden gegebenenfalls Zielwerte festgelegt.

---

## 14. Kosten- und KI-Betriebsmodell

Zu unterscheiden sind:

- Besucherkosten,
- Redaktionskosten,
- Hintergrund-/Vorabgenerierung.

Grundsätze:

- normales Lesen verursacht keine KI-Kosten,
- gespeicherte Antworten verursachen beim späteren Lesen keine erneuten Modellkosten,
- bekannte Quellen möglichst direkt abrufen statt kostenpflichtige Websuche einzusetzen,
- freie Besucherfragen können Live-KI/Websuche nutzen,
- Kosten protokollieren,
- Limits konfigurierbar machen,
- Provider vor Produktion anhand Qualität und Kosten vergleichen,
- Preisannahmen vor Go-live aktualisieren.

Primärquelle:
`docs/FIB_KI-Kosten_und_Betriebsmodell.md`

---

## 15. Demonstrator → Echtsystem: Was bleibt, was wird ersetzt?

| Bereich | Demonstrator | Echtsystem |
|---|---|---|
| Datenhaltung | JSON-Dateien in GitHub | persistente PostgreSQL-Datenbank |
| Beiträge/Themen/Sitzungen | statisch synchronisiert | Datenbankobjekte mit Versionen/Status |
| Bezugsobjekte | `data/bezuege.json` | strukturierte Tabelle + Beziehungen |
| Bilder | statische Bibliothek/Assets | Storage + Metadaten |
| Redaktion | Entwicklungs-/Demoablauf | eigenes Redaktionssystem |
| Freigabe | nicht voll produktiv | verbindlicher Workflow |
| Benutzer/Rollen | nicht produktiv | Auth + Rollen/Rechte |
| Veröffentlichung | GitHub Pages | produktive Veröffentlichung |
| Fragen „Mehr wissen?“ | Demo teilweise heuristisch | persistent aus vollständigem Kontext |
| freie KI-Fragen | Demo-Edge-Function | produktiv abgesicherter Dienst |
| Quellenmonitor | teilweise/konzeptionell | produktiv integriert |
| SEO | Konzept / Demo nur teilweise | vollständig technisch umgesetzt |
| PWA/Push | Konzept | produktive Funktion |
| Newsletter/Mastodon | Konzept | produktive Integration nach Priorität |
| Dashboard | nicht produktiv | intern im Redaktionssystem |
| Kostenkontrolle | Test-/Konzeptstand | produktiv mit Limits/Monitoring |
| Accounts | Entwicklungsumgebung | organisationsgebunden |
| Backup/Restore | kein Produktivstandard | verbindlicher Betriebsprozess |
| Monitoring | begrenzt | produktiv erforderlich |

---

## 16. Demonstratorspezifische Provisorien, die nicht übernommen werden

Nicht als Zielarchitektur übernehmen:

- GitHub Pages als Produktiv-Persistenzmodell,
- JSON-Dateien als primäre Fachdatenbank,
- historisch gewachsene manuelle Update- und Synchronisationslogik,
- Browser-Heuristiken als primäre „Mehr wissen?“-Frageerzeugung,
- dynamisch nur im Browser erzeugte fachliche Inhalte ohne Persistenz,
- persönliche Produktiv-Secrets oder private Einzelkonten als Betriebsbasis,
- Cache-/Versionsparameter als Ersatz für stabile öffentliche URLs,
- Demonstrator-spezifische Workarounds, die nur wegen statischer Auslieferung nötig waren.

---

## 17. Inhalte und Daten, die migriert werden sollen

Zu prüfen und grundsätzlich zu übernehmen sind:

- vorhandene Beiträge,
- Themen,
- Sitzungen,
- Quellen,
- Bezugsobjekte,
- Beziehungen zwischen diesen Objekten,
- Bilder und Bildmetadaten,
- Aktualisierungshistorie,
- „Mehr wissen?“-Fragen soweit fachlich aktuell,
- relevante vorbereitete Antworten soweit aktuell und belegbar,
- Marketing-/Relevanzmetadaten,
- fachliche Testfälle.

Vor Migration ist ein Datenqualitätscheck vorzusehen.

---

## 18. Noch in der Projektgründungsphase zu klären

Nicht alle Produktiventscheidungen sind bereits endgültig festgelegt.

In der Projektgründungsphase müssen insbesondere verbindlich entschieden bzw. bestätigt werden:

- endgültiges Hosting- und Deploymentmodell,
- öffentliches URL-/Routingmodell,
- produktive Supabase-/Organisationsstruktur,
- Authentifizierung und konkretes Rollen-/Rechtemodell,
- Freigabestatus und Workflow,
- Backup-/Restore-Verfahren,
- Monitoring und Alarmierung,
- Datenschutz-/Logging-Konzept,
- genaue Push-Technik und Präferenzspeicherung,
- Newsletter-Versanddienst,
- Mastodon-Produktiventscheidung,
- Signal: aufnehmen oder verwerfen,
- Provider-/Modellwahl für Startbetrieb,
- Kostenlimits,
- Migrationsverfahren Demonstratordaten → Echtsystem,
- MVP-Abgrenzung,
- Go-live-Abnahmekriterien.

---

## 19. Projektgründungsphase im neuen Projekt

Das neue Projekt beginnt ausdrücklich **nicht mit Programmierung**, sondern mit der vereinbarten Projektgründungsphase.

Mindestens zu bearbeiten:

1. Zweck und Scope / erste Ausbaustufe,
2. Nutzergruppen,
3. Aufwandstreiber,
4. Plattform und Hosting,
5. Online-/Offline-Fähigkeit,
6. Datenhaltung,
7. Authentifizierung,
8. Rollen und Rechte,
9. Verschlüsselung / Schutzbedarf,
10. Programmiersprache / Framework / Stack,
11. Deployment,
12. Backup / Restore,
13. Monitoring,
14. UI-/Designstandards,
15. Übernahme zentraler Governance-Regeln,
16. Dokumentationsstruktur,
17. Repository-Struktur,
18. Roadmap,
19. Demonstrator-vs-Echtsystem-Matrix,
20. MVP und erster Entwicklungsschritt.

Für zentrale Plattform-/Governance-Regeln wird je Punkt festgehalten:

- unverändert übernommen,
- projektspezifisch ergänzt,
- bewusst abweichend,
- nicht anwendbar.

Nach der Gründungsphase folgt ein kurzer Gründungsaudit.

---

## 20. Maßgebliche Primärdokumente des Demonstrators

Für den Übergang sind insbesondere relevant:

- `docs/FIB_Management-Approach.md` – Gesamtsicht,
- `docs/FIB-Inhaltliches-Konzept.md` – fachliche Ausrichtung,
- `docs/FIB_Mehr_wissen_Assistent.md` – Vertiefungslogik,
- `docs/FIB_Modellunabhaengigkeit_und_Qualitaetspruefung.md` – KI-/Modellqualität,
- `docs/FIB_KI-Kosten_und_Betriebsmodell.md` – Kosten/Betrieb,
- `docs/FIB_Marketing-und-Kommunikation.md` – Marketing, analoger/digitaler Raum,
- `docs/FIB_SEO-und-Auffindbarkeit.md` – SEO,
- `docs/FIB-Quellenmonitor.md` – Quellenmonitor fachlich,
- `docs/FIB-Quellenmonitor-Architektur.md` – Quellenmonitor technisch,
- `docs/FIB_Frontend_und_Darstellung.md` – UI-/Darstellungsregeln,
- `docs/Dokumentation.md` – Dokumentationslandkarte,
- `docs/Roadmap.md` – Demonstrator-Roadmap und historische Entwicklungsentscheidungen.

Das Echtsystem erhält eine **eigene Dokumentationslandkarte**. Inhalte werden nicht unkontrolliert dupliziert; nach Übernahme wird festgelegt, welche Dokumente im neuen Projekt zu produktiven Primärquellen werden.

---

## 21. Referenzen

Demonstrator-Repository:

`PustefixReisen/presseschau-feldkirchen-demo`

Demonstrator:

`https://pustefixreisen.github.io/presseschau-feldkirchen-demo/`

Das neue Echtsystem-Projekt soll diesen Stand als Ausgangspunkt verwenden, den Demonstrator aber technisch nicht fortschreiben.

---

## 22. Starttext für das neue ChatGPT-Projekt

Empfohlener Starttext:

> Dieses Projekt entwickelt das Echtsystem von „Feldkirchen im Blick (FIB)“. Der Demonstrator ist abgeschlossen und dient nur noch als fachliche, visuelle und historische Referenz. Maßgeblicher Übergabestand ist `docs/FIB_Uebergabe_Echtsystem.md` im Repository `PustefixReisen/presseschau-feldkirchen-demo`. Zu Beginn wird die vereinbarte Projektgründungsphase durchgeführt. Vor Programmierung werden Demonstrator-vs-Echtsystem, MVP, Zielarchitektur, Datenhaltung, Authentifizierung, Rollen/Rechte, Betrieb, Backup/Restore, Datenschutz, Deployment und Governance verbindlich geklärt.

---

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 1.0 | 29.09.2026 | Konsolidierte Übergabe vom abgeschlossenen Demonstrator zum neu aufzubauenden Echtsystem erstellt. |
