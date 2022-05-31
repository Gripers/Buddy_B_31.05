import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import header_pic from "../img/header1.webp";
import header_picc from "../img/header2.jpg";
import header_piccc from "../img/header3.webp";
import Slider from "react-slick";
import "../styles/header.scss";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="header-slider">
      <div className="header-div">
        <LazyLoadImage
          className="header-pic"
          src={header_pic}
          alt=""
          effect="blur"
        />
      </div>
      <div className="header-div">
        <LazyLoadImage
          className="header-pic"
          src={header_picc}
          alt=""
          effect="blur"
        />
      </div>
      <div className="header-div">
        <LazyLoadImage
          className="header-pic"
          src={header_piccc}
          alt=""
          effect="blur"
        />
      </div>
    </Slider>
  );
};

export default Header;
