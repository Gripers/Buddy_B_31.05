import React, { useContext, useEffect } from "react";

import Footer from "../home-components/Footer";
import { Context } from "../context";
import "../styles/contacts.scss";

import NProgress from "nprogress";

const Contacts = () => {
  const { t, setContactsCol } = useContext(Context);

  useEffect(() => {
    NProgress.done();
    setContactsCol("#51267d");
  }, []);

  return (
    <div className="d-flex min-vh-100 flex-column justify-content-between">
      <div className="contacts-cont">
        <div
          className="contacts-glav-box mt-5"
          style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
        >
          <h2>{t("contacts.description")}</h2>
          <hr />
          <div className="contacts-title-box">
            {t("contacts.title.0")}{" "}
            <a href="https://t.me/buddyburgeruzbot" target="_blank">
              {t("contacts.title.1")}
            </a>{" "}
            {t("contacts.title.2")}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
