import React, { Component } from "react";

import destImg1 from "./Destination/rectangle6@2x-7.png";
import destImg2 from "./Destination/rectangle6@2x-8.png";
import destImg3 from "./Destination/rectangle6@2x-9.png";
import destImg4 from "./Destination/rectangle6@2x-10.png";
import destImg5 from "./Destination/rectangle6@2x-11.png";
import destImg6 from "./Destination/rectangle6@2x-12.png";
import bottomArrow from "./BodySection/shape-5.svg";
import DestinationCard from "./Destination";
import styled from "styled-components";
import { ExperienceCards } from "./Experiences";

const MainText = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

export const BodySection = styled.section`
  margin-top: 48px;
  margin-bottom: 48px;
`;

export const CardWrapper = styled.div`position: relative;`;

export const ScrollBtn = styled.div`
  background-color: white;
  border-radius: 25px;
  position: absolute;
  top: 146px;
  right: -17px;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-image: url(${bottomArrow});
  background-repeat: no-repeat;
  background-position-x: 15px;
  background-position-y: 10px;
`;

const DestinationScrollBtn = ScrollBtn.extend`top: 91px;`;

export default function() {
  return (
    <BodySection>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <MainText>Featured destinations</MainText>
          </div>
          <ExperienceCards>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={destImg1} cityName="Paris" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={destImg2} cityName="Miami" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={destImg3} cityName="Tokyo" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={destImg4} cityName="Cape town" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <DestinationCard imgSrc={destImg5} cityName="Seoul" />
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 col-4">
              <CardWrapper>
                <DestinationCard imgSrc={destImg6} cityName="Los Angeles" />
                <DestinationScrollBtn />
              </CardWrapper>
            </div>
          </ExperienceCards>
        </div>
      </div>
    </BodySection>
  );
}
