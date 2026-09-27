(function initObjectLinks(){
  const objectMap={
    OBJ001:{
      name:'B471',
      type:'Bezugsobjekt',
      description:'Die B471 ist eine zentrale Verkehrsachse im Feldkirchner Umfeld. Hier werden nur Beiträge und Themen verknüpft, in denen Planung, Nutzung, Verkehrssicherheit oder eine Veränderung der B471 selbst eine erkennbare Rolle spielen.',
      topics:[
        ['T015','Verkehrssicherheit an B471 und M18'],
        ['T003','Radverkehr und Verbindung über die A94']
      ],
      contributions:[
        ['R094','Tempo 30 an der B471: Landratsamt sieht Voraussetzungen nicht erfüllt'],
        ['R074','„B471 neu“ endgültig verworfen – lokale Entlastungsmaßnahmen rücken in den Mittelpunkt'],
        ['R012','Gemeinderat greift mehrere Anträge aus der Bürgerversammlung auf'],
        ['R007','Bürgerversammlung bringt Anträge zu Radwegen, Tempo 30 und Klimazielen'],
        ['R051','Kidical Mass führt von Aschheim über Feldkirchen zum Heimstettener See']
      ]
    }
  };

  const dialog=document.createElement('dialog');
  dialog.className='fib-object-dialog';
  dialog.innerHTML='<div class="fib-object-dialog-inner"><button class="fib-object-close" type="button" aria-label="Bezug schließen">×</button><div class="fib-object-content"></div></div>';
  document.body.appendChild(dialog);

  function renderObject(id){
    const obj=objectMap[id];
    if(!obj)return false;
    const content=dialog.querySelector('.fib-object-content');
    content.innerHTML=`
      <div class="minor">${obj.type}</div>
      <h3>${obj.name}</h3>
      <p>${obj.description}</p>
      <h4>Verknüpfte Themen</h4>
      <ul>${obj.topics.map(([targetId,title])=>`<li><a href="#${targetId}" data-object-target data-target-id="${targetId}">${title}</a></li>`).join('')}</ul>
      <h4>Verknüpfte Beiträge</h4>
      <ul>${obj.contributions.map(([targetId,title])=>`<li><a href="#${targetId}" data-object-target data-target-id="${targetId}">${title}</a></li>`).join('')}</ul>
    `;
    if(!dialog.open){
      if(typeof dialog.showModal==='function') dialog.showModal();
      else dialog.setAttribute('open','');
    }
    return true;
  }

  function showTarget(id){
    const target=document.getElementById(id);
    if(!target)return;

    if(id.startsWith('T')) document.querySelector('.nav-btn[data-target="themen"]')?.click();
    else if(id.startsWith('S')) document.querySelector('.nav-btn[data-target="sitzungen"]')?.click();
    else if(id.startsWith('R')||id.startsWith('C')) document.querySelector('.nav-btn[data-target="presseschau"]')?.click();

    const topbar=document.querySelector('.topbar');
    const topbarHeight=topbar ? Math.ceil(topbar.getBoundingClientRect().height) : 0;
    target.style.scrollMarginTop=`${topbarHeight + 16}px`;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      target.scrollIntoView({behavior:'auto',block:'start'});
    }));
  }

  function openObject(id,{pushHistory=true}={}){
    if(!renderObject(id))return;
    if(pushHistory){
      const url=new URL(window.location.href);
      url.hash=`bezug-${id}`;
      history.pushState({fibView:'object',fibObject:id},'',url);
    }
  }

  function openTargetFromObject(objectId,targetId){
    if(dialog.open) dialog.close();
    const url=new URL(window.location.href);
    url.hash=targetId;
    history.pushState({fibView:'target',fibTarget:targetId,fromFibObject:objectId},'',url);
    showTarget(targetId);
  }

  function closeDialogFromUi(){
    if(history.state && history.state.fibView==='object'){
      history.back();
    }else if(dialog.open){
      dialog.close();
    }
  }

  function syncWithHistory(){
    const state=history.state||{};

    if(state.fibView==='object' && state.fibObject && objectMap[state.fibObject]){
      renderObject(state.fibObject);
      return;
    }

    if(dialog.open) dialog.close();

    if(state.fibView==='target' && state.fibTarget){
      showTarget(state.fibTarget);
      return;
    }

    // Direkter Aufruf eines Bezugs-Hashes bleibt möglich.
    const match=window.location.hash.match(/^#bezug-(OBJ\d+)$/);
    if(match && objectMap[match[1]]) renderObject(match[1]);
  }

  document.addEventListener('click',event=>{
    const trigger=event.target.closest('.fib-object-link');
    if(trigger){
      event.preventDefault();
      openObject(trigger.dataset.objectId);
      return;
    }

    if(event.target.closest('.fib-object-close')){
      event.preventDefault();
      closeDialogFromUi();
      return;
    }

    const target=event.target.closest('[data-object-target]');
    if(target){
      event.preventDefault();
      const objectId=(history.state && history.state.fibObject) || window.location.hash.replace(/^#bezug-/,'');
      const targetId=target.dataset.targetId || target.getAttribute('href').replace(/^#/,'');
      openTargetFromObject(objectId,targetId);
    }
  });

  dialog.addEventListener('click',event=>{
    if(event.target===dialog) closeDialogFromUi();
  });

  dialog.addEventListener('cancel',event=>{
    event.preventDefault();
    closeDialogFromUi();
  });

  window.addEventListener('popstate',syncWithHistory);
  syncWithHistory();
})();