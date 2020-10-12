import React from 'react'
import {Link as LinkS} from "react-scroll"
import "../Button.css"
import "./InfoSection.css"

const InfoSection = () => {
    const id ="home"
    return (
        <div className="InfoContainer" id={id}>
            <div className="InfoWrapper">
                <div className="InfoRow">
                    <div className="Column1">
                        <div className="TextWrapper">
                            <p className="TopLine">Topline</p>
                            <h1 className="Heading">Heading</h1>
                            <p className="Subtitle">Subtitle</p>
                            <div className="BtnWrap">
                                <LinkS className="Button" to="home">
                                    Button
                                </LinkS>
                            </div>
                        </div>
                    </div>
                    <div className="Column2">
                        <div className="ImgWrap">
                            <img className="Img"/>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default InfoSection
