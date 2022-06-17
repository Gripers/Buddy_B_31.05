import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./i18n";
import "./nprogress.css";
import { ContextProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import AdminRoutes from "./admin-panel/AdminRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    <BrowserRouter>
      <ContextProvider>
        <App />
        <AdminRoutes />
      </ContextProvider>
    </BrowserRouter>
  </CartProvider>
);
