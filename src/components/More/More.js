import React from "react";
import "./More.css";
import Button from "../Button/Button.js";

import about from "../../assets/about.jpg";
import speakers from "../../assets/speakers.jpg";
import calendar from "../../assets/calendar.jpg";
import partner from "../../assets/partner.jpg";

const More = () => {
  return (
    <section class="more-section">
      <div class="more-container">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>

        <Button text="Saznaj više" />
      </div>

      <div class="cards-container">
        <a href="#" class="card">
          <img src={about} alt="about" />
          <p>O tjednu karijera</p>
        </a>

        <a href="#" class="card">
          <img src={speakers} alt="speakers" />
          <p>Izlagači</p>
        </a>

        <a href="#" class="card">
          <img src={calendar} alt="calendar" />
          <p>Kalendar</p>
        </a>

        <a href="#" class="card">
          <img src={partner} alt="partner" />
          <p>Partneri</p>
        </a>
      </div>
    </section>
  );
};

export default More;
