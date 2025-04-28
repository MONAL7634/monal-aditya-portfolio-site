
import React from 'react';
import Layout from '@/components/Layout';
import CertificationCard from '@/components/CertificationCard';

const Certifications = () => {
  const certifications = [
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      date: 'December 2023',
      link: 'https://coursera.org/verify/7L98TKD5A2WE',
      image: '/lovable-uploads/CERTIFICATE_LANDING_PAGE~7L98TKD5A2WE.jpeg',
    },
    {
      title: 'Server side JavaScript with Node.js',
      issuer: 'NIIT',
      date: 'May 2024',
      link: 'https://coursera.org/verify/GKA5EHQW7DAR',
      image: '/lovable-uploads/CERTIFICATE_LANDING_PAGE~GKASEHQW7DAB.jpeg',
    },
    {
      title: 'Programming in C++: A Hands-on Introduction',
      issuer: 'Codio',
      date: 'February 2024',
      link: 'https://coursera.org/verify/specialization/DUTT8D2JCHR',
      image: '/lovable-uploads/CERTIFICATE_LANDING_PAGE~JDUTT8D2JCHR.jpeg',
    },
    {
      title: 'Building Web Applications in PHP',
      issuer: 'University of Michigan',
      date: 'November 2024',
      link: 'https://coursera.org/verify/IZOZEZE4490',
      image: '/lovable-uploads/CERTIFICATE_LANDING_PAGE~JJZQ6ZE54490.jpeg',
    }
  ];

  return (
    <Layout>
      <section className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="section-title mx-auto">My Certifications</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
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
