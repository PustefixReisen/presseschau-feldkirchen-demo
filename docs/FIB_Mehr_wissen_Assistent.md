# FIB – Fachkonzept „Mehr wissen?“ / FIB-Assistent

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.6 | 28.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## 1. Präambel

**Die Meldung oder das Thema ist der Einstieg, nicht das Ende des Informationsangebots.**

„Mehr wissen?“ soll Besucherinnen und Besuchern ermöglichen, einen FIB-Beitrag oder ein FIB-Thema bei Interesse weiter zu erkunden. Ziel ist nicht mehr Text, sondern mehr Verständnis, Zusammenhang und Neugier.

## 2. Prototypischer Ansatz

Der Demonstrator setzt „Mehr wissen?“ FIB-weit für Beiträge und Themen ein. R088 zum autonomen On-Demand-Verkehr bleibt der vertiefte Referenzfall mit zusätzlich hinterlegten Fach- und Rechtsquellen.

Der Prototyp enthält:
- kontextabhängig erzeugte bzw. redaktionell vorbereitete Anschlussfragen,
- kurze sachliche Antworten,
- Quellen zu den Antworten,
- eine sichtbare Kennzeichnung der **Funktion einer Quelle**,
- ein Eingabefeld für eine eigene Frage,
- eine angebundene KI-API über eine Supabase Edge Function,
- zusätzliche Webrecherche für Hintergrundantworten mit sichtbaren Quellen.

Die Logik gilt für den gesamten aktuellen FIB-Bestand aus **Beiträgen und Themen**. Sie erzeugt nicht für jede Karte dieselbe Standardliste. Fragen werden nur angeboten, wenn der vorhandene FIB-Kontext einen erkennbaren zusätzlichen Erkenntnisweg trägt. Sitzungskarten bleiben zunächst Kontext- und Quellenlieferant; sie erhalten im Demonstrator keinen eigenen „Mehr wissen?“-Block.

Damit wird nicht nur das Lese-, Quellen- und Bedienkonzept getestet. Der Demonstrator dient nun auch als **funktionales Testsystem für KI-Recherche, Quellenwahl und Antwortqualität**.

## 3. Arten von Zusatzwissen

### Hintergrund
Frage: Was muss ich wissen, um die Meldung besser zu verstehen?

### Zusammenhang
Frage: Wie hängt der Vorgang mit anderen Entwicklungen, Themen oder Bezugsobjekten zusammen?

### Bedeutung für Feldkirchen
Frage: Welche konkrete oder mögliche Bedeutung kann der Vorgang für Feldkirchen haben?

Diese Ebene ist von „Unsere Einordnung“ zu trennen und grundsätzlich sachlich-erklärend.

## 4. Mehrwert-Schwelle

„Mehr wissen?“ wird nur angeboten, wenn zusätzliche Information einen erkennbaren Erkenntnisgewinn bietet. Nicht jeder erklärbare Begriff rechtfertigt einen Hintergrundbaustein.

Leitfrage:
> Welche zusätzliche Information hilft einem interessierten Laien, diesen Sachverhalt wirklich besser zu verstehen?

## 5. Vorgeschlagene Fragen

Geeignete Fragetypen sind insbesondere:
- **Technischer Hintergrund:** „Welche technische oder planerische Entwicklung steckt dahinter?“
- **Rechtlicher/institutioneller Hintergrund:** „Welche Regeln und Zuständigkeiten bestimmen den Handlungsspielraum?“
- **Gesellschaftlicher Hintergrund:** „Welche Interessen, Veränderungen oder Teilhabefragen stehen dahinter?“
- **Ökologischer Hintergrund:** „Welche Umweltwirkungen oder Zielkonflikte sind wichtig?“
- **Wirtschaftlicher Hintergrund:** „Welche Kosten, Förderungen oder Folgewirkungen sind relevant?“
- **Reifegrad:** „Ist das schon belastbare Praxis oder noch ein Experiment?“
- **Vergleich/Praxis:** „Wo gibt es bereits Erfahrungen und was lässt sich daraus lernen?“
- **Entwicklungslinie:** „Welche längerfristige Entwicklung wird hier sichtbar?“
- **Offen:** „Welche offenen Fragen entscheiden über die weitere Entwicklung?“
- **Übertragbarkeit:** „Unter welchen Bedingungen könnte das für Feldkirchen relevant werden?“

Fragen sollen neugierig machen, aber nicht suggestiv formuliert sein.

### Bürgernahe Formulierung der Fragen

Die fachlichen Frageachsen bleiben intern stabil, die sichtbaren Fragen werden jedoch **bürgernah, kurz und neugierig machend** formuliert. Die Formulierung soll aus Sicht interessierter Leserinnen und Leser entstehen, nicht aus Sicht eines Gutachtens oder Verwaltungstextes.

Beispiele:

| Fachliche Frageachse | Bevorzugte bürgernahe Formulierungen |
|---|---|
| Recht / Zuständigkeit | „Wer darf hier eigentlich was entscheiden?“ · „Was kann die Gemeinde selbst regeln – und was nicht?“ |
| Gesellschaft / Interessen | „Warum bewegt das Thema so viele Menschen?“ · „Welche Interessen treffen hier aufeinander?“ |
| Verlauf / Vorgeschichte | „Wie ist es dazu gekommen?“ · „Welche Vorgeschichte sollte man kennen?“ |
| Größerer Zusammenhang | „Steckt dahinter nur ein Einzelfall – oder ein größeres Thema?“ · „Was zeigt das über die Entwicklung in Feldkirchen?“ |
| Technik / Planung | „Wie funktioniert das eigentlich?“ · „Was ist daran neu oder anders als bisher?“ |
| Reifegrad / Pilotcharakter | „Funktioniert das schon in der Praxis?“ · „Ist das schon erprobt – oder noch eher ein Versuch?“ |
| Ökologie | „Welche Folgen hat das für Umwelt und Lebensqualität?“ · „Wo gibt es Zielkonflikte für Klima, Natur oder Fläche?“ |
| Wirtschaft / Kosten | „Was kostet das – und wer trägt die Folgen?“ · „Welche finanziellen Auswirkungen hat das?“ |
| Übertragbarkeit | „Was könnte das konkret für Feldkirchen bedeuten?“ · „Was müsste passieren, damit das auch bei uns relevant wird?“ |

### Variationsregel bei wiederkehrenden Fragen

Wiederkehrende fachliche Frageachsen dürfen **nicht schematisch mit immer derselben sichtbaren Formulierung** erscheinen. Bei vergleichbaren Beiträgen wählt FIB aus mehreren geeigneten Varianten eine zum Kontext passende Formulierung.

Dabei gilt:

- Die **fachliche Bedeutung** der Frage darf durch die Variation nicht verändert werden.
- Die Varianten müssen dieselben Qualitäts- und Neutralitätsregeln erfüllen.
- Die Formulierung soll zum konkreten Beitrag passen und möglichst natürlich wirken.
- Innerhalb einer Beitragsliste sollen gleiche oder nahezu gleiche Fragen möglichst vermieden werden.
- Für reproduzierbare Tests kann die Variantenauswahl deterministisch erfolgen; dieselbe Karte erhält dann bei gleichem Datenstand dieselbe Formulierung.
- Diese Regel ist **Anforderung an Demonstrator und Echtsystem**.

### Anti-Redundanz-Regel

„Mehr wissen?“ darf den sichtbaren Beitrag nicht lediglich wiederholen. Fragen wie **„Was ist der Kern dieser Meldung?“** oder **„Wie ist der Sachstand belegt?“** sind im Regelfall ungeeignet, wenn Beitragstext und Quellenliste diese Information bereits unmittelbar liefern.

Eine Anschlussfrage soll gegenüber der Karte mindestens einen **neuen Erkenntnishorizont** eröffnen: zusätzlichen Hintergrund, längerfristige Entwicklung, Vergleich, Reifegrad, Zielkonflikt, Handlungsspielraum oder Übertragbarkeit.

Die Zahl der vorgeschlagenen Fragen ist nicht fest vorgegeben. Es sollen so viele Fragen angeboten werden, wie unterschiedliche sinnvolle Erkenntniswege eröffnen, ohne den Beitrag zu überladen. Drei Fragen sind daher kein Zielwert und keine Obergrenze.

## 6. Quellenlogik

Quellen werden im „Mehr wissen?“-Bereich nicht als bloße Linkliste behandelt. Entscheidend ist, **welche Funktion eine Quelle für die jeweilige Antwort erfüllt**. Typische Rollen sind:

- **Ausgangsmeldung:** belegt den unmittelbar beschriebenen Vorgang,
- **lokaler oder regionaler Kontext:** stellt den Bezug zu Feldkirchen, Nachbarkommunen oder regionalen Strukturen her,
- **Fach-/Rechtsrahmen:** erklärt technische, wissenschaftliche, rechtliche oder institutionelle Grundlagen,
- **Praxisbeispiel:** zeigt eine reale Anwendung oder einen Vergleichsfall,
- **Pressebericht:** ergänzt Beobachtung, Resonanz oder zusammenfassende Darstellung,
- **Position / Akteur:** dokumentiert eine ausdrücklich zugeordnete Position,
- **FIB-Zusammenhang:** verweist auf frühere FIB-Beiträge oder ein verknüpftes FIB-Thema.

Mehrere Quellen sind besonders dann sinnvoll, wenn sie **unterschiedliche Funktionen** erfüllen. Eine größere Zahl gleichartiger Links ist kein Qualitätsmerkmal an sich.

Bei Themen werden Quellen aus verschiedenen Zeitpunkten als **Themenkontext** gebündelt. Bei einer Antwort wird nur die Auswahl gezeigt, die für die konkrete Frage hilfreich ist.

## 7. Trend-Kriterien als Suchscheinwerfer für Hintergrundfragen

Die frühere Idee einer eigenen öffentlichen FIB-Rubrik „Trends“ wird **nicht** wieder eingeführt. Die dafür entwickelten Analyseperspektiven werden jedoch für „Mehr wissen?“ weiterverwendet.

Bei der Auswahl von Anschlussfragen wird geprüft, ob hinter einer Meldung eine Entwicklung erkennbar ist, die:

- technische Möglichkeiten oder Reifegrade verändert,
- rechtliche oder institutionelle Handlungsspielräume verschiebt,
- gesellschaftliche Bedürfnisse, Beteiligungsformen oder Nutzungsmuster verändert,
- ökologische Risiken, Wirkungen oder Zielkonflikte sichtbar macht,
- wirtschaftliche Bedingungen, Kosten oder Förderlogiken verändert,
- in anderen Kommunen oder Praxisfeldern bereits erprobt wird,
- oder künftig für Feldkirchen relevant werden könnte.

Diese Perspektiven sind **Rechercheachsen**, keine zusätzlichen öffentlichen Kategorien. Es werden nur diejenigen genutzt, die für den konkreten Sachverhalt einen belastbaren Erkenntnisgewinn erwarten lassen.

## 8. FIB-weite adaptive Fragenlogik

Der Demonstrator verwendet zwei Ebenen für die Auswahl sinnvoller Fragen:

1. **Allgemeine adaptive Vertiefung:** Aus Beitrag, Thema und Analyseperspektiven werden Hintergrundfragen ausgewählt, die gegenüber dem sichtbaren Text einen zusätzlichen Erkenntnisweg eröffnen.
2. **Kuratiertes Fachwissen:** Für besonders geeignete Fälle können zusätzliche Fragen ausdrücklich vorbereitet werden. R088 bleibt dafür Referenzfall.

Beim Öffnen einer Frage wird die Antwort im Demonstrator **dynamisch über die KI-Anbindung erzeugt**. Der FIB-Kontext und vorhandene Quellen werden mitgegeben; für zusätzlichen Hintergrund kann die KI Webrecherche einsetzen.

Die Mehrwert-Schwelle bleibt verbindlich. Ein kurzer Einzelhinweis ohne Verlauf, Zusammenhang, zusätzliche Quellen oder erklärungsbedürftigen Sachverhalt muss keinen „Mehr wissen?“-Bereich erhalten.

## 9. FIB-Kontextpaket und Demonstrator-Anbindung

Eine KI-Antwort soll nicht aus allgemeinem Modellwissen allein erzeugt werden. Der Demonstrator übergibt bereits ein Kontextpaket mit:
- aktuellem Beitrag oder Thema,
- angegebenen Quellen,
- zugehörigen früheren FIB-Beiträgen,
- verknüpften FIB-Themen,
- Bezugsobjekten,
- freigegebenen Fach- und Verwaltungsquellen,
- gegebenenfalls freigegebenem Referenzwissen,
- Datum des Informationsstands.

## 10. Qualitätsregeln

- Sachliche Antworten sind quellengebunden.
- Mehrere Quellen pro Antwort sind erwünscht, wenn sie unterschiedliche Ebenen absichern, z. B. Ausgangsmeldung, Rechtsrahmen, Fachstand, Praxisbeispiel oder lokalen Zusammenhang. Quellen sollen nicht nur vervielfacht, sondern funktional ausgewählt werden.
- Tatsachen, Hintergrund, mögliche lokale Bedeutung und „Unsere Einordnung“ werden getrennt.
- Unsicherheit und Reifegrad werden ausdrücklich benannt.
- Bei veränderlichen Themen wird der Informationsstand datiert.
- Nicht ausreichend belegte Antworten werden als offen gekennzeichnet statt plausibel ergänzt.
- Modellunabhängige Regeln werden soweit möglich außerhalb des Sprachmodells umgesetzt.

## 11. Referenzfall R088

Vorgeschlagene Fragen:
1. Wie weit ist autonomes Fahren im ÖPNV heute?
2. Was wird in München konkret getestet?
3. Was könnte das später für Feldkirchen bedeuten?
4. Was unterscheidet Testbetrieb und Regelbetrieb?
5. Welche Rolle könnten autonome Fahrzeuge im ÖPNV spielen?

Das freie Fragefeld ist im Demonstrator funktional angebunden. Die Eingabe wird an dieselbe KI-Schnittstelle wie die vorgeschlagenen Fragen übertragen.

## 12. Qualitätstest für KI-Anbindungen

„Mehr wissen?“ ist Bestandteil des modellübergreifenden FIB-Qualitätstests. Beim Vergleich unterschiedlicher KI-Anbindungen werden **Frageauswahl, Antwortqualität und Quellenwahl getrennt** geprüft. Maßgeblich ist das gemeinsame Bewertungsraster in `docs/FIB_Modellunabhaengigkeit_und_Qualitaetspruefung.md`.

Für einen fairen Vergleich erhalten die Modelle denselben Testfall, denselben Informationsstand und – soweit technisch möglich – denselben zugelassenen Quellen- und Kontextbestand. Sprachliche Eleganz allein ist kein Qualitätsmaßstab; entscheidend sind insbesondere Faktentreue, Aussage-Quellen-Deckung, Unsicherheitskennzeichnung, Neutralität und die Trennung von sachlicher Vertiefung und politischer Einordnung.

## 13. Noch offene Entscheidungen

Für die Weiterentwicklung von Demonstrator und Echtbetrieb sind insbesondere zu klären:
- zugelassene externe Quellen,
- Aktualitätsprüfung,
- Antwortlänge und Vertiefungsstufen,
- Umgang mit freien Nutzerfragen außerhalb des unmittelbaren Beitragskontexts,
- Protokollierung und Datenschutz,
- Kosten- und Modellstrategie,
- redaktionelle Kontrolle statischer Hintergrundbausteine,
- Grenzen zwischen neutraler Sachauskunft und politischer Einordnung.

## 14. Abgrenzung zu „Unsere Einordnung“

„Mehr wissen?“ ist grundsätzlich **sachlich-erklärend und quellengebunden**. Der Bereich darf politische Wertungen aus „Unsere Einordnung“ nicht als neutrale Hintergrundinformation wiederholen oder verstecken.

Wenn eine Nutzerfrage im Echtbetrieb ausdrücklich nach der grünen Bewertung fragt, muss die Antwort diese Ebene klar als politische Einordnung kennzeichnen und aus den dafür freigegebenen politischen Referenzquellen ableiten.

## Technischer Demonstratorstand

Stand 28.09.2026:

- Frontend: statische GitHub-Pages-Seite,
- KI-Gateway: Supabase Edge Function `fib-mehr-wissen` im Projekt **Shared-Apps**,
- OpenAI Responses API mit Websuche,
- Referenzmodell initial: **GPT-6 Luna**, technisch austauschbar,
- OpenAI-Schlüssel ausschließlich serverseitig als Supabase-Secret `OPENAI_API_KEY`,
- globales Demonstrator-Limit zunächst **60 KI-Anfragen pro Tag**,
- keine Speicherung von IP-Adressen oder Nutzerfragen für das Nutzungslimit.

Bis das Secret `OPENAI_API_KEY` gesetzt ist, ist die technische Strecke vorbereitet, aber die OpenAI-Antworterzeugung noch nicht aktiv.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.6 | 28.09.2026 | Bürgernahe Frageformulierungen verbindlich eingeführt; fachliche Frageachsen bleiben intern stabil, sichtbare Formulierungen werden kontextabhängig variiert. Variationsregel gilt ausdrücklich auch für das Echtsystem. |
| 0.5 | 28.09.2026 | Demonstrator an echte KI-Recherche angebunden: Supabase Edge Function als geschütztes Gateway, OpenAI Responses API mit Websuche, freie Fragen und vorgeschlagene Fragen dynamisch; tägliches Testlimit ergänzt. |
| 0.4 | 27.09.2026 | Fragenlogik nach Nutzerfeedback geschärft: redundante Kern-/Belegfragen als Standard entfernt; technische, rechtliche, gesellschaftliche, ökologische und wirtschaftliche Hintergrundachsen sowie Reifegrad, Vergleich und Übertragbarkeit aus der früheren Trendlogik übernommen. |\n| 0.3 | 27.09.2026 | FIB-weite Umsetzung für Beiträge und Themen; adaptive Fragenlogik, Mehrwert-Schwelle und funktionale Quellenrollen verbindlich ergänzt; R088 bleibt kuratierter Referenzfall. |\n| 0.2 | 27.09.2026 | Prototyp erweitert: Anzahl der Fragen nicht künstlich begrenzt; mehrere funktional unterschiedliche Quellen je Antwort ausdrücklich vorgesehen; Testfall R088 auf fünf Fragen erweitert. |
| 0.1 | 27.09.2026 | Fachlicher Prototyp „Mehr wissen?“ angelegt; Präambel, Mehrwert-Schwelle, Fragetypen, Kontextpaket und Qualitätsregeln dokumentiert. |
