import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const UpcomingShows = ({ posts }: Props) => {
  return (
    <section className="mb-10 mt-10">
      <h2
        style={{ color: "rgb(141 54 11)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        Upcoming Shows
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-5 md:gap-y-5">
        {posts
          .sort((p1, p2) => {
            return new Date(p2.date).getDate() - new Date(p1.date).getDate();
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
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
      </div>
    </section>
  );
};

export default UpcomingShows;
