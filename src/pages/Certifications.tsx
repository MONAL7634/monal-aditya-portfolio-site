
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
      image: '/lovable-uploads/65bdaad6-6018-45ab-bf06-99e3ecd497c3.png',
    },
    {
      title: 'Server side JavaScript with Node.js',
      issuer: 'NIIT',
      date: 'May 2024',
      link: 'https://coursera.org/verify/GKA5EHQW7DAR',
      image: '/lovable-uploads/e1d13741-f4ea-49f2-bed5-1ab71519efbc.png',
    },
    {
      title: 'Programming in C++: A Hands-on Introduction',
      issuer: 'Codio',
      date: 'February 2024',
      link: 'https://coursera.org/verify/specialization/DUTT8D2JCHR',
      image: '/lovable-uploads/8739ed5f-e2ae-4869-a40a-d6844b4ea37a.png',
    },
    {
      title: 'Building Web Applications in PHP',
      issuer: 'University of Michigan',
      date: 'November 2024',
      link: 'https://coursera.org/verify/IZOZEZE4490',
      image: '/lovable-uploads/d84296a4-a15a-4381-82ec-2832e80f25d3.png',
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

