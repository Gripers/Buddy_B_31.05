import { Dialog } from "@mui/material";
import React, { useContext } from "react";
import PhoneInput from "react-phone-input-2";
import { Context } from "../context";
import "../styles/register.scss";

const Register = () => {
  const {
    register,
    setRegister,
    t,
    registerDataName,
    setRegisterDataName,
    registerDataNumber,
    setRegisterDataNumber,
    registerPost,
    regmes,
    regswitchEr,
  } = useContext(Context);

  return (
    <Dialog open={register}>
      <div className="register-dialog-header">
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          onClick={(event) => {
            setRegister(false);
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
            placeholder={`${t("sign.register.name")}`}
            value={registerDataName}
            onChange={(e) => setRegisterDataName(e.target.value)}
          />
          <PhoneInput
            value={registerDataNumber}
            onChange={setRegisterDataNumber}
            country="uz"
            prefix=""
          />
          <button type="button" onClick={registerPost}>
            {t("sign.register.zareg")}
          </button>
          <p>{regmes}</p>
        </div>
        <div className="register-footer">
          <p>{t("sign.register.acc")}</p>
          <p
            style={{ color: "#51267d", cursor: "pointer" }}
            onClick={regswitchEr}
          >
            {t("sign.register.in")}
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default Register;
