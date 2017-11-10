import React, { Component } from "react";
import "./ReservationCard.css";
import Shapestar from "../BodyRows/Shapestar.png";

export default function(props) {
  return (
    <div>
      <img src={props.imgSrc} className="reservation-card-image" alt="" />
      <div className="experience-card-text">
        <div className="reservation-type">{props.reservType}</div>
        <div className="reservation-name">{props.reservName}</div>
        <div className="reservation-price">{props.reservPrice}</div>
      </div>
    </div>
  );
}
