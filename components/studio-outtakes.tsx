import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const StudioOuttakes = ({ posts }: Props) => {
  return (
    <section className="mb-10">
      <h2
        style={{ color: "#671a6b" /*"#cb87e7""#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        Studio Outtakes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts
          .sort((p1, p2) => {
            const rank1 = parseInt(p1.excerpt.split(" ")[2][1]);
            const rank2 = parseInt(p2.excerpt.split(" ")[2][1]);
            return rank2 - rank1;
          })
          .reverse()
          .map((post) => (
            <PostPreview
              type={post.type}
              media={post.media}
              key={post.slug}
              title={post.title}
              coverImages={post.coverImages}
              videoSrc={post.videoSrc}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
      </div>
    </section>
  );
};

export default StudioOuttakes;
