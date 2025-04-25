
import React from 'react';

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
    <div className="card h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-portfolio-primary text-white px-4 py-2 rounded-md hover:bg-portfolio-secondary transition-colors duration-300"
          >
            View Certificate
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{issuer}</p>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
