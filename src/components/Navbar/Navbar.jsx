import React from "react";
import './Navbar.css'
import github from '../../assets/images/Intro/Github.svg'
import linkedin from '../../assets/images/Intro/Linkedin.png'
import logo from '../../assets/images/logi-white.png'

export default function Navbar()
{
    return (
        <div className="navbar">
            <div className="nav-vbar">
                <div className="vline"></div>
                <a href=""><img src={github} className="nav-image" /></a>
                <a href=""><img src={linkedin} className="nav-image" /></a>
            </div>
        <div className="nav-logo text white">
            <img src={logo} className="nav-logo-image" /> 
            Shiven
        </div>
        <div className="nav-buttons">
            <div className="nav-button text"> <span className="purple">#</span>home</div>
            <div className="nav-button text"> <span className="purple">#</span>works</div>
            <div className="nav-button text"> <span className="purple">#</span>about-me</div>
            <div className="nav-button text"> <span className="purple">#</span>contact</div>
        </div>
        </div>
    )
}