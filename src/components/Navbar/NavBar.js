import React from 'react'
import "./NavBar.css"
import {FaBars} from "react-icons/fa"
import { Link} from "react-router-dom"
import {Link as LinkScroll} from "react-scroll"

const Navbar = () => {
    return (
    <nav className="Nav">
      <div className="NavbarContainer">
        <Link to="/" className="NavLogo">dolla</Link>
          <div className = "MobileIcon"><FaBars/></div>
        <ul className="NavMenu">
          <li className="NavItem">
            <LinkScroll to ="about" className="NavLinks">About</LinkScroll>
          </li>
        </ul>
      </div>
    </nav>    
  )
}

export default Navbar
