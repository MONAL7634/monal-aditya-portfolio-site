
import React from 'react';
import Layout from '@/components/Layout';
import CertificationCard from '@/components/CertificationCard';

const Certifications = () => {
  const certifications = [
    {
      title: 'Frontend Developer (React) Certification',
      issuer: 'Hackerrank',
      date: 'December 2024',
      link: 'https://www.hackerrank.com/certificates/yourlink',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Responsible AI and Safe Systems Certification',
      issuer: 'NPTEL',
      date: 'November 2024',
      link: 'https://nptel.ac.in/certificates/yourlink',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Data Structures Certification',
      issuer: 'GeeksforGeeks',
      date: 'June 2024',
      link: 'https://www.geeksforgeeks.org/certificates/yourlink',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <Layout>
      <section className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="section-title mx-auto">Certifications</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {certifications.map((certification) => (
            <CertificationCard key={certification.title} {...certification} />
          ))}
        </div>

        <div className="mt-16 bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto animate-slide-up">
          <h2 className="text-xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-gray-700 mb-4">
            I believe in continuous learning and staying updated with the latest technologies and industry best practices. These certifications are part of my ongoing education journey.
          </p>
          <p className="text-gray-700">
            Beyond formal certifications, I regularly participate in coding challenges, workshops, and online courses to enhance my skills and knowledge.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;
