# FIB – Fachkonzept „Mehr wissen?“ / FIB-Assistent

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.2 | 27.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## 1. Präambel

**Die Meldung oder das Thema ist der Einstieg, nicht das Ende des Informationsangebots.**

„Mehr wissen?“ soll Besucherinnen und Besuchern ermöglichen, einen FIB-Beitrag oder ein FIB-Thema bei Interesse weiter zu erkunden. Ziel ist nicht mehr Text, sondern mehr Verständnis, Zusammenhang und Neugier.

## 2. Prototypischer Ansatz

Der Demonstrator erprobt „Mehr wissen?“ zunächst an R088 zum autonomen On-Demand-Verkehr.

Der Prototyp enthält:
- redaktionell vorbereitete Anschlussfragen,
- kurze sachliche Antworten,
- Quellen zu den Antworten,
- ein Eingabefeld für eine eigene Frage,
- noch **keine** angebundene KI-API.

Damit wird zunächst das Lese- und Bedienkonzept getestet.

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

## 6. FIB-Kontextpaket für den Echtbetrieb

Eine spätere KI-Antwort soll nicht aus allgemeinem Modellwissen allein erzeugt werden. Sie erhält ein strukturiertes Kontextpaket mit:
- aktuellem Beitrag oder Thema,
- angegebenen Quellen,
- zugehörigen früheren FIB-Beiträgen,
- verknüpften FIB-Themen,
- Bezugsobjekten,
- freigegebenen Fach- und Verwaltungsquellen,
- gegebenenfalls freigegebenem Referenzwissen,
- Datum des Informationsstands.

## 7. Qualitätsregeln

- Sachliche Antworten sind quellengebunden.
- Mehrere Quellen pro Antwort sind erwünscht, wenn sie unterschiedliche Ebenen absichern, z. B. Ausgangsmeldung, Rechtsrahmen, Fachstand, Praxisbeispiel oder lokalen Zusammenhang. Quellen sollen nicht nur vervielfacht, sondern funktional ausgewählt werden.
- Tatsachen, Hintergrund, mögliche lokale Bedeutung und „Unsere Einordnung“ werden getrennt.
- Unsicherheit und Reifegrad werden ausdrücklich benannt.
- Bei veränderlichen Themen wird der Informationsstand datiert.
- Nicht ausreichend belegte Antworten werden als offen gekennzeichnet statt plausibel ergänzt.
- Modellunabhängige Regeln werden soweit möglich außerhalb des Sprachmodells umgesetzt.

## 8. Prototyp R088

Vorgeschlagene Fragen:
1. Wie weit ist autonomes Fahren im ÖPNV heute?
2. Was wird in München konkret getestet?
3. Was könnte das später für Feldkirchen bedeuten?
4. Was unterscheidet Testbetrieb und Regelbetrieb?
5. Welche Rolle könnten autonome Fahrzeuge im ÖPNV spielen?

Das freie Fragefeld ist im Demonstrator nur eine UI-Erprobung. Die Eingabe wird noch nicht an eine KI übertragen.

## 9. Noch offene Entscheidungen

Vor einer Umsetzung im Echtbetrieb sind insbesondere zu klären:
- zugelassene externe Quellen,
- Aktualitätsprüfung,
- Antwortlänge und Vertiefungsstufen,
- Umgang mit freien Nutzerfragen außerhalb des unmittelbaren Beitragskontexts,
- Protokollierung und Datenschutz,
- Kosten- und Modellstrategie,
- redaktionelle Kontrolle statischer Hintergrundbausteine,
- Grenzen zwischen neutraler Sachauskunft und politischer Einordnung.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.2 | 27.09.2026 | Prototyp erweitert: Anzahl der Fragen nicht künstlich begrenzt; mehrere funktional unterschiedliche Quellen je Antwort ausdrücklich vorgesehen; Testfall R088 auf fünf Fragen erweitert. |
| 0.1 | 27.09.2026 | Fachlicher Prototyp „Mehr wissen?“ angelegt; Präambel, Mehrwert-Schwelle, Fragetypen, Kontextpaket und Qualitätsregeln dokumentiert. |
