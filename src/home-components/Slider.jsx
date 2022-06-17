import React, { useContext } from "react";

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.scss";
import { Context } from "../context";
import axios from "axios";

const Slider = () => {
  const { categories, catsettings, categoryId, t, i18n, setBurgers } =
    useContext(Context);

  return (
    <div style={{ height: "40px" }}>
      <SlickSlider className="categories" id="categoriess" {...catsettings}>
        {categories.map((cat) => {
          return (
            <a href={`#${cat.name_ru}`}>
              <div key={cat.id} className="category">
                <p>{i18n.language === "ru" ? cat.name_ru : cat.name_uz}</p>
              </div>
            </a>
          );
        })}
      </SlickSlider>
    </div>
  );
};

export default Slider;
