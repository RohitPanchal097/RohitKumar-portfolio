import { div } from "framer-motion/client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    image: "/src/assets/project-1.png",
    tags: ["React", "Tailwind", "TypeScript"],
    github: "https://www.google.com",
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
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my latest projects showcasing my skills and expertise
        </p>

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
