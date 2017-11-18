import React from "react";

import homeImg1 from "../HomesCard/rectangle6@2x.png";
import homeImg2 from "../HomesCard/rectangle6@2x-1.png";
import homeImg3 from "../HomesCard/rectangle6@2x-2.png";
import { ScrollBtn, CardWrapper } from "./Destinations";
import HomesCard from "../HomesCard";
import Maintext from "../BodySection";
import { ExperienceCards } from "./Experiences";
import { BodySection } from "./Destinations";

const HomesScrollButton = ScrollBtn.extend`top: 82px;`;

export default function() {
  return (
    <BodySection>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Maintext mainText="Homes" />
          </div>
          <ExperienceCards>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <HomesCard
                imgSrc={homeImg1}
                cardText="Homes"
                price={82}
                description="La Salentina, see, nature & relax"
                subText="Entire house &#183; 9 beds"
                hostType="97 &#183; Superhost"
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-48">
              <HomesCard
                imgSrc={homeImg2}
                cardText="Experiences"
                price={90}
                description="Your private 3 bedr. riad and exclusive"
                subText="Entire house &#183; 5 beds"
                hostType="161 &#183; Superhost"
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <CardWrapper>
                <HomesCard
                  imgSrc={homeImg3}
                  cardText="Restaurants"
                  price={200}
                  description="Dreamy Tropical Tree House"
                  subText="Entire treehouse &#183; 1 bed"
                  hostType="364 &#183; Superhost"
                />
                <HomesScrollButton />
              </CardWrapper>
            </div>
          </ExperienceCards>
        </div>
      </div>
    </BodySection>
  );
}
