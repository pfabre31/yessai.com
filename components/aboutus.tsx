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
      <p className="artist-description">
        {versions.aboutus[language].content[0]}
        <br></br>
        <br></br>
        {versions.aboutus[language].content[1]}
        <br></br>
        <br></br>
        {versions.aboutus[language].content[2]}
        <br></br>
        <br></br>
        {versions.aboutus[language].content[3]}
      </p>
    </section>
  );
};

export default AboutUs;
