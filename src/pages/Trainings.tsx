
import React from 'react';
import Layout from '@/components/Layout';
import { Book, GraduationCap } from 'lucide-react';

const Trainings = () => {
  return (
    <Layout>
      <section className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="section-title mx-auto">Trainings</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Exploring various technical domains through structured learning programs and hands-on workshops
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Certificate Display */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-slide-up">
              <img
                src="/lovable-uploads/356e6404-9f09-4f6a-806b-1ed0be68cc57.png"
                alt="DSA Training Certificate"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Training Details */}
            <div className="bg-white rounded-lg shadow-md p-8 animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <Book className="text-portfolio-primary w-8 h-8" />
                <h2 className="text-2xl font-bold text-gray-800">Data Structures and Algorithms</h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-2">
                  <GraduationCap className="text-portfolio-secondary" />
                  <span className="font-semibold">Course:</span> Mastering Data Structures and Algorithms: Theory to Practice
                </p>

                <div className="border-l-4 border-portfolio-primary pl-4 space-y-2">
                  <p>• Duration: May 6, 2024 - July 17, 2024</p>
                  <p>• Institution: Lovely Professional University</p>
                  <p>• Grade Achieved: A</p>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Key Learnings:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Advanced data structure implementations and their practical applications</li>
                    <li>Algorithm design techniques and problem-solving strategies</li>
                    <li>Time and space complexity analysis</li>
                    <li>Hands-on experience with real-world programming challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
