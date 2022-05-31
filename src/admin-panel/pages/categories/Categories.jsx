import React, { useContext, useEffect } from "react";
import Navbar from "../../admin-components/navbar/Navbar";
import Sidebar from "../../admin-components/sidebar/Sidebar";
import { Context } from "../../../context";
import "./categories.scss";
import { Box, Modal } from "@mui/material";

const Categories = () => {
  const {
    categories,
    deleteCategory,
    categoryOpen,
    style,
    catOpen,
    categoryClose,
    editnameuz,
    editnameen,
    editnameru,
    setEditnameuz,
    setEditnameen,
    setEditnameru,
    editCategory,
    categoryModalData,
  } = useContext(Context);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <table
            className="table bg-white my-4"
            style={{
              width: "95%",
              margin: "0 auto",
              borderRadius: "12px",
            }}
          >
            <thead>
              <tr>
                <th>Name Uz</th>
                <th>Name En</th>
                <th>Name Ru</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => {
                return (
                  <tr key={cat.id}>
                    <td className="align-middle">
                      <b>{cat.name_uz ? cat.name_uz : "Not Specified"}</b>
                    </td>
                    <td className="align-middle">
                      {cat.name_en ? cat.name_en : "Not Specified"}
                    </td>
                    <td className="align-middle">
                      {cat.name_ru ? cat.name_ru : "Not Specified"}
                    </td>
                    <td className="text-end align-middle">
                      <div className="dropdown">
                        <a
                          data-bs-toggle="dropdown"
                          className="btn btn-transparent border"
                          href="/category"
                          aria-expanded="false"
                        >
                          ...
                        </a>
                        <div className="dropdown-menu">
                          <a
                            className="dropdown-item"
                            onClick={() => categoryOpen(cat)}
                            style={{ cursor: "pointer" }}
                          >
                            Edit Category
                          </a>
                          <a
                            className="dropdown-item text-danger"
                            onClick={() => deleteCategory(cat.id)}
                            style={{ cursor: "pointer" }}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={catOpen} onClose={categoryClose}>
        <Box sx={style}>
          <div className="categories_modal-inputs">
            <input
              className="form-control"
              type="text"
              value={editnameuz}
              onChange={(e) => setEditnameuz(e.target.value)}
              placeholder={`${categoryModalData?.name_uz}`}
            />
            <input
              className="form-control"
              type="text"
              value={editnameen}
              onChange={(e) => setEditnameen(e.target.value)}
              placeholder={`${categoryModalData?.name_en}`}
            />
            <input
              className="form-control"
              type="text"
              value={editnameru}
              onChange={(e) => setEditnameru(e.target.value)}
              placeholder={`${categoryModalData?.name_ru}`}
            />
            <button
              className="btn btn-primary"
              onClick={() => editCategory(categoryModalData?.id)}
            >
              Edit
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Categories;
