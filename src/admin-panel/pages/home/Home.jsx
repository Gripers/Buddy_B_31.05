import React, { useEffect } from "react";
import Sidebar from "../../admin-components/sidebar/Sidebar";
import Navbar from "../../admin-components/navbar/Navbar";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
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
