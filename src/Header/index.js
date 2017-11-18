import React from "react";
import { Link } from "react-router-dom";
import searchIco from "./search.svg";
import logoImg from "./shape.png";
import logoArrow from "./arrow.png";

import {
  Navbar,
  NavbarItem,
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
            <div className="col-xs-2 col-md-1 col-lg-1 ">
              <NavbarItem>
                <Link to="/">
                  <ImageLogo src={logoImg} alt="Airbnb" />
                  <ImageLogoArrow src={logoArrow} />
                </Link>
              </NavbarItem>
            </div>
            <div className="col-xs-10 col-md-7 col-lg-5">
              <NavbarItem>
                <NavbarInput>
                  <InputSearchImg src={searchIco} />
                  <NavbarInputText placeholder="Try &quot;Miami&quot;" />
                </NavbarInput>
              </NavbarItem>
            </div>
            <div className="col-md-4 col-lg-6">
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
