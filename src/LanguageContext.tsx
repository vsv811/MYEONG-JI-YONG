import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from './types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (kr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('KR');

  const t = (kr: string, en: string) => (lang === 'KR' ? kr : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
