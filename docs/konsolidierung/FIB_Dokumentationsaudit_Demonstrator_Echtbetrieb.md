# FIB – Dokumentationsaudit Demonstrator → Echtbetrieb

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 1.2 | 04.10.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 10.09.2026 | Audit begonnen; Sicherungs- und Konsolidierungsverfahren sowie erste Entscheidungsbereiche festgelegt |
| 0.2 | 11.09.2026 | Projektübergreifenden Dokumentationsstandard als verbindliche Auditregel präzisiert; D023 und D024 fortgeschrieben |
| 0.3 | 12.09.2026 | D025 mit erstem Betriebs- und Reproduzierbarkeitsdokument auf `teilweise` gehoben |
| 0.4 | 13.09.2026 | Frontend-Dokument auf Dokumentlenkung umgestellt; Bildimport-/Zuordnungsregel nachgeführt |
| 0.5 | 14.09.2026 | Teilen, Einzelkarten-Druck/PDF und Benachrichtigungs-Prototyp gegen Code geprüft; D020 auf `teilweise` |
| 0.6 | 15.09.2026 | KI-Leitfaden dokumentgelenkt; D007, D008, D010 und D011 gesichert |
| 0.7 | 17.09.2026 | README konsolidiert; D001 und D002 gesichert, D024 fortgeschrieben |
| 0.8 | 20.09.2026 | Breite lokale Relevanz und Auswertung kommunaler Beschlussvorlagen als D026/D027 ergänzt |
| 0.9 | 30.09.2026 | Regeln zu persistentem Demonstrator-Datenbestand, Aktualisierungshistorie und Cache-Busting als D028–D030 aufgenommen |
| 1.0 | 01.10.2026 | D028–D030 gegen aktuellen `main`-Stand geprüft und in `FIB_Frontend_und_Darstellung.md` V0.4 konsolidiert; D029/D030 gesichert, D028 wegen noch ausstehender Architektur-/Betriebsübernahme teilweise |
| 1.1 | 02.10.2026 | D028 in `FIB_Betrieb_und_Reproduzierbarkeit.md` V0.2 für Laufzeit, Tests, Datenmodell, Restore und Administration nachgeführt; D030 dort zusätzlich als Deploymentanforderung verankert; D028 nur noch wegen fehlender Architekturübernahme teilweise |
| 1.2 | 04.10.2026 | `FIB_Architektur.md` V0.1 geprüft; Persistenzgrenze, Wiederherstellungsgrenze und Übergang zur Echtbetriebsdatenhaltung sind dort nachgeführt; D028 damit gesichert |

## 1. Zweck

Dieses Dokument steuert die einmalige Konsolidierung der Dokumentation von **Feldkirchen im Blick (FIB)** beim Übergang vom Demonstrator zum Echtbetrieb. Ziel ist der Nachweis, dass alle auffindbaren verbindlichen Projektentscheidungen persistent in Repository, Datenmodell/Migrationen, Konfiguration oder ausführbarer Geschäftslogik abgebildet sind.

**Richtschnur:** Ein fachkundiger Dritter muss FIB allein aus Repository, Datenbankschema/-migrationen, Konfiguration, dokumentierten externen Voraussetzungen und den erforderlichen gesicherten Datenbeständen neu aufsetzen und fachlich nachvollziehen können. Chatverläufe und KI-Gedächtnis dürfen dafür nicht erforderlich sein.

## 2. Sicherheitsregel während der Konsolidierung

Bis zum Abschluss dieses Audits wird keine bestehende Dokumentationsquelle allein deshalb verworfen, weil ihr Inhalt in Markdown übertragen wurde. Der Branch `docs/canonical-markdown` ist Arbeitsstand und wird nicht allein aufgrund der Formatmigration zur kanonischen Echtbetriebsdokumentation erklärt.

Eine Festlegung gilt erst als gesichert, wenn sie fachlich/technisch persistent dokumentiert oder als bewusste offene Entscheidung mit Kontext und nächstem Entscheidungspunkt geführt wird.

**Projektübergreifende Definition of Done:** Eine fachliche oder technische Entscheidung gilt erst als abgeschlossen, wenn Umsetzung und persistente Dokumentation nachgeführt sind. Chat-/KI-Gedächtnis ist keine kanonische Projektquelle. Bei jeder Änderung sind Fachkonzept, Architektur, Datenmodell/Migrationen, Konfiguration/Secrets, Installation, Tests, Deployment, Backup/Restore und Administration mitzudenken.

## 3. Zu prüfende Quellen

Der Audit berücksichtigt Projektgrundlagen und Fach-/Betriebsdokumente, GitHub-Dokumentation und Quellcode, Konfigurationen und Workflows, strukturierte Arbeitsdaten, auffindbare verbindliche Projektentscheidungen sowie Implementierungen, die fachliche Regeln verkörpern. Nicht öffentliche Quellen bleiben von öffentlicher Dokumentation und öffentlichem Repository getrennt.

## 4. Konsolidierungsmatrix

Statuswerte: `gesichert`, `teilweise`, `fehlt`, `offen`, `zu prüfen`.

| ID | Entscheidungsbereich | Nachweis/derzeitige Ablage | Ziel | Status |
|---|---|---|---|---|
| D001 | Produktname und Zweck „Feldkirchen im Blick“ | `README.md` V0.2 | Fachkonzept + README | gesichert |
| D002 | Beiträge, Sitzungsübersichten und Themen als drei Inhaltsebenen | `README.md` V0.2 | Fachkonzept + README | gesichert |
| D003 | „Unsere Einordnung“: grüne Perspektive, keine erfundene lokale Position | KI-/Redaktionsregeln | KI-/Geschäftsregeln | teilweise |
| D004 | Bürgerverständliche, konkrete Sprache ohne interne Prozess-/KI-Sprache | KI-Leitfaden-Zwischenstände | KI-Leitfaden + Sprachleitlinie | teilweise |
| D005 | Einordnung darf Profil zeigen; Chancen/Zielkonflikte/Handlungsoptionen konkretisieren | Projektentscheidungen | KI-Leitfaden | teilweise |
| D006 | Referenzwissen für grüne Einordnung | Projektgrundlagen | KI-Leitfaden + Referenzwissen | zu prüfen |
| D007 | Keine mechanische Übertragung übergeordneter grüner Positionen | KI-Leitfaden 9.4–9.5 | KI-Leitfaden | gesichert |
| D008 | Belegepflicht; Primärquellen und direkte Vorlagenlinks bevorzugen | KI-Leitfaden 4, 7, 11.3, 11.5 | KI-Leitfaden + Quellenregeln | gesichert |
| D009 | Direkte Quellenbeobachtung; Pflicht- und Themenquellen | KI-Leitfaden + Quellenmonitor-Dokumente | KI-Leitfaden + Quellenmonitor | gesichert |
| D010 | Bürgerinitiativen/Verbände/NGOs mit Resonanz-/Gegenprüfung | KI-Leitfaden 4.3 | Quellenregeln | gesichert |
| D011 | Manueller Trigger „Bitte FIB-Update ausführen“ und Standardlauf | KI-Leitfaden 11.9 | Betriebsdokumentation | gesichert |
| D012 | Persistenter FIB-Datenbestand ist Gedächtnis, nicht KI-Modell | Architektur | Architektur | gesichert |
| D013 | GitHub für Code/Automatisierung; PostgreSQL/Supabase für fachliche Daten | Architektur | Architektur + Betrieb | gesichert |
| D014 | Geschäftsregeln dokumentieren und soweit sinnvoll deterministisch umsetzen | Architektur | Architektur + Entwicklerdoku | gesichert |
| D015 | Redaktionelle Prüfung/Freigabe vor Veröffentlichung | Architektur/Redaktionsdoku | Fachkonzept + Betrieb | gesichert |
| D016 | Bildauswahl/-import nach Sach-/Objekt-/Ortsbezug | Bildkonzept + Frontend | Bildkonzept + Frontend | gesichert |
| D017 | Bildbedarf `yes|optional|no` und Bedarfsliste | Bildkonzept/Arbeitsdaten | Bildkonzept + Redaktion | gesichert |
| D018 | „Mehr zum Bild“ als getrennte geprüfte ortsbezogene Erzählebene | Bildkonzept/Frontend | Bildkonzept + Frontend | gesichert |
| D019 | Bildmetadaten/Rechte/Kennzeichen/EXIF/Alt-Texte | Bildkonzept | Bildkonzept + Betrieb | gesichert |
| D020 | Teilen/Drucken-PDF/Benachrichtigungen/Social-Media-Metadaten | Code + `FIB_Frontend_und_Darstellung.md` V0.4; Benachrichtigungen noch Mockup | Frontend + Betrieb | teilweise |
| D021 | Sunflower/WordPress-Integration bei Erhalt FIB-spezifischer Funktionen | Frontend | Architektur + Frontend | gesichert |
| D022 | Echtbetriebsarchitektur mit Supabase, Redaktions-Web-App, GitHub Actions, austauschbaren KI-/RAG-Diensten | Architektur | Architektur | gesichert |
| D023 | Dokumentlenkung mit Dokumentstand und Änderungshistorie | mehrere kanonische Dokumente nach Standard; übrige noch zu prüfen | alle kanonischen Dokumente | teilweise |
| D024 | GitHub als künftig führende Projektdokumentation | Audit + README | Dokumentationsstandard + README | teilweise; Kanonisierung erst nach Audit |
| D025 | Reproduzierbarkeit: Installation, Konfiguration, DB-Migrationen, Backup/Restore, Administration, Deployment | `FIB_Betrieb_und_Reproduzierbarkeit.md` V0.2 | Betriebs-/Entwicklerdoku + praktische Nachweise | teilweise |
| D026 | Breite lokale Relevanz ohne zusätzliche kommunalpolitische Schwelle | `FIB_Fachregeln_Nachtrag_2026-09-20.md` + neuere Fassung auf `main` | KI-Leitfaden + Fachkonzept | teilweise; kontrollierte Übernahme ausstehend |
| D027 | Beschlussvorlagen und Anlagen systematisch auswerten; Vorlage und Beschluss trennen | `FIB_Fachregeln_Nachtrag_2026-09-20.md` + neuere Fassung auf `main` | KI-Leitfaden + Sitzungs-/Quellenregeln | teilweise; kontrollierte Übernahme ausstehend |
| D028 | Persistenter Demonstrator-Fachbestand: `data/beitraege.json`, `data/sitzungen.json`, `data/themen.json`; `index.html` nur synchronisierte Ausgabe; historische Update-Skripte keine Laufzeit-Datenhaltung | gegen aktuellen `main`-Stand geprüft; `FIB_Frontend_und_Darstellung.md` V0.4 Abschnitt 9; `FIB_Betrieb_und_Reproduzierbarkeit.md` V0.2; `FIB_Architektur.md` V0.1 Abschnitte 3.1, 3.3 und 5 | Architektur + Betriebs-/Entwicklerdoku | gesichert |
| D029 | Fortschreibung bestehender Beiträge: neueste Aktualisierung im Untertitel, ältere Aktualisierungen historisieren; Fehlerkorrektur ohne öffentlichen Aktualisierungshinweis; eigenständiger Nachrichtenwert als neuer verknüpfter Beitrag | `FIB_Frontend_und_Darstellung.md` V0.4 Abschnitt 4.1; gegen neueren `main`-Stand geprüft | Frontend + Redaktionsregeln | gesichert |
| D030 | Cache-Busting: Versionskennung zentraler CSS-/JS-Assets bei sichtbaren Frontend-Änderungen mitführen | `FIB_Frontend_und_Darstellung.md` V0.4 Abschnitt 13; `FIB_Betrieb_und_Reproduzierbarkeit.md` V0.2 Abschnitt 6.1; `main/index.html` verwendet versioniertes `assets/style.css` | Frontend + Deployment/Betrieb | gesichert |

## 5. Prüfschritte

1. Alle vorhandenen FIB-Dokumente inventarisieren und Version/Stand/Status erfassen.
2. Projektentscheidungen thematisch gegen die Dokumente prüfen.
3. Implementierten Demonstrator und Workflows gegen die Dokumentation prüfen.
4. Für jede Lücke Ziel-Dokument bestimmen und Inhalt übernehmen.
5. Widersprüche nicht stillschweigend auflösen, sondern anhand der zeitlich/fachlich verbindlicheren Entscheidung klären.
6. Alle kanonischen Dokumente auf einheitliche Dokumentlenkung umstellen.
7. Reproduzierbarkeit um Installation, Datenbank, Konfiguration, Secrets-Anforderungen, Backup/Restore, Administration, Deployment und Tests ergänzen.
8. Konsolidierte Markdown-Fassungen prüfen und erst danach nach `main` übernehmen.
9. Auditmatrix auf `gesichert` oder bewusst `offen` bringen; keine ungeklärten `teilweise`-/`fehlt`-Punkte beim Abschluss.

## 6. Abnahmekriterium

Die Konsolidierung ist abgeschlossen, wenn alle auffindbaren verbindlichen Entscheidungen persistent zugeordnet sind, alle kanonischen Dokumente Dokumentstand und Änderungshistorie enthalten, keine fachlich relevante Regel ausschließlich Chat-/KI-Gedächtnis benötigt, Code/Konfiguration/Migrationen mit der Dokumentation übereinstimmen, ein Neuaufsetzen praktisch nachvollziehbar ist und offene Entscheidungen ausdrücklich als offen dokumentiert sind.

## 7. Laufender Schutz nach dem Audit

Nach Abschluss gilt für FIB die projektübergreifende Definition of Done: Eine verbindliche Entscheidung ist erst abgeschlossen, wenn ihre betroffene persistente Dokumentation im selben Arbeitsgang aktualisiert wurde. Chatvereinbarungen ohne persistente Nachführung gelten als Dokumentationsdefekt und werden nachgetragen.