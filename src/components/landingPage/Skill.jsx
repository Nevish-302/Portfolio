import React from "react";
import './Skill.css'

export default function Skill(props) 
{
    const Elements = props.data.elements.map(ski => `${ski} `)
    return (
        <div className="skill">
           <div className="white text grey-box">{props.data.name}</div>
           <div className="text grey-box"> {Elements} </div>
        </div> 
    )
}