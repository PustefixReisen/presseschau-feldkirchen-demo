# FIB – Frontend und Darstellung

**Stand:** 24.09.2026  
**Status:** verbindlicher Arbeitsstand für Demonstrator; Zielbild für öffentliche FIB-Darstellung

## 1. Zweck

Dieses Dokument beschreibt Aufbau, Gestaltung und Interaktionsregeln der öffentlichen Oberfläche von **Feldkirchen im Blick (FIB)**. Es ergänzt die fachliche Beschreibung, den KI-Leitfaden, das Bildkonzept und die Architektur-Dokumentation.

Der Demonstrator ist derzeit eine statische HTML/CSS/JavaScript-Anwendung auf GitHub Pages. Für den Echtbetrieb ist die Einbindung in die Website der GRÜNEN Feldkirchen vorgesehen. Gestalterische Zielreferenz ist **Sunflower** bzw. die bestehende GRÜNE-Feldkirchen-Website. Die endgültige technische Ausspielung über WordPress/Sunflower oder einen eigenen HTML-Generator bleibt von der fachlichen Darstellung getrennt.

## 2. Gestaltungsgrundsätze

- Orientierung an Erscheinungsbild und Nutzerführung der GRÜNEN Feldkirchen / Sunflower.
- Hoher Kontrast, klare Typografie und großzügige Abstände.
- Inhalte stehen vor dekorativen Elementen.
- Mobile Darstellung ist gleichwertig zur Desktop-Darstellung.
- Quellen und politische Einordnung bleiben visuell unterscheidbar.
- Barrierefreiheit: semantisches HTML, Tastaturbedienbarkeit, Alt-Texte, sichtbarer Fokus, sinnvolle ARIA-Beschriftungen.

## 3. Hauptnavigation

Die öffentliche FIB-Oberfläche enthält fünf Hauptbereiche:

1. **Feldkirchen im Blick / Beiträge** – aktuelle Beiträge, neueste zuerst.
2. **Sitzungen** – relevante öffentliche Sitzungen und Tagesordnungspunkte.
3. **Themen** – länger laufende Themenbeiträge.
4. **Archiv** – ältere Beiträge.
5. **Über FIB** – Transparenz zu Quellen, KI-Einsatz und redaktioneller Verantwortung.

Im Demonstrator kann die Navigation technisch noch mit der Bezeichnung `Presseschau` geführt sein; fachlich ist der Oberbegriff **Feldkirchen im Blick** maßgeblich.

## 4. Beitragskarten

Eine Beitragskarte enthält in dieser Reihenfolge:

1. Metadaten: Datum, Ort, Kategorie.
2. Überschrift.
3. Teaserbereich mit Untertitel und Anrisstext; optional Bild.
4. Quellen.
5. optional „Was bisher passiert ist“.
6. optional „Unsere Einordnung“.
7. Link zur zugehörigen Sitzung.
8. „Mehr zum Thema“.

Quellen-, Sitzungs- und Themenbereiche bleiben auch bei Beiträgen mit Bild über die volle Kartenbreite erhalten.

## 4.1 Sortierung der Beiträge

Die Beitragsliste wird nach dem sichtbaren Beitragsdatum absteigend sortiert; neuere Meldungen stehen vor älteren.

Bei gleichem Datum wird als zweiter Sortierschlüssel eine redaktionelle Relevanz verwendet. Diese Relevanz darf nicht nach politischer Richtung, Partei, Person oder gewünschter Aussage bestimmt werden. Für den Demonstrator gelten neutrale Strukturmerkmale:

1. unmittelbarer Feldkirchen-Bezug,
2. Einbindung in ein dauerhaftes FIB-Thema,
3. Bezug zu einer konkreten öffentlichen Sitzung,
4. kurzfristige reine Service-/Alltagshinweise werden bei gleichem Datum hinter dauerhaft relevanteren Sachentwicklungen einsortiert.

Ein expliziter technischer Relevanzwert darf diese Kriterien abbilden, muss aber redaktionell nachvollziehbar bleiben. Bei weiterhin gleichem Rang erfolgt nur noch eine deterministische technische Sortierung ohne inhaltliche Wertung.

### 4.2 Aktualisierungen bestehender Beiträge

Wird ein bestehender Beitrag aufgrund eines **neuen öffentlich belegten Sachstands** fortgeschrieben, zeigt der Untertitel immer nur die neueste Aktualisierung im Format:

`Aktualisierung vom TT.MM.JJJJ: [kurzes Stichwort].`

Das Datum ist das **nachweisbare Datum, an dem der neue Sachstand öffentlich geworden ist** (z. B. Veröffentlichungsdatum einer Meldung, öffentliche Freigabe einer Beschlussvorlage oder Veröffentlichung einer Niederschrift). Es ist **nicht** das Datum, an dem FIB den Sachstand recherchiert, erkannt, verarbeitet oder in den Demonstrator übernommen hat. Ist das öffentliche Datum nicht belastbar feststellbar, darf kein bloßes Verarbeitungsdatum als Aktualisierungsdatum ausgegeben werden; der Datumsbezug muss zunächst geklärt werden.

Frühere Aktualisierungen werden in einem eigenen Abschnitt „Aktualisierungen“ bzw. „Was sich geändert hat“ mit Datum und Stichwort geführt. Der Haupttext bildet den aktuellen Sachstand ab.

Reine redaktionelle Korrekturen eigener Fehler oder technische Darstellungsfehler werden ohne öffentlichen Aktualisierungshinweis korrigiert.

Wenn eine Entwicklung einen eigenständigen neuen Nachrichtenwert hat – insbesondere neue Entscheidung, neuer Verfahrensschritt oder neue öffentliche Auseinandersetzung – wird stattdessen ein neuer Beitrag angelegt und über „Was bisher passiert ist“ bzw. das Thema verknüpft.

## 5. Bilder in Beiträgen

### 5.1 Desktop

Bei einem Beitrag mit Bild wird nur der Teaserbereich zweispaltig dargestellt:

- **links:** Bild mit Bildunterschrift, ca. 1/3 der verfügbaren Breite,
- **rechts:** Untertitel und Anrisstext, ca. 2/3,
- Abstand zwischen beiden Bereichen etwa 24 px.

Das Bild wird proportional skaliert und nicht durch einen festen Ausschnitt beschnitten.

### 5.2 Mobil

Bei schmalen Ansichten (derzeit Breakpoint etwa 760 px):

1. Bild,
2. Bildunterschrift,
3. Untertitel,
4. Anrisstext.

Der restliche Beitrag folgt darunter einspaltig.

### 5.3 Bildunterschrift und Alt-Text

Bildunterschriften folgen grundsätzlich dem Muster:

`Sachliche Bildbeschreibung. © Urheber`

Jedes Bild erhält einen motivbezogenen Alt-Text. Urheber- und Rechtehinweise werden sichtbar am Bild geführt.

## 6. „Mehr zum Bild“

Wenn geprüftes Motivwissen vorliegt, ist das Bild als Schaltfläche nutzbar. Ein Klick öffnet ein **Modal/Overlay**, nicht ein neues Browserfenster.

Das Modal kann enthalten:

- vergrößerte Bildansicht,
- kurze Überschrift zum Motiv,
- geprüfte Hintergrundinformationen zum Motiv,
- bei Einrichtungen Adresse und ggf. Kontaktdaten,
- knappe heimatkundliche Informationen, soweit sie zum Verständnis beitragen,
- Quellen bzw. weiterführende Links,
- Informationsstand bei veränderlichen Angaben.

Nicht jedes Bild braucht ein Modal. Es wird nur angeboten, wenn ein inhaltlicher Mehrwert vorhanden ist.

### 6.1 Trennung vom Beitrag

„Mehr zum Bild“ erläutert das **Motiv**, nicht den politischen Vorgang des Beitrags. Beitrag und Motivwissen dürfen sich ergänzen, sollen sich aber nicht unnötig wiederholen.

### 6.2 Datenbasis

Die Bildbibliothek enthält neben der Faktenbasis einen **bereits redaktionell geprüften öffentlichen Motivtext**. Dieser Standardtext wird grundsätzlich schon beim Einstellen des Bildes formuliert und später wiederverwendet.

Bei der konkreten FIB-Nutzung wird der Text nicht routinemäßig neu erzeugt. Die KI prüft nur **zeitabhängige Fakten** (z. B. Bauzustand, Warnhinweise, Kontaktdaten, laufende Planungen) auf Aktualität und passt den öffentlichen Motivtext nur an, wenn dies sachlich erforderlich ist. Interne Steuerungshinweise werden niemals veröffentlicht.

## 7. Themen- und Sitzungskarten

Themenkarten fassen länger laufende Entwicklungen zusammen und können „Unsere Einordnung“, offene Fragen und Quellen enthalten. Sitzungskarten dokumentieren relevante Tagesordnungspunkte mit direktem Vorlagenlink, soweit dieser belastbar verfügbar ist.

Bilder werden bei Themen und Sitzungen nur eingesetzt, wenn sie einen klaren konkreten Bezug haben. Die Priorität liegt zunächst auf Beitragskarten.

## 8. Responsives Verhalten

- Desktop/Tablet: Karten nutzen die verfügbare Inhaltsbreite; Bildteaser zweispaltig.
- Smartphone: einspaltige Darstellung.
- Keine horizontale Scrollbarkeit durch Inhaltselemente.
- Navigation muss auch auf kleinen Displays vollständig bedienbar bleiben.
- Modals müssen auf kleinen Displays innerhalb des Viewports scrollen können.

## 9. Technische Struktur des Demonstrators

Aktueller Demonstrator:

- `data/beitraege.json`, `data/sitzungen.json` und `data/themen.json` – **kanonischer persistenter fachlicher Bestand**,
- `index.html` – daraus synchronisierte statische Ausgabe für den Demonstrator,
- `assets/style.css` – allgemeine Gestaltung,
- `assets/app.js` – Einstiegspunkt für JavaScript-Module,
- `assets/image-layout.css` – bildbezogene Darstellung,
- `assets/image-features.js` – Bildzuordnung und „Mehr zum Bild“,
- `assets/images/` – veröffentlichte Webbilder.

Historische `update-*.js`- und Korrekturskripte bleiben aus Gründen der Nachvollziehbarkeit im Repository erhalten, werden aber **nicht mehr beim Seitenaufruf ausgeführt**. Fachliche Beiträge, Themen oder Sitzungsstände dürfen nicht ausschließlich per JavaScript erzeugt, entfernt oder überschrieben werden. JavaScript ergänzt nur Darstellung und Bedienung, etwa Sortierung, Suche, Bilder, Teilen und Drucken.

Bei jedem vollständigen FIB-Update wird die statische Ausgabe mit dem persistenten Bestand abgeglichen. Sichtbare fachliche IDs dürfen weder im Datenbestand noch in `index.html` fehlen oder doppelt vorkommen.

Für den Echtbetrieb bleibt das Ziel unverändert: strukturierter persistenter Bestand als einzige fachliche Quelle und daraus automatisiert generierte Ausgabe.

## 10. Bildimport und Bildzuordnung

Die Bildbibliothek ist die fachliche Quelle für verfügbare Motive. Die Zuordnung eines Bildes zu einem FIB-Beitrag oder Thema wird bereits beim Bildimport soweit wie möglich vorbereitet und später bei jeder konkreten Verwendung erneut geprüft.

Für die Zuordnung gilt verbindlich:

1. **Explizite Zuordnung hat Vorrang.** Wenn bekannt ist, dass ein Bild genau einen bestimmten Vorgang, Ort oder ein bestimmtes Projekt zeigt, wird diese konkrete Zuordnung als primäre Verwendung gespeichert.
2. **Projekt-/Objektidentität vor allgemeinem Themenbezug.** Ein Bild eines konkreten Projekts wird zuerst dem Beitrag zu diesem Projekt zugeordnet und nicht nur einem allgemeineren Thema derselben Kategorie.
3. **Beiträge werden strenger bebildert als Themen.** Bei Beiträgen muss das Bild den konkreten Vorgang, Ort oder Gegenstand zeigen. Bei längerfristigen Themen darf ein Bild einen zentralen Aspekt des Themas abbilden.
4. **Konkreter Orts-/Sachbezug vor generischem Motiv.** Ein nur ungefähr passendes oder rein symbolisches Bild wird nicht verwendet. Kein Bild ist besser als ein sachlich falsches oder missverständliches Bild.
5. **Mehrfachverwendung ist möglich**, wenn jede einzelne Zuordnung fachlich belastbar ist. Eine primäre Zuordnung bleibt davon unberührt.
6. **Ausschlüsse werden berücksichtigt.** Wenn ein Bild leicht mit einem anderen Projekt oder Vorgang verwechselt werden kann, kann ausdrücklich festgelegt werden, wofür es nicht verwendet werden soll.
7. **Veröffentlichungsvoraussetzungen bleiben zwingend:** geklärte Rechte, geeigneter Alt-Text, sachliche Bildunterschrift, Datenschutz sowie Prüfung zeitabhängiger Angaben.

### 10.1 Angaben beim Bildimport

Beim Bildimport werden nach Möglichkeit zusätzlich zu den technischen und rechtlichen Angaben folgende Felder erfasst:

- **Primärzuordnung:** konkreter Beitrag, Vorgang, Ort oder Projekt; vorhandene FIB-ID wird ergänzt, wenn sie ermittelt werden kann.
- **Weitere geeignete Verwendung:** zusätzliche Themen oder Beiträge, für die das Motiv ebenfalls sachlich passt.
- **Nicht verwenden für:** Ausschlüsse bei Verwechslungsgefahr oder unpassenden nahe liegenden Zuordnungen.
- **Schlagworte:** allgemeine Such- und Vorschlagshilfen für spätere FIB-Updates.

Der Nutzer muss dabei keine internen FIB-IDs kennen. Hinweise in normaler Sprache wie „Das Bild zeigt genau das Projekt aus dem Beitrag über die 166 Eigentumswohnungen“ oder „nicht für das betreute Wohnen verwenden“ reichen aus. Die KI ermittelt daraus, soweit eindeutig möglich, die passende bestehende Beitrags- oder Themen-ID und übernimmt sie in die strukturierte Zuordnung.

Wenn aus Bild und Kontext bereits eindeutig hervorgeht, welcher konkrete FIB-Beitrag oder welches Projekt gemeint ist, soll die KI die Primärzuordnung selbst vorschlagen beziehungsweise festlegen. Nur bei verbleibender Mehrdeutigkeit wird gezielt nachgefragt.

### 10.2 Technische Umsetzung

Die konkrete Zuordnung im Demonstrator erfolgt derzeit über JavaScript-Konfiguration. Im Echtbetrieb soll sie aus dem strukturierten FIB-Datenbestand erzeugt werden. Explizite redaktionelle Zuordnungen müssen dabei Vorrang vor automatischen Text- oder Schlagwortregeln haben.

## 11. Sunflower und Echtbetrieb

Der Demonstrator bildet die fachlich gewünschte FIB-Darstellung unabhängig vom späteren Veröffentlichungsweg ab. Für den Echtbetrieb soll die Oberfläche so weit wie möglich in die bestehende **Sunflower-/WordPress-Umgebung der GRÜNEN Feldkirchen** integriert werden. FIB-spezifische Komponenten – insbesondere Beitragsteaser, Quellenbereiche, Einordnung und „Mehr zum Bild“ – müssen dort funktional und responsiv erhalten bleiben.

Wo Sunflower vorhandene Standardkomponenten bereitstellt, sollen diese bevorzugt genutzt werden. Eigene CSS-/JavaScript-Erweiterungen werden auf FIB-spezifische Funktionen begrenzt.

## 12. Transparenz zu KI, Quellen und redaktioneller Verantwortung

Für den öffentlichen Echtbetrieb gilt folgende Darstellungsregel:

- Jeder Presseschau-Beitrag enthält am Kartenende einen kompakten **Info-Button**.
- Der Info-Button öffnet einen kurzen Transparenzhinweis in einem Dialogfenster; mobil wird dieser platzsparend am unteren Bildschirmrand dargestellt.
- Der Kurztext weist darauf hin, dass bei Recherche und Texterstellung KI eingesetzt wird, veröffentlichte Beiträge redaktionell geprüft und freigegeben werden, sachliche Aussagen auf den angegebenen Quellen beruhen und „Unsere Einordnung“ die politische Einordnung aus grüner Perspektive kennzeichnet.
- Der Link **„Mehr erfahren“** führt vom Dialog zum Hauptbereich **„Über FIB“**.
- Ein zusätzlicher Transparenzhinweis im Seiten-Footer ist nicht vorgesehen.
- „Über FIB“ erläutert ausführlicher den KI-Einsatz, die Quellenbindung, die redaktionelle Prüfung und Freigabe, die Möglichkeit verbleibender Fehler sowie die Funktion von „Unsere Einordnung“.
- Maßgeblich bleiben die verlinkten Originalquellen.
- Die ausführliche Erklärung wird nicht unter jedem einzelnen Beitrag wiederholt.

Der Demonstrator zeigt diese für den Echtbetrieb vorgesehene Lösung bereits vor Einführung des redaktionellen Freigabeworkflows, damit Wirkung und Benutzerführung erprobt werden können. Der dort dargestellte Freigabeprozess ist daher als Zielbild des Echtbetriebs zu verstehen.

## 13. Pflege der Frontend-Dokumentation

Änderungen, die im Demonstrator als verbindliche Darstellungsentscheidung getestet und übernommen werden, werden in diesem Dokument nachgeführt. Fachliche Bildregeln bleiben zusätzlich im `Bildkonzept_FIB.md`; konkrete Bilddaten und Motivwissen in `FIB_Bildbibliothek.md`.


## 14. Cache-Busting bei Demonstrator-Updates

Damit nach einer Aktualisierung des Demonstrators nicht veraltete CSS- oder JavaScript-Dateien aus dem Browser-Cache angezeigt werden, werden zentrale Assets mit einer Versionskennung in der URL eingebunden, zum Beispiel `style.css?v=...` und `app.js?v=...`.

Bei sichtbaren Frontend-Änderungen wird diese Versionskennung mit aktualisiert. Ein normales Neuladen im Browser soll dadurch genügen, sobald GitHub Pages die neue Version ausgeliefert hat.
