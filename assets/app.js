(async function loadFibScripts(){
  const initialDemoNoteText=document.querySelector('.demo-note')?.textContent||'';
  const featureStyle=document.createElement('link');
  featureStyle.rel='stylesheet';
  featureStyle.href='assets/share-print-subscribe.css?v=20260903c';
  document.head.appendChild(featureStyle);

  function scrollToCurrentHash(){
    if(!window.location.hash)return;
    let id='';
    try{
      id=decodeURIComponent(window.location.hash.slice(1));
    }catch(_error){
      id=window.location.hash.slice(1);
    }
    if(!id)return;
    const target=document.getElementById(id);
    if(!target)return;

    const topbar=document.querySelector('.topbar');
    const topbarHeight=topbar ? Math.ceil(topbar.getBoundingClientRect().height) : 0;
    target.style.scrollMarginTop=`${topbarHeight + 16}px`;

    const placeTarget=()=>target.scrollIntoView({behavior:'auto',block:'start'});

    // Browser koennen beim Wiederaufruf eine alte Scrollposition restaurieren.
    // Mehrere kurze Nachkorrekturen halten den Hash-Zielpunkt waehrend spaeter
    // Layout-Aenderungen (z. B. Bilder/Schriften) stabil.
    requestAnimationFrame(()=>requestAnimationFrame(placeTarget));
    [120,350,800].forEach(delay=>setTimeout(placeTarget,delay));
  }

  document.addEventListener('click',event=>{
    const button=event.target.closest('.fib-print-button');
    if(!button)return;
    const card=button.closest('.card[id]');
    if(!card)return;
    const url=new URL(window.location.href);
    url.hash=card.id;
    card.dataset.printUrl=url.toString();
  },true);

  await import('./app-base-20260831.js');
  // Fachliche Inhalte sind persistent in data/*.json und statisch in index.html
  // synchronisiert. Historische update-/Korrekturskripte werden nicht mehr
  // ausgeführt; JavaScript ergänzt ab hier nur Darstellung und Bedienung.
  await import('./sort-topics.js');
  await import('./sort-contributions.js');
  await import('./image-features.js');
  await import('./image-b047-green-village.js');
  await import('./source-image-correction-20260907.js');
  await import('./search-dynamic.js');
  await import('./share-print-subscribe.js?v=20260903c');
  await import('./mobile-print-guard.js?v=20260903c');

  // Der fachliche Bestand in data/*.json ist kanonisch; index.html ist die
  // synchronisierte statische Ausgabe. UI-Skripte duerfen fachliche Inhalte nicht veraendern.
  if(initialDemoNoteText){
    const note=document.querySelector('.demo-note');
    if(note) note.textContent=initialDemoNoteText;
  }

  // Direkte Beitrags-/Themenlinks (z. B. #R069) nach allen dynamischen
  // Aenderungen erneut exakt ansteuern.
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  scrollToCurrentHash();
  window.addEventListener('load',scrollToCurrentHash,{once:true});
  window.addEventListener('pageshow',scrollToCurrentHash);
  window.addEventListener('hashchange',scrollToCurrentHash);
})();
