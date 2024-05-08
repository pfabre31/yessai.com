import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  type: string;
  pressUrl?: string;
};

const CoverImage = ({ title, src, slug = null, type, pressUrl }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        type === "press-element"
          ? "shadow-sm w-[28rem] media"
          : "shadow-sm w-full media",
        {
          "hover:shadow-lg transition-shadow duration-200": slug,
        }
      )}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {type === "something" ? (
        <Link as={`src`} href={src} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
