(async function loadFibScripts(){
  const featureStyle=document.createElement('link');
  featureStyle.rel='stylesheet';
  featureStyle.href='assets/share-print-subscribe.css';
  document.head.appendChild(featureStyle);

  await import('./app-base-20260831.js');
  await import('./update-20260901.js');
  await import('./update-20260901-tz.js');
  await import('./sort-topics.js');
  await import('./update-20260903.js');
  await import('./update-20260903b.js');
  await import('./editorial-corrections-20260903.js');
  await import('./image-features.js');
  await import('./search-dynamic.js');
  await import('./share-print-subscribe.js');
})();
