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
      <div className="intro-photo">
        <CoverImage
          title=""
          src="/assets/photos/bus_website_white_notrail.svg"
        ></CoverImage>
        {/* <div className="intro-photo-subtitle">yessaï.</div> */}
        {/* <div className="intro-photo-info flex justify-between">
          <div className="intro-photo-title m-3">{`Sofar Sounds London, ${
            ["EN", "ES"].includes(language) ? "June" : "Juin"
          } 2024`}</div>
          <div className="intro-photo-credits m-3 text-end">@Aśya</div>
        </div> */}
      </div>
      {/* <div className="artist-description">
        "Just sit back and let these guys take over your heart."<br></br>
        The Love Post
      </div> */}{" "}
      {/* <div className="artist-description">
        <b className="colored-sentence">
          {versions.lowkeytour[language].subtitle[0]}
        </b>
        {versions.lowkeytour[language].subtitle[1]}
        <br></br>
        <br></br>
        <b className="colored-sentence">
          {versions.lowkeytour[language].description[0]}
        </b>
        {versions.lowkeytour[language].description[1]}
        <br></br>
        <br></br>
        <div>
          <b className="colored-sentence">
            {versions.lowkeytour[language].description[2]}{" "}
          </b>{" "}
          {versions.lowkeytour[language].description[3]}
          <br></br>
        </div>
        <br></br>{" "}
        <b className="colored-sentence">
          {versions.lowkeytour[language].description[4]}{" "}
        </b>{" "}
        {versions.lowkeytour[language].description[5]}
      </div>
      <a href="https://events.mastersoflovemusic.com" target="_blank">
        <button className="ticket-button bg-transparent text-white font-bold py-2 px-4 rounded section-title">
          {versions.ticketslabel[language]}
        </button>
      </a>{" "} */}
      {/* <div className="mb-8 md:mb-16 video-block">
        <Video
          title={title}
          src={"https://www.youtube.com/embed/Vz8vlxQ7elA"}
          slug={slug}
          type={"main-video"}
        />
      </div> */}
    </section>
  );
};

export default HeroPost;
