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

    // Zwei Frames abwarten, damit Sortierung und DOM-Aenderungen abgeschlossen sind.
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        target.scrollIntoView({block:'start'});
      });
    });
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
  await import('./update-20260901.js');
  await import('./update-20260901-tz.js');
  await import('./sort-topics.js');
  await import('./update-20260903.js');
  await import('./update-20260903b.js');
  await import('./editorial-corrections-20260903.js');
  await import('./update-20260904.js');
  await import('./update-20260905.js');
  await import('./update-20260907.js');
  await import('./update-20260907-adfc.js');
  await import('./source-basis-correction-20260907.js');
  await import('./update-20260908.js');
  await import('./update-20260910.js');
  await import('./quality-revision-20260910.js');
  await import('./update-20260910-parkraum.js');
  await import('./update-20260912.js');
  await import('./update-20260917.js');
  await import('./update-20260918.js');
  await import('./sort-contributions.js');
  await import('./image-features.js');
  await import('./image-b047-green-village.js');
  await import('./source-image-correction-20260907.js');
  await import('./search-dynamic.js');
  await import('./share-print-subscribe.js?v=20260903c');
  await import('./mobile-print-guard.js?v=20260903c');

  // Der statische HTML-Stand ist kanonisch. Aeltere inkrementelle Update-Skripte
  // duerfen den im index.html gesetzten Aktualisierungsstand nicht zuruecksetzen.
  if(initialDemoNoteText){
    const note=document.querySelector('.demo-note');
    if(note) note.textContent=initialDemoNoteText;
  }

  // Direkte Beitrags-/Themenlinks (z. B. #R069) nach allen dynamischen
  // Aenderungen erneut exakt ansteuern.
  scrollToCurrentHash();
  window.addEventListener('load',scrollToCurrentHash,{once:true});
  window.addEventListener('hashchange',scrollToCurrentHash);
})();
