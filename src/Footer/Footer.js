import React, { Component } from "react";

import "./Footer.css";
import AirbnbLogoFooter from "./Shape-8.svg";
import Facebook from "./facebook-2.svg";
import Twitter from "./twitter-2.svg";
import Instagram from "./instagram-2.svg";

export default function() {
  return (
    <section className="little-footer-row">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-2 col-xs-12">
            <div className="footer-item">
              <img src={AirbnbLogoFooter} alt="" />
              <span> &copy; Airbnb Inc.</span>
            </div>
          </div>
          <div className="col-md-6 col-sm-5" />
          <div className="col-md-4 col-sm-5 col-xs-12">
            <div className="footer-item">
              <a href="/">Terms</a>
              <a href="/">Privacy</a>
              <a href="/">Site map</a>
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
