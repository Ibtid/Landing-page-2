import React,{useState} from 'react'
import "./HeroSection.css"
import "../Button.css"
import Video from '../../videos/video.mp4'
import { Link as LinkS} from 'react-scroll'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

const HeroSection = () => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div className="HeroContainer">
            <div className="HeroBg">
                <video 
                  className="VideoBg" 
                  autoPlay 
                  loop 
                  muted 
                  src={Video}
                  type='video/mp4'
                />
            </div>
            <div className="HeroContent">
                <h1 className="HeroH1">Virtual Banking Made Easy</h1>
                <p className="HeroP">Sign up for a new account today 
                and receive $250 in credit towards your next payment
                </p>
                <div className="HeroBtnWrapper">
                    <LinkS 
                       to="signup" 
                       className="Button primary dark"
                       onMouseEnter={onHover}
                       onMouseLeave={onHover}>
                       Get Started
                       {hover?<MdArrowForward/>:<MdKeyboardArrowRight/>}
                    </LinkS>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
