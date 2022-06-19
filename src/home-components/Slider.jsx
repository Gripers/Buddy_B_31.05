import React, { useContext, useEffect, useState } from "react";

import OwlCarousel from "react-owl-carousel";
import "../styles/slider.scss";
import { Context } from "../context";

import prev from "../img/prev.svg";
import next from "../img/next.svg";

const Slider = () => {
  const { categories, i18n } = useContext(Context);
  const [scroll, setScroll] = useState(false);

  const catsettings = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    navText: [`<img src=${prev}>`, `<img src=${next}>`],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      300: {
        items: 2,
        nav: false,
      },
      480: {
        items: 3,
        nav: false,
      },
      767: {
        items: 4,
      },
      1024: {
        items: 5,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const target = document.getElementById("categoriess");
      if (window.scrollY > target.offsetTop) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div>
        <OwlCarousel
          className="owl-theme categories"
          id="categoriess"
          {...catsettings}
        >
          {categories.map((cat) => {
            return (
              <a
                key={cat.id}
                href={`#${i18n.language === "ru" ? cat.name_ru : cat.name_uz}`}
              >
                <div className="category">
                  <p>{i18n.language === "ru" ? cat.name_ru : cat.name_uz}</p>
                </div>
              </a>
            );
          })}
        </OwlCarousel>
        <div
          className="hidden-slider"
          style={{
            transform: scroll ? "translateY(0px)" : "translateY(-200px)",
          }}
        >
          <OwlCarousel
            className="owl-theme hidden-categories"
            id="hidden-categoriess"
            {...catsettings}
          >
            {categories.map((cat) => {
              return (
                <a
                  key={cat.id}
                  href={`#${
                    i18n.language === "ru" ? cat.name_ru : cat.name_uz
                  }`}
                >
                  <div className="category">
                    <p>{i18n.language === "ru" ? cat.name_ru : cat.name_uz}</p>
                  </div>
                </a>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Slider;
