import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main";

//Pages
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Speakers from "./Pages/Speakers";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/speakers" element={<Speakers />} />
        </Routes>
      </>
    );
  }
}

export default App;
