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
                let mediaAnimation = gsap.matchMedia()
                mediaAnimation.add('(min-width:500px)', ()=>{
                 gsap.from('.lp-skills .heading .title', {
             x:0,
            duration: 1,
            opacity : 0,

            scale: 2,
            scrollTrigger : {
                trigger: '.lp-skills',
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 50%",
                // markers: true,
            }
        })
        gsap.from('.lp-skills .heading .line', {
            x: -1000,
            // y: -200,
            duration: 1,
            // height:'50vh',
            // borderRadius: "100%",
            width: 0,
            background: 'white',
            border: '1px solid white',
            // opacity : 0,
            ease:"back.out(1.7)",
            scrollTrigger : {
                trigger: '.lp-skills',
                scroller: "body",
                scrub: 2,
                start: "top 30%",
                end: "top 40%",
                // markers: true,
            }
        })
        // gsap.from()
        gsap.from('.skill', {
            x: 1000,
            duration: 1,
            opacity : 0,
            stagger: 0.3,
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
                })
        
    // gsap.from('.skills-image', {
    //     // width: "10%",
    //     // opacity: 0,
    //     // x: -1000,
    //     // scale: 0,
    //     scrollTrigger : {
    //         trigger: '.lp-skills',
    //         scroller: "body",
    //         scrub: 2,
    //         start: "top 80%",
    //         end: "top 40%",
    //         // pin : true,
    //         markers: true,
    //     }
    // })
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
                <img src={image} id="ja" className="skills-image" />
                <div className="skills-box">
                    {skills}
                </div>
            </div>
        </div>
    )
}