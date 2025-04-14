import React from "react";


function EducationCard({institution, degree, graduationyear, description}){
    return(
        <div className="p-2.5 rounded shadow-sm m-1.5 bg-green-200 w-1/3">
            <h3>Degree: {degree}</h3>
            <p>Institution: {institution}</p>
            <p>Graduation Year: {graduationyear}</p>
            <p>Description: {description}</p>
        </div>
    );
}
export default EducationCard;