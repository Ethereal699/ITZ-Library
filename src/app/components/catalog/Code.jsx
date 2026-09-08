'use client';
import styles from '../../styles/Code.module.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Code_section({ selectedElement }) {
  const { t } = useLanguage();

  if (!selectedElement) {
    return (
      <div className={styles.code_sec}>
        <div className={styles.code_sec_header} />
        <div className={styles.code_sec_content}>
          <h3>{t('To get started select element')}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.code_sec}>
      <div className={styles.code_sec_header} />
      <div className={styles.code_sec_content}>
        {selectedElement.code ? (
          <pre className={styles.code_block}>
            <code>{selectedElement.code}</code>
          </pre>
        ) : (
          <p>{t('Code for this element is not yet added')}</p>
        )}
      </div>
    </div>
  );
}