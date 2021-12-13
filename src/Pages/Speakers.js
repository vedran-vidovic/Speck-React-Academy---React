import React from "react";

import CardsList from "../components/Card-List/CardsList.js";
import Cards from "../components/Cards/Cards.js";

const Speakers = () => {
  return (
    <>
      <h1 className="title">Sudionici</h1>
      <CardsList>
        <Cards type="speaker" />
        <Cards type="speaker" />
        <Cards type="speaker" />
        <Cards type="speaker" />
        <Cards type="speaker" />
        <Cards type="speaker" />
      </CardsList>
    </>
  );
};

export default Speakers;
