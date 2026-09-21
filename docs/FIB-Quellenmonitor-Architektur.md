# Architekturhinweis FIB-Quellenmonitor

Der Quellenmonitor ist ein vorgelagerter technischer Erfassungsbaustein. Er erzeugt keine öffentlichen FIB-Beiträge selbst. Seine Aufgabe ist ausschließlich, neue oder geänderte Fundstellen zuverlässig zu erkennen und in die Inbox zu übergeben. Redaktionelle Prüfung, inhaltliche Einordnung und Veröffentlichung bleiben davon getrennte Schritte.


## Übergang in den Echtbetrieb

Der heutige Quellenmonitor ist ein Demonstrator-Baustein. Seine fachlichen Erkennungsregeln sind jedoch produktionsrelevant. Beim Aufbau des Echtsystems Anfang Oktober werden daher nicht die heutigen Dateien oder GitHub-Actions-Schritte unverändert übernommen, sondern deren **fachliche Funktion** in die neue Architektur übertragen.

Das Echtsystem muss insbesondere:
- Quellen und Suchachsen konfigurierbar verwalten,
- Orts- und Themenrecherche getrennt protokollieren,
- neue bzw. geänderte Dokumente und Presselinks persistent erkennen,
- RIS-Dokumentfreigaben unabhängig von Tagesordnungen erfassen,
- Presseübersichten für Feldkirchen, Nachbargemeinden und Landkreis beobachten,
- Kandidaten deduplizieren und mit Themen/Vorgängen verknüpfen,
- Recherche- und Verarbeitungsstatus dauerhaft in der Datenbank speichern,
- technische Erfassung, KI-Auswertung, redaktionelle Freigabe und Veröffentlichung als getrennte Prozessschritte behandeln.

Die aktuelle source-monitor.json dient bis zur Produktivarchitektur als fachliche Referenz für den zu übernehmenden Quellenbestand.
