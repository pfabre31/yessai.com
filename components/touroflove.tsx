import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const TourOfLove = ({ posts }: Props) => {
  return (
    <section className="mb-10 mt-10">
      <h2
        style={{ color: "rgb(141 54 11)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title tour-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        Tour
      </h2>
      <h2
        style={{ color: "rgb(141 54 11)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="subsection-title tour-title mb-10 text-4xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        The Tour of Love - 2024
      </h2>
      <div className="artist-description">
        As musicians, our aim is to touch people as directly and sincerely as we
        can.<br></br>
        Each year, we embark on our Tour of Love across Europe to tighten our
        community. <br></br>
        <div>
          No booker, tour manager, or record label.{" "}
          <div className="colored-sentence">
            Just us, our crowd, and you-the venue.
          </div>
        </div>
        <br></br> <br></br>Get in touch to be part of the 2024 edition !
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-5 md:gap-y-5">
        {posts
          .sort((p1, p2) => {
            return p1.excerpt.localeCompare(p2.excerpt);
          })
          .map((post) => (
            <PostPreview
              type={post.type}
              media={post.media}
              key={post.slug}
              title={post.title}
              coverImages={post.coverImages}
              videoSrc={post.videoSrc}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              ticketUrl={post.ticketUrl}
              pressUrl={post.pressUrl}
              status={post.status}
            />
          ))}
      </div>
    </section>
  );
};

export default TourOfLove;
