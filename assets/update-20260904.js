(function applyFibUpdate20260904(){
  const contributionList=document.querySelector('#contribution-list');
  const sessionList=document.querySelector('#session-list');

  // ID-Bereinigung: der am 03.09. ergänzte Niedrigwasser-Beitrag kollidierte mit dem kanonischen Recherche-ID R060.
  const lowWater=document.querySelector('#R060');
  if(lowWater && /Auffällig niedriger Wasserstand am Heimstettener See/i.test(lowWater.querySelector('h3')?.textContent||'')){
    lowWater.id='R071';
  }

  // Doppelte SB-Bäckerei-Karte aus einem Zwischenupdate entfernen; kanonisch bleibt R068.
  const duplicateBakery=document.querySelector('#R061');
  if(duplicateBakery && /SB-Bäckerei|Selbstbedienungsbäckerei/i.test(duplicateBakery.textContent||'')){
    duplicateBakery.remove();
  }

  // R070: Bundesweiter Warntag / neue digitale Sirenen in Feldkirchen.
  if(contributionList && !document.querySelector('#R070')){
    const article=document.createElement('article');
    article.className='card contribution';
    article.id='R070';
    article.dataset.place='Feldkirchen';
    article.dataset.search='2. september 2026 feldkirchen sicherheit bevölkerungsschutz warntag sirenen warnsysteme cell broadcast nina katwarn biwapp whatsapp vier neue digitale sirenen zwei möglicherweise noch nicht stromnetz';
    article.innerHTML=`
      <div class="meta-row"><span class="date">2. September 2026</span><span class="place">Feldkirchen</span><span class="category">Sicherheit &amp; Bevölkerungsschutz</span></div>
      <h3>Warntag testet neue Feldkirchner Sirenen</h3>
      <p class="subtitle">Am 10. September werden die Warnsysteme erprobt; zwei der vier neuen Sirenen könnten noch nicht am Stromnetz angeschlossen sein.</p>
      <div class="body"><p>Beim bundesweiten Warntag am 10. September 2026 werden ab 11 Uhr auch die Warnsysteme im Landkreis München getestet; die Entwarnung ist für 11.45 Uhr vorgesehen. Neben Cell Broadcast und Warn-Apps sollen in Feldkirchen erstmals die vier neuen digitalen Sirenen offiziell erprobt werden. Sie stehen an Feuerwehr, Schule, Bauhof und im Gewerbegebiet Süd.</p><p>Die Gemeinde weist allerdings darauf hin, dass zum Testzeitpunkt möglicherweise zwei der vier Sirenen noch nicht an das Stromnetz angeschlossen sind und deshalb nicht auslösen werden. Der Warntag wird damit für Feldkirchen zugleich zu einem praktischen Test, wie vollständig die neue lokale Warninfrastruktur bereits funktioniert.</p></div>
      <h4>Quellen</h4>
      <ul class="sources"><li><a href="https://www.landkreis-muenchen.de/artikel/bundesweiter-warntag-am-10-september-2026/" rel="noopener noreferrer" target="_blank">Landkreis München – Bundesweiter Warntag am 10. September 2026</a> · 2. September 2026</li><li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/neue-sirenen-fuer-feldkirchen" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Neue Sirenen für Feldkirchen</a> · 12. August 2026</li></ul>
      <section class="assessment"><h4>Unsere Einordnung</h4><p>Warnsysteme sind dann belastbar, wenn mehrere Kanäle parallel funktionieren und technische Lücken schnell geschlossen werden. Der Warntag sollte deshalb nicht nur als Probealarm verstanden werden: Für Feldkirchen ist interessant, welche der vier neuen Sirenen tatsächlich auslösen und wann alle Standorte dauerhaft einsatzbereit sind. Gerade bei Stromausfällen und anderen Schadenslagen ist Redundanz entscheidend.</p></section>
      <div class="topic-link"><a href="#T014" rel="noopener" target="_blank">Mehr zum Thema: Katastrophenschutz und kommunale Vorsorge</a></div>`;
    contributionList.prepend(article);
  }

  // T014 vertiefen.
  const t014=document.querySelector('#T014');
  if(t014){
    const date=t014.querySelector('.meta-row .date');
    if(date) date.textContent='Aktualisiert: 2. September 2026';
    const body=t014.querySelector(':scope > .body');
    if(body) body.innerHTML='<p>Im Jahr 2026 wurden mehrere Bausteine kommunaler Krisenvorsorge sichtbar. Im Februar ergänzte der Landkreis seine Warnkanäle um den WhatsApp-Kanal „Sicher im Landkreis München“. Im August bat die Gemeinde Menschen mit schwerer Pflegebedürftigkeit, Einschränkungen oder lebenswichtigen strombetriebenen medizinischen Hilfsmitteln, ihren besonderen Unterstützungsbedarf frühzeitig mitzuteilen.</p><p>Neu hinzu kommt die technische Warninfrastruktur: Feldkirchen hat vier digitale Sirenen an Feuerwehr, Schule, Bauhof und im Gewerbegebiet Süd. Beim bundesweiten Warntag am 10. September sollen sie erstmals offiziell getestet werden. Nach Angaben der Gemeinde könnten zwei der vier Anlagen zu diesem Zeitpunkt allerdings noch nicht an das Stromnetz angeschlossen sein. Damit verbindet sich die Frage nach erreichbarer Information nun auch mit der praktischen Funktionsfähigkeit lokaler Warnmittel.</p>';
    const assessment=t014.querySelector(':scope > .assessment');
    if(assessment) assessment.innerHTML='<h4>Unsere Einordnung</h4><p>Krisenvorsorge braucht mehrere voneinander unabhängige Warnwege. Sirenen, Cell Broadcast, Warn-Apps und digitale Informationskanäle ergänzen sich, weil kein einzelner Kanal alle Menschen in jeder Lage erreicht. Für Feldkirchen ist deshalb wichtig, technische Lücken bei den neuen Sirenen zügig zu schließen und nach dem Warntag transparent auszuwerten, welche Anlagen funktioniert haben.</p><p>Ebenso wichtig bleibt die Vorsorge für Menschen, die bei Stromausfällen oder anderen Schadenslagen besondere Unterstützung benötigen. Gute Resilienz entsteht aus funktionierender Technik, klaren Zuständigkeiten, erreichbarer Information und vorbereiteten Hilfestrukturen.</p>';
    const details=[...t014.querySelectorAll(':scope > details')];
    let questions=details.find(d=>/Offene Fragen|Was noch offen ist/i.test(d.querySelector('summary')?.textContent||''));
    if(!questions){ questions=document.createElement('details'); t014.appendChild(questions); }
    questions.innerHTML='<summary>Offene Fragen (4)</summary><ul><li>Welche der vier neuen Sirenen lösen beim Warntag am 10. September tatsächlich aus?</li><li>Wann sind alle Sirenenstandorte dauerhaft an das Stromnetz angeschlossen und vollständig einsatzbereit?</li><li>Wie werden Sirenen, Cell Broadcast, Warn-Apps und der WhatsApp-Kanal so kombiniert, dass möglichst alle Bevölkerungsgruppen erreicht werden?</li><li>Wie werden gemeldete besondere Unterstützungsbedarfe organisatorisch in kommunale Notfallpläne eingebunden?</li></ul>';
    let sources=details.find(d=>/Quellen/i.test(d.querySelector('summary')?.textContent||''));
    if(sources){
      const ul=sources.querySelector('ul');
      if(ul && !ul.querySelector('a[href*="warntag-am-10-september-2026"]')) ul.insertAdjacentHTML('beforeend','<li><a href="https://www.landkreis-muenchen.de/artikel/bundesweiter-warntag-am-10-september-2026/" rel="noopener noreferrer" target="_blank"><span class="source-date">2. September 2026</span> · Landkreis München – Bundesweiter Warntag am 10. September 2026</a></li><li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/neue-sirenen-fuer-feldkirchen" rel="noopener noreferrer" target="_blank"><span class="source-date">12. August 2026</span> · Gemeinde Feldkirchen – Neue Sirenen für Feldkirchen</a></li>');
      if(ul) sources.querySelector('summary').textContent='Quellen ('+ul.children.length+')';
    }
    t014.dataset.search=(t014.textContent||'').toLowerCase();
  }

  // S022: Ferienausschuss vom 03.09.; Sitzung belegt, Tagesordnung im Lauf nicht zuverlässig abrufbar.
  if(sessionList && !document.querySelector('#S022')){
    const session=document.createElement('article');
    session.className='card session-card';
    session.id='S022';
    session.dataset.search='3. september 2026 ferienausschuss feldkirchen sitzung öffentliche tagesordnung nicht zuverlässig abrufbar ratsinformationssystem';
    session.innerHTML=`
      <div class="meta-row"><span class="date">3. September 2026</span><span class="place">Ferienausschuss</span></div>
      <h3>3. September 2026 – Ferienausschuss</h3>
      <h4>Öffentliche Tagesordnung</h4>
      <p class="other-items">Zu dieser Sitzung konnten wir die vollständige öffentliche Tagesordnung im Update-Lauf am 4. September nicht zuverlässig abrufen. Deshalb zeigen wir keine einzelnen Tagesordnungspunkte.</p>
      <div class="session-footer"><a class="button-link" href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0046.asp?__canz=3&amp;__cfid=131072&amp;__cselect=147456&amp;smcmode=32832" rel="noopener noreferrer" target="_blank">Termin im Ratsinformationssystem</a><span class="minutes">Niederschrift noch nicht öffentlich dokumentiert</span></div>`;
    sessionList.prepend(session);
  }

  const note=document.querySelector('.demo-note');
  if(note) note.textContent='Stand 4. September 2026 · Öffentlicher Demonstrator';

  // Nach den inhaltlichen Updates erneut nach letztem Änderungsdatum sortieren.
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
