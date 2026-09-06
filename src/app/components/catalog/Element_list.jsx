'use client';
import styles from '../../styles/Element_list.module.css';
import { dataBase } from '../../data/data';

export default function Element_list({ onSelectElement }) {
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
    'Stepper',
  ];

  return (
      <div className={styles.el_list}>
        <div className={styles.el_list2}>
          
           <ul>
          {elements.map((label) => {
            const item = dataBase.find((btn) => btn.label === label) || {
              id: label.toLowerCase().replace(/\s+/g, '-'),
              label,
            };

            return (
              <li
                key={item.id}
                onClick={() => onSelectElement(item)}
                style={{ cursor: 'pointer' }}
                
              >
                {label}
              </li>
            );
          })}
        </ul>
        </div>
      </div>

  );
}