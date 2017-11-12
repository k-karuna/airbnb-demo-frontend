import React, { Component } from "react";
import styled from "styled-components";

import searchIco from "./search.svg";
import logo from "./shape.png";
import logoArrow from "./arrow.png";

import {
  Navbar,
  NavbarItem,
  LogoLink,
  ImageLogo,
  ImageLogoArrow,
  NavbarInput,
  InputSearchImg,
  NavbarInputText,
  NavbarItemRight,
  NavbarRightLink
} from "./styled";

export default function() {
  return (
    <header>
      <Navbar>
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-sm-1 col-xs-2 col-2">
              <NavbarItem>
                <LogoLink href="/">
                  <ImageLogo src={logo} alt="Airbnb" />
                  <ImageLogoArrow src={logoArrow} />
                </LogoLink>
              </NavbarItem>
            </div>
            <div className="col-md-5 col-sm-7 col-xs-10 col-10">
              <NavbarItem>
                <NavbarInput>
                  <InputSearchImg src={searchIco} />
                  <NavbarInputText placeholder="Try &quot;Miami&quot;" />
                </NavbarInput>
              </NavbarItem>
            </div>
            <div className="col-md-6 col-sm-4">
              <NavbarItemRight>
                <NavbarRightLink href="/">Become a host</NavbarRightLink>
                <NavbarRightLink href="/">Help</NavbarRightLink>
                <NavbarRightLink href="/">Sign Up</NavbarRightLink>
                <NavbarRightLink href="/"> Log In</NavbarRightLink>
              </NavbarItemRight>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
}
