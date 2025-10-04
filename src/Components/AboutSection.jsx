import React from 'react'
import { Code, User, Briefcase } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about'
    className='py-24 px-4 relative'
    >
        <div className='container mx-auto max-w-7xl'>
            <div className='text-center mb-16 relative z-20'>
          <div className='bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg'>
               <span className='text-purple-400'>About</span> Me
            </h2>
            {/* <p className='text-white text-lg max-w-2xl mx-auto drop-shadow-md'>
              Technologies and tools I work with to bring ideas to life
            </p> */}
          </div>
        </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
              <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
          <p className='text-muted-foreground'>
            I'm a passionate web developer with a strong passion for creating beautiful and functional web applications. I'm a quick learner and I'm always looking to improve my skills.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>

            <button className='cosmic-button' href='#contact'>Download CV</button>
            <button className='cosmic-button' href='#contact'>Get in Touch</button>

          </div> 
              </div>
              <div className='grid grid-cols-1 gap-6'>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
              <Code className='w-6 h-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='text-lg font-semibold'>Web Development</h4>
                <p className='text-muted-foreground'>
                creating beautiful and responsive websites using modern technologies.
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
          <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
              <User className='w-6 h-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='text-lg font-semibold'>UI/Ux Design</h4>
                <p className='text-muted-foreground'>
                Designing intuitive user interfaces and seamless user experiences
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
          <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
              <Briefcase className='w-6 h-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='text-lg font-semibold'>Project Management</h4>
                <p className='text-muted-foreground'>
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