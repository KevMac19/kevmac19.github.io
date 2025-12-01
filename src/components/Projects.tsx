"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Chatify",
    category: "Realtime Chat App",
    description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase.",
    image: "/assets/Projects/chatify.png",
    link: "https://chatify-49.web.app/",
    year: "2024"
  },
  {
    title: "Bits-0f-C0de",
    category: "Blog Platform",
    description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js.",
    image: "/assets/Projects/blog.png",
    link: "https://blogs.soumya-jit.tech/",
    year: "2023"
  },
  {
    title: "Editor.io",
    category: "Code Editor",
    description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website.",
    image: "/assets/Projects/codeEditor.png",
    link: "https://editor.soumya-jit.tech/",
    year: "2023"
  },
  {
    title: "Plant AI",
    category: "AI / ML",
    description: "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning.",
    image: "/assets/Projects/leaf.png",
    link: "https://plant49-ai.herokuapp.com/",
    year: "2022"
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="w-full py-24 bg-background text-foreground border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 sticky top-24">
              (003) <br/> Selected Works
            </h2>
          </div>
          <div className="col-span-1 md:col-span-8">
            <div className="flex flex-col">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group border-b border-black/10 py-12 relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link href={project.link} target="_blank" className="block">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                      <h3 className="text-4xl md:text-6xl font-bold font-sans uppercase group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm font-mono text-gray-500 mt-2 md:mt-0">{project.category} — {project.year}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <p className="text-lg font-light text-gray-600 max-w-md">
                        {project.description}
                      </p>
                      <div className="flex justify-end items-end">
                        <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                          View Project <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Hover Image Reveal */}
                    <motion.div
                      className="hidden md:block absolute top-1/2 right-0 w-[400px] h-[250px] pointer-events-none z-10"
                      initial={{ opacity: 0, scale: 0.8, x: 50, y: "-50%" }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        scale: hoveredIndex === index ? 1 : 0.8,
                        x: hoveredIndex === index ? 0 : 50,
                        y: "-50%"
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover grayscale"
                        />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
