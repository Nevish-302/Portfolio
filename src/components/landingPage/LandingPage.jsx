import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import About from "./About";
import Contacts from "./Contacts";
import bg from "../../assets/bg.mp4"

import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LandingPage ()
{
    useGSAP(()=>{

        gsap.from('.heading .purple, .contact-list .purple', {color: "white", duration: 1, repeat: -1, yoyo:1})


        var tlLanding = gsap.timeline()

        tlLanding.from('.intro-left', {
            opacity: 0,
            x: -100,
            duration: 1,
        }, 'intro-main')
        tlLanding.from('.intro-right', {
            opacity: 0,
            x: 100,
            duration: 1,
        }, 'intro-main')
        tlLanding.from('.intro-quote-box', {
            opacity: 0,
            x: 1000,
            duration: 1,
        }, 'intro-main')
        
        
        tlLanding.from(' .splitQuote', {
            duration: 1,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01
          }, 'intro-main');

        
        tlLanding.from('.quote-up', {
            opacity: 0,
            x: 1000,
            rotate: 720,
            duration: 1,
        }, "quotations")
        tlLanding.from('.quote-down', {
            opacity: 0,
            x: -1000,
            rotate: 720,
            duration: 1,
        }, "quotations")
        tlLanding.from('#lucifer', {
            opacity: 0,
            x: -1000,
            // rotate: 720,
            duration: 1,
        })
        

        
        })
    return (
        <>
        {/* <video style={{position: "fixed", top: "0%", left: "0%", zIndex: -1}} id="bgVideo" controls preload="true" autoplay loop muted>
      <source src={bg} type="video/mp4" />       
   </video> */}
        <Intro />
        <Projects />
        <Skills />
        <About />
        <Contacts />
        </>
    )
}