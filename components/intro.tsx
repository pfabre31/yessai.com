import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="h-screen gap-8 flex-col flex items-center justify-center md:mb-12">
      <div className="flex main-title-all">
        {" "}
        <div className="flex gap-0">
          {" "}
          <div
            style={{ color: "#891414", marginRight: "-0.3rem" }}
            className="main-title1 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            P
          </div>
          <div
            style={{ color: "#891414" }}
            className="main-title1 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            a
          </div>
          <div
            style={{ color: "rgb(95 17 17)" /*"rgb(51 11 11)" "#891414"*/ }}
            className="flicker-slow main-title1 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            u
          </div>
          <div
            style={{ color: "#891414" }}
            className="main-title1 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            l
          </div>
        </div>
        <div className="flex gap-0">
          {" "}
          <div
            style={{ color: "#8515d5", marginRight: "-0.8rem" /*"#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            F
          </div>
          <div
            // style={{ color: "rgb(28 12 39)" /*"#8515d5" "#670ed5"*/ }}
            className="flicker-fast main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            a
          </div>
          <div
            style={{
              color: "rgb(109 30 163)" /*"#8515d5"*/,
              marginLeft: "0.3rem" /*"#670ed5"*/,
            }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            br
          </div>
          <div
            style={{ color: "rgb(51 8 105)" /*"#8515d5" "#670ed5"*/ }}
            className="flicker-slow main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
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
