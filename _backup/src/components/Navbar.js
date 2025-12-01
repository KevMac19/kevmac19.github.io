import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={navColour ? "sticky navbar" : "navbar"}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            style={{ fontFamily: "Raleway", fontWeight: "bold" }}
            className="purple"
          >
            Km.
          </motion.h1>
        </Link>

        <div className="navbar-toggle" onClick={() => updateExpanded(!expand)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-collapse ${expand ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/resume" className="nav-link" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="https://medium.com/@kmacwan86"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
