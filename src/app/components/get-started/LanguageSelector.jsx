'use client';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from '../../styles/Header.module.css';

const LANGUAGES = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'zh', label: '中文' },
];

export default function LanguageSelector() {
    const { lang, changeLang } = useLanguage();

    return (
        <div className={styles.lang_selector}>
            {LANGUAGES.map((l) => (
                <button
                    key={l.code}
                    className={`${styles.lang_btn} ${lang === l.code ? styles.lang_active : ''}`}
                    onClick={() => changeLang(l.code)}
                    aria-label={`Switch to ${l.label}`}
                >
                    {l.label}
                </button>
            ))}
        </div>
    );
}
