import React from "react";
import './Projects.css'
import Data from '../landingPage/Projects-json'
import Project from "../landingPage/Project";

export default function Projects() 
{
    const completeApps = Data.completeApps.map(app => < Project data = {app} />)
    const smallApps = Data.smallProjects.map(app => < Project data = {app} />)
    return (
        <div className="projects">
                <div className="heading title head">
                <span className="purple">/</span>projects
                </div>
                
            <div className="white text lisp">List of my projects</div>
                <div className="mini-head title head">
                <span className="purple">#</span>complete-apps
                </div>
            
            <div className="main-project-box">
                {completeApps}
            </div>
            <div className="mini-head title head">
                <span className="purple">#</span>small-projects
                </div>
            
            <div className="main-project-box">
                {smallApps}
            </div>
        </div>
    )
}