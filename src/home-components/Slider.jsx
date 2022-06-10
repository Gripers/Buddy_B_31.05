import React, { useContext } from "react";

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.scss";
import { Context } from "../context";
import axios from "axios";

const Slider = () => {
  const { categories, settings, categoryId, t, i18n, setBurgers } =
    useContext(Context);

  return (
    <div style={{ height: "40px" }}>
      <SlickSlider className="categories" id="categoriess" {...settings}>
        <div
          className="category"
          onClick={() =>
            axios
              .get("https://buddyburger.herokuapp.com/burgers/")
              .then((res) => setBurgers(res.data))
          }
        >
          <p>{t("categories.all")}</p>
        </div>
        {categories.map((cat) => {
          return (
            <div
              key={cat.id}
              className="category"
              onClick={() => categoryId(cat.id)}
            >
              <p>{i18n.language === "ru" ? cat.name_ru : cat.name_uz}</p>
            </div>
          );
        })}
      </SlickSlider>
    </div>
  );
};

export default Slider;
