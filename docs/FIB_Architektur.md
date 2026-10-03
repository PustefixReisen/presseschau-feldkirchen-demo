# FIB – Architektur

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.1 | 03.10.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 03.10.2026 | Architekturgrundsätze aus Audit und implementiertem Demonstrator konsolidiert; Persistenzgrenze Demonstrator/Echtbetrieb dokumentiert |

## 1. Zweck und Geltungsbereich

Dieses Dokument beschreibt die für Reproduzierbarkeit und Weiterentwicklung maßgebliche Architektur von Feldkirchen im Blick (FIB). Es trennt den implementierten Demonstrator ausdrücklich von der Zielarchitektur des Echtbetriebs. Nicht implementierte Zielbausteine werden nicht als vorhandener Produktivstand beschrieben.

## 2. Architekturgrundsätze

1. Der persistente FIB-Datenbestand ist das fachliche Gedächtnis des Systems; ein KI-Modell oder Chatverlauf ist keine persistente Projekt- oder Datenquelle.
2. Fachliche und technische Geschäftsregeln werden persistent dokumentiert und soweit sinnvoll deterministisch umgesetzt. KI-Ausgaben ersetzen keine dokumentierte Geschäftsregel und keine redaktionelle Freigabe.
3. Code, Automatisierung und Projektdokumentation werden in GitHub versioniert. Für den geplanten Echtbetrieb ist PostgreSQL/Supabase als persistente fachliche Datenhaltung vorgesehen.
4. Recherche/KI, redaktionelle Prüfung und öffentliche Ausspielung sind getrennte Verantwortungsstufen. Veröffentlichung setzt eine dokumentierte redaktionelle Prüfung/Freigabe voraus.
5. KI-/RAG-Dienste müssen austauschbar bleiben; fachliche Regeln und Daten dürfen nicht ausschließlich in einem Modell oder Anbieter gebunden sein.

## 3. Implementierter Demonstrator

### 3.1 Persistente fachliche Daten

Im Demonstrator bilden insbesondere folgende Dateien den persistenten fachlichen Kernbestand:

- `data/beitraege.json` – Beiträge,
- `data/sitzungen.json` – Sitzungsübersichten,
- `data/themen.json` – Themen.

Weitere strukturierte Dateien können ergänzende Funktionen tragen. Für die drei Kern-Inhaltsebenen sind jedoch die genannten JSON-Dateien die fachliche Persistenzquelle.

`index.html` ist eine aus dem fachlichen Bestand synchronisierte öffentliche Darstellung und keine eigenständige fachliche Datenquelle. Historische `update-*.js`-Skripte oder vergleichbare einmalige Update-Hilfen sind keine Laufzeit-Datenhaltung und dürfen beim Wiederanlauf nicht als Ersatz für den persistenten Datenbestand interpretiert werden.

### 3.2 Frontend und Ausspielung

Der Demonstrator ist eine statisch ausspielbare Webanwendung. Darstellung und Interaktionen liegen in `index.html` und versionierten Assets. Sichtbare Änderungen an zentralen CSS-/JS-Assets müssen mit einer geänderten Versionskennung ausgeliefert werden, damit Browser nicht unbeabsichtigt veraltete Assets verwenden.

### 3.3 Wiederherstellungsgrenze

Ein fachlicher Wiederanlauf des Demonstrators beginnt beim versionierten Repository und dem persistenten strukturierten Datenbestand. Eine bloße Sicherung von `index.html` reicht nicht aus, weil sie die fachliche Quelle mit einer abgeleiteten Ausgabe verwechseln würde.

## 4. Zielarchitektur Echtbetrieb

Für den Echtbetrieb ist folgende Trennung vorgesehen:

- **PostgreSQL/Supabase:** persistente fachliche Daten, Beziehungen, Versionen und Freigabestatus,
- **Redaktions-Web-App:** Bearbeitung, Prüfung und Freigabe,
- **GitHub:** Code, dokumentierte Regeln, Migrationen, Automatisierung und nachvollziehbare technische Änderungen,
- **GitHub Actions bzw. vergleichbare Automatisierung:** reproduzierbare technische Verarbeitung und Deployment,
- **austauschbare KI-/RAG-Dienste:** Recherche-, Analyse- und Formulierungshilfe ohne Rolle als kanonischer Datenspeicher,
- **öffentliche Ausspielung:** nur freigegebene Inhalte; von Recherche- und Redaktionsdaten getrennt.

Die konkrete Datenbankbaseline, Migrationen, Secrets-Konfiguration, Rollen/Rechte, Backup/Restore und das produktive Deployment sind erst dann als umgesetzt zu kennzeichnen, wenn sie im Echtsystem tatsächlich implementiert und praktisch geprüft wurden.

## 5. Konsequenzen für Datenmodell und Migration

Beim Übergang vom Demonstrator zum Echtbetrieb müssen die fachlichen Identitäten und Beziehungen der JSON-Bestände nachvollziehbar in das Datenbankschema überführt werden. Migrationen sind versioniert im Repository zu halten. Ein Neuaufbau muss ohne Chat-/KI-Gedächtnis allein aus Schema/Migrationen, dokumentierter Konfiguration und gesicherten Daten möglich sein.

## 6. Sicherheits- und Freigabegrenzen

Nicht öffentliche Recherche- oder Hintergrundquellen dürfen nicht unbeabsichtigt in öffentliche Ausgabe, öffentliches Repository oder öffentliche Logs gelangen. Herkunft, Sichtbarkeit und Freigabestatus sind im Echtbetrieb getrennt abzubilden. Öffentliche Veröffentlichung erfolgt ausschließlich aus freigegebenem Bestand.

## 7. Verweise

- `README.md` – Projektüberblick und Inhaltsebenen
- `docs/projektgrundlagen/KI-Leitfaden_Homepage-Presseschau.md` – Recherche- und KI-Regeln
- `docs/FIB_Frontend_und_Darstellung.md` – Frontend und Darstellung
- `docs/konsolidierung/FIB_Betrieb_und_Reproduzierbarkeit.md` – Betrieb, Wiederanlauf, Tests, Backup/Restore und Administration
- `docs/konsolidierung/FIB_Dokumentationsaudit_Demonstrator_Echtbetrieb.md` – Konsolidierungsstatus
