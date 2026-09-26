# KI-Leitfaden Homepage-Presseschau Feldkirchen

**Version 2.7 · Stand 26.09.2026**

> Kanonische Markdown-Fassung für GitHub. Inhaltlich übernommen aus der bisherigen Projektbibliothek und um verbindliche Projektentscheidungen fortgeschrieben.

## 1. Zweck und Verbindlichkeit

Dieser Leitfaden enthält die verbindlichen Arbeitsregeln für die KI-gestützte Erstellung der Homepage-Presseschau von BÜNDNIS 90/DIE GRÜNEN Feldkirchen. Die Ausführung darf nicht von Erinnerungen aus früheren Chats abhängen.

Die Homepage-Presseschau ist fachlich und technisch von der internen Presseschau Ortspolitik Feldkirchen zu unterscheiden. Interne Rechercheergebnisse dürfen als Quelle oder Arbeitsgrundlage dienen, bestimmen aber nicht automatisch die öffentliche Darstellungsform.

Verbindliche Projektgrundlagen sind in ihrer jeweils aktuellen Fassung insbesondere:
- Fachliche_Beschreibung_Homepage-Presseschau
- KI-Leitfaden_Homepage-Presseschau
- Gruene_Werte_und_politische_Ziele.md
- Merkblatt_Wissenschaftlich-Politische_Sprache

## 2. Operativer Grundsatz

Die KI erstellt die Homepage-Presseschau operativ vollständig. Die menschliche Redaktion kontrolliert, korrigiert bei Bedarf und gibt zur Veröffentlichung frei.

- KI: recherchiert, verifiziert, bündelt Quellen, erstellt Beiträge, ordnet Kategorien und Themen zu, erkennt Verknüpfungen, wertet öffentliche Sitzungsinformationen aller relevanten kommunalen Gremien aus, aktualisiert persistente Datenbestände und bereitet Einordnungen vor.
- Redaktion: prüft Tatsachen, politische Aussagen, interne Quellenverwendung und Freigabestatus.

### 2.1 Sprachliche Dreiteilung der öffentlichen Presseschau

Die öffentliche Presseschau verwendet je nach Funktion drei unterschiedliche sprachliche Formen. Sie dürfen nicht vermischt werden. Bürgernahe Sprache ist eine eigenständige Sprachform außerhalb des Rasters der Wissenschaftlich-Politischen Sprachstile. Nur für die sachliche Darstellung der Presseschau-Beiträge gilt der Stil WP-ÖFFENTLICHKEIT gemäß Merkblatt_Wissenschaftlich-Politische_Sprache.

**Benutzerführung – Bürgernahe Sprache:** Navigation, Einleitungen, Hinweistexte, Übergänge, Erläuterungen zur Bedienung sowie Hinweise auf Termine und Veranstaltungen werden in bürgernaher Sprache formuliert. Sie ist allgemein verständlich, direkt und freundlich. Konkrete Formulierungen, geläufige Wörter, aktive Verben, kurze bis mittellange Sätze, direkte Leserorientierung und Kernaussage zuerst. Wesentliche Unsicherheiten, Bedingungen und Zielkonflikte bleiben erhalten.

**Sachbeiträge – WP-ÖFFENTLICHKEIT:** Überschrift, Untertitel und Sachinformation werden sachlich, präzise und quellengebunden formuliert. Tatsachen, Einschätzungen und politische Bewertungen werden getrennt. Informationen werden verständlich verdichtet; Unsicherheiten und offene Fragen kenntlich gemacht; parteipolitische Wertung, Dramatisierung und Werbesprache bleiben aus der Sachinformation heraus.

**„Unsere Einordnung“ – Bürgernahe politische Sprache:** Sie verbindet die dargestellten Tatsachen mit relevanten grünen Werten, Zielen und dokumentierten Positionen. Klar positionieren und begründen; Zielkonflikte sichtbar lassen; politische Herkunft korrekt kennzeichnen; Zuspitzungen sind zulässig, wenn sie belegt sind; keine Abwertung oder unbelegten Motive; gesichtswahrend formulieren; vorschlagend vor fordernd; keine Polemik als Normalform.

Kurzregel:
- Benutzerführung → bürgernahe Sprache.
- Sachbeitrag → WP-ÖFFENTLICHKEIT.
- „Unsere Einordnung“ → bürgernahe politische Sprache.

### 2.2 Styleguide für Benutzerführung und Demonstrator

Öffentlicher Seitentitel: **„Feldkirchen im Blick“**. „Presseschau“ bleibt Funktionsbezeichnung für den Bereich mit aktuellen Beiträgen, ist aber nicht mehr der Seitentitel des Gesamtangebots.

Grundregeln: Nur dort erklären, wo Erklärung hilft; Nutzen statt Technik benennen; kurz und konkret formulieren; direkte Orientierung ermöglichen; Begriffe aus Sicht der Besucher wählen; Transparenz verständlich formulieren; leere Zustände hilfreich gestalten. Änderungen der Benutzerführung dürfen den fachlichen Datenbestand nicht verändern.

## 3. Persistente Datenhaltung

### 3.1 Grundsatz
Die fachlichen Daten werden strukturiert, persistent und darstellungsunabhängig gespeichert. Der Datenbestand ist Grundlage aller späteren Auswertungen und Darstellungen; Webseite oder Demonstrator sind nicht die Datenhaltung selbst. Bereits verifizierte Rechercheergebnisse werden wiederverwendet und nur bei sachlichem Anlass erneut geprüft.

### 3.2 Ebenen
1. Quellen- und Recherchebestand: Quellen, Ereignisse, Dokumente, Veröffentlichungsdaten, Ortsbezug, Verifikations- und Dokumentstatus.
2. Redaktionsbestand: Beiträge, Vorgangsketten, Sitzungen und TOPs, Themen, Quellenbeziehungen, Einordnungen und Referenzgrundlagen.
3. Ausgabe: aus dem Redaktionsbestand erzeugte Darstellung.

### 3.3 Inkrementelles Arbeiten
Neue Rechercheläufe ergänzen oder aktualisieren den vorhandenen Bestand. Nach abgeschlossenen fachlichen Arbeitsschritten sollen persistente Checkpoints vorliegen.

### 3.4 Kanonische Dateien
Für jede kanonische Datei wird nur eine aktuelle Fassung unter stabilem, versionsfreiem Namen geführt. Versionsnummer und Stand stehen im Dokument bzw. in Metadaten. Konkurrierende Kopien wie `_neu`, `_final` oder Versionskopien sind zu vermeiden.

Die bisherigen kanonischen operativen Arbeitsdaten heißen: `recherchebestand.json`, `presseschau_beitraege.json`, `themenbestand.json`, `sitzungsbestand.json`, `interne_quellen_manifest.json` und `VerdeckteQuellen.zip`.

## 4. Rechercheumfang und Quellen

### 4.1 Offene Sachrecherche
Die allgemeine Recherche ist offen, breit und quellenkritisch. Geeignete Quellen sind insbesondere Presse, Gemeinde, Ratsinformationssystem (RIS), Landkreis, Behörden, kommunale Unternehmen, Verbände, Initiativen, fachliche Stellen, Parteien und Wählervereinigungen sowie weitere verlässliche öffentliche Quellen. Regelmäßig zu prüfen sind insbesondere Münchner Merkur, Süddeutsche Zeitung (SZ) und tz. Aus dem Nichtfinden einer Information darf nicht auf ihr Nichtvorhandensein geschlossen werden.

**Lokale Relevanz wird bewusst weit ausgelegt.** FIB soll nicht nur kommunalpolitische Beschlüsse und Verwaltungsverfahren abbilden, sondern einen verlässlichen Überblick über relevante Vorgänge in Feldkirchen geben. Die geringe Zahl lokaler Meldungen ist kein Grund, die Veröffentlichungsschwelle künstlich hoch anzusetzen.

- Pressemitteilungen und redaktionelle Nachrichten der Gemeinde Feldkirchen werden grundsätzlich als FIB-relevant behandelt und als Beitrag übernommen, sofern es sich um eine inhaltliche Meldung mit Ortsbezug handelt. Reine technische Servicehinweise ohne nennenswerten Informationswert dürfen knapp gebündelt oder ausnahmsweise weggelassen werden.
- Auch lokale Ereignisse, über die verlässliche Medien, Behörden, Polizei, Vereine, Initiativen oder andere geeignete Quellen berichten, sind grundsätzlich veröffentlichungsfähig. Ein kommunalpolitischer Beschluss oder ein Tätigwerden der Gemeindeverwaltung ist dafür keine Voraussetzung.
- Entscheidend sind Ortsbezug, verifizierbarer Informationsgehalt und ein plausibles Informationsinteresse der Feldkirchner Öffentlichkeit. Bei Zweifelsfällen gilt im Versuchsbetrieb: eher aufnehmen als wegen einer zu engen Relevanzdefinition verwerfen.
- Ereignisse werden sachlich und proportional dargestellt. Unfälle, Straftaten, Konflikte oder andere sensible Vorfälle werden nicht dramatisiert; personenbezogene Details werden nur übernommen, soweit sie für das Verständnis erforderlich und bereits angemessen öffentlich dokumentiert sind.
- Nicht jede lokale Meldung benötigt „Unsere Einordnung“. Bei Ereignis-, Service- und Alltagsmeldungen kann die sachliche Information genügen. Eine politische Einordnung wird nur ergänzt, wenn sich aus dem Vorgang tatsächlich eine relevante kommunale oder grüne Fragestellung ergibt.

### 4.1.1 Dokumenten-Änderungscheck bei laufenden Themen
Bei jedem vollständigen FIB-Update wird für jedes laufende bzw. etablierte Thema ein Dokumenten-Änderungscheck durchgeführt. Bekannte tragende Seiten von Gemeinde, RIS, Landkreis, Behörden, kommunalen Unternehmen, Vorhabenträgern und sonstigen relevanten Projekt- oder Fachstellen werden auf neue, ersetzte oder überarbeitete Dokumente geprüft, insbesondere PDFs, Konzepte, Gutachten, Berichte, Pläne, Anlagen und Beschlussvorlagen.

Der Check ist von allgemeiner Web- und Nachrichtensuche zu unterscheiden und darf nicht davon abhängen, ob Suchmaschinen Änderungen indexiert haben. Auch eine Datei unter derselben URL kann einen neuen Sachstand darstellen.

Bei jedem vollständigen Update werden bekannte Bereichs-, Übersichts- und Nachrichtenseiten regelmäßig relevanter Quellen direkt auf neue Unterseiten, Meldungen und Downloads geprüft. Dies gilt je nach Quellenbeobachtungsliste auch für Nachbargemeinden, Landkreis, Behörden, Projektträger, Vereine, Verbände, Bürgerinitiativen, NGOs und weitere etablierte Akteure. Eine reine Suchmaschinenabfrage reicht nicht aus.

Die Direktprüfung wird risikobasiert organisiert: Pflichtquellen bei jedem vollständigen Update; themenabhängige Quellen bei entsprechendem Bezug. Die Quellenbeobachtungsliste hält diese Einstufung fest. Soweit technisch ermittelbar, werden Dokumenttitel/Dateiname, Veröffentlichungs- oder Änderungsdatum, Versions-/Standangabe, Linkziel und fachlich relevanter Inhalt verglichen. Technisch nicht zuverlässig prüfbare Quellen werden als Recherche-/Dokumentationslücke protokolliert.

### 4.1.2 Auswertung kommunaler Beschlussvorlagen

Öffentlich freigegebene kommunale Beschlussvorlagen und fachlich einschlägige Anlagen werden unabhängig davon geprüft, ob sie bereits eindeutig einem veröffentlichten Tagesordnungspunkt zugeordnet sind. Beschlussvorlagen sind regelmäßig zentrale Primärquellen für Anlass, Vorgeschichte, Zahlen, Kosten, technische Randbedingungen, Handlungsalternativen, offene Umsetzungsfragen sowie Stellungnahmen von Verwaltung, Gutachtern und Beteiligten.

Neu veröffentlichte bzw. neu freigegebene RIS-Dokumente können deshalb bereits einen eigenständigen neuen Sachstand darstellen, auch wenn ein zugehöriger Tagesordnungspunkt noch nicht veröffentlicht ist oder noch kein bestätigter Sitzungstermin feststeht. Solche Dokumente werden als mögliche FIB-Beiträge geprüft und nicht erst dann berücksichtigt, wenn sie in einer konkreten Tagesordnung erscheinen.

Für die öffentliche Sachinformation gilt:

- belastbare Tatsachen und Zahlen dürfen aus der Beschlussvorlage übernommen und verständlich verdichtet werden;
- Verwaltungsbewertungen werden als solche kenntlich gemacht;
- Argumente und Fragen aus Bürger- oder Initiativschreiben werden den jeweiligen Urhebern zugeschrieben und nicht als feststehende Tatsachen formuliert;
- noch nicht beschlossene Varianten, Prüfaufträge und Alternativen werden ausdrücklich als offen bzw. vorgeschlagen gekennzeichnet;
- eine Beschlussvorlage darf nicht als tatsächlicher Beschluss ausgegeben werden;
- bei umfangreichen Vorlagen werden insbesondere Vorgeschichte, Kosten, technische Einschränkungen, Alternativen, Vollzugsfragen und für das Verständnis wesentliche Kontroversen geprüft;
- die Sachinformation soll die wichtigsten Erkenntnisse der Vorlage nutzen, statt sich auf Tagesordnungstitel oder Kurzbeschreibung zu beschränken;
- wenn eine Vorlage öffentlich freigegeben ist, aber noch kein zugehöriger TOP in einer veröffentlichten Tagesordnung nachgewiesen werden kann, muss dies im Beitrag ausdrücklich sichtbar sein, z. B. mit dem Hinweis „Die Vorlage ist im RIS veröffentlicht; ein zugehöriger Tagesordnungspunkt bzw. Sitzungstermin ist derzeit noch nicht veröffentlicht/bestätigt.“;
- eine in der Vorlage genannte Beratungsfolge oder ein dort genanntes Sitzungsdatum gilt nicht allein dadurch als bestätigter Tagesordnungspunkt. Maßgeblich für die Zuordnung zu einer konkreten Sitzung ist die veröffentlichte Tagesordnung bzw. eine sonstige belastbare öffentliche Sitzungsinformation.

**Datumslogik bei RIS-Dokumenten:** Bei Beschlussvorlagen werden unterschiedliche Datumsarten getrennt geführt und dürfen nicht miteinander gleichgesetzt werden:
- Erstellungs-/Dokumentdatum,
- Datum der öffentlichen Freigabe bzw. erstmaligen öffentlichen Auffindbarkeit,
- in der Vorlage genannter geplanter Sitzungstermin bzw. Beratungsfolge,
- Datum einer veröffentlichten Tagesordnung,
- Datum einer tatsächlich dokumentierten Beratung oder Entscheidung.

Für das Beitragsdatum ist die **maßgebliche neue öffentlich belegte Entwicklung** ausschlaggebend. Wird eine Vorlage öffentlich freigegeben, ohne dass der darin genannte Sitzungstermin durch eine veröffentlichte Tagesordnung bestätigt ist, wird grundsätzlich das Freigabe-/Veröffentlichungsdatum als Beitragsdatum verwendet. Der in der Vorlage genannte Sitzungstermin wird im Beitrag zusätzlich erläutert, wenn er für das Verständnis relevant ist. Fehlt der Vorgang in der veröffentlichten Tagesordnung, muss dieser Widerspruch ausdrücklich sichtbar gemacht werden. Erst eine belastbare öffentliche Dokumentation der tatsächlichen Beratung oder Entscheidung begründet einen neuen Sachstand zum Sitzungstermin.

### 4.1.3 Zwei-Achsen-Presserecherche

Bei jedem vollständigen FIB-Update wird die Presserecherche verbindlich über zwei voneinander unabhängige Suchachsen durchgeführt:

1. **Ortsbasierte Recherche:** Feldkirchen sowie der definierte Nachbarschaftsraum Aschheim, Kirchheim und Haar; bei regionalen Medien zusätzlich relevante Landkreis- und Regionsübersichten.
2. **Themenbasierte Recherche:** alle etablierten bzw. laufenden FIB-Themen werden unabhängig vom Veröffentlichungsort mit ihren maßgeblichen Suchbegriffen geprüft. Die Suchbegriffe werden aus Themenbestand, bekannten Projektnamen, Straßen-/Trassenbezeichnungen, Institutionen und gebräuchlichen Varianten abgeleitet und fortgeschrieben.

Ein vollständiger Recherchelauf gilt erst dann als fachlich abgeschlossen, wenn beide Achsen durchgeführt wurden. Ein Pressebeitrag darf nicht allein deshalb unentdeckt bleiben, weil er von einem Medium unter einer Nachbargemeinde einsortiert wurde oder der Ortsname Feldkirchen weder in Überschrift noch URL vorkommt.

Für regelmäßig relevante Pressequellen werden daher zusätzlich zu Suchmaschinenabfragen geeignete Übersichts- bzw. Lokalseiten direkt geprüft. Für den Münchner Merkur gehören dazu mindestens die Landkreis-München-Übersicht sowie die Lokalseiten Feldkirchen, Aschheim, Kirchheim und Haar.

Beispielhafte thematische Suchbegriffe im Bereich Mobilität sind unter anderem B471, B471 neu, A99, A94, Autobahnkreuz München-Ost, M18, EBE4, Ortsumfahrung Feldkirchen und MobilityHub. Diese Liste ist nicht abschließend; sie wird aus dem aktuellen Themenbestand abgeleitet.


### 4.1.4 Erweiterte Relevanz außerhalb Feldkirchens

FIB berücksichtigt neben unmittelbar Feldkirchen betreffenden Vorgängen auch Entwicklungen außerhalb Feldkirchens, wenn sich eine **konkrete mittelbare oder mögliche zukünftige Bedeutung für Feldkirchen** nachvollziehbar begründen lässt. Die Erweiterung dient nicht dazu, FIB zu einer allgemeinen Regional- oder Nachrichtenübersicht auszubauen.

Eine Fundstelle kann insbesondere relevant sein bei:

- **institutionellem Bezug:** Eine in Feldkirchen aktive Organisation, Einrichtung oder deren übergeordnete Struktur ist betroffen.
- **räumlichem Bezug:** Eine Entwicklung in Nachbargemeinden, im Landkreis München oder in der Landeshauptstadt München kann aufgrund räumlicher Nähe Auswirkungen auf Feldkirchen haben.
- **infrastrukturellem Bezug:** Verkehrs-, Energie-, Umwelt-, Bildungs- oder sonstige Infrastruktur betrifft Netze oder Räume, in die Feldkirchen eingebunden ist.
- **thematischem Bezug:** Eine Entwicklung betrifft ein bereits etabliertes FIB-Thema und liefert dafür neue Erkenntnisse, Vergleichswerte oder absehbare Handlungsoptionen.
- **Pilot-, Vergleichs- oder Vorbildcharakter:** Ein Projekt in der näheren Region erprobt eine Lösung, die aufgrund vergleichbarer Rahmenbedingungen für Feldkirchen relevant werden könnte.
- **möglicher zukünftiger Bedeutung:** Eine heute noch nicht in Feldkirchen wirksame Entwicklung kann aufgenommen werden, wenn eine spätere Bedeutung für Feldkirchen konkret und plausibel begründet werden kann. Eine bloß abstrakte Möglichkeit genügt nicht.

Ein lediglich allgemein interessantes oder thematisch ähnliches Ereignis reicht nicht aus. Für jeden Beitrag mit erweiterter Relevanz wird der Feldkirchen-Bezug transparent erläutert, vorzugsweise unter **„Warum für Feldkirchen interessant“** oder einer gleichwertigen kurzen Kennzeichnung. Belegte aktuelle Wirkungen, plausible zukünftige Auswirkungen und bloße Möglichkeiten werden sprachlich klar voneinander getrennt.

Bei mittelbaren Treffern wird nach Möglichkeit eine **Resonanz- bzw. Wirkungsprüfung** durchgeführt: Gibt es Stellungnahmen betroffener Organisationen, konkrete Leistungen oder Abhängigkeiten für Feldkirchen, bekannte Folgewirkungen oder andere Quellen, die den mittelbaren Bezug präzisieren?

Der Suchraum wird gestaffelt genutzt: Feldkirchen → Nachbarkommunen → Landkreis München → Landeshauptstadt München → Bayern/Bund nur bei hinreichend konkretem institutionellem, sachlichem oder künftigem Feldkirchen-Bezug.

### 4.1.5 Gesellschaftlich-demokratische Relevanz

FIB kann bundesweit nach **konkreten kommunalen Projekten, Verfahren und Entwicklungen** recherchieren, die Bürgerinnen und Bürgern nachvollziehbare Gestaltungsmöglichkeiten im unmittelbaren Lebensumfeld eröffnen, gesellschaftliche Teilhabe fördern oder den Austausch zwischen Bürgerschaft, Politik und Verwaltung verbessern.

Eine Fundstelle wird nur berücksichtigt, wenn:

- es sich um eine **konkrete kommunale Praxis oder ein konkret umsetzbares Modell** handelt,
- ein nachvollziehbarer Erkenntniswert für eine Gemeinde wie Feldkirchen beschrieben werden kann,
- eine grundsätzliche Übertragbarkeit auf Feldkirchen plausibel ist,
- und deutlich bleibt, dass es sich um ein Beispiel bzw. um eine **mögliche zukünftige Gestaltungsmöglichkeit** handelt und nicht um eine für Feldkirchen bereits beschlossene Maßnahme.

Mögliche Themen sind insbesondere Bürgerbudgets/Beteiligungshaushalte, Bürgerräte oder ausgeloste Beteiligungsgruppen, Jugendparlamente und Jugendbudgets, niedrigschwellige analoge oder digitale Beteiligungsformate, aufsuchende Beteiligung, gemeinschaftliche Ortsgestaltung, transparente Rückmeldung zu Bürgervorschlägen sowie kommunale Dialog- und Begegnungsformate.

**Nicht ausreichend** sind allgemeine politische Debatten, abstrakte Demokratieanalysen, reine Parteipositionen oder beliebige gute Praxis ohne nachvollziehbaren kommunalen Übertragungswert.

Wegen des bundesweiten Suchraums gilt eine hohe Veröffentlichungsschwelle: Aufgenommen werden nur besonders aussagekräftige Entwicklungen, die einen neuen Ansatz zeigen, eine bestehende FIB-Frage besonders gut beantworten oder einen außergewöhnlich gut dokumentierten und grundsätzlich übertragbaren Praxisfall darstellen. Damit bleibt FIB lokal verankert und wird nicht zu einer allgemeinen politischen Ideensammlung.

Auch hier wird die Relevanz im Beitrag transparent gemacht, etwa unter **„Warum für Feldkirchen interessant“** bzw. **„Mögliche Bedeutung für Feldkirchen“**. Die Darstellung bleibt sachlich; Nutzen, Grenzen, noch offene Wirkungen und Übertragbarkeitsannahmen werden kenntlich gemacht.

### 4.1.6 Wissenschaftliche und technische Zukunftsrelevanz

FIB beobachtet neben gesellschaftlich-demokratischen Entwicklungen auch **naturwissenschaftliche und technische Veränderungen** mit möglicher kommunaler Bedeutung. Dazu gehören insbesondere Klima und Klimafolgen, Energie, Mobilität, Digitalisierung und Künstliche Intelligenz, Gesundheit, Biodiversität, Wasser, Infrastruktur und Bevölkerungsschutz.

Eine externe Entwicklung kann als eigener FIB-Beitrag aufgenommen werden, wenn alle folgenden Punkte hinreichend erfüllt sind:

- Die Aussage beruht auf belastbaren wissenschaftlichen Erkenntnissen, anerkannten Fachquellen, behördlichen Bewertungen oder einer realen praktischen Erprobung.
- Die Entwicklung kann kommunale Risiken, Handlungsmöglichkeiten, Kosten, Planungsannahmen oder technische Möglichkeiten erkennbar verändern.
- Es gibt einen nachvollziehbaren Übertragungsweg auf Feldkirchen oder auf Kommunen mit vergleichbaren Aufgaben.
- Der Befund ist mehr als allgemeine Neuigkeit oder spekulative Zukunftsmeldung.

Mögliche Auslöser sind insbesondere neue belastbare Erkenntnisse zu regional relevanten Klimafolgen, technische Reife oder Pilotbetrieb neuer kommunal nutzbarer Technologien, neue KI-Anwendungen für Verwaltung oder öffentliche Leistungen, neue Energie-, Speicher- oder Wärmetechnologien, neue Erkenntnisse zu Gesundheit, Wasser, Biodiversität oder Naturgefahren sowie neue fachliche Standards oder Empfehlungen mit absehbarer kommunaler Bedeutung.

Solche Beiträge werden unter **„Mögliche Bedeutung für Feldkirchen“** transparent eingeordnet. Unsicherheit, Reifegrad und Übertragbarkeit werden ausdrücklich benannt. Ein einzelner interessanter Forschungsbefund reicht nicht aus, wenn Belastbarkeit oder kommunale Relevanz noch zu unklar sind.

Diese Relevanzregel soll zugleich als **Impulsgeber für Trends** wirken: Mehrere entsprechende Beiträge oder ein besonders grundlegender Befund können eine Trend-Recherche auslösen. Umgekehrt darf ein Trend auch unabhängig von einem Presseschau-Beitrag aus eigenständiger Zukunfts- und Hintergrundrecherche entstehen.

### 4.2 Parteien und Wählervereinigungen
Öffentliche Auftritte politisch aktiver Parteien und Wählervereinigungen werden berücksichtigt, mit erhöhter Relevanzschwelle. Konkrete kommunalpolitische Anträge, Initiativen, Änderungsvorschläge und Reaktionen auf Entscheidungen sind relevant. Parteiquellen sind grundsätzlich Positionsquellen; überprüfbare Sachbehauptungen werden möglichst unabhängig verifiziert und politische Positionen klar zugeschrieben.

### 4.3 Vereine, Verbände, lokale Initiativen und Bürgerinitiativen
Sie werden systematisch berücksichtigt, wenn Meldungen über internes Vereinsleben hinaus kommunale Bedeutung haben. Öffentliche Beteiligungsaufrufe, Umfragen und Mitwirkungsmöglichkeiten werden als mögliche eigenständige Entwicklung geprüft. Bürgerinitiativen sind eine besonders relevante Quellenklasse; bei substanziellen Aktivitäten wird gezielt nach Rückmeldungen, Gegenpositionen und Resonanz gesucht. Recherche und Veröffentlichung bleiben getrennt; mehrere Aktivitäten desselben Anliegens werden redaktionell gebündelt. Substanzielle BI-Anliegen werden als Kandidaten für dauerhafte Themen geprüft.

### 4.4 Nachbargemeinden
Definierter Nachbarschaftsraum: Aschheim, Kirchheim und Haar. Vorgänge werden aufgenommen, wenn ein sachlicher Bezug zu einem für Feldkirchen relevanten Thema besteht.

### 4.5 Lokale grüne Anträge und interne Hintergrundquellen
Für den Demonstrator gilt der Bibliotheksordner `Arbeitsdaten/Anträge-Gruene-Feldkirchen` als feste lokale grüne Hintergrundquelle. Dort abgelegte Anträge, Anfragen und Stellungnahmen dürfen für Themenpflege, Recherchelenkung und „Unsere Einordnung“ verwendet werden, auch wenn die Dokumente selbst nicht öffentlich im Internet zugänglich sind.

Dabei gelten folgende Regeln:
- Nicht öffentlich zugängliche Dokumente werden **nicht** als öffentliche Quelle verlinkt oder so dargestellt, als könnten Leserinnen und Leser sie selbst aufrufen.
- Ihr Inhalt darf zur Einordnung dokumentierter lokaler grüner Positionen und zur Erkennung von Zusammenhängen genutzt werden. Die öffentliche Sachinformation darf daraus keine unbelegten Tatsachen über Verwaltung, Gemeinderat oder Dritte ableiten.
- Wenn ein solcher Antrag später öffentlich im Ratsinformationssystem, in einer Tagesordnung, Beschlussvorlage, Niederschrift oder anderen belastbaren Quelle erscheint, wird dieser öffentliche Vorgang verknüpft und als Quelle angegeben.
- Interne Antragskenntnis kann die Recherche steuern: Bei Updates wird gezielt geprüft, ob zu dem Anliegen inzwischen ein öffentlicher Folgevorgang, eine Reaktion, eine Beschlussvorlage, eine Entscheidung oder Presseberichterstattung vorliegt.
- Für Themen können mehrere lokale Anträge als Hintergrundwissen zusammengeführt werden, um Querverbindungen zwischen z. B. Ortsentwicklung, Grünplanung, Klimaanpassung, Mobilität und Bürgerbeteiligung sichtbar zu machen.
- In Metadaten wird kenntlich gemacht, ob eine lokale Position nur intern als Antragswissen vorliegt oder durch eine öffentliche Quelle bestätigt ist.

## 5. Beitragserstellung

Ein Beitrag entsteht bei einer konkreten neuen Entwicklung mit Feldkirchen-Relevanz oder begründetem Nachbarschaftsbezug. **Für originär lokale Meldungen ist eine zusätzliche kommunalpolitische Relevanzschwelle nicht erforderlich.** Mehrere Quellen zur selben Entwicklung werden gebündelt. Eine zusätzliche Quelle allein erzeugt keinen neuen Beitrag ohne neuen relevanten Sachstand. Auch der Beginn einer zeitlich begrenzten öffentlichen Beteiligung kann eine neue Entwicklung sein.

Beitragsdatum ist das Datum der maßgeblichen neuen Entwicklung; wenn nicht sicher feststellbar, das Datum der ersten verifizierten Veröffentlichung. Titel benennt die neue Entwicklung; Untertitel den entscheidenden Befund oder die unmittelbare Bedeutung; Sachinformation ist vollständig genug zum Verständnis. Quellen stehen unmittelbar danach. Keine zusätzlichen Tatsachen, Ursachen, Rollen, Bewertungen oder zeitlichen Zusammenhänge aus bloßer Plausibilität.

### 5.1 Aktualisierung bestehender Beiträge

Wird ein bereits veröffentlichter Beitrag aufgrund eines neuen öffentlich belegten Sachstands inhaltlich fortgeschrieben, bleibt der ursprüngliche Gegenstand des Beitrags erkennbar. Der Untertitel erhält **immer einen sichtbaren Aktualisierungshinweis** nach dem Muster:

**„Aktualisierung vom TT.MM.JJJJ: [kurzes Stichwort zum Gegenstand der Aktualisierung].“**

Beispiele:
- „Aktualisierung vom 23.09.2026: Beschlussvorlage veröffentlicht.“
- „Aktualisierung vom 05.10.2026: Gemeinderatsbeschluss liegt vor.“
- „Aktualisierung vom 12.10.2026: Kostenberechnung ergänzt.“

Der Hinweis benennt möglichst konkret, **welche neue Quelle oder welcher neue Sachstand** die Aktualisierung ausgelöst hat. Dabei wird die Terminologie der Primärquelle bevorzugt. Wenn das Ratsinformationssystem von einer **Beschlussvorlage** spricht, wird nicht pauschal von „Sitzungsinformation“ gesprochen.

Das Datum der sichtbaren Aktualisierung und das ursprüngliche Ereignisdatum dürfen nicht vermischt werden. Die Darstellung muss für Leserinnen und Leser unmittelbar erkennen lassen:
1. worum es ursprünglich ging,
2. wann der Beitrag aktualisiert wurde und
3. was bei dieser Aktualisierung neu hinzugekommen ist.

**Mehrere Aktualisierungen:** Im Untertitel steht immer nur die **neueste** Aktualisierung. Frühere Aktualisierungen werden in einem eigenen Abschnitt „Aktualisierungen“ bzw. „Was sich geändert hat“ mit Datum und kurzem Stichwort fortgeführt. Der Haupttext wird auf den aktuellen Sachstand gebracht; überholte Aussagen werden nicht unverändert parallel stehen gelassen.

**Abgrenzung Aktualisierung / neuer Beitrag:** Eine bestehende Karte wird aktualisiert, wenn derselbe Vorgang lediglich präzisiert, ergänzt oder mit einer neuen Quelle unterlegt wird. Ein **neuer Beitrag** entsteht dagegen, wenn ein eigenständiger neuer Sachstand vorliegt, insbesondere eine neue Entscheidung, ein neuer Verfahrensschritt, eine neue öffentliche Auseinandersetzung oder eine andere Entwicklung mit eigenständigem Nachrichtenwert. In diesem Fall werden die Beiträge über „Was bisher passiert ist“ bzw. die Themenverknüpfung miteinander verbunden.

**Redaktionelle Korrekturen:** Reine Korrekturen eigener redaktioneller Fehler, technischer Darstellungsfehler oder bereits zum ursprünglichen Veröffentlichungszeitpunkt falsch bzw. unvollständig übernommener Angaben erhalten **keinen öffentlichen Aktualisierungshinweis**. Der Hinweis „Aktualisierung vom …“ wird nur verwendet, wenn nach der ursprünglichen Veröffentlichung ein **neuer öffentlich belegter Sachstand** hinzugekommen ist.

## 6. Was bisher passiert ist
Frühere relevante Entwicklungsschritte werden nur angezeigt, wenn vorhanden. Der aktuelle Beitrag wird nicht nochmals aufgeführt.

## 7. Sitzungen und kommunale Gremien

Für jeden Recherchezeitraum wird zunächst die vollständige Liste aller öffentlich dokumentierten Sitzungen relevanter kommunaler Gremien ermittelt und jede öffentliche Tagesordnung vollständig geprüft. Erst danach werden wichtige TOPs ausgewählt.

Jede Sitzung wird als eigene mobile Karte dargestellt: wichtige TOPs, Hinweis auf weitere öffentliche TOPs, Link auf die konkrete Sitzung im RIS, Status/Link der Niederschrift.

Direkte Vorlagenlinks werden nur angezeigt, wenn das konkrete Dokument funktionsfähig erreichbar ist. Eine Vorlage darf nie als tatsächlicher Beschluss dargestellt werden. Ergebnisse werden nur bei belastbarer öffentlicher Dokumentation genannt. Niederschriftslinks nur bei tatsächlich öffentlich zugänglicher Niederschrift.

## 8. Themen

Potenzielle Themen entstehen aus wiederkehrenden Sitzungs-TOPs, mehreren Beiträgen, länger laufenden Planungsprozessen oder verbundenen Konzepten/Maßnahmen. Die Themendarstellung ist zunächst analytisch-neutral und zeigt Zusammenhänge, Entwicklung, Entscheidungen, Akteure, aktuellen Stand und offene Fragen. Eine reine Chronologie reicht nicht aus. Ein freigegebenes Thema bleibt erhalten und wird bei wesentlichen neuen Informationen aktualisiert.

## 8.1 Trends – redaktionelle Beobachtungs- und Vertiefungsebene

Neben Presseschau, Sitzungen und etablierten Themen führt FIB die redaktionelle Ebene **„Trends“**. Sie dient dazu, Entwicklungen zu bündeln und zu vertiefen, die für die zukünftige Gestaltung Feldkirchens interessant sein können, ohne bereits ein konkreter Feldkirchner Vorgang oder ein etabliertes lokales Thema zu sein.

Ein Trend beantwortet vor allem die Frage: **„Was entwickelt sich – und was könnte Feldkirchen daraus lernen?“**

Trends können sowohl aus Presseschau-Beiträgen entstehen als auch aus einer eigenständigen gesellschaftlichen, wissenschaftlichen oder technischen Zukunftsrecherche. Die Presseschau ist damit ein wichtiger, aber nicht zwingender Auslöser.

### Abgrenzung

- **Presseschau-Beitrag:** konkrete neue Entwicklung mit ausreichender FIB-Relevanz.
- **Thema:** länger laufender, konkreter Feldkirchner Vorgang oder Sachzusammenhang, der dauerhaft fortgeschrieben wird.
- **Trend:** übergreifende Entwicklung, wiederkehrendes Muster, neue Praxis oder neue Perspektive mit plausibler möglicher Bedeutung für Feldkirchen.

Ein Trend wird nur angelegt, wenn mindestens eines der folgenden Kriterien erfüllt ist:
- mehrere Fundstellen weisen in dieselbe Richtung,
- eine Entwicklung verändert einen für Feldkirchen relevanten Bereich erkennbar,
- ein besonders aussagekräftiges Modell wirft eine konkrete strategische Frage für Feldkirchen auf,
- mehrere bestehende FIB-Themen lassen sich durch die Entwicklung sinnvoll neu miteinander verbinden.

### Eigene Rechercheebene

Trend-Recherche ist eine eigenständige Vertiefungsrecherche und nicht auf veröffentlichungsfähige Presseschau-Meldungen beschränkt. Zusätzlich zu FIB-Beiträgen dürfen insbesondere verwendet werden:
- Studien und Evaluationen,
- wissenschaftliche und fachliche Veröffentlichungen,
- kommunale Praxisberichte und Leitfäden,
- Hintergrundpapiere von Fachinstituten und Verbänden,
- weitere kommunale Beispiele,
- belastbare Daten und Erfahrungsberichte.

Solche Fundstellen werden als **Hintergrundquellen** eines Trends geführt und müssen nicht als eigene Meldungen in der Presseschau erscheinen. Damit wird ausdrücklich zwischen **„relevant als Quelle“** und **„relevant als Meldung“** unterschieden.

### Aufbau eines Trends

Ein Trend soll nach Möglichkeit folgende Bestandteile enthalten:
1. **Was wir beobachten** – Beschreibung der Entwicklung.
2. **Beispiele / Auslöser** – relevante FIB-Beiträge oder externe Praxisfälle.
3. **Hintergrund** – zusätzliche Fach- und Wissensquellen.
4. **Was sich daraus erkennen lässt** – quellengebundene redaktionelle Verdichtung.
5. **Mögliche Bedeutung für Feldkirchen** – plausible Übertragbarkeit, Chancen, Grenzen und Voraussetzungen.
6. **Offene Fragen** – was vor einer lokalen Bewertung oder Umsetzung geklärt werden müsste.
7. **Verknüpfte Themen** – bestehende FIB-Themen, sofern vorhanden.

### Perspektiven und demokratische Ziele

Trends dürfen neue gesellschaftliche, demokratische und institutionelle Perspektiven aufgreifen, sofern sie fachlich begründet und für kommunale Gestaltung relevant sind. Dazu gehören auch Ansätze, die Kooperation, Selbstorganisation, Gemeingüter, Koproduktion von Kommune und Bürgerschaft oder polyzentrische Steuerung untersuchen und damit über eine einfache Gegenüberstellung von Markt und Staat hinausgehen.

Solche Denkansätze werden als **Analyse- und Inspirationsquellen** behandelt. Sie sind weder automatisch lokale Positionen von BÜNDNIS 90/DIE GRÜNEN Feldkirchen noch politische Forderungen. Der Trend stellt zunächst dar, was beobachtet wird, welche Erfahrungen oder Erkenntnisse vorliegen und welche Fragen sich daraus für Feldkirchen ergeben können.

### Politische Neutralität der Trendanalyse

Trend-Beiträge dürfen keine lokale politische Position erfinden oder vorwegnehmen. Sie sollen Perspektiven öffnen, Unterschiede und Zielkonflikte sichtbar machen und mögliche kommunale Gestaltungsspielräume beschreiben. Wo Bewertungen aus externen Quellen übernommen werden, werden sie zugeschrieben. Eine spätere lokale politische Position oder „Unsere Einordnung“ bleibt davon getrennt.

## 9. Unsere Einordnung

### 9.1 Drei-Ebenen-Prinzip
1. Sachproblem / analytischer Befund.
2. Politische Konsequenz.
3. Grüner Blickwinkel.

### 9.2 Analyseachsen-Prüfraster
Intern werden insbesondere Vorgangskette, Entscheidungsstand, Zuständigkeit, Ziele/Zielkonflikte, Kohärenz, Akteure, Abhängigkeiten, Folgewirkungen sowie Mobilität, Natur/Fläche, Klimaschutz, Klimaanpassung, Gesundheit, soziale Wirkungen, Ortsentwicklung und kommunale Ressourcen geprüft. Nur sachlich einschlägige und quellengetragene Aspekte werden berücksichtigt. Analytische Ableitungen dürfen belegte Befunde verbinden, aber keine fehlenden Tatsachen durch Vermutungen ersetzen.

### 9.3 Grüne Werte und politische Ziele
Nach der sachlichen Analyse werden die tatsächlich relevanten Einträge aus `Gruene_Werte_und_politische_Ziele.md` bestimmt. Das Register ist kein Punktesystem; Zielkonflikte werden sachlich abgewogen.

### 9.4 Hierarchie grüner Positionen
1. Dokumentierte veröffentlichte Positionen der GRÜNEN Feldkirchen.
2. Lokale grüne Anträge, Anfragen, Stellungnahmen, Programme, dokumentierte Abstimmungen und freigegebene Veröffentlichungen.
3. Kreis-/kommunalpolitische grüne Positionen mit örtlicher Nähe.
4. Landesebene einschließlich GRÜNE Bayern, Landtagsfraktion und GRIBS.
5. Bundesebene.
6. Interne freigegebene oder klar gekennzeichnete Hintergrundquellen bzw. begründete redaktionelle Ableitung.

Eine übergeordnete Position darf nicht ohne Beleg als lokale Position ausgegeben werden. Fehlt eine lokale Position, soll eine eigenständige begründete grüne Ableitung aus einschlägigen höheren Positionen, allgemeinen Werten/Zielen und belastbaren fachlichen Erkenntnissen entwickelt werden, ohne sie als bereits bestehende lokale Position darzustellen.

### 9.5 Eigenständige Ableitung und kommunale Gestaltungsmöglichkeiten
Die KI besitzt für „Unsere Einordnung“ Ableitungskompetenz. Sie soll aus belegten grünen Werten, Zielen, Programmen, Positionen, aktuellen Entwicklungen sowie belastbaren fachlichen und wissenschaftlichen Erkenntnissen konkrete politische Folgerungen entwickeln. Kommunale Handlungsmöglichkeiten sollen erkannt und benannt werden. Eine tragfähige Ableitung wird nicht allein wegen fehlender dokumentierter lokaler Position abgeschwächt, darf aber nicht als bereits beschlossene lokale Position erscheinen.

Bei zeitabhängigen Themen wird aktueller politischer und fachlicher Kontext recherchiert und quellenkritisch geprüft.

## 10. Qualitätskontrolle

Vor Veröffentlichung werden Tatsachen, Datumsangaben, Rollen, Links, Quellen, Zuordnungen und gegebenenfalls die politische Einordnung geprüft. Lokale Meldungen werden nicht allein deshalb verworfen, weil kein kommunalpolitischer Beschluss oder dauerhafter Themenbezug vorliegt.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 2.7 | 26.09.2026 | Wissenschaftliche und technische Zukunftsrelevanz als zusätzliche Beitragsregel eingeführt; Klima, Energie, KI, Gesundheit, Biodiversität, Wasser, Infrastruktur und Bevölkerungsschutz ausdrücklich aufgenommen; Trends können nun sowohl aus Presseschau-Beiträgen als auch aus eigenständiger Zukunftsrecherche entstehen. |
| 2.6 | 26.09.2026 | Neue redaktionelle Ebene „Trends“ eingeführt: klare Abgrenzung zu Presseschau und Themen, eigene Vertiefungsrecherche mit Hintergrundquellen, strukturierte Trendanalyse sowie Regeln für neue gesellschaftliche Perspektiven, Kooperation, Koproduktion und polyzentrische Steuerung ohne automatische Ableitung lokaler Parteipositionen. |
| 2.5 | 26.09.2026 | Erweiterte Relevanz mit institutionellem, räumlichem, infrastrukturellem, thematischem sowie Pilot-/Vergleichsbezug eingeführt; „mögliche zukünftige Bedeutung“ ausdrücklich als Relevanzkriterium verankert. Zusätzlich gesellschaftlich-demokratische Relevanz mit bundesweiter Suche nach konkret übertragbaren kommunalen Beteiligungs- und Gestaltungsmodellen aufgenommen; transparente Kennzeichnung des Feldkirchen-Bezugs verbindlich gemacht. |
| 2.2 | 21.09.2026 | Lokale grüne Anträge im Bibliotheksordner `Arbeitsdaten/Anträge-Gruene-Feldkirchen` als feste interne Hintergrundquelle verankert; Regeln für Themenpflege, Einordnung, Recherchelenkung und spätere Verknüpfung mit öffentlichen RIS-/Pressequellen ergänzt. |
| 2.4 | 24.09.2026 | Redaktionelle Korrekturen von echten Sachstands-Aktualisierungen abgegrenzt: reine Fehlerkorrekturen erhalten keinen öffentlichen Aktualisierungshinweis. |
| 2.3 | 24.09.2026 | Regeln für mehrere Aktualisierungen ergänzt: im Untertitel nur die neueste Aktualisierung, frühere Änderungen in eigenem Verlauf; Abgrenzung zwischen Fortschreibung eines bestehenden Beitrags und eigenständigem neuen Beitrag festgelegt. |
| 2.2 | 24.09.2026 | Verbindliche Aktualisierungskennzeichnung für bestehende Beiträge ergänzt: Untertitel enthält immer „Aktualisierung vom TT.MM.JJJJ: …“ mit konkretem Gegenstand; Terminologie der Primärquelle wie „Beschlussvorlage“ wird bevorzugt. |
| 2.1 | 21.09.2026 | Datumslogik für RIS-Dokumente präzisiert: Erstellungsdatum, Freigabe, geplante Beratungsfolge, veröffentlichte Tagesordnung und tatsächliche Entscheidung werden getrennt; bei nicht bestätigtem Sitzungstermin bleibt die öffentliche Freigabe maßgeblicher neuer Sachstand und der Datumswiderspruch wird transparent dargestellt. |
| 2.0 | 21.09.2026 | Zwei-Achsen-Presserecherche verbindlich eingeführt: Ortsabdeckung plus themenbasierte Suche; direkte Prüfung relevanter Presseübersichten einschließlich Merkur Landkreis/Feldkirchen/Aschheim/Kirchheim/Haar; vollständiger Lauf erst nach beiden Suchachsen. |
| 1.9 | 20.09.2026 | RIS-Freigaben ohne bereits veröffentlichten TOP als möglichen eigenständigen neuen Sachstand aufgenommen; Beiträge müssen fehlende TOP-/Sitzungszuordnung ausdrücklich sichtbar machen; Beratungsfolge in Vorlagen allein bestätigt keinen Sitzungstermin. |
| 1.8 | 20.09.2026 | Vollständige Auswertung kommunaler Beschlussvorlagen und relevanter Anlagen als verbindliche Recherche- und Beitragsregel ergänzt; klare Trennung von Tatsachen, Verwaltungsbewertung, Bürgerargumenten und offenen Varianten. |
| 1.7 | 17.09.2026 | Relevanzregeln für ortsbezogene Meldungen erweitert: Gemeindepressemitteilungen grundsätzlich relevant; lokale Ereignisse aus verlässlichen Quellen auch ohne kommunalpolitischen Beschluss veröffentlichungsfähig; im Versuchsbetrieb bei Zweifeln eher aufnehmen. |
| 1.6 | 10.09.2026 | Bisherige kanonische Fassung. |
