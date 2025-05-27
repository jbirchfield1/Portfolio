import { useState, useEffect } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import SkillCard from './partials/SkillCard'
import axios from 'axios'

export default function Skills(){
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
        
        useEffect(() => {
            axios.get('https://portfolio-0eav.onrender.com/skills')
            .then(res=> {
                setSkills(res.data);
                setLoading(false);
            })
            .catch(err=> {
                console.error("Error fetching skills:", err);
                setLoading(false);
            });
        }, []);
    return(
        <>
        <Header />
        <h2 className='text-xl'>Skills</h2>
        {loading ? (
        <p>Loading data... Please Wait</p> 
      ) : (
        <div className='flex flex-wrap'>
            {skills.map((card,index) => (
                <SkillCard key={index}{...card}/>
            ))}
        </div>
      )}
        <Footer />
        </>
    )
}