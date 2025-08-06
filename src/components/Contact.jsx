import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
      data-aos-duration="1000">
          <a href="tel:+919772837041" className="items">
            <FaPhoneVolume className="icons" />
          </a>

          <a href="https://www.linkedin.com/in/sahil-vashisth/" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/Sahilvashisth01" className="items">
            <FaSquareGithub className="icons" />
          </a>
          <a href=" mailto:sahilvashisth001@gmail.com" target="_blank" className="items">
            <MdMarkEmailUnread className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
