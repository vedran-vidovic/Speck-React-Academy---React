import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.png";

const links = {
  speakers: "Speakers",
  events: "Events",
};

const Header = () => {
  return (
    <header class="header-main">
      <div class="header-container">
        <Link to="/" className="LogoContainer">
          <img src={logo} alt="Logo" />
        </Link>
        <nav class="navigation-menu">
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
