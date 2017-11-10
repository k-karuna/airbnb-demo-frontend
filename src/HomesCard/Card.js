import React, { Component } from "react";
import "./HomesCard.css";
import Shapestar from "../BodyRows/Shapestar.png";
import "../BodyRows/RoundButton.css";

export default function(props) {
  return (
    <div>
      <img src={props.imgSrc} className="homes-card-image" alt="" />
      <div className="experience-card-text">
        <span className="experience-card-price">{props.dollars}$</span>
        <span className="homes-card-description">{props.description}</span>
        <p className="homes-card-subtext">{props.subText}</p>
        <div className="card-stars">
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <span className="experience-review">{props.hostType}</span>
        </div>
      </div>
    </div>
  );
}
