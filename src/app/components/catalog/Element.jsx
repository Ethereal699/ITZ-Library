'use client'
import styles from '../../styles/Element.module.css';
import ElementPreview from './previews/ElementPreview';

export default function Element({ selectedElement }) {
  const isSelected = Boolean(selectedElement);

  // Пока элемент не выбран, блок не показываем — подсказка есть в панели кода
  if (!isSelected) return null;

  return (
    // key перезапускает анимацию появления при смене элемента
    <div className={`${styles.selected_element} ${styles.with_preview}`} key={selectedElement.id}>
      <h3>{selectedElement.label}</h3>

      <div className={styles.stage}>
        {/* key перезапускает компонент при смене элемента */}
        <div className={styles.stage_inner} key={selectedElement.id}>
          <ElementPreview id={selectedElement.id} />
        </div>
      </div>
    </div>
  );
}
