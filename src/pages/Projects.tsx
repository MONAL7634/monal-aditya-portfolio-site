
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'EventSphere - Event Management Website',
      description: 'Developed an intuitive event management website using React, React Router, and Tailwind CSS to simplify event creation, booking, and management. Implemented RESTful APIs with Express.js and Node.js, leveraging MongoDB for effective data storage and retrieval. Integrated JWT for secure user authentication and role-based authorization.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Redux'],
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      codeLink: 'https://github.com/MONAL7634',
      date: 'Feb 2025',
    },
    {
      title: 'PathLab - Pathology Management Website',
      description: 'Built a comprehensive pathology management web application for both to book tests, access reports, and manage lab operations. Utilized React Router and Tailwind CSS to create a responsive and user-friendly interface. Implemented robust RESTful APIs with Express.js and Node.js, leveraging MongoDB for scalable and efficient data storage and retrieval. Configured JWT for secure user authentication.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Redux', 'Multer'],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      codeLink: 'https://github.com/MONAL7634',
      date: 'Oct 2024',
    },
    {
      title: 'TrailBlaze - Direction Website',
      description: 'Designed an interactive direction website using HTML, CSS, and JavaScript for seamless navigation and route planning. Enabled real-time location-based direction suggestions and interactive map integration for a user-friendly experience. Incorporated dynamic functionality and responsive design principles to ensure compatibility across various devices.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
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

      {/* Project Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">My Development Process</h2>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-portfolio-light text-portfolio-primary w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="font-bold mb-2">Planning</h3>
                <p className="text-gray-700 text-sm">Requirements gathering and project scoping to define clear objectives.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-portfolio-light text-portfolio-primary w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="font-bold mb-2">Design</h3>
                <p className="text-gray-700 text-sm">Creating wireframes and architecture to establish the project foundation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-portfolio-light text-portfolio-primary w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="font-bold mb-2">Development</h3>
                <p className="text-gray-700 text-sm">Implementing features with clean, efficient, and well-tested code.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-portfolio-light text-portfolio-primary w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">4</div>
                <h3 className="font-bold mb-2">Deployment</h3>
                <p className="text-gray-700 text-sm">Testing, optimization, and successful project delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
