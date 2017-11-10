import React, { Component } from "react";
import styled from "styled-components";

import "./Grid.css";
import "./index.css";

import Header from "./Header/Header";
import ExploreAirbnb from "./BodyRows/ExploreAirbnb";
import Experiences from "./BodyRows/Experiences";
import Homes from "./BodyRows/Homes";
import Reservations from "./BodyRows/Reservations";
import Destinations from "./BodyRows/Destinations";
import BigFooter from "./Footer/BigFooter";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ExploreAirbnb />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
        <BigFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
