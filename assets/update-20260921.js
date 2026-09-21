(function applyFibUpdate20260921(){
  const list=document.querySelector('#contribution-list');
  if(list && !document.getElementById('R073')){
    const a=document.createElement('article');
    a.className='card contribution';
    a.id='R073';
    a.dataset.place='Feldkirchen';
    a.innerHTML=`
<div class="meta-row"><span class="date">21. September 2026</span><span class="place">Feldkirchen</span><span class="category">Ortsentwicklung &amp; Bauen</span></div>
<h3>Betreutes Wohnen: Gemeinderat unterstützt Konzept an der Hohenlindner Straße</h3>
<p class="subtitle">Ein Pressebericht dokumentiert erstmals das Beratungsergebnis: Rund 140 Seniorenwohnungen plus Personalwohnen sollen über den „Bauturbo“ und eine Bebauungsplanänderung ermöglicht werden.</p>
<div class="body"><p>Für das Grundstück Hohenlindner Straße 17 liegt ein Konzept für betreutes Wohnen mit rund 140 Wohnungen für Seniorinnen und Senioren sowie ergänzendem Personalwohnen vor. Die Beschlussvorlage beschreibt zwei Baukörper, eine gegenüber dem Bebauungsplan von 1973 erhöhte bauliche Dichte und eine Tiefgarage. Zugleich sollen der prägende randliche Baumbestand und insbesondere eine schützenswerte Buche erhalten werden.</p><p>Der Münchner Merkur berichtet am 21. September über das Ergebnis der Gemeinderatssitzung vom 17. September: Der Gemeinderat habe das vorgestellte Konzept mit einer Gegenstimme unterstützt. Vorgesehen seien unter anderem „Betreutes Wohnen Plus“, Personalwohnungen, Dachbegrünung und Photovoltaik. Eine veröffentlichte Niederschrift der Sitzung liegt derzeit noch nicht vor; das Abstimmungsergebnis ist daher als presseöffentlich dokumentierter, noch nicht amtlich protokollierter Stand gekennzeichnet.</p></div>
<h4>Quellen</h4><ul class="sources"><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=75163&amp;type=do" target="_blank" rel="noopener noreferrer">RIS Feldkirchen – Beschlussvorlage 5333/2026</a></li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1029" target="_blank" rel="noopener noreferrer">RIS Feldkirchen – Gemeinderat 17.09.2026</a></li><li><a href="https://www.merkur.de/lokales/muenchen-lk/feldkirchen-ort28673/140-seniorenwohnungen-in-feldkirchen-gemeinde-greift-zum-bauturbo-94501119.html" target="_blank" rel="noopener noreferrer">Münchner Merkur – 140 Seniorenwohnungen in Feldkirchen</a> · 21. September 2026</li></ul>
<a class="minor-link" href="#S022">Zur zugehörigen Sitzung</a>
<div class="topic-link"><a href="#T009" rel="noopener" target="_blank">Mehr zum Thema: Wohnungsbau und kommunale Planung</a></div>`;
    a.dataset.search=(a.textContent||'').toLowerCase();
    list.prepend(a);
  }

  const session=document.getElementById('S022');
  if(session){
    [...session.querySelectorAll('.agenda-item')].forEach(li=>{
      if(li.querySelector('.proposal')?.textContent.trim()==='5333/2026'){
        const d=li.querySelector('.decision');
        if(d)d.textContent='Nach Pressebericht mit einer Gegenstimme unterstützt; amtliche Niederschrift noch nicht veröffentlicht';
      }
    });
    session.dataset.search=(session.textContent||'').toLowerCase();
  }

  const topic=document.getElementById('T009');
  if(topic){
    const date=topic.querySelector('.date');
    if(date)date.textContent='Aktualisiert: 21. September 2026';
    const body=topic.querySelector('.body');
    if(body)body.innerHTML='<p>Wohnungsbau wird in Feldkirchen sowohl über größere Bauleitplanungen als auch über einzelne Genehmigungsverfahren gesteuert. Beim Vorhaben mit 166 Eigentumswohnungen zwischen Hohenlindner Straße und Jahnstraße stehen weiterhin Infrastrukturfolgen und die erneute Beratung am 29. September im Mittelpunkt.</p><p>Neu hinzugekommen ist das Vorhaben für betreutes Wohnen an der Hohenlindner Straße 17. Geplant sind rund 140 Seniorenwohnungen sowie ergänzendes Personalwohnen. Die Beschlussvorlage verbindet eine stärkere bauliche Ausnutzung mit Innenentwicklung, Tiefgarage und dem Erhalt des prägenden Baumbestands. Nach einem Pressebericht vom 21. September unterstützte der Gemeinderat das Konzept in seiner Sitzung vom 17. September mit einer Gegenstimme; eine amtlich veröffentlichte Niederschrift liegt dazu noch nicht vor.</p>';
    topic.dataset.search=(topic.textContent||'').toLowerCase();
  }
})();