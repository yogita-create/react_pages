import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../images/webmobi3601.jpg";
import Whatsapplogo from "../images/Whatsapp.jpeg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img 
          src={logo} 
          alt="WebMobi360 Logo" 
          className="footer-logo" />
          <p>
            Empower organizations of all sizes to harness the power of
            Artificial Intelligence and Machine Learning, transforming their
            operations, decision-making, and ultimately, their success.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">⮞ Home</a></li>
            <li><a href="Aboutus">⮞ About</a></li>
            <li><a href="#">⮞ Services</a></li>
            <li><a href="#">⮞ Blogs</a></li>
            <li><a href="#">⮞ Careers</a></li>
            <li><a href="#">⮞ News</a></li>
            <li><a href="#">⮞ Contact</a></li>
            <li><a href="#">⮞ Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">⮞ AIML Services</a></li>
            <li><a href="#">⮞ Digital Transformation</a></li>
            <li><a href="#">⮞ Data Analysis</a></li>
            <li><a href="#">⮞ Data Engineering</a></li>
            <li><a href="#">⮞ Digital Marketing & SEO</a></li>
            <li><a href="#">⮞ Website Application Building</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>
            101, Opposite to Sukhwani Gracia, Pashan Sus Road, Sus Ln, near
            Sunny’s World, Pune, Maharashtra 412115
          </p>
          <p>
            <FaEnvelope className="icon" />{" "}
            <a href="mailto:Hello@webmobi360.co">Hello@webmobi360.co</a>
          </p>
        
            <FaPhoneAlt className="icon" />{" "}
            <a href="tel:+919766331360">+9766331360</a>
      <div class="fixed-bottom right-100 p-3" style={{ zIndex: "6", left: "initial"}}>
       <a href="https://wa.me/919766331360" className="whatsapp-float" target="_blank">
       <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="50"/>
       </a>
      </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WebMobi360. All rights reserved.</p>
      </div>
      </footer>
    
  );
};

export default Footer;
