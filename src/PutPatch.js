import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Box } from "@mui/material";

const PutPatch = () => {
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [modalData, setModalData] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    setOpen(true);
    setModalData(data);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    bgcolor: "background.paper",
    border: "0",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };

  const patcherr = async (id) => {
    try {
      axios.patch(`https://buddyburger.herokuapp.com/categories/${id}/`, {
        name_ru: value,
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    axios
      .get("https://buddyburger.herokuapp.com/categories/")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <>
      <div className="categoriessss d-flex justify-content-around">
        {categories.map((cat) => {
          return (
            <div className="categoryyyy bg-white">
              <h1>{cat.name_ru}</h1>
              <button onClick={() => handleOpen(cat)}>Edit</button>
            </div>
          );
        })}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <input
            type="text"
            placeholder={`${modalData?.name_ru}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => patcherr(modalData?.id)}>Put</button>
        </Box>
      </Modal>
    </>
  );
};

export default PutPatch;
