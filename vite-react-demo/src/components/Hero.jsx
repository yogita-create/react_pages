import img1 from "../images/datasecurity.jpg";
import { motion as Motion } from "framer-motion";
import "../App.css";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        
          <Motion.img
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            src={img1}
            alt="img1"
            width="300px"
            className="left-image img"
          />

          <div className="right-container">
            
            <Motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Ensure Data Integrity, Security & Regulatory Compliance
            </Motion.h1>

            
            <Motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Protect your business with robust data governance frameworks and
              compliance solutions tailored to industry standards.
            </Motion.h2>
          </div>
        </div>
      

      {/* Button */}
      <Motion.button
        className="Touch-btn"
        onClick={() => alert("Get in Touch!")}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        Get in Touch →
      </Motion.button>

      {/* Wave Section */}
      <div className="wave-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <defs>
            {/* Gradient for wave */}
            <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffeffff" />

            </linearGradient>
          </defs>

          <path
            fill="url(#heroGradient)"
            d=" M0,160
              C360,260 720,60 1080,160
              C1260,220 1440,120 1440,120
              L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
