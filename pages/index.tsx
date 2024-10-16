import Container from "../components/container";
import Links from "../components/links";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import LanguageSwitcher from "../components/language-switcher";
import { useState } from "react";
import { LanguageContext } from "../context/language";
import MailingListSub from "../components/mailinglistsub";

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
          <title>Yessaï</title>
        </Head>
        <Container>
          <LanguageSwitcher></LanguageSwitcher>
          {/* <Intro language={language as any} /> */}
          {/* <Listen language={language}></Listen> */}
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
          )}{" "}
          {/* {morePosts.length > 0 && (
            <LowkeyTour
              language={language as any}
              posts={morePosts.filter((p) => p.type === "tour-of-love")}
            />
          )} */}
          {/* <AboutUs posts={morePosts} language={language}></AboutUs>{" "} */}
          {morePosts.length > 0 && (
            <Links
              language={language}
              posts={morePosts.filter((p) => p.type === "link")}
            />
          )}
          <MailingListSub
            posts={morePosts}
            language={language}
          ></MailingListSub>
          {/* {morePosts.length > 0 && (
            <UpcomingShows
              language={language as any}
              posts={morePosts.filter((p) => p.type === "upcoming-show")}
            />
          )} */}
          {/* {morePosts.length > 0 && (
            <MoreVideos
              language={language as any}
              posts={morePosts.filter((p) => p.type === "more-videos")}
            />
          )} */}
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
    "rank",
    "title",
    "date",
    "slug",
    "coverImages",
    "excerpt",
    "ticketUrl",
    "pressUrl",
    "status",
    "linkTo",
  ]);

  return {
    props: { allPosts },
  };
};
