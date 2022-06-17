import React, { useContext } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import header_pic from "../img/header1.jfif";
import header_picc from "../img/header2.jfif";
import header_piccc from "../img/header3.jfif";
import Slider from "react-slick";
import "../styles/header.scss";
import { Context } from "../context";

const Header = () => {
  const { headsettings } = useContext(Context);

  return (
    <Slider {...headsettings} className="header-slider">
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
