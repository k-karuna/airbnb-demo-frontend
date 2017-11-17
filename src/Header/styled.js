import styled from "styled-components";

export const Navbar = styled.nav`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 1;
`;

export const NavbarItem = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
`;

export const LogoLink = styled.a`position: absolute;`;

export const ImageLogo = styled.img`height: 32px;`;

export const ImageLogoArrow = styled.img`
  @media only screen and (min-width: 992px) {
    display: none;
  }
  display: inline;
  height: 6px;
  padding-bottom: 12px;
  padding-left: 2px;
`;

export const NavbarInput = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #dbdbdb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
`;

export const NavbarInputText = styled.input`
  flex: 1;
  height: 48px;
  box-sizing: border-box;
  outline-width: 0;
  border: 0px;
  color: #484848;
  line-height: 24px;
  font-size: 16px;
  font-family: "CircularAir", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const InputSearchImg = styled.img`padding: 0 16px;`;

export const NavbarItemRight = NavbarItem.extend`
  display: none;
  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const NavbarRightLink = styled.a`
  margin: 0px 8px;
  font-size: 14px;
  line-height: 24px;
  font-family: "CircularAir";
`;
