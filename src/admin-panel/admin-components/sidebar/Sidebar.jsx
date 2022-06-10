import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Buddy Burger</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN MENU</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/admin">Dashboard</Link>
          </li>
          <p className="title">LISTS MENU</p>
          <li>
            <GroupIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className="icon" />
            <Link to="/products">Products</Link>
          </li>
          <li>
            <CategoryIcon className="icon" />
            <Link to="/categories">Categories</Link>
          </li>
          <p className="title">ACCOUNT</p>
          <li>
            <PersonIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span
              onClick={() => {
                localStorage.removeItem("admin");
                window.location.reload();
              }}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
