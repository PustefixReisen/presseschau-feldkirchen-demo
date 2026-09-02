# FIB – Frontend und Darstellung

**Stand:** 02.09.2026  
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

Die öffentliche FIB-Oberfläche enthält vier Hauptbereiche:

1. **Feldkirchen im Blick / Beiträge** – aktuelle Beiträge, neueste zuerst.
2. **Sitzungen** – relevante öffentliche Sitzungen und Tagesordnungspunkte.
3. **Themen** – länger laufende Themenbeiträge.
4. **Archiv** – ältere Beiträge.

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

Die in der Bildbibliothek gespeicherte **Faktenbasis** ist nicht zwingend der endgültige Veröffentlichungstext. Vor Ausgabe werden nur freigegebene, belegte und aktuelle Fakten ausgewählt und zu einem kurzen lesbaren Text formuliert. Interne Steuerungshinweise werden niemals veröffentlicht.

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

- `index.html` – statischer Ausgangsinhalt,
- `assets/style.css` – allgemeine Gestaltung,
- `assets/app.js` – Einstiegspunkt für JavaScript-Module,
- weitere `assets/*.js` – Aktualisierungs- und Darstellungslogik,
- `assets/image-layout.css` – bildbezogene Darstellung,
- `assets/image-features.js` – Bildzuordnung und „Mehr zum Bild“,
- `assets/images/` – veröffentlichte Webbilder.

Neue Funktionen sollen möglichst modular ergänzt werden, damit die große statische `index.html` nicht für jede Darstellungsänderung neu geschrieben werden muss.

## 10. Bildzuordnung

Die Bildbibliothek ist die fachliche Quelle für verfügbare Motive. Bei jedem FIB-Update wird geprüft:

1. konkretes Bild des behandelten Orts/Gegenstands,
2. direkter örtlicher Zusammenhang,
3. passendes lokales Themenmotiv,
4. andernfalls kein Bild.

Die konkrete Zuordnung im Demonstrator erfolgt derzeit über JavaScript-Konfiguration. Im Echtbetrieb soll sie aus dem strukturierten FIB-Datenbestand erzeugt werden.

## 11. Sunflower und Echtbetrieb

Der Demonstrator bildet die fachlich gewünschte FIB-Darstellung unabhängig vom späteren Veröffentlichungsweg ab. Für den Echtbetrieb soll die Oberfläche so weit wie möglich in die bestehende **Sunflower-/WordPress-Umgebung der GRÜNEN Feldkirchen** integriert werden. FIB-spezifische Komponenten – insbesondere Beitragsteaser, Quellenbereiche, Einordnung und „Mehr zum Bild“ – müssen dort funktional und responsiv erhalten bleiben.

Wo Sunflower vorhandene Standardkomponenten bereitstellt, sollen diese bevorzugt genutzt werden. Eigene CSS-/JavaScript-Erweiterungen werden auf FIB-spezifische Funktionen begrenzt.

## 12. Pflege der Frontend-Dokumentation

Änderungen, die im Demonstrator als verbindliche Darstellungsentscheidung getestet und übernommen werden, werden in diesem Dokument nachgeführt. Fachliche Bildregeln bleiben zusätzlich im `Bildkonzept_FIB.md`; konkrete Bilddaten und Motivwissen in `FIB_Bildbibliothek.md`.
