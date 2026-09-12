# Bestandsaudit – Feldkirchen im Blick / Demonstrator

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.0 | 12.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## 1. Umfang

Der Audit wurde nach dem zentralen pustivo-Auditstandard durchgeführt. Geprüft wurden Dokumentationslandkarte, KI-Leitfaden, Frontend-/Darstellungsdokumentation, Quellenmonitor-Fach- und Architekturdokument, Roadmap, Repository-Rolle sowie offene Issues.

## 2. Gesamtbewertung

**Auditstatus: wesentliche Lücken.**

Der Demonstrator verfügt über brauchbare Spezialdokumentation für KI-Redaktion, Darstellung und Quellenmonitor. Die größten Defizite liegen nicht im bestehenden Frontend, sondern bei der vollständigen fachlichen Produktbeschreibung und beim Übergang in einen späteren Echtbetrieb.

## 3. Positiv bestätigt

- zentrale Dokumentationslandkarte vorhanden
- KI-Leitfaden als umfangreiche redaktionelle Primärquelle vorhanden
- Frontend-/Darstellungsregeln sind als eigene Quelle dokumentiert
- Quellenmonitor besitzt Fach- und Architekturunterlagen
- Demonstrator und geplanter Echtbetrieb werden in der Landkarte grundsätzlich getrennt
- Roadmap und zentrale Governance-Verweise sind vorhanden

## 4. Wesentliche Dokumentationslücken

### 4.1 Fachliche Gesamtbeschreibung

Im Repository fehlt eine vollständige kanonische Produkt-/Fachbeschreibung, die Zweck, Zielgruppen, Inhaltsarten, Themenlogik, redaktionellen Ablauf, Freigabeprinzipien und fachliche Grenzen des FIB zusammenführt.

Externe bzw. bisher außerhalb des Repositories geführte Grundlagen dürfen für den Echtbetrieb nicht nur aus Chatwissen oder lokalem Dateibestand bekannt sein. Sie müssen entweder als verbindliche GitHub-Quelle übernommen oder eindeutig versioniert referenziert werden.

### 4.2 Referenzwissen, politische Einordnung und Sprachregeln

Der KI-Leitfaden deckt wesentliche Regeln ab, ersetzt aber nicht zwingend alle verbindlichen Referenzquellen für grüne Programme/Ziele, lokale politische Einordnung und wissenschaftlich-politische Sprachregeln. Die kanonische Zuordnung dieser Quellen muss abgeschlossen werden.

### 4.3 Echtbetriebsarchitektur

Der spätere Echtbetrieb ist noch nicht in einer einzigen belastbaren Architektur-/Betriebsquelle dokumentiert. Insbesondere fehlen als abgeschlossener Stand:

- persistente Datenhaltung und Datenmodell,
- Redaktions-/Freigabeworkflow,
- Automatisierung/Orchestrierung,
- KI-/RAG-Anbindung und Austauschbarkeit,
- Hosting und Ausspielung auf die OV-Homepage,
- Benutzer-/Rechtekonzept,
- Deployment/Rollback,
- Backup/Restore,
- Administration und Monitoring.

Planungen aus anderen Arbeitsständen dürfen nicht als bereits implementierter Demonstratorzustand erscheinen.

### 4.4 Repository-Grenze

Vor Beginn des Echtbetriebs muss verbindlich entschieden werden, ob dieses Repository zum Produktivsystem weiterentwickelt wird oder ob ein separates Echtbetriebsrepository entsteht. Bei einem separaten Repository müssen Fachgrundlagen und gemeinsame Regeln eindeutig referenziert werden, ohne konkurrierende Kopien zu erzeugen.

## 5. Folgearbeiten

Aus dem Audit werden zwei Hauptarbeitspakete abgeleitet:

1. fachliche/redaktionelle Grundlagen vollständig und kanonisch im Repository verankern,
2. Echtbetriebsarchitektur einschließlich Betrieb, Sicherheit, Daten, Deployment und Backup/Restore verbindlich dokumentieren und anschließend umsetzen.

## 6. Nächster Schritt

Der Demonstrator kann weiter als Anschauungs- und Erprobungsstand dienen. Vor weiterer grundlegender Echtbetriebsentwicklung werden zunächst die kanonischen Fachgrundlagen geschlossen und danach die Echtbetriebsarchitektur als verbindliche Quelle konsolidiert.

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 1.0 | 12.09.2026 | Vollständigen Bestandsaudit dokumentiert |
