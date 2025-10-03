import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit, SiGithub, SiBootstrap,  SiPostman, SiRedux, SiWordpress, SiShopify  } from 'react-icons/si'  
import { motion } from 'framer-motion'

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 className='w-15 h-15 text-primary' />
  },
  {
    name: "CSS",
    icon: <SiCss3 className='w-15 h-15 text-primary' />
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className='w-15 h-15 text-primary' />
  },
  {
    name: "React",
    icon: <SiReact className='w-15 h-15 text-primary' />
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className='w-15 h-15 text-primary' />
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className='w-15 h-15 text-primary' />
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className='w-15 h-15 text-primary' />
  },
  {
    name: "Git",
    icon: <SiGit className='w-15 h-15 text-primary' />
  },
  {
    name: "GitHub",
    icon: <SiGithub className='w-15 h-15 text-primary' />
  },
  {
    name: "RESTful API",
    icon: <SiPostman className='w-15 h-15 text-primary' />
  },
  {
    name: "WordPress",
    icon: <SiWordpress className='w-15 h-15 text-primary' />
  },
  {
    name: "Shopify",
    icon: <SiShopify className='w-15 h-15 text-primary' />
  }
]


const SkillsSection = () => {
  return (
   <section className='py-16 '>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold text-center mb-12'>Skills</h2>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      
      
      
      className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
        {skills.map((skill, index) => (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
          
          key={index} className='flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow '>
            {skill.icon}
            <span className='mt-2 text-lg font-semibold'>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>

   </section>
  )
}

export default SkillsSection