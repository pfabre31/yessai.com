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

const HeroPost = ({ language }: Props) => {
  return (
    <section className="h-screen flex justify-center flex-col">
      {" "}
      <div className="intro-photo">
        <CoverImage
          title=""
          src="/assets/photos/bus_website_white_notrail.svg"
        ></CoverImage>
      </div>{" "}
      <h2 className="home-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {versions.hometitle[language]}
      </h2>
    </section>
  );
};

export default HeroPost;
