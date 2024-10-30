import React from "react";
import './Intro.css'
import dev from '../../assets/images/Intro/intro-dev.png'
import purple from '../../assets/images/Intro/purple.png'
import quote from '../../assets/images/Intro/quote.png'
import { Link } from "react-router-dom";

export default function Intro() {
    let chars = 'Laziness is such an ugly word, I prefer selective participation.'
        let charss = ''
        let charinner = chars.split("").map(t=>{charss += `<span class="splitQuote">${t}</span>`; return(
            <span class="splitQuote">{t}</span>
        ) })
        console.log("jkfdfjkddfjk", charinner)
        
    return (
        <div className="intro">
            <div className="intro-main" >
            <div className="intro-left">
            <div className="intro-head head">
                Shiven is a <span className="purple"> full-stack web </span> and <span className="purple"> flutter developer
                </span>
            </div>
            <div className="intro-desc text">
                He crafts responsive websites and apps where ideas come to life.
            </div>
            <Link to='/contacts'><button className="purple-box">
                Contact me !!
            </button></Link>
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
                <div className="quote grey-box head" id="quote">
                <img src={quote} className="quote-up" />
                {chars}
                <img src={quote} className="quote-down" />
                </div>
                <div id="lucifer" className="by quote grey-box head">
                    - Lucifer
                </div>
            </div>
        </div>
    )
}