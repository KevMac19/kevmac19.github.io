import React from "react";

import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

import { motion } from "framer-motion";

function About() {
  return (
    <div className="about-section">
      <Particle />
      <div className="container">
        <div className="row" style={{ justifyContent: "center", padding: "10px" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-md-7"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-md-5 about-img"
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="project-heading"
        >
          Professional <strong className="purple">Skillset </strong>
        </motion.h1>

        <Techstack />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="project-heading"
        >
          <strong className="purple">Tools</strong> I use
        </motion.h1>
        <Toolstack />

        <Github />
      </div>
    </div>
  );
}

export default About;
