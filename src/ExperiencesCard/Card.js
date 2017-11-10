import React, { Component } from "react";
import "./ExperienceCard.css";
import "../BodyRows/RoundButton.css";
import Shapestar from "../BodyRows/Shapestar.png";
export default function(props) {
  return (
    <div>
      <img src={props.imgSrc} className="experience-card-image" alt="" />

      <div className="experience-card-text">
        <span className="experience-card-price">{props.dollars}$</span>
        <span className="experience-card-description">{props.description}</span>
        <div className="card-stars">
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <img src={Shapestar} className="experience-shapestar" alt="" />
          <span className="experience-review">44 rewiews</span>
        </div>
      </div>
    </div>
  );
}
