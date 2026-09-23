# FIB-Quellenmonitor

Der FIB-Quellenmonitor ergänzt die redaktionelle Recherche um einen technischen Direktabruf bekannter Quellen. Ziel ist, neue Seiten und Dokumente unabhängig von Suchmaschinen-Indexierung oder dem Webzugriff eines KI-Systems zu erkennen.

## Ablauf

1. `config/source-monitor.json` definiert die zu beobachtenden Quellen.
2. `tools/source-monitor/source_monitor.py` ruft die Quellen direkt per HTTP ab.
3. Gefundene Links und PDFs werden mit dem letzten Lauf verglichen.
4. PDFs werden heruntergeladen und per SHA-256 geprüft. Dadurch werden auch Änderungen unter unveränderter URL erkannt.
5. Der dauerhafte Stand liegt in `data/source-monitor-state.json`.
6. Neue oder geänderte Fundstellen werden in `data/source-monitor-inbox.json` mit Status `unprocessed` abgelegt. Diese Inbox ist die Übergabestelle für den späteren FIB-Updateprozess.
7. Laufbericht und heruntergeladene Dokumente werden für 14 Tage als GitHub-Actions-Artefakt gespeichert.

## Pflichtquelle Gemeinde – Aktuelle Meldungen

Die Übersichtsseite **„Gemeinde Feldkirchen – Aktuelle Meldungen“** ist eine Pflichtquelle. Sie wird unabhängig von den thematischen Unterseiten der Gemeinde direkt überwacht, weil dort auch fachlich relevante Meldungen außerhalb des Bauamts erscheinen können, etwa Beteiligungsaufrufe, Sicherheitsmeldungen, Verkehrs- und Umweltinformationen oder andere lokale Entwicklungen. Reine technische Servicehinweise werden weiterhin nach den redaktionellen Relevanzregeln behandelt.

Die Quelle wurde am 23.09.2026 ergänzt, nachdem beim Standardlauf zwei bereits veröffentlichte Meldungen – der Feldkirchner Aufruf zum ADFC-Fahrradklima-Test und die Gemeindemitteilung zum Hundevorfall im Dornacher Feld – als bisherige Erfassungslücke erkannt wurden.

## Pflichtquelle RIS-Dokumentfreigaben

Die öffentliche SessionNet-Seite **„RIS Feldkirchen – Dokumente mit Freigabe“** ist eine Pflichtquelle des Monitors. Sie kann neue Beschlussvorlagen und andere öffentliche Dokumente sichtbar machen, bevor oder auch ohne dass sie in einer veröffentlichten Tagesordnung auffallen. Neue Freigaben werden deshalb unabhängig von der Sitzungsübersicht als möglicher neuer FIB-Sachstand geprüft. Eine Dokumentfreigabe bestätigt für sich allein noch keinen konkreten Tagesordnungspunkt oder Sitzungstermin.

## Presseübersichten und Zwei-Achsen-Recherche

Der technische Monitor beobachtet ergänzend ausgewählte Presseübersichten. Für den Münchner Merkur sind die Landkreis-München-Übersicht sowie die Lokalseiten Feldkirchen, Aschheim, Kirchheim und Haar als Pflichtquellen hinterlegt. Ziel ist nicht die automatische Veröffentlichung von Presseartikeln, sondern die zuverlässige Erkennung neuer Kandidaten – auch dann, wenn ein Artikel unter einer Nachbargemeinde einsortiert ist.

Der Quellenmonitor ersetzt die redaktionelle Themenrecherche nicht. Ein vollständiger FIB-Update-Lauf kombiniert:
- **Ortsabdeckung** über Feldkirchen, Nachbargemeinden und relevante Regions-/Landkreisübersichten,
- **Themenabdeckung** über Suchbegriffe aller laufenden und etablierten FIB-Themen.

Die Themenbegriffe werden aus dem aktuellen Themenbestand abgeleitet und im Updateprozess fortgeschrieben. Neue oder geänderte Pressefundstellen werden wie andere Monitorereignisse zunächst nur als Recherchekandidaten in die Inbox übergeben.

## Automatik

Der Workflow `.github/workflows/source-monitor.yml` läuft täglich automatisch und kann zusätzlich manuell gestartet werden. Änderungen an Workflow, Quellenkonfiguration oder Monitor-Code lösen ebenfalls einen Lauf aus.

Der tägliche Lauf ist auf `04:17 UTC` terminiert. GitHub kann zeitgesteuerte Workflows mit kurzer Verzögerung starten.

## Baseline

Beim ersten Lauf wird für die meisten Quellen nur ein Ausgangsbestand aufgebaut. Dadurch wird die Inbox nicht mit allen bereits bekannten Links gefüllt. Der Parkraum-Testfall ist ausdrücklich mit `emit_on_baseline` markiert, damit das am 10.09.2026 verifizierte Parkraum-PDF beim ersten produktiven Lauf in der Inbox erscheint.

## Fehlerbehandlung

Fehler einzelner themenabhängiger Quellen werden im Zustand protokolliert. Ein Fehler einer als `mandatory` gekennzeichneten Quelle lässt den Workflow fehlschlagen, damit der Ausfall in GitHub Actions sichtbar bleibt. Ein späterer Ausbau kann Wiederholungsversuche und einen Browser-Fallback (Playwright) ergänzen, wenn eine Quelle den normalen HTTP-Abruf technisch verhindert.
