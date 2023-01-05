import React from "react";
import './About.css'
import image from '../../assets/images/Intro/about-dev.png'

export default function About() 
{
    
    return (
        <div className="lp-about">
            <div className="heading">
                <div className="title head">
                <span className="purple">#</span>about-me
                </div>
                <div className="line"></div>
            </div>
            <div className="about-main">
                <div className="about-text text">
                    Hello, i'm Shiven!
                    <br /><br />
                    I’m a self-taught full-stack developer based in Delhi, India. I can develop responsive websites and apis from scratch and raise them into modern user-friendly web experiences. 
                    <br /><br />
                    Transforming my creativity and knowledge into a websites has been my passion for over a year.
                    I have participated in various hackathons while doing so. I always strive to learn about the newest technologies and frameworks.
                    <button className="read-more grey-box">Read More</button>
                </div>
                <img src={image} className="about-image" />
            </div>
        </div>
    )
}