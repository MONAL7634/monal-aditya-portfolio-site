import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Link } from 'react-router-dom';
import SkillIcon from '@/components/SkillIcon';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  // Skills data
  const skills = [
    { name: 'JavaScript', category: 'Languages' },
    { name: 'React', category: 'Frameworks' },
    { name: 'Node.js', category: 'Frameworks' },
    { name: 'MongoDB', category: 'Tools' },
    { name: 'HTML', category: 'Languages' },
    { name: 'CSS', category: 'Languages' },
  ];

  // Updated featured projects with new images
  const featuredProjects = [
    {
      title: 'EventSphere',
      description: 'Developed an intuitive event management website using React to simplify event creation, booking, and management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      image: '/lovable-uploads/e7ce4d74-98b3-4e14-95c1-b64dc3ef1673.png',
      codeLink: 'https://github.com/MONAL7634',
      date: 'Feb 2025',
    },
    {
      title: 'PathLab',
      description: 'Built a comprehensive pathology management web application to book tests, access reports, and manage lab operations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Redux'],
      image: '/lovable-uploads/553e30a9-08bd-4bd8-875a-98441e14e906.png',
      codeLink: 'https://github.com/MONAL7634',
      date: 'Oct 2024',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section Preview */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title mx-auto">My Skills</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Here are some of the technologies I work with regularly
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 animate-slide-up">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-box">
                <SkillIcon name={skill.name} className="text-portfolio-primary mb-2" />
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs text-gray-500">{skill.category}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-slide-up">
            <Link to="/skills" className="btn-primary">
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section className="section-container">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="section-title mx-auto">Featured Projects</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 animate-slide-up">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center mt-10 animate-slide-up">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-portfolio-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and exciting projects.
            Feel free to reach out if you want to connect!
          </p>
          <Link to="/contact" className="bg-white text-portfolio-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
            Contact Me
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
