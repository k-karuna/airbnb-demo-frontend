import styled from "styled-components";
import mapImg from "./mapShape.png";

export const GoogleMapContainer = styled.div`
  display: none;
  @media (min-width: 991px) {
    display: block;
  }
  position: fixed;
  top: 140px;
  bottom: 0;
  right: 0;
  left: calc(50% + 170px);
`;

export const FilterButton = styled.button`
  font-size: 14px;
  color: #383838;
  font-family: "CircularAir", "Arial", sans-serif;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background-color: white;
  margin: 0 6px;
  background-color: ${props => (props.active ? "#008489" : "white")};
  color: ${props => (props.active ? "white" : "#383838")};
`;

export const MapButton = styled.button`
  display: block;
  @media (min-width: 991px) {
    display: none;
  }
  position: fixed;
  right: 8px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  background-image: url(${mapImg});
  background-size: 15px 19px;
  background-repeat: no-repeat;
  background-position: center;
`;
