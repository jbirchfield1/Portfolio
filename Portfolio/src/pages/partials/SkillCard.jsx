import React from "react";



export default function SkillCard({name, level, images}){
    return(
        <div className="p-2.5 rounded shadow-sm m-1.5 bg-green-200 w-fit">
            <h3>Skill Name: {name}</h3>
            <p>Skill level: {level}</p>
            <p>Icon(s): <img src={images}></img></p>
        </div>
    );
}