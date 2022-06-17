import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
import Footer from "../home-components/Footer";
import "../styles/userinfo.scss";

const UserInfo = () => {
  const { t } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    } else if (!localStorage.getItem("admin")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="d-flex min-vh-100 flex-column justify-content-between">
      <div className="user-card-container my-5">
        <div className="user-card">
          <h3>{t("profile.info")}</h3>
          <div className="user-bodyy">
            <p>{t("profile.name")}</p>
            <input type="text" className="my-3" />
            <p>{t("profile.phone")}</p>
            <input type="text" className="my-3" />
          </div>
          <div className="user-foot">
            <button>{t("profile.update")}</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserInfo;
