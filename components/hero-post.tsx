import Video from "./youtube-video";
import type Author from "../interfaces/author";
import CoverImage from "./cover-image";
import { Language } from "../pages";

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
      <div className="intro-photo">
        <CoverImage
          title="Sofar, June. 2024"
          src="/assets/photos/sofar-cover-comp.jpg"
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
      </div> */}
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
