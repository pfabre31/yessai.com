import Video from "./youtube-video";
import type Author from "../interfaces/author";
import CoverImage from "./cover-image";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  title: string;
  coverImages: string;
  date: string;
  excerpt: string;
  slug: string;
  ticketUrl: string | null;
  language: Language;
};

const HeroPost = ({
  title,
  coverImages,
  date,
  excerpt,
  slug,
  language,
}: Props) => {
  return (
    <section>
      {" "}
      <h2
        style={{ color: "rgba(141,54,11,0)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.touroflove[language].maintitle}
      </h2>
      <div className="intro-photo">
        <CoverImage
          title=""
          src="/assets/photos/lowkey_tour_poster.png"
        ></CoverImage>
        <div className="intro-photo-info flex justify-between">
          <div className="intro-photo-title m-3">{`Sofar Sounds London, ${
            ["EN", "ES"].includes(language) ? "June" : "Juin"
          } 2024`}</div>
          <div className="intro-photo-credits m-3 text-end">@Aśya</div>
        </div>
      </div>
      {/* <div className="artist-description">
        "Just sit back and let these guys take over your heart."<br></br>
        The Love Post
      </div> */}{" "}
      <a href="https://events.mastersoflovemusic.com" target="_blank">
        <button className="ticket-button bg-transparent text-white font-bold py-2 px-4 rounded section-title">
          Get your tickets
        </button>
      </a>
      <div className="mb-8 md:mb-16 video-block">
        <Video
          title={title}
          src={"https://www.youtube.com/embed/ctGnMgJTZFA"}
          slug={slug}
          type={"main-video"}
        />
      </div>
    </section>
  );
};

export default HeroPost;
