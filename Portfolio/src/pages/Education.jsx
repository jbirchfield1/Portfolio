import { useState, useEffect } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import axios from 'axios'

export default function Education(){
    const [edu, setEdu] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/education')
        .then(res=> setEdu(res.data))
        .catch(err=> console.error("Error fetching education:", err));
      }, []);

    return(
        <>
        <Header />
        <h2 className='bg-blue-600'>Education</h2>
        {edu.map(cert => (
        <div key={cert.id} style={{border: '3px solid #000', padding: '5px', borderRadius: '5px'}}>
          <h3>Degree: {cert.degree}</h3>
          <p>Institution: {cert.institution}</p>
          <p>Graduation Year: {cert.graduationyear}</p>
          <p>Description: {cert.description}</p>
          </div>
      ))}

        <Footer />
        </>
    
    )
}