import React from "react";
import FilialOne from "../filial-components/FilialOne";
import FilialTwo from "../filial-components/FilialTwo";
import Footer from "../home-components/Footer";
import Navbar from "../home-components/Navbar";

const Filials = () => {
  return (
    <div className="d-flex min-vh-100 flex-column justify-content-between">
      <Navbar />
      <div>
        <FilialOne />
        <FilialTwo />
      </div>
      <Footer />
    </div>
  );
};

export default Filials;
