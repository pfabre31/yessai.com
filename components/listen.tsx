import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  language: Language;
};

const Listen = ({ language }: Props) => {
  return (
    <section className="mb-40 mt-10">
      <h2
        style={{ color: "rgba(141,54,11,0)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.listen.title[language]}
      </h2>
      <div className="platforms-logos flex gap-10 justify-center">
        <a
          href="https://open.spotify.com/track/5epZ4ajHWzFGKlEolD3iH9?si=850e08ac04064373"
          target="_blank"
        >
          {" "}
          <img
            className="h-[4.5rem] w-[4.5rem]"
            src="/assets/icons/icon-spotify.svg"
          ></img>{" "}
        </a>
        <a
          href="https://music.apple.com/be/album/low-key-single/1762878184"
          target="_blank"
        >
          {" "}
          <img
            className="h-[4.5rem] w-[4.5rem]"
            src="/assets/icons/icon-apple-music.svg"
          ></img>{" "}
        </a>
        <a
          href="https://music.amazon.fr/tracks/B0DD4GV74H?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_5VfVxxMo3FfAkHvObrCmabjWH"
          target="_blank"
        >
          {" "}
          <img
            className="h-[4.5rem] w-[4.5rem]"
            src="/assets/icons/icon-amazon-music.svg"
          ></img>{" "}
        </a>
        <a
          href="https://music.youtube.com/watch?v=3AxzBMAB5Yc&si=vvOaTdICKyljWk4P"
          target="_blank"
        >
          {" "}
          <img
            className="h-[4.5rem] w-[4.5rem]"
            src="/assets/icons/icon-youtube-music.svg"
          ></img>{" "}
        </a>
        <a href="https://deezer.page.link/jt7B86Mp6bAyJ9wb9" target="_blank">
          {" "}
          <img
            className="h-[4.5rem] w-[4.5rem]"
            src="/assets/icons/icon-deezer.svg"
          ></img>{" "}
        </a>
        {/* <a href="https://on.soundcloud.com/Y5csMvWywG6YErTWA" target="_blank">
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
        </a> */}
      </div>
    </section>
  );
};

export default Listen;
