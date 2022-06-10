import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

import "../styles/filial.scss";

const FilialOne = () => {
  const { t } = useContext(Context);

  return (
    <Link to="/filialone" style={{ color: "none", textDecoration: "none" }}>
      <div
        className="filial-glav-div mt-5"
        style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
      >
        <div className="filial-start-div">
          <h4>{t("filials.first.name")}</h4>
          <p className="phara-one">{t("filials.first.street")}</p>
        </div>
        <div className="filial-medium-div">
          <p className="phara-two">{t("filials.first.worktime")}</p>
          <p className="phara-three">{t("filials.first.time")}</p>
        </div>
        <div className="filial-end-div">
          <svg
            style={{ fill: "#e0e0e0" }}
            width="18"
            height="18"
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default FilialOne;
