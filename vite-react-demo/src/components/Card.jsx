import React from "react";
import "./Card.css";
import { motion as Motion } from "framer-motion";

const Card = () => {
  return (
    <section className="Card-section"
    >
      <h1 className="Card-title">Stay Compliant, Stay Secure</h1>
      <Motion.div className="stay-box"
      initial={{ opacity: 0, x: +140 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}>
        <p>
          Protect your business with best-in-class Data Governance & Compliance
          Consulting services.
        </p>
        <h3>Schedule a Free Consultation Today!</h3>
        <Motion.button className="stay-btn"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 1.5 }}>Get Started Today!</Motion.button>
      </Motion.div>
    </section>
  );
};

export default Card;