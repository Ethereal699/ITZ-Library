export const translations = {
  en: {
    appTitle: 'ITZ-Library',
    selectedElement: 'Selected element',
    overview: 'Overview',
    components: 'Components',
    animations: 'Animations',
    backgrounds: 'Backgrounds',
    showcase: 'Showcase',
    'To get started select element': 'To get started select element',
    'Code for this element is not yet added': 'Code for this element is not yet added.',
    'The code explanation will be there': 'The code explanation will be there',
    'description not yet added': 'description not yet added',
    'Ready to use': 'Ready to use',
    'ITZ-Library is an open-source React component library.': 'ITZ-Library is an open-source React component library.',
    "It's comprehensive and can be used in production out of the box.": "It's comprehensive and can be used in production out of the box.",
    'Get started ▸': 'Get started ▸',
    home: 'Home',
    catalog: 'Catalog',
    // Element labels
    'Specular Button': 'Specular Button',
    'Curved Input': 'Curved Input',
    'Line Sidebar': 'Line Sidebar',
    'Animated List': 'Animated List',
    'Tilted Card': 'Tilted Card',
    'Reflective Card': 'Reflective Card',
    'Folder': 'Folder',
    'Profile Card': 'Profile Card',
    'Dock': 'Dock',
    'Gooey Nav': 'Gooey Nav',
    'Pixel Card': 'Pixel Card',
    'Carousel': 'Carousel',
    'Spotlight Card': 'Spotlight Card',
    'Border Glow': 'Border Glow',
    'Glass Icons': 'Glass Icons',
    'Elastic Slider': 'Elastic Slider',
    Counter: 'Counter',
    Stepper: 'Stepper',
    'Cursor Follower': 'Cursor Follower',
    // Common descriptions
    'What it is': 'What it is:',
    'How it works': 'How it works:',
    'What\'s inside': 'What\'s inside:',
  },
  ru: {
    appTitle: 'ITZ-Library',
    selectedElement: 'Выбранный элемент',
    overview: 'Обзор',
    components: 'Компоненты',
    animations: 'Анимации',
    backgrounds: 'Фоны',
    showcase: 'Демо',
    // Element labels
    'Specular Button': 'Specular Button',
    'Curved Input': 'Curved Input',
    'Line Sidebar': 'Line Sidebar',
    'Animated List': 'Анимированный список',
    'Tilted Card': 'Tilted Card',
    'Reflective Card': 'Reflective Card',
    'Folder': 'Папка',
    'Profile Card': 'Карточка профиля',
    'Dock': 'Dock',
    'Gooey Nav': 'Gooey Nav',
    'Pixel Card': 'Pixel Card',
    'Carousel': 'Карусель',
    'Spotlight Card': 'Spotlight Card',
    'Border Glow': 'Border Glow',
    'Glass Icons': 'Glass Icons',
    'Elastic Slider': 'Elastic Slider',
    Counter: 'Счётчик',
    Stepper: 'Stepper',
    'Cursor Follower': 'Cursor Follower',
    // Common descriptions
    'What it is': 'Что это:',
    'How it works': 'Как работает:',
    'What\'s inside': 'Что внутри:',
    'To get started select element': 'Выберите элемент для начала',
    'Code for this element is not yet added': 'Код для этого элемента пока не добавлен.',
    'The code explanation will be there': 'Здесь будет объяснение кода',
    'description not yet added': 'описание еще не добавлено',
    'Ready to use': 'Готово к использованию',
    "ITZ-Library is an open-source React component library.": 'ITZ-Library — это библиотека React-компонентов с открытым исходным кодом.',
    "It's comprehensive and can be used in production out of the box.": "Она обширна и готова к использованию в продакшене из коробки.",
    'Get started ▸': 'Начать ▸',
    home: 'Главная',
    catalog: 'Каталог',
  },
  zh: {
    appTitle: 'ITZ-Library',
    selectedElement: '所选元素',
    overview: '概览',
    components: '组件',
    animations: '动画',
    backgrounds: '背景',
    showcase: '展示',
    // Element labels
    'Specular Button': 'Specular Button',
    'Curved Input': 'Curved Input',
    'Line Sidebar': 'Line Sidebar',
    'Animated List': '动画列表',
    'Tilted Card': 'Tilted Card',
    'Reflective Card': 'Reflective Card',
    'Folder': '文件夹',
    'Profile Card': '个人资料卡片',
    'Dock': 'Dock',
    'Gooey Nav': 'Gooey Nav',
    'Pixel Card': 'Pixel Card',
    'Carousel': '轮播',
    'Spotlight Card': 'Spotlight Card',
    'Border Glow': 'Border Glow',
    'Glass Icons': 'Glass Icons',
    'Elastic Slider': 'Elastic Slider',
    Counter: '计数器',
    Stepper: 'Stepper',
    'Cursor Follower': '光标跟随器',
    // Common descriptions
    'What it is': '是什么：',
    'How it works': '工作原理：',
    'What\'s inside': '内部结构：',
    'To get started select element': '选择元素以开始',
    'Code for this element is not yet added': '此元素的代码尚未添加。',
    'The code explanation will be there': '代码解释将在此处显示',
    'description not yet added': '描述尚未添加',
    'Ready to use': '开箱即用',
    "ITZ-Library is an open-source React component library.": 'ITZ-Library 是一个开源 React 组件库。',
    "It's comprehensive and can be used in production out of the box.": "它功能全面，开箱即可用于生产环境。",
    'Get started ▸': '开始使用 ▸',
    home: '首页',
    catalog: '目录',
  },
};

export const elementDescriptions = {
  en: {
    'Specular Button': `What it is:
A button with realistic metallic/glassy shine that responds to cursor movement.
Creates the effect of a volumetric surface with light highlights.

How it works:

Uses WebGL (via OGL library) to render a complex shader.

The shader draws:

the button's base shape (rounded rectangle via SDF — signed distance function),

a dark edge border (imitating thickness),

a symmetrical specular highlight that depends on the "lighting" angle.

The light angle is controlled by:

cursor position on the page (if followMouse: true),

or automatic animation (if autoAnimate: true).

Highlight intensity depends on the distance from the cursor to the button (proximity).

What's inside:

<button> with ref for tracking dimensions and position.

Canvas (WebGL) inside the button for rendering.

Shaders (vertex and fragment) in GLSL:

fragment: calculates SDF shape, normal angle, distance to edge,
applies Gaussian function for the line and highlight.

interpolates brightness depending on cursor proximity.`,

    'Line Sidebar': `What it is:
A side navigation menu with a static list of links.
Moving the cursor near an element highlights it and shifts the "cursor"
to create a proximity effect.

How it works:

Renders a list of elements (e.g. [{ label, href }]).

Tracks cursor position relative to the list.

Calculates the distance from the cursor to each element.

Based on distance, changes:

highlight opacity/brightness,

a small shift of the decorative "cursor" (line/bar).

What's inside:

A sidebar container with fixed width.

A list <ul> / <div> with elements.

A decorative element (line/bar) animated via CSS transform / opacity.

onMouseMove handler on the container to calculate cursor position.`,

    'Curved Input': `What it is:
An input field (input) with a curved/rounded shape and visual effects
(glow, gradients, possibly with distortion/curvature).
Usually used as a stylish form element.

How it works:

A basic <input> or <div> with contentEditable.

Styled container with:

strong border-radius (oval/curved shape),

gradient background or border,

glow (box-shadow / gradient overlays).

May use:

CSS transform for slight distortion (skew, perspective),

pseudo-elements for additional effects (highlights, gradients),

focus animations (increased glow, border color change).`,

    'Animated List': `What it is:
A list where elements appear/disappear with delay and smooth animation
(often "wave" sequentially).

How it works:

Accepts an array of items (e.g. notifications, messages).

On adding/removing an item, triggers CSS animation or Framer Motion.

Sets animation-delay for each element
(or initial, animate, exit in Framer Motion),
so they appear sequentially.

What's inside:

A list container.

map over data array → renders cards/rows.

Animation via:

CSS keyframes (@keyframes fade-in-up),`,

    'Tilted Card': `What it is:
A card that tilts in 3D towards the cursor. Creates a "physical" card effect.

How it works:

Tracks mouse position inside the card.

Calculates offset from center: dx, dy.

Converts them to tilt angles on X and Y axes.

Applies CSS transform: perspective(...) rotateX(...) rotateY(...).

What's inside:

A container with perspective.

Inner element with transform-style: preserve-3d.

onMouseMove / onMouseLeave handlers.

Optional:

"glare" — a semi-transparent layer that moves in the opposite direction.

parallax content (title/image moves slightly more than the background).`,

    'Reflective Card': `What it is:
A card with a reflection/highlight effect that follows the cursor (like light on a glossy surface).

How it works:

Tracks cursor position over the card.

Calculates the "light" angle/position.

Moves a gradient overlay (radial/linear gradient) over the card.

The gradient imitates reflection: a light stripe/spot + soft fade.

What's inside:

A base card (background, content).

A pseudo-element or separate div with a gradient (background: radial-gradient(...)).

onMouseMove handler that updates CSS variables (e.g. --x, --y) or the gradient style.`,

    'Folder': `What it is:
A "folder" component: usually a card that "opens" on hover/click, revealing its contents.

How it works:

Consists of a "cover" and an "inner part".

On hover/click changes:

the "lid" tilt angle (via rotateX),

the height/visibility of inner content.

May use 3D transforms for a real folder effect.

What's inside:

A container with perspective.

A "cover" — foreground.

An "inner part" — content that becomes visible on "opening".`,

    'Profile Card': `What it is:
A user profile card: avatar, name, role, links, sometimes with hover animations.

How it works:

Static or slightly interactive card.

Often includes:

hover effects (lift, shadow, glow),

appearance animations (fade-in, slide-up).

May use the same techniques as Tilted/Reflective Card, but simpler.

What's inside:

A card container.

Avatar (<img> or <div> with background).

Text blocks (name, role, description).

Buttons/links (socials, actions).

CSS animations for hover/appearance.`,

    'Dock': `What it is:
A macOS Dock-style panel: a row of icons that enlarge near the cursor.

How it works:

A horizontal row of icons/buttons.

Tracks cursor position on the X axis.

For each icon, calculates the distance to the cursor.

Applies scale (enlargement) and possibly translateY (slight lift) based on distance.

What's inside:

A dock container (often position: fixed at the bottom).

An icon list.

onMouseMove handler on the container.

Logic for calculating "center" and distances.

CSS transform: scale(...) translate(...).`,

    'Gooey Nav': `What it is:
Navigation with a "gooey" effect: when switching elements, they appear
to flow into each other, like liquid.

How it works:

Uses an SVG filter feGaussianBlur + feColorMatrix to create the gooey effect.

When switching the active element:

the "background"/"drop" moves under the elements,

blur + contrast create a merging effect.

What's inside:

A navigation container.

Buttons/links.

A decorative element (background/"drop") that animates between buttons.

An SVG filter connected via CSS filter: url(#goo).`,

    'Pixel Card': `What it is:
A card with a pixel/mosaic effect: often on hover or appear it "assembles" from squares.

How it works:

A grid of small div cells, each with its own animation delay.

On hover/appearance:

cells change color/transparency,

creates an "image development" effect.

May use CSS grid + animation-delay.

What's inside:

A card container.

A cell grid (generated via map).

opacity / transform / background animations.

Optional: an image/content over the grid.`,

    'Carousel': `What it is:
A slider/carousel: a set of cards/images that can be scrolled horizontally.

How it works:

An array of items (slides).

The current slide index (currentIndex).

On clicking arrows / swipe:

the index changes,

the container shifts via transform: translateX(-currentIndex * 100%).

Often with infinite scroll and indicators (dots).

What's inside:

A container with overflow: hidden.

An inner "ribbon" of slides (display: flex).

"Left/right" buttons.

Indicators (dots/bars).

Index switching logic and transform animation.`,

    'Spotlight Card': `What it is:
A card/button with a glowing border that can move or pulse.

How it works:

Uses a gradient border (via border-image or pseudo-elements).

Gradient animation (background-position) creates a "running" glow effect.

May respond to hover: increased brightness, color change.

What's inside:

A container with position: relative.

Pseudo-elements ::before/::after with a gradient.

CSS animation @keyframes for gradient movement.

Hover styles to enhance the effect.`,

    'Border Glow': `What it is:
A card/button with a glowing border that can move or pulse.

How it works:

Uses a gradient border (via border-image or pseudo-elements).

Gradient animation (background-position) creates a "running" glow effect.

May respond to hover: increased brightness, color change.

What's inside:

A container with position: relative.

Pseudo-elements ::before/::after with a gradient.

CSS animation @keyframes for gradient movement.

Hover styles to enhance the effect.`,

    'Glass Icons': `What it is:
A set of icons in a "glass" style: semi-transparent, with background blur (glassmorphism).

How it works:

Icons are placed on semi-transparent tiles.

Tile backgrounds:

background: rgba(255, 255, 255, 0.1),

backdrop-filter: blur(...).

On hover:

brightness/transparency increases,

a glow/shadow is added.

What's inside:

A grid or row container.

Tile cards with icons (SVG / font icons).

CSS glassmorphism: backdrop-filter, box-shadow, border.`,

    'Elastic Slider': `What it is:
An animated counter: the number smoothly increases/decreases to the target value.

How it works:

Accepts a target value.

When the target changes, starts an animation from the current to the new value.

Updates the displayed number on each frame.

What's inside:

A current state (current value).

requestAnimationFrame or setInterval for step-by-step changes.

Number formatting (thousands separators, decimals, etc.).

Optional: animation via Framer Motion (animate, useSpring).`,

    Counter: `What it is:
An animated counter: the number smoothly increases/decreases to the target value.

How it works:

Accepts a target value.

When the target changes, starts an animation from the current to the new value.

Updates the displayed number on each frame.

What's inside:

A current state (current value).

requestAnimationFrame or setInterval for step-by-step changes.

Number formatting (thousands separators, decimals, etc.).

Optional: animation via Framer Motion (animate, useSpring).`,

    Stepper: `What it is:
A step-by-step indicator (steps): shows progress through stages (e.g. checkout: 1 → 2 → 3 → 4).

How it works:

An array of steps ([{ label }, ...]).

The current active step (currentStep).

Renders:

step circles/dots,

a connecting line between them.

Active/passed steps are highlighted.

What's inside:

A stepper container.

map over steps → circles + labels.

A line (via pseudo-element or a separate div).

Step switching logic (buttons "Back" / "Forward" or external control).`,
  },
  ru: {
    'Specular Button': `Что это:
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

    'Line Sidebar': `Что это:
Боковое навигационное меню со статичным списком ссылок.
При движении курсора рядом с элементом подсветка и смещение «курсора»
создают эффект близости.

Как работает:

Рендерит список элементов (например, [{ label, href }]).

Отслеживает позицию мыши относительно списка.

Вычисляет расстояние от курсора до каждого элемента.

На основе расстояния меняет:

прозрачность/яркость подсветки,

небольшое смещение декоративного «курсора» (линии/полоски).

Что внутри:

Контейнер sidebar с фиксированной шириной.

Список <ul> / <div> с элементами.

Декоративный элемент (линия/полоса), который анимируется через CSS transform / opacity.

Обработчик onMouseMove на контейнере для вычисления позиции курсора.`,

    'Curved Input': `Что это:
Поле ввода (input) с изогнутой/закруглённой формой и визуальными эффектами
(свечение, градиенты, возможно с искажением/кривизной).
Обычно используется как стильный элемент формы.

Как работает:

Базовый <input> или <div> с contentEditable.

Стилизованный контейнер с:

сильным border-radius (овальная/изогнутая форма),

градиентным фоном или рамкой,

свечением (box-shadow / градиентные оверлеи).

Может использовать:

CSS transform для лёгкого искажения (skew, perspective),

псевдоэлементы для дополнительных эффектов (блики, градиенты),

анимации при фокусе (увеличение свечения, изменение цвета рамки).`,

    'Animated List': `Что это:
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

CSS keyframes (@keyframes fade-in-up),`,

    'Tilted Card': `Что это:
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

    'Reflective Card': `Что это:
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

    'Folder': `Что это:
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

    'Profile Card': `Что это:
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

    'Dock': `Что это:
Панель в стиле macOS Dock: ряд иконок, которые увеличиваются около курсора.

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

    'Gooey Nav': `Что это:
Навигация с «липким» (gooey) эффектом: при переключении элементов кажется,
что они перетекают друг в друга, как жидкость.

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

    'Pixel Card': `Что это:
Карточка с пиксельным/мозаичным эффектом: часто при наведении или появлении «собирается» из квадратиков.

Как работает:

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

    'Carousel': `Что это:
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

    'Spotlight Card': `Что это:
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

    'Border Glow': `Что это:
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

    'Glass Icons': `Что это:
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

    'Elastic Slider': `Что это:
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

    Counter: `Что это:
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

    Stepper: `Что это:
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
  },
  zh: {
    'Specular Button': `是什么：
具有逼真金属/玻璃光泽的按钮，会响应光标移动。
产生带有高光的光泽表面效果。

工作原理：

使用 WebGL（通过 OGL 库）渲染复杂的着色器。

着色器绘制：

按钮的基本形状（通过 SDF 的圆角矩形），

深色边缘边框（模拟厚度），

对称高光，取决于"照明"角度。

光源角度由以下控制：

页面光标的坐标（如果 followMouse: true），

或自动动画（如果 autoAnimate: true）。

高光强度取决于光标到按钮的距离（proximity）。

内部结构：

带有 ref 的 <button>，用于跟踪尺寸和位置。

按钮内的 Canvas (WebGL) 用于渲染效果。

GLSL 着色器（顶点和片段）：

片段着色器：计算 SDF 形状、法线角度、到边缘的距离，
应用高斯函数绘制线条和高光。

根据光标距离插值亮度。`,

    'Line Sidebar': `是什么：
带有静态链接列表的侧边导航菜单。
当光标靠近元素时，高光和"光标"偏移
会产生接近效果。

工作原理：

渲染元素列表（例如 [{ label, href }]）。

跟踪光标相对于列表的位置。

计算光标到每个元素的距离。

根据距离变化：

高光的透明度/亮度，

装饰性"光标"（线条/横条）的微小偏移。

内部结构：

固定宽度的侧边栏容器。

带有元素的列表 <ul> / <div>。

通过 CSS transform / opacity 动画的装饰元素（线条/横条）。

容器上的 onMouseMove 处理器用于计算光标位置。`,

    'Curved Input': `是什么：
具有弯曲/圆角形状和视觉效果（发光、渐变，可能有扭曲/曲率）的输入框。
通常用作时尚的表单元素。

工作原理：

基本的 <input> 或带有 contentEditable 的 <div>。

带样式的容器：

强 border-radius（椭圆/弯曲形状），

渐变背景或边框，

发光效果（box-shadow / 渐变覆盖层）。

可能使用：

CSS transform 进行轻微扭曲（skew, perspective），

伪元素用于额外效果（高光、渐变），

聚焦动画（发光增强、边框颜色变化）。`,

    'Animated List': `是什么：
元素以延迟和平滑动画出现/消失的列表
（通常依次"波浪式"出现）。

工作原理：

接受项目数组（例如通知、消息）。

添加/删除项目时触发 CSS 动画或 Framer Motion。

为每个元素设置 animation-delay
（或在 Framer Motion 中设置 initial, animate, exit），
使它们依次出现。

内部结构：

列表容器。

遍历数据数组 → 渲染卡片/行。

通过以下实现动画：

CSS 关键帧 (@keyframes fade-in-up)，`,

    'Tilted Card': `是什么：
向光标方向倾斜的 3D 卡片。产生"物理"卡片效果。

工作原理：

跟踪卡片内的鼠标位置。

计算与中心的偏移：dx, dy。

将它们转换为 X 和 Y 轴的倾斜角度。

应用 CSS transform：perspective(...) rotateX(...) rotateY(...)。

内部结构：

带有 perspective 的容器。

带有 transform-style: preserve-3d 的内部元素。

onMouseMove / onMouseLeave 处理器。

可选：

"眩光"层——向相反方向移动的半透明层。

视差内容（标题/图片比背景移动更多）。`,

    'Reflective Card': `是什么：
具有跟随光标的反射/高光效果的卡片（如光泽表面上的光线）。

工作原理：

跟踪卡片上方的光标位置。

计算"光源"角度/位置。

在卡片上移动渐变覆盖层（径向/线性渐变）。

渐变模拟反射：亮条/斑点 + 柔和渐变。

内部结构：

基本卡片（背景、内容）。

带有渐变的伪元素或单独的 div（background: radial-gradient(...)）。

更新 CSS 变量（如 --x, --y）或渐变样式的 onMouseMove 处理器。`,

    'Folder': `是什么：
"文件夹"组件：通常是悬停/点击时"打开"显示内容的卡片。

工作原理：

由"封面"和"内部"组成。

悬停/点击时变化：

"盖子"的倾斜角度（通过 rotateX），

内部内容的高度/可见性。

可能使用 3D 变换产生真实文件夹效果。

内部结构：

带有 perspective 的容器。

"封面" — 前景。

"内部" — "打开"时可见的内容。`,

    'Profile Card': `是什么：
用户资料卡片：头像、姓名、职位、链接，有时带有悬停动画。

工作原理：

静态或轻微交互的卡片。

通常包括：

悬停效果（提升、阴影、发光），

出现动画（淡入、上滑）。

可能使用与 Tilted/Reflective Card 相同的技术，但更简单。

内部结构：

卡片容器。

头像（<img> 或带背景的 <div>）。

文本块（姓名、角色、描述）。

按钮/链接（社交、操作）。

用于悬停/出现的 CSS 动画。`,

    'Dock': `是什么：
macOS Dock 风格的面板：光标附近放大的图标行。

工作原理：

图标/按钮的水平行。

跟踪 X 轴上的光标位置。

对每个图标计算到光标的距离。

根据距离应用 scale（放大）和可能的 translateY（轻微提升）。

内部结构：

dock 容器（通常是底部固定的 position: fixed）。

图标列表。

容器上的 onMouseMove 处理器。

计算"中心"和距离的逻辑。

CSS transform：scale(...) translate(...)。`,

    'Gooey Nav': `是什么：
具有"粘稠"效果的导航：切换元素时，它们看起来
像液体一样相互融合。

工作原理：

使用 SVG 滤镜 feGaussianBlur + feColorMatrix 创建粘稠效果。

切换活动元素时：

"背景"/"液滴"在元素下移动，

模糊 + 对比度产生融合效果。

内部结构：

导航容器。

按钮/链接。

在按钮之间动画的装饰元素（背景/"液滴"）。

通过 CSS filter: url(#goo) 连接的 SVG 滤镜。`,

    'Pixel Card': `是什么：
具有像素/马赛克效果的卡片：悬停或出现时从方块"组装"而成。

工作原理：

小 div 单元格的网格，每个都有自己的动画延迟。

悬停/出现时：

单元格改变颜色/透明度，

产生"图像显现"效果。

可能使用 CSS grid + animation-delay。

内部结构：

卡片容器。

单元格网格（通过 map 生成）。

opacity / transform / background 动画。

可选：网格上方的图像/内容。`,

    'Carousel': `是什么：
滑块/轮播：可水平滚动的一组卡片/图像。

工作原理：

项目数组（幻灯片）。

当前幻灯片索引（currentIndex）。

点击箭头/滑动时：

索引变化，

容器通过 transform: translateX(-currentIndex * 100%) 移动。

通常带有无限滚动和指示器（圆点）。

内部结构：

overflow: hidden 的容器。

内部"幻灯片带"（display: flex）。

"左/右"按钮。

指示器（圆点/横条）。

索引切换逻辑和 transform 动画。`,

    'Spotlight Card': `是什么：
带有发光边框的卡片/按钮，可以移动或脉冲。

工作原理：

使用渐变边框（通过 border-image 或伪元素）。

渐变动画（background-position）产生"流动"发光效果。

可能响应悬停：亮度增强、颜色变化。

内部结构：

position: relative 的容器。

带有渐变的伪元素 ::before/::after。

用于渐变移动的 CSS 动画 @keyframes。

悬停样式以增强效果。`,

    'Border Glow': `是什么：
带有发光边框的卡片/按钮，可以移动或脉冲。

工作原理：

使用渐变边框（通过 border-image 或伪元素）。

渐变动画（background-position）产生"流动"发光效果。

可能响应悬停：亮度增强、颜色变化。

内部结构：

position: relative 的容器。

带有渐变的伪元素 ::before/::after。

用于渐变移动的 CSS 动画 @keyframes。

悬停样式以增强效果。`,

    'Glass Icons': `是什么：
"玻璃"风格的一组图标：半透明，带有背景模糊（glassmorphism）。

工作原理：

图标放置在半透明瓷砖上。

瓷砖背景：

background: rgba(255, 255, 255, 0.1)，

backdrop-filter: blur(...)。

悬停时：

亮度/透明度增加，

添加发光/阴影。

内部结构：

网格或行容器。

带图标的瓷砖卡片（SVG / 字体图标）。

CSS glassmorphism：backdrop-filter, box-shadow, border。`,

    'Elastic Slider': `是什么：
动画计数器：数字平滑地增加到目标值。

工作原理：

接受目标值。

当目标变化时，从当前值开始动画到新值。

每帧更新显示的数字。

内部结构：

当前状态（当前值）。

requestAnimationFrame 或 setInterval 进行逐步变化。

数字格式化（千位分隔符、小数等）。

可选：通过 Framer Motion 动画（animate, useSpring）。`,

    Counter: `是什么：
动画计数器：数字平滑地增加到目标值。

工作原理：

接受目标值。

当目标变化时，从当前值开始动画到新值。

每帧更新显示的数字。

内部结构：

当前状态（当前值）。

requestAnimationFrame 或 setInterval 进行逐步变化。

数字格式化（千位分隔符、小数等）。

可选：通过 Framer Motion 动画（animate, useSpring）。`,

    Stepper: `是什么：
逐步指示器（steps）：显示各阶段的进度（例如结账：1 → 2 → 3 → 4）。

工作原理：

步骤数组（[{ label }, ...]）。

当前活动步骤（currentStep）。

渲染：

步骤圆圈/圆点，

它们之间的连接线。

活动/已完成的步骤会高亮显示。

内部结构：

stepper 容器。

遍历步骤 → 圆圈 + 标签。

线条（通过伪元素或单独的 div）。

步骤切换逻辑（"后退"/"前进"按钮或外部控制）。`,
  },
};
