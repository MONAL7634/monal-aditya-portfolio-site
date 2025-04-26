
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  codeLink: string;
  date: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  codeLink,
  date,
}: ProjectCardProps) => {
  return (
    <div className="group h-full flex flex-col backdrop-blur-md bg-white/30 rounded-lg shadow-xl border border-white/20 transition-all duration-500 hover:scale-105 hover:rotate-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute top-4 right-4 backdrop-blur-md bg-white/50 rounded-full px-3 py-1 text-xs text-gray-700 font-medium transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2">
          {date}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-portfolio-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
        <div className="mb-4">
          <h4 className="font-medium text-sm text-gray-700 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-portfolio-primary/10 text-portfolio-primary text-xs px-2 py-1 rounded-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:bg-portfolio-primary hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary self-start bg-gradient-to-r from-portfolio-primary to-portfolio-secondary group hover:scale-105 transition-all duration-300 hover:-rotate-2 hover:shadow-xl"
        >
          <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" /> 
          <span>View Code</span>
          <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
