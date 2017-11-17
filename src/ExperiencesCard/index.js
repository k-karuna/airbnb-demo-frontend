import React from "react";
import shapeStar from "../BodySection/shapeStar.png";

import {
  ExperienceCardImage,
  CardBottomText,
  CardPrice,
  ExperienceCardDescription,
  CardStars,
  RatingStarImg,
  ExperienceReview
} from "./styled";

export default function(props) {
  return (
    <div>
      <a href="/">
        <ExperienceCardImage src={props.imgSrc} />
      </a>
      <CardBottomText>
        <CardPrice>{props.dollars}$</CardPrice>
        <ExperienceCardDescription>
          {props.description}
        </ExperienceCardDescription>
        <CardStars>
          <RatingStarImg src={shapeStar} />
          <RatingStarImg src={shapeStar} />
          <RatingStarImg src={shapeStar} />
          <RatingStarImg src={shapeStar} />
          <RatingStarImg src={shapeStar} />
          <ExperienceReview>44 rewiews</ExperienceReview>
        </CardStars>
      </CardBottomText>
    </div>
  );
}
