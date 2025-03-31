import { useState } from "react";
import translations from "../i18n/translations";

export default function useTranslation() {
  const [language, setLanguage] = useState("en");

  const t = (key) => translations[language][key] || key;

  return { t, language, setLanguage };
}
