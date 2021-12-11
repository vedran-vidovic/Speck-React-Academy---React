import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button class="btn">{props.text}</button>;
};

export default Button;
