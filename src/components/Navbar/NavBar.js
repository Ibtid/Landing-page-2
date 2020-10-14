import React,{useState,useEffect} from 'react'
import "./NavBar.css"
import {FaBars} from "react-icons/fa"
import { Link} from "react-router-dom"
import {Link as LinkScroll} from "react-scroll"
import {animateScroll as scroll} from 'react-scroll'

const Navbar = (props) => {

  const[scrollNav,setScrollNav]=useState(false);

  const changeNav=()=>{
    if(window.scrollY>=80){
      setScrollNav(true);
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])

  const toggleHome=()=>{
    scroll.scrollToTop();
  }

  return (
    <nav className={`Nav ${scrollNav?"scrollNav":""}`}>
      <div className="NavbarContainer">
        <Link to="/" className="NavLogo" onClick={toggleHome}>dolla</Link>
          <div className = "MobileIcon" onClick={props.toggle}><FaBars/></div>
        <ul className="NavMenu">
          <li className="NavItem">
            <LinkScroll 
            to ="about" 
            activeClass="active"
            smooth={true} 
            duration={500} 
            spy={true} 
            exact="true" 
            offset={-80} 
            className="NavLinks">About</LinkScroll>
          </li>
          <li className="NavItem">
            <LinkScroll 
            to ="discover"
            smooth={true} 
            activeClass="active"
            duration={500} 
            spy={true} 
            exact="true" 
            offset={-80}
            className="NavLinks">Discover</LinkScroll>
          </li>
          <li className="NavItem">
            <LinkScroll 
            to ="services"
            activeClass="active"
            smooth={true} 
            duration={500} 
            spy={true} 
            exact="true" 
            offset={-80}
             className="NavLinks">Services</LinkScroll>
          </li>
          <li className="NavItem">
            <LinkScroll 
            to ="signup"
            activeClass="active"
            smooth={true} 
            duration={500} 
            spy={true} 
            exact="true" 
            offset={-80} 
            className="NavLinks">Sign Up</LinkScroll>
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
