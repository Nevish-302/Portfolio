import React from "react";
import './Project1.css'
import { Link } from "react-router-dom";

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
                <button className="project-button grey-box"><a href={props.data.url}><span className="white text ">Live {'<~>'}</span></a></button>
                <button className="project-button grey-box"><a href={props.data.code}><span className="white text ">Code {' / '}</span></a></button>
            </div>
            </div> 
        </div>
    )
}