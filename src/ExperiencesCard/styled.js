import styled from "styled-components";

export const ExperienceCardImage = styled.img`
  height: 250px;
  @media (min-width: 768px) {
    height: 346px;
  }
`;

export const CardBottomText = styled.div`
  margin-top: 8px;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

export const CardPrice = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const ExperienceCardDescription = styled.span`
  font-family: "CircularAir-Light";
`;

export const CardStars = styled.div`margin-top: 6px;`;

export const RatingStarImg = styled.img`
  height: 12px;
  margin-right: 4px;
`;

export const ExperienceReview = styled.span`
  font-family: "CircularAir";
  font-size: 12px;
  line-height: 14px;
`;
