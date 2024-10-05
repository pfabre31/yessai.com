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
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight mr-2"
          >
            Y
          </div>
          <div
            style={{ color: "#89141400" }}
            className="flicker-fast main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight mr-2"
          >
            E
          </div>
          <div
            style={{
              color: "rgba(109,30,163,0)" /*"#8515d5"*/,
            }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight mr-2"
          >
            S
          </div>
          <div
            style={{ color: "rgb(51,8,105,0)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight mr-2"
          >
            S
          </div>{" "}
          <div
            style={{ color: "rgb(51,8,105,0)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight mr-2"
          >
            A
          </div>{" "}
          <div
            style={{ color: "rgb(51,8,105,0)" /*"#8515d5" "#670ed5"*/ }}
            className="main-title2 text-5xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            Ï
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
