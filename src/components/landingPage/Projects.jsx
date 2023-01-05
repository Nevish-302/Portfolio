import React from "react";
import './Projects.css'
import Data from './Projects-json'
import Project from "./Project";
export default function Projects() 
{
    const projects = [< Project data = {Data.completeApps[0]} />, < Project data = {Data.completeApps[1]} />, < Project data = {Data.completeApps[2]} />]
    return (
        <div className="lp-projects">
            <div className="heading">
                <div className="title head">
                <span className="purple">#</span>projects
                </div>
                <div className="line"></div>
                <div className="white text view-all"> View all ~~~{`>`} </div>
            </div>
            <div className="project-box">
                {projects}
                </div>
        </div>
    )
}