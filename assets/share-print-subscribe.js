(function initFibSharePrintSubscribe(){
  const CARD_SELECTOR = '.card.contribution, .card.topic-card, article.card[id^="T"]';

  function textOf(el, selector){
    const node = el.querySelector(selector);
    return node ? node.textContent.trim().replace(/\s+/g, ' ') : '';
  }

  function shareData(card){
    const title = textOf(card, 'h3') || 'Feldkirchen im Blick';
    const teaser = textOf(card, '.subtitle') || textOf(card, '.body p') || textOf(card, '.summary') || '';
    const url = new URL(window.location.href);
    url.hash = card.id || '';
    return {
      title,
      teaser,
      text: teaser ? `${title}\n${teaser}` : title,
      url: url.toString(),
      kind: card.id && card.id.startsWith('T') ? 'Thema' : 'Beitrag'
    };
  }

  function showDialog(title, message){
    let dialog = document.getElementById('fib-feature-dialog');
    if(!dialog){
      dialog = document.createElement('dialog');
      dialog.id = 'fib-feature-dialog';
      dialog.className = 'fib-dialog';
      dialog.innerHTML = `
        <div class="fib-dialog-inner">
          <h3 class="fib-dialog-title"></h3>
          <p class="fib-dialog-message"></p>
          <button type="button" class="fib-action-button fib-dialog-close">Schließen</button>
        </div>`;
      document.body.appendChild(dialog);
      dialog.querySelector('.fib-dialog-close').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', (event) => {
        if(event.target === dialog) dialog.close();
      });
    }
    dialog.querySelector('.fib-dialog-title').textContent = title;
    dialog.querySelector('.fib-dialog-message').textContent = message;
    if(typeof dialog.showModal === 'function') dialog.showModal();
    else alert(`${title}\n\n${message}`);
  }

  async function copyShareText(data, button){
    const value = `${data.text}\n${data.url}`;
    try{
      await navigator.clipboard.writeText(value);
      const old = button.textContent;
      button.textContent = 'Kopiert';
      setTimeout(() => { button.textContent = old; }, 1600);
    }catch(_error){
      window.prompt('Text und Link kopieren:', value);
    }
  }

  function closeAllShareMenus(except){
    document.querySelectorAll('.fib-share-menu.open').forEach(menu => {
      if(menu !== except){
        menu.classList.remove('open');
        const trigger = menu.parentElement.querySelector('.fib-share-trigger');
        if(trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function addActions(card){
    if(card.querySelector(':scope > .fib-card-actions')) return;
    const heading = card.querySelector('h3');
    if(!heading) return;

    const data = shareData(card);
    const row = document.createElement('div');
    row.className = 'fib-card-actions';
    row.innerHTML = `
      <div class="fib-share-wrap">
        <button type="button" class="fib-action-button fib-icon-button fib-share-trigger" aria-expanded="false" aria-label="Teilen" title="Teilen">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5"></circle><circle cx="6" cy="12" r="2.5"></circle><circle cx="18" cy="19" r="2.5"></circle><path d="M8.2 10.9 15.8 6.1M8.2 13.1l7.6 4.8"></path></svg>
        </button>
        <div class="fib-share-menu" role="menu" aria-label="Beitrag teilen">
          <button type="button" class="fib-share-native" role="menuitem">Über Gerät teilen …</button>
          <a class="fib-share-email" role="menuitem">E-Mail</a>
          <a class="fib-share-whatsapp" role="menuitem" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <button type="button" class="fib-share-copy" role="menuitem">Link und Teaser kopieren</button>
          <p class="fib-share-note">Signal, Mastodon und Instagram können – sofern auf dem Gerät verfügbar – über „Über Gerät teilen …“ ausgewählt werden.</p>
        </div>
      </div>
      <button type="button" class="fib-action-button fib-icon-button fib-print-button" aria-label="Drucken oder als PDF speichern" title="Drucken / PDF">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2h-2"></path><path d="M7 14h10v7H7z"></path><path d="M17 11h.01"></path></svg>
      </button>`;

    heading.parentNode.insertBefore(row, heading);

    const trigger = row.querySelector('.fib-share-trigger');
    const menu = row.querySelector('.fib-share-menu');
    const nativeButton = row.querySelector('.fib-share-native');
    const email = row.querySelector('.fib-share-email');
    const whatsapp = row.querySelector('.fib-share-whatsapp');
    const copy = row.querySelector('.fib-share-copy');

    if(!navigator.share) nativeButton.hidden = true;

    const articlePhrase = data.kind === 'Thema' ? 'dieses Thema' : 'diesen Beitrag';
    const emailBody = `Hallo,\n\nauf Feldkirchen im Blick habe ich ${articlePhrase} gefunden:\n\n${data.text}\n\n${data.url}`;
    email.href = `mailto:?subject=${encodeURIComponent(data.title)}&body=${encodeURIComponent(emailBody)}`;
    whatsapp.href = `https://wa.me/?text=${encodeURIComponent(`${data.text}\n\n${data.url}`)}`;

    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !menu.classList.contains('open');
      closeAllShareMenus(menu);
      menu.classList.toggle('open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });

    nativeButton.addEventListener('click', async () => {
      try{
        await navigator.share({title:data.title,text:data.text,url:data.url});
        closeAllShareMenus();
      }catch(error){
        if(error && error.name !== 'AbortError') await copyShareText(data, copy);
      }
    });

    copy.addEventListener('click', async () => {
      await copyShareText(data, copy);
      closeAllShareMenus();
    });

    row.querySelector('.fib-print-button').addEventListener('click', () => {
      document.querySelectorAll('.fib-print-target').forEach(el => el.classList.remove('fib-print-target'));
      card.classList.add('fib-print-target');
      document.body.classList.add('fib-printing-single');
      const cleanup = () => {
        document.body.classList.remove('fib-printing-single');
        card.classList.remove('fib-print-target');
        window.removeEventListener('afterprint', cleanup);
      };
      window.addEventListener('afterprint', cleanup);
      window.print();
      setTimeout(cleanup, 1200);
    });
  }

  function addTopicWatch(card){
    if(!card.id || !card.id.startsWith('T') || card.querySelector(':scope > .fib-topic-watch')) return;
    const block = document.createElement('div');
    block.className = 'fib-topic-watch';
    block.innerHTML = '<button type="button" class="fib-watch-button">Dieses Thema beobachten</button>';
    block.querySelector('button').addEventListener('click', () => {
      showDialog(
        'Dieses Thema beobachten',
        'In der späteren FIB-Version kannst du dich per E-Mail informieren lassen, wenn es zu diesem Thema neue Entwicklungen gibt. Die Benachrichtigungsfunktion wird erst in der Echtversion aktiviert.'
      );
    });
    card.appendChild(block);
  }

  function addSubscriptionMockup(){
    const panel = document.getElementById('panel-presseschau');
    if(!panel || document.getElementById('fib-subscription-box')) return;
    const box = document.createElement('section');
    box.id = 'fib-subscription-box';
    box.className = 'fib-subscription-box';
    box.innerHTML = `
      <div class="fib-subscription-copy">
        <div class="kicker">Feldkirchen im Blick abonnieren</div>
        <h3>Über neue Beiträge informiert werden</h3>
        <p>In der späteren FIB-Version kannst du neue Beiträge per E-Mail abonnieren.</p>
      </div>
      <fieldset class="fib-frequency">
        <legend>Wie oft?</legend>
        <label><input type="radio" name="fib-frequency" value="sofort" checked> sofort</label>
        <label><input type="radio" name="fib-frequency" value="taeglich"> täglich</label>
        <label><input type="radio" name="fib-frequency" value="woechentlich"> wöchentlich</label>
      </fieldset>
      <button type="button" class="fib-action-button fib-subscribe-button">Benachrichtigungen einrichten</button>`;

    const cards = panel.querySelector('#contribution-list, .cards');
    if(cards) cards.insertAdjacentElement('afterend', box);
    else panel.appendChild(box);

    box.querySelector('.fib-subscribe-button').addEventListener('click', () => {
      const selected = box.querySelector('input[name="fib-frequency"]:checked');
      const frequency = selected ? selected.parentElement.textContent.trim() : 'gewählten';
      showDialog(
        'FIB-Benachrichtigungen',
        `Vorgesehen ist eine Anmeldung per E-Mail mit Double-Opt-in. Du hast „${frequency}“ ausgewählt. Im Demonstrator wird noch keine E-Mail-Adresse gespeichert und keine Nachricht versendet.`
      );
    });
  }

  function init(){
    document.querySelectorAll(CARD_SELECTOR).forEach(card => {
      addActions(card);
      addTopicWatch(card);
    });
    addSubscriptionMockup();
  }

  document.addEventListener('click', () => closeAllShareMenus());
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();

  const observer = new MutationObserver(() => init());
  observer.observe(document.documentElement, {childList:true, subtree:true});
})();
