import React from "react";
import './Intro.css'
import dev from '../../assets/images/Intro/intro-dev.png'
import purple from '../../assets/images/Intro/purple.png'
import quote from '../../assets/images/Intro/quote.png'

export default function Intro() {
    return (
        <div className="intro">
            <div className="intro-main" >
            <div className="intro-left">
            <div className="intro-head head">
                Shiven is a <span className="purple"> front-end developer </span> and <span className="purple"> back-end developer
                </span>
            </div>
            <div className="intro-desc text">
                He crafts responsive websites where ideas come to life.
            </div>
            <button className="purple-box">
                Contact me !!
            </button>
            </div>
            <div className="intro-right">
                <img src={dev} className="intro-image"/>
                <div className="intro-box">
                    <div className="text grey-box">
                    <img src={purple} className='intro-purple' /> Currently working on <span className="white"> RouteCraft </span>
                    </div>
                </div>
            </div>
            </div>
            <div className="intro-quote-box">
                <div className="quote grey-box head">
                <img src={quote} className="quote-up" />Laziness is such an ugly word, I prefer selective participation. <img src={quote} className="quote-down" />
                </div>
                <div className="by quote grey-box head">
                    - Lucifer
                </div>
            </div>
        </div>
    )
}