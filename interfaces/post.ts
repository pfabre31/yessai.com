import type Author from "./author";

type PostType = {
  type:
    | "past-show"
    | "studio-outtake"
    | "upcoming-show"
    | "tour-of-love"
    | "more-videos"
    | "press-element";
  media: "video" | "photo";
  slug: string;
  title: string;
  date: string;
  coverImages: string[];
  videoSrc: string;
  excerpt: string;
  content: string;
  ticketUrl: string | null;
  pressUrl: string | null;
};

export default PostType;
