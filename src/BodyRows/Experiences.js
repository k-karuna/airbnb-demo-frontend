import React, { Component } from "react";
import ExperienceImg1 from "../ExperiencesCard/Rectangle@2x.png";
import ExperienceImg2 from "../ExperiencesCard/Rectangle@2x-1.png";
import ExperienceImg3 from "../ExperiencesCard/Rectangle@2x-2.png";
import ExperienceImg4 from "../ExperiencesCard/Rectangle@2x-3.png";

import BodyRowMaintext from "./BodyRowMaintext";
import ExperiencesCard from "../ExperiencesCard/Card";

export default function() {
  return (
    <section className="bodyrow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <BodyRowMaintext mainText="Experiences" />
          </div>
          <div className="experience-cards">
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ExperiencesCard
                imgSrc={ExperienceImg1}
                dollars="29"
                description="Forest therapy"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ExperiencesCard
                imgSrc={ExperienceImg2}
                dollars="69"
                description="Whale watching"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ExperiencesCard
                imgSrc={ExperienceImg3}
                dollars="69"
                description="Table Mountain Summit, Cable Car Down"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <div className="cardContainer">
                <ExperiencesCard
                  imgSrc={ExperienceImg4}
                  dollars="50"
                  description="Salsa Night"
                />
                <div className="right-roud-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
