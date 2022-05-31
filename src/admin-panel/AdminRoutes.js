import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import AddCategory from "./pages/categories/AddCategory";
import Products from "./pages/products/Products";
import AddProduct from "./pages/products/AddProduct";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
