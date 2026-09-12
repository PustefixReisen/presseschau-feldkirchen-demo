# FIB – Betrieb und Reproduzierbarkeit

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.1 | 12.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 12.09.2026 | Ersten reproduzierbaren Betriebsstand für Demonstrator dokumentiert; offene Anforderungen für Echtbetrieb, Backup/Restore, Secrets und Administration abgegrenzt |

## 1. Zweck und Status

Dieses Dokument schließt die Betriebs- und Reproduzierbarkeitslücke zwischen dem heutigen FIB-Demonstrator und dem geplanten Echtbetrieb. Es beschreibt nur nachweisbaren Repository-Stand als umgesetzt. Zielbilder für den Echtbetrieb sind ausdrücklich als **offen** gekennzeichnet, solange Code, Migrationen oder produktive Konfiguration fehlen.

Der Branch `docs/canonical-markdown` ist während der Dokumentationskonsolidierung Arbeitsstand. Dieses Dokument wird nicht allein durch seine Existenz auf diesem Branch zur freigegebenen Echtbetriebsdokumentation.

## 2. Aktueller Demonstrator: reproduzierbarer Ist-Stand

### 2.1 Laufzeit und Auslieferung

Der Demonstrator ist eine statische Web-Anwendung. Wesentliche Bestandteile liegen direkt im Repository:

- `index.html` – öffentliche Ausgangsseite,
- `assets/` – CSS, JavaScript, Bildlogik und veröffentlichte Bilder,
- `data/` – strukturierte Arbeits-/Inhaltsdaten, soweit im Repository geführt,
- `config/` – repositorybasierte Konfiguration,
- `.github/workflows/` – vorhandene Automatisierungs- und Quellenmonitor-Workflows.

Für den statischen Demonstrator ist kein eigener Applikationsserver und keine produktive Datenbank erforderlich. Ein lokaler Wiederanlauf besteht deshalb mindestens aus:

1. Repository klonen,
2. den gewünschten Commit/Branch auschecken,
3. Dateien über einen lokalen statischen HTTP-Server bereitstellen,
4. `index.html` im Browser prüfen,
5. vorhandene JavaScript-/Bildfunktionen und Links stichprobenartig testen.

Ein direktes Öffnen per `file://` ist nicht der verbindliche Testweg, weil Browser bei lokalen Dateien andere Sicherheits- und Ladebedingungen haben können als über HTTP.

### 2.2 Code- und Inhaltsstand

Für den Demonstrator ist der Git-Commit der primäre technische Wiederherstellungspunkt für alle versionierten Dateien. Änderungen an HTML, CSS, JavaScript, Konfiguration und versionierten Daten müssen daher commit-basiert nachvollziehbar sein.

Nicht im Repository vorhandene externe Inhalte, Zugangsdaten oder Projektbibliotheksdateien sind dadurch **nicht** gesichert. Wo solche Quellen für einen späteren produktiven Lauf erforderlich werden, müssen sie entweder reproduzierbar importierbar oder in einer gesondert dokumentierten Sicherung enthalten sein.

### 2.3 Tests vor Veröffentlichung

Mindestens zu prüfen sind:

- Seite lädt ohne offensichtliche JavaScript-Fehler,
- Navigation Beiträge/Sitzungen/Themen/Archiv,
- Quellen- und RIS-Links,
- Bilddarstellung einschließlich Mobilansicht und `Mehr zum Bild`,
- Teilen/Drucken, soweit im betroffenen Stand vorhanden,
- neue oder geänderte Beiträge/Themen/Sitzungen gegen den strukturierten Datenbestand,
- keine Veröffentlichung interner Steuerungshinweise oder nicht freigegebener Daten.

Automatisierte Workflows ersetzen die redaktionelle Freigabe nicht.

## 3. Konfiguration und Secrets

### 3.1 Demonstrator

Der statische Demonstrator darf keine produktiven Geheimnisse im Client-Code, in HTML/JavaScript oder in öffentlich erreichbaren Konfigurationsdateien enthalten. Browserseitig ausgelieferte Werte sind grundsätzlich öffentlich lesbar.

### 3.2 Echtbetrieb – offen

Für den geplanten Echtbetrieb mit Supabase, Redaktions-Web-App, GitHub Actions und gegebenenfalls KI-/RAG-Diensten ist noch verbindlich zu dokumentieren und technisch umzusetzen:

- vollständige Liste benötigter Umgebungsvariablen,
- Trennung öffentlicher Client-Konfiguration von geheimen Server-/CI-Werten,
- Ablageort und Rotation von Secrets,
- minimale Berechtigungen je Dienst,
- Verfahren beim Verlust oder Wechsel eines Schlüssels.

Solange diese Punkte nicht implementiert und getestet sind, darf kein Dokument einen produktiv reproduzierbaren Echtbetrieb behaupten.

## 4. Datenmodell und Migrationen

### 4.1 Demonstrator

Der aktuelle Demonstrator nutzt repositorybasierte Dateien als Daten-/Darstellungsgrundlage. Änderungen an strukturierten Daten müssen zusammen mit der konsumierenden Logik versioniert werden.

### 4.2 Echtbetrieb – offen

Für PostgreSQL/Supabase gilt als verbindliches Ziel:

- jede produktive Schemaänderung als reproduzierbare Migration im Repository,
- keine ausschließlich manuell im Supabase-Dashboard vorgenommene fachlich relevante Schemaänderung,
- Datenmodelldokumentation mit Tabellen, Beziehungen, Status-/Freigabefeldern und relevanten Constraints,
- dokumentierte Reihenfolge für Neuaufbau und Migration bestehender Instanzen.

## 5. Backup und Restore

### 5.1 Demonstrator

Für versionierte Demonstrator-Dateien ist Git die Wiederherstellungsbasis. Ein Restore bedeutet, einen bekannten funktionierenden Commit auszuchecken beziehungsweise erneut auszuliefern.

Diese Aussage gilt **nicht** für nicht versionierte externe Quellen, Bibliotheksdateien oder spätere Datenbankinhalte.

### 5.2 Echtbetrieb – noch nicht abgeschlossen

Vor produktiver Freigabe müssen mindestens festgelegt und praktisch getestet werden:

- welche Supabase-Daten und Schemata gesichert werden,
- Sicherungsintervall und Aufbewahrung,
- Sicherung von Schema/Migrationen getrennt von fachlichen Daten,
- Restore einer vollständigen Instanz,
- soweit technisch vorgesehen: Restore fachlicher Teilbestände beziehungsweise klare Dokumentation, wenn nur Gesamt-Restore möglich ist,
- Umgang mit Storage-Dateien/Bildern, falls diese später außerhalb der Datenbank liegen,
- dokumentierter Restore-Test mit Datum und Ergebnis.

Ein Backup gilt erst dann als belastbar, wenn ein Restore daraus erfolgreich getestet wurde.

## 6. Deployment

### 6.1 Demonstrator

Die Veröffentlichung basiert auf dem versionierten statischen Stand. Vor einer Änderung der öffentlichen Darstellung ist der betreffende Commit zu prüfen. Der Dokumentationsbranch `docs/canonical-markdown` ist nicht automatisch als Veröffentlichungsquelle zu verwenden.

### 6.2 Echtbetrieb – offen

Noch zu dokumentieren und umzusetzen sind:

- Zielhosting und Verzeichnis-/Buildstruktur,
- automatisierter oder manueller Deploymentweg,
- Trennung von Test/Staging und Produktion, falls vorgesehen,
- Rollback auf einen bekannten Stand,
- Abhängigkeit von WordPress/Sunflower versus eigenständigem HTML-Generator,
- Freigabepunkt zwischen Redaktion und Veröffentlichung.

## 7. Administration

Für den Demonstrator besteht Administration im Wesentlichen aus Repository-, Workflow- und Inhalts-/Bildpflege.

Für den Echtbetrieb muss die Administrationsdokumentation mindestens enthalten:

- Benutzer- und Rollenverwaltung der Redaktions-App,
- Supabase-Projekt- und Datenbankadministration,
- GitHub-Organisation, Repositoryrechte, Branch-/PR-Regeln und Actions,
- Secrets und externe Dienstkonten,
- Überwachung fehlgeschlagener Automatisierungen,
- Datenkorrektur ohne Umgehung von Freigabe- und Auditregeln,
- regelmäßige Backup-/Restore-Kontrollen.

## 8. Reproduzierbarkeits-Abnahme für den Echtbetrieb

D025 kann im Dokumentationsaudit erst auf `gesichert` gesetzt werden, wenn ein fachkundiger Dritter anhand der Repository-Dokumentation nachweisbar:

1. Anwendung und Redaktionssystem installieren beziehungsweise bereitstellen kann,
2. Datenbank ausschließlich aus versionierten Migrationen aufbauen kann,
3. erforderliche Konfiguration kennt, ohne Geheimnisse aus Chats ableiten zu müssen,
4. Tests ausführen und Ergebnisse bewerten kann,
5. Deployment und Rollback durchführen kann,
6. Backup erstellen und Restore praktisch verifizieren kann,
7. Benutzer, Rollen, Workflows und externe Dienste administrieren kann.

Bis dahin bleibt D025 `teilweise` beziehungsweise in seinen noch nicht implementierten Teilen `offen`.