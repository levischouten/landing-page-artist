import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";

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
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 60px;
`;

const Title = styled(Link)`
  font-weight: 700;
  font-size: 30px;
  text-decoration: none;
  color: black;
`;

const MenuIcon = styled.div`
  display: grid;
  border: 1px solid black;
  width: 2rem;
  height: 2rem;
  z-index: 20;
  cursor: pointer;
`;

const MenuIconClosed = styled(MenuIcon)`
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;

const MenuIconOpen = styled(MenuIcon)`
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(1, 1fr);
`;

const MenuIconClosedItem = styled.div`
  border: 1px solid black;
`;

const CollapsedMenu = styled.ol`
  position: absolute;
  z-index: 10;
  list-style: none;
  right: 0;
  top: 1.7rem;
  text-align: right;
  background-color: white;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  padding-right: 2rem;
  border: 2px solid black;
  box-sizing: border-box;
  /* height: 100vh; */
  /* box-shadow: rgba(107, 107, 107, 0.1) -20px 0px 20px; */
  /* animation: ${slide} 0.3s ease-in; */
`;

const Menu = styled.ol`
  display: flex;
  list-style: none;
  gap: 4.5rem;
`;

const MenuItem = styled.li`
  font-size: 1.3rem;
  text-decoration: none;
  text-align: left;
`;

interface LinkWrapperProps {
  $underline?: boolean;
  $active?: boolean;
}

const LinkWrapper = styled(Link)<LinkWrapperProps>`
  text-decoration: ${(props) => (props.$active ? "none" : "line-through")};
  color: ${(props) => (props.$active ? "black" : "#959595")};
  padding-bottom: 5px;
  font-weight: ${(props) => (props.$active ? 400 : 300)};
  font-size: 20px;

  &:hover {
    text-underline-offset: 3px;
    text-decoration: ${(props) => (props.$underline ? "none" : "line-through")};
  }
`;

const useOutsideAlert = (
  ref: MutableRefObject<HTMLOListElement>,
  callback: () => void,
  refs?: Array<MutableRefObject<HTMLElement>>
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !refs?.some((r) => r.current.contains(event.target))
      ) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, refs]);
};

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const menuRef = useRef<HTMLOListElement>(null);
  const menuIcon = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const { pathname } = useLocation();

  useOutsideAlert(
    menuRef as MutableRefObject<HTMLOListElement>,
    () => {
      setMenuIsActive(false);
    },
    [menuIcon as MutableRefObject<HTMLElement>]
  );
  return (
    <HeaderWrapper>
      <Title to="/">Ivo Schouten</Title>
      {isMobile ? (
        <>
          {menuIsActive ? (
            <MenuIconOpen
              ref={menuIcon}
              onClick={() => setMenuIsActive(menuIsActive)}
            >
              <MenuIconClosedItem></MenuIconClosedItem>
              <MenuIconClosedItem></MenuIconClosedItem>
            </MenuIconOpen>
          ) : (
            <MenuIconClosed
              ref={menuIcon}
              onClick={() => setMenuIsActive(!menuIsActive)}
            >
              <MenuIconClosedItem></MenuIconClosedItem>
              <MenuIconClosedItem></MenuIconClosedItem>
              <MenuIconClosedItem></MenuIconClosedItem>
              <MenuIconClosedItem></MenuIconClosedItem>
            </MenuIconClosed>
          )}
          {menuIsActive && (
            <CollapsedMenu ref={menuRef}>
              <MenuItem>
                <LinkWrapper
                  $underline
                  to="/"
                  $active={pathname === "/"}
                  onClick={() => setMenuIsActive(false)}
                >
                  work
                </LinkWrapper>
              </MenuItem>
              <MenuItem>
                <LinkWrapper
                  $underline
                  to="/about"
                  $active={pathname === "/about"}
                  onClick={() => setMenuIsActive(false)}
                >
                  about
                </LinkWrapper>
              </MenuItem>
              <MenuItem>
                <LinkWrapper
                  $underline
                  to="/contact"
                  $active={pathname === "/contact"}
                  onClick={() => setMenuIsActive(false)}
                >
                  contact
                </LinkWrapper>
              </MenuItem>
            </CollapsedMenu>
          )}
        </>
      ) : (
        <Menu>
          <MenuItem>
            <LinkWrapper
              $underline
              to="/"
              $active={pathname === "/"}
              onClick={() => setMenuIsActive(false)}
            >
              work
            </LinkWrapper>
          </MenuItem>
          <MenuItem>
            <LinkWrapper
              $underline
              to="/about"
              $active={pathname === "/about"}
              onClick={() => setMenuIsActive(false)}
            >
              about
            </LinkWrapper>
          </MenuItem>
          <MenuItem>
            <LinkWrapper
              $underline
              to="/contact"
              $active={pathname === "/contact"}
              onClick={() => setMenuIsActive(false)}
            >
              contact
            </LinkWrapper>
          </MenuItem>
        </Menu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
