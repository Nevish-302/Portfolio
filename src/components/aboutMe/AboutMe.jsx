import React from "react";
import About from "../landingPage/About";
import Skills from "../landingPage/Skills";
import './AboutMe.css'

export default function AboutMe() 
{
    return (
        <div className="about">
                <div className="heading title head">
                <span className="purple">/</span>About Me
                </div>
                
            <div className="white text lisp">Who Am I?</div>
                <About />
                <Skills />
        </div>
    )
}