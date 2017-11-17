import React from "react";
import styled from "styled-components";
import { FilterButton } from "./styled";

const Filters = styled.div`
  top: 81px;
  position: fixed;
  width: 100%;
  padding: 12px 0;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background-color: white;
`;

const DesktopFilters = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: inline;
  }
`;

export default function() {
  return (
    <Filters>
      <div className="container">
        <div className="row">
          <FilterButton>Dates</FilterButton>
          <FilterButton>Guests</FilterButton>
          <DesktopFilters>
            <FilterButton>Room type</FilterButton>
            <FilterButton>Price</FilterButton>
            <FilterButton>Instant book</FilterButton>
          </DesktopFilters>
          <FilterButton>More filters</FilterButton>
        </div>
      </div>
    </Filters>
  );
}
