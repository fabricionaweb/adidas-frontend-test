import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    debug: process.env.NODE_ENV.includes('dev'),
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
