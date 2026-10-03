# FIB – Chat-Erinnerungs-Audit zum Transfer Demonstrator → Echtsystem

**Stand:** 03.10.2026  
**Status:** verbindlicher Ergänzungsbefund zu G2.5  
**Zweck:** Frühere FIB-Dialoge als zusätzliche Erkenntnisquelle prüfen, damit Entscheidungen und Testbeobachtungen nicht verloren gehen, nur weil sie nicht oder nicht vollständig in kanonische Dokumente übertragen wurden.

## 1. Grundsatz

Frühere FIB-Chats sind keine kanonische Projektdokumentation. Sie werden im Transfer-Audit jedoch als **sekundäre Prüfquelle** verwendet, um mögliche Dokumentationslücken aufzudecken.

Eine aus Chats wiedergewonnene Erkenntnis gilt erst dann als gesichert, wenn sie:

1. fachlich noch gültig ist,
2. gegen aktuelle Projektentscheidungen geprüft wurde,
3. in eine kanonische GitHub-Regel, Anforderung oder Testbeschreibung überführt wurde,
4. bei Bedarf einem Regressionstest zugeordnet wurde.

Damit gilt künftig für Transfer-Audits:

`kanonische Dokumentation + Demonstratorbestand + Betriebs-/Updateprotokolle + relevante frühere Chats → Transfer-Matrix`

## 2. Wiedergewonnene Erkenntnisse aus früheren Chats

### CE-001 – Öffentliche Navigation des Echtsystems
**Wiedergewonnener Stand:** Öffentliche Navigation wurde später auf `Neues | Im Blick | Sitzungen | Suche` zugespitzt; interne Fachobjekte bleiben Meldung, Vorgang, Thema und Sitzung.

**Bewertung:** Noch gegen die aktuellen Echtsystem-Frontendunterlagen prüfen. Nicht automatisch mit älteren Demonstrator-Navigationsbezeichnungen gleichsetzen.

**Status:** OFFEN / Abgleich erforderlich.

### CE-002 – Mobile Banner-/Website-Einbindung
**Wiedergewonnener Stand:** Auf Mobilgeräten bleibt das Bannerbild sichtbar; Text liegt auf halbtransparentem Hintergrund. Eine kompakte Leiste „Zur Website der GRÜNEN in Feldkirchen“ liegt direkt darunter und entfällt, wenn FIB innerhalb der GRÜNEN-Homepage eingebettet aufgerufen wird.

**Status:** OFFEN / Frontend-Transfer prüfen.

### CE-003 – Produktionsasset und Trennung Bild/Text
**Wiedergewonnener Stand:** Produktionsasset `assets/brand/banner/fib-banner-illustration-approved.png`; ältere zusammengesetzte Bannerdateien nur Referenz. Text responsive getrennt: mobile Kurzfassung, Desktop/Tablet ausführlicher.

**Status:** OFFEN / Asset- und Frontend-Spezifikation prüfen.

### CE-004 – RIS-Linkbezeichnung muss Dokumentziel entsprechen
**Wiedergewonnener Stand:** Ein RIS-Link darf nicht als „Parkraumkonzept“ bezeichnet werden, wenn tatsächlich nur eine konkrete Beschlussvorlage verlinkt wird. Beispiel: Vorlage 5285/2026.

**Status:** fachlich weitgehend dokumentiert; als Regressionstest ergänzen.

### CE-005 – Direkter Vorlagenlink nur nach erneuter Prüfung
**Wiedergewonnener Stand:** Ein RIS-Direktlink wird nur als „Vorlage“ angezeigt, wenn TOP-Zuordnung, Dokumentziel und tatsächliche Erreichbarkeit geprüft sind. Diese Prüfung wird bei jeder Aktualisierung erneut durchgeführt. Ein früher funktionierender Link gilt nicht dauerhaft als verifiziert.

**Status:** ÜBERNOMMEN / Testfall beibehalten.

### CE-006 – Unerreichbare Vorlage transparent behandeln
**Wiedergewonnener Referenzfall:** Hundewiese, Vorlage 5283/2026 zeitweise nicht direkt erreichbar. Dann nicht als funktionierende Vorlage ausgeben, sondern transparent kennzeichnen.

**Status:** als Regressionstest ergänzen.

### CE-007 – RIS-Datumsarten strikt trennen
**Wiedergewonnener Stand:** Erstellung, öffentliche Freigabe, vorgesehener Sitzungstermin, veröffentlichte Tagesordnung und tatsächliche Beratung/Entscheidung sind getrennte Datumsarten. Ein geplanter Termin aus einer Vorlage ist kein Beschluss- oder Beratungsdatum.

**Status:** ÜBERNOMMEN; Regressionstest Hundewiese beibehalten.

### CE-008 – Beitragsdatum bei freigegebener Vorlage ohne bestätigten TOP
**Wiedergewonnener Stand:** Beitragsdatum ist die maßgebliche neue öffentlich belegte Entwicklung. Bei öffentlich freigegebener Vorlage ohne bestätigten TOP gilt grundsätzlich das Freigabe-/Veröffentlichungsdatum; der geplante Termin wird nur erläuternd genannt.

**Status:** ÜBERNOMMEN.

### CE-009 – Browser-/PWA-Cache als reale Fehlerquelle
**Wiedergewonnener Referenzfall:** Neue Beiträge oder Update-Skripte waren nach erfolgreichem Deployment mobil teilweise nicht sichtbar, weil eine alte zentrale `app.js` aus dem Browser-Cache geladen wurde. Im Demonstrator wurde deshalb versioniertes Cache-Busting (`?v=...`) verwendet.

**Transferanforderung:** Echtsystem braucht eine belastbare Cache-/Deployment-Strategie; erfolgreiche Veröffentlichung muss für Nutzer zuverlässig den neuen Stand ausliefern.

**Regressionstest:** Nach Deployment einer neuen Beitrags-/Frontend-Version darf ein reguläres Aktualisieren nicht dauerhaft einen Altstand zeigen.

**Status:** OFFEN / technische Produktanforderung.

### CE-010 – Interne grüne Anträge als Hintergrundwissen, nicht als öffentliche Quelle
**Wiedergewonnener Stand:** Nicht öffentliche Anträge dürfen kein öffentliches Ereignis vortäuschen und nicht als öffentlich zugängliche Quelle erscheinen. Sie dürfen Recherche, Themenpflege und „Unsere Einordnung“ steuern. Wird der Vorgang später öffentlich behandelt, wird auf RIS-/öffentliche Quellen umgestellt bzw. ergänzt.

**Status:** ÜBERNOMMEN; in Echtsystem-Datenmodell Herkunft/Öffentlichkeitsstatus absichern.

### CE-011 – Interne Anträge erzeugen aktive Folgerecherche
**Wiedergewonnener Stand:** Bei jedem FIB-Update gezielt prüfen, ob zu intern bekannten Anträgen inzwischen öffentliche Gemeinderatsvorgänge, Reaktionen, Beschlussvorlagen, Entscheidungen oder Presseberichte vorliegen.

**Status:** operativ prüfen; als Rechercheauftrag/Monitoringregel relevant.

### CE-012 – Beiträge und Themen bleiben als Verlauf erhalten
**Wiedergewonnener Stand:** Beiträge/Themen werden fortgeschrieben und dürfen durch neue Verarbeitung nicht unbeabsichtigt „verschwinden“. Neue/geänderte Quellen lösen Aktualisierung oder neuen Sachstand aus; Persistenz ist fachlich verbindlich.

**Regressionstest:** Ein bereits veröffentlichter und weiterhin gültiger Beitrag bleibt nach neuem Update-Lauf vorhanden, sofern keine ausdrückliche redaktionelle Rücknahme erfolgt.

**Status:** als Persistenz-/Regressionstest ergänzen.

### CE-013 – PWA-Ungelesenlogik umfasst neue Beiträge und wesentliche Aktualisierungen
**Wiedergewonnener Stand:** „Neu seit letztem Besuch“ bzw. der interne Ungelesen-Zähler soll sowohl neue Beiträge als auch wesentliche Aktualisierungen erfassen. Gerätebezogen ohne Benutzerkonto. Das Betriebssystem-Badge kann technisch nur einen Punkt statt einer exakten Zahl zeigen; maßgeblich ist deshalb ein eigener FIB-Zähler.

**Status:** teilweise übernommen; fachliche Definition „neu“ ergänzen.

### CE-014 – Persönliche Weitergabe als eigene Verbreitungsfunktion
**Wiedergewonnener Stand:** Persönliche digitale Weitergabe bleibt eigener Verbreitungsweg; Beiträge sollen über stabile Direktlinks und QR-Codes erreichbar sein.

**Status:** weitgehend übernommen; Erfolgsmessung/Verbreitungsmodell prüfen.

### CE-015 – PWA/Web-Push freiwillig und präferenzierbar
**Wiedergewonnener Stand:** Web-Push nur freiwillig/Opt-in; soweit sinnvoll Themen- und Frequenzpräferenzen ermöglichen.

**Status:** ÜBERNOMMEN als Produktanforderung.

### CE-016 – Harte Regeln außerhalb freier KI
**Wiedergewonnener Stand:** IDs, Datumsfelder, Status, Dubletten, Quellenbeziehungen, Freigabe und Persistenz sind technische Geschäftsregeln; KI ist für semantische Bewertungen zuständig, nicht für frei interpretierbare Systemintegrität.

**Status:** ÜBERNOMMEN / Modellunabhängigkeitsgrundsatz.

### CE-017 – „Mehr wissen?“: keine Antwort allein aus ungesichertem KI-Allgemeinwissen
**Wiedergewonnener Stand:** Wenn für eine Vertiefungsfrage keine belastbaren Zusatzquellen vorliegen, soll nicht bloß aus allgemeinem Modellwissen eine scheinbar belastbare Hintergrundantwort erzeugt werden. Stattdessen echte Recherche bzw. transparente Nichtbeantwortung.

**Status:** als Qualitätsregel und Regressionstest ergänzen.

### CE-018 – „Mehr wissen?“ als funktionales KI-Testsystem
**Wiedergewonnener Stand:** Der Demonstrator diente nicht nur UI-Tests, sondern auch als Testsystem für KI-Recherche, Quellenwahl und Antwortqualität. Serverseitige Supabase-Edge-Function, Providerkapselung und sichtbare Quellen dienten bereits dem späteren Modellvergleich.

**Status:** für Echtsystem-Testarchitektur relevant; Testkorpus/Providervergleich beibehalten.

## 3. Auswirkungen auf den G2.5-Transfer-Audit

Der Transfer-Audit erhält damit dauerhaft eine fünfte Prüfquelle:

1. kanonische GitHub-Dokumentation,
2. Demonstrator und Datenbestand,
3. Betriebs-/Update- und Fehlerprotokolle,
4. Übergabe- und Spezialkonzepte,
5. relevante frühere FIB-Chats als **Lückenfinder**, nicht als kanonische Wahrheit.

Neue aus Chats gewonnene Erkenntnisse werden nicht direkt als Produktregel übernommen. Sie werden zunächst als `CE-*`-Befund erfasst und anschließend in die kanonische Echtsystem-Dokumentation oder in einen Regressionstest überführt.

## 4. Besonders wichtige neue Transferpunkte

Aus dem Chat-Erinnerungs-Audit ergeben sich derzeit vier zusätzliche Punkte mit hoher Priorität:

1. **Cache-/Deployment-Verlässlichkeit** – Altstände nach erfolgreicher Veröffentlichung dürfen nicht wieder auftreten.
2. **Persistenzschutz** – veröffentlichte Beiträge dürfen in Update-Läufen nicht unbeabsichtigt verschwinden.
3. **Definition „neu“** – neue Beiträge und wesentliche Aktualisierungen müssen für PWA/Ungelesenlogik einheitlich behandelt werden.
4. **Quellenpflicht bei „Mehr wissen?“** – keine scheinbar belastbaren Hintergrundantworten nur aus allgemeinem Modellwissen.

Diese vier Punkte werden in die zentrale Transfer-Matrix übernommen bzw. beim nächsten Abgleich mit den Echtsystem-Dokumenten geschlossen.
