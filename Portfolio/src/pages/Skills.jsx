import { useState, useEffect } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import SkillCard from './partials/SkillCard'
import axios from 'axios'

export default function Skills(){
    const [skills, setSkills] = useState([]);
        
        useEffect(() => {
            axios.get('http://localhost:5000/skills')
            .then(res=> setSkills(res.data))
            .catch(err=> console.error("Error fetching skills:", err));
        }, []);
    return(
        <>
        <Header />
        <h2>Skills</h2>
        <div className='flex'>
            {skills.map((card,index) => (
                <SkillCard key={index}{...card}/>
            ))}
        </div>
        <Footer />
        </>
    )
}