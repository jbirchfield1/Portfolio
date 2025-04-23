import React from "react";
import './Card.css'


export default function ProjectCard({title, description, github, demo, tech}){
    return(
        <div className="card">
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <p>Technologies: {tech}</p>
            {github && (
            <p>Github Link: <a href={github}>{github}</a></p>
            )}
            {demo &&(
            <p>Demo Link: <a href={demo}>{demo}</a></p>
            )}
        </div>
    );
}