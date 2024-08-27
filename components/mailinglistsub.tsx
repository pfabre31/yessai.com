import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  posts: Post[];
  language: Language;
};

const MailingListSub = ({ posts, language }: Props) => {
  return (
    <section className="mb-10 mt-10">
      <h2
        style={{ color: "rgba(141,54,11,0)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        {versions.mailinglist[language].title}
      </h2>
      <a
        href="https://events.mastersoflovemusic.com/event/stmolml"
        target="_blank"
      >
        <button className="ticket-button bg-transparent text-white font-bold py-2 px-4 rounded section-title">
          {versions.mailinglist[language].buttonLabel}
        </button>
      </a>
    </section>
  );
};

export default MailingListSub;
