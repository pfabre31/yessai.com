import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  language: Language;
};

const Listen = ({ language }: Props) => {
  return (
    <section className="mb-10 mt-10">
      <h2
        style={{ color: "rgb(141 54 11)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.listen.title[language]}
      </h2>
      <div className="platforms-logos flex gap-10 justify-center">
        <a href="https://on.soundcloud.com/Y5csMvWywG6YErTWA" target="_blank">
          {" "}
          <img
            className="h-[4.5rem] w-[4.5rem]"
            src="/assets/icons/icon-soundcloud.svg"
          ></img>{" "}
        </a>
        <a href="https://www.youtube.com/@MastersofLove-ew2bf" target="_blank">
          {" "}
          <img
            className="h-[4.5rem] w-[4.5rem]"
            src="/assets/icons/icon-youtube.svg"
          ></img>{" "}
        </a>
        <a
          href="https://www.instagram.com/mastersofloveofficial/"
          target="_blank"
        >
          {" "}
          <img
            className="h-[4.5rem] w-[4.5rem]"
            src="/assets/icons/icon-insta-2.svg"
          ></img>{" "}
        </a>
      </div>
    </section>
  );
};

export default Listen;
