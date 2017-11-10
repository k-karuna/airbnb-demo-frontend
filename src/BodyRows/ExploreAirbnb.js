import React, { Component } from "react";
import "./BodyRow.css";
import ExploreImg1 from "../ExploreCard/Rectangle 2@2x.png";
import ExploreImg2 from "../ExploreCard/Rectangle 2@2x-1.png";
import ExploreImg3 from "../ExploreCard/Rectangle 2@2x-2.png";
import ExploreCard from "../ExploreCard/Card";

export default function() {
  return (
    <section className="bodyrow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bodyrow-maintext">Explore Airbnb</div>
          </div>
          <div className="col-4">
            <ExploreCard imgSrc={ExploreImg1} cardText="Homes" />
          </div>
          <div className="col-4">
            <ExploreCard imgSrc={ExploreImg2} cardText="Experiences" />
          </div>
          <div className="col-4">
            <ExploreCard imgSrc={ExploreImg3} cardText="Restaurants" />
          </div>
        </div>
      </div>
    </section>
  );
}
