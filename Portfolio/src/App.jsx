import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (

    <Router>
    <div>
      <nav>
        <Link to="/">Personal Info</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
    </Router>
    
  )
}

export default App
