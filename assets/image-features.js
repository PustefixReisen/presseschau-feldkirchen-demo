(async function initFibImageFeatures(){
  if (!document.querySelector('link[data-fib-image-layout]')) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'assets/image-layout.css';
    stylesheet.dataset.fibImageLayout = 'true';
    document.head.appendChild(stylesheet);
  }

  const response = await fetch('assets/bildbibliothek.json', {cache: 'no-store'});
  if (!response.ok) return;
  const library = await response.json();
  const images = Array.isArray(library.images) ? library.images : [];
  const byId = new Map(images.map(image => [image.id, image]));

  const normalize = value => (value || '')
    .toLocaleLowerCase('de-DE')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss');

  // Explizite redaktionelle Präferenzen haben Vorrang vor jeder Textregel.
  const preferredByCard = new Map([
    ['R060','B022'],
    ['T013','B022']
  ]);

  // Nur konkrete Orts-, Objekt- oder Sachverhaltsbezüge. Keine generischen Ersatzbilder.
  const contributionRules = [
    ['B008', /griecherl|geh[oö]lz.*m[uü]nchner stra[ßs]e|radweg.*m[uü]nchner stra[ßs]e.*geh[oö]lz/],
    ['B016', /glasfaser.*eschenweg|eschenweg.*glasfaser/],
    ['B017', /spielplatz.*theresien|theresien.*spielplatz|spielplatz.*ottostra[ßs]e/],
    ['B018', /fu[ßs]g[aä]ngerampel.*aschheimer|aschheimer stra[ßs]e.*ampel/],
    ['B019', /cyanobakter|blaualgen.*heimstettener see/],
    ['B020', /fahrradstra[ßs]e.*seestra[ßs]e|seestra[ßs]e.*fahrradstra[ßs]e/],
    ['B023', /arche noah.*solar|b[uü]rgersolar.*arche noah/],
    ['B024', /friedhofssatz|kolumbarium|aussegnungshalle/],
    ['B025', /friedhof.*erweiterungs|erweiterungswiese|friedhofsumfeld.*parkanlage/],
    ['B026', /ludwig.?gl[oö]ckl|alte schule.*bahnhofstra[ßs]e/],
    ['B027', /kinderhaus.*st\.? jakob|kinderhaus.*sankt jakob|st\.? jakob.*kinderhaus/],
    ['B028', /grundschule.*richthofen|grundschule feldkirchen/],
    ['B029', /b[uü]rgercaf[eé].*richthofen|multifunktionsraum.*richthofen/],
    ['B030', /seniorenwohnung.*richthofen|seniorenappartement.*richthofen/],
    ['B031', /bahnhof.*fahrradabstell|fahrradabstell.*bahnhof/],
    ['B032', /bahnhofsvorplatz|rahmenplan.*bahnhofsvorplatz/],
    ['B033', /villa lehrer|lehrervilla/],
    ['B034', /maibaumplatz/],
    ['B035', /evangelische kirche.*maibaum|maibaum.*evangelische kirche/],
    ['B036', /rathaus feldkirchen|rathausplatz 1/],
    ['B037', /freiwillige feuerwehr feldkirchen|feuerwehrger[aä]tehaus/],
    ['B039', /sportpark.*fahrradabstell|fahrradabstell.*sportpark/],
    ['B041', /sportlerheim|tsv feldkirchen.*olympiastra[ßs]e/],
    ['B042', /partnergemeinde|rietschen|bisignano/],
    ['B043', /radwegweisung|radwegweiser.*ortseingang/],
    ['B044', /ortsschild feldkirchen|zahlen.*daten.*feldkirchen|einwohner.*feldkirchen/],
    ['B045', /rad.*fu[ßs]g[aä]ngerbr[uü]cke.*a94|br[uü]cke.*a94.*rad/],
    ['B046', /kreisverkehr.*olympiastra[ßs]e.*m[uü]nchner|kreisverkehr.*m[uü]nchner.*olympia/]
  ];

  // Themen dürfen etwas weiter gefasst sein, müssen aber einen zentralen Aspekt abbilden.
  const topicRules = [
    ['B022', /heimstettener see.*wasser|wasser.*heimstettener see/],
    ['B025', /friedhof.*parkanlage|friedhofsumfeld/],
    ['B032', /bahnhofsvorplatz|bahnhofsumfeld/],
    ['B034', /ortsmitte.*(entwicklung|zentrum)|maibaumplatz/],
    ['B045', /a94.*rad|rad.*a94/]
  ];

  function chooseImage(card){
    const preferred = preferredByCard.get(card.id);
    if (preferred && byId.has(preferred)) return byId.get(preferred);
    const text = normalize(card.textContent);
    const rules = card.classList.contains('topic-card') ? topicRules : contributionRules;
    for (const [id, rx] of rules) {
      if (rx.test(text) && byId.has(id)) return byId.get(id);
    }
    return null;
  }

  let modalRoot;
  function ensureModal(){
    if (modalRoot) return modalRoot;
    modalRoot = document.createElement('div');
    modalRoot.className = 'image-modal';
    modalRoot.hidden = true;
    modalRoot.innerHTML = '<div class="image-modal-backdrop" data-close></div><section class="image-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="image-modal-title"><button class="image-modal-close" type="button" aria-label="Fenster schließen" data-close>×</button><div class="image-modal-content"></div></section>';
    document.body.appendChild(modalRoot);
    modalRoot.addEventListener('click', event => { if (event.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modalRoot.hidden) closeModal(); });
    return modalRoot;
  }

  function closeModal(){
    if (!modalRoot) return;
    modalRoot.hidden = true;
    document.body.classList.remove('image-modal-open');
  }

  function escapeHtml(value){
    return String(value || '').replace(/[&<>'\"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[char]));
  }

  function publicTitle(image){
    return String(image.title || '').replace(/\s+(0?[12])$/,'').replace(/:\s*$/,'').trim();
  }

  function openModal(image){
    const root = ensureModal();
    const content = root.querySelector('.image-modal-content');
    const source = image.sources ? `<h4>Quellen / Hintergrund</h4><p class="image-modal-source-note">${escapeHtml(image.sources)}</p>` : '';
    content.innerHTML = `
      <img class="image-modal-photo" src="assets/images/${encodeURIComponent(image.file)}" alt="${escapeHtml(image.alt)}">
      <h3 id="image-modal-title">${escapeHtml(publicTitle(image))}</h3>
      <p>${escapeHtml(image.public_text)}</p>
      ${source}
    `;
    root.hidden = false;
    document.body.classList.add('image-modal-open');
    root.querySelector('.image-modal-close').focus();
  }

  function enhanceCard(card, image){
    if (!card || !image || card.querySelector('.teaser-with-image')) return;
    const heading = card.querySelector(':scope > h3');
    const subtitle = card.querySelector(':scope > .subtitle');
    const body = card.querySelector(':scope > .body');
    if (!heading || !body) return;

    const teaser = document.createElement('div');
    teaser.className = 'teaser-with-image';
    teaser.dataset.fibImageId = image.id;
    const figure = document.createElement('figure');
    figure.className = 'contribution-image';
    const trigger = document.createElement('button');
    trigger.className = 'image-detail-trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-label', `Mehr zum Bild: ${publicTitle(image)}`);
    trigger.addEventListener('click', () => openModal(image));
    const photo = document.createElement('img');
    photo.src = `assets/images/${image.file}`;
    photo.alt = image.alt || '';
    photo.loading = 'lazy';
    trigger.appendChild(photo);
    figure.appendChild(trigger);
    const caption = document.createElement('figcaption');
    caption.textContent = image.caption || image.copyright || '';
    figure.appendChild(caption);
    const more = document.createElement('button');
    more.className = 'image-more-link';
    more.type = 'button';
    more.textContent = 'Mehr zum Bild';
    more.addEventListener('click', () => openModal(image));
    figure.appendChild(more);
    const text = document.createElement('div');
    text.className = 'teaser-text';
    if (subtitle) text.appendChild(subtitle);
    text.appendChild(body);
    teaser.append(figure, text);
    heading.insertAdjacentElement('afterend', teaser);
    card.dataset.fibImageId = image.id;
  }

  const cards = [...document.querySelectorAll('.card.contribution, .topic-card')];
  let assigned = 0;
  for (const card of cards) {
    const image = chooseImage(card);
    if (!image) continue;
    enhanceCard(card, image);
    assigned += 1;
  }

  document.documentElement.dataset.fibImageLibrary = String(images.length);
  document.documentElement.dataset.fibImageAssignments = String(assigned);
})();
