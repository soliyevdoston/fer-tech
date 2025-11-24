import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationUz from "./locales/uz/translation.json";
import translationUzc from "./locales/uzc/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationEn from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    uzc: { translation: translationUzc },
    ru: { translation: translationRu },
    en: { translation: translationEn },
  },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});

export default i18n;
