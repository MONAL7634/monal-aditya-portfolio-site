
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Precision in logic. Simplicity in design. Purpose in every line.";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-portfolio-light to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in">
          <p className="text-portfolio-secondary font-medium mb-2 hover:text-portfolio-primary transition-all duration-300 hover:translate-x-1">
            Hello, I'm
          </p>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 hover:scale-105 transition-all duration-300 group">
            Monal <span className="text-portfolio-primary group-hover:text-portfolio-secondary transition-colors duration-300">Aditya</span>
          </h1>
          <div className="text-xl mb-6 text-gray-700 h-20 hover:text-portfolio-primary transition-colors duration-300">
            {text}<span className="animate-pulse">|</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://drive.google.com/file/d/1uJCWucRw60oTS9ClHvMQsRDMHp7ld1E1/view?usp=drive_link"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary transform hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-portfolio-primary to-portfolio-secondary group"
            >
              Download Resume <ArrowDown className="animate-bounce group-hover:translate-y-1" size={16} />
            </a>
            <Link 
              to="/contact" 
              className="btn-outline transform hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-xl border-portfolio-primary hover:bg-gradient-to-r hover:from-portfolio-primary hover:to-portfolio-secondary"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center animate-slide-in">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-portfolio-primary hover:border-portfolio-secondary transition-all duration-500 hover:scale-105 transform backdrop-blur-sm bg-white/30 group">
            <img
              src="/lovable-uploads/8a52db6a-8b6d-464f-99a0-41fa61e1a6c6.png"
              alt="Monal Aditya"
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-125 transition-transform duration-300">
        <svg
          className="w-6 h-6 text-portfolio-primary hover:text-portfolio-secondary transition-colors duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden hover:scale-105 transition-transform duration-500">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-24"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.44,118.92,159.75,113.28,221.16,107.1Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
