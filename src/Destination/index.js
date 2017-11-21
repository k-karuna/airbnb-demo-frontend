import React from "react";
import styled from "styled-components";
import { CardBottomText } from "../ExperiencesCard/styled";

const DestinationCardImage = styled.img`
  height: 138px;
  @media (min-width: 576px) {
    height: 220px;
  }
`;

const DestinationCitytext = styled.div`
  font-family: "CircularAir-Bold";
  font-size: 15px;
  line-height: 18px;
`;

export default function(props) {
  return (
    <div>
      <a href="/">
        <DestinationCardImage src={props.imgSrc} />
      </a>
      <CardBottomText>
        <DestinationCitytext>{props.cityName}</DestinationCitytext>
      </CardBottomText>
    </div>
  );
}
