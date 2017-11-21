import React from "react";
import RightArrow from "./shape-5.svg";
import styled from "styled-components";

export const SectionCaption = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

const Text = styled.span`max-width: 75%;`;

const SeeAllLink = styled.a`
  font-family: "CircularAir";
  font-size: 12px;
  font-weight: normal;
  line-height: 24px;
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    font-size: 14px;
  }
`;

const SeeAllLinkImg = styled.img`
  height: 10px;
  margin-left: 8px;
`;

export default function(props) {
  return (
    <SectionCaption>
      <Text>{props.mainText}</Text>
      <SeeAllLink href="/">
        <span>See all</span>
        <SeeAllLinkImg src={RightArrow} alt="" />
      </SeeAllLink>
    </SectionCaption>
  );
}
