(function enhanceGreenVillageContribution(){
  const card=document.getElementById('R047');
  if(!card || card.querySelector('.teaser-with-image')) return;

  const image={
    id:'B047',
    file:'feldkirchen-green-village-bauschild-01.jpg',
    title:'Neubauprojekt Green Village / Bauschild',
    alt:'Großes Bauschild des Neubauprojekts Green Village in Feldkirchen mit Visualisierung geplanter Wohngebäude; rechts ist das Baugelände zu sehen.',
    caption:'Bauschild und Baugelände des Neubauprojekts Green Village in Feldkirchen. © J.Walter',
    publicText:'An der Hohenlindner Straße entsteht mit dem „Green Village“ ein neues Wohnquartier. Das Foto vom 2. September 2026 zeigt das Bauschild und einen Teil des Baugeländes. Das Quartier gehört zum Bebauungsplangebiet Nr. 113 zwischen Hohenlindner Straße und Jahnstraße. Für das Vorhaben liegen unter anderem ein Mobilitätskonzept und ein Freiflächenplan vor. Im September 2026 befasst sich der Gemeinderat außerdem mit der Benennung der neuen Straße im Quartier.',
    sources:'Gemeinde Feldkirchen – Bebauungsplan Nr. 113 und öffentliche Auslegung; Beschlussvorlage 5230/2026 vom 21.05.2026; Gemeinderat 17.09.2026, Straßenbenennung Green Village.'
  };

  const heading=card.querySelector(':scope > h3');
  const subtitle=card.querySelector(':scope > .subtitle');
  const body=card.querySelector(':scope > .body');
  if(!heading || !body) return;

  const openModal=()=>{
    let root=document.getElementById('b047-image-modal');
    if(!root){
      root=document.createElement('div');
      root.id='b047-image-modal';
      root.className='image-modal';
      root.hidden=true;
      root.innerHTML='<div class="image-modal-backdrop" data-close></div><section class="image-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="b047-image-modal-title"><button class="image-modal-close" type="button" aria-label="Fenster schließen" data-close>×</button><div class="image-modal-content"></div></section>';
      document.body.appendChild(root);
      root.addEventListener('click',event=>{if(event.target.closest('[data-close]')){root.hidden=true;document.body.classList.remove('image-modal-open');}});
      document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!root.hidden){root.hidden=true;document.body.classList.remove('image-modal-open');}});
    }
    root.querySelector('.image-modal-content').innerHTML=`<img class="image-modal-photo" src="assets/images/${image.file}" alt="${image.alt}"><h3 id="b047-image-modal-title">${image.title}</h3><p>${image.publicText}</p><h4>Quellen / Hintergrund</h4><p class="image-modal-source-note">${image.sources}</p>`;
    root.hidden=false;
    document.body.classList.add('image-modal-open');
    root.querySelector('.image-modal-close')?.focus();
  };

  const teaser=document.createElement('div');
  teaser.className='teaser-with-image';
  teaser.dataset.fibImageId=image.id;
  const figure=document.createElement('figure');
  figure.className='contribution-image';
  const trigger=document.createElement('button');
  trigger.className='image-detail-trigger';
  trigger.type='button';
  trigger.setAttribute('aria-label','Mehr zum Bild: Neubauprojekt Green Village');
  trigger.addEventListener('click',openModal);
  const photo=document.createElement('img');
  photo.src=`assets/images/${image.file}`;
  photo.alt=image.alt;
  photo.loading='lazy';
  trigger.appendChild(photo);
  figure.appendChild(trigger);
  const caption=document.createElement('figcaption');
  caption.textContent=image.caption;
  figure.appendChild(caption);
  const more=document.createElement('button');
  more.className='image-more-link';
  more.type='button';
  more.textContent='Mehr zum Bild';
  more.addEventListener('click',openModal);
  figure.appendChild(more);
  const text=document.createElement('div');
  text.className='teaser-text';
  if(subtitle) text.appendChild(subtitle);
  text.appendChild(body);
  teaser.append(figure,text);
  heading.insertAdjacentElement('afterend',teaser);
  card.dataset.fibImageId=image.id;
})();
