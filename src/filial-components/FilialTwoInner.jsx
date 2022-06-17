import React, { useContext } from "react";
import { Context } from "../context";
import Footer from "../home-components/Footer";

import "../styles/filialinner.scss";

const FilialTwoInner = () => {
  const { t } = useContext(Context);

  return (
    <>
      <div
        className="filial-glav-box my-5"
        style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
      >
        <div className="left-box">
          <h1 className="text-uppercase text-black">
            {t("filials.second.inner.name")}
          </h1>
          <div className="mini-titles mt-4">
            <p>{t("filials.second.inner.adress")}</p>
            <p>{t("filials.second.inner.worktime")}</p>
            <p>
              {t("filials.second.inner.number.0")}{" "}
              <a href="tel:+998712445445">
                {t("filials.second.inner.number.1")}
              </a>
            </p>
            <p>{t("filials.second.inner.orient")}</p>
          </div>
        </div>
        <div className="right-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.509219062718!2d69.25360266677012!3d41.323735801071024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b036f632131%3A0x35a1d62811fbf156!2sBDDDY%20BURGER!5e0!3m2!1sru!2s!4v1649971616937!5m2!1sru!2s"
            width="100%"
            height="100%"
            className="border-0"
            style={{ borderRadius: "12px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FilialTwoInner;
