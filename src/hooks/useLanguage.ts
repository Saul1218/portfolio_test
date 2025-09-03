import { useState, useEffect } from 'react';
import { translations } from '../utils/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  const t = (key: string) => {
    return translations[language]?.[key] || translations['es'][key] || key;
  };

  return {
    language,
    toggleLanguage,
    t
  };
};