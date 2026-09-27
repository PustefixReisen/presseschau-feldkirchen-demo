# FIB – Fachkonzept „Mehr wissen?“ / FIB-Assistent

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.3 | 27.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

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
- noch **keine** angebundene KI-API.

Die Logik gilt für den gesamten aktuellen FIB-Bestand aus **Beiträgen und Themen**. Sie erzeugt nicht für jede Karte dieselbe Standardliste. Fragen werden nur angeboten, wenn der vorhandene FIB-Kontext einen erkennbaren zusätzlichen Erkenntnisweg trägt. Sitzungskarten bleiben zunächst Kontext- und Quellenlieferant; sie erhalten im Demonstrator keinen eigenen „Mehr wissen?“-Block.

Damit wird zunächst das Lese-, Quellen- und Bedienkonzept getestet.

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
- Verstehen: „Was bedeutet …?“
- Stand: „Wie weit ist … heute?“
- Praxis: „Wo wird das bereits eingesetzt?“
- Zusammenhang: „Was hat das mit … zu tun?“
- Offen: „Was ist noch ungeklärt?“
- Lokale Bedeutung: „Was könnte das für Feldkirchen bedeuten?“

Fragen sollen neugierig machen, aber nicht suggestiv formuliert sein.

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

## 7. FIB-weite adaptive Fragenlogik

Der Demonstrator verwendet zwei Ebenen:

1. **Allgemeine adaptive Vertiefung:** Aus dem bereits geprüften FIB-Bestand werden je nach Karte Fragen zu Kern, Verlauf, Themenzusammenhang, lokaler Bedeutung, offenen Fragen und Quellenlage angeboten.
2. **Kuratiertes Fachwissen:** Für besonders geeignete Fälle können zusätzliche Fragen und externe Fach-, Rechts- oder Praxisquellen ausdrücklich hinterlegt werden. R088 ist dafür der Referenzfall.

Die Mehrwert-Schwelle bleibt verbindlich. Ein kurzer Einzelhinweis ohne Verlauf, Zusammenhang, zusätzliche Quellen oder erklärungsbedürftigen Sachverhalt muss keinen „Mehr wissen?“-Bereich erhalten.

## 8. FIB-Kontextpaket für den Echtbetrieb

Eine spätere KI-Antwort soll nicht aus allgemeinem Modellwissen allein erzeugt werden. Sie erhält ein strukturiertes Kontextpaket mit:
- aktuellem Beitrag oder Thema,
- angegebenen Quellen,
- zugehörigen früheren FIB-Beiträgen,
- verknüpften FIB-Themen,
- Bezugsobjekten,
- freigegebenen Fach- und Verwaltungsquellen,
- gegebenenfalls freigegebenem Referenzwissen,
- Datum des Informationsstands.

## 9. Qualitätsregeln

- Sachliche Antworten sind quellengebunden.
- Mehrere Quellen pro Antwort sind erwünscht, wenn sie unterschiedliche Ebenen absichern, z. B. Ausgangsmeldung, Rechtsrahmen, Fachstand, Praxisbeispiel oder lokalen Zusammenhang. Quellen sollen nicht nur vervielfacht, sondern funktional ausgewählt werden.
- Tatsachen, Hintergrund, mögliche lokale Bedeutung und „Unsere Einordnung“ werden getrennt.
- Unsicherheit und Reifegrad werden ausdrücklich benannt.
- Bei veränderlichen Themen wird der Informationsstand datiert.
- Nicht ausreichend belegte Antworten werden als offen gekennzeichnet statt plausibel ergänzt.
- Modellunabhängige Regeln werden soweit möglich außerhalb des Sprachmodells umgesetzt.

## 10. Referenzfall R088

Vorgeschlagene Fragen:
1. Wie weit ist autonomes Fahren im ÖPNV heute?
2. Was wird in München konkret getestet?
3. Was könnte das später für Feldkirchen bedeuten?
4. Was unterscheidet Testbetrieb und Regelbetrieb?
5. Welche Rolle könnten autonome Fahrzeuge im ÖPNV spielen?

Das freie Fragefeld ist im Demonstrator nur eine UI-Erprobung. Die Eingabe wird noch nicht an eine KI übertragen.

## 11. Noch offene Entscheidungen

Vor einer Umsetzung im Echtbetrieb sind insbesondere zu klären:
- zugelassene externe Quellen,
- Aktualitätsprüfung,
- Antwortlänge und Vertiefungsstufen,
- Umgang mit freien Nutzerfragen außerhalb des unmittelbaren Beitragskontexts,
- Protokollierung und Datenschutz,
- Kosten- und Modellstrategie,
- redaktionelle Kontrolle statischer Hintergrundbausteine,
- Grenzen zwischen neutraler Sachauskunft und politischer Einordnung.

## 12. Abgrenzung zu „Unsere Einordnung“

„Mehr wissen?“ ist grundsätzlich **sachlich-erklärend und quellengebunden**. Der Bereich darf politische Wertungen aus „Unsere Einordnung“ nicht als neutrale Hintergrundinformation wiederholen oder verstecken.

Wenn eine Nutzerfrage im Echtbetrieb ausdrücklich nach der grünen Bewertung fragt, muss die Antwort diese Ebene klar als politische Einordnung kennzeichnen und aus den dafür freigegebenen politischen Referenzquellen ableiten.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.3 | 27.09.2026 | FIB-weite Umsetzung für Beiträge und Themen; adaptive Fragenlogik, Mehrwert-Schwelle und funktionale Quellenrollen verbindlich ergänzt; R088 bleibt kuratierter Referenzfall. |\n| 0.2 | 27.09.2026 | Prototyp erweitert: Anzahl der Fragen nicht künstlich begrenzt; mehrere funktional unterschiedliche Quellen je Antwort ausdrücklich vorgesehen; Testfall R088 auf fünf Fragen erweitert. |
| 0.1 | 27.09.2026 | Fachlicher Prototyp „Mehr wissen?“ angelegt; Präambel, Mehrwert-Schwelle, Fragetypen, Kontextpaket und Qualitätsregeln dokumentiert. |
