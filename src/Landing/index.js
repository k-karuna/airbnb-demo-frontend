import React, { Component } from "react";
import Header from "../Header";
import ExploreAirbnb from "./ExploreAirbnb";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExploreAirbnb />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
        <Footer />
      </div>
    );
  }
}

export default Landing;
