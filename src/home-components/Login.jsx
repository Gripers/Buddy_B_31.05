import { Dialog } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../context";
import "../styles/login.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Login = () => {
  const { login, setLogin, logEr, t, log, setLog, loginPost, logmes } =
    useContext(Context);

  return (
    <Dialog open={login}>
      <div className="login-dialog-header">
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          onClick={(event) => {
            setLogin(false);
          }}
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </div>
      <div className="login-dialog-body">
        <div className="login-header">
          <h3>{t("sign.login.enter")}</h3>
          <p>{t("sign.login.title")}</p>
        </div>
        <div className="login-middle my-4">
          <PhoneInput value={log} onChange={setLog} country="uz" prefix="" />
          {log.length >= 12 ? (
            <button onClick={loginPost}>{t("sign.login.log")}</button>
          ) : (
            <button disabled onClick={loginPost}>
              {t("sign.login.log")}
            </button>
          )}
          <p>{logmes}</p>
        </div>
        <div className="login-footer">
          <p>{t("sign.login.account")}</p>
          <p style={{ color: "#51267d", cursor: "pointer" }} onClick={logEr}>
            {t("sign.login.reg")}
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default Login;
