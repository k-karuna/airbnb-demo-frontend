import React, { Component } from "react";
import exploreImg1 from "./ExploreCard/rectangle2@2x.png";
import exploreImg2 from "./ExploreCard/rectangle2@2x-1.png";
import exploreImg3 from "./ExploreCard/rectangle2@2x-2.png";
import ExploreCard from "./ExploreCard";
import styled from "styled-components";
import { SectionCaption } from "./BodySection";
import { BodySection } from "./Destinations";

const ExploreCards = styled.div`
  width: 100%;
  display: flex;
  min-width: 300px;
  overflow: hidden;
`;

export default function() {
  return (
    <BodySection>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionCaption>Explore Airbnb</SectionCaption>
          </div>
        </div>
        <div className="row">
          <ExploreCards>
            <div className="col-md-4 col-sm-5 col-xs-6 col-6">
              <ExploreCard imgSrc={exploreImg1} cardText="Homes" />
            </div>
            <div className="col-md-4 col-sm-5 col-xs-6 col-6">
              <ExploreCard imgSrc={exploreImg2} cardText="Experiences" />
            </div>
            <div className="col-md-4 col-sm-5 col-xs-6 col-6">
              <ExploreCard imgSrc={exploreImg3} cardText="Restaurants" />
            </div>
          </ExploreCards>
        </div>
      </div>
    </BodySection>
  );
}
