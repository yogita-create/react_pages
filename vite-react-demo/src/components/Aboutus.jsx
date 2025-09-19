import React, {useEffect} from "react";
import img2 from "../images/Datapro1.jpg";
import "./Aboutus.css";
import { motion as Motion } from "framer-motion";


function Aboutus() {
    useEffect(() => {
    console.log("Aboutus loaded!");
  }, []);

  return(
   
    <section className="aboutus-section">
    <div className="aboutus-container">
         <Motion.img
      
                    src={img2} 
                    alt="seo image"
                    width="450px"
                    height= "330px"
                    className="about-image"
                  />
       <Motion.div className="aboutus-text"
       initial={{ opacity: 0, x: +140 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      >
        <div className="aboutus-text">
      <h1>About Us</h1>
      <p>In today's regulatory landscape, organizations must ensure that their data is secure, accurate, and compliant with evolvin laws and
        industry standards. Our Data Governance & Compliance Consulting services help businesses establish strong data policies, mitigate risks,
        and meet regulatory requirements like GDPR, HIPAA, SOC2 , and CCPA. From data classification and access control to compliance auditing and 
        risk assesment, we provide tailored solutions to protect your most valuable asset-your data.  
      </p>
      </div>
    </Motion.div>
    </div>
    
    </section>  
   

   
  );
}

export default Aboutus;