import React, { Component } from "react";

import DestImg1 from "../DestinationCard/Rectangle6@2x-7.png";
import DestImg2 from "../DestinationCard/Rectangle6@2x-8.png";
import DestImg3 from "../DestinationCard/Rectangle6@2x-9.png";
import DestImg4 from "../DestinationCard/Rectangle6@2x-10.png";
import DestImg5 from "../DestinationCard/Rectangle6@2x-11.png";
import DestImg6 from "../DestinationCard/Rectangle6@2x-12.png";

import DestinationCard from "../DestinationCard/Card";

export default function() {
  return (
    <section className="bodyrow lastrow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bodyrow-maintext">Featured destinations</div>
          </div>
          <div className="experience-cards">
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={DestImg1} cityName="Paris" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={DestImg2} cityName="Miami" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={DestImg3} cityName="Tokyo" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={DestImg4} cityName="Cape town" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={DestImg5} cityName="Seoul" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <div className="cardContainer">
                <DestinationCard imgSrc={DestImg6} cityName="Los Angeles" />
                <div className="right-roud-button right-roud-button-destinations" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
