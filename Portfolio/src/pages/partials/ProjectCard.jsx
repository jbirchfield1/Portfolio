import React from "react";


export default function ProjectCard(title, description, git, demo){
    return(
        <div className="p-2.5 rounded shadow-sm m-1.5 bg-green-200 w-1/3">
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <p>Github Link: <a href={git}>{git}</a></p>
            <p>Demo Link: <a href={demo}>{demo}</a></p>
            <p>Picture(s): Idk how to do this one</p>
        </div>
    );
}