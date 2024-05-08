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
import UpcomingShows from "../components/upcoming-shows";
import TourOfLove from "../components/touroflove";

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
          <title>Masters of Love</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImages={null}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              ticketUrl={heroPost.ticketUrl}
            />
          )}
          {morePosts.length > 0 && (
            <UpcomingShows
              posts={morePosts.filter((p) => p.type === "upcoming-show")}
            />
          )}
          {morePosts.length > 0 && (
            <TourOfLove
              posts={morePosts.filter((p) => p.type === "tour-of-love")}
            />
          )}

          {morePosts.length > 0 && (
            <PastShows
              posts={morePosts.filter((p) => p.type === "past-show")}
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
    "coverImages",
    "excerpt",
    "ticketUrl",
  ]);

  return {
    props: { allPosts },
  };
};
