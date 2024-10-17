import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { Language } from "../pages";
import { versions } from "../constants/versions";

type Props = {
  language: Language;
};

const YessaiPassSub = ({ language }: Props) => {
  return (
    <section className="mb-10 mt-2">
      <a
        href="https://events.mastersoflovemusic.com/event/stmolml"
        target="_blank"
      >
        <button className="ticket-button bg-transparent text-white font-bold py-2 px-4 rounded section-title">
          {versions.yessaipass.buttonLabel[language]}
        </button>
      </a>
    </section>
  );
};

export default YessaiPassSub;
