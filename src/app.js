// Pure Vanilla JavaScript — Archival Dossier of Ambrose Bierce

const WAYPOINTS = [
  {
    id: 'washington',
    step: 'Этап 01 / 06',
    shortLabel: 'Вашингтон',
    date: '2 октября 1913',
    coords: '38.90° N, 77.03° W',
    x: 650,
    y: 95,
    title: 'Вашингтон, округ Колумбия',
    summary:
      '71-летний Амброз Бирс завершает подготовку двенадцатитомного собрания сочинений, сжигает часть личной переписки и прощается с дочерью и ближайшими друзьями, объявляя о поездке в Мексику.',
    image: 'src/assets/images/writer_desk_manuscript.jpg',
    caption:
      'Илл. — Письменный стол и дорожные тетради 1913 года перед отъездом из Вашингтона.',
    quote:
      '«Прощайте. Если вы услышите, что меня поставили к мексиканской стене и расстреляли — знайте, это прекрасный способ покинуть эту жизнь».',
  },
  {
    id: 'battlefields',
    step: 'Этап 02 / 06',
    shortLabel: 'Поля Шайло',
    date: 'Октябрь 1913',
    coords: '35.14° N, 88.32° W',
    x: 520,
    y: 140,
    title: 'Поля сражений Гражданской войны',
    summary:
      'Перед пересечением границы ветеран 9-го Индианского полка совершает прощальное паломничество по местам своей юности: Шайло, Стоунс-Ривер, Чикамога и Кеннесо-Маунтин.',
    image: 'src/assets/images/bierce_archival_portrait.jpg',
    caption:
      'Илл. — Ветеран и писатель Амброз Бирс в год своего последнего путешествия.',
    quote:
      '«Я хочу ещё раз пройти по тем холмам, где был молод и где научился смотреть смерти в лицо без иллюзий».',
  },
  {
    id: 'new-orleans',
    step: 'Этап 03 / 06',
    shortLabel: 'Новый Орлеан',
    date: 'Начало ноября 1913',
    coords: '29.95° N, 90.07° W',
    x: 445,
    y: 215,
    title: 'Новый Орлеан и Сан-Антонио',
    summary:
      'В Новом Орлеане Бирс даёт короткое интервью местному репортёру, подтверждая намерение увидеть революционную Мексику своими глазами, а в Сан-Антонио навещает старых армейских сослуживцев.',
    image: 'src/assets/images/revolution_train_el_paso.jpg',
    caption:
      'Илл. — Южные железнодорожные линии, по которым Бирс двигался в сторону Техаса.',
    quote:
      '«Меня интересует не политика, а то, как эти люди воюют. У меня за плечами четыре года войны, но я всё ещё учусь».',
  },
  {
    id: 'el-paso',
    step: 'Этап 04 / 06',
    shortLabel: 'Сьюдад-Хуарес',
    date: 'Конец ноября — декабрь 1913',
    coords: '31.73° N, 106.48° W',
    x: 330,
    y: 235,
    title: 'Эль-Пасо — Сьюдад-Хуарес',
    summary:
      'Перейдя по мосту через Рио-Гранде из техасского Эль-Пасо, Бирс оказывается в штабе Панчо Вильи сразу после дерзкого взятия Сьюдад-Хуареса и присоединяется к обозу Северной дивизии.',
    image: 'src/assets/images/revolution_train_el_paso.jpg',
    caption:
      'Илл. — Пограничный железнодорожный узел в районе Эль-Пасо и Сьюдад-Хуареса, ноябрь 1913 г.',
    quote:
      '«По сообщениям очевидцев, седой и безупречно вежливый американец ездил верхом вместе с офицерами штаба и поражал всех меткой стрельбой».',
  },
  {
    id: 'chihuahua',
    step: 'Этап 05 / 06',
    shortLabel: 'Чиуауа',
    date: '26 декабря 1913',
    coords: '28.63° N, 106.08° W',
    x: 255,
    y: 268,
    title: 'Город Чиуауа',
    summary:
      'Последняя достоверно подтверждённая точка на карте. Из занятого повстанцами города Чиуауа Бирс отправляет письмо своей близкой подруге Бланш Партингтон. В конверте — короткий набросок о движении к Охинаге.',
    image: 'src/assets/images/writer_desk_manuscript.jpg',
    caption:
      'Илл. — Последнее почтовое отправление из Чиуауа датировано вторым днём Рождества 1913 года.',
    quote:
      '«Здесь пока спокойно, а завтра я отправляюсь с отрядом в неизвестном направлении».',
  },
  {
    id: 'ojinaga',
    step: 'Этап 06 / 06',
    shortLabel: 'Охинага',
    date: '10–11 января 1914',
    coords: '29.56° N, 104.41° W',
    x: 282,
    y: 356,
    title: 'Охинага и пустыня Чиуауа',
    summary:
      'Ночной штурм приграничного гарнизона Охинага становится решающей победой Панчо Вильи на севере. После этого сражения ни один официальный документ, мемуар или телеграмма не фиксирует присутствия Амброза Бирса.',
    image: 'src/assets/images/chihuahua_desert_crossing_.jpg',
    caption:
      'Илл. — Сумеречная дорога в полупустыне штата Чиуауа неподалёку от Охинаги.',
    quote:
      '«Ни могилы, ни свидетельства о смерти, ни личных вещей: пустыня сохранила тайну писателя на столетие».',
  },
];

const CHRONICLE_ENTRIES = [
  {
    date: '10 сент. 1913',
    category: 'letters',
    categoryLabel: 'Письма и пресса',
    title: 'Прощальное письмо племяннице Лоре Бирс',
    desc: 'Писатель впервые формулирует знаменитую фразу о «мексиканской каменной стене» и намекает, что его отъезд из Вашингтона может стать окончательным.',
  },
  {
    date: '1 окт. 1913',
    category: 'letters',
    categoryLabel: 'Письма и пресса',
    title: 'Письмо Кэрри Кристиансен о «лучшем конце»',
    desc: 'В письме своей многолетней секретарше и другу Бирс замечает: «Быть гринго в Мексике — это настоящая эвтаназия!».',
  },
  {
    date: 'Окт. 1913',
    category: 'military',
    categoryLabel: 'Военные эпизоды',
    title: 'Паломничество по полям Гражданской войны',
    desc: 'Посещение Шайло и Чикамоги, где Бирс в 1862–1863 годах сражался офицером-топографом армии Союза и пережил тяжелейшее ранение в голову при Кеннесо-Маунтин.',
  },
  {
    date: 'Нояб. 1913',
    category: 'testimony',
    categoryLabel: 'Свидетельства',
    title: 'Встреча с журналистами в Техасе',
    desc: 'В Сан-Антонио и Эль-Пасо корреспонденты отмечают бодрость 71-летнего сатирика, однако предупреждают его о хаосе за Рио-Гранде.',
  },
  {
    date: '24 нояб. 1913',
    category: 'military',
    categoryLabel: 'Военные эпизоды',
    title: 'Битва при Тьерра-Бланке',
    desc: 'Бирс, по свидетельству ряда мемуаристов, наблюдает за тактикой кавалерии Панчо Вильи против федеральных войск генерала Уэрты.',
  },
  {
    date: '26 дек. 1913',
    category: 'letters',
    categoryLabel: 'Письма и пресса',
    title: 'Последнее известное письмо из Чиуауа',
    desc: 'Адресовано Бланш Партингтон. Содержит известие о предстоящем марше к Охинаге и знаменитую фразу о «неизвестном направлении».',
  },
  {
    date: '10–11 янв. 1914',
    category: 'military',
    categoryLabel: 'Военные эпизоды',
    title: 'Штурм Охинаги и исчезновение следов',
    desc: 'После кровопролитного ночного боя у самой границы с Техасом Бирс не возвращается в Эль-Пасо и больше не отвечает на телеграммы.',
  },
  {
    date: '1914–1915',
    category: 'testimony',
    categoryLabel: 'Свидетельства',
    title: 'Поиски, инициированные дочерью Хелен',
    desc: 'Госдепартамент США, американские консулы и бывшие коллеги из газет Херста проводят опросы среди офицеров Вильи, но получают лишь противоречивые слухи.',
  },
];

const LETTERS = [
  {
    id: 'lora',
    accession: 'DOC. 1913.09.10',
    date: '10 сентября 1913',
    place: 'Вашингтон, округ Колумбия',
    title: 'Письмо Лоре Бирс',
    recipient: 'Племяннице Лоре Бирс · Из Вашингтона',
    ru: [
      'Дорогая Лора, я уезжаю из Вашингтона в начале октября в Южную Америку — через Мексику, если удастся проехать, не превратившись в решето.',
      'Впрочем, если вы услышите, что меня поставили к мексиканской каменной стене и изрешетили пулями, пожалуйста, поймите, что я сам считаю это вполне достойным способом уйти из этой жизни. Оно куда лучше старости, болезни или падения с лестницы в подвале.',
      'Быть гринго в Мексике — о, это подлинная эвтаназия!'
    ],
    en: [
      'Dear Lora, I am leaving Washington early in October for South America—via Mexico, if I can get through without being made into a colander.',
      'Good-bye—if you hear of my being stood up against a Mexican stone wall and shot to rags please know that I think that a pretty good way to depart this life. It beats old age, disease, or falling down the cellar stairs.',
      'To be a Gringo in Mexico—ah, that is euthanasia!'
    ],
    provenance:
      'Письмо опубликовано в собрании переписки «A Much Misunderstood Man» (2003). Именно здесь впервые звучит афористичное сравнение Мексики с эвтаназией.',
  },
  {
    id: 'christiansen',
    accession: 'DOC. 1913.10.01',
    date: '1 октября 1913',
    place: 'Вашингтон, округ Колумбия',
    title: 'Письмо Кэрри Кристиансен',
    recipient: 'Секретарше и другу Кэрри Кристиансен',
    ru: [
      'Мой поезд отправляется завтра утром. Я перебрал бумаги, сжёг всё лишнее и оставляю тебе право распоряжаться моими делами так, словно меня уже нет среди живых.',
      'Не ищи меня, если новости из Мексики замолкнут на несколько месяцев. Я еду туда не за славой и не за деньгами, а чтобы увидеть войну в последний раз — войну без лицемерия газетных передовиц.'
    ],
    en: [
      'My train leaves tomorrow morning. I have sorted out my papers, burned what was superfluous, and leave my affairs in your hands as though I were already gone.',
      'Do not search for me if dispatches from Mexico grow silent for a few months. I go neither for fame nor fortune, but to look once more upon war—war stripped of newspaper cant.'
    ],
    provenance:
      'Кэрри Кристиансен хранила архив Бирса вплоть до собственной смерти в 1914 году, так и не получив подтверждения его гибели.',
  },
  {
    id: 'partington',
    accession: 'DOC. 1913.12.26',
    date: '26 декабря 1913',
    place: 'Чиуауа, Мексика',
    title: 'Последнее письмо Бланш Партингтон',
    recipient: 'Близкому другу Бланш Партингтон · Из Чиуауа',
    ru: [
      'Поезд дошёл до Чиуауа без особых приключений, если не считать нескольких взорванных мостов и нехватки пресной воды. Город полон солдат Северной дивизии, но в моём квартале пока удивительно тихо.',
      'Завтра обоз выдвигается к Охинаге, где федеральные войска ещё держат оборону на берегу Рио-Гранде. Что до меня — я отправляюсь завтра в неизвестном направлении.'
    ],
    en: [
      'The train reached Chihuahua without grave mishap, save for a few burned trestles and scarce water. The city swarms with troops of the Division of the North, yet my quarter remains strangely quiet.',
      'Tomorrow the column moves toward Ojinaga, where the Federals still cling to the Rio Grande. As to me, I leave here tomorrow for an unknown destination.'
    ],
    provenance:
      'Оригинал хранится в фондах библиотеки Хантингтона (Калифорния). После 26 декабря 1913 года ни одного подлинного письма Амброза Бирса не обнаружено.',
  },
];

const THEORIES = [
  {
    id: 'ojinaga',
    num: 'Версия 01',
    shortTitle: 'Гибель в битве при Охинаге',
    verdict: 'Наиболее вероятная',
    kicker: 'Версия 01 · Вероятность высокая',
    description:
      'Большинство современных историков (включая биографа Роя Морриса-младшего) полагают, что 71-летний Бирс действительно последовал за войсками Панчо Вильи из Чиуауа к Охинаге и погиб во время ночного штурма 10–11 января 1914 года — либо от шальной пули, либо в неразберихе уличных боёв.',
    pros: [
      'Прямо согласуется с последним письмом от 26 декабря о движении к Охинаге.',
      'Объясняет отсутствие могилы: тела погибших в пустыне сжигались или хоронились в общих рвах без опознания.',
      'Американские военные наблюдатели с противоположного берега Рио-Гранде отмечали присутствие пожилого американца в штабе повстанцев.',
    ],
    cons: [
      'В списках раненых и пленных, перешедших в Техас после боя, имя Бирса не значится.',
      'Никто из штабных офицеров Вильи не оставил прямого письменного рапорта о его смерти в бою.',
    ],
  },
  {
    id: 'execution',
    num: 'Версия 02',
    shortTitle: 'Расстрел в Сьерра-Мохаде',
    verdict: 'Популярное предание',
    kicker: 'Версия 02 · Устная традиция',
    description:
      'Согласно мексиканскому фольклору и расследованию 1920-х годов, Бирс рассорился с Панчо Вильей (по одной версии — критиковал жестокость казней, по другой — попытался перейти к сопернику Вильи Венустиано Каррансе) и был расстрелян у кладбищенской стены в Сьерра-Мохаде, штат Коауила.',
    pros: [
      'Существует мемориальная табличка на кладбище в Сьерра-Мохаде, установленная со слов местных жителей.',
      'В 1920 году офицер армии Вильи заявил американским журналистам, что лично присутствовал при расстреле «старого гринго».',
      'Послужила основой знаменитого романа Карлоса Фуэнтеса «Старый гринго».',
    ],
    cons: [
      'Рассказы очевидцев противоречат друг другу в датах (разброс от 1913 до 1915 года) и внешности убитого.',
      'Сьерра-Мохада находилась далеко в стороне от январского марша Северной дивизии на Охинагу.',
    ],
  },
  {
    id: 'canyon',
    num: 'Версия 03',
    shortTitle: 'Большой Каньон без пересечения границы',
    verdict: 'Скептическая гипотеза',
    kicker: 'Версия 03 · Версия мистификации маршрута',
    description:
      'В 1929 году друг Бирса Уолтер Нил, а позднее исследователь Джо Никелл выдвинули гипотезу, что писатель никогда не пересекал границу Мексики: он отправил заранее подготовленные письма через знакомых в Чиуауа, чтобы скрыть самоубийство в уединении Большого Каньона.',
    pros: [
      'Бирс страдал от тяжёлых приступов астмы и неоднократно писал о праве человека самому выбрать момент ухода.',
      'Полностью объясняет, почему мексиканские архивы не содержат официальной записи о его въезде.',
    ],
    cons: [
      'Независимые репортёры в Новом Орлеане и Эль-Пасо лично видели Бирса живым на пути к границе.',
      'Почерковедческая экспертиза почтового штемпеля Чиуауа от 26 декабря подтверждает подлинность отправления.',
    ],
  },
  {
    id: 'disease',
    num: 'Версия 04',
    shortTitle: 'Смерть от болезни или пневмонии в пути',
    verdict: 'Вероятный фактор',
    kicker: 'Версия 04 · Медицинская реконструкция',
    description:
      'Зима 1913–1914 годов на высокогорье Чиуауа выдалась суровой, с ночными заморозками и вспышками тифа. Семидесятиоднолетний астматик, ночевавший в нетопленных теплушках и полевых палатках, мог скончаться от воспаления лёгких ещё до начала боёв.',
    pros: [
      'Полностью соответствует состоянию здоровья Бирса в конце 1913 года — в письмах он жаловался на одышку и кашель.',
      'Санитарные поезда Северной дивизии были переполнены, и безымянные захоронения умерших от тифа были повседневностью.',
    ],
    cons: [
      'В окружении Вильи служили американские врачи и журналисты (например, Джон Рид чуть позже), которые обычно узнавали о смерти соотечественников.',
    ],
  },
  {
    id: 'asylum',
    num: 'Версия 05',
    shortTitle: 'Тайное возвращение и легенда о Напе',
    verdict: 'Маловероятная легенда',
    kicker: 'Версия 05 · Городской миф',
    description:
      'В 1920-е годы калифорнийская пресса распространила слух, будто Бирс тайно вернулся в США и доживал свои дни под чужим именем в психиатрической лечебнице округа Напа, избегая славы и надоевших почитателей.',
    pros: [
      'Отвечала мистификаторскому духу поздних рассказов Бирса об исчезновениях («Тайна долины Маккарджера»).',
    ],
    cons: [
      'Официальная проверка архивов клиники в Напе в 1929 году не выявила ни одного пациента, подходящего под приметы и возраст писателя.',
      'Ни один из близких друзей или издателей Бирса в Калифорнии не подтвердил его возвращения.',
    ],
  },
];

const APHORISMS = [
  {
    term: 'ИСТОРИЯ, сущ.',
    def: 'Повествование по большей части вымышленное о событиях по большей части незначительных, вызванных правителями по большей части плутоватыми и солдатами по большей части глупыми.',
    orig: 'HISTORY, n. An account mostly false, of events mostly unimportant, which are brought about by rulers mostly knaves, and soldiers mostly fools.',
  },
  {
    term: 'МИР, сущ.',
    def: 'В международных отношениях — период жульничества между двумя периодами открытой драки.',
    orig: 'PEACE, n. In international affairs, a period of cheating between two periods of fighting.',
  },
  {
    term: 'БЕССМЕРТИЕ, сущ.',
    def: 'Игрушка, которой время от времени забавляется человечество, но которую так и не удаётся разобрать, чтобы посмотреть, что у неё внутри.',
    orig: 'IMMORTALITY, n. A toy which people cry for, and on their knees, that when they get it they may be tired of it.',
  },
  {
    term: 'ПАТРИОТ, сущ.',
    def: 'Человек, который ставит интересы части выше интересов целого; игрушка политиков и орудие завоевателей.',
    orig: 'PATRIOT, n. One to whom the interests of a part seem superior to those of the whole. The dupe of statesmen and the tool of conquerors.',
  },
  {
    term: 'ОПТИМИЗМ, сущ.',
    def: 'Учение или вера в то, что всё прекрасно — включая всё то, что отвратительно.',
    orig: 'OPTIMISM, n. The doctrine, or belief, that everything is beautiful, including what is ugly.',
  },
  {
    term: 'ГЕРОЙ, сущ.',
    def: 'Человек, чья профессия состоит в том, чтобы умирать с достоинством тогда, когда ему не удалось остаться в живых с удобством.',
    orig: 'HERO, n. One who has the courage to die when he lacks the wit to live.',
  },
];

// Application State
let activeWaypointIdx = 0;
let activeFilter = 'all';
let activeLetterId = LETTERS[2].id; // Default to the famous final Chihuahua letter
let activeLang = 'ru';
let activeTheoryId = THEORIES[0].id;
let activeAphorismIdx = 0;

// DOM References
const progressBar = document.getElementById('readingProgressBar');
const routeTabsEl = document.getElementById('routeTabs');
const mapNodesLayer = document.getElementById('mapNodesLayer');
const activeRouteLine = document.getElementById('activeRouteLine');
const mapCoordsDisplay = document.getElementById('mapCoordsDisplay');

const wpIndexEl = document.getElementById('wpIndex');
const wpDateEl = document.getElementById('wpDate');
const wpTitleEl = document.getElementById('wpTitle');
const wpSummaryEl = document.getElementById('wpSummary');
const wpImageEl = document.getElementById('wpImage');
const wpCaptionEl = document.getElementById('wpCaption');
const wpQuoteEl = document.getElementById('wpQuote');
const prevWaypointBtn = document.getElementById('prevWaypointBtn');
const nextWaypointBtn = document.getElementById('nextWaypointBtn');

const chronicleFiltersEl = document.getElementById('chronicleFilters');
const chronicleListEl = document.getElementById('chronicleList');

const letterListEl = document.getElementById('letterList');
const letterAccessionEl = document.getElementById('letterAccession');
const letterTitleEl = document.getElementById('letterTitle');
const letterMetaEl = document.getElementById('letterMeta');
const letterBodyEl = document.getElementById('letterBody');
const letterProvenanceEl = document.getElementById('letterProvenance');
const btnLangRu = document.getElementById('btnLangRu');
const btnLangEn = document.getElementById('btnLangEn');

const theoriesGridEl = document.getElementById('theoriesGrid');
const tiKickerEl = document.getElementById('tiKicker');
const tiTitleEl = document.getElementById('tiTitle');
const tiVerdictEl = document.getElementById('tiVerdict');
const tiDescriptionEl = document.getElementById('tiDescription');
const tiProsEl = document.getElementById('tiPros');
const tiConsEl = document.getElementById('tiCons');

const aphorismTermEl = document.getElementById('aphorismTerm');
const aphorismDefEl = document.getElementById('aphorismDef');
const aphorismOrigEl = document.getElementById('aphorismOrig');
const aphorismCounterEl = document.getElementById('aphorismCounter');
const nextAphorismBtn = document.getElementById('nextAphorismBtn');

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');

const letterModal = document.getElementById('letterModal');
const openLastLetterBtn = document.getElementById('openLastLetterBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalCloseConfirmBtn = document.getElementById('modalCloseConfirmBtn');
const modalGoToLettersBtn = document.getElementById('modalGoToLettersBtn');

// Image resilience: attach error fallback handlers to all archival frames
function bindImageFallbacks() {
  const images = document.querySelectorAll('.archival-frame img');
  images.forEach((img) => {
    img.addEventListener('error', () => {
      const frame = img.closest('.archival-frame');
      if (frame) {
        frame.classList.add('is-broken');
      }
    });
    img.addEventListener('load', () => {
      const frame = img.closest('.archival-frame');
      if (frame) {
        frame.classList.remove('is-broken');
      }
    });
  });
}

// Scroll reading progress bar (compositor-only transform)
function updateReadingProgress() {
  if (!progressBar) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
  progressBar.style.transform = `scaleX(${progress})`;
}

// Render Route Tabs and SVG Map Nodes
function renderRoute() {
  if (!routeTabsEl || !mapNodesLayer) return;

  routeTabsEl.innerHTML = '';
  mapNodesLayer.innerHTML = '';

  const activePoints = [];
  WAYPOINTS.forEach((wp, idx) => {
    // Tab button
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = `route-tab${idx === activeWaypointIdx ? ' is-active' : ''}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', idx === activeWaypointIdx ? 'true' : 'false');
    tab.textContent = `${String(idx + 1).padStart(2, '0')}. ${wp.shortLabel}`;
    tab.addEventListener('click', () => {
      activeWaypointIdx = idx;
      renderRoute();
    });
    routeTabsEl.appendChild(tab);

    if (idx <= activeWaypointIdx) {
      activePoints.push(`${wp.x} ${wp.y}`);
    }

    // SVG interactive node
    const svgNS = 'http://www.w3.org/2000/svg';
    const g = document.createElementNS(svgNS, 'g');
    const stateClass =
      idx === activeWaypointIdx
        ? ' is-active'
        : idx < activeWaypointIdx
          ? ' is-visited'
          : '';
    g.setAttribute('class', `map-node${stateClass}`);
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.setAttribute('aria-label', `${wp.title} (${wp.date})`);

    const ring = document.createElementNS(svgNS, 'circle');
    ring.setAttribute('cx', String(wp.x));
    ring.setAttribute('cy', String(wp.y));
    ring.setAttribute('r', idx === activeWaypointIdx ? '11' : '8');
    ring.setAttribute('class', 'map-node-ring');

    const core = document.createElementNS(svgNS, 'circle');
    core.setAttribute('cx', String(wp.x));
    core.setAttribute('cy', String(wp.y));
    core.setAttribute('r', idx === activeWaypointIdx ? '4' : '3');
    core.setAttribute('class', 'map-node-core');

    const label = document.createElementNS(svgNS, 'text');
    const labelOffsetX = wp.id === 'chihuahua' ? -68 : 14;
    const labelOffsetY = wp.id === 'ojinaga' ? 18 : -10;
    label.setAttribute('x', String(wp.x + labelOffsetX));
    label.setAttribute('y', String(wp.y + labelOffsetY));
    label.setAttribute('class', 'map-node-label');
    label.textContent = wp.shortLabel;

    g.appendChild(ring);
    g.appendChild(core);
    g.appendChild(label);

    g.addEventListener('click', () => {
      activeWaypointIdx = idx;
      renderRoute();
    });
    g.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activeWaypointIdx = idx;
        renderRoute();
      }
    });

    mapNodesLayer.appendChild(g);
  });

  if (activeRouteLine && activePoints.length > 0) {
    activeRouteLine.setAttribute('d', `M ${activePoints.join(' L ')}`);
  }

  const current = WAYPOINTS[activeWaypointIdx];
  if (mapCoordsDisplay) mapCoordsDisplay.textContent = current.coords;
  if (wpIndexEl) wpIndexEl.textContent = current.step;
  if (wpDateEl) wpDateEl.textContent = current.date;
  if (wpTitleEl) wpTitleEl.textContent = current.title;
  if (wpSummaryEl) wpSummaryEl.textContent = current.summary;
  if (wpCaptionEl) wpCaptionEl.textContent = current.caption;
  if (wpQuoteEl) wpQuoteEl.textContent = current.quote;

  if (wpImageEl) {
    const frame = wpImageEl.closest('.archival-frame');
    if (frame) frame.classList.remove('is-broken');
    wpImageEl.src = current.image;
    wpImageEl.alt = `${current.title} — ${current.caption}`;
  }

  if (prevWaypointBtn) {
    prevWaypointBtn.disabled = activeWaypointIdx === 0;
    prevWaypointBtn.style.opacity = activeWaypointIdx === 0 ? '0.45' : '1';
  }
  if (nextWaypointBtn) {
    nextWaypointBtn.disabled = activeWaypointIdx === WAYPOINTS.length - 1;
    nextWaypointBtn.style.opacity =
      activeWaypointIdx === WAYPOINTS.length - 1 ? '0.45' : '1';
  }
}

// Render Chronicle List
function renderChronicle() {
  if (!chronicleListEl) return;
  chronicleListEl.innerHTML = '';

  const filtered =
    activeFilter === 'all'
      ? CHRONICLE_ENTRIES
      : CHRONICLE_ENTRIES.filter((entry) => entry.category === activeFilter);

  filtered.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'chronicle-entry';

    const dateCol = document.createElement('div');
    dateCol.className = 'chronicle-date-col';

    const dateSpan = document.createElement('span');
    dateSpan.className = 'chronicle-date tabular';
    dateSpan.textContent = item.date;

    const catSpan = document.createElement('span');
    catSpan.className = 'chronicle-category';
    catSpan.textContent = item.categoryLabel;

    dateCol.appendChild(dateSpan);
    dateCol.appendChild(catSpan);

    const bodyCol = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.className = 'chronicle-title';
    h3.textContent = item.title;

    const p = document.createElement('p');
    p.className = 'chronicle-desc';
    p.textContent = item.desc;

    bodyCol.appendChild(h3);
    bodyCol.appendChild(p);

    li.appendChild(dateCol);
    li.appendChild(bodyCol);
    chronicleListEl.appendChild(li);
  });
}

// Render Letters Archive
function renderLetters() {
  if (!letterListEl) return;
  letterListEl.innerHTML = '';

  LETTERS.forEach((letter) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `letter-select-btn${letter.id === activeLetterId ? ' is-active' : ''}`;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', letter.id === activeLetterId ? 'true' : 'false');

    const dateEl = document.createElement('span');
    dateEl.className = 'letter-select-date tabular';
    dateEl.textContent = letter.date;

    const titleEl = document.createElement('span');
    titleEl.className = 'letter-select-title';
    titleEl.textContent = letter.title;

    const placeEl = document.createElement('span');
    placeEl.className = 'letter-select-place';
    placeEl.textContent = letter.place;

    btn.appendChild(dateEl);
    btn.appendChild(titleEl);
    btn.appendChild(placeEl);

    btn.addEventListener('click', () => {
      activeLetterId = letter.id;
      renderLetters();
    });

    letterListEl.appendChild(btn);
  });

  const activeLetter = LETTERS.find((l) => l.id === activeLetterId) || LETTERS[0];
  if (letterAccessionEl) letterAccessionEl.textContent = activeLetter.accession;
  if (letterTitleEl) letterTitleEl.textContent = activeLetter.title;
  if (letterMetaEl) {
    letterMetaEl.textContent = `${activeLetter.recipient} · ${activeLetter.place}, ${activeLetter.date}`;
  }
  if (letterProvenanceEl) letterProvenanceEl.textContent = activeLetter.provenance;

  if (letterBodyEl) {
    letterBodyEl.innerHTML = '';
    const paragraphs = activeLang === 'en' ? activeLetter.en : activeLetter.ru;
    paragraphs.forEach((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      letterBodyEl.appendChild(p);
    });
  }

  if (btnLangRu) btnLangRu.classList.toggle('is-active', activeLang === 'ru');
  if (btnLangEn) btnLangEn.classList.toggle('is-active', activeLang === 'en');
}

// Render Five Theories
function renderTheories() {
  if (!theoriesGridEl) return;
  theoriesGridEl.innerHTML = '';

  THEORIES.forEach((theory) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `theory-card-btn${theory.id === activeTheoryId ? ' is-active' : ''}`;
    btn.setAttribute('aria-pressed', theory.id === activeTheoryId ? 'true' : 'false');

    const num = document.createElement('span');
    num.className = 'theory-num tabular';
    num.textContent = theory.num;

    const title = document.createElement('h3');
    title.className = 'theory-card-title';
    title.textContent = theory.shortTitle;

    const verdict = document.createElement('span');
    verdict.className = 'theory-card-verdict';
    verdict.textContent = theory.verdict;

    btn.appendChild(num);
    btn.appendChild(title);
    btn.appendChild(verdict);

    btn.addEventListener('click', () => {
      activeTheoryId = theory.id;
      renderTheories();
    });

    theoriesGridEl.appendChild(btn);
  });

  const active = THEORIES.find((t) => t.id === activeTheoryId) || THEORIES[0];
  if (tiKickerEl) tiKickerEl.textContent = active.kicker;
  if (tiTitleEl) tiTitleEl.textContent = active.shortTitle;
  if (tiVerdictEl) tiVerdictEl.textContent = `Оценка базы: ${active.verdict}`;
  if (tiDescriptionEl) tiDescriptionEl.textContent = active.description;

  if (tiProsEl) {
    tiProsEl.innerHTML = '';
    active.pros.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      tiProsEl.appendChild(li);
    });
  }

  if (tiConsEl) {
    tiConsEl.innerHTML = '';
    active.cons.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      tiConsEl.appendChild(li);
    });
  }
}

// Render Devil's Dictionary Aphorism
function renderAphorism() {
  const item = APHORISMS[activeAphorismIdx];
  if (aphorismTermEl) aphorismTermEl.textContent = item.term;
  if (aphorismDefEl) aphorismDefEl.textContent = item.def;
  if (aphorismOrigEl) aphorismOrigEl.textContent = item.orig;
  if (aphorismCounterEl) {
    aphorismCounterEl.textContent = `Статья ${activeAphorismIdx + 1} из ${APHORISMS.length}`;
  }
}

// Modal Open / Close
function openModal() {
  if (!letterModal) return;
  letterModal.hidden = false;
  if (closeModalBtn) closeModalBtn.focus();
}

function closeModal() {
  if (!letterModal) return;
  letterModal.hidden = true;
  if (openLastLetterBtn) openLastLetterBtn.focus();
}

// Bind Global Events
function init() {
  bindImageFallbacks();
  renderRoute();
  renderChronicle();
  renderLetters();
  renderTheories();
  renderAphorism();
  updateReadingProgress();

  window.addEventListener('scroll', updateReadingProgress, { passive: true });

  if (prevWaypointBtn) {
    prevWaypointBtn.addEventListener('click', () => {
      if (activeWaypointIdx > 0) {
        activeWaypointIdx -= 1;
        renderRoute();
      }
    });
  }

  if (nextWaypointBtn) {
    nextWaypointBtn.addEventListener('click', () => {
      if (activeWaypointIdx < WAYPOINTS.length - 1) {
        activeWaypointIdx += 1;
        renderRoute();
      }
    });
  }

  if (chronicleFiltersEl) {
    chronicleFiltersEl.addEventListener('click', (event) => {
      const target = event.target.closest('.filter-btn');
      if (!target) return;
      const filter = target.getAttribute('data-filter');
      if (!filter) return;
      activeFilter = filter;
      chronicleFiltersEl.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.classList.toggle('is-active', btn === target);
      });
      renderChronicle();
    });
  }

  if (btnLangRu) {
    btnLangRu.addEventListener('click', () => {
      activeLang = 'ru';
      renderLetters();
    });
  }

  if (btnLangEn) {
    btnLangEn.addEventListener('click', () => {
      activeLang = 'en';
      renderLetters();
    });
  }

  if (nextAphorismBtn) {
    nextAphorismBtn.addEventListener('click', () => {
      activeAphorismIdx = (activeAphorismIdx + 1) % APHORISMS.length;
      renderAphorism();
    });
  }

  // Mobile Menu Drawer
  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      mobileDrawer.hidden = isExpanded;
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.hidden = true;
      });
    });
  }

  // Modal Triggers
  if (openLastLetterBtn) openLastLetterBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalCloseConfirmBtn) modalCloseConfirmBtn.addEventListener('click', closeModal);
  if (modalGoToLettersBtn) {
    modalGoToLettersBtn.addEventListener('click', () => {
      activeLetterId = 'partington';
      renderLetters();
      closeModal();
      const lettersSec = document.getElementById('letters');
      if (lettersSec) lettersSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (letterModal) {
    letterModal.addEventListener('click', (event) => {
      if (event.target === letterModal) closeModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && letterModal && !letterModal.hidden) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
