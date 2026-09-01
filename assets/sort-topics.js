// Themen absteigend nach dem Datum der letzten inhaltlichen Aktualisierung sortieren.
(function sortTopicsByLastUpdate(){
  const topics=[...document.querySelectorAll('.topic-card')];
  if(topics.length<2) return;
  const parent=topics[0].parentElement;
  if(!parent || !topics.every(t=>t.parentElement===parent)) return;

  const months={
    januar:0,februar:1,märz:2,maerz:2,april:3,mai:4,juni:5,
    juli:6,august:7,september:8,oktober:9,november:10,dezember:11
  };

  const getDate=(card)=>{
    const text=(card.querySelector('.date')?.textContent||'').toLowerCase();
    const m=text.match(/(\d{1,2})\.\s*([a-zäöüß]+)\s+(\d{4})/i);
    if(!m) return 0;
    const month=months[m[2].toLowerCase()];
    if(month===undefined) return 0;
    return new Date(Number(m[3]),month,Number(m[1])).getTime();
  };

  topics
    .map((card,index)=>({card,index,date:getDate(card)}))
    .sort((a,b)=>(b.date-a.date)||(a.index-b.index))
    .forEach(({card})=>parent.appendChild(card));
})();
