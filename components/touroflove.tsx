import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  posts: Post[];
  language: Language;
};

const TourOfLove = ({ posts, language }: Props) => {
  return (
    <section className="mb-10 mt-10">
      <h2
        style={{ color: "rgb(141 54 11)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title tour-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.touroflove[language].maintitle}
      </h2>
      <h2
        style={{ color: "rgb(141 54 11)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="subsection-title tour-title mb-10 text-4xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.touroflove[language].subtitle}
      </h2>
      <div className="artist-description">
        {versions.touroflove[language].content[0]}
        <br></br>
        <br></br>
        {versions.touroflove[language].content[1]}
        <br></br>
        <br></br>
        <div>
          {versions.touroflove[language].content[2]}
          <br></br>
          <br></br>
          <div className="colored-sentence">
            {versions.touroflove[language].content[3]}
          </div>
        </div>
        <br></br> <br></br> {versions.touroflove[language].content[4]}
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
              language={language}
            />
          ))}
      </div>
    </section>
  );
};

export default TourOfLove;
