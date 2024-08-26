import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  posts: Post[];
  language: Language;
};

const AboutUs = ({ posts, language }: Props) => {
  return (
    <section className="mb-10 mt-10">
      <h2
        style={{ color: "rgba(141,54,11,0)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.aboutus[language].title}
      </h2>
      <div className="artist-description">
        <b className="colored-sentence">
          {versions.aboutus[language].description[0]}
        </b>
        {versions.aboutus[language].description[1]}
        <br></br>
        <br></br>
        <div>
          <b className="colored-sentence">
            {versions.aboutus[language].description[2]}{" "}
          </b>{" "}
          {versions.aboutus[language].description[3]}
          <br></br>
        </div>
        <br></br>{" "}
        <b className="colored-sentence">
          {versions.aboutus[language].description[4]}{" "}
        </b>{" "}
        {versions.aboutus[language].description[5]}
      </div>
    </section>
  );
};

export default AboutUs;
