import React from "react";
import './Card.css'


export default function ProjectCard({title, description, github, demo}){
    return(
        <div className="card">
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <p>Github Link: <a href={github}>{github}</a></p>
            <p>Demo Link: <a href={demo}>{demo}</a></p>
            <p>Picture(s): Idk how to do this one</p>
        </div>
    );
}