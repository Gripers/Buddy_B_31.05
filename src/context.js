import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const ContextProvider = ({ children }) => {
  //states start
  const [categories, setCategories] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [nameuz, setNameuz] = useState("");
  const [nameen, setNameen] = useState("");
  const [nameru, setNameru] = useState("");
  const [open, setOpen] = useState(false);
  const cartOpen = () => setOpen(true);
  const cartClose = () => setOpen(false);
  const [categoryModalData, setCategoryModalData] = useState();
  const [catOpen, setCatOpen] = useState(false);
  const categoryOpen = (data) => {
    setCatOpen(true);
    setCategoryModalData(data);
    setEditnameuz(data?.name_uz);
    setEditnameen(data?.name_en);
    setEditnameru(data?.name_ru);
  };
  const categoryClose = () => setCatOpen(false);
  const [editnameuz, setEditnameuz] = useState("");
  const [editnameen, setEditnameen] = useState("");
  const [editnameru, setEditnameru] = useState("");
  const [prodnameuz, setProdnameuz] = useState("");
  const [prodnameen, setProdnameen] = useState("");
  const [prodnameru, setProdnameru] = useState("");
  const [defuz, setDefuz] = useState("");
  const [defen, setDefen] = useState("");
  const [defru, setDefru] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [uuid, setUuid] = useState("");
  const [productModalData, setProductModalData] = useState();
  const [prodOpen, setProdOpen] = useState(false);
  const productOpen = (data) => {
    setProdOpen(true);
    setProductModalData(data);
    setNameuzz(data?.name_uz);
    setNameenn(data?.name_en);
    setNameruu(data?.name_ru);
    setDefuzz(data?.definition_uz);
    setDefenn(data?.definition_en);
    setDefruu(data?.definition_ru);
    setImgg(data?.image);
    setUid(data?.id);
  };
  const productClose = () => setProdOpen(false);
  const [nameuzz, setNameuzz] = useState("");
  const [nameenn, setNameenn] = useState("");
  const [nameruu, setNameruu] = useState("");
  const [defuzz, setDefuzz] = useState("");
  const [defenn, setDefenn] = useState("");
  const [defruu, setDefruu] = useState("");
  const [imgg, setImgg] = useState("");
  const [pricee, setPricee] = useState("");
  const [uid, setUid] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [registerDataName, setRegisterDataName] = useState("");
  const [registerDataNumber, setRegisterDataNumber] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [smsform, setSmsForm] = useState("");
  const [regmes, setRegMes] = useState();
  const [con, setCon] = useState();
  const [log, setLog] = useState("");
  const [logconfirm, setLogConfirm] = useState(false);
  const [logconsms, setLogConSms] = useState("");
  const [logmes, setLogMes] = useState();
  const [logmescon, setLogMesCon] = useState();

  //states end

  //consts start
  const { t, i18n } = useTranslation();
  const qs = require("qs");
  const navigate = useNavigate();

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const categoryId = async (id) => {
    try {
      const res = await axios
        .get(`https://buddyburger.herokuapp.com/categories/${id}`)
        .then((res) => setBurgers(res.data.burgers));
    } catch (error) {
      alert(error);
    }
  };

  const changeBtn = (id) => {
    const activeBtn = burgers.map((burger) => {
      if (burger.id === id) {
        return {
          ...burger,
          isActive: true,
        };
      }
      return burger;
    });
    setBurgers(activeBtn);
  };

  const rechangeBtn = (id) => {
    const activeBtn = burgers.map((burger) => {
      if (burger.id === id) {
        return {
          ...burger,
          isActive: false,
        };
      }
      return burger;
    });
    setBurgers(activeBtn);
  };

  const useStyles = makeStyles((theme) => ({
    navlinks: {
      display: "flex",
      alignItems: "center",
      marginLeft: theme.spacing(0),
    },
    logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "16px",
      marginLeft: theme.spacing(5),
      marginBottom: "0",
      fontWeight: "bold",
      "&:hover": {
        color: "black",
        cursor: "pointer",
      },
    },
    btns: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "5%",
    },
  }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "755px",
    height: "auto",
    bgcolor: "background.paper",
    border: "0",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };

  const dialogstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "422px",
    height: "auto",
    bgcolor: "background.paper",
    border: "0",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };

  const { addItem, removeItem, updateItemQuantity, emptyCart, isEmpty, items } =
    useCart();

  const deleteCategory = async (id) => {
    try {
      const res = await axios
        .delete(`https://buddyburger.herokuapp.com/categories/${id}/`)
        .then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };

  const addCategory = () => {
    axios
      .post(
        "https://buddyburger.herokuapp.com/categories/",
        qs.stringify({
          name_uz: nameuz,
          name_en: nameen,
          name_ru: nameru,
        })
      )
      .then(() => window.location.reload());
  };

  const editCategory = async (id) => {
    try {
      const res = await axios
        .put(
          `https://buddyburger.herokuapp.com/categories/${id}/`,
          qs.stringify({
            name_uz: editnameuz,
            name_en: editnameen,
            name_ru: editnameru,
          })
        )
        .then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await axios
        .delete(`https://buddyburger.herokuapp.com/burgers/${id}/`)
        .then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };

  const addProduct = () => {
    axios
      .post(
        `https://buddyburger.herokuapp.com/burgers/`,
        qs.stringify({
          name_uz: prodnameuz,
          name_en: prodnameen,
          name_ru: prodnameru,
          definition_uz: defuz,
          definition_en: defen,
          definition_ru: defru,
          image: img,
          price: price,
          category: uuid,
        })
      )
      .then(() => window.location.reload());
  };

  const editProduct = async (id) => {
    try {
      const res = await axios
        .put(
          `https://buddyburger.herokuapp.com/burgers/${id}/`,
          qs.stringify({
            name_uz: nameuzz,
            name_en: nameenn,
            name_ru: nameruu,
            definition_uz: defuzz,
            definition_en: defenn,
            definition_ru: defruu,
            image: imgg,
            price: pricee,
            category: uid,
          })
        )
        .then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };

  const handleLogin = (event) => {
    setLogin(true);
  };

  const handleRegister = (event) => {
    setRegister(true);
  };

  const handleConfirm = (event) => {
    setConfirm(true);
  };

  const logEr = (event) => {
    setLogin(false);
    setRegister(true);
  };

  const logErcon = (event) => {
    setLogin(false);
    setLogConfirm(true);
  };

  const logConEr = (event) => {
    setLogConfirm(false);
    setRegister(true);
  };

  const regswitchEr = (event) => {
    setRegister(false);
    setLogin(true);
  };

  const registEr = (event) => {
    setRegister(false);
    setConfirm(true);
  };

  const conEr = (event) => {
    setConfirm(false);
    setLogin(true);
  };

  const loginPost = () => {
    axios
      .post("http://127.0.0.1:8000/send_sms/", {
        phone_number: log,
      })
      .then((response) => {
        setLogMes(response.data.message);
        if (response.data.status == "200") {
          logErcon();
        }
      });
  };

  const confirmLogin = () => {
    axios
      .post("http://127.0.0.1:8000/login/", {
        sms: logconsms,
        phone_number: log,
      })
      .then((response) => {
        setLogMesCon(response.data.message);
        if ((response.data.status == 200) & (response.data.is_admin == false)) {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.href = "/";
        } else if (response.data.is_admin == true) {
          localStorage.setItem("admin", JSON.stringify(response.data));
          window.location.href = "/admin";
        }
      });
  };

  const registerPost = () => {
    axios
      .post("http://127.0.0.1:8000/register/", {
        full_name: registerDataName,
        phone_number: registerDataNumber,
      })
      .then((response) => {
        setRegMes(response.data.message);
        if (response.data.status == "200") {
          registEr();
        }
      });
  };

  const confirmRegister = () => {
    axios
      .post("http://127.0.0.1:8000/login/", {
        sms: smsform,
        phone_number: registerDataNumber,
      })
      .then((response) => {
        setCon(response.data.message);
        if (response.data.status == "200") {
          localStorage.setItem("user", response.data);
          window.location = "/";
        }
      });
  };

  //consts end

  //effects start

  useEffect(() => {
    axios
      .get("https://buddyburger.herokuapp.com/categories/")
      .then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://buddyburger.herokuapp.com/burgers/")
      .then((res) => setBurgers(res.data));
  }, []);

  //effects end

  return (
    <div>
      <Context.Provider
        value={{
          categories,
          settings,
          burgers,
          t,
          i18n,
          categoryId,
          setBurgers,
          changeBtn,
          rechangeBtn,
          open,
          cartOpen,
          cartClose,
          useStyles,
          style,
          addItem,
          removeItem,
          updateItemQuantity,
          emptyCart,
          isEmpty,
          items,
          deleteCategory,
          nameuz,
          nameen,
          nameru,
          setNameuz,
          setNameen,
          setNameru,
          addCategory,
          editCategory,
          categoryModalData,
          catOpen,
          categoryOpen,
          categoryClose,
          editnameuz,
          editnameen,
          editnameru,
          setEditnameuz,
          setEditnameen,
          setEditnameru,
          deleteProduct,
          productModalData,
          prodOpen,
          productOpen,
          productClose,
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
          editProduct,
          login,
          setLogin,
          handleLogin,
          register,
          setRegister,
          handleRegister,
          dialogstyle,
          registerDataName,
          setRegisterDataName,
          registerDataNumber,
          setRegisterDataNumber,
          registerPost,
          confirm,
          setConfirm,
          handleConfirm,
          smsform,
          setSmsForm,
          confirmRegister,
          regmes,
          registEr,
          regswitchEr,
          con,
          logEr,
          log,
          setLog,
          loginPost,
          logconfirm,
          setLogConfirm,
          confirmLogin,
          logmes,
          logmescon,
          logconsms,
          setLogConSms,
          conEr,
          logConEr,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { ContextProvider, Context };