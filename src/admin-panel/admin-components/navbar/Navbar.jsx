import "./navbar.scss";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <Brightness4Icon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://www.iriset.in/tms/uploads/profile/profile.png"
              alt="user"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
