import React from "react";
import './Projects.css'
import Data from './Projects-json'
import Project from "./Project";
import { Link } from "react-router-dom";
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
                <div className="view-all"><Link to="/projects"><span className="white text "> View all ~~~{`>`} </span></Link></div>
            </div>
            <div className="project-box">
                {projects}
                </div>
        </div>
    )
}