(function applyFibUpdate20260903b(){
  const contributionList = document.querySelector('#contribution-list');

  if (contributionList && !document.querySelector('#R061')) {
    const article = document.createElement('article');
    article.className = 'card contribution';
    article.id = 'R061';
    article.dataset.place = 'Feldkirchen';
    article.dataset.search = '20. august 2026 feldkirchen ortsentwicklung bauen nahversorgung sb bäckerei kirchenstraße ferienausschuss genehmigt fünf stellplätze verträge';
    article.innerHTML = `
      <div class="meta-row">
        <span class="date">20. August 2026</span>
        <span class="place">Feldkirchen</span>
        <span class="category">Ortsentwicklung &amp; Bauen</span>
      </div>
      <h3>Ferienausschuss stimmt SB-Bäckerei in der Kirchenstraße im dritten Anlauf zu</h3>
      <p class="subtitle">Nach zwei früheren Ablehnungen kann die Nutzungsänderung umgesetzt werden, wenn der Betreiber die Verträge für fünf Stellplätze vorlegt.</p>
      <div class="body"><p>Der Ferienausschuss hat der Umnutzung des Kiosks in der Kirchenstraße zu einer Selbstbedienungsbäckerei nun zugestimmt. Zuvor war das Vorhaben zweimal wegen des Stellplatznachweises abgelehnt worden. Nach neuen Unterlagen können fünf Stellplätze nachgewiesen werden. Nach der öffentlichen Berichterstattung darf die Bäckerei eröffnen, wenn die entsprechenden Stellplatzverträge der Verwaltung vorgelegt werden.</p></div>
      <h4>Quellen</h4>
      <ul class="sources"><li><a href="https://www.hallo-muenchen.de/hallo-verlag/feldkirchen-sb-baeckerei-darf-eroeffnen-aber-nur-wenn-betreiber-parkplatz-vertraege-vorlegt-94464638.html" rel="noopener noreferrer" target="_blank">Hallo München / Münchner Merkur – SB-Bäckerei darf eröffnen</a> · 29. August 2026</li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/do0040.asp?smcadat=2461235" rel="noopener noreferrer" target="_blank">RIS Feldkirchen – Ferienausschuss 20.08.2026 / Vorlage 5317/2026</a></li></ul>
      <section class="assessment"><h4>Unsere Einordnung</h4><p>Der Vorgang zeigt, dass die Frage der Nahversorgung nicht allein an der grundsätzlichen Zulässigkeit einer Nutzung hängt, sondern auch an ganz konkreten Anforderungen wie dem Stellplatznachweis. Mit der Zustimmung ist die frühere Ablehnung überholt. Für die Ortsmitte bleibt die weitergehende Aufgabe, Nahversorgung, kurze Wege und Aufenthaltsqualität so zu entwickeln, dass neue Angebote nicht von immer zusätzlichem Autoverkehr abhängig werden.</p></section>
      <a class="minor-link" href="#S021">Zur zugehörigen Sitzung</a>
      <div class="topic-link"><a href="#T010" rel="noopener" target="_blank">Mehr zum Thema: Ortszentrum und Nahversorgung</a></div>`;

    const first = contributionList.querySelector('.contribution');
    if (first) first.insertAdjacentElement('afterend', article); else contributionList.prepend(article);
  }

  const topic = document.querySelector('#T010');
  if (topic) {
    const date = topic.querySelector('.meta-row .date');
    if (date) date.textContent = 'Aktualisiert: 3. September 2026';

    const body = topic.querySelector(':scope > .body');
    if (body) body.innerHTML = `<p>Die Nahversorgung im Ortszentrum hat sich in mehreren Schritten verändert. Ende September 2025 schloss die bisherige Poststelle in der Kirchenstraße; die Postdienstleistungen wurden anschließend in einen Schreibwarenladen am Wolfgangsplatz verlagert.</p><p>Bei der geplanten Selbstbedienungsbäckerei in der Kirchenstraße änderte sich der Sachstand mehrfach. Nach zwei Ablehnungen wegen des Stellplatznachweises stimmte der Ferienausschuss dem Vorhaben am 20. August 2026 im dritten Anlauf zu. Voraussetzung ist nach der öffentlichen Berichterstattung, dass der Betreiber die Verträge über fünf Stellplätze vorlegt. Damit ist die frühere Darstellung eines zunächst beendeten Vorhabens überholt.</p>`;

    const assessment = topic.querySelector(':scope > .assessment p');
    if (assessment) assessment.textContent = 'Die neue Entscheidung macht deutlich, dass Nahversorgung im Ortszentrum nicht nur über einzelne Genehmigungen betrachtet werden sollte. Feldkirchen sollte klären, welche alltäglichen Angebote im Zentrum gestärkt werden sollen und wie sie möglichst gut zu Fuß und mit dem Rad erreichbar sind. Gerade bei kleinen innerörtlichen Nutzungen sollte außerdem sichtbar werden, ob und wo Stellplatzanforderungen sinnvolle Angebote erschweren und welche rechtlich zulässigen Möglichkeiten bestehen, Mobilitätskonzepte stärker auf kurze Wege statt zusätzlichen Autoverkehr auszurichten.';

    const details = topic.querySelector(':scope > details');
    if (details) details.innerHTML = `<summary>Offene Fragen (3)</summary><ul><li>Wird die SB-Bäckerei nach Vorlage der Stellplatzverträge tatsächlich eröffnet und wie entwickelt sich das Angebot?</li><li>Welche weiteren Lücken oder Veränderungen gibt es bei der wohnortnahen Versorgung im Ortszentrum?</li><li>Wie können Ortsentwicklung, Fuß- und Radverkehr und Stellplatzanforderungen so zusammenspielen, dass alltagstaugliche Angebote in zentraler Lage erleichtert werden?</li></ul>`;

    topic.dataset.search = `${topic.querySelector(':scope > h3')?.textContent || ''} ${body?.textContent || ''} ${assessment?.textContent || ''} ${details?.textContent || ''}`.toLowerCase();
  }

  // Ergebnisstatus der betreffenden Sitzung korrigieren, soweit der TOP im vorhandenen Sitzungsaudit enthalten ist.
  const session = document.querySelector('#S021');
  if (session) {
    session.querySelectorAll('.agenda-item').forEach(item => {
      if (/SB-Bäckerei/i.test(item.textContent)) {
        const decision = item.querySelector('.decision');
        if (decision) decision.textContent = 'zugestimmt; Stellplatzverträge als Voraussetzung';
      }
    });
  }
})();
