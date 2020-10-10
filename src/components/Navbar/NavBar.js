import React from 'react'
import "./NavBar.css"
import {FaBars} from "react-icons/fa"
import { Link} from "react-router-dom"
import {Link as LinkScroll} from "react-scroll"

const Navbar = (props) => {
    return (
    <nav className="Nav">
      <div className="NavbarContainer">
        <Link to="/" className="NavLogo">dolla</Link>
          <div className = "MobileIcon" onClick={props.toggle}><FaBars/></div>
        <ul className="NavMenu">
          <li className="NavItem">
            <LinkScroll to ="about" className="NavLinks">About</LinkScroll>
          </li>
          <li className="NavItem">
            <LinkScroll to ="discover" className="NavLinks">Discover</LinkScroll>
          </li>
          <li className="NavItem">
            <LinkScroll to ="services" className="NavLinks">Services</LinkScroll>
          </li>
          <li className="NavItem">
            <LinkScroll to ="signup" className="NavLinks">Sign Up</LinkScroll>
          </li>    
        </ul>
        <div className="NavBtn">
          <Link to="/signin" className="NavBtnLink">Sign In</Link>
        </div>
      </div>
    </nav>    
  )
}

export default Navbar
