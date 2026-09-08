'use client';
import { createContext, useContext, useState, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('en');

    const changeLang = useCallback((newLang) => {
        setLang(newLang);
    }, []);

    const t = useCallback((key) => {
        return translations[lang]?.[key] || key;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, changeLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
