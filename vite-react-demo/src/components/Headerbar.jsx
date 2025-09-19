import logo from "../images/webmobi3601.jpg";
import { FaWhatsapp } from "react-icons/fa";

const Headerbar= () => {

return (
    
    <header className="header-bar">
    <div className="header-left">
      {/* Header Bar */}
      
        <img
          src={logo} // replace with your company logo URL
          alt="Company Logo"
          width="200px"
          className="company_logo"
        />
        <span className="contact-number">📞 +91 9766331360</span>
        <button
          className="connect-btn"
          onClick={() => alert("Want to connect!")}
        >
          <FaWhatsapp className="icon" />
          Want to Connect
        </button>
      </div>
      </header>
     
);
};

export default Headerbar;