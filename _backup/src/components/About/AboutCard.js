import React from "react";

import { ImPointRight } from "react-icons/im";

import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="quote-card-view card"
    >
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kevin Macwan </span>
            from <span className="purple"> Anand, Gujarat, India.</span>
            <br />I am a React-Native Mobile App Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kevin</footer>
        </blockquote>
      </div>
    </motion.div>
  );
}

export default AboutCard;
