export const dataBase = [
  {
    id: 'specular-button',
    label: 'Specular Button',
    desc:`Что это:
Кнопка с реалистичным металлическим/стеклянным блеском,
 который реагирует на движение курсора.
 Создаёт эффект объёмной поверхности со световыми бликами.

Как работает:

Использует WebGL (через библиотеку OGL) для рендеринга сложного шейдера.

Шейдер рисует:

базовую форму кнопки (закруглённый прямоугольник через SDF — signed distance function),

тёмную обводку по краю (имитация толщины),

симметричный световой блик (specular highlight), который зависит от угла «освещения».

Угол света управляется:

позицией курсора на странице (если followMouse: true),

или автоматической анимацией (если autoAnimate: true).

Интенсивность блика зависит от расстояния курсора до кнопки (proximity).

Что внутри:

<button> с ref для отслеживания размеров и позиции.

Canvas (WebGL) внутри кнопки для рендеринга эффекта.

Шейдеры (вершинный и фрагментный) на GLSL:

фрагментный: вычисляет SDF формы, угол нормали, расстояние до края,
 применяет гауссову функцию для линии и блика.

интерполирует яркость в зависимости от близости курсора.`,
    props: {
      size: 'lg',
      radius: 18,
      tint: '#ffffff',
      tintOpacity: 0,
      blur: 0,
      textColor: '#f5f5f5',
      lineColor: '#ffffff',
      baseColor: '#525252',
      intensity: 1,
      shineSize: 10,
      shineFade: 40,
      thickness: 1,
      speed: 0.35,
      followMouse: true,
      proximity: 250,
      autoAnimate: false,
    },
    code: `
import SpecularButton from './SpecularButton';

<SpecularButton
  size="lg"
  radius={18}
  tint="#ffffff"
  tintOpacity={0}
  blur={0}
  textColor="#f5f5f5"
  lineColor="#ffffff"
  baseColor="#525252"
  intensity={1}
  shineSize={10}
  shineFade={40}
  thickness={1}
  speed={0.35}
  followMouse={true}
  proximity={250}
  autoAnimate={false}
>
  Get Started
</SpecularButton>
    `.trim(),
  },
  {
    id: 'curved-input',
    label: 'Curved Input',
    desc:`Что это:
Поле ввода (input) с изогнутой/закруглённой формой и визуальными эффектами 
(свечение, градиенты, возможно с искажением/кривизной). 
Обычно используется как стильный элемент формы.

Как работает (общая идея для таких компонентов):

Базовый <input> или <div> с contentEditable.

Стилизованный контейнер с:

сильным border-radius (овальная/изогнутая форма),

градиентным фоном или рамкой,

свечением (box-shadow / градиентные оверлеи).

Может использовать:

CSS transform для лёгкого искажения (skew, perspective),

псевдоэлементы для дополнительных эффектов (блики, градиенты),

анимации при фокусе (увеличение свечения, изменение цвета рамки).

Что обычно внутри:

Контейнер с классом (например, .curved-input).

Сам <input type="text" /> без стандартной рамки (border: none, outline: none).

CSS:

border-radius: 9999px (или кастомный),

background: linear-gradient(...) или radial-gradient(...),

box-shadow для свечения,

transition для плавных hover/focus‑эффектов.`,
    props: {
      size: 'md',
      radius: 12,
      tint: '#e0e0ff',
      tintOpacity: 0.1,
      blur: 4,
      textColor: '#ffffff',
      lineColor: '#a0a0ff',
      baseColor: '#3a3a5a',
      intensity: 1.2,
      shineSize: 12,
      shineFade: 50,
      thickness: 1.2,
      speed: 0.3,
      followMouse: true,
      proximity: 200,
      autoAnimate: false,
    },
    code: `
<SpecularButton
  size="md"
  radius={12}
  tint="#e0e0ff"
  tintOpacity={0.1}
  blur={4}
  textColor="#ffffff"
  lineColor="#a0a0ff"
  baseColor="#3a3a5a"
  intensity={1.2}
  shineSize={12}
  shineFade={50}
  thickness={1.2}
  speed={0.3}
  followMouse={true}
  proximity={200}
  autoAnimate={false}
>
  Curved Input
</SpecularButton>
    `.trim(),
  },
  {
    id: 'line-sidebar',
    label: 'Line Sidebar',
    desc:`Что это:
Боковое навигационное меню со статичным списком ссылок.
 При движении курсора рядом с элементом подсветка и смещение «курсора»
  создают эффектproximity (близости).

Как работает (суть):

Рендерит список элементов (например, [{ label, href }]).

Отслеживает позицию мыши относительно списка.

Вычисляет расстояние от курсора до каждого элемента.

На основе расстояния меняет:

прозрачность/яркость подсветки,

небольшое смещение декоративного «курсора» (линии/полоски).

Что обычно внутри:

Контейнер sidebar с фиксированной шириной.

Список <ul> / <div> с элементами.

Декоративный элемент (линия/полоса), который анимируется через CSS transform / opacity.

Обработчик onMouseMove на контейнере для вычисления позиции курсора.`,
    code: `import LineSidebar from './LineSidebar';

<LineSidebar
  items={['Overview', 'Components', 'Animations', 'Backgrounds', 'Showcase']}
  accentColor="#A855F7"
  textColor="#c4c4c4"
  markerColor="#6c6c6c"
  showIndex
  showMarker
  proximityRadius={100}
  maxShift={30}
  falloff="smooth"
  markerLength={60}
  markerGap={0}
  tickScale={0.5}
  scaleTick
  itemGap={20}
  fontSize={1.1}
  smoothing={100}
  defaultActive={0}
  onItemClick={(index, label) => console.log(index, label)}
/>`.trim(),
  },
  {
    id: 'animated-list',
    label: 'Animated List',
    desc:`Что это:
Список, в котором элементы появляются/исчезают с задержкой и плавной анимацией 
(часто «волной» по очереди).

Как работает:

Принимает массив элементов (например, уведомления, сообщения).

При добавлении/удалении элемента запускает CSS‑анимацию или Framer Motion.

Для каждого элемента задаёт animation-delay
(или initial, animate, exit в Framer Motion),
чтобы они появлялись последовательно.

Что внутри:

Контейнер списка.

map по массиву данных → рендер карточек/строк.

Анимация через:

CSS keyframes (@keyframes fade-in-up),

`,
    code: `import AnimatedList from './AnimatedList'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 
  
<AnimatedList
  items={items}
  onItemSelect={(item, index) => console.log(item, index)}
  showGradients
  enableArrowNavigation
  displayScrollbar
/>`,
  },
  {
    id: 'tilted-card',
    label: 'Tilted Card',
    desc:`Что это:
Карточка, которая наклоняется в 3D в сторону курсора. Создаёт эффект «физической» карточки.

Как работает:

Отслеживает позицию мыши внутри карточки.

Вычисляет смещение от центра: dx, dy.

Преобразует их в углы наклона по осям X и Y.

Применяет CSS transform: perspective(...) rotateX(...) rotateY(...).

Что внутри:

Контейнер с perspective.

Внутренний элемент с transform-style: preserve-3d.

Обработчики onMouseMove / onMouseLeave.

Опционально:

«блик» (glare) — полупрозрачный слой, который двигается в противоположную сторону.

параллакс содержимого (заголовок/картинка двигаются чуть сильнее фона).`,
    code: `import TiltedCard from './TiltedCard';

<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>
  `.trim(),
  },
  {
    id: 'reflective-card',
    label: 'Reflective Card',
    desc:`Что это:
Карточка с эффектом отражения/блика, который следует за курсором (как свет на глянцевой поверхности).

Как работает:

Отслеживает позицию курсора над карточкой.

Вычисляет угол/позицию «света».

Двигает градиентный оверлей (radial/linear gradient) поверх карточки.

Градиент имитирует отражение: светлая полоса/пятно + мягкое затухание.

Что внутри:

Базовая карточка (фон, контент).

Псевдоэлемент или отдельный div с градиентом (background: radial-gradient(...)).

Обработчик onMouseMove, который обновляет CSS‑переменные (например, --x, --y) или style градиента.`,
    code: `import ReflectiveCard from './ReflectiveCard';

<div style={{ height: '600px', position: 'relative' }}>
  <ReflectiveCard
    overlayColor="rgba(0, 0, 0, 0.2)"
    blurStrength={12}
    glassDistortion={30}
    metalness={1}
    roughness={0.75}
    displacementStrength={20}
    noiseScale={1}
    specularConstant={5}
    grayscale={0.15}
    color="#ffffff"
  />
</div>
`.trim(),
  },
  {
    id: 'folder',
    label: 'Folder',
    desc:`Что это:
Компонент‑«папка»: обычно карточка, которая при наведении/клике «открывается», показывая содержимое.

Как работает:

Состоит из «обложки» и «внутренней части».

При наведении/клике меняет:

угол наклона «крышки» (через rotateX),

высоту/видимость внутреннего контента.

Может использовать 3D‑трансформации для эффекта настоящей папки.

Что внутри:

Контейнер с perspective.

«Крышка» (cover) — передний план.

«Внутренность» — контент, который становится виден при «открытии».`,
    code: `import Folder from './Folder'

<div style={{ height: '600px', position: 'relative' }}>
  <Folder size={2} color="#5227FF" className="custom-folder"
  color="#5227FF"
  size={2}
/>
</div>`.trim(),
  },
  {
    id: 'profile-card',
    label: 'Profile Card',
    desc:`Что это:
Карточка профиля пользователя: аватар, имя, должность, ссылки, иногда с анимацией при наведении.

Как работает:

Статичная или слегка интерактивная карточка.

Часто включает:

hover‑эффекты (подъём, тень, свечение),

анимацию появления (fade‑in, slide‑up).

Может использовать те же техники, что Tilted/Reflective Card, но проще.

Что внутри:

Контейнер‑карточка.

Аватар (<img> или <div> с фоном).

Текстовые блоки (имя, роль, описание).

Кнопки/ссылки (соцсети, действия).

CSS‑анимации для hover/появления.`,
    code: `import ProfileCard from './ProfileCard'
  
<ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={false}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
  behindGlowColor="rgba(125, 190, 255, 0.67)"
  iconUrl="/assets/demo/iconpattern.png"
  behindGlowEnabled
  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
/>`.trim(),
  },
  {
    id: 'dock',
    label: 'Dock',
    desc:`Что это:
Панка в стиле macOS Dock: ряд иконок, которые увеличиваются около курсора.

Как работает:

Горизонтальный ряд иконок/кнопок.

Отслеживает позицию курсора по оси X.

Для каждой иконки вычисляет расстояние до курсора.

Применяет scale (увеличение) и, возможно, translateY (лёгкий подъём) в зависимости от расстояния.

Что внутри:

Контейнер dock (часто с position: fixed внизу экрана).

Список иконок.

Обработчик onMouseMove на контейнере.

Логика вычисления «центра» и расстояний.

CSS transform: scale(...) translate(...).`,
    code: `import Dock from './Dock';

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />`.trim(),
  },
  {
    id: 'gooey-nav',
    label: 'Gooey Nav',
    desc:`Что это:
Навигация с «липким» (gooey) эффектом: при переключении элементов кажется,
что они перетекают друг в друга,
как жидкость.

Как работает:

Использует SVG‑фильтр feGaussianBlur + feColorMatrix для создания gooey‑эффекта.

При переключении активного элемента:

двигается «фон»/«капля» под элементами,

размытие + контраст создают эффект слияния.

Что внутри:

Контейнер навигации.

Кнопки/ссылки.

Декоративный элемент (фон/«капля»), который анимируется между кнопками.

SVG‑фильтр, подключённый через CSS filter: url(#goo).`,
    code: `import GooeyNav from './GooeyNav'

// update with your own items
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

<div style={{ height: '600px', position: 'relative' }}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>`.trim(),
  },
  {
    id: 'pixel-card',
    label: 'Pixel Card',
    desc:`Что это:
Карточка с пиксельным/мозаичным эффектом: часто при наведении или появлении «собирается» из квадратиков.

Как работает (варианты):

Сетка мелких div‑ячеек, каждая со своей задержкой анимации.

При наведении/появлении:

ячейки меняют цвет/прозрачность,

создают эффект «проявления» изображения или фона.

Может использовать CSS grid + animation-delay.

Что внутри:

Контейнер‑карточка.

Сетка ячеек (генерируется через map).

Анимация opacity / transform / background.

Опционально: изображение/контент поверх сетки.`,
    code: `import PixelCard from './PixelCard';

<PixelCard variant="pink">
  // your card content (use position: absolute)
</PixelCard>
`.trim(),
  },
  {
    id: 'carousel',
    label: 'Carousel',
    desc:`Что это:
Слайдер/карусель: набор карточек/изображений, которые можно прокручивать горизонтально.

Как работает:

Массив элементов (слайдов).

Индекс текущего слайда (currentIndex).

При клике на стрелки / свайпе:

меняется индекс,

контейнер сдвигается через transform: translateX(-currentIndex * 100%).

Часто с бесконечной прокруткой и индикаторами (точки).

Что внутри:

Контейнер с overflow: hidden.

Внутренняя «лента» слайдов (display: flex).

Кнопки «влево/вправо».

Индикаторы (точки/полоски).

Логика переключения индекса и анимация transform.`,
    code: `import Carousel from './Carousel'

<div style={{ height: '600px', position: 'relative' }}>
  <Carousel
    baseWidth={300}
    autoplay={false}
    autoplayDelay={3000}
    pauseOnHover={false}
    loop={false}
    round={false}
  />
</div>`.trim(),
  },
  {
    id: 'spotlight-card',
    label: 'Spotlight Card',
    desc:`Что это:
Карточка/кнопка с светящейся рамкой, которая может двигаться или пульсировать.

Как работает:

Использует градиентную рамку (через border-image или псевдоэлементы).

Анимация градиента (background-position) создаёт эффект «бегущего» свечения.

Может реагировать на hover: усиление яркости, изменение цвета.

Что внутри:

Контейнер с position: relative.

Псевдоэлемент ::before/::after с градиентом.

CSS‑анимация @keyframes для движения градиента.

Hover‑стили для усиления эффекта.`,
    code: `import SpotlightCard from './SpotlightCard';
  
<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
  // Content goes here
</SpotlightCard>`.trim(),
  },
  {
    id: 'border-glow',
    label: 'Border Glow',
    desc:`Что это:
Карточка/кнопка с светящейся рамкой, которая может двигаться или пульсировать.

Как работает:

Использует градиентную рамку (через border-image или псевдоэлементы).

Анимация градиента (background-position) создаёт эффект «бегущего» свечения.

Может реагировать на hover: усиление яркости, изменение цвета.

Что внутри:

Контейнер с position: relative.

Псевдоэлемент ::before/::after с градиентом.

CSS‑анимация @keyframes для движения градиента.

Hover‑стили для усиления эффекта.`,
    code: `import BorderGlow from './BorderGlow';

<BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#120F17"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
>
  <div style={{ padding: '2em' }}>
    <h2>Your Content Here</h2>
    <p>Hover near the edges to see the glow.</p>
  </div>
</BorderGlow>`.trim(),
  },
  {
    id: 'glass-icons',
    label: 'Glass Icons',
    desc:`Что это:
Набор иконок в «стеклянном» стиле: полупрозрачные, с размытием фона (glassmorphism).

Как работает:

Иконки размещаются на полупрозрачных плашках.

Фон плашек:

background: rgba(255, 255, 255, 0.1),

backdrop-filter: blur(...).

При наведении:

усиливается яркость/прозрачность,

добавляется свечение/тень.

Что внутри:

Контейнер‑сетка или ряд.

Карточки‑плашки с иконками (SVG / шрифт‑иконки).

CSS glassmorphism: backdrop-filter, box-shadow, border.`,
    code: `import GlassIcons from './GlassIcons'

// update with your own icons and colors
const items = [
  { icon: <FiFileText />, color: 'blue', label: 'Files' },
  { icon: <FiBook />, color: 'purple', label: 'Books' },
  { icon: <FiHeart />, color: 'red', label: 'Health' },
  { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
  { icon: <FiEdit />, color: 'orange', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
];

<div style={{ height: '600px', position: 'relative' }}>
  <GlassIcons items={items} className="custom-class"
  colorful={false}
/>
</div>`.trim(),
  },
  {
    id: 'elastic-slider',
    label: 'Elastic Slider',
    desc:`Что это:
Анимированный счётчик: число плавно увеличивается/уменьшается до целевого значения.

Как работает:

Принимает целевое значение (target).

При изменении target запускает анимацию от текущего к новому.

На каждом кадре обновляет отображаемое число.

Что внутри:

Состояние current (текущее значение).

requestAnimationFrame или setInterval для пошагового изменения.

Форматирование чисел (разделители тысяч, знаки и т.п.).

Опционально: анимация через Framer Motion (animate, useSpring).`,
    code: `import ElasticSlider from './ElasticSlider'
  
<ElasticSlider
  leftIcon={<>...your icon...</>}
  rightIcon={<>...your icon...</>}
  startingValue={0}
  defaultValue={50}
  maxValue={100}
  isStepped={false}
  stepSize={10}
/>`.trim(),
  },
  {
    id: 'counter',
    label: 'Counter',
    desc:`Что это:
Анимированный счётчик: число плавно увеличивается/уменьшается до целевого значения.

Как работает:

Принимает целевое значение (target).

При изменении target запускает анимацию от текущего к новому.

На каждом кадре обновляет отображаемое число.

Что внутри:

Состояние current (текущее значение).

requestAnimationFrame или setInterval для пошагового изменения.

Форматирование чисел (разделители тысяч, знаки и т.п.).

Опционально: анимация через Framer Motion (animate, useSpring).`,
    code: `import Counter from './Counter';

<Counter
  value={1}
  places={[100, 10, 1]}
  fontSize={80}
  padding={5}
  gap={10}
  textColor="white"
  fontWeight={900}
  digitPlaceHolders
/>`.trim(),
  },
  {
    id: 'stepper',
    label: 'Stepper',
    desc:`Что это:
Пошаговый индикатор (steps): показывает прогресс по этапам (например, оформление заказа: 1 → 2 → 3 → 4).

Как работает:

Массив шагов ([{ label }, ...]).

Текущий активный шаг (currentStep).

Рендерит:

кружки/точки шагов,

соединительную линию между ними.

Активные/пройденные шаги подсвечиваются.

Что внутри:

Контейнер stepper.

map по шагам → кружки + подписи.

Линия (через псевдоэлемент или отдельный div).

Логика переключения шагов (кнопки «Назад» / «Вперёд» или внешнее управление).`,
    code: `import Stepper, { Step } from './Stepper';
  
<Stepper
  initialStep={1}
  onStepChange={(step) => {
    console.log(step);
  }}
  onFinalStepCompleted={() => console.log("All steps completed!")}
  backButtonText="Previous"
  nextButtonText="Next"
>
  <Step>
    <h2>Welcome to the React Bits stepper!</h2>
    <p>Check out the next step!</p>
  </Step>
  <Step>
    <h2>Step 2</h2>
    <img style={{ height: '100px', width: '100%', objectFit:
     'cover', objectPosition: 'center -70px', 
    borderRadius: '15px', marginTop: '1em' 
    }} src="https://www.purrfectcatgifts.co.
     uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
    <p>Custom step content!</p>
  </Step>
  <Step>
    <h2>How about an input?</h2>
    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?"
  disableStepIndicators={false}
/>
  </Step>
  <Step>
    <h2>Final Step</h2>
    <p>You made it!</p>
  </Step>
</Stepper>`,
  },
];