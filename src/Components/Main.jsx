import React from 'react'
import Home from './Home'
import ProjectsContainer from './ProjectsContainer'
import ContactContainer from './ContactContainer'
import AboutMe from './AboutMe'
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Main