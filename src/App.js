import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filials from "./pages/Filials";
import FilialOneInner from "./filial-components/FilialOneInner";
import FilialTwoInner from "./filial-components/FilialTwoInner";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import PutPatch from "./PutPatch";

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
      </Routes>
    </div>
  );
}

export default App;
