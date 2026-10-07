/* ========================================
   gallery.js : 아트 갤러리 (크기 제각각 그림을 모바일 2열 / PC 4열로 쭉 + 전체화면 보기)
   그림 폴더: imgs/gallery/  (예: imgs/gallery/concept/forest.jpg)
   ======================================== */

// ===== 그림 목록: 새 그림은 { src: '파일', caption: '설명' } 한 줄만 추가하세요 =====
// src 는 imgs/gallery/ 아래 경로예요. 위에 있을수록 먼저 보여요.
const GALLERY = {
  'gallery/0': { lead: '세계의 풍경과 인물을 처음 그려본 기록들.', items: [
    { src: 'concept/sample-1.jpg', caption: '포레스트키퍼 초안' },
    { src: 'concept/sample-1-1.jpg', caption: '포레스트키퍼 초안2' },
    { src: 'concept/sample-1-2.jpg', caption: '포레스트키퍼 초안3-1' },
    { src: 'concept/sample-1-3.jpg', caption: '포레스트키퍼 초안3-2' },
    { src: 'concept/sample-1-4.jpg', caption: '포레스트키퍼 최종' },
    { src: 'concept/sample-2.jpg', caption: '아비게일 초안' },
    { src: 'concept/sample-2-1.jpg', caption: '아비게일 최종' },
    { src: 'concept/sample-3.jpg', caption: '에스더 초안' },
    { src: 'concept/sample-3-1.jpg', caption: '에스더 최종' },
    { src: 'concept/sample-4.jpg', caption: '최초의 영웅들 초안' },
    { src: 'concept/sample-4-1.jpg', caption: '기사 최종' },
    { src: 'concept/sample-4-2.jpg', caption: '왕 최종' },
    { src: 'concept/sample-4-3.jpg', caption: '시인 최종' },
    { src: 'concept/sample-5.jpg', caption: '불의 신 초안' },
    { src: 'concept/sample-6.jpg', caption: '물의 신 초안' },
    { src: 'concept/sample-7.jpg', caption: '바람의 신 초안' },
    { src: 'concept/sample-8.jpg', caption: '자연의 신 초안' },
    { src: 'concept/sample-9.jpg', caption: '대지의 신 초안' },
    { src: 'concept/sample-10.jpg', caption: '얼음의 신 초안' },
    { src: 'concept/sample-11.jpg', caption: '번개의 신 초안' },
    { src: 'concept/sample-12.jpg', caption: '정신의 신 초안' },
    { src: 'concept/sample-13.jpg', caption: '빛의 신 초안' },
    { src: 'concept/sample-14.jpg', caption: '어둠의 신 초안' },
    { src: 'concept/sample-15.jpg', caption: '태양의 신 초안' },
    { src: 'concept/sample-16.jpg', caption: '달의 신 초안' },
    { src: 'concept/sample-17.jpg', caption: '별의 신 초안' },
    { src: 'concept/sample-18.jpg', caption: '시간의 신 초안' },
    { src: 'concept/sample-19.jpg', caption: '공간의 신 초안' },
    { src: 'concept/sample-20.jpg', caption: '우주의 신 초안' },
    { src: 'concept/sample-21.jpg', caption: '펠릭스 초안' },
    { src: 'concept/sample-21-1.jpg', caption: '펠릭스 최종' },
    { src: 'concept/sample-22.jpg', caption: '헌터 초안' },
    { src: 'concept/sample-22-1.jpg', caption: '헌터 초안2' },
    { src: 'concept/sample-23.jpg', caption: '휴고 초안' },
    { src: 'concept/sample-24.jpg', caption: '릴리안 초안' },
    { src: 'concept/sample-25.jpg', caption: '플레이어블 캐릭터들 초안' },
    { src: 'concept/sample-25-1.jpg', caption: '플레이어블 캐릭터들 초안2' },
    { src: 'concept/sample-26.jpg', caption: '죄악들 초안' },
    { src: 'concept/sample-27.jpg', caption: '장미가주 최종' }
  ] },
  'gallery/1': { lead: '완성된 한 장의 이야기들.', items: [
    { src: 'illust/complete-1.jpg', caption: '초안 포레스트키퍼 일러' },
    { src: 'illust/complete-2.jpg', caption: '초안 포레스트키퍼 전신 일러' },
    { src: 'illust/complete-3.png', caption: '포레스트키퍼 가면' },
    { src: 'illust/complete-4.png', caption: '아비게일 가면' },
    { src: 'illust/complete-5.png', caption: '에스더 모자' },
    { src: 'illust/complete-6.jpg', caption: '아기자기 신들' },
    { src: 'illust/complete-7.jpg', caption: '포레스트키퍼 일러' }
  ] },
  'gallery/2': { lead: '선 하나에서 시작된 스케치들.', items: [
    { src: 'sketch/sketch-1.jpg', caption: '기사와 왕 만화, 1p' },
    { src: 'sketch/sketch-1-2.jpg', caption: '기사와 왕 만화, 2p' },
    { src: 'sketch/sketch-1-3.jpg', caption: '기사와 왕 만화, 3p' },
    { src: 'sketch/sketch-1-4.jpg', caption: '기사와 왕 만화, 4p' },
    { src: 'sketch/sketch-1-5.jpg', caption: '기사와 왕 만화, 5p' },
    { src: 'sketch/sketch-2.jpg', caption: '시인 낙서' },
    { src: 'sketch/sketch-2-1.jpg', caption: '시인 낙서2' },
    { src: 'sketch/sketch-3.jpg', caption: '기사와 왕 만화, 외전 1p' },
    { src: 'sketch/sketch-3-1.jpg', caption: '기사와 왕 만화, 외전 2p' },
    { src: 'sketch/sketch-3-2.jpg', caption: '기사와 왕 만화, 외전 3p' },
    { src: 'sketch/sketch-3-3.jpg', caption: '기사와 왕 만화, 외전 4p' },
    { src: 'sketch/sketch-4.jpg', caption: '릴리안 손그림' },
    { src: 'sketch/sketch-5.jpg', caption: '크리스탈 마녀 손그림' },
    { src: 'sketch/sketch-6.jpg', caption: '릴리휴고' },
    { src: 'sketch/sketch-7.jpg', caption: '어린이날 기념 아기 신들' },
    { src: 'sketch/sketch-8.jpg', caption: '아비게일 낙서' },
    { src: 'sketch/sketch-9.jpg', caption: '우주신 스케치(드랍)' },
    { src: 'sketch/sketch-10.jpg', caption: '펠릭스 도트' },
    { src: 'sketch/sketch-11.jpg', caption: '포레스트키퍼 도트' }
  ] },
  'gallery/3': { lead: '게임 화면과 연출을 위한 그림들.', items: [

  ] }
};

const galSrc = (it) => `${IMG}gallery/${it.src}`;
 
// 모바일 2열, PC 4열 (고정)
const galCols = () => matchMedia('(min-width: 900px)').matches ? 4 : 2;
let galState = null;
 
// 그림을 위에서부터 차례로, 그 순간 가장 짧은 열에 쌓아요 (그림 크기가 달라도 틈 없이, 자르지 않고)
// 검색 중이면 검색에 걸린 그림(visible)만 쌓아요
function layoutGallery() {
  const grid = $('#gal-grid');
  if (!grid || !galState) return;
  const { items, ratios, nodes, visible } = galState;
  const n = galCols();
  const heights = Array(n).fill(0);
  const cols = Array.from({ length: n }, () => { const c = document.createElement('div'); c.className = 'gal-col'; return c; });
  visible.forEach((i) => {
    const k = heights.indexOf(Math.min(...heights));
    cols[k].appendChild(nodes[i]);
    heights[k] += ratios[i] + (items[i].caption ? 0.28 : 0.05);
  });
  grid.replaceChildren(...cols);
}
matchMedia('(min-width: 900px)').addEventListener('change', layoutGallery);
 
// 검색: 설명(caption)과 태그(tags)에서 찾아요. 띄어쓰기로 여러 단어를 쓰면 모두 들어간 그림만 보여요
function filterGallery(q) {
  const s = galState;
  const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  s.visible = s.items.map((_, i) => i).filter((i) => words.every((w) => s.hay[i].includes(w)));
  layoutGallery();
  $('#gal-count').textContent = words.length ? `${s.visible.length}개의 그림을 찾았어요` : `총 ${s.items.length}개`;
  $('#gal-none').hidden = s.visible.length > 0;
}
 
for (const key in GALLERY) {
  PAGE_VIEWS[key] = function (m, i) {
    const g = GALLERY[key];
    view.innerHTML = `
      <div class="wrap page-top page slide-in">
        <p class="crumb"><a href="#/">홈</a> / <a href="#/${m.id}">${m.label}</a> / ${m.subs[i]}</p>
        <h1>${m.subs[i]}</h1>
        <p class="section-lead">${g.lead}</p>
        ${g.items.length ? `
        <div class="list-search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/></svg>
          <input id="gal-q" type="search" placeholder="그림 설명이나 태그로 찾아보세요" autocomplete="off" aria-label="그림 검색">
        </div>
        <p class="list-count" id="gal-count" aria-live="polite">총 ${g.items.length}개</p>
        <div class="gal-grid" id="gal-grid"></div>
        <div class="empty" id="gal-none" hidden>찾는 그림이 없어요.<br>다른 단어로 찾아보세요.</div>`
        : '<div class="empty">아직 올라온 그림이 없어요.<br>곧 채워질 예정이에요.</div>'}
      </div>`;
    if (!g.items.length) { galState = null; return; }
 
    const state = galState = {
      items: g.items,
      ratios: g.items.map(() => 0.75),
      hay: g.items.map((it) => `${it.caption || ''} ${(it.tags || []).join(' ')}`.toLowerCase()),
      visible: g.items.map((_, n) => n),
      nodes: []
    };
    state.nodes = g.items.map((it, n) => {
      const fig = document.createElement('figure');
      fig.className = 'gal-item';
      fig.innerHTML = `
        <button type="button" class="gal-btn" aria-label="${esc(it.caption || '그림')} 크게 보기">
          <img src="${galSrc(it)}" alt="${esc(it.caption || '')}" onerror="this.parentNode.classList.add('missing');this.remove()">
        </button>
        ${it.caption ? `<figcaption>${esc(it.caption)}</figcaption>` : ''}`;
      const b = fig.querySelector('.gal-btn');
      // 검색 결과 안에서만 넘겨 볼 수 있게, 지금 보이는 그림 목록을 넘겨요
      b.addEventListener('click', () => openLightbox(state.visible.map((v) => state.items[v]), state.visible.indexOf(n), b));
      return fig;
    });
    layoutGallery();
    $('#gal-q').addEventListener('input', (e) => filterGallery(e.target.value));
 
    // 그림 크기를 알게 되면 한 번 더 정리해요
    let left = g.items.length;
    g.items.forEach((it, n) => {
      const im = new Image();
      const done = () => { if (--left === 0 && galState === state) layoutGallery(); };
      im.onload = () => { if (im.naturalWidth) state.ratios[n] = im.naturalHeight / im.naturalWidth; done(); };
      im.onerror = done;
      im.src = galSrc(it);
    });
  };
}
 
// ===== 전체화면 보기 =====
let lb = null, lbItems = [], lbIndex = 0, lbFrom = null;
 
function buildLightbox() {
  lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.hidden = true;
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', '그림 크게 보기');
  lb.innerHTML = `
    <button type="button" class="lb-close" aria-label="닫기">×</button>
    <button type="button" class="lb-nav prev" aria-label="이전 그림">‹</button>
    <figure class="lb-stage"><img alt=""><figcaption></figcaption></figure>
    <button type="button" class="lb-nav next" aria-label="다음 그림">›</button>
    <p class="lb-count" aria-live="polite"></p>`;
  document.body.appendChild(lb);
 
  lb.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lb.querySelector('.prev').addEventListener('click', () => stepLightbox(-1));
  lb.querySelector('.next').addEventListener('click', () => stepLightbox(1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb-stage')) closeLightbox(); });
 
  // 옆으로 밀어서 넘기기 (손가락)
  let x0 = null;
  lb.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
  });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
  window.addEventListener('hashchange', closeLightbox);
}
 
function showLightbox() {
  const it = lbItems[lbIndex];
  const img = lb.querySelector('img');
  img.classList.remove('gone');
  img.onerror = () => img.classList.add('gone');
  img.src = galSrc(it);
  img.alt = it.caption || '';
  lb.querySelector('figcaption').textContent = it.caption || '';
  lb.querySelector('.lb-count').textContent = `${lbIndex + 1} / ${lbItems.length}`;
  const single = lbItems.length < 2;
  lb.querySelectorAll('.lb-nav').forEach((b) => { b.hidden = single; });
  // 다음/이전 그림을 미리 불러와요
  [1, -1].forEach((d) => { const n = lbItems[(lbIndex + d + lbItems.length) % lbItems.length]; if (n) new Image().src = galSrc(n); });
}
 
function openLightbox(items, index, from) {
  if (!lb) buildLightbox();
  lbItems = items; lbIndex = index; lbFrom = from;
  showLightbox();
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  lb.querySelector('.lb-close').focus();
}
 
function stepLightbox(d) {
  lbIndex = (lbIndex + d + lbItems.length) % lbItems.length;
  showLightbox();
}
 
function closeLightbox() {
  if (!lb || lb.hidden) return;
  lb.hidden = true;
  document.body.style.overflow = '';
  if (lbFrom && document.body.contains(lbFrom)) lbFrom.focus();
}