import React, { Component } from "react";

import HomeImg1 from "../HomesCard/Rectangle6@2x.png";
import HomeImg2 from "../HomesCard/Rectangle6@2x-1.png";
import HomeImg3 from "../HomesCard/Rectangle6@2x-2.png";

import HomesCard from "../HomesCard/Card";
import BodyRowMaintext from "./BodyRowMaintext";

export default function() {
  return (
    <section className="bodyrow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <BodyRowMaintext mainText="Homes" />
          </div>
          <div className="col-4">
            <HomesCard
              imgSrc={HomeImg1}
              cardText="Homes"
              dollars="82"
              description="La Salentina, see, nature & relax"
              subText="Entire house &#183; 9 beds"
              hostType="97 &#183; Superhost"
            />
          </div>
          <div className="col-4">
            <HomesCard
              imgSrc={HomeImg2}
              cardText="Experiences"
              dollars="82"
              description="Your private 3 bedr. riad and exclusive"
              subText="Entire house &#183; 5 beds"
              hostType="161 &#183; Superhost"
            />
          </div>
          <div className="col-4">
            <div className="cardContainer">
              <HomesCard
                imgSrc={HomeImg3}
                cardText="Restaurants"
                dollars="200"
                description="Dreamy Tropical Tree House"
                subText="Entire treehouse &#183; 1 bed"
                hostType="364 &#183; Superhost"
              />
              <div className="right-roud-button right-roud-button-homes" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
