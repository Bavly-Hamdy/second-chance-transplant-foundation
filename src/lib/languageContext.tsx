import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Language, type Translations } from "./i18n";

export interface LanguageContextType {
  language: Language;
  isRtl: boolean;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "sctf_language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "en" || saved === "ar") {
        setLanguageState(saved);
        applyLanguageToDom(saved);
      } else {
        // Check navigator language
        const navLang = navigator.language?.toLowerCase() || "";
        const initial = navLang.startsWith("ar") ? "ar" : "en";
        setLanguageState(initial);
        applyLanguageToDom(initial);
      }
    } catch {
      applyLanguageToDom("en");
    }
  }, []);

  const applyLanguageToDom = (lang: Language) => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      if (lang === "ar") {
        document.documentElement.classList.add("lang-ar");
      } else {
        document.documentElement.classList.remove("lang-ar");
      }
    }
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    applyLanguageToDom(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore storage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const isRtl = language === "ar";
  const t = content[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        isRtl,
        t,
        setLanguage,
        toggleLanguage,
      }}
    >
      <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "font-[var(--font-ar-body)]" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export { useLanguage } from "@/hooks/useLanguage";
