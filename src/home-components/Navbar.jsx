import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import DrawerComponent from "./Drawer";
import { useNavigate } from "react-router-dom";

import logo from "../img/logo.png";
import "../styles/navbar.scss";
import cart from "../img/shopping-cart.svg";
import { Context } from "../context";
import Cart from "./Cart";
import { Modal } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import Confirm from "./Confirm";
import LogConfirm from "./LoginConfirm";
import BasicMenu from "./DropMenu";
import $ from "jquery";
import NProgress from "nprogress";

function Navbar() {
  const {
    cartOpen,
    useStyles,
    t,
    i18n,
    open,
    cartClose,
    login,
    setLogin,
    handleLogin,
    setRegister,
    register,
    confirm,
    setConfirm,
    logconfirm,
    setLogConfirm,
    navshow,
    homeCol,
    setHomeCol,
    filialsCol,
    setFilialsCol,
    aboutusCol,
    setAboutusCol,
    contactsCol,
    setContactsCol,
  } = useContext(Context);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("820"));
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const navigate = useNavigate();

  useEffect(() => {
    $("#logo-nav").on("click", function () {
      NProgress.start();
      setTimeout(() => {
        navigate("/");
        setHomeCol("#51257d");
        setFilialsCol("black");
        setAboutusCol("black");
        setContactsCol("black");
      }, 1000);
    });
  }, []);

  useEffect(() => {
    $("#first-nav").on("click", function () {
      NProgress.start();
      setTimeout(() => {
        navigate("/");
        setHomeCol("#51257d");
        setFilialsCol("black");
        setAboutusCol("black");
        setContactsCol("black");
      }, 1000);
    });
  }, []);

  useEffect(() => {
    $("#second-nav").on("click", function () {
      NProgress.start();
      setTimeout(() => {
        navigate("/filials");
        setHomeCol("black");
        setFilialsCol("#51267d");
        setAboutusCol("black");
        setContactsCol("black");
      }, 1000);
    });
  }, []);

  useEffect(() => {
    $("#third-nav").on("click", function () {
      NProgress.start();
      setTimeout(() => {
        navigate("/aboutus");
        setHomeCol("black");
        setFilialsCol("black");
        setAboutusCol("#51267d");
        setContactsCol("black");
      }, 500);
    });
  }, []);

  useEffect(() => {
    $("#fourth-nav").on("click", function () {
      NProgress.start();
      setTimeout(() => {
        navigate("/contacts");
        setHomeCol("black");
        setFilialsCol("black");
        setAboutusCol("black");
        setContactsCol("#51267d");
      }, 500);
    });
  }, []);

  return (
    <>
      <AppBar
        id="miuapp-navbar"
        position="static"
        className="bg-white"
        style={{ display: navshow }}
      >
        <CssBaseline />
        <Toolbar>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <>
              <div className="start">
                <Typography variant="h4" className={classes.logo}>
                  <a id="logo-nav">
                    <img style={{ width: "50px" }} src={logo} alt="" />
                  </a>
                </Typography>
                <div className={classes.navlinks}>
                  <a
                    id="first-nav"
                    style={{
                      textDecoration: "none",
                      color: homeCol,
                      fontSize: "16px",
                      marginLeft: theme.spacing(5),
                      marginBottom: "0",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {t("navbar.home")}
                  </a>
                  <a
                    id="second-nav"
                    style={{
                      textDecoration: "none",
                      color: filialsCol,
                      fontSize: "16px",
                      marginLeft: theme.spacing(5),
                      marginBottom: "0",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {t("navbar.filials")}
                  </a>
                  <a
                    id="third-nav"
                    style={{
                      textDecoration: "none",
                      color: aboutusCol,
                      fontSize: "16px",
                      marginLeft: theme.spacing(5),
                      marginBottom: "0",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {t("navbar.about-us")}
                  </a>
                  <a
                    id="fourth-nav"
                    style={{
                      textDecoration: "none",
                      color: contactsCol,
                      fontSize: "16px",
                      marginLeft: theme.spacing(5),
                      marginBottom: "0",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {t("navbar.contacts")}
                  </a>
                </div>
              </div>
              <div className="end">
                <div className={classes.btns}>
                  <button
                    className="basket-btn"
                    onClick={cartOpen}
                    style={{ userSelect: "none" }}
                  >
                    <img src={cart} alt="" />
                    {t("navbar.basket")}
                  </button>
                  {localStorage.getItem("user") ||
                  localStorage.getItem("admin") ? (
                    <BasicMenu />
                  ) : (
                    <button className="sign-in-btn" onClick={handleLogin}>
                      {t("navbar.sign-in")}
                    </button>
                  )}
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {t("translation.value")}
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={() => changeLanguage("ru")}
                        >
                          Русский
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={() => changeLanguage("uz")}
                        >
                          O'zbekcha
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Modal open={open} onClose={cartClose}>
        <Cart />
      </Modal>

      <Login
        open={login}
        setLogin={setLogin}
        setRegister={setRegister}
        setConfirm={setConfirm}
        setLogConfirm={setLogConfirm}
      />
      <Register
        open={register}
        setLogin={setLogin}
        setRegister={setRegister}
        setConfirm={setConfirm}
        setLogConfirm={setLogConfirm}
      />
      <Confirm
        open={confirm}
        setLogin={setLogin}
        setRegister={setRegister}
        setConfirm={setConfirm}
        setLogConfirm={setLogConfirm}
      />
      <LogConfirm
        open={logconfirm}
        setLogin={setLogin}
        setRegister={setRegister}
        setConfirm={setConfirm}
        setLogConfirm={setLogConfirm}
      />
    </>
  );
}
export default Navbar;
