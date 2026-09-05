'use client';
import styles from '../../styles/Code.module.css';

export default function Code_section({ selectedElement }) {
  if (!selectedElement) {
    return (
      <div className={styles.code_sec}>
        <div className={styles.code_sec_prev2}>
          <h3>To get started select element</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.code_sec}>
      <div className={styles.code_sec2}>
        {selectedElement.code ? (
          <pre className={styles.code_block}>
            <code>{selectedElement.code}</code>
          </pre>
        ) : (
          <p>Код для этого элемента пока не добавлен.</p>
        )}
      </div>
    </div>
  );
}