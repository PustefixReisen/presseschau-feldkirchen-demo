# FIB – Dokumentationsaudit Demonstrator → Echtbetrieb

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.4 | 13.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 10.09.2026 | Audit begonnen; Sicherungs- und Konsolidierungsverfahren sowie erste Entscheidungsbereiche festgelegt |
| 0.2 | 11.09.2026 | Projektübergreifenden Dokumentationsstandard als verbindliche Auditregel präzisiert; D023 und D024 fortgeschrieben |
| 0.3 | 12.09.2026 | D025 mit erstem Betriebs- und Reproduzierbarkeitsdokument vom Status `fehlt/aufzubauen` auf `teilweise` gehoben; Demonstrator-Iststand von offenen Echtbetriebsanforderungen getrennt |
| 0.4 | 13.09.2026 | Frontend-Dokument auf einheitliche Dokumentlenkung umgestellt und die am Demonstrator erprobte Bildimport-/Zuordnungsregel persistent nachgeführt; D016 und D023 weiter abgesichert |

## 1. Zweck

Dieses Dokument steuert die einmalige Konsolidierung der Dokumentation von **Feldkirchen im Blick (FIB)** beim Übergang vom Demonstrator zum Echtbetrieb.

Ziel ist nicht nur eine Formatmigration bestehender Dateien. Ziel ist der Nachweis, dass alle auffindbaren verbindlichen Projektentscheidungen persistent in Repository, Datenmodell/Migrationen, Konfiguration oder ausführbarer Geschäftslogik abgebildet sind.

**Richtschnur:** Ein fachkundiger Dritter muss FIB allein aus Repository, Datenbankschema/-migrationen, Konfiguration, dokumentierten externen Voraussetzungen und den erforderlichen gesicherten Datenbeständen neu aufsetzen und fachlich nachvollziehen können. Chatverläufe und KI-Gedächtnis dürfen dafür nicht erforderlich sein.

## 2. Sicherheitsregel während der Konsolidierung

Bis zum Abschluss dieses Audits wird keine bestehende Dokumentationsquelle allein deshalb verworfen, weil ihr Inhalt in Markdown übertragen wurde. Der Branch `docs/canonical-markdown` ist Arbeitsstand und wird nicht allein aufgrund der Formatmigration zur kanonischen Echtbetriebsdokumentation erklärt.

Eine Festlegung gilt im Audit erst als gesichert, wenn mindestens eines der folgenden Ziele nachweisbar erfüllt ist:

1. fachliche Regel in einem kanonischen Dokument,
2. technische Regel in Code/Konfiguration plus fachliche Erklärung,
3. Datenstruktur in reproduzierbarer Datenbankmigration plus Datenmodelldokumentation,
4. Betriebsentscheidung in Installations-/Betriebs-/Administrationsdokumentation,
5. bewusste offene Entscheidung mit Status, Kontext und nächstem Entscheidungspunkt.

**Projektübergreifende Definition of Done:** Eine fachliche oder technische Entscheidung gilt erst als abgeschlossen, wenn Umsetzung und persistente Dokumentation nachgeführt sind. Chat-/KI-Gedächtnis ist keine kanonische Projektquelle. Bei jeder Änderung sind die betroffenen Bereiche Fachkonzept, Architektur, Datenmodell/Migrationen, Konfiguration/Secrets, Installation, Tests, Deployment, Backup/Restore und Administration mitzudenken; betroffene Lücken werden nachgeführt oder ausdrücklich als offen dokumentiert.

## 3. Zu prüfende Quellen

Der Audit berücksichtigt mindestens:

- aktuelle Projektgrundlagen und Fach-/Betriebsdokumente in der Projektbibliothek,
- Dokumentation und Quellcode des Demonstrators in GitHub,
- Konfigurationen, Workflows und strukturierte Arbeitsdaten,
- auffindbare verbindliche Entscheidungen aus dem Projektverlauf,
- Implementierungen, die eine fachliche Regel verkörpern, auch wenn die Dokumentation noch fehlt.

Nicht öffentliche/verdeckte Quellen bleiben von öffentlicher Dokumentation und öffentlichem Repository getrennt; ihre Existenz und technische Rolle werden nur soweit erforderlich dokumentiert.

## 4. Konsolidierungsmatrix

Statuswerte: `gesichert`, `teilweise`, `fehlt`, `offen`, `zu prüfen`.

| ID | Entscheidungsbereich | Nachweis/derzeitige Ablage | Ziel der Echtbetriebsdokumentation | Status |
|---|---|---|---|---|
| D001 | Produktname und Zweck „Feldkirchen im Blick“ | Fach-/Frontend-Dokumentation, Demonstrator | Fachkonzept + README | zu prüfen |
| D002 | Beiträge, Sitzungsübersichten und Themen als drei Inhaltsebenen | Fach-/Frontend-Dokumentation | Fachkonzept | zu prüfen |
| D003 | „Unsere Einordnung“: grüne Perspektive, keine erfundene lokale Position | KI-/Redaktionsregeln, Projektentscheidungen | KI-/Geschäftsregeln | teilweise |
| D004 | Sprachliche Neuausrichtung: bürgerverständlich, konkret, keine interne Prozess-/KI-Sprache | Projektentscheidungen und KI-Leitfaden-Zwischenstände | KI-Leitfaden + Sprachleitlinie | teilweise |
| D005 | Einordnung darf Profil zeigen und angemessen zuspitzen; Chancen/Zielkonflikte/kommunale Handlungsoptionen konkretisieren | Redaktionelle Betreuung + Projektentscheidungen | KI-Leitfaden | teilweise |
| D006 | Referenzwissen für grüne Einordnung: festgelegte grüne Programme/Leitlinien/lokale Ziele | Projektgrundlagen | KI-Leitfaden + Referenzwissen | zu prüfen |
| D007 | Keine mechanische Übertragung übergeordneter grüner Positionen auf lokale Fälle | Projektentscheidungen | KI-Leitfaden | zu prüfen |
| D008 | Belegepflicht; Primärquellen und direkte Vorlagenlinks bevorzugen | KI-/Redaktionsregeln | KI-Leitfaden + Quellenregeln | teilweise |
| D009 | Regelmäßige direkte Quellenbeobachtung statt allein Suchmaschinen; Pflicht- und Themenquellen | KI-Leitfaden 1.6 + Quellenmonitor | KI-Leitfaden + Quellenmonitor | teilweise |
| D010 | Bürgerinitiativen/Verbände/NGOs als relevante Quellen mit Resonanz-/Gegenprüfung | Projektentscheidungen | Quellenregeln | zu prüfen |
| D011 | Manueller Trigger „Bitte FIB-Update ausführen“ und Update-Parameter/Standardlauf | Arbeitsdaten + Projektentscheidungen | Betriebsdokumentation | teilweise |
| D012 | Persistenter FIB-Datenbestand ist Gedächtnis, nicht KI-Modell | Architektur | Architektur | gesichert |
| D013 | GitHub für Code/Automatisierung; PostgreSQL/Supabase für fachliche Daten | Architektur | Architektur + Betrieb | gesichert |
| D014 | Geschäftsregeln fachlich dokumentieren und soweit sinnvoll deterministisch als Code/Konfiguration umsetzen | Architektur | Architektur + Entwicklerdoku | gesichert |
| D015 | Redaktionelle Prüfung/Freigabe vor Veröffentlichung | Architektur/Redaktionsdoku | Fachkonzept + Betrieb | gesichert |
| D016 | Bildauswahl und Bildimport: Sach-/Objekt-/Ortsbezug; kein Bild besser als unpassendes Bild; explizite Primärzuordnung, weitere Verwendungen, Ausschlüsse und Schlagworte | Bildkonzept/Frontend; `FIB_Frontend_und_Darstellung.md` V0.2 | Bildkonzept + Frontend | gesichert |
| D017 | Bildbedarf `yes|optional|no` und Bedarfsliste | Bildkonzept/Frontend/Arbeitsdaten | Bildkonzept + Redaktion | gesichert |
| D018 | „Mehr zum Bild“ als getrennte, geprüfte ortsbezogene Erzählebene; FIB bleibt kommunalpolitisch fokussiert | Bildkonzept/Frontend + Projektentscheidungen | Bildkonzept + Frontend | gesichert |
| D019 | Bildmetadaten/Rechte/Kennzeichen/EXIF/Alt-Texte | Bildkonzept | Bildkonzept + Betrieb | gesichert |
| D020 | Teilen/Drucken-PDF/Benachrichtigungen und Social-Media-Metadaten | Demonstrator/Projektentscheidungen | Frontend + Betrieb | zu prüfen |
| D021 | Sunflower/WordPress-Integration bei Erhalt FIB-spezifischer Funktionen | Frontend | Architektur + Frontend | gesichert |
| D022 | Echtbetriebsarchitektur mit Supabase, Redaktions-Web-App, GitHub Actions, austauschbaren KI-/RAG-Diensten | Architektur | Architektur | gesichert |
| D023 | Dokumentlenkung mit Dokumentstand und Änderungshistorie | Audit und Frontend-Dokument nach Standard geführt; übrige kanonische Dokumente noch zu prüfen | alle kanonischen Dokumente | teilweise |
| D024 | GitHub als künftig führende Projektdokumentation; Chat/Projektbibliothek nicht als alleinige Wahrheit | Auditregel und Definition of Done auf Arbeitsbranch persistent festgelegt | Dokumentationsstandard + README | teilweise; endgültige Kanonisierung erst nach Audit |
| D025 | Reproduzierbarkeit: Installation, Konfiguration, DB-Migrationen, Backup/Restore, Administration, Deployment | `docs/konsolidierung/FIB_Betrieb_und_Reproduzierbarkeit.md` dokumentiert den reproduzierbaren Demonstrator-Iststand und markiert fehlende Echtbetriebsbausteine ausdrücklich | Betriebs-/Entwicklerdokumentation + praktische Restore-/Deployment-Nachweise | teilweise |

## 5. Prüfschritte

1. Alle vorhandenen FIB-Dokumente inventarisieren und Version/Stand/Status erfassen.
2. Projektentscheidungen thematisch gegen die Dokumente prüfen.
3. Implementierten Demonstrator und Workflows gegen die Dokumentation prüfen.
4. Für jede Lücke Ziel-Dokument bestimmen und Inhalt übernehmen.
5. Widersprüche nicht stillschweigend auflösen, sondern als Konflikt markieren und anhand der zeitlich/fachlich verbindlicheren Entscheidung klären.
6. Alle kanonischen Dokumente auf einheitliche Dokumentlenkung umstellen.
7. Echtbetriebsdokumentation um Reproduzierbarkeit ergänzen: Installation, Datenbank, Konfiguration, Secrets-Anforderungen, Backup/Restore, Administration, Deployment und Tests.
8. Konsolidierte Markdown-Fassungen prüfen und erst danach nach `main` übernehmen.
9. Auditmatrix auf `gesichert` oder bewusst `offen` bringen; keine ungeklärten `teilweise`-/`fehlt`-Punkte beim Abschluss.

## 6. Abnahmekriterium

Die Konsolidierung ist abgeschlossen, wenn:

- alle auffindbaren verbindlichen Entscheidungen einer persistenten Zielablage zugeordnet sind,
- alle kanonischen Dokumente Dokumentstand und Änderungshistorie enthalten,
- keine fachlich relevante Regel ausschließlich aus Chat-/KI-Gedächtnis benötigt wird,
- Code, Konfiguration und Datenbankmigrationen mit der fachlichen Dokumentation übereinstimmen,
- ein Neuaufsetzen des Systems anhand der Dokumentation praktisch nachvollziehbar ist,
- offene Entscheidungen ausdrücklich als offen dokumentiert sind.

## 7. Laufender Schutz nach dem Audit

Nach Abschluss gilt für FIB die projektübergreifende Definition of Done: Eine verbindliche Entscheidung ist erst abgeschlossen, wenn ihre betroffene persistente Dokumentation im selben Arbeitsgang aktualisiert wurde. Chatvereinbarungen ohne persistente Nachführung gelten als Dokumentationsdefekt und werden nachgetragen.
