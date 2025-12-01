import React from "react";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="footer"
    >
      <div className="row">
        <div className="col-md-4 footer-copywright">
          <h3>Designed and Developed by Kevin Macwan</h3>
        </div>
        <div className="col-md-4 footer-copywright">
          <h3>Copyright © {year} KM</h3>
        </div>
        <div className="col-md-4 footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/KevMac19"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/KevinMacwan4"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kevin-macwan-3327701a0/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/kev_mac19/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
