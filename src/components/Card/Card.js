import React from "react";
import eventicon from "../../assets/event-icon.png";
import time from "../../assets/time-icon.png";
import location from "../../assets/location-icon.png";
import speaker from "../../assets/speakers-icon.png";

import "./Card.css";

const Cards = (props) => {
  if (props.type === "event") {
    return (
      <div className="info-box">
        <div className="info-box-header">
          <div className="event-icon">
            <img src={eventicon} alt="event" />
          </div>
          <h3>{props.title}</h3>
        </div>

        <div className="info-box-time-place">
          <div>
            <img src={location} alt="location" />
            <p>{props.location}</p>
          </div>
          <div>
            <img src={time} alt="time" />
            <p>{props.dateTime}</p>
          </div>
        </div>

        <div className="info-box-paragraph-container">
          <p>{props.about}</p>
        </div>
        <a href="#">Prijavi se na predavanje </a>
      </div>
    );
  } else if (props.type === "speaker") {
    return (
      <div className="info-box">
        <div className="info-box-header-speakers">
          <div className="speakers-icon">
            <img src={speaker} alt="speaker" />
          </div>
          <h3>{props.name}</h3>
        </div>

        <div className="info-box-paragraph-container">
          <p>{props.about}</p>
        </div>
        <a href="#">Prati Sudionika</a>
      </div>
    );
  }
};

export default Cards;
