import React, { useContext } from "react";
import Sidebar from "../../admin-components/sidebar/Sidebar";
import Navbar from "../../admin-components/navbar/Navbar";
import "./products.scss";
import { Context } from "../../../context";
import { Box, Modal } from "@mui/material";

const Products = () => {
  const {
    burgers,
    deleteProduct,
    prodOpen,
    productOpen,
    productClose,
    style,
    nameuzz,
    setNameuzz,
    nameenn,
    setNameenn,
    nameruu,
    setNameruu,
    defuzz,
    setDefuzz,
    defenn,
    setDefenn,
    defruu,
    setDefruu,
    imgg,
    setImgg,
    pricee,
    setPricee,
    uid,
    setUid,
    productModalData,
    categories,
    editProduct,
  } = useContext(Context);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <table
            className="table table-hover tm-table-small tm-product-table bg-white my-4"
            style={{ width: "95%", margin: "0 auto", borderRadius: "12px" }}
          >
            <thead>
              <tr>
                <th scope="col">PRODUCT IMAGE</th>
                <th scope="col">PRODUCT NAME</th>
                <th scope="col">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {burgers.map((burger) => {
                return (
                  <tr>
                    <td className="align-middle">
                      <img
                        width={100}
                        height={100}
                        style={{ objectFit: "contain" }}
                        src={burger.image}
                        alt=""
                      />
                    </td>
                    <td
                      className="tm-product-name align-middle"
                      style={{ fontWeight: "bold" }}
                    >
                      {burger.name_ru}
                    </td>
                    <td className="align-middle" style={{ fontWeight: "bold" }}>
                      {burger.price} UZS
                    </td>
                    <td className="align-middle">
                      <button
                        className="tm-product-delete-link btn btn-danger"
                        onClick={() => deleteProduct(burger.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="tm-product-delete-link btn btn-primary"
                        style={{ marginLeft: "5px" }}
                        onClick={() => productOpen(burger)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={prodOpen} onClose={productClose}>
        <Box sx={style}>
          <div className="admin-products-inputs-box">
            <input
              className="form-control"
              type="text"
              value={nameuzz}
              onChange={(e) => setNameuzz(e.target.value)}
              placeholder="Name Uz"
            />
            <input
              className="form-control"
              type="text"
              value={nameenn}
              onChange={(e) => setNameenn(e.target.value)}
              placeholder="Name En"
            />
            <input
              className="form-control"
              type="text"
              value={nameruu}
              onChange={(e) => setNameruu(e.target.value)}
              placeholder="Name Ru"
            />
            <input
              className="form-control"
              type="text"
              value={defuzz}
              onChange={(e) => setDefuzz(e.target.value)}
              placeholder="Description Uz"
            />
            <input
              className="form-control"
              type="text"
              value={defenn}
              onChange={(e) => setDefenn(e.target.value)}
              placeholder="Description En"
            />
            <input
              className="form-control"
              type="text"
              value={defruu}
              onChange={(e) => setDefruu(e.target.value)}
              placeholder="Description Ru"
            />
            <input
              className="form-control"
              type="text"
              value={imgg}
              onChange={(e) => setImgg(e.target.value)}
              placeholder="Image Url"
            />
            <input
              className="form-control"
              type="text"
              value={pricee}
              onChange={(e) => setPricee(e.target.value)}
              placeholder="Price"
            />
            <select
              value={uid}
              className="form-control"
              style={{ boxShadow: "none" }}
              onChange={(e) => setUid(e.target.value)}
            >
              {categories.map((cat) => {
                return (
                  <option key={cat.id} value={cat.id}>
                    {cat.name_ru}
                  </option>
                );
              })}
            </select>
            <button
              className="btn btn-primary"
              onClick={() => editProduct(productModalData?.id)}
            >
              EDIT
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Products;
