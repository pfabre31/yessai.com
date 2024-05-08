import type Author from "./author";

type PostType = {
  type:
    | "past-show"
    | "studio-outtake"
    | "upcoming-show"
    | "tour-of-love"
    | "more-videos";
  media: "video" | "photo";
  slug: string;
  title: string;
  date: string;
  coverImages: string[];
  videoSrc: string;
  excerpt: string;
  content: string;
  ticketUrl: string | null;
};

export default PostType;
