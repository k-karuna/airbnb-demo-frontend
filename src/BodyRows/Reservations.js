import React, { Component } from "react";

import ReservImg1 from "../ReservationCard/Rectangle6@2x-3.png";
import ReservImg2 from "../ReservationCard/Rectangle6@2x-4.png";
import ReservImg3 from "../ReservationCard/Rectangle6@2x-5.png";
import ReservImg4 from "../ReservationCard/Rectangle6@2x-6.png";

import BodyRowMaintext from "./BodyRowMaintext";
import ReservationCard from "../ReservationCard/Card";

export default function() {
  return (
    <section className="bodyrow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <BodyRowMaintext mainText="Popular reservations around the world" />
          </div>

          <div className="experience-cards">
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ReservationCard
                imgSrc={ReservImg1}
                reservType="speakeasy"
                reservName="Chumley's"
                reservPrice="About $60 per person"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ReservationCard
                imgSrc={ReservImg2}
                reservType="korean gastropub"
                reservName="Hanjan"
                reservPrice="About $50 per person"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ReservationCard
                imgSrc={ReservImg3}
                reservType="german american"
                reservName="Prime Meats"
                reservPrice="About $55 per person"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <div className="cardContainer">
                <ReservationCard
                  imgSrc={ReservImg4}
                  reservType="fine seafood"
                  reservName="Seaprice"
                  reservPrice="About $70 per person"
                />
                <div className="right-roud-button right-roud-button-reservations" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
