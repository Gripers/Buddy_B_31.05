import { CircularProgress, Dialog } from "@mui/material";
import React, { useContext } from "react";
import PhoneInput from "react-phone-input-2";
import { Context } from "../context";
import "../styles/login.scss";
import { ToastContainer } from "react-toastify";

const LogConfirm = () => {
  const {
    logconfirm,
    t,
    logconsms,
    setLogConSms,
    log,
    setLog,
    confirmLogin,
    setLogConfirm,
    logConEr,
    loading,
    setLoading,
  } = useContext(Context);

  return (
    <>
      <Dialog open={logconfirm}>
        <div className="login-dialog-header">
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            onClick={(event) => {
              setLogConfirm(false);
              setLoading(false);
            }}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
        <div className="login-dialog-body">
          <h3>{t("sign.login.enter")}</h3>
          <div className="login-middle my-4">
            <input
              type="text"
              placeholder={`${t("sign.register.code")}`}
              value={logconsms}
              onChange={(e) => setLogConSms(e.target.value)}
              maxLength={6}
            />
            <PhoneInput
              inputClass="phone-input-qwerty"
              value={log}
              onChange={setLog}
              country="uz"
              prefix=""
              disabled
            />
            {logconsms.length >= 6 ? (
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  confirmLogin();
                }}
              >
                {loading ? (
                  <CircularProgress
                    style={{ color: "white", width: "20px", height: "20px" }}
                  />
                ) : (
                  t("sign.login.log")
                )}
              </button>
            ) : (
              <button disabled type="button" onClick={confirmLogin}>
                {loading ? (
                  <CircularProgress
                    style={{ color: "white", width: "20px", height: "20px" }}
                  />
                ) : (
                  t("sign.login.log")
                )}
              </button>
            )}
          </div>
          <div className="login-footer">
            <p>{t("sign.login.account")}</p>
            <p
              style={{ color: "#51267d", cursor: "pointer" }}
              onClick={logConEr}
            >
              {t("sign.login.reg")}
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default LogConfirm;
