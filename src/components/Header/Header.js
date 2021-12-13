import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header-main">
      <div className="header-container">
        <Link to="/" className="LogoContainer">
          <img src={logo} alt="Logo" />
        </Link>
        <nav className="navigation-menu">
          <ul>
            <li>
              <Link className="HeaderMain-NavLink" to="/events">
                Događanja
              </Link>
            </li>
            <li>
              <Link className="HeaderMain-NavLink" to="/speakers">
                Sudionici
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
