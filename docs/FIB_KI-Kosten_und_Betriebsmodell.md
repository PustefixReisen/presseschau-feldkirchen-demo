# FIB – KI-Kosten- und Betriebsmodell

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.1 | 28.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## 1. Zweck

Dieses Dokument beschreibt, wie KI-Kosten im späteren Echtbetrieb von **Feldkirchen im Blick (FIB)** entstehen, wie sie zwischen öffentlicher Nutzung und Redaktionssystem getrennt werden und wie verschiedene KI-Anbindungen wirtschaftlich verglichen werden.

Es ist **keine Modellentscheidung**. Die Auswahl eines Anbieters erfolgt erst nach dem dokumentierten Qualitätsvergleich gemäß `FIB_Modellunabhaengigkeit_und_Qualitaetspruefung.md`.

Alle Preise sind eine **Preisaufnahme vom 28.09.2026** und müssen vor einer produktiven Entscheidung erneut geprüft werden. Allgemeine Infrastrukturkosten für Hosting, Domain, Supabase, GitHub oder E-Mail sind hier nicht enthalten.

## 2. Betriebsverantwortung im Echtbetrieb

Das Echtsystem wird nicht dauerhaft über private Konten des Entwicklers oder Initiators betrieben.

Zielbild:

- Eigentümer und Rechnungsempfänger produktiver Dienste ist die **GRÜNE Ortsgruppe Feldkirchen** beziehungsweise eine dafür verbindlich bestimmte grüne Organisationsstruktur.
- Produktive API-Schlüssel, Zahlungsdaten und Secrets liegen ausschließlich in organisationskontrollierten Accounts.
- GitHub-Organisation/-Repository, produktives Supabase-Projekt und KI-Provider-Projekte sollen organisatorisch der Ortsgruppe zugeordnet sein.
- Mindestens zwei berechtigte Administratorinnen/Administratoren sollen den Betrieb übernehmen können.
- Persönliche Konten können als Entwicklungs- oder Wartungszugang berechtigt werden, dürfen aber **kein Single Point of Failure** für Betrieb, Abrechnung oder Wiederherstellung sein.
- Entwicklungs-/Demonstratorschlüssel werden nicht unverändert in den Echtbetrieb übernommen.

Die Entwicklung kann weiterhin aus der heutigen Entwicklungsumgebung erfolgen. Vor Produktivsetzung werden Deployment-Ziel, Secrets und Abrechnung auf die Accounts der Ortsgruppe umgestellt.

## 3. Wo KI-Kosten entstehen

### 3.1 Besucherinnen und Besucher

Es gibt drei unterschiedliche Fälle:

1. **Normales Lesen von Beiträgen/Themen:** keine KI-Kosten.
2. **Vorgegebene „Mehr wissen?“-Fragen mit gespeicherter Antwort:** nach der Voraberzeugung keine Kosten pro Aufruf.
3. **Freie Besucherfrage / notwendige Live-Aktualisierung:** API-Kosten für Modell und gegebenenfalls Websuche.

Für FIB ist deshalb vorgesehen, vorgegebene Vertiefungsfragen möglichst **einmalig bei Erstellung oder Aktualisierung eines Beitrags** zu beantworten und persistent zu speichern.

### 3.2 Redaktionssystem

Kosten entstehen, wenn die Redaktion KI-Unterstützung anfordert, zum Beispiel für Überarbeitung, Kürzung, Quellenprüfung, Formulierungshilfe, „Unsere Einordnung“, „Mehr wissen?“-Fragen oder Themenaktualisierungen.

Wenn ausschließlich der bereits im FIB gespeicherte Quellenbestand verwendet wird, ist **keine kostenpflichtige Websuche notwendig**. Dann fallen nur Modell-Tokenkosten an.

### 3.3 Quellenrecherche

Bekannte FIB-Quellen sollen primär direkt technisch abgerufen werden:

```
Gemeinde / RIS / bekannte Presse- und Fachquellen
            ↓
      Quellenmonitor
            ↓
 eigener Recherchebestand
            ↓
      KI-Auswertung
```

Der Direktabruf bekannter Quellen erzeugt keine KI-Websuchkosten. Eine KI-Websuche wird nur eingesetzt, wenn eine echte Wissenslücke besteht oder zusätzliche Fach-, Rechts-, Wissenschafts- oder Praxisquellen benötigt werden.

## 4. Vergleichsprofile

### Profil A – freie Besucherfrage mit Webrecherche
- 6.000 Eingabetokens
- 1.000 Ausgabetokens
- 1 Websuch-/Grounding-Aufruf

### Profil B – redaktionelle Überarbeitung
- 12.000 Eingabetokens
- 2.000 Ausgabetokens
- keine Websuche

### Profil C – vorab erzeugte „Mehr wissen?“-Antworten
Beispielmonat:
- 20 neue oder wesentlich aktualisierte Beiträge
- je 4 gespeicherte Vertiefungsantworten
- insgesamt 80 Generierungen
- konservativ je 1 Webrecherche

Nach der Speicherung verursachen beliebig viele Abrufe dieser Antworten **keine weiteren KI-Kosten**.

Die Profile sind zunächst Rechenannahmen. Im Echtbetrieb sollen reale Token-, Tool- und Kostenwerte protokolliert und die Annahmen damit ersetzt werden.

## 5. Preisaufnahme 28.09.2026

### 5.1 OpenAI

Kostengünstiges Vergleichsmodell **GPT-5.6 Luna**:
- Input: **0,20 USD / 1 Mio. Tokens**
- Output: **1,20 USD / 1 Mio. Tokens**
- Web Search: **10 USD / 1.000 Aufrufe** (= 0,01 USD pro Aufruf)
- Suchinhalt-Tokens werden zusätzlich zu Modellpreisen abgerechnet.

Stärkeres Redaktions-Vergleichsmodell **GPT-5.6 Sol**:
- Input: **2,00 USD / 1 Mio. Tokens**
- Output: **10,00 USD / 1 Mio. Tokens**

Quelle: https://developers.openai.com/api/docs/pricing

### 5.2 Mistral

Kostengünstiges Vergleichsmodell **Mistral Small 4**:
- Input: **0,15 USD / 1 Mio. Tokens**
- Output: **0,60 USD / 1 Mio. Tokens**
- integrierte Web Search: **30 USD / 1.000 Aufrufe** (= 0,03 USD pro Aufruf)

Stärkeres Vergleichsmodell **Mistral Medium 3.5**:
- Input: **1,50 USD / 1 Mio. Tokens**
- Output: **7,50 USD / 1 Mio. Tokens**

Mistral weist für unterstützte regionale/EU-Verarbeitung aktuell einen Aufschlag von 10 % aus.

Quelle: https://mistral.ai/pricing/api/

### 5.3 Grünerator

Der Grünerator ist für grüne Nutzerinnen und Nutzer öffentlich als **kostenlos nutzbares Werkzeug** beschrieben und nutzt Mistral sowie weitere europäische beziehungsweise selbst gehostete Modelle.

Für eine externe produktive FIB-Integration ist derzeit jedoch **keine öffentlich dokumentierte verbindliche API-Preisliste mit Nutzungsgrenzen, SLA und Abrechnungsmodell** auffindbar. Deshalb dürfen für die FIB-API derzeit nicht einfach 0 EUR angesetzt werden.

Vor einer Auswahl sind mit dem Grünerator-Team zu klären:
- freigegebene API/MCP-Anbindung für FIB,
- Nutzung durch öffentliche, nicht angemeldete Webseitenbesucher,
- Kostenträger für Modell- und Websuchkosten,
- Rate Limits, Monatsbudgets oder Fair Use,
- Kostenfreiheit für eine GRÜNE Ortsgruppe,
- Verfügbarkeit/Betriebsversprechen,
- verfügbare Modelle und Websuchdienste,
- Zugriff auf Nutzungs-/Kostenmetriken.

Quellen:
- https://github.com/netzbegruenung/Gruenerator
- https://werkzeuge.gruene.at/werkzeug/gruenerator/

### 5.4 Google Gemini als zusätzlicher Vergleichskandidat

**Gemini 2.5 Flash-Lite**:
- Input: **0,10 USD / 1 Mio. Tokens**
- Output: **0,40 USD / 1 Mio. Tokens**
- Google-Search-Grounding im Paid Tier: derzeit bis zu **1.500 grounded prompts pro Tag kostenlos** (gemeinsames Limit mit Flash), danach **35 USD / 1.000 grounded prompts**.

Diese Freikontingente können das Kostenbild bei niedrigem FIB-Volumen stark verändern, sind aber Anbieterbedingungen und dürfen nicht als dauerhafte Kostenfreiheit vorausgesetzt werden.

Quelle: https://ai.google.dev/gemini-api/docs/pricing

### 5.5 Optionaler Qualitätsvergleich: Anthropic

Falls der Qualitätsbenchmark einen weiteren leistungsfähigen Anbieter benötigt, kann **Claude Sonnet 5** hinzugenommen werden:
- Input: **2 USD / 1 Mio. Tokens**
- Output: **10 USD / 1 Mio. Tokens**

Quelle: https://www.anthropic.com/news/claude-sonnet-5

## 6. Beispielkosten je FIB-Vorgang

Alle Werte sind Näherungen. Steuern, Wechselkurse, regionale Aufschläge, zusätzliche Suchaufrufe und sonstige Tools sind nicht eingerechnet.

| Anbieter / Modell | Profil A: freie Besucherfrage + 1 Suche | Profil B: redaktionelle Überarbeitung |
|---|---:|---:|
| OpenAI GPT-5.6 Luna | ca. **0,0124 USD** | ca. **0,0048 USD** |
| Mistral Small 4 | ca. **0,0315 USD** | ca. **0,0030 USD** |
| Gemini 2.5 Flash-Lite | ca. **0,0010 USD**, solange Search-Grounding im Freikontingent liegt | ca. **0,0020 USD** |
| Grünerator | **noch nicht belastbar kalkulierbar** | direkte Nutzeroberfläche kostenlos; externe FIB-API ungeklärt |

Für redaktionelle Qualitätseskalation:

| Modell | Profil B |
|---|---:|
| OpenAI GPT-5.6 Sol | ca. **0,044 USD** |
| Mistral Medium 3.5 | ca. **0,033 USD** |
| Anthropic Claude Sonnet 5 | ca. **0,044 USD** |

## 7. Beispielhafte Monatskosten

### 7.1 1.000 freie Besucherfragen pro Monat

| Anbieter / Modell | ungefähr |
|---|---:|
| OpenAI GPT-5.6 Luna | **12,40 USD / Monat** |
| Mistral Small 4 | **31,50 USD / Monat** |
| Gemini 2.5 Flash-Lite | **1,00 USD / Monat**, solange die Suchanfragen innerhalb des aktuellen Freikontingents bleiben |
| Grünerator | nicht belastbar kalkulierbar |

### 7.2 200 redaktionelle Überarbeitungen pro Monat

Ohne Websuche:

| Anbieter / Modell | ungefähr |
|---|---:|
| OpenAI GPT-5.6 Luna | **0,96 USD / Monat** |
| Mistral Small 4 | **0,60 USD / Monat** |
| Gemini 2.5 Flash-Lite | **0,40 USD / Monat** |

Mit stärkeren Vergleichsmodellen:

| Anbieter / Modell | ungefähr |
|---|---:|
| OpenAI GPT-5.6 Sol | **8,80 USD / Monat** |
| Mistral Medium 3.5 | **6,60 USD / Monat** |
| Anthropic Claude Sonnet 5 | **8,80 USD / Monat** |

### 7.3 80 vorab erzeugte Vertiefungsantworten

Mit je einer Websuche:

| Anbieter / Modell | ungefähr |
|---|---:|
| OpenAI GPT-5.6 Luna | **0,99 USD** |
| Mistral Small 4 | **2,52 USD** |
| Gemini 2.5 Flash-Lite | **0,08 USD**, solange Search-Grounding im Freikontingent liegt |

Danach sind die Abrufe der gespeicherten Antworten unabhängig von der Besucherzahl ohne weitere Modellkosten möglich.

## 8. Zielarchitektur zur Kostenbegrenzung

1. bekannte Quellen direkt und ohne KI-Websuche abrufen,
2. Inhalte im eigenen FIB-Recherchebestand speichern,
3. neue oder geänderte Quellen erkennen,
4. KI nur für relevante neue/geänderte Inhalte aufrufen,
5. vorgegebene „Mehr wissen?“-Fragen samt Antworten und Quellen **vorab erzeugen und speichern**,
6. Antworten mit einem **Informationsstand** versehen,
7. Aktualisierung nur bei relevanter Quellenänderung, Ablaufregel oder redaktioneller Anforderung,
8. Live-KI hauptsächlich für **freie Besucherfragen** und ausdrücklich angeforderte Redaktionsunterstützung einsetzen,
9. Tages-/Monatsbudgets und Rate Limits technisch erzwingen.

Damit wird die Besucherzahl weitgehend von den KI-Kosten entkoppelt.

## 9. Aktualität gespeicherter Antworten

Jede gespeicherte Antwort erhält mindestens:
- Erstellungsdatum,
- Informationsstand,
- verwendete Quellen,
- zugrunde liegenden Beitrag bzw. Thema,
- Provider und Modell,
- Status der redaktionellen Prüfung.

Eine Antwort wird zur erneuten Prüfung markiert, wenn sich eine ihrer Quellen ändert, ein neuer FIB-Beitrag denselben Sachverhalt wesentlich fortschreibt, sich ein relevantes Thema ändert, eine maximale Gültigkeitsdauer erreicht wird oder die Redaktion eine Neubewertung anstößt.

Die Gültigkeitsdauer soll sachverhaltsabhängig sein: stabiler Rechtsrahmen typischerweise länger, laufende Planung oder Pilotprojekt kürzer.

## 10. Kostenkontrolle im Echtbetrieb

Für jeden KI-Aufruf soll intern protokolliert werden:
- Zeitpunkt,
- Funktionsart: Besucher / Redaktion / Hintergrundgenerierung,
- Provider und Modell,
- Eingabe- und Ausgabetokens,
- Zahl kostenpflichtiger Tool-/Websuchaufrufe,
- geschätzte oder vom Provider gemeldete Kosten,
- Cache-Treffer ja/nein,
- Beitrag/Thema als technische Referenz,
- keine unnötigen personenbezogenen Inhalte.

Monatliche Auswertung:
- Gesamtkosten KI,
- Kosten Besucherfragen,
- Kosten Redaktion,
- Kosten Vorabgenerierung,
- Durchschnittskosten je Vorgang,
- Cache-Anteil,
- Zahl externer Websuchen,
- Budgetauslastung.

## 11. Auswahlentscheidung

Der wirtschaftliche Vergleich entscheidet nicht isoliert. Gemeinsam bewertet werden mindestens:
- Faktentreue,
- Quellenqualität und Quellenpräzision,
- Kontextverständnis für Feldkirchen,
- Qualität der Frageauswahl,
- Aktualität,
- Datenschutz und Datenresidenz,
- technische Integrationsfähigkeit,
- Betriebsstabilität,
- Anbieter-/Modellunabhängigkeit,
- tatsächliche Kosten aus dem FIB-Testkorpus.

Die Preiskalkulation wird Bestandteil desselben Anbieter-/Modelltests wie die Qualitätsprüfung.

## 12. Offene Punkte

- API-/MCP-Nutzungs- und Kostenmodell des Grünerators direkt mit dem Betreiber klären.
- Reale Tokenmengen aus dem Demonstrator erfassen und die Annahmeprofile ersetzen.
- Zielbudget der Ortsgruppe pro Monat festlegen.
- Festlegen, welche Besucherfragen live beantwortet werden und welche aus vorbereiteten Antworten stammen.
- Aktualitätsregeln je Fragetyp/Sachverhalt definieren.
- Produktivkonten und Rechnungszuständigkeit der Ortsgruppe vor Go-live verbindlich festlegen.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 28.09.2026 | Erstfassung: Besucher-/Redaktionskosten, Preisvergleich OpenAI/Mistral/Grünerator/Gemini, Beispielprofile, Cache-/Aktualitätsstrategie sowie organisatorischer Betrieb im Account der GRÜNEN Ortsgruppe dokumentiert. |
