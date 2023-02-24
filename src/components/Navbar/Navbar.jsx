import React from "react";
import './Navbar.css'
import github from '../../assets/images/Intro/Github.svg'
import linkedin from '../../assets/images/Intro/Linkedin.png'
import logo from '../../assets/images/logi-white.png'
import { Link } from "react-router-dom";

export default function Navbar()
{
    const showNav = () => {
        const jack = document.getElementsByClassName('nav-buttons')[0].style;
        jack.display = jack.display == '' ? 'flex' : '';
        console.log(jack.display == '')
    }
    return (
        <div className="navbar">
            <div className="nav-vbar">
                <div className="vline"></div>
                <a href="https://github.com/Nevish-302"><img src={github} className="nav-image" /></a>
                <a href="https://www.linkedin.com/in/shiven-upadhyay-9834bb100/"><img src={linkedin} className="nav-image" /></a>
            </div>
        <div className="nav-logo text white" onClick={showNav}>
            <img src={logo} className="nav-logo-image" /> 
            Shiven 
        </div>
        <div className="nav-buttons">
            <Link to=''><div className="nav-button text"><span className="purple">#</span>home</div></Link>
            <Link to='/projects'><div className="nav-button text"><span className="purple">#</span>works</div></Link>
            <Link to='/about'><div className="nav-button text"><span className="purple">#</span>about-me</div></Link>
            <Link to='/contacts'><div className="nav-button text"><span className="purple">#</span>contact</div></Link>
        </div>
        </div>
    )
}