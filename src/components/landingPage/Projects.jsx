import React from "react";
import './Projects.css'
import Data from './Projects-json'
import Project from "./Project";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() 
{
    const contextt = useRef()
    useGSAP(()=>{
        gsap.from('.lp-projects .heading', {
            x: 1000,
            duration: 1,
            opacity : 0,
            scrollTrigger : {
                trigger: '.lp-projects',
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 50%",
                // markers: true,
            }
        })
        gsap.from('.lp-projects .project-box', {
            x: -1000,
            duration: 1,
            opacity : 0,
            scrollTrigger : {
                trigger: '.lp-projects',
                scroller: "body",
                scrub: 2,
                start: "top 80%",
                end: "top 40%",
                // pin : true,
                // markers: true,
            }
        })
    })
    const projects = [< Project data = {Data.completeApps[0]} />, < Project data = {Data.completeApps[1]} />, < Project data = {Data.completeApps[2]} />]
    return (
        <div className="lp-projects">
            <div className="heading">
                <div className="title head">
                <span className="purple">#</span>projects
                </div>
                <div className="line"></div>
                <div className="view-all"><Link to="/projects"><span className="white text "> View all ~~~{`>`} </span></Link></div>
            </div>
            <div className="project-box">
                {projects}
                </div>
        </div>
    )
}