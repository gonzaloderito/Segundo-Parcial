
import { useState } from "react";
import { AboutView} from "../about/AboutView";
import { useTranslation } from "react-i18next";
import { AboutModel } from "./AboutModel";



export const AboutController = () => {
  const [ t ,i18n] = useTranslation("global");
  const [language, setLanguage] = useState(AboutModel.language);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <AboutView
      t={t}
      i18n={i18n}
      language={language}
      onLanguageChange={handleLanguageChange}
    />
  );
};
