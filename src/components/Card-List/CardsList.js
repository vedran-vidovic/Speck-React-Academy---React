import React from "react";
import Card from "../Card/Card.js";

import "./CardsList.css";

const EventsList = (props) => {
  return (
    <>
      <div className="component-container">{props.children}</div>
    </>
  );
};

export default EventsList;
