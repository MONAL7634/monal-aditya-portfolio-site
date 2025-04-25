
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Monal Aditya</h4>
            <p className="text-gray-300 mb-4">
              A passionate full-stack developer currently pursuing B.Tech in Computer Science at Lovely Professional University.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/MONAL7634" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/monal-aditya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:monaladitya7@gmail.com" 
                className="text-gray-300 hover:text-portfolio-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-portfolio-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-portfolio-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-portfolio-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-portfolio-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-portfolio-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Email:</span> monaladitya7@gmail.com
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Phone:</span> +91-7634910177
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Location:</span> Punjab, India
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Monal Aditya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
