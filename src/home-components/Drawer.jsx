import React, { useState } from "react";
import { Drawer, IconButton, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "../img/logo.svg";

import MenuIcon from "@material-ui/icons/Menu";

import { useTranslation } from "react-i18next";
import "../styles/drawer.scss";
import logo from "../img/logo.svg";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        transitionDuration={500}
      >
        <div className="drawer-upper">
          <img src={logo} alt="" />
          <svg
            onClick={() => setOpenDrawer(false)}
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
        <div className="drawer-downer">
          <div className="navi-links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "unactive")}
              to="/"
            >
              {t("navbar.home")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "unactive")}
              to="/filials"
            >
              {t("navbar.filials")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "unactive")}
              to="/aboutus"
            >
              {t("navbar.about-us")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "unactive")}
              to="/contacts"
            >
              {t("navbar.contacts")}
            </NavLink>
          </div>
        </div>
      </Drawer>
      <div className="d-flex justify-content-between align-items-center w-100">
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          className={classes.icon}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="" />
        <button className="drawer-sign-in-btn">{t("navbar.sign-in")}</button>
      </div>
    </>
  );
}
export default DrawerComponent;
