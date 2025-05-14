import { useState, useEffect } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import axios from 'axios'
import ProjectCard from './partials/ProjectCard'


export default function Projects(){
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        axios.get('https://portfolio-0eav.onrender.com/projects')
        .then(res=> setProjects(res.data))
        .catch(err=> console.error("Error fetching projects:", err));
    }, []);


    return(
        <>
        <Header />
        <h2 className='text-xl'>Projects</h2>
        <div className='flex flex-wrap'>
        {projects.map((card,index) => (
            <ProjectCard key={index}{...card}/>
        ))}
        </div>
        <Footer />
        </>
    
    )
}