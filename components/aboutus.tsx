import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const AboutUs = ({ posts }: Props) => {
  return (
    <section className="mb-10 mt-10">
      <h2
        style={{ color: "rgb(141 54 11)" /*"#cb87e7" "#f3e0fb;"*/ }}
        className="section-title mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
      >
        About us
      </h2>
      <p className="artist-description">
        We're a four-piece independent band based in London, United Kingdom.{" "}
        <br></br>Four high-end musicians whose careers have taken us to New
        Orleans, New York's Carnegie Hall, Montreux Jazz Festival or Abbey Road
        Studios.
        <br></br>
        <br></br>
        Our music, composed primarly of original songs, is a blend of Neo Soul,
        Jazz, Funk, Pop and Hip Hop. It's intense, smooth, and electrifying all
        at once, just like our debut EP coming out in September 2024. <br></br>
        <br></br> We believe in community. We believe in independence, ownership
        of our music, and total freedom of movement.
      </p>
    </section>
  );
};

export default AboutUs;
