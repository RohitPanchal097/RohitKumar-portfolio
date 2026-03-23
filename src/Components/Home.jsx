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
        {/* Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Skip to main content
        </a>

        {/*Background Effects*/}
        <StarryBackground />

        {/*Navbar - Header landmark */}
        <header>
          <CustomCursor />
          <NavBar />
        </header>

        {/*Hero Section - Main content starts here */}
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
        </main>

        {/*Contact Section - Footer landmark outside main */}
        <ContactSection />

        {/*ChatBot - Complementary landmark for auxiliary content */}
        <aside aria-label="Chat assistance">
          <ChatBot />
        </aside>
    </div>
  )
}

export default Home