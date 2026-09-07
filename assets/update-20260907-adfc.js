(function applyFibAdfcCorrection20260907(){
  const contributionList=document.querySelector('#contribution-list');

  if(contributionList && !document.querySelector('#R072')){
    const article=document.createElement('article');
    article.className='card contribution';
    article.id='R072';
    article.dataset.place='Feldkirchen';
    article.dataset.search='1. september 2026 feldkirchen mobilität verkehr adfc fahrradklima test 2026 fahrradfreundlichkeit umfrage beteiligung kinder jugendliche radverkehr sicherheit komfort infrastruktur';
    article.innerHTML=`
      <div class="meta-row"><span class="date">1. September 2026</span><span class="place">Feldkirchen</span><span class="category">Mobilität &amp; Verkehr</span></div>
      <h3>Wie fahrradfreundlich ist Feldkirchen? ADFC startet Fahrradklima-Test 2026</h3>
      <p class="subtitle">Bis Ende November können Bürgerinnen und Bürger ihre Erfahrungen mit dem Radverkehr bewerten; erstmals gibt es auch eine eigene Befragung für Kinder und Jugendliche.</p>
      <div class="body"><p>Seit 1. September läuft der ADFC-Fahrradklima-Test 2026. Bis 30. November können Radfahrende bewerten, wie fahrradfreundlich ihr Ort ist – etwa mit Blick auf Sicherheit, Komfort, Infrastruktur und die Förderung des Radverkehrs. Die Ergebnisse sollen Kommunen Hinweise auf Stärken und Verbesserungsbedarf geben. Neu ist 2026 eine eigene Befragung für Kinder und Jugendliche.</p><p>Feldkirchen war bereits bei früheren Fahrradklima-Tests vertreten. Die Gemeinde veröffentlicht die örtlichen Ergebnisse auf ihrer Radverkehrsseite; 2024 nahmen 56 Personen aus Feldkirchen teil. Damit bietet die neue Befragung auch die Möglichkeit, Entwicklungen über mehrere Erhebungen hinweg zu vergleichen.</p></div>
      <h4>Quellen</h4>
      <ul class="sources"><li><a href="https://fkt.adfc.de/" rel="noopener noreferrer" target="_blank">ADFC – Fahrradklima-Test 2026</a> · Start 1. September 2026</li><li><a href="https://feldkirchen.de/umwelt/mobilitaet-verkehrswende/rund-ums-rad" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Rund ums Rad / Fahrradklima-Tests</a></li></ul>
      <section class="assessment"><h4>Unsere Einordnung</h4><p>Der Fahrradklima-Test bietet Feldkirchen die Chance, die Erfahrungen der Menschen systematisch mit den bereits laufenden Maßnahmen des Radverkehrskonzepts abzugleichen. Wichtig ist deshalb nicht nur eine möglichst hohe Beteiligung. Nach Veröffentlichung der Ergebnisse sollte nachvollziehbar dargestellt werden, wo sich Feldkirchen verbessert hat, wo Probleme fortbestehen und welche konkreten nächsten Schritte daraus folgen. Die eigene Befragung für Kinder und Jugendliche kann zusätzliche Hinweise auf Schulwege und subjektive Sicherheit liefern.</p></section>
      <div class="topic-link"><a href="#T003" rel="noopener" target="_blank">Mehr zum Thema: Radverkehr in Feldkirchen und regionale Verbindungen</a></div>`;

    const r069=document.querySelector('#R069');
    if(r069) r069.insertAdjacentElement('beforebegin',article); else contributionList.prepend(article);
  }

  const topic=document.querySelector('#T003');
  if(topic){
    const date=topic.querySelector('.meta-row .date');
    if(date) date.textContent='Aktualisiert: 7. September 2026';
    const heading=topic.querySelector(':scope > h3');
    if(heading) heading.textContent='Radverkehr in Feldkirchen und regionale Verbindungen';
    const body=topic.querySelector(':scope > .body');
    if(body) body.innerHTML='<p>Der Radverkehr in Feldkirchen wird durch innerörtliche Maßnahmen, regionale Verbindungen und die Erfahrungen der Radfahrenden geprägt. Im September 2025 machte eine Kidical Mass von Aschheim über Feldkirchen zum Heimstettener See sichere Verbindungen auf der B471 und kindgerechte Verkehrsbedingungen zum Thema. Im Oktober beschloss Feldkirchen die Fortführung des Fuß- und Radwegs nördlich der Münchner Straße Richtung A94-Querung; aus der Bürgerversammlung kamen weitere Forderungen zu Radfahr- und Schutzstreifen sowie Schulwegen.</p><p>2026 folgten konkrete Infrastrukturmaßnahmen. Ende Februar begann die Bauphase für die neue Fuß- und Radwegbrücke über die A94, die zugleich einen rund fünf Meter breiten Grünstreifen als Habitatverbindung erhalten soll. Im Juli meldete die Gemeinde drei neue überdachte Fahrrad-Abstellstationen als Umsetzung des kommunalen Radverkehrskonzepts. Seit 1. September läuft außerdem der ADFC-Fahrradklima-Test 2026. Bis Ende November können Radfahrende die Fahrradfreundlichkeit ihres Ortes bewerten; erstmals gibt es auch eine eigene Befragung für Kinder und Jugendliche. Damit verbindet das Thema gebaute Infrastruktur, regionale Netze, Verkehrssicherheit und die Frage, wie die Erfahrungen der Bevölkerung systematisch in die weitere Radverkehrsentwicklung einfließen.</p>';
    const assessment=topic.querySelector(':scope > .assessment');
    if(assessment) assessment.innerHTML='<h4>Unsere Einordnung</h4><p>Eine fahrradfreundliche Kommune entsteht nicht allein durch einzelne neue Anlagen. Entscheidend ist, ob Wege im Alltag durchgängig sicher, verständlich und komfortabel funktionieren – innerorts ebenso wie über Gemeindegrenzen hinweg. Der Fahrradklima-Test kann dafür eine wichtige Rückmeldung liefern, weil er die Erfahrungen der Nutzerinnen und Nutzer systematisch sichtbar macht.</p><p>Für Feldkirchen sollte die Befragung deshalb mit dem Radverkehrskonzept und den laufenden Maßnahmen zusammengeführt werden: Wo bestätigen die Ergebnisse bisherige Prioritäten, wo zeigen sich neue Probleme und welche Verbesserungen lassen sich konkret ableiten? Besonders wertvoll ist die eigene Befragung für Kinder und Jugendliche, weil sichere Schulwege und subjektive Sicherheit zentrale Voraussetzungen dafür sind, dass junge Menschen selbstständig mit dem Rad unterwegs sein können.</p>';

    const details=[...topic.querySelectorAll(':scope > details')];
    const questions=details.find(d=>/Offene Fragen/i.test(d.querySelector('summary')?.textContent||''));
    if(questions){
      questions.innerHTML='<summary>Offene Fragen (5)</summary><ul><li>Wie wird die Radverkehrsführung zwischen Münchner Straße, Olympiastraße und der neuen A94-Brücke im Endzustand gestaltet?</li><li>Welche Ergebnisse bringt die weitere Prüfung von Radfahr- und Schutzstreifen an B471 und M18?</li><li>Welche weiteren Maßnahmen aus dem Radverkehrskonzept folgen nach den neuen Abstellstationen?</li><li>Wie schneidet Feldkirchen beim Fahrradklima-Test 2026 im Vergleich zu früheren Erhebungen ab, insbesondere bei Sicherheit, Infrastruktur und Fahrradförderung?</li><li>Welche Hinweise ergeben sich aus der neuen Befragung für Kinder und Jugendliche für Schulwege und subjektive Sicherheit?</li></ul>';
    }
    const sources=details.find(d=>/Quellen/i.test(d.querySelector('summary')?.textContent||''));
    if(sources){
      const ul=sources.querySelector('ul');
      if(ul && !ul.querySelector('a[href="https://fkt.adfc.de/"]')) ul.insertAdjacentHTML('beforeend','<li><a href="https://fkt.adfc.de/" rel="noopener noreferrer" target="_blank"><span class="source-date">1. September 2026</span> · ADFC – Fahrradklima-Test 2026</a></li><li><a href="https://feldkirchen.de/umwelt/mobilitaet-verkehrswende/rund-ums-rad" rel="noopener noreferrer" target="_blank"><span class="source-date">7. September 2026</span> · Gemeinde Feldkirchen – Rund ums Rad / Fahrradklima-Tests</a></li>');
      if(ul) sources.querySelector('summary').textContent='Quellen ('+ul.children.length+')';
    }
    topic.dataset.search=(topic.textContent||'').toLowerCase();
  }

  document.querySelectorAll('a[href="#T003"]').forEach(link=>{
    link.textContent='Mehr zum Thema: Radverkehr in Feldkirchen und regionale Verbindungen';
  });

  const topics=[...document.querySelectorAll('.topic-card')];
  if(topics.length>1){
    const parent=topics[0].parentElement;
    const months={januar:0,februar:1,märz:2,maerz:2,april:3,mai:4,juni:5,juli:6,august:7,september:8,oktober:9,november:10,dezember:11};
    const getDate=card=>{
      const text=(card.querySelector('.date')?.textContent||'').toLowerCase();
      const m=text.match(/(\d{1,2})\.\s*([a-zäöüß]+)\s+(\d{4})/i);
      if(!m) return 0;
      const month=months[m[2].toLowerCase()];
      return month===undefined?0:new Date(Number(m[3]),month,Number(m[1])).getTime();
    };
    topics.map((card,index)=>({card,index,date:getDate(card)})).sort((a,b)=>(b.date-a.date)||(a.index-b.index)).forEach(({card})=>parent?.appendChild(card));
  }
})();
