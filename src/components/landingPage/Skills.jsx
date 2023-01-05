import React from "react";
import './Skills.css'
import Data from './Skills-json'
import Skill from "./Skill";
import image from '../../assets/images/Intro/skills.png'

export default function Skills() 
{
    const skills = Data.data.map(cat => <Skill data = {cat} />)
    
    return (
        <div className="lp-skills">
            <div className="heading">
                <div className="title head">
                <span className="purple">#</span>skills
                </div>
                <div className="line"></div>
                <div className="white text view-all"> View all ~~~{`>`} </div>
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