import { Language } from "../pages";
import { versions } from "../constants/versions";
import YessaiPassSub from "./yessaipasssub";

type Props = {
  language: Language;
};

const YessaiPass = ({ language }: Props) => {
  return (
    <section className="mb-2 mt-10">
      <h2
        style={{ color: "rgba(141,54,11,0)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.yessaipass.title[language]}
      </h2>
      <div className="flex flex-col justify-center align-center gap-3 text-center">
        {versions.yessaipass.benefits[language].map((b) => (
          <div>{b}</div>
        ))}
      </div>
    </section>
  );
};

export default YessaiPass;
