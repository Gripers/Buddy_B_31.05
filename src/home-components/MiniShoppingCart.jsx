import React, { useContext, useState } from "react";

import minishoppingcart from "../img/mini-shopping-cart.png";
import "../styles/mini-cart.scss";
import { Drawer } from "@material-ui/core";
import { Context } from "../context";
import emptycart from "../img/empty_cart.png";
import axios from "axios";

const MiniShoppingCart = () => {
  const {
    t,
    items,
    i18n,
    updateItemQuantity,
    isEmpty,
    removeItem,
    emptyCart,
    openDrawer,
  } = useContext(Context);
  const [open, setOpen] = useState(false);

  let totalPrice = 0;

  const sendProducts = () => {
    axios.post(
      `https://api.telegram.org/bot5340893698:AAH4J2w4HGhs-TgdYmLZ5UFWEDPvFDPZ1O4/sendMessage?chat_id=-1001694192631&text=${encodeURIComponent(
        `<b>Заказ:</b> ${(Math.floor(Math.random() * 10000) + 10000)
          .toString()
          .substring(1)}
<b>Телефон:</b> +998974251244
  ${items
    .map((item) => {
      return `
<b>${item.name_ru}</b>
${item.count} x ${item.price} = ${item.count * item.price} UZS`;
    })
    .join("\n")}
  
<b>Сумма:</b> ${totalPrice} UZS`
      )}&parse_mode=html`
    );
  };

  return (
    <div className="mini-cart-glav">
      <button
        className="mini-cart-btn"
        style={{ boxShadow: "4px 6px 30px rgb(0 0 0 / 38%)" }}
        onClick={() => setOpen(true)}
      >
        <img src={minishoppingcart} alt="" />
      </button>

      <Drawer
        style={{ zIndex: "9999999" }}
        open={open}
        onClose={() => setOpen(false)}
        anchor={"right"}
        transitionDuration={500}
      >
        <div className="mini-cart-drawer-header">
          <p>{t("navbar.basket")}</p>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          >
            <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
          </svg>
        </div>
        {isEmpty ? (
          <div style={{ textAlign: "center" }}>
            <img
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
              src={emptycart}
              alt=""
            />
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
              {t("cart.empty")}
            </h4>
          </div>
        ) : (
          <p></p>
        )}
        <div className="mini-cart-drawer-body">
          <div
            className="mini-cart-drawer-burgers"
            style={{ display: isEmpty ? "none" : "block" }}
          >
            {items &&
              items.map((item) => {
                if (item.count >= 1) {
                  const priceCounter = item.count * item.price;
                  totalPrice += priceCounter;

                  return (
                    <>
                      <div className="mini-cart-drawer-burger">
                        <div className="mini-cart-drawer-img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="mini-cart-drawer-title">
                          <p>
                            {i18n.language === "ru"
                              ? item.name_ru
                              : item.name_uz}
                          </p>
                          <p className="price-pharagraph">{priceCounter} UZS</p>
                        </div>
                        <div className="mini-cart-drawer-counter">
                          <button
                            className="decrement"
                            onClick={() =>
                              updateItemQuantity(item.id, item.count--)
                            }
                          >
                            -
                          </button>
                          <p>{item.count}</p>
                          <button
                            className="increment"
                            onClick={() =>
                              updateItemQuantity(item.id, item.count++)
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="mini-cart-drawer-remove">
                          <svg
                            onClick={() => removeItem(item.id)}
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                          </svg>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
          </div>
        </div>
        {items.length >= 1 ? (
          <div className="mini-cart-drawer-foot">
            <button
              className="mini-cart-send-products-btn"
              onClick={() => {
                sendProducts();
                emptyCart();
              }}
            >
              <p>{t("cart.send")}</p>
              <p>{totalPrice} UZS</p>
            </button>
          </div>
        ) : (
          ""
        )}
      </Drawer>
    </div>
  );
};

export default MiniShoppingCart;
