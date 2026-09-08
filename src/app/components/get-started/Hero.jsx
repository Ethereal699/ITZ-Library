'use client';
import styles from '../../styles/Hero.module.css';
import Button from "./Button";
import { useLanguage } from '../../i18n/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
    return (
<section className={styles.hero}>
<div className={styles.kicker} style={{ animationDelay: '0.1s' }}><span className={styles.sep}></span> <strong>ITZ-Library</strong></div>
<h1 className={styles.title} style={{ animationDelay: '0.2s' }}>
<span className={styles.accent}>{t('Ready to use')}</span>
</h1>
<p className={styles.lead} style={{ animationDelay: '0.3s' }}>
{t("ITZ-Library is an open-source React component library.")}
{t("It's comprehensive and can be used in production out of the box.")}
</p>
<a href="/catalog" style={{ animationDelay: '0.4s' }}><Button>{t('Get started ▸')}</Button></a>
</section>
    );
}