import React from "react";

import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="project-card-view card"
    >
      <img className="card-img-top" src={props.imgPath} alt="card-img" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text" style={{ textAlign: "justify" }}>
          {props.description}
        </p>
        <a className="btn btn-primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </a>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <a
            className="btn btn-primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </a>
        )}
      </div>
    </motion.div>
  );
}
export default ProjectCards;
