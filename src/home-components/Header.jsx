import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import OwlCarousel from "react-owl-carousel";
import "react-lazy-load-image-component/src/effects/blur.css";
import header_pic from "../img/header1.jfif";
import header_picc from "../img/header2.jfif";
import header_piccc from "../img/header3.jfif";
import "../styles/header.scss";

const Header = () => {
  const headsettings = {
    loop: true,
    nav: false,
    dots: false,
    items: 1,
  };

  return (
    <OwlCarousel {...headsettings} className="owl-theme header-slider">
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
    </OwlCarousel>
  );
};

export default Header;
