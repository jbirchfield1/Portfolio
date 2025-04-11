import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (

    <Router>
    <div>
      <nav className='flex gap-2 m-3'>
        <Link to="/">Introduction</Link>
        <Link to="/Education">Education</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
    
  )
}

export default App
