import { div } from "framer-motion/client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Portfolio website",
    image: "/src/assets/My-Portfolio.png",
    tags: ["React", "Tailwind", "JavaScript", "Framer Motion", ],
    github: "https://github.com/rohitpanchal8535/My-Portfolio",
    live: "https://www.google.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 description",
    image: "/src/assets/project-2.png",
    tags: ["React", "Tailwind", "TypeScript"],
    github: "https://www.google.com",
    live: "https://www.google.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    image: "/src/assets/project-3.png",
    tags: ["React", "Tailwind", "TypeScript"],
    github: "https://www.google.com",
    live: "https://www.google.com",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
      <div className='text-center mb-16 relative z-20'>
          <div className='bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg'>
              My <span className='text-purple-400'>Projects</span>
            </h2>
            <p className='text-white text-lg max-w-2xl mx-auto drop-shadow-md'>
              Explore my latest projects showcasing my skills and expertise
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadaow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition=transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-1">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex justify-between items-center px-6 pb-4">
                <div className="flex space-x-2">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  <ExternalLink size={20} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
