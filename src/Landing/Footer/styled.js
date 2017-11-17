import styled from "styled-components";
import selectArrow from "./select-arrow.svg";

export const Footer = styled.section`
  padding-top: 48px;
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
`;

export const SelectWrap = styled.div`
  border: 0.5px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  background: #fff;
  height: 48px;

  margin-bottom: 16px;
  display: inline-block;
  width: 49%;
  @media only screen and (min-width: 768px) {
    width: 216px;
  }
`;

export const RightSelectWrap = SelectWrap.extend`
  float: right;
  @media only screen and (min-width: 768px) {
    float: none;
  }
`;

export const FooterSelect = styled.select`
  height: 100%;
  width: 100%;
  border: none;
  background-color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-ms-expand {
    display: none;
  }
  text-indent: 1px;
  outline-width: 0;
  padding-left: 16px;
  font-family: "CircularAir-Light";
  font-size: 12px;
  color: #383838;
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: right;
  background-position-x: calc(100% - 12px);
  background-position-y: 20px;
  @media only screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 992px) {
  }
`;

export const Links = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    display: flex;
  }
`;

export const Link = styled.a`
  font-size: 12px;
  @media only screen and (min-width: 992px) {
    font-size: 15px;
  }
  font-family: "CircularAir";
  margin-bottom: 8px;
  color: #636363;
  display: block;
`;

export const MainLink = Link.extend`
  font-weight: bold;
  margin-bottom: 16px;
  color: #383838;
  font-family: "CircularAir-Bold";
`;

export const FooterSocialinksWrap = styled.section`
  margin-top: 28px;

  @media only screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;

export const LinksContainer = styled.div`
  @media only screen and (min-width: 992px) {
    padding: 32px 0;
  }
  padding: 16px 0;
  display: flex;
  font-family: "CircularAir";
  font-size: 15px;
  color: #636363;
  align-items: center;
`;

export const RightLinksContainer = LinksContainer.extend`
  display: flex;
  justify-content: flex-start;
  @media only screen and (min-width: 992px) {
    justify-content: flex-end;
  }
`;

export const SocialLink = styled.a`
  color: #636363;
  margin-right: 16px;
`;

export const SocialLinkWrapper = styled.a`
  margin-left: 14px;
  display: flex;
`;

export const SocialLinkImg = styled.img`height: 24px;`;

export const FooterBorder = styled.div`
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
`;
