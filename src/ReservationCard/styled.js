import styled from "styled-components";

export const ReservationCardImage = styled.img`
  height: 108px;
  @media (min-width: 576px) {
    height: 164px;
  }
`;

export const ReservationType = styled.div`
  font-family: "CircularAir-Bold";
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
`;

export const ReservationName = styled.div`
  font-family: "CircularAir-Bold";
  font-size: 18px;
  line-height: 21px;
`;

export const ReservationPrice = styled.div`
  margin-top: 4px;
  font-family: "CircularAir-Light";
  font-size: 18px;
  line-height: 21px;
`;
