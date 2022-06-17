import React, { useContext, useEffect } from "react";
import Footer from "../home-components/Footer";
import MiniShoppingCart from "../home-components/MiniShoppingCart";
import Header from "../home-components/Header";
import Section from "../home-components/Section";
import NProgress from "nprogress";
import { Context } from "../context";

const Home = () => {
  const { setHomeCol } = useContext(Context);

  useEffect(() => {
    NProgress.done();
    setHomeCol("#51267d");
  }, []);

  return (
    <div className="d-flex min-vh-100 flex-column justify-content-between">
      <Header />
      <MiniShoppingCart />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
