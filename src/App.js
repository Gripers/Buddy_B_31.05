import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filials from "./pages/Filials";
import FilialOneInner from "./filial-components/FilialOneInner";
import FilialTwoInner from "./filial-components/FilialTwoInner";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import PutPatch from "./PutPatch";
import UserInfo from "./pages/UserInfo";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filials" element={<Filials />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/filialone" element={<FilialOneInner />} />
        <Route path="/filialtwo" element={<FilialTwoInner />} />
        <Route path="/patcher" element={<PutPatch />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
