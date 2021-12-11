import React from "react";
import people from "../../assets/event.jpg";
import "./Hero.css";
import Button from "../Button/Button.js";

const Hero = () => {
  return (
    <section class="hero-section">
      <div class="hero-container">
        <h1>Tjedan karijera</h1>
        <h1 style={{ color: "#c59613" }}>FOI</h1>
        <h2>20.10.2020. - 26.10.2020.</h2>
        <Button text="Prijavi se" />
      </div>
    </section>
  );
};

export default Hero;
