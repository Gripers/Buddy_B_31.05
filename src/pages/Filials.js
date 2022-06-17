import React, { useContext, useEffect } from "react";
import FilialOne from "../filial-components/FilialOne";
import FilialTwo from "../filial-components/FilialTwo";
import Footer from "../home-components/Footer";
import NProgress from "nprogress";
import { Context } from "../context";

const Filials = () => {
  const { setFilialsCol } = useContext(Context);

  useEffect(() => {
    NProgress.done();
    setFilialsCol("#51267d");
  }, []);

  return (
    <div className="d-flex min-vh-100 flex-column justify-content-between">
      <div>
        <FilialOne />
        <FilialTwo />
      </div>
      <Footer />
    </div>
  );
};

export default Filials;
