(function applyFibUpdate20260910(){
  const contributionList=document.querySelector('#contribution-list');
  const sessionList=document.querySelector('#session-list');

  // R071 bleibt nach Quellenkorrektur unveröffentlicht.
  document.getElementById('R071')?.remove();

  const addContribution=(id,html,beforeId)=>{
    if(!contributionList || document.getElementById(id)) return;
    const article=document.createElement('article');
    article.className='card contribution';
    article.id=id;
    article.innerHTML=html;
    const before=document.getElementById(beforeId);
    if(before && before.parentElement===contributionList) contributionList.insertBefore(article,before);
    else contributionList.prepend(article);
  };

  addContribution('R073',`
    <div class="meta-row"><span class="date">8. September 2026</span><span class="place">Feldkirchen</span><span class="category">Klima &amp; Energie</span></div>
    <h3>Konkrete Hitzeschutzmaßnahmen kommen in den Gemeinderat</h3>
    <p class="subtitle">Am 17. September soll über Trinkwasserbrunnen und eine Sprühnebelanlage entschieden werden.</p>
    <div class="body"><p>Für die Gemeinderatssitzung am 17. September 2026 ist ein eigener Tagesordnungspunkt zu konkreten Hitzeschutzmaßnahmen angesetzt. Laut öffentlicher Tagesordnung geht es um die Installation von Trinkwasserbrunnen und die Beschaffung einer Sprühnebelanlage. Eine Entscheidung liegt vor der Sitzung noch nicht vor.</p></div>
    <h4>Quellen</h4><ul class="sources"><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1029" rel="noopener noreferrer" target="_blank">RIS Feldkirchen – Gemeinderat 17.09.2026</a> · öffentliche Tagesordnung</li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75232&amp;type=do" rel="noopener noreferrer" target="_blank">RIS Feldkirchen – Beschlussvorlage 5342/2026</a></li></ul>
    <details><summary>Was bisher passiert ist (2)</summary><ul><li>15. Januar 2026 · Feldkirchen beschließt Klimaanpassungskonzept</li><li>11. Juni 2026 · Gemeinderat beschließt Hitzeaktionsplan</li></ul></details>
    <section class="assessment"><h4>Unsere Einordnung</h4><p>Mit Klimaanpassungskonzept und Hitzeaktionsplan hat Feldkirchen bereits Grundlagen beschlossen. Trinkwasserbrunnen und eine Sprühnebelanlage wären nun sichtbare Umsetzungsschritte. Bei der Entscheidung sollte neben der Anschaffung auch betrachtet werden, wo die Maßnahmen den größten Nutzen bringen, welche laufenden Kosten und Wartungsaufgaben entstehen und wie hoch der Wasserverbrauch ist.</p></section>
    <a class="minor-link" href="#S023">Zur zugehörigen Sitzung</a><div class="topic-link"><a href="#T005" rel="noopener" target="_blank">Mehr zum Thema: Klimaanpassung und Hitzeschutz</a></div>`, 'R072');

  addContribution('R074',`
    <div class="meta-row"><span class="date">8. September 2026</span><span class="place">Feldkirchen</span><span class="category">Ortsentwicklung &amp; Bauen</span></div>
    <h3>Betreutes Wohnen an der Hohenlindner Straße geplant</h3>
    <p class="subtitle">Der Gemeinderat berät am 17. September eine formlose Bauvoranfrage für Hohenlindner Straße 17.</p>
    <div class="body"><p>Für das Grundstück FlNr. 556 an der Hohenlindner Straße 17 liegt eine formlose Bauvoranfrage zur Errichtung von betreutem Wohnen vor. Der Vorgang steht am 17. September 2026 auf der öffentlichen Tagesordnung des Gemeinderats. Über Umfang, konkrete Ausgestaltung und das Ergebnis der Beratung wird erst nach belastbarer öffentlicher Dokumentation berichtet.</p></div>
    <h4>Quellen</h4><ul class="sources"><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1029" rel="noopener noreferrer" target="_blank">RIS Feldkirchen – Gemeinderat 17.09.2026</a> · öffentliche Tagesordnung</li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75163&amp;type=do" rel="noopener noreferrer" target="_blank">RIS Feldkirchen – Beschlussvorlage 5333/2026</a></li></ul>
    <section class="assessment"><h4>Unsere Einordnung</h4><p>Betreutes Wohnen kann dazu beitragen, dass ältere Menschen möglichst lange selbstbestimmt im Ort leben können. Für die kommunale Bewertung sind neben der baulichen Einfügung insbesondere Barrierefreiheit, Erreichbarkeit, Nähe zu Versorgung und Dienstleistungen sowie sichere Fußwege wichtig. Welche dieser Anforderungen das konkrete Vorhaben erfüllt, lässt sich aus der bislang öffentlich ausgewerteten Quellenlage noch nicht beurteilen.</p></section>
    <a class="minor-link" href="#S023">Zur zugehörigen Sitzung</a><div class="topic-link"><a href="#T009" rel="noopener" target="_blank">Mehr zum Thema: Wohnungsbau und kommunale Planung</a></div>`, 'R073');

  const t004=document.getElementById('T004');
  if(t004){
    const date=t004.querySelector('.meta-row .date'); if(date) date.textContent='Aktualisiert: 8. September 2026';
    const body=t004.querySelector(':scope > .body'); if(body && !/17\. September 2026/.test(body.textContent||'')) body.insertAdjacentHTML('beforeend','<p>Für den 17. September 2026 ist eine erneute Behandlung im Gemeinderat angesetzt. Vorgestellt werden sollen die Bau- und Planungskosten sowie mögliche Einsparpotenziale; anschließend soll über das weitere Vorgehen entschieden werden.</p>');
    const details=[...t004.querySelectorAll(':scope > details')]; const q=details.find(d=>/Offene Fragen/i.test(d.querySelector('summary')?.textContent||'')); if(q && !/Bau- und Planungskosten/.test(q.textContent||'')){q.querySelector('ul')?.insertAdjacentHTML('beforeend','<li>Welche Bau- und Planungskosten werden dem Gemeinderat vorgestellt und welche Einsparpotenziale sind realistisch?</li>'); const n=q.querySelectorAll('li').length; q.querySelector('summary').textContent=`Offene Fragen (${n})`;}
    const s=details.find(d=>/Quellen/i.test(d.querySelector('summary')?.textContent||'')); if(s){const ul=s.querySelector('ul'); if(ul && !ul.querySelector('a[href*="75255"]')) ul.insertAdjacentHTML('beforeend','<li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75255&amp;type=do" rel="noopener noreferrer" target="_blank"><span class="source-date">8. September 2026</span> · RIS Feldkirchen – Beschlussvorlage 5353/2026</a></li>'); if(ul) s.querySelector('summary').textContent=`Quellen (${ul.children.length})`;}
  }

  const t005=document.getElementById('T005');
  if(t005){
    const date=t005.querySelector('.meta-row .date'); if(date) date.textContent='Aktualisiert: 8. September 2026';
    const body=t005.querySelector(':scope > .body'); if(body && !/Sprühnebelanlage/.test(body.textContent||'')) body.insertAdjacentHTML('beforeend','<p>Am 17. September 2026 soll der Gemeinderat über erste konkrete Hitzeschutzmaßnahmen entscheiden: Die öffentliche Tagesordnung nennt die Installation von Trinkwasserbrunnen und die Beschaffung einer Sprühnebelanlage. Damit geht die Umsetzung des Hitzeaktionsplans in eine konkrete Maßnahmenphase über.</p>');
  }

  const t009=document.getElementById('T009');
  if(t009){
    const date=t009.querySelector('.meta-row .date'); if(date) date.textContent='Aktualisiert: 8. September 2026';
    const body=t009.querySelector(':scope > .body'); if(body && !/betreutes Wohnen an der Hohenlindner Straße 17/i.test(body.textContent||'')) body.insertAdjacentHTML('beforeend','<p>Neu hinzu kommt eine Bauvoranfrage für betreutes Wohnen an der Hohenlindner Straße 17, die am 17. September 2026 im Gemeinderat beraten werden soll. Damit erweitert sich das Spektrum der Wohnungsbauvorhaben um eine Wohnform mit besonderem Bezug zu selbstständigem Wohnen im Alter und wohnortnaher Versorgung.</p>');
  }

  if(sessionList && !document.getElementById('S023')){
    const session=document.createElement('article');
    session.className='card session-card'; session.id='S023';
    session.innerHTML=`<div class="meta-row"><span class="date">17. September 2026</span><span class="place">Gemeinderat</span></div><h3>17. September 2026 – Gemeinderat</h3><h4>Wichtige TOPs</h4><ol class="agenda">
      <li class="agenda-item"><div><span class="agenda-no">TOP 2</span> <span class="proposal">5353/2026</span></div><strong>Kinderhaus St. Jakob – Bau- und Planungskosten, mögliche Einsparpotenziale und weiteres Vorgehen</strong><div class="docs"><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75255&amp;type=do" target="_blank" rel="noopener noreferrer">Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
      <li class="agenda-item"><div><span class="agenda-no">TOP 4</span> <span class="proposal">5333/2026</span></div><strong>Formlose Bauvoranfrage für betreutes Wohnen, Hohenlindner Straße 17</strong><div class="docs"><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75163&amp;type=do" target="_blank" rel="noopener noreferrer">Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
      <li class="agenda-item"><div><span class="agenda-no">TOP 6</span> <span class="proposal">5342/2026</span></div><strong>Hitzeschutzmaßnahmen – Trinkwasserbrunnen und Sprühnebelanlage</strong><div class="docs"><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75232&amp;type=do" target="_blank" rel="noopener noreferrer">Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
      <li class="agenda-item"><div><span class="agenda-no">TOP 7</span> <span class="proposal">5328/2026</span></div><strong>Dauernutzung des Bürgercafés durch den Familienstützpunkt</strong><div class="docs"><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75043&amp;type=do" target="_blank" rel="noopener noreferrer">Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
      <li class="agenda-item"><div><span class="agenda-no">TOP 8</span> <span class="proposal">5356/2026</span></div><strong>Antrag der Fraktion Bündnis 90/Die Grünen zur Bürgerversammlung 2026</strong><div class="docs"><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75294&amp;type=do" target="_blank" rel="noopener noreferrer">Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li></ol><p class="other-items">Die vollständige öffentliche Tagesordnung mit zehn TOPs wurde geprüft. Nicht einzeln hervorgehoben sind Niederschriftsgenehmigung, Straßenbenennung Green Village, ein Mehrfamilienhaus in der Oberndorfer Straße sowie Bekanntgaben/Berichte und Anfragen.</p><div class="session-footer"><a class="button-link" href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1029" target="_blank" rel="noopener noreferrer">Alle Unterlagen zur Sitzung</a><span class="minutes">Sitzung am 17. September 2026</span></div>`;
    sessionList.prepend(session);
  }

  // Themen nach Aktualisierungsdatum neu sortieren.
  const topics=[...document.querySelectorAll('.topic-card')];
  if(topics.length>1){const parent=topics[0].parentElement; const months={januar:0,februar:1,märz:2,maerz:2,april:3,mai:4,juni:5,juli:6,august:7,september:8,oktober:9,november:10,dezember:11}; const d=c=>{const m=(c.querySelector('.date')?.textContent||'').toLowerCase().match(/(\d{1,2})\.\s*([a-zäöüß]+)\s+(\d{4})/i); return m&&months[m[2]]!==undefined?new Date(+m[3],months[m[2]],+m[1]).getTime():0;}; topics.map((card,index)=>({card,index,date:d(card)})).sort((a,b)=>(b.date-a.date)||(a.index-b.index)).forEach(x=>parent?.appendChild(x.card));}

  const note=document.querySelector('.demo-note'); if(note) note.textContent='Stand 10. September 2026 · Öffentlicher Demonstrator';
})();
