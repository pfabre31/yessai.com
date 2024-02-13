import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="h-screen gap-8 flex-col flex items-center justify-center md:mb-12">
      <div className="flex main-title-all">
        <div className="flex main-title-word">
          {" "}
          <div
            style={{ color: "#8515d5" /*"#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            M
          </div>
          <div
            style={{ color: "#891414" }}
            className="flicker-fast main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            a
          </div>
          <div
            style={{
              color: "rgb(109 30 163)" /*"#8515d5"*/,
            }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            s
          </div>
          <div
            style={{ color: "rgb(51 8 105)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            t
          </div>
          <div
            style={{ color: "#891414" }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            e
          </div>
          <div
            style={{ color: "rgb(51 8 105)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            r
          </div>
          <div
            style={{ color: "rgb(51 8 105)" /*"#8515d5" "#670ed5"*/ }}
            className="flicker-slow main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            s
          </div>
        </div>
        <div className="flex main-title-word">
          {" "}
          <div
            style={{ color: "#891414" }}
            className="main-title1 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            O
          </div>
          <div
            style={{ color: "#891414" }}
            className="main-title1 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            f
          </div>
        </div>
        <div className="flex main-title-word">
          {" "}
          <div
            style={{ color: "#8515d5" /*"#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            L
          </div>
          <div
            style={{ color: "#891414" }}
            className="flicker-fast main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            o
          </div>
          <div
            style={{ color: "rgb(51 8 105)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            v
          </div>
          <div
            style={{ color: "#8515d5" /*"#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            e
          </div>
        </div>
      </div>
      <div></div>{" "}
      <h4
        style={{ color: "rgb(71 27 5)" }}
        className="music-description text-center md:text-left text-lg"
      >
        Intimate & Groovy Original Music
      </h4>
      {/* <h5 className="london">London</h5> */}
    </section>
  );
};

export default Intro;
