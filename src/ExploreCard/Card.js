import React, { Component } from "react";
import "./ExploreCard.css";

export default function(props) {
  return (
    <div className="explore-card">
      <img src={props.imgSrc} className="explore-card-image" alt="" />
      <div className="explore-card-text">
        <p>{props.cardText}</p>
      </div>
    </div>
  );
}
