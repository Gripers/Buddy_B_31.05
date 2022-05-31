import React, { useContext } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Context } from "../context";
import "../styles/burgers.scss";

const Burgers = () => {
  const { burgers, t, i18n, changeBtn, rechangeBtn, addItem, removeItem } =
    useContext(Context);

  return (
    <div className="mt-4">
      <div className="burgers-container">
        {burgers.map((burger) => {
          return (
            <div
              key={burger.id}
              className="burger-div"
              style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
            >
              <div className="burger-div-header">
                <LazyLoadImage src={burger.image} alt="" effect="blur" />
              </div>
              <div className="burger-div-body">
                <h4>
                  {i18n.language === "ru" ? burger.name_ru : burger.name_uz}
                </h4>
                <div className="card-order">
                  <p>{burger.price} UZS</p>
                  {!burger.isActive ? (
                    <button
                      className="change-btn"
                      onClick={() => {
                        changeBtn(burger.id);
                        addItem(burger);
                      }}
                    >
                      {t("btn.choose")}
                    </button>
                  ) : (
                    <button
                      className="change-btn"
                      onClick={() => {
                        rechangeBtn(burger.id);
                        removeItem(burger.id);
                      }}
                    >
                      {t("btn.back")}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Burgers;
