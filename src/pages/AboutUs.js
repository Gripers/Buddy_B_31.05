import React, { useContext, useEffect } from "react";
import { Context } from "../context";
import Footer from "../home-components/Footer";

import picture from "../img/about.png";
import "../styles/aboutus.scss";

import NProgress from "nprogress";

const AboutUs = () => {
  const { t, setAboutusCol } = useContext(Context);

  useEffect(() => {
    NProgress.done();
    setAboutusCol("#51267d");
  }, []);

  return (
    <div className="d-flex min-vh-100 flex-column justify-content-between">
      <div
        className="aboutus-glav-box"
        style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
      >
        <div className="aboutus-up-box">
          <img src={picture} alt="" />
        </div>
        <div className="aboutus-down-box mt-3">
          <h3>{t("aboutus.aboutcompany")}</h3>
          <p>
            {t("aboutus.title.0")}{" "}
            <a href="https://t.me/buddyburgeruzbot" target="_blank">
              {t("aboutus.title.1")}
            </a>{" "}
            {t("aboutus.title.2")}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
