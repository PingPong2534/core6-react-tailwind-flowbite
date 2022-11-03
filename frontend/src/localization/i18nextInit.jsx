import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import commonEN from "../assets/locales/common.en.json";
import commonTH from "../assets/locales/common.th.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "th"];

const resources = {
    en: {
        common: commonEN,
    },
    th: {
        common: commonTH,
    },
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,

        detection: {
            checkWhitelist: true
        },

        debug: false,

        supportedLngs: availableLanguages,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
