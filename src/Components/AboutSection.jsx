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
                <h3 className='text-2xl font-semibold'>Freelance Web Developer &amp; Accessibility Tester</h3>
          <p className='text-normal-contrast'>
            I work with clients to design, build, and improve websites and e-commerce experiences. My services include WordPress website development, Shopify store setup and customization, and accessibility testing against WCAG guidelines. I also build responsive interfaces with React and modern web technologies, with a focus on usability and inclusive experiences.
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
                <h4 className='text-lg font-semibold'>WordPress &amp; Shopify</h4>
                <p className='text-normal-contrast'>
                Creating and customizing WordPress websites and Shopify stores, from responsive pages to polished product and shopping experiences.
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
                <h4 className='text-lg font-semibold'>Accessibility Testing</h4>
                <p className='text-normal-contrast'>
                Reviewing websites for accessibility with WCAG guidance, keyboard navigation, screen readers, NVDA, ANDI, and Axe DevTools.
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
                <h4 className='text-lg font-semibold'>Freelance Collaboration</h4>
                <p className='text-normal-contrast'>
                Working directly with clients on new websites, store improvements, accessibility reviews, and ongoing updates.
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