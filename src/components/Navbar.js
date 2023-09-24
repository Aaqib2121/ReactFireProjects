import React, { useState , useEffect } from "react";
import styled from "styled-components";


const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    background-color: #222;
    z-index: 10;
    ${({ menuOpen }) => menuOpen && "display: flex;"}
  }
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
  padding-top: 0.5rem;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff5733;
  }
`;

const NavContainer = styled.nav`
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  padding: 12px 40px;
  
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .NavContainer {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    z-index: 11;

    .bar {
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 3px 0;
      transition: 0.4s;
    }
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
  }
`;



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollBackground, setScrollBackground] = useState("transparent");
  const [delayedScrollBackground, setDelayedScrollBackground] = useState("transparent");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Set immediate background color change
        setScrollBackground("#222");

        // Set delayed background color change after 500 milliseconds (adjust as needed)
        clearTimeout(delayedScrollBackground);
        const timeout = setTimeout(() => {
          setDelayedScrollBackground("#yourDelayedColor"); // Set your desired delayed background color
        }, 500);

        setDelayedScrollBackground(timeout);
      } else {
        setScrollBackground("transparent");
        clearTimeout(delayedScrollBackground);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(delayedScrollBackground);
    };
  }, [delayedScrollBackground])
  return (
    <NavContainer style={{ backgroundColor: scrollBackground }}>
      <Logo>Your Logo</Logo>
      <button className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <NavMenu menuOpen={menuOpen}>
        <NavItem>
          <NavLink href="#home" onClick={closeMenu}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#qualification" onClick={closeMenu}>
            My Qualification
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services" onClick={closeMenu}>
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
