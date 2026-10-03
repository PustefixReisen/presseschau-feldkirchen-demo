# FIB – Transfer-Audit Demonstrator → Echtsystem

**Stand:** 03.10.2026  
**Status:** verbindlicher Arbeitsstand / G2.5-Transfer-Audit  
**Zweck:** Sicherstellen, dass die im Demonstrator erarbeiteten fachlichen, redaktionellen, funktionalen und betrieblichen Anforderungen vollständig in das Echtsystem übernommen, bewusst angepasst oder ausdrücklich verworfen werden.

## 1. Anlass

Der Demonstrator war nicht nur eine Visualisierung, sondern ein Testsystem. Im Testbetrieb entstanden zahlreiche Regeln aus realen Fehlfunden, Rechercheproblemen, Darstellungsproblemen und redaktionellen Korrekturen. Diese Erkenntnisse dürfen beim Neuaufbau des Echtsystems nicht implizit oder nur über Chat-Erinnerungen weitergegeben werden.

Der konkrete Auslöser dieses Audits war die Frage, wo die Regeln zum erweiterten Suchraum dokumentiert sind, die z. B. den Beitrag zum autonomen On-Demand-Verkehr in München auffindbar machen sollen.

Die Prüfung ergab: Die Regeln sind in der kanonischen GitHub-Fassung des KI-Leitfadens bereits ausführlich dokumentiert (insbesondere 4.1.3 bis 4.1.6), fehlen aber in einer später datierten ODT-Fassung in der Projektbibliothek. Damit liegt nicht nur eine fachliche Transferfrage, sondern ein Dokumentlenkungs- und Versionsdriftproblem vor.

## 2. Grundsatz für den Transfer

Jede relevante Demonstrator-Erkenntnis erhält genau einen Status:

- **ÜBERNOMMEN** – im Echtsystem fachlich und technisch vorgesehen,
- **ANGEPASST** – bewusst verändert; Begründung dokumentiert,
- **OFFEN** – noch nicht vollständig in Echtsystem-Regel, Datenmodell, Prozess oder Test überführt,
- **NICHT ÜBERNEHMEN** – demonstratorspezifisches Provisorium; Entscheidung dokumentiert.

Eine Anforderung gilt erst als transferiert, wenn mindestens geklärt ist:

1. fachliche Regel bzw. Ziel,
2. Zielort der verbindlichen Dokumentation,
3. notwendige Daten-/Prozessabbildung,
4. technische Umsetzung bzw. Umsetzungsauftrag,
5. Referenz- oder Regressionstest.

## 3. Transfer-Gate vor Fortsetzung von G3

Die Projektgründungsphase gilt hinsichtlich des Demonstrator-Transfers erst als abgeschlossen, wenn:

1. alle relevanten Demonstrator-Dokumente und Testentscheidungen inventarisiert wurden,
2. jede Anforderung in der Transfer-Matrix klassifiziert ist,
3. alle fachlich kritischen OFFEN-Punkte geschlossen oder bewusst verworfen wurden,
4. die kanonischen Echtsystem-Dokumente die gültigen Regeln enthalten,
5. Datenmodell und Redaktionsworkflow die dafür benötigten Objekte und Zustände abbilden können,
6. die wesentlichen Demonstrator-Referenzfälle als Regressionstests beschrieben sind,
7. konkurrierende oder veraltete Dokumentfassungen nicht mehr als gleichwertige Wahrheitsquelle erscheinen.

Bis dieses Gate erfüllt ist, wird G3 nur dort fortgeführt, wo die Transferprüfung keine fachliche Vorentscheidung berührt.

## 4. Kanonische Dokumentation / Versionsdrift

### Befund TA-001 – konkurrierende Dokumentstände

**Priorität:** kritisch  
**Status:** OFFEN – organisatorisch zu bereinigen

Der GitHub-Leitfaden `docs/projektgrundlagen/KI-Leitfaden_Homepage-Presseschau.md` enthält bereits verbindliche Regeln, die in einer später datierten ODT-Fassung der Projektbibliothek fehlen. Beispiel: erweiterte Relevanz außerhalb Feldkirchens einschließlich Landeshauptstadt München, thematischer Bezug, Pilot-/Vergleichscharakter und mögliche zukünftige Bedeutung.

**Transferregel:** Für den Echtsystem-Aufbau ist GitHub die kanonische Quelle für verbindliche Projektdokumentation. Bibliotheks-/ODT-Fassungen dürfen nur synchronisierte Ausgaben oder ausdrücklich als Archiv/Arbeitskopie gekennzeichnete Dokumente sein. Ein späteres Datum allein macht eine Bibliothekskopie nicht zur führenden Fassung.

**Regressionstest / Kontrolle:** Eine Stichprobe zentraler Regeln muss in der kanonischen Quelle eindeutig auffindbar sein, ohne Rückgriff auf Chat-Erinnerungen.

## 5. Erste Transfer-Matrix

| ID | Demonstrator-Erkenntnis | Nachweis im Demonstratorbestand | Echtsystem-Status | Nächster Schritt / Referenztest |
|---|---|---|---|---|
| TA-010 | Erweiterter Suchraum / mittelbare und mögliche zukünftige Bedeutung | KI-Leitfaden 4.1.3–4.1.6; Management Approach Kap. 7; Übergabedokument Kap. 4 | **ANGEPASST / weitgehend übernommen** | Suchlogik im Echtsystem explizit aus Thema/Vorgang → Suchraum/Suchbegriffe ableiten. Referenz: autonomer On-Demand-Verkehr München. |
| TA-011 | Erweiterte Relevanz bleibt Minderheit, Arbeitsgrenze ca. 30 % | Übergabedokument Kap. 4; Management Approach 7.3 | **OFFEN in operativer Regel** | In Echtsystem-Geschäftsregel/Qualitätskontrolle übernehmen; nicht als starres Einzelbeitragskriterium, sondern Bestands-/Zeitraumskontrolle. |
| TA-012 | Rückblickende Suche für mittelbare/erweiterte Relevanz | Testentscheidung aus Demonstratorbetrieb | **OFFEN / zu präzisieren** | Rückblickfenster und Auslöser verbindlich definieren; bisheriger Arbeitsstand: sechs Monate. Referenz: externe Mobilitäts-/ADFC-Fälle. |
| TA-013 | Themenbezogene + themenunabhängige Entdeckung | KI-Leitfaden 4.1.3; Fachkonzept; Kiesgrund-Referenzfall | **ÜBERNOMMEN** | Regression: „Kiesgrund“ muss auch ohne vorher etablierten Suchbegriff als redaktioneller Rechercheauftrag verarbeitet werden können. |
| TA-014 | Direktprüfung bekannter Quellen statt allein Suchmaschine | KI-Leitfaden 4.1.1; Quellenmonitor | **ÜBERNOMMEN** | Regression: Parkraumkonzept – neue Unterseite/Dokumentänderung muss auch ohne Suchmaschinentreffer erkannt werden. |
| TA-015 | Beteiligungsaufrufe als eigenständige Entwicklung prüfen | KI-Leitfaden Vereine/Verbände/Beteiligung | **ÜBERNOMMEN** | Regression: ADFC-Fahrradklima-Test darf nicht wegen „nur Umfrage“ ausgesondert werden. |
| TA-016 | Bürgerinitiativen: Resonanz-/Gegenpositionssuche | KI-Leitfaden 4.3 | **ÜBERNOMMEN** | Regression: substanzielle BI-Aktivität löst Suche nach Reaktionen betroffener Akteure aus. |
| TA-017 | RIS: Beschlussvorlage ≠ Beschluss; direkte Vorlage bevorzugen; Datumsarten trennen | KI-Leitfaden 4.1.2, Sitzungsregeln; Übergabedokument | **ÜBERNOMMEN** | Regression: Hundewiese – Freigabe-/Veröffentlichungsdatum, Sitzungstermin und Beschlussstatus getrennt. |
| TA-018 | Aktualisierungen alter Beiträge: sichtbarer Hinweis nur bei neuem öffentlich belegtem Sachstand | KI-Leitfaden 5.1; Frontend 4.2 | **ÜBERNOMMEN** | Regression: mehrere Aktualisierungen; nur neueste im Untertitel, Historie separat; reine Fehlerkorrektur ohne Aktualisierungshinweis. |
| TA-019 | Terminologie der Primärquelle verwenden („Beschlussvorlage“ statt generischem „Sitzungsinformation“) | KI-Leitfaden 5.1 | **ÜBERNOMMEN** | Regression: RIS-Bezeichnungen bleiben in öffentlicher Darstellung korrekt. |
| TA-020 | Redaktion darf fehlende Aspekte/Vorgänge ergänzen; Ergänzung wird Rechercheauftrag | Themenkonzept; KI-Leitfaden Themen; Kiesgrund | **ÜBERNOMMEN** | Muss im Redaktionsworkflow und Datenmodell als expliziter Rechercheauftrag abbildbar sein. |
| TA-021 | Themen sind lernfähig und versioniert | Fachkonzept / KI-Leitfaden | **ÜBERNOMMEN** | Regression: nach redaktioneller Schärfung entsteht neue bestätigungspflichtige Themendefinition. |
| TA-022 | Wirkungsrollen und angemessene Gewichtung von Großvorgängen | Fachkonzept / KI-Leitfaden | **IN PRÜFUNG / G3** | Aktuelle G3-Entwicklung „Bedeutung für das Thema“ gegen Wirkungsrollen prüfen. Referenzen: BAB-Kreuz München-Ost, Radwegenetz, temporäre Beeinträchtigung. |
| TA-023 | „Mehr wissen?“: Meldung/Thema als Einstieg, nicht Ende | eigenes Fachkonzept; Übergabedokument | **ÜBERNOMMEN als Anforderung** | Datenmodell für Fragen, Antworten, Quellenrollen, Cache/Freigabe; Regression R088 autonomer On-Demand-Verkehr. |
| TA-024 | „Mehr wissen?“: Fragen adaptiv, bürgernah, nicht redundant, keine feste Zahl | Mehr-wissen-Fachkonzept | **ÜBERNOMMEN als Anforderung** | Tests für Fragequalität, Variationsregel, Anti-Redundanz und Übertragbarkeit. |
| TA-025 | Quellenrollen und präzise Fundstellen auch bei Sammeldokumenten | Mehr-wissen-Fachkonzept | **ÜBERNOMMEN als Anforderung** | Datenmodell muss Quellenrolle und ggf. Seite/Abschnitt/Fundstelle speichern können. |
| TA-026 | Bezugsobjekte mit stabilen IDs, Aliasen und nur explizit geprüften Beziehungen | Frontend-/Darstellungskonzept; Übergabe | **ÜBERNOMMEN als Anforderung** | G3-Datenmodell muss Objekt/Alias/Beziehung getrennt abbilden; Volltexttreffer allein erzeugt keine Beziehung. |
| TA-027 | Suche: Kategorie, Ort, Schlagworte und Freitext getrennt | KI-Leitfaden 3.5; Frontend 7.1 | **ÜBERNOMMEN** | Regression: Kategorie „Kommunalpolitik & Beteiligung“ darf Wahlbeitrag nicht allein bei Suche „Beteiligung“ finden. |
| TA-028 | stabile Direktlinks / treffgenaue Navigation / Browser-Zurück | Frontendkonzept | **ÜBERNOMMEN als UX-Anforderung** | Referenztest: geteilter Beitrag öffnet direkt Ziel; mobile Zurück-Navigation bei Bezugsdialogen bleibt konsistent. |
| TA-029 | Info-/Disclaimer-Funktion je Beitrag; Footer nicht primärer Zugang | Übergabedokument | **ÜBERNOMMEN als UX-Anforderung** | In Frontend-Spezifikation des Echtsystems verankern. |
| TA-030 | PWA, App-Icon, „Neu seit letztem Besuch“ gerätebezogen ohne Konto, Push Opt-in | Übergabedokument | **ÜBERNOMMEN als Produktanforderung** | Daten-/Clientkonzept und Datenschutzprüfung; Badge nur soweit Plattform unterstützt. |
| TA-031 | SEO: stabile URLs, Open Graph, Canonical, Sitemap, Redirects, strukturierte Daten | SEO-Konzept; Übergabedokument | **ÜBERNOMMEN als Produktanforderung** | technische Abnahmetests vor Go-live. |
| TA-032 | Reichweite + Bindung im digitalen und analogen Raum | Marketingkonzept; Übergabedokument | **ÜBERNOMMEN als Betriebsanforderung** | spätere Umsetzungsplanung; Multiplikatoren/Vereine und persönliche Kontakte ausdrücklich erhalten. |
| TA-033 | Erfolgsmessung mit Baseline statt vorschneller Zielwerte | Übergabedokument | **ÜBERNOMMEN als Betriebsanforderung** | Dashboard-Datenmodell; Baseline 3–6 Monate nach Start. |
| TA-034 | Modellunabhängigkeit und fester Testkorpus | Qualitätskonzept; Übergabedokument | **ÜBERNOMMEN** | Referenzfälle dieses Audits werden Bestandteil des Modell-/Regressionstestkorpus. |

## 6. Referenzfälle als Regressionstestkorpus

Mindestens folgende Demonstratorfälle werden als dauerhafte Referenztests vorgesehen:

1. **Autonomer On-Demand-Verkehr München** – erweiterter Suchraum, mögliche zukünftige Bedeutung, Wissenschaft/Technik, „Mehr wissen?“.
2. **ADFC-Fahrradklima-Test** – Beteiligungsaufruf und Quellenabdeckung.
3. **Parkraumkonzept** – Direktprüfung bekannter Quellen und Dokumentänderungen.
4. **Hundewiese** – Beschlussvorlage, Datumslogik, Aktualisierung, Status und Quelle.
5. **Kiesgrund** – redaktionell ergänzter, zuvor nicht erkannter Großvorgang; themenunabhängige Entdeckung.
6. **BAB-Kreuz München-Ost** – prägender Großvorgang / Bedeutung für Mobilitätsthema.
7. **Radwegenetz** – Gestaltungsbeitrag im selben Thema.
8. **Bürgerinitiative** – Resonanz-/Gegenpositionssuche.
9. **Geteilter Beitrag / Direktlink** – treffgenaue Zielnavigation.
10. **Bezugsobjekt B471/Oberndorfer Straße** – Alias, geprüfte Beziehung, mobile Rücknavigation.
11. **R088 / „Mehr wissen?“** – adaptive Fragen, Quellenrollen, Übertragbarkeit, Reifegrad.

Die Testfälle werden später nicht nur als Textbeispiele, sondern mit erwarteten strukturierten Ergebnissen beschrieben.

## 7. Unmittelbar zu schließende Lücken

### L1 – Dokumentlenkung
GitHub als kanonische Projektdokumentation des Echtsystems verbindlich festlegen und Bibliotheks-/Exportfassungen als synchronisierte Ausgabe oder Archiv kennzeichnen. Keine konkurrierenden „aktuellen“ Fassungen.

### L2 – Erweiterte Relevanz operationalisieren
Die bereits dokumentierte fachliche Regel muss im Echtsystem als Such- und Qualitätslogik umgesetzt werden:

`bestätigtes Thema/Vorgang → Suchkontext (Begriffe, Akteure, Orte, Technologien, Institutionen) → erweiterte Recherche → Fundstelle → Begründung der Bedeutung für Feldkirchen → redaktionelle Prüfung`

Die Beziehung zum Thema soll künftig nicht nur eine abstrakte Zuordnung sein. Die derzeit in G3 entwickelte **„Bedeutung für das Thema“** ist dafür als Kandidat zu prüfen.

### L3 – 30-%-Arbeitsgrenze an operativer Stelle ergänzen
Die Arbeitsgrenze steht bereits im Übergabe- und Managementdokument, ist im operativen KI-Leitfaden aber nicht als Kontrollregel enthalten. Sie soll als Bestands-/Zeitraumskontrolle ergänzt werden, nicht als starre Sperre für einen einzelnen sachlich relevanten Fund.

### L4 – Rückblickfenster verbindlich machen
Für die erweiterte/mittelbare Relevanz ist der im Testbetrieb entwickelte Rückblick von **sechs Monaten** als Ausgangswert zu dokumentieren. Der Rückblick dient der Entdeckung relevanter externer Entwicklungen, wenn ein neues oder geschärftes Thema Suchkontext erzeugt. Er ersetzt nicht die laufende Recherche und kann bei begründetem fachlichem Bedarf erweitert werden.

### L5 – Transferkontrolle dauerhaft verankern
Künftige Echtsystem-Entscheidungen dürfen den Demonstrator nicht nur als Anschauung verwenden. Bei Änderungen an Recherchelogik, Themenmodell, Beitragsmodell, Quellenlogik, „Mehr wissen?“, Bezugsobjekten oder öffentlicher Darstellung wird geprüft, ob ein Demonstrator-Referenzfall betroffen ist und als Regressionstest erhalten werden muss.

## 8. Weiteres Vorgehen

1. TA-001 sowie L1–L4 schließen.
2. Transfer-Matrix gegen alle Primärdokumente des Demonstrators vervollständigen.
3. G3-Entscheidungen jeweils gegen die Matrix prüfen.
4. Aus den Referenzfällen strukturierte Akzeptanz-/Regressionstests ableiten.
5. Erst danach Transfer-Gate schließen und G3 ohne Vorbehalt fortsetzen.
