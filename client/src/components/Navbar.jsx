import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { FiPhoneCall } from "react-icons/fi";
import GlobalContext from "../context/GlobalContext";
import Search from "./Home/Search";

const Navbar = () => {
  const { handleLogout } = useContext(GlobalContext);
  return (
    <>
      <div className="navbar">
        <div className="mobile">
          <Search />
        </div>
        <div className="contact navbar-item pc">
          <FiPhoneCall className="phone-icon" />
          91212131313
        </div>
        <div className="navbar-item pc">
          Get 50% off on selected items | Shop Now
        </div>
        <div className="loginsignup navbar-item pc">
          {localStorage.getItem("token") ? (
            <button className="logoutbutton" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="authbutton" to="/login">
                Login
              </Link>{" "}
              |{" "}
              <Link className="authbutton" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="extramargin"></div>
    </>
  );
};

export default Navbar;
