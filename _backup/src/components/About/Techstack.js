import React from "react";

import { DiReact, DiGit, DiAppstore, DiAndroid, DiHtml5 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiDebian,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

import { motion } from "framer-motion";

function Techstack() {
  return (
    <div className="row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        <DiReact />,
        <DiAppstore />,
        <DiAndroid />,
        <DiHtml5 />,
        <SiJavascript />,
        <SiTypescript />,
        <SiFirebase />,
        <DiGit />,
        <SiNextdotjs />,
        <SiDebian />,
        <FaNodeJs />,
        <SiPostgresql />
      ].map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.1 }}
          className="col-4 col-md-2 tech-icons"
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}

export default Techstack;
