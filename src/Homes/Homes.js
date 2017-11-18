import React from "react";
import HomesCard from "../HomesCard";
import { GoogleMapContainer, MapButton } from "./styled";
import GoogleMap from "google-map-react";
import HomesFooter from "./HomesFooter";
import homeImg1 from "../HomesCard/rectangle6@2x.png";
import homeImg2 from "../HomesCard/rectangle6@2x-1.png";
import homeImg3 from "../HomesCard/rectangle6@2x-2.png";
import homeImg4 from "../HomesCard/rectangle6.png";
import homeImg5 from "../HomesCard/rectangle7.png";
import homeImg6 from "../HomesCard/rectangle8.png";
import styled from "styled-components";

const GMapCenterCoord = { lat: 50.0103, lng: -118.6525 };

const HomesWrapper = styled.div`padding-top: 140px;`;
const HomesCardWrapper = styled.div`margin: 20px 0;`;

export default function() {
  return (
    <HomesWrapper>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-lg-4">
                <HomesCardWrapper>
                  <HomesCard
                    imgSrc={homeImg1}
                    cardText="Homes"
                    price={82}
                    description="La Salentina, see, nature & relax"
                    subText="Entire house &#183; 9 beds"
                    hostType="97 &#183; Superhost"
                  />
                </HomesCardWrapper>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <HomesCardWrapper>
                  <HomesCard
                    imgSrc={homeImg2}
                    cardText="Homes"
                    price={82}
                    description="Your private 3 bedr. riad and exclusive bathroom"
                    subText="Entire house &#183; 5 beds"
                    hostType="161 &#183; Superhost"
                  />
                </HomesCardWrapper>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <HomesCardWrapper>
                  <HomesCard
                    imgSrc={homeImg3}
                    cardText="Homes"
                    price={100}
                    description="Dreamy Tropical Tree House"
                    subText="Entire house &#183; 1 bed"
                    hostType="364 &#183; Superhost"
                  />
                </HomesCardWrapper>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <HomesCardWrapper>
                  <HomesCard
                    imgSrc={homeImg4}
                    cardText="Homes"
                    price={145}
                    description="Best location old town luxury loft"
                    subText="Entire apartment &#183; 1 bed"
                    hostType="369 &#183; Superhost"
                  />
                </HomesCardWrapper>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <HomesCardWrapper>
                  <HomesCard
                    imgSrc={homeImg5}
                    cardText="Homes"
                    price={83}
                    description="Lussuoso. Vista incantevole"
                    subText="Entire apartment &#183; 6 beds"
                    hostType="105 &#183; Superhost"
                  />
                </HomesCardWrapper>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <HomesCardWrapper>
                  <HomesCard
                    imgSrc={homeImg6}
                    cardText="Homes"
                    price={189}
                    description="In the historical center of Lecce"
                    subText="Entire house &#183; 3 beds"
                    hostType="221 &#183; Superhost"
                  />
                </HomesCardWrapper>
              </div>
            </div>
            <HomesFooter />
          </div>
          <GoogleMapContainer>
            <GoogleMap
              center={GMapCenterCoord}
              zoom={8}
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GMAP_KEY, //AIzaSyArFuzaI_Gf3nMYva4TtYsZhkBFYB0RnTI
                language: "ru"
              }}
            />
          </GoogleMapContainer>
        </div>
      </div>
      <MapButton />
    </HomesWrapper>
  );
}
