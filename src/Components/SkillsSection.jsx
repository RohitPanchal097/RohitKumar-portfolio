import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit, SiGithub, SiBootstrap, SiPostman, SiRedux, SiWordpress, SiShopify } from 'react-icons/si'

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 className='w-12 h-12' />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      name: "CSS",
      icon: <SiCss3 className='w-12 h-12' />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className='w-12 h-12' />,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      name: "React",
      icon: <SiReact className='w-12 h-12' />,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux className='w-12 h-12' />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className='w-12 h-12' />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/20'
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className='w-12 h-12' />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
      borderColor: 'border-purple-600/20'
    },
    {
      name: "Git",
      icon: <SiGit className='w-12 h-12' />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-600/10',
      borderColor: 'border-orange-600/20'
    },
    {
      name: "GitHub",
      icon: <SiGithub className='w-12 h-12' />,
      color: 'text-gray-300',
      bgColor: 'bg-gray-300/10',
      borderColor: 'border-gray-300/20'
    },
    {
      name: "RESTful API",
      icon: <SiPostman className='w-12 h-12' />,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/20'
    },
    {
      name: "WordPress",
      icon: <SiWordpress className='w-12 h-12' />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/20'
    },
    {
      name: "Shopify",
      icon: <SiShopify className='w-12 h-12' />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    }
  ]

  return (
    <section className='py-20 px-4 relative z-10 ' id='skills'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16 relative z-20'>
          <div className='bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg'>
              My <span className='text-purple-400'>Skills</span>
            </h2>
            <p className='text-white text-lg max-w-2xl mx-auto drop-shadow-md'>
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center '>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                group relative p-6 rounded-xl border-2 transition-all duration-300 
                hover:scale-110 hover:rotate-3 hover:shadow-2xl
                ${skill.bgColor} ${skill.borderColor}
                hover:shadow-purple-500/20 hover:border-opacity-50
                backdrop-blur-sm
              `}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className={`${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300 mx-10`}>
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className='text-white text-sm font-semibold text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300'>
                {skill.name}
              </h3>

              {/* Hover Effect Overlay */}
              <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none' />
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className='flex justify-center mt-16'>
          <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'></div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection