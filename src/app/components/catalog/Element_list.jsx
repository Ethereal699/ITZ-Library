'use client';
import styles from '../../styles/Element_list.module.css';
import { dataBase } from '../../data/data';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Element_list({ onSelectElement, selectedElement }) {
  const { t } = useLanguage();

  const elements = [
    'Specular Button',
    'Curved Input',
    'Line Sidebar',
    'Animated List',
    'Tilted Card',
    'Reflective Card',
    'Folder',
    'Profile Card',
    'Dock',
    'Gooey Nav',
    'Pixel Card',
    'Carousel',
    'Spotlight Card',
    'Border Glow',
    'Glass Icons',
    'Elastic Slider',
    'Counter',
    'Cursor Follower',
    'Stepper',
  ];

  return (
    <div className={styles.el_list}>
      <ul>
        {elements.map((label, index) => {
          const item = dataBase.find((btn) => btn.label === label) || {
            id: label.toLowerCase().replace(/\s+/g, '-'),
            label,
          };

          return (
            <li
              key={`${item.id}-${index}`}
              onClick={() => onSelectElement(item)}
              data-cursor="pointer"
              data-id={item.id}
              data-index={String(index + 1).padStart(2, '0')}
              className={selectedElement?.id === item.id ? styles.active : ''}
            >
              {t(label)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}