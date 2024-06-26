import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import zh from "./locales/zh.json";
import en from "./locales/en.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "zh",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: en },
            "zh-CN": { translation: zh },
            zh: { translation: zh },
        },
    });

export default i18n;
