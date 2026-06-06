import React from "react";
import { FaClipboardCheck, FaCogs, FaLock, FaChartLine, FaFileAlt } from "react-icons/fa";
import "./Itworks.css"; 

const Itworks = () => {
  const steps = [
    {
      icon: <FaClipboardCheck />,
      title: "Assessment & Compliance Gap Analysis",
      description:
        "We evaluate your current data governance structure to identify gaps and areas of risk.",
      
    },
    {
      icon: <FaCogs />,
      title: "Policy Development & Implementation",
      description:
        "We establish custom governance policies aligned with industry regulations and best practices.",
      
    },
    {
      icon: <FaLock />,
      title: "Security & Compliance Integration",
      description:
        "We integrate data security measures such as encryption, role-based access, and incident response plans.",
      
    },
    {
      icon: <FaChartLine />,
      title: "Continuous Compliance Monitoring",
      description:
        "Automated tools and expert-led reviews ensure ongoing compliance and risk management.",
      
    },
    {
      icon: <FaFileAlt />,
      title: "Audit Preparation & Reporting",
      description:
        "We provide detailed audit reports, compliance documentation, and regulatory insights to keep your organization compliant.",
      
    },
  ];

  return (
    <section className="itworks-section">
      <h2 className="itworks-title">How It Works</h2>
      <div className="itworks-container">
        {steps.map((step, index) => (
          <div className="itworks-card" key={index}>
            <div className="icon" style={{ color: step.color }}>
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itworks;
