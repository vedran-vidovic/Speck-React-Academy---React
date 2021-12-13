import React from "react";
import eventicon from "../../assets/event-icon.png";
import time from "../../assets/time-icon.png";
import location from "../../assets/location-icon.png";
import speaker from "../../assets/speakers-icon.png";

import "./Cards.css";

const Cards = (props) => {
  if (props.type === "event") {
    return (
      <div class="info-box">
        <div class="info-box-header">
          <div class="event-icon">
            <img src={eventicon} alt="event" />
          </div>
          <h3>How can we benefit from React Redux</h3>
        </div>

        <div class="info-box-time-place">
          <div>
            <img src={location} alt="location" />
            <p>Dvorana D09</p>
          </div>
          <div>
            <img src={time} alt="time" />
            <p>24.3 u 13:45h</p>
          </div>
        </div>

        <div class="info-box-paragraph-container">
          <p>
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one.
          </p>
        </div>
        <a href="#">Prijavi se na predavanje </a>
      </div>
    );
  } else if (props.type === "speaker") {
    return (
      <div class="info-box">
        <div class="info-box-header-speakers">
          <div class="speakers-icon">
            <img src={speaker} alt="speaker" />
          </div>
          <h3>Johan Bach</h3>
        </div>

        <div class="info-box-paragraph-container">
          <p>
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one.
          </p>
        </div>
        <a href="#">Prati Sudionika</a>
      </div>
    );
  }
};

export default Cards;
