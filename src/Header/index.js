import React from "react";
import { Link } from "react-router-dom";
import searchIco from "./search.svg";
import logoImg from "./shape.png";
import logoArrow from "./arrow.png";

import {
  Navbar,
  NavbarItem,
  Logo,
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
                <Link to="/">
                  <Logo>
                    <ImageLogo src={logoImg} alt="Airbnb" />
                    <ImageLogoArrow src={logoArrow} />
                  </Logo>
                </Link>
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
