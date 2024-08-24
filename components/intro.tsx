import { versions } from "../constants/versions";
import { Language } from "../pages";

const Intro = ({ language }) => {
  return (
    <section className="h-screen gap-8 flex-col flex items-center justify-center md:mb-12">
      <div className="flex main-title-all">
        <div className="flex main-title-word">
          {" "}
          <div
            style={{ color: "#8515d500" /*"#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            M
          </div>
          <div
            style={{ color: "#89141400" }}
            className="flicker-fast main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            a
          </div>
          <div
            style={{
              color: "rgba(109,30,163,0)" /*"#8515d5"*/,
            }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            s
          </div>
          <div
            style={{ color: "rgb(51,8,105,0)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            t
          </div>
          <div
            style={{ color: "#89141400" }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            e
          </div>
          <div
            style={{ color: "rgba(51,8,105,00)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            r
          </div>
          <div
            style={{ color: "rgba(51,8,105,0)" /*"#8515d5" "#670ed5"*/ }}
            className="flicker-slow main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            s
          </div>
        </div>
        <div className="flex main-title-word">
          {" "}
          <div
            style={{ color: "#89141400" }}
            className="main-title1 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            O
          </div>
          <div
            style={{ color: "#89141400" }}
            className="main-title1 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            f
          </div>
        </div>
        <div className="flex main-title-word">
          {" "}
          <div
            style={{ color: "#8515d500" /*"#670ed5"*/, marginRight: "0.2rem" }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            L
          </div>
          <div
            style={{ color: "#89141400" }}
            className="flicker-fast main-title2 red-o text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            o
          </div>
          {/* <div>
            {" "}
            <img
              src="/assets/icons/pixel-heart.svg"
              className="red-heart"
            ></img>
          </div> */}
          <div
            style={{ color: "rgb(51,8,105,0)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            v
          </div>
          <div
            style={{ color: "#8515d500" /*"#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            e
          </div>
        </div>
      </div>
      <div></div>{" "}
      {/* <h4 className="music-description text-center md:text-left text-lg">
        {versions.subtitle[language]}
      </h4> */}
      {/* <h5 className="london">London</h5> */}
    </section>
  );
};

export default Intro;
