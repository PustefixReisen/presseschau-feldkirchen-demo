(function applyFibUpdate20260905(){
  const r070=document.querySelector('#R070');
  if(r070){
    const sources=r070.querySelector(':scope > .sources');
    if(sources && !sources.querySelector('a[href*="bundesweiter-warntag-2026"]')){
      sources.insertAdjacentHTML('beforeend','<li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/bundesweiter-warntag-2026" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Bundesweiter Warntag 2026</a> · 4. September 2026</li>');
    }
    r070.dataset.search=(r070.textContent||'').toLowerCase();
  }

  const t014=document.querySelector('#T014');
  if(t014){
    const details=[...t014.querySelectorAll(':scope > details')];
    const sourceDetails=details.find(d=>/Quellen/i.test(d.querySelector('summary')?.textContent||''));
    if(sourceDetails){
      const ul=sourceDetails.querySelector('ul');
      if(ul && !ul.querySelector('a[href*="bundesweiter-warntag-2026"]')){
        ul.insertAdjacentHTML('beforeend','<li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/bundesweiter-warntag-2026" rel="noopener noreferrer" target="_blank"><span class="source-date">4. September 2026</span> · Gemeinde Feldkirchen – Bundesweiter Warntag 2026</a></li>');
        sourceDetails.querySelector('summary').textContent='Quellen ('+ul.children.length+')';
      }
    }
    t014.dataset.search=(t014.textContent||'').toLowerCase();
  }

  const note=document.querySelector('.demo-note');
  if(note) note.textContent='Stand 5. September 2026 · Öffentlicher Demonstrator';
})();
