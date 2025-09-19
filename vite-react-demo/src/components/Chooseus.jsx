import Girlimg from "../images/chooseus_img.png";
import "./Chooseus.css";
import { motion as Motion } from "framer-motion";

const Chooseus = () => {
  const cards = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/2811/2811790.png",
      title: "Regulatory Expertise",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "Custom-Tailored Governance Solutions",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
      title: "Automated Compliance Tools",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
      title: "Proactive Risk Management",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/483/483408.png",
      title: "End-to-End Data Security",
    },
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // from right
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3, // stagger one by one
        type: "spring",
        stiffness: 70,
      },
    }),
  };

  return (
    <section className="chooseus-section">
      <div className="chooseus-left">
        <h1>Why Choose Us?</h1>
        <div className="chooseus-container">
          {cards.map((card, i) => (
            <Motion.div
              className="chooseus-card"
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <img src={card.img} alt={card.title} className="chooseus-img" />
              <h3>{card.title}</h3>
            </Motion.div>
          ))}
        </div>
      </div>

      <div>
        <img
          src={Girlimg}
          alt="Girl img"
          width="720px"
          className="chooseus_img"
        />
      </div>
    </section>
  );
};

export default Chooseus;
