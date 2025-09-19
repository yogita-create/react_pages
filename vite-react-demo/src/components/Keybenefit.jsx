import React from 'react';
import {
  FaCalculator,
  FaLock,
  FaDatabase,
  FaHandshake,
  FaCloud
} from "react-icons/fa";
import './KeyBenefit.css';

const BenefitCard = ({ icon, title, description }) => (
  <div className="benefit-card">
    <div className="benefit-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Keybenefit = () => {
  const benefits = [
    {
      icon: <FaCalculator />,
      title: 'Regulatory Compliance Assurance',
      description: 'Ensure adherence to GDPR, HIPAA, CCPA, SOC.',
    },
    {
      icon: <FaLock />,
      title: 'Enhanced Data Security & Privacy',
      description: 'Implement encryption, access control, and data protection strategies.',
    },
    {
      icon: <FaDatabase />,
      title: 'Data Integrity & Accuracy',
      description: 'Establish governance policies to maintain high-quality, reliable data.',
    },
    {
      icon: <FaHandshake />,
      title: 'Reduced Legal & Compliance Risks',
      description: 'Avoid costly penalties and reputational damage from data breaches.',
    },
    {
      icon: <FaCloud />,
      title: 'Optimized Data Lifecycle Management',
      description: 'Govern data from creation to archival, ensuring retention compliance.',
    },
  ];

  return (
    <section className="benefits-section">
      <h1>Key Benefits</h1>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default Keybenefit;
