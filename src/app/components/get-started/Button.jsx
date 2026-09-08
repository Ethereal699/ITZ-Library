'use client';
import styles from '../../styles/Button.module.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Button({ children }) {
    const { t } = useLanguage();
    return <button className={styles.btn}>{children || t('Get started ▸')}</button>;
}