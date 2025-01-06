import { useState } from 'react'
import React from 'react'
import Navbar1 from './components/Navbar1'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import axios from 'axios'
import Project from './pages/Project'
import Resume from './pages/Resume'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar1 />
      
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </div>
  )
     
}

export default App;
