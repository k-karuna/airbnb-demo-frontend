import styled from "styled-components";
import selectArrow from "./select-arrow.svg";

export const Footer = styled.section`
  padding-top: 48px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

export const SelectWrap = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
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
  background-position-x: calc(100% - 6px);
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
    justify-content: flex-end;
    display: flex;
  }
`;

export const Link = styled.a`
  font-family: "CircularAir";
  font-size: 15px;
  margin-bottom: 8px;
  color: #636363;
  display: block;
`;

export const MainLink = Link.extend`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const FooterSocialinksWrap = styled.section`
  padding-top: 10px;
  margin-top: 28px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  @media only screen and (min-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const LinksContainer = styled.div`
  height: 37px;
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

export const SocialLink = styled.a`margin: 0px 5px;`;
