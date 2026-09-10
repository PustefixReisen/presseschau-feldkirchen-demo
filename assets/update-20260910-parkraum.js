(function applyParkraumUpdate20260910(){
  const contributionList=document.querySelector('#contribution-list');
  if(contributionList && !document.getElementById('R075')){
    const article=document.createElement('article');
    article.className='card contribution'; article.id='R075';
    article.innerHTML=`
      <div class="meta-row"><span class="date">10. September 2026</span><span class="place">Feldkirchen</span><span class="category">Mobilität &amp; Verkehr</span></div>
      <h3>Gemeinde veröffentlicht neuen Stand zum Parkraumkonzept</h3>
      <p class="subtitle">Eine neue Bauamtsseite macht das weiterentwickelte Parkraumkonzept öffentlich zugänglich.</p>
      <div class="body"><p>Die Gemeinde Feldkirchen hat am 10. September 2026 auf ihrer Bauamtsseite eine neue Veröffentlichung zum Parkraumkonzept bereitgestellt. Damit liegt zu dem seit 2025 erarbeiteten und 2026 mehrfach im Gemeinderat behandelten Konzept ein neuer öffentlicher Veröffentlichungsstand vor. Die dort verlinkten Konzeptunterlagen konnten im aktuellen Prüflauf technisch noch nicht vollständig ausgelesen werden. Aussagen zu einzelnen Maßnahmen werden deshalb erst nach abgeschlossener Dokumentenprüfung ergänzt.</p></div>
      <h4>Quellen</h4><ul class="sources"><li><a href="https://www.feldkirchen.de/bauen/nachrichten-aus-dem-bauamt/neues-parkraumkonzept-in-feldkirchen" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Neues Parkraumkonzept in Feldkirchen</a></li></ul>
      <details><summary>Was bisher passiert ist (2)</summary><ul><li>12. März 2026 · Gemeinderat fordert Ergänzungen am Parkraumkonzept</li><li>18. August 2026 · Anwohner protestieren gegen neue Parkregelung am Friedhof</li></ul></details>
      <section class="assessment"><h4>Unsere Einordnung</h4><p>Dass die Gemeinde den aktuellen Stand des Parkraumkonzepts öffentlich zugänglich macht, verbessert zunächst die Nachvollziehbarkeit. Entscheidend ist nun, ob Ziele, konkrete Maßnahmen und ihre spätere Wirkung transparent erkennbar werden. Aus grüner Sicht sollte Parkraummanagement den begrenzten öffentlichen Straßenraum fair zwischen Anwohnern, Besuchern, Gewerbe, Fuß- und Radverkehr, Grün und anderen Nutzungen verteilen. Welche konkreten Schlussfolgerungen das neue Konzept dafür vorsieht, wird nach vollständiger Auswertung der Unterlagen ergänzt.</p></section>
      <div class="topic-link"><a href="#T006" rel="noopener" target="_blank">Mehr zum Thema: Parkraumkonzept</a></div>`;
    contributionList.prepend(article);
  }
  const t006=document.getElementById('T006');
  if(t006){
    const date=t006.querySelector('.meta-row .date'); if(date) date.textContent='Aktualisiert: 10. September 2026';
    const body=t006.querySelector(':scope > .body');
    if(body && !/10\. September.*neuen Stand zum Parkraumkonzept/i.test(body.textContent||'')) body.insertAdjacentHTML('beforeend','<p>Am 10. September veröffentlichte die Gemeinde auf ihrer Bauamtsseite einen neuen Stand zum Parkraumkonzept. Damit ist das Thema nach den Beratungen und ersten praktischen Konflikten erneut fortgeschrieben worden. Die auf der neuen Seite verlinkten Konzeptunterlagen konnten im aktuellen Prüflauf technisch noch nicht vollständig ausgewertet werden; konkrete neue Maßnahmen werden nach dieser Dokumentenprüfung ergänzt.</p>');
    const details=[...t006.querySelectorAll(':scope > details')];
    const sources=details.find(d=>/Quellen/i.test(d.querySelector('summary')?.textContent||''));
    if(sources){const ul=sources.querySelector('ul'); if(ul && !ul.querySelector('a[href*="neues-parkraumkonzept"]')) ul.insertAdjacentHTML('beforeend','<li><a href="https://www.feldkirchen.de/bauen/nachrichten-aus-dem-bauamt/neues-parkraumkonzept-in-feldkirchen" rel="noopener noreferrer" target="_blank"><span class="source-date">10. September 2026</span> · Gemeinde Feldkirchen – Neues Parkraumkonzept in Feldkirchen</a></li>'); if(ul) sources.querySelector('summary').textContent=`Quellen (${ul.children.length})`;}
    const assessment=t006.querySelector(':scope > .assessment p'); if(assessment) assessment.textContent='Parkraummanagement sollte mehr leisten als Parkplätze zu zählen und Höchstparkzeiten festzulegen. Öffentlicher Straßenraum ist begrenzt und muss zwischen Anwohnern, Besuchern, Gewerbe, Fuß- und Radverkehr, Grün und anderen Nutzungen fair verteilt werden. Mit der Veröffentlichung des weiterentwickelten Konzepts wird nun überprüfbar, welche Ziele und Maßnahmen Feldkirchen tatsächlich verfolgt. Aus grüner Sicht sollte die Gemeinde nicht nur einzelne Konflikte lösen, sondern für die unterschiedlichen Bereiche klare Ziele benennen und anschließend messen, ob die Regeln diese Ziele erreichen. Eine Bewertung einzelner neuer Maßnahmen wird ergänzt, sobald die veröffentlichten Konzeptunterlagen vollständig ausgewertet sind.';
  }
})();
