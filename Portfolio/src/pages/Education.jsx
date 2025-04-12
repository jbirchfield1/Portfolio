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
        <h2>Education</h2>
        {edu.map(cert => (
        <div key={cert.id} style={{border: '1px solid #ccc', padding: '5px'}}>
          <h3>{cert.degree}</h3>
          <p>{cert.institution}</p>
          <p>{cert.graduationyear}</p>
          <p>{cert.description}</p>
          </div>
      ))}

        <Footer />
        </>
    
    )
}