import React from "react";
import styled from "styled-components";
import rigthArrowImg from "./rightArrow.svg";

const Wrapper = styled.div`padding: 24px 0;`;
const PaginationWrapper = styled.div`margin-bottom: 40px;`;
const PaginationButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

const PaginationLink = styled.a`
  display: inline-flex;
  width: 32px;
  height: 32px;
  margin: 0 8px;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: "CircularAir";
  color: #0f7276;
  border-radius: 50%;
`;

const LeftPaginationLink = PaginationLink.extend`
  background-color: #008489;
  color: white;
`;

const PaginationArrow = PaginationLink.extend`border: 1px solid #008489;`;
const RightArrow = styled.img`height: 10px;`;

const RentalsText = styled.p`
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #383838;
  text-align: center;
`;

const AdditionalText = RentalsText.extend`
  margin: 0;
  color: #636363;
`;

export default function() {
  return (
    <div className="row">
      <div className="col-xs-12">
        <Wrapper>
          <PaginationWrapper>
            <PaginationButtons>
              <LeftPaginationLink href="#">1</LeftPaginationLink>
              <PaginationLink href="#">2</PaginationLink>
              <PaginationLink href="#">3</PaginationLink>
              <PaginationLink href="#">...</PaginationLink>
              <PaginationLink href="#">17</PaginationLink>
              <PaginationArrow href="#">
                <RightArrow src={rigthArrowImg} alt="" />
              </PaginationArrow>
            </PaginationButtons>
            <RentalsText>1 – 18 of 300+ Rentals</RentalsText>
          </PaginationWrapper>
          <AdditionalText>
            Enter dates to see full pricing. Additional fees apply. Taxes may be
            added.
          </AdditionalText>
        </Wrapper>
      </div>
    </div>
  );
}
