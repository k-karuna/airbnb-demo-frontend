import React, { Component } from "react";
import "../BodyRows/BodyRow.css";
import "./Footer.css";

export default function() {
  return (
    <section className="footerrow">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="select-style">
              <select>
                <option>English</option>
                <option>Second</option>
              </select>
            </div>
            <div className="select-style">
              <select>
                <option>United States dollar</option>
                <option>Second</option>
              </select>
            </div>
          </div>
          <div className="col-1" />
          <div className="col-2">
            <div className="footer-text label">
              <a href="/">Airbnb</a>
            </div>
            <div className="footer-text">
              <a href="/">About us</a>
            </div>
            <div className="footer-text">
              <a href="/">Careers</a>
            </div>
            <div className="footer-text">
              <a href="/">Press</a>
            </div>
            <div className="footer-text">
              <a href="/">Policies</a>
            </div>
            <div className="footer-text">
              <a href="/">Help</a>
            </div>
            <div className="footer-text">
              <a href="/">Diversity & Belonging</a>
            </div>
          </div>
          <div className="col-1" />
          <div className="col-2">
            <div className="footer-text label">
              <a href="/">Discover</a>
            </div>
            <div className="footer-text">
              <a href="/">Trust & Safety</a>
            </div>
            <div className="footer-text">
              <a href="/">Travel Credit</a>
            </div>
            <div className="footer-text">
              <a href="/">Gift Cards</a>
            </div>
            <div className="footer-text">
              <a href="/">Airbnb Citizen</a>
            </div>
            <div className="footer-text">
              <a href="/">Business Travel</a>
            </div>
            <div className="footer-text">
              <a href="/">Guidebooks</a>
            </div>
            <div className="footer-text">
              <a href="/">Airbnbmag</a>
            </div>
          </div>
          <div className="col-1" />
          <div className="col-2">
            <div className="footer-text label">
              <a href="/">Hosting</a>
            </div>
            <div className="footer-text">
              <a href="/">Why Host</a>
            </div>
            <div className="footer-text">
              <a href="/">Hospitality</a>
            </div>
            <div className="footer-text">
              <a href="/">Responsible Hosting</a>
            </div>
            <div className="footer-text">
              <a href="/">Community Center</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
