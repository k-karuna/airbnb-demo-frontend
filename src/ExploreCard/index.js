import React from "react";
import { ExploreCard, ExploreCardImage, ExploreCardText } from "./styled";

export default function(props) {
  return (
    <ExploreCard>
      <ExploreCardImage src={props.imgSrc} />
      <ExploreCardText>
        <p>{props.cardText}</p>
      </ExploreCardText>
    </ExploreCard>
  );
}
