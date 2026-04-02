export const languageOptions = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Espanol', dir: 'ltr' },
  { code: 'fr', label: 'Francais', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', dir: 'ltr' },
  { code: 'it', label: 'Italiano', dir: 'ltr' },
  { code: 'pt', label: 'Portugues', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', dir: 'rtl' },
  { code: 'zh', label: 'Chinese', dir: 'ltr' },
  { code: 'ja', label: 'Japanese', dir: 'ltr' },
  { code: 'ko', label: 'Korean', dir: 'ltr' },
  { code: 'ru', label: 'Russian', dir: 'ltr' },
  { code: 'nl', label: 'Dutch', dir: 'ltr' }
];

export const defaultLanguage = languageOptions[0];

export const getLanguageByCode = (code) => languageOptions.find((item) => item.code === code) || defaultLanguage;
