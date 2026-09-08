'use client';
import styles from '../../styles/Code_exp.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { elementDescriptions } from '../../i18n/translations';

export default function Code_exp({ selectedElement }){
    const { lang, t } = useLanguage();
    if(!selectedElement)
    return(
        <div className={styles.code_exp}>
            <div className={styles.code_exp_header} />
            <div className={styles.code_exp_content}>
                <h3>{t('The code explanation will be there')}</h3>
            </div>
        </div>
    )

    const desc = elementDescriptions[lang]?.[selectedElement.label] || selectedElement.desc;

    return(
        <div className={styles.code_exp}>
            <div className={styles.code_exp_header} />
            <div className={styles.code_exp_content}>
                {desc ? (
                    <div className={styles.code_block}>
                    <p>{desc}</p>
                    </div>
                ) : (
                    <p>{t('description not yet added')}</p>
                )}
            </div>
        </div> 
    )
}