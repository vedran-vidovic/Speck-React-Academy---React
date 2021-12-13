import React from "react";
import Card from "../Cards/Cards.js";

import "./CardsList.css";

const EventsList = (props) => {
  return (
    <>
      <div class="component-container">{props.children}</div>
    </>
  );
};

export default EventsList;
