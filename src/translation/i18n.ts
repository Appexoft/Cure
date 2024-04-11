import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enKeys from './langs/en';
import deKeys from './langs/de';
import roKeys from './langs/ro';
import { getLocales } from 'react-native-localize';


i18n
  .use(initReactI18next)
  .init({
    lng: getLocales()[0].languageCode,
    fallbackLng: 'EN_US',
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      EN_US: enKeys,
      DE_DE: deKeys,
      RO_RO: roKeys,
    },
  });

export default i18n;
