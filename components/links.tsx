import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { language } from "gray-matter";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  posts: Post[];
  language: Language;
};

const Links = ({ posts, language }: Props) => {
  return (
    <section className="mb-10 mt-10">
      <h2 className="home-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {versions.hometitle[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts
          .sort((p1, p2) => {
            return p1.rank - p2.rank;
          })
          .map((post) => (
            <PostPreview
              rank={post.rank}
              type={post.type}
              media={post.media}
              key={post.slug}
              title={post.title}
              coverImages={post.coverImages}
              videoSrc={post.videoSrc}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              ticketUrl={null}
              pressUrl={null}
              language={language}
              linkTo={post.linkTo}
            />
          ))}
      </div>
    </section>
  );
};

export default Links;
