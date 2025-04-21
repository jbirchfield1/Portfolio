import React from "react";
import './Card.css'



export default function SkillCard({name, level, images}){
    return(
        <div className="card">
            <h3>Skill Name: {name}</h3>
            <p>Skill level: {level}</p>
            <p>Icon(s): <img src={images}></img></p>
        </div>
    );
}