import React, { Component } from "react";

import airbnbLogoFooter from "./shape-8.svg";
import facebook from "./facebook-2.svg";
import twitter from "./twitter-2.svg";
import instagram from "./instagram-2.svg";

import {
  Footer,
  SelectWrap,
  FooterSelect,
  RightSelectWrap,
  Links,
  MainLink,
  Link,
  FooterSocialinksWrap,
  LinksContainer,
  SocialLink,
  RightLinksContainer
} from "./styled";

export default function() {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-12 col-12">
            <SelectWrap>
              <FooterSelect>
                <option>English</option>
                <option>Second</option>
              </FooterSelect>
            </SelectWrap>
            <RightSelectWrap>
              <FooterSelect>
                <option>United States dollar</option>
                <option>Second</option>
              </FooterSelect>
            </RightSelectWrap>
          </div>
          <div className="col-offset-0" />
          <div className="col-md-8 col-8 col-sm-7">
            <Links>
              <div className="col-md-2">
                <MainLink href="/">Airbnb</MainLink>
                <Link href="/">About us</Link>
                <Link href="/">Careers</Link>
                <Link href="/">Press</Link>
                <Link href="/">Policies</Link>
                <Link href="/">Help</Link>
                <Link href="/">Diversity & Belonging</Link>
              </div>
              <div className="col-md-1" />
              <div className="col-md-2">
                <MainLink href="/">Discover</MainLink>
                <Link href="/">Trust & Safety</Link>
                <Link href="/">Travel Credit</Link>
                <Link href="/">Gift Cards</Link>
                <Link href="/">Airbnb Citizen</Link>
                <Link href="/">Business Travel</Link>
                <Link href="/">Guidebooks</Link>
                <Link href="/">Airbnbmag</Link>
              </div>
              <div className="col-offset-1" />
              <div className="col-md-2">
                <MainLink href="/">Hosting</MainLink>
                <Link href="/">Why Host</Link>
                <Link href="/">Hospitality</Link>
                <Link href="/">Responsible Hosting</Link>
                <Link href="/">Community Center</Link>
              </div>
            </Links>
          </div>
        </div>
      </div>
      <FooterSocialinksWrap>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-12">
              <LinksContainer>
                <SocialLink href="/">
                  <img src={airbnbLogoFooter} alt="" />
                </SocialLink>
                <SocialLink> &copy; Airbnb Inc.</SocialLink>
              </LinksContainer>
            </div>
            <div className="col-offset-6 col-offset-4" />
            <div className="col-md-4 col-sm-5 col-12">
              <RightLinksContainer>
                <SocialLink href="/">Terms</SocialLink>
                <SocialLink href="/">Privacy</SocialLink>
                <SocialLink href="/">Site map</SocialLink>
                <SocialLink href="http://facebook.com">
                  <img src={facebook} alt="" />
                </SocialLink>
                <SocialLink href="http://twitter.com">
                  <img src={twitter} alt="" />
                </SocialLink>
                <SocialLink href="http://instagram.com">
                  <img src={instagram} alt="" />
                </SocialLink>
              </RightLinksContainer>
            </div>
          </div>
        </div>
      </FooterSocialinksWrap>
    </Footer>
  );
}
