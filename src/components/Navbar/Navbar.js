import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 992) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          ULTRA
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu click={click}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/products">Products</NavLinks>
          </NavItem>
          <NavItemBtn>
            {button ? (
              <NavBtnLink to="/sign-up">
                <Button primary>sign up</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to="/sign-up">
                <Button fontBig primary>
                  sign up
                </Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
