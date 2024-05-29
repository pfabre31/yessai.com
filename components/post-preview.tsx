import DateFormatter, { DateFormatterString } from "./date-formatter";
import CoverImage from "./cover-image";
import Video from "./youtube-video";
import CustomCarousel from "./custom-carousel";
import { dateTranslator, placeTranslator } from "../utils";
import { useContext } from "react";
import { LanguageContext } from "../context/language";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  type:
    | "past-show"
    | "studio-outtake"
    | "upcoming-show"
    | "tour-of-love"
    | "more-videos"
    | "press-element";
  media: "video" | "photo";
  title: string;
  coverImages: string[];
  videoSrc: string;
  date: string;
  excerpt: string;
  slug: string;
  ticketUrl: string;
  pressUrl: string;
  status?: string;
  language?: Language;
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
  pressUrl,
  status,
  language,
}: Props) => {
  return (
    <div
      className={
        type !== "past-show" && type !== "more-videos"
          ? "mb-3 gig-preview"
          : "mb-3"
      }
    >
      <div className="mb-5">
        {media === "photo" ? (
          <CoverImage
            slug={slug}
            title={title}
            src={coverImages[0]}
            type={type}
            pressUrl={pressUrl}
          />
        ) : media === "video" ? (
          <Video title={title} src={videoSrc} slug={slug} type={type}></Video>
        ) : media === "carousel" ? (
          <CustomCarousel photoSources={coverImages}></CustomCarousel>
        ) : (
          <></>
        )}
      </div>
      {type !== "studio-outtake" && (
        <h3 className="text-3xl mb-3 leading-snug post-title">
          {type === "press-element" ? title : placeTranslator(title, language)}
        </h3>
      )}
      {type === "past-show" ||
        ((type === "upcoming-show" || type === "tour-of-love") && (
          <div className="text-lg mb-4 date">
            {status === "In Discussion" && (
              <div
                style={{
                  display: "inline",
                  verticalAlign: "sub",
                }}
              >
                ~{" "}
              </div>
            )}

            {language === "EN" ? (
              <DateFormatter dateString={date}></DateFormatter>
            ) : (
              dateTranslator(
                DateFormatterString({ dateString: date }).replace(/\s+/g, " "),
                language
              )
            )}
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
            <div className="ticket-label">
              {versions.ticketslabel[language]}
            </div>
          </div>
        </a>
      )}
      {pressUrl && (
        <a target="_blank" href={pressUrl}>
          <div className="ticket-div flex gap-4">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            />
            <span className="material-symbols-outlined">news</span>
            <div className="ticket-label">
              {" "}
              {versions.press[language].label}
            </div>
          </div>
        </a>
      )}
      {status && (
        <div
          className={
            "flex gap-4 " + (status == "Booked" ? "green" : "ticket-div")
          }
        >
          {status === "Booked" && (
            <>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
              />
              <span className="material-symbols-outlined">check_circle</span>{" "}
            </>
          )}
          {status === "In Discussion" && (
            <>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
              />
              <span className="material-symbols-outlined bubble-icon">
                chat_bubble
              </span>
            </>
          )}
          <div className="ticket-label">
            {status === "Booked"
              ? versions.status.booked[language]
              : versions.status.indiscussion[language]}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPreview;
