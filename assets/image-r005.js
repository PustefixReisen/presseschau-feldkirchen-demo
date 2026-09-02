(function enhanceR005WithImage(){
  const card = document.getElementById('R005');
  if (!card || card.querySelector('.teaser-with-image')) return;

  const heading = card.querySelector('h3');
  const subtitle = card.querySelector(':scope > .subtitle');
  const body = card.querySelector(':scope > .body');
  if (!heading || !subtitle || !body) return;

  const teaser = document.createElement('div');
  teaser.className = 'teaser-with-image';

  const figure = document.createElement('figure');
  figure.className = 'contribution-image';

  const image = document.createElement('img');
  image.src = 'assets/images/feldkirchen-baumreihe-01.jpg';
  image.alt = 'Gehölzstreifen mit großen Bäumen entlang der Olympiastraße in Feldkirchen';
  image.loading = 'lazy';

  const caption = document.createElement('figcaption');
  caption.textContent = 'Das sogenannte Griecherl-Gehölz entlang der Olympiastraße. © Josef Walter';

  const text = document.createElement('div');
  text.className = 'teaser-text';

  figure.append(image, caption);
  text.append(subtitle, body);
  teaser.append(figure, text);
  heading.insertAdjacentElement('afterend', teaser);
})();
