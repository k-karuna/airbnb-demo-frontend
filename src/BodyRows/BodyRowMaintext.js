import React, { Component } from "react";
import RightArrow from "./Shape-5.svg";
import "./BodyRowMaintext.css";

export default function(props) {
  return (
    <div className="bodyrow-maintext">
      <span>{props.mainText}</span>
      <a className="bodyrow-see_all" href="/">
        <span>See all</span>
        <img className="see_all-arrow" src={RightArrow} alt="" />
      </a>
    </div>
  );
}
