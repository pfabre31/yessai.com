import cn from "classnames";

type Props = {
  title: string;
  src: string;
  slug?: string;
  type: string | undefined;
};

const YoutubeVideo = ({ title, src, slug, type }: Props) => {
  const video = (
    <div
      className="w-full"
      style={{ height: type === "main-video" ? "56vw" : "25rem" }}
    >
      {" "}
      <iframe
        width="100%"
        height="100%"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  return <div className="sm:mx-0">{video}</div>;
};

export default YoutubeVideo;
