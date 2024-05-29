import { Language } from "./pages";
import { versions } from "./constants/versions";

export const dateTranslator = (engDate: string, targetLang: Language) => {
  const month = engDate.split(" ")[0];
  let day = engDate.split(" ")[1].slice(0, 2);
  if (day[1] === ",") day = day.slice(0, 1);
  const year = engDate.split(" ")[2];
  if (targetLang === "FR")
    return `${day} ${versions.months[month]["FR"]} ${year}`;
};

export const placeTranslator = (placeName: string, targetLang: Language) => {
  let place1 = placeName.split(",")[0];
  if (["London", "Sevilla"].includes(place1))
    place1 = versions.places[place1.toLowerCase()][targetLang];
  let place2 = placeName.split(", ")[1];
  if (["Italy", "Spain", "London"].includes(place2))
    place2 = versions.places[place2.toLowerCase().trim()][targetLang];

  return `${place1}, ${place2}`;
};
