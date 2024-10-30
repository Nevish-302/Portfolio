import React from "react";
import './Skills.css'
import Data from './Skills-json'
import Skill from "./Skill";
import image from '../../assets/images/Intro/skills.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() 
{
    useGSAP(()=>{
        gsap.from('.lp-skills .heading', {
            x: 1000,
            duration: 1,
            opacity : 0,
            scrollTrigger : {
                trigger: '.lp-skills',
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 50%",
                // markers: true,
            }
        })
        gsap.from('.lp-skills .skills-main', {
            x: -1000,
            duration: 1,
            opacity : 0,
            scrollTrigger : {
                trigger: '.lp-skills',
                scroller: "body",
                scrub: 2,
                start: "top 80%",
                end: "top 40%",
                // pin : true,
                // markers: true,
            }
        })
    })
    const skills = Data.data.map(cat => <Skill data = {cat} />)
    return (
        <div className="lp-skills">
            <div className="heading">
                <div className="title head">
                <span className="purple">#</span>skills
                </div>
                <div className="line"></div>
            </div>
            <div className="skills-main">
                <img src={image} className="skills-image" />
                <div className="skills-box">
                    {skills}
                </div>
            </div>
        </div>
    )
}