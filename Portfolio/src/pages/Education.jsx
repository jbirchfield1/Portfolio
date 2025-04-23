import { useState, useEffect } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import axios from 'axios'
import EducationCard from './partials/EducationCard'


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
        <h2 className='text-xl'>Education</h2>
        <div className='flex gap-1 flex-wrap'>
        {edu.map((card,index) => (
            <EducationCard key={index}{...card}/>
        ))}
        </div>
        <Footer />
        </>
    
    )
}