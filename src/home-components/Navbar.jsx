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

import logo from "../img/logo.svg";
import "../styles/navbar.scss";
import cart from "../img/shopping-cart.svg";
import { NavLink } from "react-router-dom";
import { Context } from "../context";
import Cart from "./Cart";
import { Modal } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import Confirm from "./Confirm";
import LogConfirm from "./LoginConfirm";
import BasicMenu from "./DropMenu";

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
  } = useContext(Context);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("820"));
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <AppBar position="static" className="bg-white">
        <CssBaseline />
        <Toolbar>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <>
              <div className="start">
                <Typography variant="h4" className={classes.logo}>
                  <img src={logo} alt="" />
                </Typography>
                <div className={classes.navlinks}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "unactive"
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "16px",
                      marginLeft: theme.spacing(5),
                      marginBottom: "0",
                      fontWeight: "bold",
                    }}
                  >
                    {t("navbar.home")}
                  </NavLink>
                  <NavLink
                    to="/filials"
                    className={({ isActive }) =>
                      isActive ? "active" : "unactive"
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "16px",
                      marginLeft: theme.spacing(5),
                      marginBottom: "0",
                      fontWeight: "bold",
                    }}
                  >
                    {t("navbar.filials")}
                  </NavLink>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive ? "active" : "unactive"
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "16px",
                      marginLeft: theme.spacing(5),
                      marginBottom: "0",
                      fontWeight: "bold",
                    }}
                  >
                    {t("navbar.about-us")}
                  </NavLink>
                  <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                      isActive ? "active" : "unactive"
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "16px",
                      marginLeft: theme.spacing(5),
                      marginBottom: "0",
                      fontWeight: "bold",
                    }}
                  >
                    {t("navbar.contacts")}
                  </NavLink>
                </div>
              </div>
              <div className="end">
                <div className={classes.btns}>
                  <button className="basket-btn" onClick={cartOpen}>
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
