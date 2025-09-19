import React, { useState, useEffect } from "react";
import "./AddressForm.css";
import Working_women from "../images/AddressForm_img.png";
import { motion as Motion } from "framer-motion";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captcha: ""
  });

  const [captcha, setCaptcha] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  // Run once when component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.captcha !== captcha) {
      alert("Captcha does not match! Please try again.");
      generateCaptcha();
      setFormData({ ...formData, captcha: "" });
      return;
    }

    // ✅ Save form data in localStorage
    localStorage.setItem("addressFormData", JSON.stringify(formData));

    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");

    // Clear fields and refresh captcha
    setFormData({
      name: "",
      email: "",
      message: "",
      captcha: ""
    });
    generateCaptcha();
  };

  return (
    <section className="addressform-section">
      <div className="addressform-container">
        {/* Left Side - Form */}
        <Motion.div
          className="addressform-box"
          initial={{ opacity: 1, y: 40 }}
          animate={{ opacity: 1, x: 130 }}
          transition={{ duration: 1.2 }}
        >
          <h2>Get in Touch With Us!</h2>
          <form onSubmit={handleSubmit} className="addressform">
            <input
              type="text"
              name="name"
              placeholder="Your Name:"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email:"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message:"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Captcha Area */}
            <div className="captcha-box">
              <div className="captcha-image">{captcha}</div>
              <button
                type="button"
                className="refresh-btn"
                onClick={generateCaptcha}
              >
                ⟳
              </button>
            </div>
            <input
              type="text"
              name="captcha"
              placeholder="Enter Captcha"
              value={formData.captcha}
              onChange={handleChange}
              required
            />

            <button type="submit" className="send-btn">
              Send Now →
            </button>
          </form>
        </Motion.div>

        {/* Right Side - Image */}
        <div className="AddressForm-img">
          <img src={Working_women} alt="Working women" width="500px" />
        </div>
      </div>
    </section>
  );
};

export default AddressForm;
