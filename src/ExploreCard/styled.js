import styled from "styled-components";

export const ExploreCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.1);
  border-radius: 4px;
  min-width: 144px;
  @media (min-width: 768px) {
    min-width: 235px;
  }
`;

export const ExploreCardImage = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 768px) {
    height: 72px;
    width: unset;
  }
`;

export const ExploreCardText = styled.div`
  flex: 1;
  margin-left: 12px;
  font-weight: bold;
  font-size: 12px;
  @media (min-width: 768px) {
    margin-left: 24px;
    font-size: 17px;
  }
`;
