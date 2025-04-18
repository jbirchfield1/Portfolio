import React from "react";



export default function ProjectCard({name, level}){
    return(
        <div className="p-2.5 rounded shadow-sm m-1.5 bg-green-200 w-fit">
            <h3>Skill Name: {name}</h3>
            <p>Skill level: {level}</p>
            <p>Icon(s): </p>
        </div>
    );
}