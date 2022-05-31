import React, { useContext } from "react";

import logo from "../img/logo-v2.svg";
import "../styles/footer.scss";
import { Context } from "../context";
import inst from "../img/instagram.png";
import facebook from "../img/facebook.png";
import yt from "../img/youtube.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useContext(Context);

  return (
    <div className="footer-container mt-5">
      <div className="container">
        <div className="logo-div">
          <img src={logo} alt="" />
        </div>
        <div className="navigates-div mt-4">
          <Link to="/">{t("navbar.home")}</Link>
          <Link to="/filials">{t("navbar.filials")}</Link>
          <Link to="/aboutus">{t("navbar.about-us")}</Link>
          <Link to="/contacts">{t("navbar.contacts")}</Link>
        </div>
        <div className="below-div">
          <p>© BuddyBurger XXXX-2022 All rights reserved</p>
          <div className="icons">
            <a href="https://www.instagram.com/buddyburgeruz/" target="_blank">
              <img src={inst} alt="" />
            </a>
            <a
              href="https://m.facebook.com/maxway.uzb/?tsid=0.596456838293574&source=result"
              target="_blank"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC27YE8OXKOzFnRldRiRB_4Q"
              target="_blank"
            >
              <img src={yt} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-line my-4"></div>
        <div className="belower-div">
          <p>Пользовательское соглашение</p>
          <p>Developed by Dev</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
