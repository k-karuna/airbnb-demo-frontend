import React, { Component } from "react";
import shapeStar from "../BodySection/shapeStar.png";

import {
  CardBottomText,
  CardPrice,
  CardStars,
  RatingStarImg,
  ExperienceReview
} from "../ExperiencesCard/styled";

import {
  HomesCardImage,
  HomesCardDescription,
  HomesCardSubtext
} from "./styled";

export default function(props) {
  return (
    <div>
      <a href="/">
        <HomesCardImage src={props.imgSrc} />
      </a>
      <CardBottomText>
        <CardPrice>{props.dollars}$</CardPrice>
        <HomesCardDescription>{props.description}</HomesCardDescription>
        <HomesCardSubtext>{props.subText}</HomesCardSubtext>
        <CardStars>
          <RatingStarImg src={shapeStar} />
          <RatingStarImg src={shapeStar} />
          <RatingStarImg src={shapeStar} />
          <RatingStarImg src={shapeStar} />
          <RatingStarImg src={shapeStar} />
          <ExperienceReview>{props.hostType}</ExperienceReview>
        </CardStars>
      </CardBottomText>
    </div>
  );
}
