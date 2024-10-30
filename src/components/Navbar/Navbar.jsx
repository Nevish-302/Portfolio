import React, { useRef } from "react";
import './Navbar.css'
import github from '../../assets/images/Intro/Github.svg'
import linkedin from '../../assets/images/Intro/Linkedin.png'
import logo from '../../assets/images/download.svg'
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar()
{
    const navRef = useRef()
    useGSAP(()=>{
        var tl = gsap.timeline();

        gsap.to('.nav-image', {
            duration: 1.5,
            rotateY: 360,
            repeat: -1,
            delay: 0,
            ease: 'none',
            // opacity: 0,
            // x:360,
        })
        
        tl.from('.nav-button', {
            opacity: 0,
            x: -500,
            stagger: 0.2,
            ease: "elastic.out(0.6,0.3)",
            duration: 1.8,
        }, "navbuttons")
        tl.from('.nav-logo', {
            opacity: 0,
             x: 500,
             ease: "elastic.out(0.6,0.3)",
            // stagger: 0.2,
            duration: 2,
        }, "navbuttons")
        tl.from('.nav-logo-image', {
            rotate: 720,
            duration: 1.5,
        }, "navbuttons")
        tl.from('.vline', {
            marginTop: '100vh',
            // height: "100vh",
            // rotate: 180,
            duration: 2,
        }, '-=2')
        tl.from('.vline', {
            // marginTop: '100vh',
            height: "100vh",
            // rotate: 180,
            ease: "elastic.out(0.5,0.3)",
            duration: 2,
        })
        
        
    })

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
            <a href={resume} download><div className="nav-button text"><span className="purple">#</span>resume</div></a>
        </div>
        </div>
    )
}