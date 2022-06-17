import React, { useContext } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Context } from "../context";
import "../styles/burgers.scss";

const Burgers = () => {
  const { categories, t, i18n, addItem, removeItem, getItem } =
    useContext(Context);

  return (
    <div className="mt-4">
      {categories.length == 0 ? (
        <p>Empty array</p>
      ) : (
        <>
          {categories.map((cat) => {
            return (
              <div className="my-5">
                <h2 id={cat.name_ru} className="category-h2 mb-4">
                  {cat.name_ru}
                </h2>
                <div className="burgers-container">
                  {cat.burgers.map((burger) => {
                    return (
                      <div
                        key={burger.id}
                        className="burger-div"
                        style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
                      >
                        <div className="burger-div-header">
                          <LazyLoadImage
                            src={burger.image}
                            alt=""
                            effect="blur"
                          />
                        </div>
                        <div className="burger-div-body">
                          <h4>
                            {i18n.language === "ru"
                              ? burger.name_ru
                              : burger.name_uz}
                          </h4>
                          <div className="card-order">
                            <p>{burger.price} UZS</p>
                            {getItem(burger.id) ? (
                              <button
                                className="change-btn"
                                onClick={() => {
                                  removeItem(burger.id);
                                }}
                              >
                                {t("btn.back")}
                              </button>
                            ) : (
                              <button
                                className="change-btn"
                                onClick={() => {
                                  addItem(burger);
                                }}
                              >
                                {t("btn.choose")}
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
          })}
        </>
      )}
    </div>
  );
};

export default Burgers;
