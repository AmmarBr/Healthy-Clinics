import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en/common.json";
import ar from "../locales/ar/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { common: en }, ar: { common: ar } },
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    detection: {
      order: ["localStorage", "htmlTag", "navigator"],
      caches: ["localStorage"],            // يخزن في localStorage (key: i18nextLng)
    },
    interpolation: { escapeValue: false }
  });

// ضبط RTL عند تغيير اللغة
const applyDir = (lng) => {
  document.documentElement.setAttribute("dir", lng.startsWith("ar") ? "rtl" : "ltr");
};
applyDir(i18n.resolvedLanguage);
i18n.on("languageChanged", applyDir);

export default i18n;
