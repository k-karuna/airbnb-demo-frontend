import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react-dates-override.css";
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

class DateButtonComponent extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onDateChange = () => {};

  onFocusChange = () => {};

  render() {
    return (
      <div>
        <MediaQuery maxWidth="991px">
          <SingleDatePicker
            date={null}
            orientation={"horizontal"}
            numberOfMonths={1}
            hideKeyboardShortcutsPanel
            focused={this.state.isOpen}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
          />
        </MediaQuery>
        <MediaQuery minWidth="992px">
          <SingleDatePicker
            date={null}
            orientation={"horizontal"}
            numberOfMonths={2}
            hideKeyboardShortcutsPanel
            focused={this.state.isOpen}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
          />
        </MediaQuery>
        <FilterButton active={this.state.isOpen} onClick={this.handleClick}>
          Dates
        </FilterButton>
      </div>
    );
  }
}

export default function() {
  return (
    <Filters>
      <div className="container">
        <div className="row">
          <DateButtonComponent />
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
