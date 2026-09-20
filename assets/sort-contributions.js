(function sortFibContributions(){
  const list=document.querySelector('#contribution-list');
  if(!list)return;

  const monthIndex={
    januar:0,februar:1,märz:2,maerz:2,april:3,mai:4,juni:5,
    juli:6,august:7,september:8,oktober:9,november:10,dezember:11
  };

  function parseGermanDate(card){
    const raw=(card.querySelector('.date')?.textContent||'').trim().toLowerCase();
    const match=raw.match(/(\d{1,2})\.\s*([a-zäöüß]+)\s+(\d{4})/i);
    if(!match)return 0;
    const day=Number(match[1]);
    const month=monthIndex[match[2]];
    const year=Number(match[3]);
    if(month===undefined)return 0;
    return Date.UTC(year,month,day);
  }

  // Redaktionelle Relevanz dient ausschließlich als zweiter Sortierschlüssel
  // innerhalb desselben Datums. Sie bewertet keine politische Position.
  function relevance(card){
    const explicit=Number(card.dataset.relevance);
    if(Number.isFinite(explicit) && explicit>0)return explicit;

    let score=0;
    const place=(card.querySelector('.place')?.textContent||'').toLowerCase();
    const category=(card.querySelector('.category')?.textContent||'').toLowerCase();

    // Unmittelbarer Ortsbezug.
    if(place.includes('feldkirchen'))score+=2;

    // Dauerhafter Sachzusammenhang bzw. konkreter kommunaler Vorgang.
    if(card.querySelector('.topic-link'))score+=2;
    if(card.querySelector('a.minor-link[href^="#S"]'))score+=1;

    // Reine kurzfristige Servicehinweise werden bei gleichem Datum nach
    // dauerhafteren Sachentwicklungen einsortiert.
    if(category.includes('service') || category.includes('alltag'))score-=2;

    return score;
  }

  const cards=[...list.querySelectorAll(':scope > .contribution')];
  cards.sort((a,b)=>{
    const byDate=parseGermanDate(b)-parseGermanDate(a);
    if(byDate!==0)return byDate;

    const byRelevance=relevance(b)-relevance(a);
    if(byRelevance!==0)return byRelevance;

    // Deterministischer letzter Schlüssel; keine inhaltliche Wertung.
    return (a.id||'').localeCompare(b.id||'','de',{numeric:true});
  });

  cards.forEach(card=>list.appendChild(card));
})();
