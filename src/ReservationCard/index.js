import React, { Component } from "react";
import shapeStar from "../BodySection/shapeStar.png";
import { CardBottomText } from "../ExperiencesCard/styled";
import {
  ReservationCardImage,
  ReservationType,
  ReservationName,
  ReservationPrice
} from "./styled";

export default function(props) {
  return (
    <div>
      <a href="/">
        <ReservationCardImage src={props.imgSrc} />
      </a>
      <CardBottomText>
        <ReservationType>{props.reservType}</ReservationType>
        <ReservationName>{props.reservName}</ReservationName>
        <ReservationPrice>{props.reservPrice}</ReservationPrice>
      </CardBottomText>
    </div>
  );
}
