import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  type: "video" | "photo";
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  type,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  console.log(type);
  return (
    <div>
      <div className="mb-5">
        {type === "photo" ? (
          <CoverImage slug={slug} title={title} src={coverImage} />
        ) : (
          <div>Ouais</div>
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
};

export default PostPreview;
