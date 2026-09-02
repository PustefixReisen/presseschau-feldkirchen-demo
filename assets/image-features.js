(function initFibImageFeatures(){
  if (!document.querySelector('link[data-fib-image-layout]')) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'assets/image-layout.css';
    stylesheet.dataset.fibImageLayout = 'true';
    document.head.appendChild(stylesheet);
  }

  const configs = [
    {
      title: 'Gemeinderat beschließt Fortführung des Radwegs an der Münchner Straße',
      image: 'feldkirchen-baumreihe-01.jpg',
      alt: 'Gehölzstreifen mit großen Bäumen entlang der Olympiastraße in Feldkirchen',
      caption: 'Das sogenannte Griecherl-Gehölz entlang der Olympiastraße. © Josef Walter'
    },
    {
      title: 'Blaualgen im Heimstettener See nachgewiesen',
      image: 'heimstettener-see-cyanobakterien-01.jpg',
      alt: 'Zugang zum Heimstettener See mit Informationstafel und Warnhinweis vor Cyanobakterien',
      caption: 'Warnhinweis zu Cyanobakterien am Heimstettener See am 2. September 2026. © Josef Walter',
      modal: {
        heading: 'Heimstettener See – Warnhinweis zu Cyanobakterien',
        text: [
          'Der Heimstettener See ist ein wichtiger Naherholungsort für Feldkirchen und die Nachbargemeinden. Er wird zum Baden, Grillen und für weitere Freizeitaktivitäten genutzt. Alter Baumbestand sorgt in großen Teilen für Schatten; zum Erholungsgebiet gehören außerdem ein Biergarten, Toiletten und eine Wasserwacht.',
          'Im August 2026 wurden Cyanobakterien insbesondere am Südufer nachgewiesen. Das Gesundheitsamt riet vorsorglich vom Baden und Schwimmen im gesamten See ab. Der auf dem Foto sichtbare Warnhinweis dokumentiert diese Situation Anfang September.'
        ],
        sources: [
          ['Gemeinde Feldkirchen – Blaualgen im Heimstettener See', 'https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/blaualgen-im-heimstettener-see-nachgewiesen'],
          ['Landkreis München – Blaualgen im Heimstettener See nachgewiesen', 'https://www.landkreis-muenchen.de/artikel/blaualgen-im-heimstettener-see-nachgewiesen/']
        ],
        stand: 'Stand: 02.09.2026'
      }
    },
    {
      title: 'Gemeinderat unterstützt Planung einer innerörtlichen Grün- und Parkanlage',
      image: 'feldkirchen-friedhof-erweiterungsflaeche-01.jpg',
      alt: 'Eingezäunte, derzeit ungenutzte Erweiterungsfläche östlich des Feldkirchner Friedhofs mit Wiese und Bäumen',
      caption: 'Die bislang ungenutzte Erweiterungsfläche östlich des Feldkirchner Friedhofs. © Josef Walter',
      modal: {
        heading: 'Erweiterungsfläche östlich des Friedhofs',
        text: [
          'Die eingezäunte Fläche östlich des Gemeindefriedhofs war als Friedhofserweiterung vorgesehen, wird bislang aber nicht als Friedhof genutzt.',
          'Der Gemeinderat hat 2026 eine weitere fachplanerische Betrachtung der Erweiterungswiese und des Friedhofsumfelds mit dem Ziel einer innerörtlichen Grün- und Parkanlage unterstützt. Die konkrete Gestaltung ist noch nicht beschlossen.'
        ],
        sources: [
          ['RIS Feldkirchen – Beschlussvorlage 5235/2026', 'https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=73186&type=do'],
          ['RIS Feldkirchen – Gemeinderat 11.06.2026, TOP 12', 'https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1044&smcmode=32832']
        ],
        stand: 'Stand: 02.09.2026 – Planung veränderlich'
      }
    },
    {
      title: 'Neue Friedhofssatzungen treten in Kraft',
      image: 'feldkirchen-friedhof-kolumbarium-aussegnungshalle-01.jpg',
      alt: 'Historischer Bereich des Feldkirchner Friedhofs mit ehemaliger Aussegnungshalle, heute Kolumbarium, und neuer Aussegnungshalle zwischen altem Baumbestand',
      caption: 'Kolumbarium und neue Aussegnungshalle auf dem Feldkirchner Friedhof. © Josef Walter',
      modal: {
        heading: 'Gemeindefriedhof Feldkirchen',
        text: [
          'Der gemeindliche Friedhof entstand Anfang des 20. Jahrhunderts, nachdem der frühere Friedhof bei St. Michael zu klein geworden war.',
          'Die historische Aussegnungshalle wurde 1906 errichtet und 1907 eingeweiht. Nach dem Bau der neuen Aussegnungshalle, die 2009 eröffnet wurde, blieb das alte Gebäude erhalten und wurde zum Kolumbarium umgebaut. Seit 2014 werden dort Urnen in Nischen bestattet.'
        ],
        sources: [
          ['Gemeinde Feldkirchen – Friedhof', 'https://feldkirchen.de/rathaus/verwaltung/einrichtungen-der-gemeinde/friedhof']
        ],
        sourceNote: 'Heimatkundliche Grundlage: Cornelia Oelwein, Feldkirchen-Chronik, Kapitel „Die Friedhöfe“, S. 163–169.',
        stand: 'Historischer Überblick; aktuelle Angaben Stand 02.09.2026'
      }
    },
    {
      title: 'Drei neue überdachte Fahrrad-Abstellstationen fertiggestellt',
      image: 'feldkirchen-ludwig-gloeckl-haus-01.jpg',
      alt: 'Bürgerhaus Ludwig-Glöckl-Haus in der Bahnhofstraße 5 in Feldkirchen mit Eingang und überdachten Fahrrad-Abstellplätzen',
      caption: 'Ludwig-Glöckl-Haus mit überdachten Fahrrad-Abstellplätzen. © Josef Walter',
      modal: {
        heading: 'Ludwig-Glöckl-Haus',
        text: [
          'Das Gebäude in der Bahnhofstraße 5 wird heute als Bürgerhaus und für Vereins-, Gruppen- und Veranstaltungsnutzungen verwendet.',
          'Es ist als „Alte Schule“ bekannt und trägt den Namen des Feldkirchner Altbürgermeisters Ludwig Glöckl.'
        ],
        stand: 'Stand: 02.09.2026'
      }
    },
    {
      title: 'Planungsstand für das Kinderhaus St. Jakob wird vorgestellt',
      image: 'feldkirchen-kinderhaus-st-jakob-01.jpg',
      alt: 'Caritas Kinderhaus St. Jakob in der Zeppelinstraße in Feldkirchen mit begrüntem Vorplatz und altem Baumbestand',
      caption: 'Caritas Kinderhaus St. Jakob an der Zeppelinstraße. © Josef Walter',
      modal: {
        heading: 'Caritas Kinderhaus St. Jakob',
        text: [
          'Das Kinderhaus St. Jakob an der Zeppelinstraße 10 wird grundlegend saniert, erweitert und aufgestockt.',
          'Während der Bauzeit ist der Kindergarten in einem Interimsstandort an der Clara-Schumann-Straße im Dornacher Feld untergebracht. Angaben zu Interimslösung und Bauablauf sind zeitbezogen.'
        ],
        sources: [
          ['Gemeinde Feldkirchen – Umbau & Sanierung Kindergarten Sankt Jakob', 'https://feldkirchen.de/bauen/bauprojekte/umbau-sanierung-kindergarten-sankt-jakob']
        ],
        stand: 'Stand: 02.09.2026 – zeitbezogene Angaben'
      }
    },
    {
      title: 'Kinderhaus St. Jakob: zusätzliche Hortgruppe und Ausweichcontainer beschlossen',
      image: 'feldkirchen-kinderhaus-st-jakob-01.jpg',
      alt: 'Caritas Kinderhaus St. Jakob in der Zeppelinstraße in Feldkirchen mit begrüntem Vorplatz und altem Baumbestand',
      caption: 'Caritas Kinderhaus St. Jakob an der Zeppelinstraße. © Josef Walter',
      modalRef: 'Planungsstand für das Kinderhaus St. Jakob wird vorgestellt'
    }
  ];

  const byTitle = new Map(configs.map(c => [c.title, c]));
  for (const c of configs) {
    if (c.modalRef) c.modal = byTitle.get(c.modalRef)?.modal;
  }

  let modalRoot;
  function ensureModal(){
    if (modalRoot) return modalRoot;
    modalRoot = document.createElement('div');
    modalRoot.className = 'image-modal';
    modalRoot.hidden = true;
    modalRoot.innerHTML = '<div class="image-modal-backdrop" data-close></div><section class="image-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="image-modal-title"><button class="image-modal-close" type="button" aria-label="Fenster schließen" data-close>×</button><div class="image-modal-content"></div></section>';
    document.body.appendChild(modalRoot);
    modalRoot.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modalRoot.hidden) closeModal(); });
    return modalRoot;
  }

  function closeModal(){
    if (!modalRoot) return;
    modalRoot.hidden = true;
    document.body.classList.remove('image-modal-open');
  }

  function openModal(config){
    if (!config.modal) return;
    const root = ensureModal();
    const content = root.querySelector('.image-modal-content');
    const sourceItems = (config.modal.sources || []).map(([label, href]) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a></li>`).join('');
    content.innerHTML = `
      <img class="image-modal-photo" src="assets/images/${config.image}" alt="${config.alt}">
      <h3 id="image-modal-title">${config.modal.heading}</h3>
      ${config.modal.text.map(p => `<p>${p}</p>`).join('')}
      ${sourceItems ? `<h4>Quellen</h4><ul class="image-modal-sources">${sourceItems}</ul>` : ''}
      ${config.modal.sourceNote ? `<p class="image-modal-source-note">${config.modal.sourceNote}</p>` : ''}
      ${config.modal.stand ? `<p class="image-modal-stand">${config.modal.stand}</p>` : ''}
    `;
    root.hidden = false;
    document.body.classList.add('image-modal-open');
    root.querySelector('.image-modal-close').focus();
  }

  function enhanceCard(card, config){
    if (!card || card.querySelector('.teaser-with-image')) return;
    const heading = card.querySelector(':scope > h3');
    const subtitle = card.querySelector(':scope > .subtitle');
    const body = card.querySelector(':scope > .body');
    if (!heading || !subtitle || !body) return;

    const teaser = document.createElement('div');
    teaser.className = 'teaser-with-image';
    const figure = document.createElement('figure');
    figure.className = 'contribution-image';

    let imageParent = figure;
    if (config.modal) {
      const button = document.createElement('button');
      button.className = 'image-detail-trigger';
      button.type = 'button';
      button.setAttribute('aria-label', `Mehr zum Bild: ${config.modal.heading}`);
      button.addEventListener('click', () => openModal(config));
      figure.appendChild(button);
      imageParent = button;
    }

    const image = document.createElement('img');
    image.src = `assets/images/${config.image}`;
    image.alt = config.alt;
    image.loading = 'lazy';
    imageParent.appendChild(image);

    const caption = document.createElement('figcaption');
    caption.textContent = config.caption;
    figure.appendChild(caption);
    if (config.modal) {
      const more = document.createElement('button');
      more.className = 'image-more-link';
      more.type = 'button';
      more.textContent = 'Mehr zum Bild';
      more.addEventListener('click', () => openModal(config));
      figure.appendChild(more);
    }

    const text = document.createElement('div');
    text.className = 'teaser-text';
    text.append(subtitle, body);
    teaser.append(figure, text);
    heading.insertAdjacentElement('afterend', teaser);
  }

  document.querySelectorAll('.card.contribution').forEach(card => {
    const title = card.querySelector(':scope > h3')?.textContent.trim();
    const config = byTitle.get(title);
    if (config) enhanceCard(card, config);
  });
})();
