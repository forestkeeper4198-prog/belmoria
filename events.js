/* ========================================
   events.js : 즐길거리 (오늘의 신 축복 ...)
   그림은 imgs/events/god-이름.png
   ======================================== */
window.PAGE_VIEWS = window.PAGE_VIEWS || {};

// ===== 신 목록 (이름, 그림 이름, 대사, 빛깔) =====
const GODS = [
  { name: '우주', img: 'galaxy', color: '#afa4ee', desc: '우주의 신이 당신을 바라봅니다.\n\n나의 사랑스러운 아이들아.\n별바다를 두려워 마렴.' },
  { name: '시간', img: 'time', color: '#ede1c4', desc: '시간의 신이 당신을 바라봅니다.\n\n세월의 두려움 따윈 없다.\n영원한 시간만이 존재할지니.' },
  { name: '공간', img: 'space', color: '#7943c0', desc: '공간의 신이 당신을 바라봅니다.\n\n뒤틀린 공간을,\n그 수많은 손을 위해 당신은 무엇을 할 수 있는가.' },
  { name: '태양', img: 'sun', color: '#e17f69', desc: '태양의 신이 당신을 바라봅니다.\n\n영원한 태양, 내일도 타오를 여명을 기대하며 축복하라.' },
  { name: '달', img: 'moon', color: '#6977e1', desc: '달의 신이 당신을 바라봅니다.\n\n앞으로 나아가거라.\n어둠은 두려울게 되지 못하며,\n희미한 달빛이 길을 밝힐지니.' },
  { name: '별', img: 'star', color: '#e1c169', desc: '별의 신이 당신을 바라봅니다.\n\n별의 행진이 시작 되면 소원을 담은 유성은 신에게 닿아\n간절한 소원을 이루어 줄지니.' },
  { name: '빛', img: 'light', color: '#ffffff', desc: '빛의 신이 당신을 바라봅니다.\n\n빛으로 세상을 밝혀라.\n어둠을 쓸어버릴 빛을 숭배하라.' },
  { name: '어둠', img: 'dark', color: '#000000', desc: '어둠의 신이 당신을 바라봅니다.\n\n눈을 멀게 할 정도로 밝은 빛을 피해 그림자에 숨어라.\n그림자는 당신의 안식처가 될지니.' },
  { name: '정신', img: 'mind', color: '#c88afd', desc: '정신의 신이 당신을 바라봅니다.\n\n너는 이미 알고 있다.\n단지 기억하지 못할 뿐.' },
  { name: '번개', img: 'electro', color: '#fdfd8b', desc: '번개의 신이 당신을 바라봅니다.\n\n변화와 혁신의 번개가 내리칠지니.' },
  { name: '얼음', img: 'ice', color: '#8bfdf3', desc: '얼음의 신이 당신을 바라봅니다.\n\n시간조차 얼려버릴 추위가 당신을 지켜줄지니.\n이야기는 보존되고 영원하리.' },
  { name: '대지', img: 'earth', color: '#c1c7c1', desc: '대지의 신이 당신을 바라봅니다.\n\n대지. 지킨다.' },
  { name: '자연', img: 'nature', color: '#a7d8a0', desc: '자연의 신이 당신을 바라봅니다.\n\n나와 자연이 너를 지켜줄지니.\n혼돈을 야기하는 자는 고요한 안식만이 반길지니.' },
  { name: '바람', img: 'wind', color: '#5edeb1', desc: '바람의 신이 당신을 바라봅니다.\n\n당신의 이야기가 바람을 타고 세상 끝까지 가도록.' },
  { name: '물', img: 'water', color: '#32afe0', desc: '물의 신이 당신을 바라봅니다.\n\n흐르는 물과 같이 당신의 길이 순탄하기를…' },
  { name: '불', img: 'fire', color: '#ea4242', desc: '불의 신이 당신을 바라봅니다.\n\n세계에 따뜻함과 열정을 가져온 불을 섬겨라!' }
];
const GOD_FIRST = { name: '최초의 방문자', img: 'first', color: '#ffd76a', desc: '......\n\n모든 것의 시작이자 끝인 존재가 당신을 응시합니다.\n\n나를 찾아줬구나.', rare: true };
const GOD_VOID = { name: '공허', img: 'void', color: '#d8d8ec', rare: true,
  desc: '......\n\n끝없는 공허가 당신을 응시합니다.\n\n', glitchLine: "You've found wrong God" };

// 글자가 일그러지는 효과 (공허용, 열 때마다 모양이 달라져요)
function zalgo(text) {
  return [...text].map((c) => c === ' ' ? c : c + Array.from({ length: 6 }, () => String.fromCharCode(0x300 + (Math.random() * 0x70 | 0))).join('')).join('');
}
// 밝은 색 글자는 어두운 바탕에, 어두운 색 글자는 밝은 바탕에 올리기 위한 계산
function isDark(hex) {
  const n = parseInt(hex.slice(1), 16);
  return (0.3 * (n >> 16) + 0.59 * ((n >> 8) & 255) + 0.11 * (n & 255)) < 90;
}
function godImgFallback(img) { const s = document.createElement('span'); s.textContent = '✦'; img.replaceWith(s); }


// ===== 특별 연출 =====
const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function stopFx() {
  clearInterval(window._voidTimer);
  const altar = $('#altar');
  if (altar) altar.classList.remove('glitch', 'glitch-hit');
  document.querySelectorAll('.star-fx, .burst').forEach((n) => n.remove());
}

// 최초의 방문자: 금빛 파동 + ✦ 이 주변에 둥둥 떠다녀요
function startFirstFx(orb) {
  const ring = document.createElement('i');
  ring.className = 'burst';
  orb.appendChild(ring);
  if (calm()) return;
  const marks = ['✦', '✧', '✦', '⋆'];
  for (let n = 0; n < 16; n++) {
    const s = document.createElement('span');
    const ang = Math.random() * Math.PI * 2, rad = 85 + Math.random() * 90;
    s.className = 'star-fx';
    s.textContent = marks[n % marks.length];
    s.style.cssText = `--x:${Math.cos(ang) * rad | 0}px;--y:${Math.sin(ang) * rad | 0}px;--s:${12 + Math.random() * 16 | 0}px;--t:${3 + Math.random() * 4}s;animation-delay:${Math.random() * 3}s`;
    orb.appendChild(s);
  }
}

// 공허: 화면이 지직거리고, 이름과 글자가 흔들려요
function startVoidFx(altar, nameEl, lineEl) {
  if (calm()) return;
  altar.classList.add('glitch', 'glitch-hit');
  setTimeout(() => altar.classList.remove('glitch-hit'), 1300);
  const junk = '▒░▓#@%&0ㅁㅇㄱㅎ';
  window._voidTimer = setInterval(() => {
    if (!document.body.contains(altar)) return clearInterval(window._voidTimer);
    if (Math.random() < 0.5) lineEl.textContent = zalgo(GOD_VOID.glitchLine);
    nameEl.textContent = Math.random() < 0.2
      ? Array.from(GOD_VOID.name, () => junk[Math.random() * junk.length | 0]).join('')
      : GOD_VOID.name;
  }, 110);
}

PAGE_VIEWS['play/0'] = function (m, i) {
  view.innerHTML = `
    <div class="wrap page-top page slide-in">
      <p class="crumb"><a href="#/">홈</a> / <a href="#/${m.id}">${m.label}</a> / ${m.subs[i]}</p>
      <h1>${m.subs[i]}</h1>
      <p class="section-lead">조용히 기도를 올리면, 오늘 벨모리아에서 당신을 바라보는 신이 응답해요.</p>
      <section class="altar" id="altar">
        <p class="altar-orn" aria-hidden="true">˚｡⋆ ❦ ⋆｡˚</p>
        <div class="orb" id="orb"><span>?</span></div>
        <div class="altar-result" id="altar-result"><button type="button" class="pray-btn" id="pray">⋆ 기도 올리기 ⋆</button></div>
        <p class="altar-desc" id="altar-desc" aria-live="polite"></p>
        <p class="altar-orn" aria-hidden="true">˚｡⋆ 작은 기도가 길이 됩니다 ⋆｡˚</p>
      </section>
    </div>`;
  stopFx();
  $('#pray').addEventListener('click', pray);
};

function pray() {
  const orb = $('#orb'), result = $('#altar-result'), desc = $('#altar-desc'), altar = $('#altar');
  const btn = $('#pray');
  btn.disabled = true;
  btn.textContent = '신의 응답을 기다리는 중…';
  orb.className = 'orb waiting';
  orb.innerHTML = '<span>↻</span>';
  desc.textContent = '';
  altar.classList.remove('rare-first', 'rare-void');
  stopFx();

  setTimeout(() => {
    const roll = Math.random();
    // 확인용: 주소 뒤에 ?god=first 또는 ?god=void 를 붙이면 그 신이 바로 나와요
    const force = new URLSearchParams(location.search).get('god');
    const god = force === 'first' ? GOD_FIRST : force === 'void' ? GOD_VOID
      : roll < 0.005 ? GOD_FIRST : roll < 0.01 ? GOD_VOID : GODS[Math.floor(Math.random() * GODS.length)];
    orb.className = 'orb' + (god.rare ? ' legendary' : '');
    orb.style.setProperty('--g', god.color);
    orb.innerHTML = `<img src="${IMG}events/god-${god.img}.png" alt="${god.name}" onerror="godImgFallback(this)">`;
    if (god === GOD_FIRST) altar.classList.add('rare-first');
    if (god === GOD_VOID) altar.classList.add('rare-void');
    const chip = isDark(god.color) ? 'light' : 'dark';
    result.innerHTML = `<div class="god-name ${chip}" style="--g:${god.color}">${god.name}</div><button type="button" class="pray-btn again" id="again">다시 기도해보기</button>`;
    desc.textContent = god.desc;
    if (god === GOD_FIRST) startFirstFx(orb);
    if (god === GOD_VOID) {
      const line = document.createElement('span');
      line.textContent = zalgo(god.glitchLine);
      desc.appendChild(line);
      startVoidFx(altar, result.querySelector('.god-name'), line);
    }
    $('#again').addEventListener('click', () => PAGE_VIEWS['play/0'](find('play'), 0));
  }, 1800);
}