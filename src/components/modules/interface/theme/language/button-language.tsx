'use client'

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function ButtonLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    // i18n.changeLanguage(lang); // Change dynamiquement la langue
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en'; // Récupérer la langue sauvegardée
    // i18n.changeLanguage(savedLang);
  }, []);

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>
        <span className="fi fi-gb"></span>
      </button>
      <button onClick={() => changeLanguage('fr')}>
        <span className="fi fi-fr"></span>
      </button>
    </div>
  );
}



