import React from "react";

import CardsList from "../components/Card-List/CardsList.js";
import Cards from "../components/Cards/Cards.js";

const Events = () => {
  return (
    <>
      <h1 className="title">Događadnja</h1>
      <CardsList>
        <Cards type="event" />
        <Cards type="event" />
        <Cards type="event" />
        <Cards type="event" />
        <Cards type="event" />
        <Cards type="event" />
      </CardsList>
    </>
  );
};

export default Events;
