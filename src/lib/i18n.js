// src/lib/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/* ===== EN Files ===== */
import enCommon   from "../locales/en/common.json";
import enServices from "../locales/en/services.json";
import enClinic   from "../locales/en/clinic.json";
import enDoctors  from "../locales/en/doctors.json";
import enAbout    from "../locales/en/about.json";
import enContact  from "../locales/en/contact.json";
import enBooking  from "../locales/en/booking.json";
import enNotFound from "../locales/en/notFound.json";


/* ===== AR Files ===== */
import arCommon   from "../locales/ar/common.json";
import arServices from "../locales/ar/services.json";
import arClinic   from "../locales/ar/clinic.json";
import arDoctors  from "../locales/ar/doctors.json";
import arAbout    from "../locales/ar/about.json";
import arContact  from "../locales/ar/contact.json";
import arBooking  from "../locales/ar/booking.json";
import arNotFound from "../locales/ar/notFound.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common:   enCommon,
        services: enServices,
        clinic:   enClinic,
        doctors:  enDoctors,
        about:    enAbout,
        contact:  enContact,
        booking:  enBooking,
        notFound: enNotFound,
      },
      ar: {
        common:   arCommon,
        services: arServices,
        clinic:   arClinic,
        doctors:  arDoctors,
        about:    arAbout,
        contact:  arContact,
        booking:  arBooking,
        notFound: arNotFound,
      },
    },
    fallbackLng: "en",
    ns: ["common", "services", "clinic", "doctors", "about", "contact", "booking","notFound"],
    defaultNS: "common",
    detection: {
      order: ["localStorage", "htmlTag", "navigator"],
      caches: ["localStorage"], // key: i18nextLng
    },
    interpolation: { escapeValue: false },
  });

// Apply RTL/LTR on language change
const applyDir = (lng) => {
  document.documentElement.setAttribute("dir", lng?.startsWith("ar") ? "rtl" : "ltr");
};
applyDir(i18n.resolvedLanguage);
i18n.on("languageChanged", applyDir);

export default i18n;
