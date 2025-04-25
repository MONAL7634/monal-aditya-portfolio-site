
import React from 'react';
import Layout from '@/components/Layout';
import { Calendar } from 'lucide-react';

const Trainings = () => {
  return (
    <Layout>
      <section className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="section-title mx-auto">Trainings & Workshops</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Information about my professional training experiences and workshops will be added soon. 
            This section will highlight the various training programs, bootcamps, and workshops that have contributed to my skill development.
          </p>
        </div>

        {/* Placeholder content */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 animate-slide-up">
          <div className="flex justify-center mb-8">
            <Calendar size={80} className="text-portfolio-primary" />
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-4">Coming Soon</h2>
          
          <p className="text-gray-700 text-center mb-6">
            I'm currently organizing information about my training experiences to share here. 
            Check back soon for updates on my professional development journey.
          </p>
          
          <p className="text-gray-700 text-center">
            In the meantime, feel free to explore my projects, skills, and certifications to learn more about my technical expertise.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
