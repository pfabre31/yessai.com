import cn from "classnames";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const Video = ({ title, src, slug }: Props) => {
  const video = (
    <div className="w-full" style={{ height: "56vw" }}>
      {" "}
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/9Mov_Ul8Gf4?hd=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  return <div className="sm:mx-0">{video}</div>;
};

export default Video;
