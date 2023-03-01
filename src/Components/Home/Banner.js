import React from "react";
import Slider from "react-slick";
import {
  carouselOne,
  carouselTwo,
  carouselThree,
  carouselFour,
} from "../../assets/image";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={carouselOne} alt="carouselImage" />
        </div>
        <div>
          <img src={carouselTwo} alt="carouselImage" />
        </div>
        <div>
          <img src={carouselThree} alt="carouselImage" />
        </div>
        <div>
          <img src={carouselFour} alt="carouselImage" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
