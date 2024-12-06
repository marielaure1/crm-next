import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Connecter i18n à React
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          hello: 'Hello World!',
        },
      },
      fr: {
        translation: {
          welcome: 'Bienvenue',
          hello: 'Bonjour tout le monde !',
        },
      },
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue utilisée si la traduction est manquante
    interpolation: {
      escapeValue: false, // Pas besoin d'échapper les valeurs dans React
    },
  });

export default i18n;
