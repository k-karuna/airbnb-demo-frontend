import React from "react";

import reservImg1 from "../ReservationCard/rectangle6@2x-3.png";
import reservImg2 from "../ReservationCard/rectangle6@2x-4.png";
import reservImg3 from "../ReservationCard/rectangle6@2x-5.png";
import reservImg4 from "../ReservationCard/rectangle6@2x-6.png";
import { ScrollBtn, CardWrapper } from "./Destinations";
import { ExperienceCards } from "./Experiences";
import Maintext from "../BodySection";
import ReservationCard from "../ReservationCard";
import { BodySection } from "./Destinations";

const ReservationScrollBtn = ScrollBtn.extend`top: 63px;`;

export default function() {
  return (
    <BodySection>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Maintext mainText="Popular reservations around the world" />
          </div>

          <ExperienceCards>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ReservationCard
                imgSrc={reservImg1}
                reservType="speakeasy"
                reservName="Chumley's"
                reservPrice="About $60 per person"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ReservationCard
                imgSrc={reservImg2}
                reservType="korean gastropub"
                reservName="Hanjan"
                reservPrice="About $50 per person"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ReservationCard
                imgSrc={reservImg3}
                reservType="german american"
                reservName="Prime Meats"
                reservPrice="About $55 per person"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <CardWrapper>
                <ReservationCard
                  imgSrc={reservImg4}
                  reservType="fine seafood"
                  reservName="Seaprice"
                  reservPrice="About $70 per person"
                />
                <ReservationScrollBtn />
              </CardWrapper>
            </div>
          </ExperienceCards>
        </div>
      </div>
    </BodySection>
  );
}
