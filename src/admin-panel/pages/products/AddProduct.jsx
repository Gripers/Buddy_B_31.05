import React, { useContext } from "react";
import Navbar from "../../admin-components/navbar/Navbar";
import Sidebar from "../../admin-components/sidebar/Sidebar";
import "./products.scss";
import { Context } from "../../../context";

const AddProduct = () => {
  const {
    categories,
    prodnameuz,
    setProdnameuz,
    prodnameen,
    setProdnameen,
    prodnameru,
    setProdnameru,
    defuz,
    setDefuz,
    defen,
    setDefen,
    defru,
    setDefru,
    img,
    setImg,
    price,
    setPrice,
    uuid,
    setUuid,
    addProduct,
  } = useContext(Context);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="admin-addproduct-inputs">
          <input
            className="form-control"
            type="text"
            value={prodnameuz}
            onChange={(e) => setProdnameuz(e.target.value)}
            placeholder="Name Uz"
          />
          <input
            className="form-control"
            type="text"
            value={prodnameen}
            onChange={(e) => setProdnameen(e.target.value)}
            placeholder="Name En"
          />
          <input
            className="form-control"
            type="text"
            value={prodnameru}
            onChange={(e) => setProdnameru(e.target.value)}
            placeholder="Name Ru"
          />
          <input
            className="form-control"
            type="text"
            value={defuz}
            onChange={(e) => setDefuz(e.target.value)}
            placeholder="Description Uz"
          />
          <input
            className="form-control"
            type="text"
            value={defen}
            onChange={(e) => setDefen(e.target.value)}
            placeholder="Description En"
          />
          <input
            className="form-control"
            type="text"
            value={defru}
            onChange={(e) => setDefru(e.target.value)}
            placeholder="Description Ru"
          />
          <input
            className="form-control"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Image Url"
          />
          <input
            className="form-control"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
          <select
            value={uuid}
            className="form-control"
            style={{ boxShadow: "none" }}
            onChange={(e) => setUuid(e.target.value)}
          >
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name_ru}
                </option>
              );
            })}
          </select>
          <button className="btn btn-primary" onClick={addProduct}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
