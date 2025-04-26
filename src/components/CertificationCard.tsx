
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  link,
  image,
}: CertificationCardProps) => {
  return (
    <div className="group card h-full flex flex-col hover:scale-105 hover:rotate-1 transition-all duration-500">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-portfolio-primary text-white px-4 py-2 rounded-md hover:bg-portfolio-secondary transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0 flex items-center gap-2 group"
          >
            View Certificate
            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
      <div className="p-4 group-hover:bg-gray-50 transition-colors duration-300">
        <h3 className="text-lg font-medium group-hover:text-portfolio-primary transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{issuer}</p>
        <p className="text-xs text-gray-500 mt-1 group-hover:text-portfolio-secondary transition-colors duration-300">{date}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
