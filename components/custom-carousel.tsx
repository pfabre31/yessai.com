import { Carousel } from "react-responsive-carousel";
import CoverImage from "./cover-image";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  photoSources: string[];
};
const CustomCarousel = ({ photoSources }: Props) => {
  console.log(photoSources);

  const renderArrowNext = (clickHandler, hasNext, labelNext) => {
    if (!hasNext) return;
    console.log(hasNext);
    return (
      <button onClick={clickHandler}>
        <img
          style={{ height: "30px", width: "30px" }}
          src={`/assets/icons/chevron-next.svg`}
        />
      </button>
    );
  };
  const renderArrowPrev = (clickHandler, hasPrev, labelPrev) => {
    if (!hasPrev) return;
    return (
      <button onClick={clickHandler}>
        <img
          style={{ height: "30px", width: "30px" }}
          src={`/assets/icons/chevron-prev.svg`}
        />
      </button>
    );
  };
  return (
    <Carousel>
      {photoSources.length > 1 &&
        photoSources.map((s) => (
          <div>
            <img src={s} />
          </div>
        ))}
    </Carousel>
  );
};

export default CustomCarousel;
