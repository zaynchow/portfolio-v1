import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ul {
    max-width: 1200px;
    margin-top: 0;
    width: 98%;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;

      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--grey-1);
 
    }
 
    }
    .active {
      color: var(--white);
    }
    .resume-btn{
      position: absolute;
      top: 20px;
      right: 16px;
      display: inline-block;
      outline: solid 2px white;
      cursor: pointer;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 1.7rem !important;
      color: var(--grey-1);
    }
    .mobile-menu-icon {
      position: absolute;
      right: 1em;
      top: 1em;
      width:4em;
      cursor: pointer;
      display: none;
      outline: none;
    }

    .closeNavIcon {
      display: none;
    }
    @media only screen and (max-width:900px){
      padding:0;
      .hide-item{
 
        transform: translateY(calc(-100% - var(--top)));
      }
      
      .mobile-menu-icon{
        display:block;
      }
      .navItems {
       
        --top: 1rem;
        transition: 0.5s ease transform;
        background-color:var(--deep-dark);
        padding: 2rem;
        padding-bottom: 5em;
        width:90%;
        max-width: 300px;
        border-radius: 12px;
        position:absolute;
        right:1em;
        top: var(--top);
        .closeNavIcon{
          display:block;
          width: 3rem;
          margin: 0 0 0 auto;
          cursor: pointer;
          *{
            pointer-events: none;
          }
        }
         li{
          display: block;
          margin-bottom:1rem;
        }
        .resume-btn{
          position: static;
          margin-top: 3rem;
        }
      }

  
    }
  }

`;

const NavMenu = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink to="/" onClick={() => setShowNav(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setShowNav(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={() => setShowNav(false)}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setShowNav(false)}>
            Contact
          </NavLink>
        </li>
        <li>
          <a className="resume-btn">Download Resume</a>
        </li>
      </ul>
    </NavMenuStyles>
  );
};
export default NavMenu
