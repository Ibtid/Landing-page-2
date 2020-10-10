import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from "react-scroll"
import {Link} from "react-router-dom"
import "./Sidebar.css"

const Sidebar = (props) => {

    const isOpenMessage = props.isOpen?"SidebarContainer isOpen":"SidebarContainer";

    return (
        <aside className={isOpenMessage}>
            <div className="Icon">
               <FaTimes className="CloseIcon" onClick={props.toggle}/> 
            </div>  
            <div className="SidebarWrapper">
                <div className="SidebarMenu">
                    <LinkS to="about" className="SidebarLink">
                        About
                    </LinkS>
                    <LinkS to="discover" className="SidebarLink">
                        Discover
                    </LinkS>
                    <LinkS to="services" className="SidebarLink">
                        Services
                    </LinkS>
                    <LinkS to="signup" className="SidebarLink">
                        Sign Up
                    </LinkS>
                </div>
                <div className="SideBtnWrap">
                        <Link to="/signip" className="SidebarRoute">Sign In</Link>
                </div>
            </div>          
        </aside>
    )
}

export default Sidebar
