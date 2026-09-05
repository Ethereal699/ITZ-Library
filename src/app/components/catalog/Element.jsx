'use client'
import styles from '../../styles/Element.module.css';
import { useState } from 'react';
export default function Element({ selectedElement }) {
  return (
    <div>
      <div className={styles.selected_element}>
        <h3>
          {selectedElement
            ? `${selectedElement.label}`
            : 'To get started select element'}
        </h3>
      </div>
    </div>
  );
}
