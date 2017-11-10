import React, { Component } from "react";
import "./DestinationCard.css";

export default function(props) {
  return (
    <div>
      <img src={props.imgSrc} className="destination-card-image" alt="" />
      <div className="experience-card-text">
        <div className="destination-city-text">{props.cityName}</div>
      </div>
    </div>
  );
}
