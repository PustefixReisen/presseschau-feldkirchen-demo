// FIB demonstrator only: on mobile devices the platform print service may fail or offer no usable PDF target.
// In the production version, Beiträge und Themen should expose a real downloadable PDF.
// Production sharing requirement: each Beitrag/Thema needs its own public URL plus static Open-Graph metadata
// (title, teaser, canonical URL, preview image) so WhatsApp/Signal/Mastodon can build individual link previews.
(function initFibMobilePrintGuard(){
  const isMobile = () => window.matchMedia('(max-width: 760px)').matches || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  document.addEventListener('click', event => {
    const button = event.target.closest('.fib-print-button');
    if(!button || !isMobile()) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const existing = document.getElementById('fib-mobile-print-dialog');
    if(existing) existing.remove();

    const dialog = document.createElement('dialog');
    dialog.id = 'fib-mobile-print-dialog';
    dialog.className = 'fib-dialog';
    dialog.innerHTML = `
      <div class="fib-dialog-inner">
        <h3 class="fib-dialog-title">Drucken / PDF</h3>
        <p class="fib-dialog-message">In der späteren FIB-Version kannst du diesen Inhalt direkt als PDF öffnen, speichern oder drucken. Im Demonstrator ist die PDF-Funktion auf Smartphones noch nicht aktiviert.</p>
        <button type="button" class="fib-action-button">Schließen</button>
      </div>`;
    document.body.appendChild(dialog);
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => dialog.remove());
    if(typeof dialog.showModal === 'function') dialog.showModal();
    else alert('Drucken / PDF\n\nIn der späteren FIB-Version kannst du diesen Inhalt direkt als PDF öffnen, speichern oder drucken. Im Demonstrator ist die PDF-Funktion auf Smartphones noch nicht aktiviert.');
  }, true);
})();
