import React, { Component } from "react";
import "./Navbar.css";
import Search from "./search.svg";
import Logo from "./Shape.png";

export default function() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div className="navbar-item">
                <img className="image-logo" src={Logo} alt="" />
              </div>
            </div>
            <div className="col-5">
              <div className="navbar-item">
                <div className="navbar-input">
                  <img src={Search} alt="" className="input-search-img" />
                  <input
                    type="text"
                    className="navbar-input-text"
                    placeholder="Try &quot;Miami&quot;"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="navbar-item navbar-right">
                <a className="navbar-right-link" href="/">
                  Become a host
                </a>
                <a className="navbar-right-link" href="/">
                  Help
                </a>
                <a className="navbar-right-link" href="/">
                  Sign Up
                </a>
                <a className="navbar-right-link" href="/">
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
