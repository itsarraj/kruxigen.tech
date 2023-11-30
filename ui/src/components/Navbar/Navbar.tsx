import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

interface WindowWithInnerWidth extends Window {
  innerWidth: number;
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [homeClick, setHomeClick] = useState(false);

  const [educationServicesClick, setEducationServicesClick] = useState(false);
  // const [webServicesClick, setWebServicesClick] = useState(false);

  const handleHomeClick = () => {
    setHomeClick(true);
    // setWebServicesClick(false);
    setEducationServicesClick(false);
  };
  const handleEducationServicesClick = () => {
    setHomeClick(true);
    // setWebServicesClick(true);
    setEducationServicesClick(true);
  };
  // const handleWebServicesClick = () => {
  //   setHomeClick(false);
  //   setWebServicesClick(true);
  //   setEducationServicesClick(false);
  // };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    // so if the screensize is <= 960px then set button state to false
    if ((window as WindowWithInnerWidth).innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <img src="/favicon/favicon.ico" alt="" />
              KRUXIGEN
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem onClick={handleHomeClick}>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>

              <NavItem onClick={handleEducationServicesClick}>
                <NavLinks to="/education-services" onClick={closeMobileMenu}>
                  Education-Services
                </NavLinks>
              </NavItem>
              {/*
              <NavItem onClick={handleWebServicesClick}>
                <NavLinks to="/web-services" onClick={closeMobileMenu}>
                  WebServices
                </NavLinks>
              </NavItem> */}

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact-us">
                    <Button primary>Contact Us</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contact-us">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Contact Us
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
