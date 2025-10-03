import React from 'react'
import ThemeToggle from './ThemeToggle'
import StarBackground from './StarBackground'
import "../index.css"
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import CustomCursor from './CustomCursor'
const Home = () => {
  return (
    <div
    className='min-h-screen bg-background text-foreground  overflow-x-hidden'
    >
        {/* THeme Toggle */}
        <ThemeToggle />
        {/*Background Effects*/}
        <StarBackground />
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
    </div>
  )
}

export default Home