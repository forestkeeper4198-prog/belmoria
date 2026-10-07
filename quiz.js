/* ========================================
   quiz.js : 기사, 시인, 왕 테스트  (MBTI 같은 성향 테스트)
   그림: imgs/events/spk-knight.png, spk-poet.png, spk-king.png
   질문과 결과는 아래 QUESTIONS / RESULTS 에서 고쳐요
   ======================================== */

// ===== 결과: 캐릭터 설정 대신 "이런 성향의 영웅" 형태 =====
const RESULTS = {
  knight: {
    title: '기사', img: 'spk-knight', sub: '불굴한 맹세의 수호자',
    keywords: ['책임감', '헌신', '원칙', '묵묵함'],
    desc: '당신은 한 번 맺은 약속을 끝까지 지키는 수호자형 영웅이에요.\n말보다 행동으로 마음을 보여주고, 누군가를 지켜야 할 때 가장 단단해져요.',
    shine: '위기의 순간, 맨 앞에 서서 모두가 믿고 따를 길을 여는 때',
    caution: '자기 몸과 마음을 돌보는 일은 늘 뒤로 미루는 편이에요. 가끔은 지키는 사람도 쉬어야 해요.'
  },
  poet: {
    title: '시인', img: 'spk-poet', sub: '자유로운 이야기꾼',
    keywords: ['자유', '호기심', '관찰력', '유머'],
    desc: '당신은 가볍게 웃고 있지만 누구보다 많이 보고 느끼는 자유로운 영혼형 영웅이에요.\n사람과 풍경 속에서 이야기를 발견하고, 그것을 노래로 남기죠.',
    shine: '굳은 분위기를 한마디로 풀고, 모두가 놓친 단서를 짚어내는 때',
    caution: '가벼워 보이는 탓에 진심이 오해받기 쉬워요. 중요한 순간에는 진지한 얼굴도 보여주세요.'
  },
  king: {
    title: '왕', img: 'spk-king', sub: '품이 넓은 조율자',
    keywords: ['포용', '신중함', '배려', '따뜻함'],
    desc: '당신은 사람들을 한곳에 모으고 함께 나아갈 방향을 고민하는 따뜻한 지도자형 영웅이에요.\n스스로를 의심하는 순간에도 모두를 위한 선택을 놓지 않아요.',
    shine: '의견이 갈린 사람들 사이에서 접점을 찾아 모두를 하나로 묶는 때',
    caution: '모든 무게를 혼자 짊어지려는 경향이 있어요. 믿을 수 있는 동료에게 짐을 나눠 주세요.'
  }
};

// ===== 질문: [선택지 글, 성향] / 선택지 순서는 열 때마다 섞여요 =====
const QUESTIONS = [
  { q: '눈을 뜨면\n앞에 세 가지 상자가 있습니다.\n어떤 것을 열고 싶나요?',
    a: [['투박하지만 튼튼해 보이는 상자', 'knight'], ['열쇠 구멍이 수상하게 반짝이는 비밀스러운 상자', 'poet'], ['오래됐지만 귀중해 보이는 상자', 'king']] },
  { q: '산속에서 길을 잃었을 때,\n당신이 가장 의지하는 것은 무엇인가요?',
    a: [['무기와 몸에 밴 본능', 'knight'], ['숲속의 소리와 냄새', 'poet'], ['침착함과 지혜', 'king']] },
  { q: '전투 직전, 동료들의 표정이 굳어 있어요.\n당신은 어떻게 하나요?',
    a: [['말없이 가장 앞에 서서 길을 연다.', 'knight'], ['농담 한마디로 분위기를 풀어준다.', 'poet'], ['한 사람씩 눈을 맞추며 괜찮다고 다독인다.', 'king']] },
  { q: '큰 부상을 입었는데,\n아직 해야 할 일이 남았어요.',
    a: [['괜찮다고 말하고 끝까지 해낸다.', 'knight'], ['일단 쉬면서 더 쉬운 방법이 없을지 머리를 굴린다.', 'poet'], ['사정을 털어놓고 동료들과 일을 나눈다.', 'king']] },
  { q: '세상은 당신이 가장 사랑하는 가치를 비웃습니다.\n당신은 어떻게 반응합니까?',
    a: [['세상이 비웃더라도\n꿋꿋하게 신념을 지킨다.', 'knight'], ['세상의 조롱을 웃음으로 승화시킨다.', 'poet'], ['잘못된 길을 가고 있는 건 아닐까\n걱정하지만 희망을 품는다.', 'king']] },
  { q: '여정 중 동료들끼리 의견이 크게 갈렸어요.',
    a: [['옳다고 믿는 원칙을 정중하지만 굽히지 않고 말한다.', 'knight'], ['무거워지기 전에 재치 있게 화제를 돌린다.', 'poet'], ['양쪽 이야기를 모두 듣고 접점을 찾아 조율한다.', 'king']] },
  { q: '갑자기 큰 힘과 책임이 당신에게 주어졌습니다.',
    a: [['맡은 이상 끝까지 지키겠다고 맹세한다.', 'knight'], ['부담스럽지만 일단 부딪히며 요령을 터득한다.', 'poet'], ['잘할 수 있을지 걱정되지만 사람들을 믿고 나아간다.', 'king']] },
  { q: '오랜만에 아무 일정도 없는 하루가 생겼어요.',
    a: [['장비를 손질하고 내일을 위해 몸을 단련한다.', 'knight'], ['발길 닿는 대로 걸으며 노래하고 구경한다.', 'poet'], ['따뜻한 차를 마시며 지난 일을 정리하고 앞날을 구상한다.', 'king']] },
  { q: '당신이 인생에서 가장 두려워하는 것은 무엇입니까?',
    a: [['지키지 못한 채 잃어버리는 것', 'knight'], ['무의미하게 흘러가는 삶', 'poet'], ['고립과 외로움', 'king']] },
  { q: '먼 훗날, 당신은 벨모리아의 역사에 어떻게 남고 싶나요?',
    a: [['모두를 위해 기꺼이 희생했던\n용감한 자로', 'knight'], ['아름다운 이야기와 노래를 남긴 자로', 'poet'], ['지혜롭고 공정하게 세계를\n이끌었던 자로', 'king']] }
];

let quizStep = 0, quizPicks = [];
const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const br = (t) => t.replace(/\n/g, '<br>');
const heroImg = (key) => `<img src="${IMG}events/${RESULTS[key].img}.png" alt="${RESULTS[key].title}" onerror="godImgFallback(this)">`;

PAGE_VIEWS['play/1'] = function (m, i) {
  quizStep = 0; quizPicks = [];
  view.innerHTML = `
    <div class="wrap page-top page slide-in">
      <p class="crumb"><a href="#/">홈</a> / <a href="#/${m.id}">${m.label}</a> / ${m.subs[i]}</p>
      <h1>${m.subs[i]}</h1>
      <p class="section-lead">${QUESTIONS.length}번의 선택으로, 당신 안의 영웅을 알아봐요.</p>
      <section class="quiz" id="quiz"></section>
    </div>`;
  quizIntro();
};

function quizIntro() {
  $('#quiz').innerHTML = `
    <div class="quiz-screen">
      <p class="altar-orn" aria-hidden="true">˚｡⋆ ❦ ⋆｡˚</p>
      <h2 class="quiz-title">당신의 길은...<br>기사, 시인, 왕</h2>
      <p class="quiz-sub">울림을 따라 앞으로 나아가세요.<br>당신은 어떤 영웅의 성향을 지녔을까요?</p>
      <div class="trio">${['knight', 'poet', 'king'].map((k, n) => `<span style="animation-delay:${n * .5}s">${heroImg(k)}</span>`).join('')}</div>
      <button type="button" class="pray-btn" id="quiz-start">시작하기</button>
    </div>`;
  $('#quiz-start').addEventListener('click', quizAsk);
}

function quizAsk() {
  const cur = QUESTIONS[quizStep];
  const opts = shuffle(cur.a);
  $('#quiz').innerHTML = `
    <div class="quiz-screen slide-in">
      <p class="quiz-count">${quizStep + 1} / ${QUESTIONS.length}</p>
      <div class="quiz-bar" aria-hidden="true"><i style="width:${quizStep / QUESTIONS.length * 100}%"></i></div>
      <h2 class="quiz-q">${br(cur.q)}</h2>
      <div class="quiz-opts">${opts.map((o, n) => `<button type="button" class="quiz-opt" data-n="${n}">${br(o[0])}</button>`).join('')}</div>
    </div>`;
  document.querySelectorAll('.quiz-opt').forEach((b) => b.addEventListener('click', () => {
    quizPicks.push(opts[+b.dataset.n][1]);
    if (++quizStep < QUESTIONS.length) quizAsk(); else quizResult();
  }));
}

function quizResult() {
  const score = { knight: 0, poet: 0, king: 0 };
  quizPicks.forEach((p) => score[p]++);
  const top = Math.max(...Object.values(score));
  const key = [...quizPicks].reverse().find((p) => score[p] === top); // 동점이면 마지막 선택에 가까운 쪽
  const r = RESULTS[key];
  const total = quizPicks.length;
  $('#quiz').innerHTML = `
    <div class="quiz-screen slide-in">
      <p class="altar-orn" aria-hidden="true">˚｡⋆ 당신 안의 영웅 ⋆｡˚</p>
      <div class="result-pic">${heroImg(key)}</div>
      <h2 class="quiz-title">${r.title}</h2>
      <p class="quiz-sub">${r.sub}</p>
      <ul class="chips">${r.keywords.map((c) => `<li>#${c}</li>`).join('')}</ul>
      <p class="result-desc">${r.desc}</p>
      <dl class="likes"><dt>✦ 빛나는 순간</dt><dd>${r.shine}</dd><dt>✧ 조심할 점</dt><dd>${r.caution}</dd></dl>
      <div class="meter">${['knight', 'poet', 'king'].map((k) => `<div class="${k === key ? 'top' : ''}"><span>${RESULTS[k].title}</span><i><b style="width:${Math.round(score[k] / total * 100)}%"></b></i><em>${Math.round(score[k] / total * 100)}%</em></div>`).join('')}</div>
      <button type="button" class="pray-btn again" id="quiz-again">다시 하기</button>
    </div>`;
  $('#quiz-again').addEventListener('click', () => PAGE_VIEWS['play/1'](find('play'), 1));
}