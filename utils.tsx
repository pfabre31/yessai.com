import { Language } from "./pages";
import { versions } from "./constants/versions";

export const dateTranslator = (engDate: string, targetLang: Language) => {
  console.log(engDate);
  const month = engDate.split(" ")[0];
  let day = engDate.split(" ")[1].slice(0, 2);
  if (day[1] === ",") day = day.slice(0, 1);
  const year = engDate.split(" ")[2];
  if (targetLang === "FR")
    return <div>{`${day} ${versions.months[month]["FR"]} ${year}`}</div>;
};
