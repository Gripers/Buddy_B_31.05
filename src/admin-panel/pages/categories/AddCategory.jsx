import React, { useContext } from "react";
import { Context } from "../../../context";
import Navbar from "../../admin-components/navbar/Navbar";
import Sidebar from "../../admin-components/sidebar/Sidebar";
import "./categories.scss";

const AddCategory = () => {
  const {
    nameuz,
    nameen,
    nameru,
    setNameuz,
    setNameen,
    setNameru,
    addCategory,
  } = useContext(Context);

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="add_category-inputs">
            <input
              className="form-control"
              type="text"
              name="name_uz"
              value={nameuz}
              onChange={(e) => setNameuz(e.target.value)}
              placeholder="Name Uz"
            />
            <input
              className="form-control"
              type="text"
              name="name_en"
              value={nameen}
              onChange={(e) => setNameen(e.target.value)}
              placeholder="Name En"
            />
            <input
              className="form-control"
              type="text"
              name="name_ru"
              value={nameru}
              onChange={(e) => setNameru(e.target.value)}
              placeholder="Name Ru"
            />
            <button className="btn btn-primary" onClick={addCategory}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
