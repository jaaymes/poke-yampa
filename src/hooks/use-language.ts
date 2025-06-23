import { useTranslation } from "react-i18next";

export type Language = "pt-BR" | "en";

export function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language as Language;

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "pt-BR" ? "en" : "pt-BR";
    changeLanguage(newLanguage);
  };

  return {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    t,
  };
}
