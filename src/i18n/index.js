import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uz from "./uz.json";
import uzc from "./uzc.json";
import ru from "./ru.json";
import eng from "./eng.json";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    uzc: { translation: uzc },
    ru: { translation: ru },
    eng: { translation: eng },
  },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});

export default i18n;
