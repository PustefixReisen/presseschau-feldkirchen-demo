# Feldkirchen im Blick (FIB)

## Dokumentstand

| Version | Stand | Verantwortlich |
|---|---|---|
| 0.2 | 17.09.2026 | Josef Walter – erstellt mit KI-Unterstützung |

## Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | bisheriger Stand | Demonstrator als Presseschau Feldkirchen bezeichnet |
| 0.2 | 17.09.2026 | Produktname und Zweck präzisiert; drei Inhaltsebenen und Dokumentations-/Kanonisierungsstatus verankert |

## Zweck

**Feldkirchen im Blick (FIB)** ist das öffentliche Informationsangebot des Ortsverbands BÜNDNIS 90/DIE GRÜNEN Feldkirchen zur kommunalpolitisch relevanten Entwicklung in Feldkirchen. Das Repository enthält derzeit den Demonstrator und die beim Übergang zum Echtbetrieb konsolidierte Projektdokumentation.

FIB bereitet öffentlich zugängliche Informationen aus Gemeinde und Ratsinformationssystem, weiteren öffentlichen Stellen, Presse sowie thematisch einschlägigen Verbänden und Initiativen auf. Redaktionelle Einordnung und Veröffentlichung richten sich nach dem KI-Leitfaden und den dokumentierten Redaktionsregeln; automatisierte Recherche oder KI-Ausgaben sind keine Veröffentlichungsfreigabe.

## Inhaltsebenen

FIB unterscheidet drei fachliche Inhaltsebenen:

1. **Beiträge** zu einzelnen neuen oder aktualisierten Entwicklungen,
2. **Sitzungsübersichten** zu kommunalpolitisch relevanten Sitzungen und ihren öffentlichen Tagesordnungspunkten,
3. **Themen** als längerfristige, fortgeschriebene Zusammenführung zusammengehöriger Entwicklungen.

Die Ebenen ergänzen sich: Beiträge und Sitzungen dokumentieren konkrete Entwicklungen; Themen halten den längerfristigen Sachstand und verknüpfen zugehörige Beiträge.

## Dokumentation und kanonischer Stand

Der Branch `docs/canonical-markdown` ist der Arbeitsstand der laufenden Dokumentationskonsolidierung. Er wird nicht automatisch nach `main` übernommen. Der Audit `docs/konsolidierung/FIB_Dokumentationsaudit_Demonstrator_Echtbetrieb.md` steuert die Prüfung.

Für Projektentscheidungen gilt die projektübergreifende Definition of Done: Eine fachliche oder technische Entscheidung ist erst abgeschlossen, wenn Umsetzung und persistente Dokumentation nachgeführt sind. Chat-/KI-Gedächtnis ist keine kanonische Projektquelle.

Wichtige Einstiege:

- `docs/projektgrundlagen/KI-Leitfaden_Homepage-Presseschau.md` – Recherche-, Quellen-, Einordnungs- und Update-Regeln,
- `docs/FIB_Frontend_und_Darstellung.md` – Darstellung und Frontend-Funktionen,
- `docs/FIB-Quellenmonitor.md` – technische Direktbeobachtung von Quellen,
- `docs/konsolidierung/FIB_Betrieb_und_Reproduzierbarkeit.md` – Betrieb und Reproduzierbarkeit,
- `docs/konsolidierung/FIB_Dokumentationsaudit_Demonstrator_Echtbetrieb.md` – Konsolidierungsstatus und offene Punkte.

## Reproduzierbarkeit

Der Demonstrator und der geplante Echtbetrieb werden in der Dokumentation ausdrücklich getrennt. Noch nicht implementierte Echtbetriebsbausteine – insbesondere Datenbank-/Migrationsstand, Secrets, Deployment, Backup/Restore und Administration – dürfen nicht als bereits produktiv vorhanden beschrieben werden. Der Audit bleibt maßgeblich, bis die Dokumentationskonsolidierung abgeschlossen und eine Übernahme nach `main` bewusst freigegeben wurde.
