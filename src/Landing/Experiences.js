import React from "react";
import experienceImg1 from "../ExperiencesCard/rectangle@2x.png";
import experienceImg2 from "../ExperiencesCard/rectangle@2x-1.png";
import experienceImg3 from "../ExperiencesCard/rectangle@2x-2.png";
import experienceImg4 from "../ExperiencesCard/rectangle@2x-3.png";
import Maintext from "../BodySection";
import ExperiencesCard from "../ExperiencesCard";
import { ScrollBtn, CardWrapper, BodySection } from "./Destinations";
import styled from "styled-components";

export const ExperienceCards = styled.div`
  display: flex;
  overflow: hidden;
`;

export default function() {
  return (
    <BodySection>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Maintext mainText="Experiences" />
          </div>
          <ExperienceCards>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ExperiencesCard
                imgSrc={experienceImg1}
                dollars="29"
                description="Forest therapy"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ExperiencesCard
                imgSrc={experienceImg2}
                dollars="69"
                description="Whale watching"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <ExperiencesCard
                imgSrc={experienceImg3}
                dollars="69"
                description="Table Mountain Summit, Cable Car Down"
              />
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 col-6">
              <CardWrapper>
                <ExperiencesCard
                  imgSrc={experienceImg4}
                  dollars="50"
                  description="Salsa Night"
                />
                <ScrollBtn />
              </CardWrapper>
            </div>
          </ExperienceCards>
        </div>
      </div>
    </BodySection>
  );
}
