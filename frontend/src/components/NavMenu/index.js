import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
//import "./NavMenu.css";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavElements";
import LogoImg from "../../assets/Logo_2.svg";

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Dashboard</NavbarLink>
            <NavbarLink to="/employee"> Employee</NavbarLink>
            <NavbarLink to="/customer"> Customer</NavbarLink>
            <NavbarLink to="/invoice"> Invoices</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Dashboard</NavbarLinkExtended>
          <NavbarLinkExtended to="/employee"> Employee</NavbarLinkExtended>
          <NavbarLinkExtended to="/customer"> Customer</NavbarLinkExtended>
          <NavbarLinkExtended to="/invoice"> Invoices</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
