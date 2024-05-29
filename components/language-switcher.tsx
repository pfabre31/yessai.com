import { LanguageContext } from "../context/language";
import { useContext } from "react";

const LanguageSwitcher = (props) => {
  const { language, setLanguage } = useContext(LanguageContext);
  console.log(language);
  return (
    <div className="absolute flex gap-3 top-5 right-5">
      <a onClick={() => setLanguage("EN")}>
        <div
          className={
            "language-label " + (language === "EN" ? "underlined " : "")
          }
        >
          EN
        </div>
      </a>
      <a onClick={() => setLanguage("FR")}>
        <div
          className={
            "language-label " + (language === "FR" ? "underlined " : "")
          }
        >
          FR
        </div>
      </a>
    </div>
  );
};

export default LanguageSwitcher;
