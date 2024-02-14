import Video from "./youtube-video";
import type Author from "../interfaces/author";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImages: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImages,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="intro-photo">
        <CoverImage
          title="Omeara, Nov. 2023"
          src="/assets/photos/mol_bw.jpg"
        ></CoverImage>
        <div className="intro-photo-info flex justify-between">
          <div className="intro-photo-title m-3">Dublin Castle, Feb. 2024</div>
          <div className="intro-photo-credits m-3 text-end">@Aśya</div>
        </div>
      </div>
      <div className="artist-description">
        "Just sit back and let these guys take over your heart."<br></br>
        The Love Post
      </div>
      <div className="mb-8 md:mb-16 video-block">
        <Video
          title={title}
          src={"https://www.youtube.com/embed/EAkrFETtF3k"}
          slug={slug}
          type={"main-video"}
        />
      </div>
    </section>
  );
};

export default HeroPost;
