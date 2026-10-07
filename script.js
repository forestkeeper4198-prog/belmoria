/* ========================================
   벨모리아 script.js  (뼈대 / 홈 / 메뉴)
   ======================================== */

// 이미지 폴더 위치 (바꾸고 싶으면 이 한 줄만 고치세요)
const IMG = 'imgs/';

// ===== 메뉴 데이터: 분류 추가·이름 변경은 여기서 =====
const MENU = [
  { id: 'world', icon: '✦',      label: '세계관',    desc: '벨모리아의 기본 지식과 역사',  subs: ['방문자 기본 지식', '세계의 근원', '시간체계', '언어', '역사'] },
  { id: 'region', icon: '⚜',     label: '지역',      desc: '왕국, 마을, 세력과 파벌',      subs: ['지리 지역', '세력과 파벌'] },
  { id: 'races', icon: '❀',      label: '종족',      desc: '일곱 갈래의 종족 도감',        subs: ['인간형', '괴수•짐승형', '정령•자연계', '변이•특수', '해양', '언데드•저승계', '초자연•신성/타락'] },
  { id: 'characters', icon: '❦', label: '캐릭터',    desc: '벨모리아의 인물들',            subs: ['캐릭터'] },
  { id: 'jobs', icon: '✠',       label: '직업',      desc: '전투 방식과 역할군',           subs: ['직업'] },
  { id: 'creatures', icon: '☘',  label: '생물 도감', desc: '마물과 동식물',                subs: ['마물', '동식물'] },
  { id: 'resources', icon: '❖',  label: '자원 도감', desc: '광물과 음식',                  subs: ['광물', '음식'] },
  { id: 'items', icon: '✧',      label: '아이템',    desc: '무기, 도구, 장비, 마법',       subs: ['무기•도구•장비', '마법'] },
  { id: 'play', icon: '❁',       label: '즐길거리',  desc: '신의 축복, 성향 테스트',       subs: ['오늘의 신 축복', '기사, 시인, 왕 테스트'] },
  { id: 'gallery', icon: '✿',    label: '아트 갤러리', desc: '컨셉 아트와 일러스트',     subs: ['컨셉 아트', '일러스트', '스케치&낙서', '게임 아트'] },
  { id: 'game', icon: '❂',       label: '게임 관련',   desc: '소식, 가이드, 다운로드',   subs: ['소식', '가이드', '다운로드'] }
];
// 트럼프 카드 숫자와 무늬 (순서대로 분류에 붙어요)
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J'];
const SUITS = ['♣\uFE0E', '♥\uFE0E', '♠\uFE0E', '♦\uFE0E'];
const PC_MAIN = ['world', 'races', 'characters', 'creatures', 'play']; // PC 메뉴바에 바로 보일 분류


// ===== 홈 소개글 (액자가 그려진 그림을 imgs/home/ 에 넣고 파일명만 적으세요. 장 수는 자유) =====
const HOME_LEAD = `상상과 이상이 현실이 될 수 있는 세계.
이 사이트는 벨모리아에 대한 정보와 더 많은 것들, 심지어 비밀까지도 정리되어 담겨 있습니다.

당신은 어디까지 알아낼 수 있을까요?`;

// ===== 홈 소개글 (빈 줄 = 문단 나눔, 줄바꿈은 쓴 그대로 보여요) =====
const HOME_STORIES = [
  { title: '자기소개', imgs: ['home/intro-1.png', 'home/intro-2.png'],
    text: `안녕하세요. 벨모리아 세계관을 만든 장본인인 포레스트키퍼(Forestkeeper)라고 합니다!
전 어느 창작자분들과 별 다를 것이 없이 창작을 좋아하는 또 다른 창작자랍니다.
세계관을 만들고, 그림을 그리며 다른 사람들에게 제가 상상해온 풍경과 인물들을 보여주고,
글을 씀으로써 마치 살아있는 듯한 느낌이 들게 하는 것이 저의 취미이자 낙인 그저 평범한 창작자 입니다.

현재 벨모리아를 위주로 작업하고 있으며, 벨모리아 게임화를 목표로 하고 있습니다.
타 SNS에서 열심히 활동하고 있으니 잠깐 놀러오시는 것도 추천드립니다.
또한, 디스코드 서버도 존재하니, 실시간 작업 현장과 소통을 원하시는 분들이 있다면 참여하시는 것도 추천드립니다!` },
  { title: '벨모리아, 어떻게 탄생했는가?', imgs: ['home/origin-1.png'],
    text: `벨모리아.
이 꿈만 같은 세계를 만든 계기는 다양한 이유가 결합해서인 것 같네요.
워낙 판타지 세계관을 좋아했거든요.
가장 큰 계기는 외국의 "르네상스 페어"라는 축제에 대한 영상을 보고난 후에요.
판타지가 현실이 된 것 같은 건물과 분위기, 그리고 사람들이 그에 맞게 차려입고 롤플레잉을 하며 상호작용하는 그 모습이 너무나도 멋져보이고 꿈만 같아 보였어요.
저는 그런 영상들을 어느 순간부터 봐오고 동경해 오며,
"르네상스 페어와 같은 축제를 인터넷에선 즐길 수 없을까?"라는 생각을 가지게 되었어요.
그렇게 저는 그 포근하고도 마음을 울리는 축제에 의해 영감을 받아, 벨모리아를 만들기 시작했어요.` }
];

// ===== 세부 페이지 글 (주소 "분류아이디/번호" 가 키. 번호는 0부터) =====
// 한 페이지에 여러 글을 넣으려면 sections 안에 { title, text } 를 계속 추가하세요.
const CONTENT = {
  'world/0': { tabs: true, sections: [
    { title: '[벨모리아]란?', text: `[벨모리아]는 현실의 삶에 지쳐버린 이들에게 나타나는 또 하나의 세계이자, 대륙 전체를 뜻하는 이름이다.
우리가 흔히 떠올리는 판타지 세계와 닮았지만, 단순히 존재하는 판타지 세계에서 그치지 않는다.

[벨모리아]는 누구나 마음껏 시간을 보내며, 자신이 원하는 삶을 누릴 수 있는 자유로운 안식처다.

여기에서는 현실과 다르게 아침과 밤의 순환, 계절의 변화, 날씨와 시간에 얽매이지 않고 마음껏 움직일 수 있다.
탐험을 원한다면 대지를 돌아다니며 숨겨진 유적과 비밀을 발견할 수 있고, 유유자적한 삶을 원한다면 자신만의 작은 마을이나 숲속 오두막에서 느릿느릿 하루를 즐길 수도 있다.
누군가는 고대의 지혜를 탐구하고, 누군가는 숲속에서 햇살과 자연의 소리를 즐기며 여유로운 하루를 보내고, 또 누군가는 드넓은 평원 위를 달리며 바람과 하나가 된다.
이곳에서는 현실에서 겪는 스트레스, 책임, 불안, 경쟁은 모두 잊고, 단순히 존재하는 모든 즐거움을 만끽할 수 있다.

[벨모리아]는 단순한 환상의 세계가 아니다.
이곳은 방문자들의 마음속 욕망과 이상이 투영되는 거울이자 캔버스이며, 누구에게나 자신만의 삶을 살아가고 즐길 수 있는 기회를 제공하는 세계다.

[벨모리아]는 단순히 꿈과 휴식을 제공하는 세계에 머물지 않는다.
역사가 있는 대륙이며, 다양한 지형과 생명, 문명과 토착민이 공존한다.
깊은 숲과 신비로운 호수, 광활한 평원과 고대 유적, 바람과 파도가 춤추는 바다와 자유 도시까지, 대륙 곳곳에는 수많은 이야기와 모험이 숨어 있다.
초대받은 방문자들은 이 대륙 안에서 다양한 삶을 선택할 수 있다.

[벨모리아]는 단순한 안식처일 뿐만 아니라 모험의 무대이며, 이곳에서 어떤 삶을 살지는 오직 방문자 자신의 선택과 마음속 바람에 달려 있다.` },
    { title: `[벨모리아]로 넘어가는 방법`, text: `### 벨모리아의 초대장

[벨모리아]로 넘어가는 방법은 특별하다.
현실에서 지친 당신 앞에 불현듯 나타나는 것은 바로 의문의 열쇠.
그 열쇠는 단순한 도구가 아니라, [벨모리아] 자체가 내미는 초대장이자, 현실과 이상 사이를 연결하는 매개체이다.

[IMG:common/key.png|Belmoria key]

이 열쇠는 현실 세계에선 평범한 열쇠에 불과하지만 벨모리아로 넘어가게 되면 그 모양은 바뀌게 된다.
각 열쇠는 고유의 모양을 가지고 있다.
어떤 열쇠는 오래된 은빛 장식으로 이루어져 있으며, 마치 고대의 유물을 떠올리게 하고, 또 어떤 열쇠는 반짝이는 보석이 박혀 있어 값비산 보물 상자를 떠올리게 한다.
모양은 제각각이지만, 본질은 동일하다.
바로 “[벨모리아]로 넘어갈 수 있는 힘”을 지니고 있다는 점이다.

모두가 잠든 밤, 열쇠를 가진 자는 어느 문 앞에서든 눈에 보이지 않던 열쇠 구멍이 나타나게 된다.
그 문을 열고 발을 들이면, [벨모리아] 세계로 넘어가게 된다.
반대로 현실로 돌아가고 싶다면, 열쇠를 쥐고 현실 속 자신의 모습을 떠올리면 된다.
그러면 어느새 침대 위에 누워있는 자신을 발견하게 된다.

[벨모리아]와 현실 사이의 경계는 열쇠 하나로 언제든 열리고 닫힐 수 있는 것이다.
열쇠는 [벨모리아]가 스스로 주기도 하고, 세계의 창조자, 또는 신이라 불리는 존재가 선택적으로 내어주기도 한다.
때때로 이 열쇠는 단순한 입장권, 초대장 이상의 의미를 가지며, 열쇠의 모양이나 성격에 따라 벨모리아에서 경험하게 되는 삶의 색채가 살짝 달라질 수도 있다.
또한, 이 열쇠는 방문자가 벨모리아의 모습을 정하게 되면 몸 어딘가에 장식으로써 함께하기에 방문자들은 서로를 구분하는게 가능하다.`, secret: `경고:  하지만 만일, 벨모리아에서 열쇠를 잃어버리거나 현실 속 자신의 모습을 떠올리지 못하면 현실로 다시는 넘어갈 수 없게 된다.
현실 속 자신의 모습을 떠올리지 못한다면, 열쇠의 형태는 시간이 지날 수록 서서히 사라진다.
열쇠가 완전히 사라지게 된다면, 영원히 벨모리아의 주민으로 남게 된다.
또한 열쇠는 쥐고 있는 사람이 주인이라 인식하기에, 다른 이에게 빼았기면 열쇠를 다시 되찾을 수 없다.
이런 방법으로 들어온 이들은 침입자 또는 불청객이라 불린다.
이들은 들키지 않는 한 벨모리아를 자유롭게 오갈 수 있다.` },
    { title: `[벨모리아]의 시작`, text: `### 시작점은?

[벨모리아]에 처음 초대된 사람들은 누구나 대륙 한가운데 있는 세계수 앞에서 여정을 시작하게 된다.
세계수는 단순한 나무가 아니라, 벨모리아의 상징이자 평화의 상징하기도 한다.
그 가지와 뿌리는 대륙 전체로 뻗어 있으며, 땅과 하늘을 연결한다.

처음 다른 세계로 넘어왔을 때, 사람들은 혼란스럽기 마련이다.
공간의 구조, 주변 환경, 자신이 처한 상황 모두 현실과 달라서 방향감각과 마음이 흔들리게 된다.
게다가 벨모리아에서의 모습은 아직 정해지지 않은 상태이므로, 현실의 자신을 그대로 갖고 있는 상황에서는 자유롭게 움직이기 어렵다.
그런 이유로, 세계수 앞은 안전하고 이해하기 쉬운 출발점으로서 기능한다.

여기서 방문자는 안내자를 만난다.
안내자는 세계수 주변에서 그들을 맞이하며, 벨모리아에서의 새로운 삶과 자신의 모습을 선택하도록 안내한다.
만약 아직 어느 곳을 여행 할지 정하지 못한 방문자들을 위해 고민할 시간을 충분히 주며 같이 생활할 수 있도록 하기도 한다.

세계수 앞에서 눈을 뜨는 동안, 방문자는 현실에서의 모습과 기억을 가진 채로, 마음속 깊이 원하는 이상적 자아를 조금씩 떠올리며 새로운 정체성을 준비하게 된다.

세계수는 단순히 ‘시작점’ 이상의 의미를 가진다.
안정감을 제공하고 안내자를 만날 수 있는 장소로서, 방문자가 벨모리아에서 안전하게 자신만의 여정을 시작하도록 돕는다.
그리고 그곳에서 자신이 되고 싶은 모습과 새로운 삶의 방향을 선택한 순간, 벨모리아의 대륙 속으로 자연스럽게 발을 내딛게 된다.

### 다른 세계의 나

[벨모리아]에서의 당신은 현실에서의 당신과는 다른 별개의 존재다.
이곳에서의 모습은 단순한 분신이 아니라, 당신 마음 깊은 곳에서 그리워하던 이상적 자아, 혹은 현실에서 감히 펼칠 수 없었던 욕망이 투영된 존재다.

종족, 외형, 능력, 권력 등—모든 것이 마음속의 갈망에 따라 결정된다.
누군가는 전설적인 검술을 익힌 전사가 되고, 누군가는 하늘을 나는 존재가 되며, 또 다른 누군가는 바람과 함께 흐르는 자유로운 여행자가 된다.

하지만 [벨모리아]의 자유에는 책임이 따른다.
이곳에는 최소한의 질서가 있으며, 그것을 깨뜨리는 자는 추방당할 수 있다.
질서를 판단하고 결정하는 기준은 창조자에게 달려 있지만, [벨모리아] 자체 또한 살아있는 듯한 의지를 가지기에, 때때로 예측할 수 없는 반응을 보이기도 한다.
그럼에도 불구하고, 이 세계에서 진정한 자유와 즐거움을 경험하려면 자신만의 방식으로 질서와 조화를 이루어야 한다.` },
    { title: `[벨모리아]의 화폐`, text: `[벨모리아]의 경제와 사회를 이해하려면, 무엇보다 화폐의 존재와 역할을 아는 것이 중요하다. 이곳의 화폐는 단순한 거래 수단을 넘어, [벨모리아]의 문화와 가치, 마법적 질서를 반영하는 상징적 요소다. 주요 화폐는 크게 세 가지로 나뉜다. 금화, 마정석 광물, 그리고 가공된 마정석이다.

### 금화

[IMG:common/coin.png|Belmoria coin]

금화는 [벨모리아]에서 가장 흔하게 쓰이는 화폐이며, 모든 이들의 일상과 모험, 상업을 연결하는 기본 도구다.

작은 마을의 장터에서 식료품을 사거나, 여행을 떠나는 모험가가 장비를 구매할 때, 혹은 여관에 머물며 숙박료를 지불할 때 금화가 쓰인다.
금화는 단순한 금속 동전이 아니다. [벨모리아] 장인들은 화폐조차 예술로 승화시켰다.
금화의 중앙에는 해와 달이 하나로 어우러진 문양이 장식되어 있다.
낮과 밤, 현실과 이상, 삶과 모험—이 모든 것의 균형과 조화를 나타내는 상징이다.
동전의 가장자리마다 정교한 문양과 장식을 넣어, 단순한 화폐를 넘어 문화적 자산으로서의 가치도 지닌다.

특히, [벨모리아] 금화는 가벼움이 큰 장점이다.
현실의 금보다 훨씬 가볍게 제작되어, 모험가나 상인이 많은 양을 소지해도 부담이 없다.
장인들은 이를 위해 특별한 합금과 정교한 제작 방식을 적용했다.
덕분에 금화는 실용성과 예술성, 두 가지를 동시에 갖춘 [벨모리아]의 대표 화폐가 되었다.

금화는 단순한 거래 수단을 넘어, [벨모리아]의 사회적 신뢰와 연결을 상징하기도 한다.
상인이 손님에게 금화를 받는 순간, 그 자체로 신뢰와 약속이 성립되며, 모험가는 금화를 통해 대륙 곳곳에서 더 많은 이들과 연결을 형성할 수 있다.

### 마정석 광물

[IMG:common/mineral.png|Belmoria mineral]

금화보다 훨씬 희귀하고 고급스러운 화폐가 바로 마정석 광물이다.
마정석 광물은 단순한 광물이 아니라, 순수한 마력과 원소의 기운이 함께 담긴 자연의 결정체다.
그 희귀성과 강력함 때문에, 마정석 광물은 [벨모리아] 대륙에서 가장 높은 가치의 화폐중 하나로 여겨진다.

마정석 광물은 발견조차 어렵다. 산속 깊은 동굴이나 오래된 유적, 혹은 자연의 기운이 강한 성소에서 매우 낮은 확률로 나타난다.
크기가 작아도 강력한 가치를 지니며, 크기가 클수록 그 가치와 마법적 잠재력도 함께 상승한다.
금화 수백만 개와 맞먹는 가치를 지니기 때문에, 마정석 하나만으로도 충분히 큰 거래와 거래자 간 신뢰를 상징할 수 있다.

그러나 마정석은 단순히 귀한 화폐에 머무르지 않는다. 광물끼리 강한 충격을 받으면 불이 붙거나 폭발할 수 있는 불안정한 성질을 지니고 있으며, 이는 일반 마석과 유사하다.
다만 마정석에는 원소가 함께 담겨 있기 때문에, 폭발할 경우 그 위력은 일반 마석보다 훨씬 더 크고 예측 불가능하다.

예를 들어, 불 속성이 깃든 마정석은 폭발 시 거대한 화염을 방출할 수 있고, 물 속성이 깃든 마정석은 홍수 같은 파동을 일으킬 수 있다.
이 때문에 마정석을 대량으로 다루는 것은 위험하며, 보관과 운송에는 특별한 관리가 필요하다.

마정석 광물 하나의 가치는 금화 약100만개와도 같다 한다.

### 가공된 마정석

[IMG:common/gem.png|Belmoria gem]

마정석 광물보다 더 희귀하고, 훨씬 높은 가치를 지닌 화폐가 가공된 마정석이다.

이 마정석은 단순한 원석을 다듬은 것이 아니라, 장인의 기술과 마법적 노하우를 결합해 만들어진 예술품이자 보물이다.
제작 과정은 극도로 어렵고 시간이 많이 들며, 오직 뛰어난 장인만이 다룰 수 있다.

가공된 마정석은 대부분 화폐로 직접 사용되지는 않는다.
그 값어치가 매우 높아 거래보다 강력한 장비 제작, 특수 마법 도구 제작, 고급 강화 재료로 활용된다.
작은 조각 하나만으로도 경제적 가치, 마법적 잠재력, 사회적 권위까지 모두 상징하기 때문에, 소유자에게 부와 힘, 그리고 사회적 신뢰를 동시에 부여한다.

가공된 마정석은 [벨모리아]에서 권위와 영향력의 상징이기도 하다.
누군가가 이를 소유하고 있다는 사실만으로, 주변 사람들은 그 존재를 존중하고, 때로는 두려움을 느끼기도 한다.

가공된 마정석은 또 하나의 특징을 지닌다. 일반 마석과 마찬가지로 사용할수록 내부에 저장된 마력이 소진된다.
그러나 마석은 마력이 소진되면 다시 충전할 수 있어도 본래의 성질이 훼손되거나, 다른 원소가 섞여 불안정해질 위험이 크다.
반면, 마정석은 이미 특정 원소와 완벽히 결합한 상태이기에 마력을 보충하더라도 혼잡이나 부담이 발생하지 않는다.
즉, 안정적으로 재충전이 가능하며 장기간 사용하기에도 적합하다.

이 화폐는 단순한 거래 수단이 아니라, [벨모리아] 사회에서의 지위와 힘을 증명하는 도구이기도 하다.` }
  ] },
  'world/1': { tabs: true, sections: [
    { title: `창조 신화`, text: `### 어느 한 방문자의 이야기

이 이야기는 내가 처음 이 세계에 발을 들였을 때의 이야기다.

그곳은 마치 세상의 어떤 손길도 닿지 않은 눈부시게 하얀 캔버스 같았다.

하얗고 공허했다. 

손에 닿을 듯 가까웠지만, 끝없이 멀게만 느껴졌다.

이 세계는 그런 곳이었다.

그래서 나는 펜을 들었다.

아무것도 없는 공간에 하나  둘 선을 그으며, 세계를 나만의 색으로 물들이기 시작했다.

색이 번지고, 선이 생기고, 형태가 자리 잡았다. 

순백의 캔버스는 어느새 하나의 대륙이 되었고, 나라가 되었으며, 

마지막에는 하나의 살아 숨 쉬는 세계가 되었다.

이 얼마나 아름다운 세계인가.

희망과 절망, 기쁨과 슬픔, 사랑과 상실. 

모든 감정들이 겹겹이 쌓여 조화를 이루고 있었다.

웃음소리, 산들바람의 노래, 새하얗게 쌓이는 눈. 

이 세계는 살아 있다.

그리고 그 세계에서, 나는 첫 번째 방문자가 되었다.

처음으로 이곳에 이야기를 남긴 존재.

창조자이자, 목격자. 이 세계의 시작이 된 자.`},
 { title: `원소의 계보`, text: `### <벨모리아>의 원소

공허[Void]

- 우주 (Cosmos)
    
    
    - 해(Sun)
        
        
        - 빛(Light)
            
            
            근본 원소들
            
            - - 불(Fire)
            - - 물(Water)
            - - 바람(Wind)
            - - 대지(Earth)
            - - 자연(Nature)
            - - 번개(Lightning)
        
    
    - 달(Moon)
        
        
        - 어둠(Darkness)
        - 정신(Mind/Spirit)
        - 별(Star)
    
    - 시간(Time)
    
    - 공간(Space)`},
 { title: `벨모리아의 신들`, text: `### 고대 신들의 이야기

최초의 방문자가 세계를 창조한 이후, 최초의 방문자는 세계가 질서 있게 돌아가기 위해 최초의 고대 신들을 만들어 냈다.
처음으로 세상의 발을 디딘 신은 **우주의 신**이었다.
세계를 안전하게 지키고 세계가 순환의 첫 걸음을 걸을 수 있도록, 자신의 아이들을 만들었다.
시간과 공간이 그 뒤를 따랐다.
시간의 신은 태엽을 이용해 시간의 흐름으로 규칙을 만들었으며 시간이라는 개념을 만들었다.
공간의 신은 존재할 것들의 공간을 마련하여 공간이라는 개념을 만들었다.

처음 스스로 세계에서 만들어진 신들은 태초의 빛과 태초의 어둠이었다.
**빛**은 세상에 아침과 빛의 따스함을 가져왔으며 생명의 원천이 되었다.
**어둠**은 세상에 밤과 어둠의 다정함을 가져왔으며 죽음의 원천이 되었다.
이 둘은 서로 없어서는 안되는 존재로 서로의 버팀목이자 지지자로서 균형을 이루었다.
이후엔 태초의 여덟 원소들에서 신들이 탄생했다.

태초의 불, 태초의 물, 태초의 바람, 태초의 대지, 태초의 자연, 태초의 얼음, 태초의 번개, 그리고 태초의 정신.
이들을 순수한 태초의 원소에서 태어난 존재들이었으며 
**태초의 불**은 대륙에 따뜻함과 열정을 가져왔으며, 생명에 활기를 불어넣었다.
**태초의 물**은 비와 균형을 다스리며, 생명체가 성장할 수 있는 환경을 만들어 냈다.
**태초의 바람**은 노래와 소리를 세상에 퍼뜨려, 이야기와 기억이 먼 곳까지 전해지도록 했다.
**태초의 대지**는 광물과 산맥을 만들어 내며, 생명체가 뿌리 내릴 터전을 제공했다.
**태초의 자연**은 숲과 초원, 그리고 생명이 싹트는 첫걸음을 인도했다.
**태초의 얼음**은 모든 열과 혼란을 잠재우며, 영원한 이야기, 냉정한 질서를 상징했다.
**태초의 번개**는 하늘을 가르고 비를 불러오며, 변화와 혁신의 힘을 상징했다.
**태초의 정신**은 문명과 발전, 지혜와 진화를 이끌어, 세계가 단순한 생명의 집합을 넘어 이야기와 역사로 이어지게 했다.

이 여덟 신들은 서로의 영역에서 조화를 이루었으나, 때로는 충돌과 갈등을 빚었다.
빛과 어둠은 낮과 밤의 순환을 통해 세계의 시간을 정립했고, 여덟 신들의 갈등을 막고자 중재자의 역할을 자처했다.
불과 얼음은 대립 속에서 균형을 찾았고, 대지와 자연은 태어날 생명을 위해 조화를 이루었다.
바람은 세상에 숨결을 불어넣었으며, 물은 그 숨결을 따라 흐르며 생명을 적셨다.
번개는 하늘을 갈라 세상에 변화를 알렸고, 정신은 그 모든 것에 의미와 의지를 부여했다.
그리하여 세계는 태초의 원소들이 서로 맞물린 거대한 고리 위에서 움직이기 시작했다.

그 고리는 지금도 이어져, 생명의 숨결과 죽음의 고요 속에서 조용히 세계를 지탱하고 있다.`},
 { title: `일곱 악마들`, text: `### 고대 악마들의 이야기

고대의 일곱 악마들.
그들은 인간이 가질 수 있는 최초의 일곱 가지 죄악에서 태어났다.
강력한 원한과 증오, 뒤틀린 사념들.
셀 수 없이 쌓인 부정적인 감정이 어떠한 힘과 결합해, 마침내 존재해서는 안 될 것들을 만들어냈다.
오만, 시기, 분노, 나태, 탐욕, 식탐, 색욕.
그 일곱 죄악이 형체를 얻은 존재들.
그들이 처음 모습을 드러냈을 때, 세상은 **‘죄악의 시대’**라 불렸다.
처음으로 악마와 죄악이 이름을 가지게 된 시대이기도 하다.
죄는 하늘과 땅을 뒤덮었고, 전쟁과 피, 그리고 끝없는 학살이 세계를 물들였다.
세계는 절망에 빠졌으며 찬란했던 빛은 죽어가기 시작했다.

절망의 끝에 다다랐을 때, 
인간과 다른 종족들은 악마들을 멸할 방법을 모색하기 시작했다.

“악을 완전히 멸 할 수 없다면, 봉인하라.”

그들은 간절히 빌었다. 
이 고통을 멈출 방법을, 죄악을 물리칠 방법을.

신들은 그들의 답에 응했고, 힘을 내어줬다.
그렇게 신들에게 받은 힘에 도움과 일곱 종족의 희생으로 
일곱 악마를 깊은 던전에 봉인할 수 있었다.

하지만 그들은 지금도 어둠 속에서 자유를 갈망하며 풀려나를 기다린다.`}
      
  ] }
}; 

const paras = (t) => t.split('\n').map((l) => l.trim()).join('\n').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean).map((p) => {
  if (p.startsWith('### ')) return `<h3 class="doc-h">${esc(p.slice(4))}</h3>`;
  const im = p.match(/^\[IMG:([^|\]]+)\|?([^\]]*)\]$/);
  if (im) return `<figure class="doc-fig"><img src="${IMG}${im[1]}" alt="${esc(im[2])}" loading="lazy" onerror="this.closest('figure').remove()"></figure>`;
  return `<p class="txt">${esc(p)}</p>`;
}).join('');

// 글 한 편, 그리고 여러 편이 있으면 위쪽 탭으로 나눠 보여줘요
function docHtml(doc) {
  const tabs = doc.tabs && doc.sections.length > 1;
  const secs = doc.sections.map((sec, n) => `
    <section class="doc" data-tab="${n}"${tabs && n ? ' hidden' : ''}>
      <h2>${esc(sec.title)}</h2>${paras(sec.text)}
      ${sec.secret ? `<p class="secret">${esc(sec.secret.split('\n').map((l) => l.trim()).join('\n'))}</p>` : ''}
    </section>`).join('');
  const bar = tabs ? `<div class="doc-tabs" role="tablist">${doc.sections.map((sec, n) => `<button type="button" role="tab" class="doc-tab${n ? '' : ' on'}" data-tab="${n}" aria-selected="${n ? 'false' : 'true'}">${esc(sec.title.replace(/[\[\]]/g, ''))}</button>`).join('')}</div>` : '';
  return bar + secs;
}
function bindDocTabs() {
  const tabs = document.querySelectorAll('.doc-tab');
  tabs.forEach((t) => t.addEventListener('click', () => {
    tabs.forEach((x) => { x.classList.toggle('on', x === t); x.setAttribute('aria-selected', x === t); });
    document.querySelectorAll('section.doc').forEach((d) => { d.hidden = d.dataset.tab !== t.dataset.tab; });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));
}


// ===== 의뢰 게시판 쪽지 (홈) =====
const BOARD = [
  { tag: '오늘의 기도', title: '오늘의 신 축복', text: '기도를 올리고 오늘 나를 바라보는 신을 만나보세요.', href: '#/play/0', r: -2.5 },
  { tag: '나의 길 찾기', title: '기사, 시인, 왕', text: '다섯 번의 선택으로 당신이 걸을 길을 알아봅니다.', href: '#/play/1', r: 1.8 },
  { tag: '첫 방문', title: '벨모리아란?', text: '이곳이 어떤 세계인지 가장 먼저 읽어보세요.', href: '#/world/0', r: -1.2 },
  { tag: '종족 탐방', title: '종족을 만나다', text: '일곱 갈래의 종족 기록을 펼쳐보세요.', href: '#/races', r: 2.4 }
];

const $ = (s, r = document) => r.querySelector(s);
const view = $('#view');
const find = (id) => MENU.find((m) => m.id === id);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ===== 화면 만들기 =====

// ===== 기록 둘러보기 모양: 'start' = 큰 카드 4장 + 작은 타일 / 'trump' = 트럼프 카드 =====
const HOME_LAYOUT = 'start';
const BIG_IDS = ['world', 'races', 'characters', 'creatures'];

function startCards() {
  const big = BIG_IDS.map(find);
  const small = MENU.filter((m) => !BIG_IDS.includes(m.id));
  return `
    <p class="start-line">˚₊‧ 처음 오셨나요? <a href="#/world/0">벨모리아란? 먼저 읽어보기 →</a> ‧₊˚</p>
    <div class="big-grid">
      ${big.map((m) => `<a class="big-card" href="#/${m.id}">
        <div class="big-img"><i aria-hidden="true">${m.icon}</i><img src="${IMG}home/cat-${m.id}.jpg" alt="" loading="lazy" onerror="this.remove()"></div>
        <div class="big-body"><strong>${m.label}</strong><span>${m.desc}</span><b aria-hidden="true">열람하기 →</b></div>
      </a>`).join('')}
    </div>
    <p class="more-title">˚₊‧ 더 둘러보기 ‧₊˚</p>
    <div class="tile-grid">
      ${small.map((m) => `<a class="tile" href="#/${m.id}"><i aria-hidden="true">${m.icon}</i><div><strong>${m.label}</strong><span>${m.desc}</span></div></a>`).join('')}
    </div>`;
}

function trumpCards() {
  return `<div class="pk-grid">
          ${MENU.map((m, i) => { const mark = SUITS[i % 4]; const rank = RANKS[i]; const tone = i % 4 === 1 || i % 4 === 3 ? 'red' : 'green'; return `<a class="pk-card ${tone}" href="#/${m.id}">
            <span class="pk-idx tl" aria-hidden="true"><b>${rank}</b><i>${mark}</i></span>
            <div class="pk-art"><i aria-hidden="true">${m.icon}</i><img src="${IMG}home/cat-${m.id}.jpg" alt="" loading="lazy" onerror="this.remove()"></div>
            <strong>${m.label}</strong><span class="pk-desc">${m.desc}</span>
            <span class="pk-idx br" aria-hidden="true"><b>${rank}</b><i>${mark}</i></span>
          </a>`; }).join('')}
        </div>`;
}

function renderHome() {
  document.title = '벨모리아 | Belmoria';
  view.innerHTML = `
    <section class="welcome">
      <div class="welcome-bg" aria-hidden="true"></div>
      <div class="petals" aria-hidden="true"></div>
      <div class="welcome-inner">
        <p class="welcome-kicker" aria-hidden="true"><img src="${IMG}common/logo.png" alt="" width="84" height="84" style="display:inline-block;width:84px;height:84px;object-fit:contain;border-radius:50%;filter:drop-shadow(0 2px 10px rgba(0,0,0,.45))" onerror="this.parentNode.textContent='⋆｡°✩ ❦ ✩°｡⋆'"></p>
        <h1><span>❧</span> Belmoria <span class="flip">❧</span></h1>
        <p class="welcome-sub">˚₊‧ 벨 모 리 아 ‧₊˚</p>
        <p class="tagline">상상과 이상이 현실이 되는 세계,<br>지친 당신을 위한 또 하나의 숲에 오신 것을 환영합니다.</p>
        <div class="welcome-btns">
          <a class="btn" href="#/world/0">⋆ 세계 둘러보기</a>
          <a class="btn btn-ghost" href="#/play/0">✧ 오늘의 신 축복</a>
        </div>
        <p class="welcome-cue" aria-hidden="true">⌄</p>
      </div>
    </section>

    <div class="wrap">
      <button type="button" class="search-box" data-open-search>
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/></svg>
        키워드로 검색해보세요
      </button>

      <section class="section">
        <h2 class="orn">기록 둘러보기</h2>
        <p class="section-lead">궁금한 분류를 골라 천천히 읽어보세요.</p>
        ${HOME_LAYOUT === 'trump' ? trumpCards() : startCards()}
      </section>

      <section class="section">
        <h2 class="orn">의뢰 게시판</h2>
        <p class="section-lead">숲 어귀의 게시판에 오늘의 의뢰가 붙어 있어요.</p>
        <div class="board">
          ${BOARD.map((n) => `<a class="note" href="${n.href}" style="--r:${n.r}deg"><em>${n.tag}</em><strong>${n.title}</strong><span>${n.text}</span></a>`).join('')}
        </div>
      </section>

      <p class="sep" aria-hidden="true">･ﾟ✧ ❀ ✧ﾟ･</p>

      <p class="home-lead">${esc(HOME_LEAD).replace(/\n/g, '<br>')}</p>

      <section class="section story-list">
        ${HOME_STORIES.map((st) => `
          <article class="tale">
            <h3><span>❦</span> ${st.title} <span>❦</span></h3>
            ${st.imgs.map((src) => `<img src="${IMG}${src}" alt="" loading="lazy" onerror="this.remove()">`).join('')}
            ${paras(st.text)}
          </article>`).join('')}
      </section>
    </div>`;
  initWelcomeFx();
}


// ===== 히어로 효과: 떨어지는 꽃잎, 반딧불, 스크롤 시 배경이 천천히 따라오는 효과 =====
function initWelcomeFx() {
  const box = $('.petals');
  if (!box) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (let i = 0; i < 12; i++) {
    const f = document.createElement('b');
    f.style.cssText = `left:${Math.random() * 100}%;top:${45 + Math.random() * 45}%;animation-duration:${4 + Math.random() * 5}s;animation-delay:${-Math.random() * 6}s`;
    box.appendChild(f);
  }
  const bg = $('.welcome-bg');
  if (still || !bg) return;
  window.onscroll = () => { bg.style.transform = `translateY(${Math.min(window.scrollY, 900) * 0.25}px) scale(1.12)`; };
}

function renderCategory(m) {
  if (m.subs.length === 1) return renderSub(m, 0);
  document.title = `${m.label} | 벨모리아`;
  view.innerHTML = `
    <div class="wrap page-top page slide-in">
      <p class="crumb"><a href="#/">홈</a> / ${m.label}</p>
      <header class="cat-head">
        <i aria-hidden="true">${m.icon}</i>
        <div>
          <p class="cat-count">˚₊‧ ${m.subs.length}개의 기록 ‧₊˚</p>
          <h1>${m.label}</h1>
          <p class="cat-desc">${m.desc}</p>
        </div>
      </header>
      <div class="sub-grid">
        ${m.subs.map((s, i) => `
          <a class="sub-card" href="#/${m.id}/${i}" style="--d:${150 + i * 70}ms">
            <div class="sub-body"><span class="sub-no">No. ${String(i + 1).padStart(2, '0')}</span><strong>${esc(s)}</strong><b aria-hidden="true">→</b></div>
          </a>`).join('')}
      </div>
    </div>`;
}

function renderSub(m, i) {
  const name = m.subs[i];
  const doc = CONTENT[`${m.id}/${i}`];
  document.title = `${name} | 벨모리아`;
  // 전용 화면(이벤트 등)이 있으면 그쪽으로: events.js 에서 등록해요
  if (window.PAGE_VIEWS && PAGE_VIEWS[`${m.id}/${i}`]) return PAGE_VIEWS[`${m.id}/${i}`](m, i);
  view.innerHTML = `
    <div class="wrap page-top page slide-in">
      <p class="crumb"><a href="#/">홈</a> / ${m.subs.length === 1 ? '' : `<a href="#/${m.id}">${m.label}</a> / `}${esc(name)}</p>
      <h1>${esc(name)}</h1>
      ${doc ? docHtml(doc)
            : '<div class="empty">이 페이지는 다음 단계에서 채워집니다.<br>조금만 기다려 주세요.</div>'}
    </div>`;
  bindDocTabs();
}

// ===== 주소(#) 따라 화면 바꾸기 =====
function route() {
  const [id, n] = location.hash.replace(/^#\/?/, '').split('/');
  const m = find(id);
  if (!id || !m) renderHome();
  else if (n !== undefined && m.subs[+n]) renderSub(m, +n);
  else renderCategory(m);
  updateActive(m ? m.id : 'home');
  closeOverlays();
  window.scrollTo(0, 0);
  view.focus({ preventScroll: true });
}

function updateActive(key) {
  document.querySelectorAll('#pc-nav a').forEach((a) => a.classList.toggle('on', a.dataset.id === key));
  document.querySelectorAll('#tabbar [data-tab]').forEach((a) => a.classList.toggle('on', a.dataset.tab === key));
}

// ===== 메뉴 그리기 =====
function buildMenus() {
  const link = (m) => `<a href="#/${m.id}" data-id="${m.id}">${m.label}</a>`;
  const main = PC_MAIN.map((id) => link(find(id))).join('');
  const rest = MENU.filter((m) => !PC_MAIN.includes(m.id)).map(link).join('');
  $('#pc-nav').innerHTML = `${main}<div class="more"><button type="button" class="more-btn" aria-haspopup="true">더보기 ▾</button><div class="more-menu">${rest}</div></div>`;
  $('#sheet-list').innerHTML = MENU.map((m) => `<a href="#/${m.id}">${m.label}</a>`).join('');
}

// ===== 시트 / 검색 =====
const sheet = $('#sheet');
const searchBox = $('#search');
const input = $('#search-input');

function closeOverlays() { sheet.hidden = true; searchBox.hidden = true; document.body.style.overflow = ''; }
function openOverlay(el) { closeOverlays(); el.hidden = false; document.body.style.overflow = 'hidden'; }
function openSearch() { openOverlay(searchBox); input.value = ''; showResults(''); input.focus(); }

function showResults(q) {
  q = q.trim().toLowerCase();
  const out = [];
  MENU.forEach((m) => {
    if (!q || m.label.toLowerCase().includes(q) || m.desc.includes(q)) out.push({ href: `#/${m.id}`, name: m.label, sub: '분류' });
    m.subs.forEach((s, i) => { if (m.subs.length > 1 && q && s.toLowerCase().includes(q)) out.push({ href: `#/${m.id}/${i}`, name: s, sub: m.label }); });
  });
  $('#search-results').innerHTML = out.length
    ? out.map((r) => `<li><a href="${r.href}"><span>${esc(r.name)}</span><small>${esc(r.sub)}</small></a></li>`).join('')
    : '<li class="empty">검색 결과가 없어요. 다른 단어로 찾아보세요.</li>';
}

// ===== 이벤트 연결 =====
buildMenus();
window.addEventListener('hashchange', route);
$('#search-open').addEventListener('click', openSearch);
$('#tab-search').addEventListener('click', openSearch);
$('#tab-more').addEventListener('click', () => openOverlay(sheet));
input.addEventListener('input', () => showResults(input.value));
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-open-search]')) openSearch();
  if (e.target.closest('[data-close]') || e.target.classList.contains('overlay')) closeOverlays();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlays(); });

route();