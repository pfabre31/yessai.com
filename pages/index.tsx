import Container from "../components/container";
import PastShows from "../components/past-shows";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import StudioOuttakes from "../components/studio-outtakes";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(0);

  return (
    <>
      <Layout>
        <Head>
          <title>Paul Fabre Music</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImages={null}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && (
            <PastShows
              posts={morePosts.filter((p) => p.type === "past-show")}
            />
          )}
          {morePosts.length > 0 && (
            <StudioOuttakes
              posts={morePosts.filter((p) => p.type === "studio-outtake")}
            />
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "type",
    "media",
    "videoSrc",
    "title",
    "date",
    "slug",
    "author",
    "coverImages",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
