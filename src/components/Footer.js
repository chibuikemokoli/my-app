import "./FooterStyles.css";

import React from "react";

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }} />
          <div>
            <p>123 doings</p>
            <p>Nigeria</p>
          </div>

          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }} />+123 344 3354</h4>
          </div>

          <div className="phone">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }} />mail@mail.com</h4>
          </div>
        </div>
      </div>

      <div className="right">
        <h4>About the company </h4>
        <p>Lorem ipsum dolor sit amet contactecteurLorem ipsum dolor sit amet contactecteur </p>
        <div className="social">
          <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem" }} />
          <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem" }} />
          <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem" }} />
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
