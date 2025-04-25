
import React from 'react';
import { Github } from 'lucide-react';

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
    <div className="card group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs text-gray-700 font-medium">
          {date}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <div className="mb-4">
          <h4 className="font-medium text-sm text-gray-700 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-portfolio-light text-portfolio-primary text-xs px-2 py-1 rounded-md"
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
          className="btn-primary self-start"
        >
          <Github size={16} /> View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
