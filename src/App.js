import React, { useState, useEffect } from "react";

import { Toaster } from "react-hot-toast";
import PreLoader from "./PreLoader";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filials from "./pages/Filials";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import FilialOneInner from "./filial-components/FilialOneInner";
import FilialTwoInner from "./filial-components/FilialTwoInner";
import PutPatch from "./PutPatch";
import UserInfo from "./pages/UserInfo";

const App = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!isLoading) {
    return <PreLoader />;
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/filials" element={<Filials />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/filialone" element={<FilialOneInner />} />
        <Route path="/filialtwo" element={<FilialTwoInner />} />
        <Route path="/patcher" element={<PutPatch />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>

      <Toaster position="top-right" />
    </div>
  );
};

export default App;
