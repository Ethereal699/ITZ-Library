'use client';

import styles from '../../styles/Prev.module.css';
import { dataBase } from '../../data/data';

export default function Prev({ selectedElement }) {
  if (!selectedElement) {
    return (
      <div className={styles.selected_element_prev}>
        <div className={styles.selected_element_prev2}>
          <h3>To get started select element</h3>
        </div>
      </div>
    );
  }

  const Component = selectedElement.component;

  return (
    <div className={styles.selected_element_prev}>
      <div className={styles.selected_element_prev2}>
        <Component {...selectedElement.props}>
          {selectedElement.children}
        </Component>
      </div>
    </div>
  );
}