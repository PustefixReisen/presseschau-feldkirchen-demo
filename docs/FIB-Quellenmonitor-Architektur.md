# Architekturhinweis FIB-Quellenmonitor

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.2 | 16.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 10.09.2026 | Architekturrolle des Quellenmonitors beschrieben |
| 0.2 | 16.09.2026 | Dokumentlenkung ergänzt und technische Erfassung von fachlicher Quellenpflicht und Redaktion abgegrenzt |

Der Quellenmonitor ist ein vorgelagerter technischer Erfassungsbaustein. Er erzeugt keine öffentlichen FIB-Beiträge selbst. Seine Aufgabe ist ausschließlich, neue oder geänderte Fundstellen zuverlässig zu erkennen und in die Inbox zu übergeben. Redaktionelle Prüfung, inhaltliche Einordnung und Veröffentlichung bleiben davon getrennte Schritte.

`config/source-monitor.json` beschreibt den automatisierten technischen Ausschnitt der Quellenbeobachtung. Die fachliche Definition der zu prüfenden Quellen und der erforderlichen Resonanz-/Gegenprüfung bleibt im KI-Leitfaden bzw. den Quellenregeln verankert. Eine Quelle ist daher nicht allein deshalb fachlich optional, weil sie im Monitor nicht oder nur als `topic` konfiguriert ist.

Der persistente Monitorzustand und die Inbox dienen der technischen Änderungs- und Fundstellenerkennung. Sie sind weder das fachliche FIB-Gedächtnis noch eine redaktionelle Freigabe. Erst der nachgelagerte FIB-Updateprozess entscheidet nach Quellenprüfung, Relevanz und redaktionellen Regeln über Übernahme, Aktualisierung oder Ausschluss.
