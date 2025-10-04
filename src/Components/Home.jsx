import React from 'react'

import StarryBackground from './StarBackground'
import "../index.css"
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import CustomCursor from './CustomCursor'
import ChatBot from './ChatBot'
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div
    className='min-h-screen bg-transparent text-foreground overflow-x-hidden'
    >
        {/* THeme Toggle */}
        
        {/*Background Effects*/}
        <StarryBackground />
        {/*Navbar*/}
        <CustomCursor />
        <NavBar />
        {/*Hero Section*/}
        <main>
          
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </main>
        {/*About Section*/}

        {/*Services Section*/}

        {/*Projects Section*/}

        {/*Contact Section*/}

        {/*Footer*/}
        
        {/*ChatBot*/}
        <ChatBot  />
    </div>
  )
}

export default Home