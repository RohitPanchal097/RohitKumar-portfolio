import React from 'react'
import { Mail, Phone } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get in <span className='text-primary'>Touch</span> </h2>
      <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div className='space-y-8'>
          <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
          <div className='space-y-6 justify-center'>
            <div className='flex items-start space-x-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <Mail className='w-6 h-6 text-primary' />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:rohitpanchal.8535@gmail.com"
                className='text-muted-foreground hover:text-primary transition-colors duration-300'
                >rohitpanchal.8535@gmail.com</a>
              </div>
            </div>
            <div className='flex items-start space-x-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <Phone className='w-6 h-6 text-primary' />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+918535002023"
                className='text-muted-foreground hover:text-primary transition-colors duration-300'
                >+91 8535002023</a>
              </div>
            </div>

            
          </div>
        </div>
        <div className='bg-card p-8 rounded-lg shadow-xl'>
              <h4 className='text-lg font-semibold mb-4'>Send me an email</h4>
              <form action="" className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-muted-foreground mb-2 text-left'>Name</label>
                  <input type='text' id='name' name='name' className='w-full px-4 py-3 rounded-md border border-inpur bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Your Name' />
                </div>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-muted-foreground mb-2 text-left'>Email</label>
                  <input type='email' id='email' name='email' className='w-full px-4 py-3 rounded-md border border-inpur bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Your Email' />
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-muted-foreground mb-2 text-left'>Message</label>
                  <textarea id='message' name='message' className='w-full px-4 py-3 rounded-md border border-inpur bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Your Message' />
                </div>
                <button type='submit' className='cosmic-button'>Send Message</button>
              </form>
            </div>
      </div>
    </section>
       
   
  )
}

export default ContactSection