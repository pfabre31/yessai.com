import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import type Author from "../interfaces/author";
import Video from "./youtube-video";
import CustomCarousel from "./custom-carousel";

type Props = {
  type: "past-show" | "studio-outtake" | "upcoming-show" | "tour-of-love";
  media: "video" | "photo";
  title: string;
  coverImages: string[];
  videoSrc: string;
  date: string;
  excerpt: string;
  slug: string;
  ticketUrl: string;
};

const PostPreview = ({
  type,
  media,
  title,
  coverImages,
  videoSrc,
  date,
  excerpt,
  slug,
  ticketUrl,
}: Props) => {
  return (
    <div
      className={
        type === "tour-of-love" || type === "upcoming-show"
          ? "mb-3 gig-preview"
          : "mb-3"
      }
    >
      <div className="mb-5">
        {media === "photo" ? (
          <CoverImage slug={slug} title={title} src={coverImages[0]} />
        ) : media === "video" ? (
          <Video title={title} src={videoSrc} slug={slug} type={type}></Video>
        ) : media === "carousel" ? (
          <CustomCarousel photoSources={coverImages}></CustomCarousel>
        ) : (
          <></>
        )}
      </div>
      {type !== "studio-outtake" && (
        <h3 className="text-3xl mb-3 leading-snug post-title">{title}</h3>
      )}
      {type === "past-show" ||
        ((type === "upcoming-show" || type === "tour-of-love") && (
          <div className="text-lg mb-4 date">
            {<DateFormatter dateString={date} />}
          </div>
        ))}
      {ticketUrl && (
        <a target="_blank" href={ticketUrl}>
          <div className="ticket-div flex gap-4">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <span className="material-symbols-outlined">
              confirmation_number
            </span>
            <div className="ticket-label">Get tickets</div>
          </div>
        </a>
      )}
    </div>
  );
};

export default PostPreview;
