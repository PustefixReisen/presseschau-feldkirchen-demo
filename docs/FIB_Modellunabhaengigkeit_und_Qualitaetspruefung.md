# FIB – Modellunabhängigkeit und Qualitätsprüfung

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.0 | 27.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## 1. Ziel

Feldkirchen im Blick (FIB) soll so weit wie fachlich und technisch sinnvoll **unabhängig vom jeweils eingesetzten KI-Modell und KI-Anbieter** funktionieren.

Das bedeutet:

- Die fachlichen Regeln von FIB dürfen nicht nur im impliziten Verhalten eines einzelnen Sprachmodells liegen.
- Verbindliche Regeln sollen möglichst als dokumentierte Geschäftsregeln, strukturierte Datenfelder, Validierungen oder explizite KI-Anweisungen vorliegen.
- Das KI-Modell soll dort eingesetzt werden, wo semantische Einordnung, sprachliche Verdichtung oder begründete fachliche Bewertung tatsächlich erforderlich ist.
- Ein Modellwechsel darf nicht dazu führen, dass zentrale FIB-Regeln unbemerkt verloren gehen oder anders ausgelegt werden.

Ziel ist nicht vollständige Modellunabhängigkeit um jeden Preis, sondern eine **möglichst geringe und transparente Modellabhängigkeit**.

## 2. Drei Ebenen der Logik

### 2.1 Modellunabhängige Geschäftsregeln

Diese Regeln sollen außerhalb des KI-Modells technisch oder strukturell abgesichert werden.

Beispiele:

- stabile IDs für Beiträge, Themen, Sitzungen und Bezugsobjekte,
- Pflichtfelder und Statuswerte,
- Datumsarten und Datumslogik,
- Unterscheidung von Beschlussvorlage, Tagesordnung und tatsächlichem Beschluss,
- Quellenpflicht,
- Dublettenprüfung,
- Freigabestatus,
- Persistenz,
- Versions- und Änderungslogik,
- getrennte Speicherung von Kategorie, Ort und fachlichen Such-Tags,
- Objektbeziehungen mit stabiler Objekt-ID,
- technische Link- und Vollständigkeitsprüfungen,
- Regeln, wann ein Inhalt öffentlich sichtbar sein darf.

Solche Regeln dürfen nicht davon abhängen, ob ein Sprachmodell sie „richtig versteht“.

### 2.2 Explizite KI-Regeln

Einige Aufgaben benötigen semantische Bewertung, sollen aber durch klare, dokumentierte Regeln möglichst modellübergreifend steuerbar sein.

Beispiele:

- Relevanzprüfung für Feldkirchen,
- Unterscheidung zwischen beiläufigem und fachlich relevantem Objektbezug,
- Themenkandidaten erkennen,
- mehrere Sachstränge in einem Sammelbeitrag getrennt prüfen,
- Auswahl geeigneter Hintergrundquellen,
- Alias-Verifikation bei Objekten,
- Abgrenzung zwischen Aktualisierung und eigenständigem neuem Beitrag,
- sprachliche Regeln,
- Regeln für „Unsere Einordnung“.

Diese Regeln werden so formuliert, dass sie grundsätzlich mit unterschiedlichen geeigneten Sprachmodellen ausführbar sind.

### 2.3 Modellurteil

Ein Restbereich bleibt notwendigerweise modellabhängig, weil keine vollständig deterministische Regel sinnvoll ist.

Beispiele:

- Ist der Bezug zur B471 substanziell oder nur beiläufig?
- Sind zwei Meldungen tatsächlich derselbe Vorgang?
- Ist ein externer Sachverhalt für Feldkirchen konkret genug relevant?
- Welche Aspekte einer umfangreichen Beschlussvorlage sind für Leserinnen und Leser wesentlich?
- Wie lässt sich ein komplexer Sachverhalt verständlich und zugleich präzise formulieren?

Auch hier darf das Modell nicht frei von Regeln entscheiden. Das Urteil muss auf dokumentierten Kriterien und nachvollziehbaren Quellen beruhen.

## 3. Grundsatz für neue Funktionen

Bei jeder neuen fachlichen oder technischen FIB-Funktion wird geprüft:

1. **Kann die Regel deterministisch außerhalb der KI umgesetzt werden?**
2. Wenn nein: **Kann sie als explizite, modellübergreifende KI-Regel formuliert werden?**
3. Nur wenn auch das nicht vollständig möglich ist: **Welcher Teil bleibt echtes Modellurteil?**
4. Welche Daten oder Prüfprotokolle sind nötig, damit dieses Urteil nachträglich nachvollziehbar bleibt?

Die bevorzugte Reihenfolge lautet damit:

**Geschäftsregel → explizite KI-Regel → Modellurteil**

Nicht umgekehrt.

## 4. Qualitätsprüfung auf Modellabhängigkeit

FIB erhält einen eigenen **Modellabhängigkeits-Check** als Bestandteil der Qualitätsprüfung und der regelmäßigen Projektaudits.

Dabei werden zentrale Funktionen in einer Matrix bewertet.

| Funktion | Zielzustand | Aktueller Typ | Prüfpunkt |
|---|---|---|---|
| IDs / Persistenz | modellunabhängig | Geschäftsregel | technisch erzwingen |
| Datumslogik | weitgehend modellunabhängig | Geschäftsregel + Quellenprüfung | Datumsarten getrennt speichern |
| Vorlage vs. Beschluss | modellunabhängig | Geschäftsregel | Statusfelder / Validierung |
| Quellenpflicht | modellunabhängig | Geschäftsregel | Veröffentlichung ohne Quelle verhindern |
| Such-/Filterlogik | modellunabhängig | Geschäftsregel | strukturierte Felder statt gerenderter Volltext |
| Bezugsebene | weitgehend modellunabhängig | Objektmodell + KI-Prüfung | Beziehung explizit speichern |
| Themenbildung | teilweise modellabhängig | explizite KI-Regel + Modellurteil | Kriterien und Sachstränge protokollieren |
| Relevanzprüfung | teilweise modellabhängig | explizite KI-Regel + Modellurteil | Relevanzgrund speichern |
| Alias-Ermittlung | weitgehend modellunabhängig | Quellen-/Kartendaten + KI-Verifikation | Quelle und räumlichen Geltungsbereich speichern |
| Zusammenfassung | modellabhängig | Modellurteil | Quellenbindung und Stilregeln prüfen |
| „Unsere Einordnung“ | modellabhängig | Modellurteil unter Referenzregeln | Referenzbasis und politische Herkunft dokumentieren |

Diese Matrix wird fortgeschrieben, wenn neue Funktionen hinzukommen oder bisher modellabhängige Schritte technisch abgesichert werden.

## 5. Prüffragen für Audits

Bei einem Qualitäts- oder Architektur-Audit werden mindestens folgende Fragen gestellt:

- Welche fachlichen Ergebnisse hängen derzeit noch vom Verhalten eines bestimmten Modells ab?
- Ist diese Abhängigkeit notwendig oder nur historisch entstanden?
- Könnte die Regel in Datenmodell, Validierung oder Workflow verschoben werden?
- Ist eine KI-Regel ausreichend konkret formuliert, um mit einem anderen Modell reproduzierbar zu funktionieren?
- Gibt es Testfälle für kritische Regeln?
- Werden Modellentscheidungen mit Begründung, Quelle oder strukturiertem Entscheidungsgrund gespeichert?
- Würde ein Wechsel zu einem anderen geeigneten KI-Anbieter voraussichtlich dasselbe fachliche Ergebnis erzeugen?
- Falls nein: Ist die Abweichung akzeptabel und transparent?

## 6. Teststrategie für Modellwechsel

Vor einem produktiven Wechsel des KI-Modells oder KI-Anbieters wird ein definierter Satz repräsentativer FIB-Testfälle mit dem bisherigen und dem neuen Modell ausgeführt.

Mindestens enthalten sein sollen:

- RIS-Beschlussvorlage mit späterem Beschluss,
- Sammelbeitrag mit mehreren Sachsträngen,
- lokale Meldung mit schwachem politischen Bezug,
- externer Beitrag mit erweiterter Relevanz,
- Themenfortschreibung,
- Objektbezug mit Mehrwert-Schwelle,
- Aliasfall Straße / Infrastruktur,
- Beitrag mit „Unsere Einordnung“.

Verglichen werden nicht Stilpräferenzen allein, sondern insbesondere:

- Quellenbindung,
- Datumszuordnung,
- Themenzuordnung,
- Relevanzentscheidung,
- Objekt-/Aliasbeziehungen,
- Trennung von Tatsachen und Bewertung,
- Einhaltung der politischen Herkunftskennzeichnung,
- Vollständigkeit und Fehlerquote.

## 7. Karten- und Aliasbeispiel

Für Straßenobjekte wie die B471 gilt:

- Ist eine Alias-Zuordnung bereits durch eine amtliche oder kommunale Textquelle eindeutig belegt, wird diese bevorzugt.
- Karten- oder Geodaten dienen vor allem der räumlichen Verifikation, wenn Verlauf oder lokale Straßenbezeichnung sonst nicht eindeutig sind.
- Die Feststellung, dass „Oberndorfer Straße“ in einem bestimmten Abschnitt zur B471 gehört, kann weitgehend modellunabhängig aus geeigneten Quellen oder Geodaten gewonnen und gespeichert werden.
- Die Entscheidung, ob ein konkreter Beitrag über die Oberndorfer Straße tatsächlich einen **fachlich relevanten B471-Bezug** hat, bleibt dagegen eine semantische Prüfung nach der Mehrwert-Schwelle.

Damit wird zwischen **Objektidentität** und **inhaltlicher Relevanzbeziehung** getrennt.

## 8. Dokumentationsregel

Wenn bei der Entwicklung festgestellt wird, dass eine FIB-Regel derzeit nur durch implizites Modellverhalten funktioniert, ist dies als Qualitäts- und Architekturrisiko zu dokumentieren.

Bei fachlich oder technisch vertretbarem Aufwand soll die Regel anschließend in eine der folgenden Formen überführt werden:

1. technische Geschäftsregel,
2. strukturiertes Datenmodell,
3. explizite KI-Regel,
4. dokumentierter Testfall.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 1.0 | 27.09.2026 | Erstfassung. Modellunabhängigkeit als Architektur- und Qualitätsziel festgelegt; dreistufige Trennung Geschäftsregel / explizite KI-Regel / Modellurteil sowie Modellabhängigkeits-Check und Modellwechsel-Teststrategie eingeführt. |
