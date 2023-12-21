import type Author from "./author";

type PostType = {
  type: "past-show" | "studio-outtake" | "upcoming-show";
  media: "video" | "photo";
  slug: string;
  title: string;
  date: string;
  coverImages: string[];
  videoSrc: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
