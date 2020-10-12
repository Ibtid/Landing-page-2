import React from 'react'

import {Link} from "react-router-dom"

import "./Footer.css"

const Footer = () => {
    return (
        <footer className="FooterContainer">
            <div className="FooterWrap">
                <div className="FooterLinksContainer">
                    <div className="FooterLinksWrapper">
                        <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">About Us</h1>
                            <Link className="FooterLink" to="/">How it works</Link>
                            <Link className="FooterLink" to="/">Testimonials</Link>
                            <Link className="FooterLink" to="/">Careers</Link>
                            <Link className="FooterLink" to="/">Investors</Link>
                            <Link className="FooterLink" to="/">Terms of Service</Link>                            
                       </div>
                       <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">Contact Us</h1>
                            <Link className="FooterLink" to="/">Contact</Link>
                            <Link className="FooterLink" to="/">Support</Link>
                            <Link className="FooterLink" to="/">Destination</Link>
                            <Link className="FooterLink" to="/">Sponsorship</Link>                           
                       </div>
                    </div>
                    <div className="FooterLinksWrapper">
                        <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">Videos</h1>
                            <Link className="FooterLink" to="/">Submit Video</Link>
                            <Link className="FooterLink" to="/">Ambassadors</Link>
                            <Link className="FooterLink" to="/">Agency</Link>
                            <Link className="FooterLink" to="/">Influencer</Link>                            
                       </div>
                       <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">Social Media</h1>
                            <Link className="FooterLink" to="/">Instagram</Link>
                            <Link className="FooterLink" to="/">Facebook</Link>
                            <Link className="FooterLink" to="/">Youtube</Link>
                            <Link className="FooterLink" to="/">Twitter</Link>                       
                       </div>
                    </div>
                </div>
                
            </div>            
        </footer>
    )
}

export default Footer
