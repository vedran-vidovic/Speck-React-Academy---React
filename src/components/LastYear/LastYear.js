import React from "react";
import "./LastYear.css";

import lastyear from "../../assets/last-year.jpg";

const LastYear = () => {
  return (
    <section className="last-year-section">
      <h2>FOI tjedan karijera 2019</h2>
      <div className="last-container">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
        <figure>
          <img src={lastyear} alt="last-year" />
        </figure>
      </div>
    </section>
  );
};

export default LastYear;
