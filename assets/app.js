(async function loadFibScripts(){
  const featureStyle=document.createElement('link');
  featureStyle.rel='stylesheet';
  featureStyle.href='assets/share-print-subscribe.css?v=20260903c';
  document.head.appendChild(featureStyle);

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
  await import('./image-features.js');
  await import('./search-dynamic.js');
  await import('./share-print-subscribe.js?v=20260903c');
  await import('./mobile-print-guard.js?v=20260903c');
})();
