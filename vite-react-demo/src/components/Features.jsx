import React from "react";
import { useRef ,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Features.css";

//Import images
import Officework from "../images/Officework.jpg";
import Employee from "../images/Employee.jpg";
import Leader from "../images/Leader.jpg";
import Map from "../images/Map.jpg";
import Riskassesment from "../images/risk.jpeg";
import Talks1 from "../images/Talks1.jpg";

const featuresData = [
  {
    img: Officework,
    title: "Comprehensive Data Governance Frameworks",
    description: "Develop and enforce policies for data security, usage, and compliance."
  },
  {
    img: Employee,
    title: "Automated Compliance Monitoring",
    description: "Real-time tracking of compliance adherence and potential risks."
  },
  {
    img: Leader,
    title: "Data Access & Identity Management",
    description: "Control user permissions and prevent unauthorized data access."
  },
  {
    img: Map,
    title: "Advanced Data Security",
    description: "Safeguard sensitive data with encryption and secure access protocols."
  },
  {
    img: Riskassesment,
    title: "Risk Assessment & Reporting",
    description: "Identify vulnerabilities and generate compliance reports efficiently."
  },
  {
    img: Talks1,
    title: "Policy Management",
    description: "Create, manage, and enforce company-wide governance policies."
  }
];

const Features = () => {
  const sliderRef = useRef(null);
  useEffect(() => { 
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 800,
        settings: { slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 5000, 
        speed: 500,        
        centerMode: true,    
        arrows: true,
        dots: true
         
         },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1,
                    slidesToScroll: 1, 
                    initialSlides: 0,
                    autoplaySpeed: 5000,
                    centerMode: true,    
                    arrows: true,
                    dots: true
    

        },
      },
    ],
  };

  return (
    <section className="features-section">
      <h2 className="features-title">Features</h2>
      <Slider  ref={sliderRef} {...settings}>
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <img
              src={feature.img}
              alt={feature.title}
              className="feature-img"
              onError={(e) => (e.target.src = "https://via.placeholder.com/300*200")}
            />
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
  
};

export default Features;
