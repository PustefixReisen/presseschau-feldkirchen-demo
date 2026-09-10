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

## Automatik

Der Workflow `.github/workflows/source-monitor.yml` läuft täglich automatisch und kann zusätzlich manuell gestartet werden. Änderungen an Workflow, Quellenkonfiguration oder Monitor-Code lösen ebenfalls einen Lauf aus.

Der tägliche Lauf ist auf `04:17 UTC` terminiert. GitHub kann zeitgesteuerte Workflows mit kurzer Verzögerung starten.

## Baseline

Beim ersten Lauf wird für die meisten Quellen nur ein Ausgangsbestand aufgebaut. Dadurch wird die Inbox nicht mit allen bereits bekannten Links gefüllt. Der Parkraum-Testfall ist ausdrücklich mit `emit_on_baseline` markiert, damit das am 10.09.2026 verifizierte Parkraum-PDF beim ersten produktiven Lauf in der Inbox erscheint.

## Fehlerbehandlung

Fehler einzelner themenabhängiger Quellen werden im Zustand protokolliert. Ein Fehler einer als `mandatory` gekennzeichneten Quelle lässt den Workflow fehlschlagen, damit der Ausfall in GitHub Actions sichtbar bleibt. Ein späterer Ausbau kann Wiederholungsversuche und einen Browser-Fallback (Playwright) ergänzen, wenn eine Quelle den normalen HTTP-Abruf technisch verhindert.
