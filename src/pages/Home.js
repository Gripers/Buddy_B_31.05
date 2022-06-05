import React from "react";
import Footer from "../home-components/Footer";
import Header from "../home-components/Header";
import MiniShoppingCart from "../home-components/MiniShoppingCart";
import Navbar from "../home-components/Navbar";
import Section from "../home-components/Section";

const Home = () => {
  return (
    <div className="d-flex min-vh-100 flex-column justify-content-between">
      <Navbar />
      <MiniShoppingCart />
      {/* <Header /> */}
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
