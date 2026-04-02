import { createContext, useEffect, useMemo, useState } from 'react';
import { defaultLanguage, getLanguageByCode, languageOptions } from './languageLogic';

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [languageCode, setLanguageCode] = useState(defaultLanguage.code);
  const language = getLanguageByCode(languageCode);

  useEffect(() => {
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
  }, [language]);

  const value = useMemo(
    () => ({ language, languageCode, setLanguageCode, languageOptions }),
    [language, languageCode]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
