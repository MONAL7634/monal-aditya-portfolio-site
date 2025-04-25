
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SkillIcon from '@/components/SkillIcon';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks & Libraries' },
    { id: 'tools', name: 'Tools & Platforms' },
    { id: 'soft', name: 'Soft Skills' },
  ];

  const skills = [
    // Languages
    { name: 'C++', category: 'languages', description: 'Advanced proficiency with Data Structures & Algorithms' },
    { name: 'JavaScript', category: 'languages', description: 'Frontend and backend development' },
    { name: 'C', category: 'languages', description: 'Systems programming experience' },
    { name: 'PHP', category: 'languages', description: 'Server-side web development' },
    { name: 'Java', category: 'languages', description: 'Object-oriented programming' },
    { name: 'Python', category: 'languages', description: 'For data processing and automation' },
    
    // Frameworks & Libraries
    { name: 'HTML', category: 'frameworks', description: 'Semantic markup and accessibility' },
    { name: 'CSS', category: 'frameworks', description: 'Styling and responsive design' },
    { name: 'Bootstrap', category: 'frameworks', description: 'Responsive UI framework' },
    { name: 'Node.js', category: 'frameworks', description: 'Server-side JavaScript runtime' },
    { name: 'React', category: 'frameworks', description: 'Frontend library for UI development' },
    { name: 'Laravel', category: 'frameworks', description: 'PHP framework for web applications' },
    { name: 'Tailwind', category: 'frameworks', description: 'Utility-first CSS framework' },
    
    // Tools & Platforms
    { name: 'MySQL', category: 'tools', description: 'Relational database management system' },
    { name: 'MongoDB', category: 'tools', description: 'NoSQL database for modern applications' },
    
    // Soft Skills
    { 
      name: 'Problem Solving', 
      category: 'soft', 
      description: 'Analytical approach to complex challenges',
      icon: '🧩'
    },
    { 
      name: 'Team Player', 
      category: 'soft', 
      description: 'Collaborative work in diverse environments',
      icon: '👥'
    },
    { 
      name: 'Adaptability', 
      category: 'soft', 
      description: 'Quick learner with flexible mindset',
      icon: '🔄'
    },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <Layout>
      <section className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="section-title mx-auto">Skills & Expertise</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey as a developer.
            Here's what I bring to the table:
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-portfolio-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-slide-up">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-box group">
              {skill.icon ? (
                <div className="text-3xl mb-2">{skill.icon}</div>
              ) : (
                <SkillIcon name={skill.name} className="text-portfolio-primary mb-2 group-hover:scale-110 transition-transform duration-300" size={40} />
              )}
              <h3 className="text-lg font-medium mb-1">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-gray-700 mb-4">
              I'm committed to continuous improvement and staying updated with the latest technologies and best practices in the industry. I regularly engage in online courses, workshops, and personal projects to enhance my skills.
            </p>
            <p className="text-gray-700">
              My approach to learning new skills is hands-on — I believe that the best way to understand a new technology is to build something with it. This practical mindset has helped me quickly adapt to various technologies throughout my career.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
