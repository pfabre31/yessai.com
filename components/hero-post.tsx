import Video from "./youtube-video";
import type Author from "../interfaces/author";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImages: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImages,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="intro-photo">
        <CoverImage
          title="Omeara, Nov. 2023"
          src="/assets/photos/omeara.jpg"
        ></CoverImage>
        <div className="intro-photo-info flex justify-between">
          <div className="intro-photo-title m-3">Omeara, Nov. 2023</div>
          <div className="intro-photo-credits m-3 text-end">
            © Kadeen-Mae Brown
          </div>
        </div>
      </div>
      <div className="artist-description">
        "London-based singer-songwriter and pianist blending Neo Soul, Jazz,
        Pop, and Disco into a unique, smooth, yet groovy and electrifying
        sound."
      </div>
      <div className="mb-8 md:mb-16 video-block">
        <Video
          title={title}
          src={"https://www.youtube.com/embed/9Mov_Ul8Gf4?hd=1?hd=1"}
          slug={slug}
          type={"main-video"}
        />
      </div>
      {/* <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div> */}
    </section>
  );
};

export default HeroPost;
