
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title">About Me</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/8a52db6a-8b6d-464f-99a0-41fa61e1a6c6.png" 
                  alt="Monal Aditya" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="flex justify-center space-x-4 mb-6">
                <a 
                  href="https://github.com/MONAL7634" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-portfolio-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/monal-aditya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-portfolio-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:monaladitya7@gmail.com" 
                  className="text-gray-700 hover:text-portfolio-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-medium text-lg mb-2">Contact Information</h3>
                <p className="mb-1">
                  <span className="font-medium">Email:</span> monaladitya7@gmail.com
                </p>
                <p className="mb-1">
                  <span className="font-medium">Phone:</span> +91-7634910177
                </p>
                <p className="mb-1">
                  <span className="font-medium">Location:</span> Punjab, India
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-gray-700 mb-4">
                Hello! I'm Monal Aditya, a passionate full-stack developer currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University with a CGPA of 7.16.
              </p>
              
              <p className="text-gray-700 mb-4">
                I specialize in building robust, user-friendly web applications that solve real-world problems. With experience in various programming languages and frameworks, I enjoy tackling complex challenges and turning ideas into functional, elegant solutions.
              </p>

              <p className="text-gray-700 mb-4">
                My journey in software development has equipped me with strong problem-solving abilities and adaptability to new technologies. I thrive in collaborative environments and am always eager to learn and grow as a developer.
              </p>

              <p className="text-gray-700 mb-8">
                Beyond technical skills, I value effective communication and teamwork. I believe that the best solutions come from diverse perspectives and collaborative efforts. I'm constantly exploring new technologies and methodologies to enhance my skills and deliver better results.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Education</h3>
              
              <div className="mb-6 border-l-4 border-portfolio-primary pl-4">
                <h4 className="font-semibold">Lovely Professional University</h4>
                <p className="text-gray-600">Bachelor of Technology - Computer Science and Engineering</p>
                <p className="text-gray-500">August 2022 - Present | CGPA: 7.46</p>
              </div>

              <div className="mb-6 border-l-4 border-portfolio-primary pl-4">
                <h4 className="font-semibold">B.L Indo-Anglian School</h4>
                <p className="text-gray-600">Higher Secondary Education</p>
                <p className="text-gray-500">April 2018 - April 2022 | Percentage: 65.2%</p>
              </div>

              <div className="mb-6 border-l-4 border-portfolio-primary pl-4">
                <h4 className="font-semibold">St. Ignatius School</h4>
                <p className="text-gray-600">Matriculation</p>
                <p className="text-gray-500">April 2017 - March 2018 | Percentage: 74.6%</p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://drive.google.com/file/d/1uJCWucRw60oTS9ClHvMQsRDMHp7ld1E1/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary mr-4"
                >
                  Download Resume
                </a>
                <Link to="/contact" className="btn-outline">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
