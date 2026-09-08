'use client';
import styles from '../../styles/Header.module.css';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../../i18n/LanguageContext';
import Link from 'next/link';

export default function Header() {
    const { t } = useLanguage();
    return (
<header className={styles.header}>
    <div className={styles.header_left}>
        <Link href="/get-started" className={styles.header_logo}>
            <span>{t('appTitle')}</span>
        </Link>
    </div>
    <div className={styles.header_right}>
        <Link href="/get-started" className={styles.nav_button} data-cursor="pointer">
            <img src="/home.svg" alt="home" className={styles.nav_icon} />
            <span>{t('home')}</span>
        </Link>
        <Link href="/catalog" className={styles.nav_button} data-cursor="pointer">
            <img src="/catalog.svg" alt="catalog" className={styles.nav_icon} />
            <span>{t('catalog')}</span>
        </Link>
        <LanguageSelector />
        <a href="https://github.com/inject-developer/ITZ-Library" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="github" className={styles.header_icon} />
        </a>
    </div>
</header>
    );
}