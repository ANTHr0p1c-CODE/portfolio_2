import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from '../data/translations';
const LanguageContext = createContext();
function detectLanguage() {
  try {
    const stored = localStorage.getItem('portfolio-lang');
    if (stored === 'it' || stored === 'en') return stored;
    const nav = navigator.language || navigator.userLanguage || 'en';
    return nav.startsWith('it') ? 'it' : 'en';
  } catch {
    return 'it';
  }
}
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage);
  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem('portfolio-lang', l); } catch {}
  }, []);
  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let val = translations[lang];
      for (const k of keys) {
        if (val === undefined) return key;
        val = val[k];
      }
      return val ?? key;
    },
    [lang],
  );
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
