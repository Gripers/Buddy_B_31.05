import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

export default function DropMenu() {
  const { t } = useContext(Context);
  const [show, setShow] = React.useState("none");

  return (
    <div class="dropdown d-flex align-items-center justify-content-center">
      <svg
        style={{ cursor: "pointer" }}
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="white"
        onClick={() => setShow("none")}
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <path
          d="M16.0003 2.66663C8.64033 2.66663 2.66699 8.63996 2.66699 16C2.66699 23.36 8.64033 29.3333 16.0003 29.3333C23.3603 29.3333 29.3337 23.36 29.3337 16C29.3337 8.63996 23.3603 2.66663 16.0003 2.66663ZM16.0003 6.66663C18.2137 6.66663 20.0003 8.45329 20.0003 10.6666C20.0003 12.88 18.2137 14.6666 16.0003 14.6666C13.787 14.6666 12.0003 12.88 12.0003 10.6666C12.0003 8.45329 13.787 6.66663 16.0003 6.66663ZM16.0003 25.6C12.667 25.6 9.72033 23.8933 8.00033 21.3066C8.04033 18.6533 13.3337 17.2 16.0003 17.2C18.6537 17.2 23.9603 18.6533 24.0003 21.3066C22.2803 23.8933 19.3337 25.6 16.0003 25.6Z"
          fill="#51267D"
        />
      </svg>
      <ul
        class="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
        style={{
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 4px 25px rgb(0 0 0 / 25%)",
          padding: "2vh",
          userSelect: "none",
        }}
      >
        <Link
          className="text-black"
          style={{ margin: "0", textDecoration: "none" }}
          to="/userinfo"
        >
          {t("profile.info")}
        </Link>
        <p
          className="text-black my-2"
          style={{ cursor: "pointer", margin: "0" }}
          onClick={() => {
            localStorage.removeItem("user") || localStorage.removeItem("admin");
            window.location.reload();
          }}
        >
          {t("profile.out")}
        </p>
        <Link
          to="/admin"
          className="text-black"
          style={{
            margin: "0",
            textDecoration: "none",
            display: localStorage.getItem("admin") ? "block" : "none",
          }}
        >
          Admin
        </Link>
      </ul>
    </div>
  );
}
