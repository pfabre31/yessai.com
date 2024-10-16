import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { versions } from "../constants/versions";
import { Language } from "../pages";

type Props = {
  posts: Post[];
  language: Language;
};

const UpcomingShows = ({ posts, language }: Props) => {
  return posts.length === 0 ? (
    <></>
  ) : (
    <section className="mb-10 mt-10">
      <h2
        style={{ color: "rgb(141 54 11)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.upcominghomeshows[language]}
      </h2>
      <div className="flex flex-col center">
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
              pressUrl={null}
              language={language}
              rank={post.rank}
            />
          ))}
      </div>
    </section>
  );
};

export default UpcomingShows;
