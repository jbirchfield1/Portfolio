import React from "react";
import './Card.css'



function EducationCard({institution, degree, graduationyear, description}){
    return(
        <div className="card">
            <h3>Degree: {degree}</h3>
            <p>Institution: {institution}</p>
            <p>Graduation Year: {graduationyear}</p>
            <p>Description: {description}</p>
        </div>
    );
}
export default EducationCard;