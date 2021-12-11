import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header class="header-main">
      <div class="header-container">
        <a href="index.html" class="logo-image">
          <img src={logo} alt="Logo" />
        </a>
        <nav class="navigation-menu">
          <ul>
            <li>
              <a href="#">Za poslodavce</a>
            </li>
            <li>
              <a href="#">Događanja</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
            <li>
              <a href="#">Prijavi se</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
