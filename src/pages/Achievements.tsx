
import React from 'react';
import Layout from '@/components/Layout';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Leetcode Contest Rating: 1404',
      description: 'Achieved a competitive rating through consistent performance in coding contests.',
      date: 'Feb 2025',
      icon: <Trophy className="text-yellow-500" size={24} />,
    },
    {
      title: 'Reached Final Round in SAP Labs Hackathon',
      description: 'Showcased problem-solving, teamwork, and innovation in a competitive hackathon environment.',
      date: 'April 2024',
      icon: <Trophy className="text-yellow-500" size={24} />,
    },
    {
      title: 'MUN 2nd Runner-up position',
      description: 'Achieved 2nd Runner-up position in MUN, demonstrating excellence in debate and diplomacy.',
      date: 'Feb 2023',
      icon: <Trophy className="text-yellow-500" size={24} />,
    },
  ];

  return (
    <Layout>
      <section className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="section-title mx-auto">Achievements</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Recognition and accomplishments from my academic and professional journey
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-portfolio-primary transform md:translate-x-[-50%]"></div>
            
            {/* Achievement Items */}
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 relative`}
              >
                {/* Timeline connector */}
                <div className="hidden md:block absolute left-1/2 top-5 w-5 h-5 rounded-full bg-white border-4 border-portfolio-primary transform -translate-x-1/2"></div>
                
                {/* Content */}
                <div className="md:w-[45%]"></div>
                <div className="bg-white rounded-lg shadow-md p-6 md:w-[45%] ml-6 md:ml-0">
                  <div className="flex items-center mb-3">
                    {achievement.icon}
                    <h3 className="text-xl font-bold ml-2">{achievement.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-2">{achievement.description}</p>
                  <span className="text-sm text-gray-500">{achievement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto animate-slide-up">
          <h2 className="text-2xl font-bold mb-4">Continuous Growth</h2>
          <p className="text-gray-700">
            I'm constantly challenging myself to grow both professionally and personally. These achievements represent milestones in my journey, but I believe the learning process and skills developed along the way are equally valuable.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
