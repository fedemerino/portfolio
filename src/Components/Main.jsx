import React from 'react'
import About from './About'
import ContactContainer from './ContactContainer'
import Skills from './Skills'
import ProjectsContainer from './ProjectsContainer'
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Main