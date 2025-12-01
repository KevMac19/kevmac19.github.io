import React from "react";

import { FaGithub } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiJira,
  SiAzuredevops,
  SiAndroidstudio,
  SiXcode,
  SiFigma,
  SiGithubactions,
} from "react-icons/si";

import { motion } from "framer-motion";

function Toolstack() {
  return (
    <div className="row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        <SiVisualstudiocode />,
        <SiAndroidstudio />,
        <SiXcode />,
        <SiFigma />,
        <SiPostman />,
        <SiVercel />,
        <SiJira />,
        <SiAzuredevops />,
        <SiGithubactions />,
        <FaGithub />
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

export default Toolstack;
