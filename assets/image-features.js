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

  // Hohe Gewichtung nur für konkrete, redaktionell sinnvolle Motivbezüge.
  // So wird nicht jeder Beitrag zwangsbebildert und generische Motive wiederholen sich nicht unnötig.
  const rules = [
    ['B008',  [/griecherl|geholz|gehölz/, /munchner strasse.*radweg|radweg.*munchner strasse/]],
    ['B016',  [/glasfaser|breitband/, /eschenweg/]],
    ['B017',  [/spielplatz.*theresien|theresien.*spielplatz|ottostrasse.*spielplatz/]],
    ['B018',  [/fussgangerampel|fußgängerampel|schulweg/, /aschheimer strasse.*quer/]],
    ['B019',  [/cyanobakter|blaualgen|badeverbot/]],
    ['B020',  [/fahrradstrasse.*seestrasse|seestrasse.*fahrradstrasse/]],
    ['B021',  [/heimstettener see.*wasserstand|wasserstand.*heimstettener see/]],
    ['B022',  [/niedrigwasser|niedriger wasserstand|zuruckgewichene? wasser/]],
    ['B023',  [/arche noah/, /burgersolar|bürgersolar|photovoltaik.*kindergarten/]],
    ['B024',  [/friedhofssatz|kolumbarium|aussegnungshalle|bestattung/]],
    ['B025',  [/friedhof.*erweiter|erweiterungswiese|friedhofsumfeld|grun.*parkanlage/]],
    ['B026',  [/ludwig.?glockl|alte schule.*bahnhofstrasse/]],
    ['B027',  [/st\.? jakob|sankt jakob|kinderhaus.*jakob/]],
    ['B028',  [/grundschule feldkirchen|grundschule.*richthofen/]],
    ['B029',  [/burgercafe|bürgercafé|multifunktionsraum/]],
    ['B030',  [/seniorenwohnung|seniorenappartement|gemeinschaftliches wohnen/]],
    ['B031',  [/bahnhof.*fahrradabstell|fahrradabstell.*bahnhof|fahrradparken.*bahnhof/]],
    ['B032',  [/bahnhofsvorplatz|bahnhofsumfeld|rahmenplan.*bahnhof|s.?bahn.*bus.*feldkirchen/]],
    ['B033',  [/villa lehrer|lehrervilla|bahnhofstrasse.*baum|baumbestand.*bahnhofstrasse/]],
    ['B034',  [/maibaumplatz|ortsmitte.*platz|platz.*ortsmitte/]],
    ['B035',  [/evangelische kirche|maibaum.*kirche|kirche.*maibaum/]],
    ['B036',  [/rathaus feldkirchen|rathausplatz|gemeindebucherei|gemeindebücherei/]],
    ['B037',  [/feuerwehr|katastrophenschutz|schadenslage|stromausfall.*vorsorge/]],
    ['B038',  [/strassenbaum|straßenbaum|schattenspend.*baum|hitzeschutz.*strassenraum|hitzeschutz.*straßenraum/]],
    ['B039',  [/sportpark.*fahrrad|sportanlage.*fahrrad|fahrrad.?abstellstation.*sport/]],
    ['B040',  [/nachverdichtung|wohnungsbau|wohnraumentwicklung|bautatigkeit|bautätigkeit/]],
    ['B041',  [/sportlerheim|tsv feldkirchen/]],
    ['B042',  [/partnergemeinde|rietschen|bisignano|gemeindepartnerschaft/]],
    ['B043',  [/radwegweisung|radwegweiser|regionale radverbindung/]],
    ['B044',  [/einwohner.*feldkirchen|zahlen.*daten.*feldkirchen|wirtschaftsstandort.*feldkirchen|unternehmen.*feldkirchen/]],
    ['B045',  [/brucke.*a94|brücke.*a94|fuss.*rad.*brucke|fuß.*rad.*brücke|m18.*brucke|m18.*brücke/]],
    ['B046',  [/kreisverkehr.*olympia|kreisverkehr.*munchner|kreisel.*olympia|querung.*kreisverkehr/]]
  ];

  const ruleMap = new Map(rules);
  const stopWords = new Set(['feldkirchen','gemeinde','stand','ort','ortsbild','infrastruktur','kommunale','kommunal','aktuell','entwicklung','verkehr','mobilitat','mobilität','strasse','straße','anlage','raum']);
  const usage = new Map();

  function tokenScore(image, text){
    let score = 0;
    for (const raw of [...(image.tags || []), image.title || '', image.location || '']) {
      for (const token of normalize(raw).split(/[^a-z0-9]+/).filter(Boolean)) {
        if (token.length < 5 || stopWords.has(token)) continue;
        if (text.includes(token)) score += 0.45;
      }
    }
    return Math.min(score, 2.5);
  }

  function scoreImage(image, text){
    let score = tokenScore(image, text);
    for (const rx of ruleMap.get(image.id) || []) {
      if (rx.test(text)) score += 6;
    }
    score -= (usage.get(image.id) || 0) * 0.7;
    return score;
  }

  function chooseImage(card){
    const text = normalize(card.textContent);
    let best = null;
    let bestScore = 0;
    for (const image of images) {
      const score = scoreImage(image, text);
      if (score > bestScore) {
        best = image;
        bestScore = score;
      }
    }
    // Kein beliebiges Schmuckbild: mindestens ein konkreter Regelbezug muss greifen.
    if (!best || bestScore < 5.5) return null;
    usage.set(best.id, (usage.get(best.id) || 0) + 1);
    return best;
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

  function openModal(image){
    const root = ensureModal();
    const content = root.querySelector('.image-modal-content');
    const source = image.sources ? `<h4>Quellen / Hintergrund</h4><p class="image-modal-source-note">${escapeHtml(image.sources)}</p>` : '';
    const volatile = image.volatile_facts ? `<p class="image-modal-stand">Zeitabhängiger Hinweis: ${escapeHtml(image.volatile_facts)}</p>` : '';
    content.innerHTML = `
      <img class="image-modal-photo" src="assets/images/${encodeURIComponent(image.file)}" alt="${escapeHtml(image.alt)}">
      <h3 id="image-modal-title">${escapeHtml(image.title)}</h3>
      <p>${escapeHtml(image.public_text)}</p>
      ${source}
      ${volatile}
      <p class="image-modal-stand">Bildinformation: Stand ${escapeHtml(image.info_date || library.stand || '')}</p>
    `;
    root.hidden = false;
    document.body.classList.add('image-modal-open');
    root.querySelector('.image-modal-close').focus();
  }

  function escapeHtml(value){
    return String(value || '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
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
    trigger.setAttribute('aria-label', `Mehr zum Bild: ${image.title}`);
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

  // Prüfdaten für den Demonstrator, ohne sichtbare Debug-Ausgabe.
  document.documentElement.dataset.fibImageLibrary = String(images.length);
  document.documentElement.dataset.fibImageAssignments = String(assigned);
})();
