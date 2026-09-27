const TILE='M64 32 L63.99 40.76 L63.96 43.56 L63.91 45.59 L63.84 47.24 L63.75 48.64 L63.64 49.88 L63.51 50.99 L63.36 52.01 L63.19 52.93 L63 53.79 L62.79 54.59 L62.56 55.33 L62.3 56.03 L62.02 56.68 L61.72 57.3 L61.4 57.87 L61.05 58.42 L60.68 58.93 L60.28 59.41 L59.86 59.86 L59.41 60.28 L58.93 60.68 L58.42 61.05 L57.87 61.4 L57.3 61.72 L56.68 62.02 L56.03 62.3 L55.33 62.56 L54.59 62.79 L53.79 63 L52.93 63.19 L52.01 63.36 L50.99 63.51 L49.88 63.64 L48.64 63.75 L47.24 63.84 L45.59 63.91 L43.56 63.96 L40.76 63.99 L32 64 L23.24 63.99 L20.44 63.96 L18.41 63.91 L16.76 63.84 L15.36 63.75 L14.12 63.64 L13.01 63.51 L11.99 63.36 L11.07 63.19 L10.21 63 L9.41 62.79 L8.67 62.56 L7.97 62.3 L7.32 62.02 L6.7 61.72 L6.13 61.4 L5.58 61.05 L5.07 60.68 L4.59 60.28 L4.14 59.86 L3.72 59.41 L3.32 58.93 L2.95 58.42 L2.6 57.87 L2.28 57.3 L1.98 56.68 L1.7 56.03 L1.44 55.33 L1.21 54.59 L1 53.79 L0.81 52.93 L0.64 52.01 L0.49 50.99 L0.36 49.88 L0.25 48.64 L0.16 47.24 L0.09 45.59 L0.04 43.56 L0.01 40.76 L0 32 L0.01 23.24 L0.04 20.44 L0.09 18.41 L0.16 16.76 L0.25 15.36 L0.36 14.12 L0.49 13.01 L0.64 11.99 L0.81 11.07 L1 10.21 L1.21 9.41 L1.44 8.67 L1.7 7.97 L1.98 7.32 L2.28 6.7 L2.6 6.13 L2.95 5.58 L3.32 5.07 L3.72 4.59 L4.14 4.14 L4.59 3.72 L5.07 3.32 L5.58 2.95 L6.13 2.6 L6.7 2.28 L7.32 1.98 L7.97 1.7 L8.67 1.44 L9.41 1.21 L10.21 1 L11.07 0.81 L11.99 0.64 L13.01 0.49 L14.12 0.36 L15.36 0.25 L16.76 0.16 L18.41 0.09 L20.44 0.04 L23.24 0.01 L32 0 L40.76 0.01 L43.56 0.04 L45.59 0.09 L47.24 0.16 L48.64 0.25 L49.88 0.36 L50.99 0.49 L52.01 0.64 L52.93 0.81 L53.79 1 L54.59 1.21 L55.33 1.44 L56.03 1.7 L56.68 1.98 L57.3 2.28 L57.87 2.6 L58.42 2.95 L58.93 3.32 L59.41 3.72 L59.86 4.14 L60.28 4.59 L60.68 5.07 L61.05 5.58 L61.4 6.13 L61.72 6.7 L62.02 7.32 L62.3 7.97 L62.56 8.67 L62.79 9.41 L63 10.21 L63.19 11.07 L63.36 11.99 L63.51 13.01 L63.64 14.12 L63.75 15.36 L63.84 16.76 L63.91 18.41 L63.96 20.44 L63.99 23.24 Z';
const ic=(n,s=20,w)=>{w=w??(s<=16?1.5:1.75);return `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]||''}</svg>`};
// One hue per app. Orange hues are excluded: orange belongs to the ember signal.
const APPS={
  people:{n:'人事',en:'People',i:'users',c:'#4F46E5'},
  leave:{n:'請假',en:'Leave',i:'sun',c:'#0D9488'},
  calendar:{n:'日曆',en:'Calendar',i:'calendar-days',c:'#0284C7'},
  docs:{n:'文件',en:'Docs',i:'file-text',c:'#7C3AED'},
  chat:{n:'訊息',en:'Messages',i:'message-square',c:'#16A34A'},
  payroll:{n:'薪酬',en:'Payroll',i:'wallet',c:'#059669'},
  expense:{n:'報銷',en:'Expenses',i:'receipt',c:'#E11D48'},
  files:{n:'檔案',en:'Files',i:'folder',c:'#DB2777'},
  approvals:{n:'審批',en:'Approvals',i:'badge-check',c:'#2563EB'},
  settings:{n:'設定',en:'Settings',i:'settings',c:'#52525B'},
  store:{n:'App Center',en:'App Center',i:'layout-grid',c:'#4338CA'},
  browser:{n:'瀏覽器',en:'Browser',i:'globe',c:'#0891B2'},
  shifts:{n:'排班',en:'Shifts',i:'calendar-check',c:'#65A30D'},
  review:{n:'評核',en:'Reviews',i:'star',c:'#9333EA'},
  onboard:{n:'入職',en:'Onboarding',i:'user-plus',c:'#0E7490'},
  offboard:{n:'離職',en:'Offboarding',i:'user-minus',c:'#64748B'},
  org:{n:'架構',en:'Org chart',i:'network',c:'#0369A1'},
  benefits:{n:'福利',en:'Benefits',i:'gift',c:'#BE185D'},
  skills:{n:'技能',en:'Skills',i:'graduation-cap',c:'#6D28D9'},
  talent:{n:'招聘',en:'Hiring',i:'briefcase',c:'#1D4ED8'},
  stock:{n:'倉庫',en:'Warehouse',i:'warehouse',c:'#57534E'},
  po:{n:'採購單',en:'Purchase orders',i:'clipboard-list',c:'#0F766E'},
  visitors:{n:'訪客',en:'Visitors',i:'contact',c:'#475569'},
  tasks:{n:'待辦',en:'Tasks',i:'list-checks',c:'#2563EB'},
  inbox:{n:'收件箱',en:'Inbox',i:'inbox',c:'#4338CA'},
};
const tile=(k,s=48)=>{const a=APPS[k];return `<span class="tile" style="width:${s}px;height:${s}px"><svg class="sq" viewBox="0 0 64 64"><path d="${TILE}" fill="${a.c}"/></svg><span class="g">${ic(a.i,Math.round(s*.5),s<30?1.75:1.75)}</span></span>`};
const sysTile=(i,s=48,color)=>`<span class="tile sys" style="width:${s}px;height:${s}px"><svg class="sq" viewBox="0 0 64 64"><path d="${TILE}" fill="var(--glass-hover)" stroke="var(--glass-border)" stroke-width="1.2"/></svg><span class="g" style="color:${color||'var(--chrome-text)'}">${ic(i,Math.round(s*.46))}</span></span>`;
const aiTile=(s=48)=>sysTile('sparkles',s,'#F98C10');
const LOGO=(s,bg='#25205B')=>`<svg width="${s}" height="${s}" viewBox="0 0 64 64" style="flex:none"><path d="${TILE}" fill="${bg}"/><path d="M44 16H30A14 14 0 0 0 16 30V34A14 14 0 0 0 30 48H44A4 4 0 0 0 44 40H30A6 6 0 0 1 24 34V30A6 6 0 0 1 30 24H44A4 4 0 0 0 44 16Z" fill="#FCFBFA"/><circle cx="36" cy="32" r="6" fill="#F98C10"/></svg>`;
const AVC=['#4F46E5','#0D9488','#7C3AED','#0284C7','#DB2777','#65A30D','#9333EA','#0369A1'];
const av=(name,s=28,i=0)=>`<span class="avatar" style="width:${s}px;height:${s}px;font-size:${Math.round(s*.42)}px;background:${AVC[i%AVC.length]}">${name[0]}</span>`;
const statusbar=(o={})=>`<div class="statusbar">
 <span class="sb-btn" style="gap:8px">${LOGO(18)}<span class="ws">${o.ws||'海港線集團有限公司'}</span>${ic('chevron-down',14)}</span>
 <span class="sb-btn muted">${o.app||''}</span>
 ${o.demo?'<span class="demo"><span class="dot"></span>示範工作空間</span>':''}
 <span class="sp"></span>
 <span class="searchpill">${ic('search',15)}<span style="flex:1">搜尋、執行、問 AI</span><span class="kbd">⌘K</span></span>
 <span class="sb-btn">${ic('sparkles',16)}</span>
 <span class="sb-btn">${ic('inbox',16)}<span class="badge-n num">7</span></span>
 <span class="sb-btn">${ic('wifi',16)}</span>
 <span class="sb-btn num" style="font-weight:500">${o.time||'9月27日 週六 09:41'}</span>
 ${av('陳',24,0)}
</div>`;
const dock=(apps,running=[],badges={})=>`<div class="dock glass">${apps.map(k=>k==='|'?'<span class="sep"></span>':k==='ai'?`<span class="slot">${aiTile(44)}</span>`:k==='launch'?`<span class="slot">${sysTile('layout-grid',44)}</span>`:`<span class="slot">${tile(k,44)}${running.includes(k)?'<span class="run"></span>':''}${badges[k]?`<span class="badge-n num">${badges[k]}</span>`:''}</span>`).join('')}</div>`;
document.querySelectorAll('[data-sb]').forEach(e=>e.outerHTML=statusbar(JSON.parse(e.dataset.sb||'{}')));
document.querySelectorAll('i[data-i]').forEach(e=>{e.outerHTML=ic(e.dataset.i,+(e.dataset.s||18),e.dataset.w?+e.dataset.w:undefined).replace('class="ic"',`class="ic" style="${e.getAttribute('style')||''}"`)});
document.querySelectorAll('i[data-tile]').forEach(e=>e.outerHTML=e.dataset.tile==='ai'?aiTile(+(e.dataset.s||48)):tile(e.dataset.tile,+(e.dataset.s||48)));
document.querySelectorAll('i[data-av]').forEach(e=>e.outerHTML=av(e.dataset.av,+(e.dataset.s||28),+(e.dataset.c||0)));
document.querySelectorAll('i[data-logo]').forEach(e=>e.outerHTML=LOGO(+(e.dataset.logo||24)));
document.querySelectorAll('[data-dock]').forEach(e=>{const d=JSON.parse(e.dataset.dock);e.outerHTML=dock(d.apps,d.run||[],d.badges||{})});
