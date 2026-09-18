'use client';
import { useState } from 'react';
import { VscAccount, VscArchive, VscHome, VscSettingsGear } from 'react-icons/vsc';
import { FiBarChart2, FiBook, FiCloud, FiEdit, FiFileText, FiHeart } from 'react-icons/fi';

import SpecularButton from '../../reactbits/SpecularButton/SpecularButton';
import CurvedInput from '../../reactbits/CurvedInput/CurvedInput';
import LineSidebar from '../../reactbits/LineSidebar/LineSidebar';
import AnimatedList from '../../reactbits/AnimatedList/AnimatedList';
import TiltedCard from '../../reactbits/TiltedCard/TiltedCard';
import ReflectiveCard from '../../reactbits/ReflectiveCard/ReflectiveCard';
import Folder from '../../reactbits/Folder/Folder';
import ProfileCard from '../../reactbits/ProfileCard/ProfileCard';
import Dock from '../../reactbits/Dock/Dock';
import GooeyNav from '../../reactbits/GooeyNav/GooeyNav';
import PixelCard from '../../reactbits/PixelCard/PixelCard';
import Carousel from '../../reactbits/Carousel/Carousel';
import SpotlightCard from '../../reactbits/SpotlightCard/SpotlightCard';
import BorderGlow from '../../reactbits/BorderGlow/BorderGlow';
import GlassIcons from '../../reactbits/GlassIcons/GlassIcons';
import ElasticSlider from '../../reactbits/ElasticSlider/ElasticSlider';
import Counter from '../../reactbits/Counter/Counter';
import Stepper, { Step } from '../../reactbits/Stepper/Stepper';

import styles from '../../../styles/Preview.module.css';

const log = (...args) => console.log(...args);

/* ---------- общие куски контента для карточек ---------- */

function CardContent({ title, text }) {
  return (
    <div className={styles.cardContent}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}

/* ---------- демо отдельных элементов ---------- */

function SpecularButtonPreview() {
  return (
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
      followMouse
      proximity={250}
      autoAnimate={false}
      onClick={() => log('Specular Button clicked')}
    >
      Get Started
    </SpecularButton>
  );
}

function CurvedInputPreview() {
  return (
    <div className={styles.narrow}>
      <CurvedInput
        theme="dark"
        width={450}
        bend={28}
        height={64}
        type="email"
        placeholder="you@example.com"
        buttonText="Get Started"
        onSubmit={value => log('Curved Input submit:', value)}
      />
    </div>
  );
}

function LineSidebarPreview() {
  return (
    <LineSidebar
      items={['Overview', 'Components', 'Animations', 'Backgrounds', 'Showcase']}
      accentColor="#ff9500"
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
      onItemClick={(index, label) => log('Line Sidebar item:', index, label)}
    />
  );
}

function AnimatedListPreview() {
  return (
    <AnimatedList
      showGradients
      // стрелки/Tab перехватываются на уровне окна — в каталоге это ломает навигацию
      enableArrowNavigation={false}
      displayScrollbar
      onItemSelect={(item, index) => log('Animated List item:', item, index)}
    />
  );
}

function TiltedCardPreview() {
  return (
    <TiltedCard
      imageSrc="/demo/poster.svg"
      altText="ITZ Library preview"
      captionText="ITZ Library"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.05}
      showMobileWarning={false}
      showTooltip
      displayOverlayContent
      overlayContent={<p className={styles.cardTitle}>ITZ Library</p>}
    />
  );
}

function ReflectiveCardPreview() {
  return (
    <>
      <p className={styles.note}>Компонент использует веб-камеру браузера — при первом открытии браузер спросит доступ.</p>
      <ReflectiveCard
        overlayColor="rgba(255, 255, 255, 0.1)"
        blurStrength={12}
        glassDistortion={30}
        metalness={1}
        roughness={0.75}
        displacementStrength={20}
        noiseScale={1}
        specularConstant={1.2}
        grayscale={0.15}
        color="#ffffff"
      />
    </>
  );
}

function FolderPreview() {
  return (
    <div className={styles.column}>
      <Folder size={2} color="#5227FF" className="custom-folder" />
      <p className={styles.note}>Кликни по папке, чтобы открыть содержимое.</p>
    </div>
  );
}

function ProfileCardPreview() {
  return (
    <div className={styles.profileStage}>
      <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/demo/avatar.svg"
        iconUrl="/demo/iconpattern.svg"
        showUserInfo={false}
        enableTilt
        enableMobileTilt={false}
        behindGlowEnabled
        behindGlowColor="rgba(255, 149, 0, 0.67)"
        innerGradient="linear-gradient(145deg,#6e52498c 0%,#ff950044 100%)"
        onContactClick={() => log('Contact clicked')}
      />
    </div>
  );
}

function DockPreview() {
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => log('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => log('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => log('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => log('Settings!') }
  ];

  return (
    <div className={styles.dockStage}>
      <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
    </div>
  );
}

function GooeyNavPreview() {
  const items = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
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
  );
}

function PixelCardPreview() {
  return (
    <PixelCard variant="pink">
      <span
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          fontSize: '2.4rem',
          fontWeight: 600,
          userSelect: 'none'
        }}
      >
        Hover Me.
      </span>
    </PixelCard>
  );
}

function CarouselPreview() {
  return (
    <div className={styles.narrow}>
      <Carousel baseWidth={300} autoplay={false} autoplayDelay={3000} pauseOnHover={false} loop={false} round={false} />
    </div>
  );
}

function SpotlightCardPreview() {
  return (
    <div className={styles.card}>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        <CardContent
          title="Boost Your Experience"
          text="Наведи курсор — пятно света следует за ним внутри карточки."
        />
      </SpotlightCard>
    </div>
  );
}

function BorderGlowPreview() {
  return (
    <div className={styles.card}>
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
        <CardContent
          title="Hover Near the Edges"
          text="Подведи курсор к границе — цветное свечение следует за направлением указателя."
        />
      </BorderGlow>
    </div>
  );
}

function GlassIconsPreview() {
  const items = [
    { icon: <FiFileText />, color: 'blue', label: 'Files' },
    { icon: <FiBook />, color: 'purple', label: 'Books' },
    { icon: <FiHeart />, color: 'red', label: 'Health' },
    { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
    { icon: <FiEdit />, color: 'orange', label: 'Notes' },
    { icon: <FiBarChart2 />, color: 'green', label: 'Stats' }
  ];

  return (
    <div className={styles.narrow}>
      <GlassIcons items={items} className="custom-class" />
    </div>
  );
}

function ElasticSliderPreview() {
  return (
    <ElasticSlider startingValue={0} defaultValue={50} maxValue={100} isStepped={false} stepSize={10} />
  );
}

function CounterPreview() {
  const [value, setValue] = useState(1);

  return (
    <div className={styles.column}>
      <Counter
        value={value}
        places={[100, 10, 1]}
        fontSize={80}
        padding={5}
        gap={10}
        borderRadius={10}
        horizontalPadding={15}
        textColor="#ffffff"
        fontWeight={900}
        gradientFrom="#0a0a0f"
      />
      <div className={styles.row}>
        <button type="button" className={styles.miniButton} onClick={() => setValue(v => Math.max(0, v - 1))}>
          −1
        </button>
        <button type="button" className={styles.miniButton} onClick={() => setValue(v => v + 1)}>
          +1
        </button>
      </div>
    </div>
  );
}

function StepperPreview() {
  return (
    <div className={styles.stepperStage}>
      <Stepper
        initialStep={1}
        onStepChange={step => log('Stepper step:', step)}
        onFinalStepCompleted={() => log('All steps completed!')}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2>Добро пожаловать</h2>
          <p>Это шаг первый — жми Next.</p>
        </Step>
        <Step>
          <h2>Шаг 2</h2>
          <p>Содержимое шага — любой React-код.</p>
        </Step>
        <Step>
          <h2>Шаг 3</h2>
          <p>Здесь может быть форма, картинка или текст.</p>
        </Step>
        <Step>
          <h2>Финальный шаг</h2>
          <p>Ты дошёл до конца.</p>
        </Step>
      </Stepper>
    </div>
  );
}

function CursorFollowerPreview() {
  return (
    <div className={styles.cursorStage}>
      <span className={styles.cursorRing} />
      <span className={styles.cursorDot} />
      <span className={styles.cursorTarget} data-cursor="pointer">
        Наведи курсор на эту плашку
      </span>
      <p className={styles.note}>
        Кастомный курсор подключён глобально в layout.js и работает на всех страницах: точка идёт за мышью мгновенно,
        кольцо — с задержкой, а на интерактивных элементах оба увеличиваются.
      </p>
    </div>
  );
}

/* id элемента из data/data.js -> компонент-превью */
export const PREVIEWS = {
  'specular-button': SpecularButtonPreview,
  'curved-input': CurvedInputPreview,
  'line-sidebar': LineSidebarPreview,
  'animated-list': AnimatedListPreview,
  'tilted-card': TiltedCardPreview,
  'reflective-card': ReflectiveCardPreview,
  folder: FolderPreview,
  'profile-card': ProfileCardPreview,
  dock: DockPreview,
  'gooey-nav': GooeyNavPreview,
  'pixel-card': PixelCardPreview,
  carousel: CarouselPreview,
  'spotlight-card': SpotlightCardPreview,
  'border-glow': BorderGlowPreview,
  'glass-icons': GlassIconsPreview,
  'elastic-slider': ElasticSliderPreview,
  counter: CounterPreview,
  'cursor-follower': CursorFollowerPreview,
  stepper: StepperPreview
};

export default function ElementPreview({ id }) {
  const Preview = PREVIEWS[id];

  if (!Preview) {
    return <p className={styles.note}>Превью для «{id}» ещё не добавлено.</p>;
  }

  return (
    <div className={styles.demo}>
      <Preview />
    </div>
  );
}
