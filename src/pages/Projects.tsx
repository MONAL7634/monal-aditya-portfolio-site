
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'EventSphere - Event Management Website',
      description: 'Developed an intuitive event management website using React, React Router, and Tailwind CSS to simplify event creation, booking, and management. Implemented RESTful APIs with Express.js and Node.js, leveraging MongoDB for efficient data storage and retrieval.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Redux'],
      image: '/lovable-uploads/e7ce4d74-98b3-4e14-95c1-b64dc3ef1673.png',
      codeLink: 'https://github.com/MONAL7634',
      date: 'Feb 2025',
    },
    {
      title: 'PathLab - Pathology Management Website',
      description: 'Built a comprehensive pathology management web application for both to book tests, access reports, and manage lab operations. Utilized React Router and Tailwind CSS to create a responsive and user-friendly interface.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Redux', 'Multer'],
      image: '/lovable-uploads/553e30a9-08bd-4bd8-875a-98441e14e906.png',
      codeLink: 'https://github.com/MONAL7634',
      date: 'Oct 2024',
    },
    {
      title: 'TrailBlaze - Direction Website',
      description: 'Designed an interactive direction website using HTML, CSS, and JavaScript for seamless navigation and route planning. Enabled real-time location-based direction suggestions and interactive map integration for a user-friendly experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/lovable-uploads/d15326de-93d7-4292-afc5-ac68e36063e8.png',
      codeLink: 'https://github.com/MONAL7634',
      date: 'July 2024',
    },
  ];

  return (
    <Layout>
      <section className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="section-title mx-auto">My Projects</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up">
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Check out my GitHub profile for more projects and contributions
          </p>
          <a
            href="https://github.com/MONAL7634"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit GitHub Profile
          </a>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto animate-slide-up">
      <h2 className="text-3xl font-bold mb-10 text-center">My Development Process</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Planning", description: "Requirements gathering and project scoping to define clear objectives." },
          { title: "Design", description: "Creating wireframes and architecture to establish the project foundation." },
          { title: "Development", description: "Implementing features with clean, efficient, and well-tested code." },
          { title: "Deployment", description: "Testing, optimization, and successful project delivery." },
        ].map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center text-center">
            <div className="bg-portfolio-light text-portfolio-primary w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
              {index + 1}
            </div>
            <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
            <p className="text-gray-700 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default Projects;
