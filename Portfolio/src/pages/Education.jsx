import { useState, useEffect } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import axios from 'axios'
import EducationCard from './partials/EducationCard'


export default function Education(){
    const [edu, setEdu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://portfolio-0eav.onrender.com/education')
        .then(res=> {
            setEdu(res.data);
            setLoading(false);
        })
        .catch(err=> {
            console.error("Error fetching education:", err)
            setLoading(false);
        });
      }, []);

    return(
        <>
        <Header />
        <h2 className='text-xl'>Education</h2>
        {loading ? (
        <p>Loading data... Please Wait</p> 
      ) : (
        <div className='flex gap-1 flex-wrap'>
          {edu.map((card, index) => (
            <EducationCard key={index} {...card} />
          ))}
        </div>
      )}
        <Footer />
        </>
    
    )
}