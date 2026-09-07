(function removeUnsupportedLowWaterImage(){
  const topic=document.getElementById('T013');
  if(!topic) return;
  const teaser=topic.querySelector(':scope > .teaser-with-image');
  if(!teaser) return;
  const body=teaser.querySelector('.body');
  const heading=topic.querySelector(':scope > h3');
  if(body && heading) heading.insertAdjacentElement('afterend',body);
  teaser.remove();
  delete topic.dataset.fibImageId;
})();
