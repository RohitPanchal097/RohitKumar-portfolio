import React from 'react'
import { Code, User, Briefcase } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about'
    className='py-24 px-4 relative'
    aria-labelledby="about-heading"
    >
        <div className='container mx-auto max-w-7xl'>
            <div className='text-center mb-16 relative z-20'>
          <div className='bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h2 id="about-heading" className='text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg'>
               <span className='text-purple-400'>About</span> Me
            </h2>
            {/* <p className='text-white text-lg max-w-2xl mx-auto drop-shadow-md'>
              Technologies and tools I work with to bring ideas to life
            </p> */}
          </div>
        </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
              <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>Accessibility Specialist</h3>
          <p className='text-normal-contrast'>
            I'm a dedicated accessibility tester focused on making web applications inclusive and accessible to all users. I lead accessibility testing and audit cycles using Axe, ANDI, NVDA, and WCAG guidelines, then collaborate with developers to remediate issues, giving testing priority over pure development tasks.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>

            <a href='#contact' className='cosmic-button'>Download CV</a>
            <a href='#contact' className='cosmic-button'>Get in Touch</a>

          </div> 
              </div>
              <div className='grid grid-cols-1 gap-6'>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
              <Code className='w-6 h-6 text-primary' aria-hidden="true" />
              </div>
              <div className='text-left'>
                <h4 className='text-lg font-semibold'>Accessibility Testing</h4>
                <p className='text-normal-contrast'>
                conducting WCAG 2.2 audit cycles with Axe DevTools, ANDI, NVDA and ARIA best practices. I ensure keyboard-only navigation, ARIA roles/labels, screen reader compatibility, and quality across other screen readers like VoiceOver.
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
          <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
              <User className='w-6 h-6 text-primary' aria-hidden="true" />
              </div>
              <div className='text-left'>
                <h4 className='text-lg font-semibold'>UI/Ux Design</h4>
                <p className='text-normal-contrast'>
                Designing intuitive user interfaces and seamless user experiences
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
          <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
              <Briefcase className='w-6 h-6 text-primary' aria-hidden="true" />
              </div>
              <div className='text-left'>
                <h4 className='text-lg font-semibold'>Project Management</h4>
                <p className='text-normal-contrast'>
                Leading projects from conception to completion with agile methodologies.
                </p>
              </div>
            </div>
          </div>
              </div>

            </div>
        </div>

    </section>
  )
}

export default AboutSection