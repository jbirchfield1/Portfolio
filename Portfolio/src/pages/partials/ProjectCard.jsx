import React from "react";


export default function ProjectCard({title, description, github, demo}){
    return(
        <div className="p-2.5 rounded shadow-sm m-1.5 w-fit">
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <p>Github Link: <a href={github}>{github}</a></p>
            <p>Demo Link: <a href={demo}>{demo}</a></p>
            <p>Picture(s): Idk how to do this one</p>
        </div>
    );
}