import React from "react";
import './About.css'
import image from '../../assets/images/Intro/about-dev.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() 
{
    useGSAP(()=>{
        gsap.from('.lp-about .heading', {
            x: 1000,
            duration: 1,
            opacity : 0,
            scrollTrigger : {
                trigger: '.lp-about',
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 50%",
                // markers: true,
            }
        })
        gsap.from('.lp-about .about-main', {
            x: -1000,
            duration: 1,
            opacity : 0,
            scrollTrigger : {
                trigger: '.lp-about',
                scroller: "body",
                scrub: 2,
                start: "top 80%",
                end: "top 40%",
                // pin : true,
                // markers: true,   
            }
        })
    })
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
                    I’m a self-taught full-stack developer based in Delhi, India. I can develop responsive websites, Apps and apis from scratch and raise them into modern user-friendly web and android experiences. 
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