import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>harish1090prasad@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/HarishTPrasad">
          <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/harish-prasad-75a680243/">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/harrryyyy_13/">
          <Insta color="white" size={"3rem"} />
          </a>
        
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
