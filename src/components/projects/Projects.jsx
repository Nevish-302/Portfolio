import React from "react";
import './Projects.css'
import Data from '../landingPage/Projects-json'
import Project from "../landingPage/Project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


export default function Projects() 
{
    useGSAP(()=>{
        gsap.from('.projects .heading, #projectSubhead', {
            x: 1000,
            duration: 1,
            opacity : 0,
            // scrollTrigger : {
            //     trigger: '.lp-about',
            //     scroller: "body",
            //     scrub: 2,
            //     start: "top 90%",
            //     end: "top 50%",
            //     // markers: true,
            // }
        })
        gsap.from('.main-project-box .project', {
            // x: -1000,
            duration: .5,
            opacity : 0,
            scale: 3,
            stagger:.3,
            // scrollTrigger : {
            //     trigger: '.lp-projects',
            //     scroller: "body",
            //     scrub: 2,
            //     start: "top 80%",
            //     end: "top 40%",
            //     // pin : true,
            //     // markers: true,
            // }
        })
        gsap.from(' .projHead', {
            x: -1000,
            duration: 1,
            opacity : 0,
            // scrollTrigger : {
            //     trigger: '.lp-about',
            //     scroller: "body",
            //     scrub: 2,
            //     start: "top 80%",
            //     end: "top 40%",
            //     // pin : true,
            //     // markers: true,   
            // }
        })
    })
    const completeApps = Data.completeApps.map(app => < Project data = {app} />)
    const smallApps = Data.smallProjects.map(app => < Project data = {app} />)
    return (
        <div className="projects">
                <div className="heading title head">
                <span className="purple">/</span>projects
                </div>
                
            <div id="projectSubhead" className="white text lisp">List of my projects</div>
                <div className="mini-head title head projHead">
                <span className="purple">#</span>complete-apps
                </div>
            
            <div className="main-project-box">
                {completeApps}
            </div>
            <div className="mini-head title head projHead">
                <span className="purple">#</span>small-projects
                </div>
            
            <div className="main-project-box">
                {smallApps}
            </div>
        </div>
    )
}