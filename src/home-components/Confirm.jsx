import { CircularProgress, Dialog } from "@mui/material";
import React, { useContext } from "react";
import PhoneInput from "react-phone-input-2";
import { Context } from "../context";
import "../styles/register.scss";

const Confirm = () => {
  const {
    confirm,
    setConfirm,
    t,
    smsform,
    setSmsForm,
    registerDataNumber,
    setRegisterDataNumber,
    confirmRegister,
    conEr,
    loading,
    setLoading,
  } = useContext(Context);

  return (
    <Dialog open={confirm}>
      <div className="register-dialog-header">
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          onClick={(event) => {
            setConfirm(false);
          }}
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </div>
      <div className="register-dialog-body">
        <h3>{t("sign.register.descript")}</h3>
        <div className="register-middle my-4">
          <input
            type="text"
            placeholder={`${t("sign.register.code")}`}
            value={smsform}
            onChange={(e) => setSmsForm(e.target.value)}
            maxLength={6}
          />
          <PhoneInput
            inputClass="phone-input-qwerty"
            value={registerDataNumber}
            onChange={setRegisterDataNumber}
            country="uz"
            prefix=""
            disabled
          />
          {smsform.length >= 6 ? (
            <button
              type="button"
              onClick={() => {
                setLoading(true);
                confirmRegister();
              }}
            >
              {loading ? (
                <CircularProgress
                  style={{ color: "white", width: "20px", height: "20px" }}
                />
              ) : (
                t("sign.register.zareg")
              )}
            </button>
          ) : (
            <button
              disabled
              type="button"
              onClick={() => {
                setLoading(true);
                confirmRegister();
              }}
            >
              {loading ? (
                <CircularProgress
                  style={{ color: "white", width: "20px", height: "20px" }}
                />
              ) : (
                t("sign.register.zareg")
              )}
            </button>
          )}
          {/* <p style={{ display: conregshow }}>{con}</p> */}
        </div>
        <div className="register-footer">
          <p>{t("sign.register.acc")}</p>
          <p style={{ color: "#51267d", cursor: "pointer" }} onClick={conEr}>
            {t("sign.register.in")}
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default Confirm;
