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
import MoreVideos from "../components/more-videos";
import Press from "../components/press";
import AboutUs from "../components/aboutus";
import LanguageSwitcher from "../components/language-switcher";
import { useState } from "react";
import { LanguageContext } from "../context/language";

type Props = {
  allPosts: Post[];
};

export type Language = "EN" | "FR";

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(0);
  const [language, setLanguage] = useState("EN" as Language);
  const value = {
    language,
    setLanguage: (l: Language) => setLanguage(l),
  };

  return (
    <LanguageContext.Provider value={value as any}>
      <Layout>
        <Head>
          <title>Masters of Love</title>
        </Head>
        <Container>
          <LanguageSwitcher></LanguageSwitcher>
          <Intro language={language as any} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImages={null}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              ticketUrl={heroPost.ticketUrl}
              language={language as any}
            />
          )}
          <AboutUs posts={morePosts} language={language}></AboutUs>
          {morePosts.length > 0 && (
            <UpcomingShows
              language={language as any}
              posts={morePosts.filter((p) => p.type === "upcoming-show")}
            />
          )}
          {morePosts.length > 0 && (
            <TourOfLove
              language={language as any}
              posts={morePosts.filter((p) => p.type === "tour-of-love")}
            />
          )}

          {morePosts.length > 0 && (
            <PastShows
              language={language}
              posts={morePosts.filter((p) => p.type === "past-show")}
            />
          )}
          {morePosts.length > 0 && (
            <Press
              language={language as any}
              posts={morePosts.filter((p) => p.type === "press-element")}
            />
          )}
          {morePosts.length > 0 && (
            <MoreVideos
              language={language as any}
              posts={morePosts.filter((p) => p.type === "more-videos")}
            />
          )}
        </Container>
      </Layout>
    </LanguageContext.Provider>
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
    "pressUrl",
    "status",
  ]);

  return {
    props: { allPosts },
  };
};
