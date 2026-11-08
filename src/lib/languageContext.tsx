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
      // 1. Check URL search param first (e.g., ?lang=fr or ?lang=es)
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get("lang")?.toLowerCase() as Language | null;
        if (urlLang === "en" || urlLang === "ar" || urlLang === "fr" || urlLang === "es") {
          setLanguageState(urlLang);
          applyLanguageToDom(urlLang);
          localStorage.setItem(STORAGE_KEY, urlLang);
          return;
        }
      }

      // 2. Check localStorage
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "en" || saved === "ar" || saved === "fr" || saved === "es") {
        setLanguageState(saved);
        applyLanguageToDom(saved);
      } else {
        // 3. Fallback to navigator browser language
        const navLang = navigator.language?.toLowerCase() || "";
        let initial: Language = "en";
        if (navLang.startsWith("ar")) initial = "ar";
        else if (navLang.startsWith("fr")) initial = "fr";
        else if (navLang.startsWith("es")) initial = "es";

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
    const order: Language[] = ["en", "ar", "fr", "es"];
    const nextIdx = (order.indexOf(language) + 1) % order.length;
    setLanguage(order[nextIdx] || "en");
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
