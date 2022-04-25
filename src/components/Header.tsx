import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const HeaderWrapper = styled.header`
  height: 150px;
  padding-top: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: relative;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;
`;

const MenuIcon = styled.button`
  cursor: pointer;
  font-size: 2.5rem;
  background-color: transparent;
  border: none;
  padding: 1rem;
  z-index: 20;
`;

const Menu = styled.ol`
  position: absolute;
  z-index: 10;
  list-style: none;
  right: 0;
  top: 0;
  text-align: right;
  background-color: white;
  padding: 100px 40px;
  margin: 0;
  box-sizing: border-box;
  height: 100vh;
  box-shadow: rgba(107, 107, 107, 0.1) -20px 0px 20px;
  animation: ${slide} 0.3s ease-in;
`;

const MenuItem = styled.li`
  font-size: 1.3rem;
  text-decoration: none;
`;

interface LinkWrapperProps {
  underline?: boolean;
}

const LinkWrapper = styled(Link)<LinkWrapperProps>`
  text-decoration: none;
  color: black;
  padding-bottom: 5px;

  &:hover {
    text-decoration: ${(props) => (props.underline ? "underline" : "none")};
    text-underline-offset: 3px;
  }
`;

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <HeaderWrapper>
      <Title>
        <LinkWrapper to="/">Ivo Schouten</LinkWrapper>
      </Title>
      {menuIsActive ? (
        <MenuIcon
          onClick={() => setMenuIsActive(!menuIsActive)}
          className="material-icons"
        >
          menu_open
        </MenuIcon>
      ) : (
        <MenuIcon
          onClick={() => setMenuIsActive(!menuIsActive)}
          className="material-icons"
        >
          menu
        </MenuIcon>
      )}
      {menuIsActive && (
        <Menu>
          <MenuItem>
            <LinkWrapper underline to="/">
              Home
            </LinkWrapper>
          </MenuItem>
          <MenuItem>
            <LinkWrapper underline to="/statement">
              Statement
            </LinkWrapper>
          </MenuItem>
          <MenuItem>
            <LinkWrapper underline to="/contact">
              Contact
            </LinkWrapper>
          </MenuItem>
        </Menu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
