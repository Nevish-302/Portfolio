import React from "react";
import './Project1.css'

export default function Project(props) 
{
    const languages = props.data.lang.map(lan => `${lan} `)
    return (
        <div className="project">
           <img src={props.data.image} className="project-image" />
           <div className="text grey-box">{languages}</div>
           <div className="project-about text grey-box">
            <div className="project-name head ">{props.data.name}</div>
            <div className="project-desc text ">{props.data.desc}</div>
            <div className="project-buttons">
                <button className="project-button grey-box">Live {'<~>'}</button>
                <button className="project-button grey-box">Code {' / '}</button>
            </div>
            </div> 
        </div>
    )
}