import React, { useContext, useEffect } from "react";
import Sidebar from "../../admin-components/sidebar/Sidebar";
import Navbar from "../../admin-components/navbar/Navbar";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context";

const Home = () => {
  const { setNavshow } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    } else if (!localStorage.getItem("admin")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setNavshow("none");
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
