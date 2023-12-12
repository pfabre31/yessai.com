import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import type Author from "../interfaces/author";
import Video from "./youtube-video";
import CustomCarousel from "./custom-carousel";

type Props = {
  type: "past-show" | "studio-outtake";
  media: "video" | "photo";
  title: string;
  coverImages: string[];
  videoSrc: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  type,
  media,
  title,
  coverImages,
  videoSrc,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="mb-3">
      <div className="mb-5">
        {media === "photo" ? (
          <CoverImage slug={slug} title={title} src={coverImages[0]} />
        ) : media === "video" ? (
          <Video title={title} src={videoSrc} slug={slug} type={type}></Video>
        ) : (
          <CustomCarousel photoSources={coverImages}></CustomCarousel>
        )}
      </div>
      {type !== "studio-outtake" && (
        <h3 className="text-3xl mb-3 leading-snug post-title">{title}</h3>
      )}
      {type === "past-show" && (
        <div className="text-lg mb-4 date">
          <DateFormatter dateString={date} />
        </div>
      )}

      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
};

export default PostPreview;
