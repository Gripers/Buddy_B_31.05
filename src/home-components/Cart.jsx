import { Box } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../context";
import "../styles/cart.scss";
import axios from "axios";
import { t } from "i18next";
import emptycart from "../img/empty_cart.png";

const Cart = () => {
  const {
    style,
    items,
    isEmpty,
    removeItem,
    updateItemQuantity,
    emptyCart,
    i18n,
    handleLogin,
    cartClose,
  } = useContext(Context);

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

  const funcs = () => {
    sendProducts();
    emptyCart();
    cartClose();
  };

  const funcss = () => {
    cartClose();
    handleLogin();
  };

  return (
    <Box sx={style}>
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
      <div
        className="cart-burgers"
        id="cart-burgers"
        style={{ display: isEmpty ? "none" : "block" }}
      >
        {items &&
          items.map((item) => {
            if (item.count >= 1) {
              const priceCounter = item.count * item.price;
              totalPrice += priceCounter;

              return (
                <div className="cart-burger">
                  <div className="cart-burger-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-burger-body">
                    <div className="cart-burger-upper">
                      <h5>
                        {i18n.language === "ru" ? item.name_ru : item.name_uz}
                      </h5>
                      <svg
                        onClick={() => removeItem(item.id)}
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>
                    </div>
                    <div className="cart-burger-downer">
                      <div className="counter">
                        <button
                          className="dec"
                          onClick={() =>
                            updateItemQuantity(item.id, item.count--)
                          }
                        >
                          -
                        </button>
                        <p>{item.count}</p>
                        <button
                          className="inc"
                          onClick={() =>
                            updateItemQuantity(item.id, item.count++)
                          }
                        >
                          +
                        </button>
                      </div>
                      <p>{priceCounter} UZS</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              removeItem(item.id);
            }
          })}
      </div>
      {items.length >= 1 ? (
        <button
          className="send-products-btn"
          onClick={() =>
            localStorage.getItem("user") || localStorage.getItem("admin")
              ? funcs()
              : funcss()
          }
        >
          <p>{t("cart.send")}</p>
          <p>{totalPrice} UZS</p>
        </button>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Cart;
