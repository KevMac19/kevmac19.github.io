"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

const skills = [
  "React Native", "Next.js", "TypeScript", "Python", "Django", "GitHub Actions", "Node.js", "Firebase", "PostgreSQL",
  "Tailwind CSS", "Framer Motion", "Git", "UI/UX Design"
];

const stats = [
  { label: "Years Experience", value: "03+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Open Source", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-background text-foreground border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 sticky top-24">
              (001) <br/> About Me
            </h2>
          </div>
          <div className="col-span-1 md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-sans font-light leading-tight"
            >
              I am a passionate developer based in India, focused on creating digital experiences that bridge the gap between <span className="text-primary font-medium">functionality</span> and <span className="text-primary font-medium">aesthetics</span>.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-24 border-y border-black/10 py-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="text-4xl md:text-8xl font-bold font-sans text-primary mb-2">{stat.value}</span>
              <span className="text-[10px] md:text-sm font-mono uppercase tracking-widest text-gray-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-xl font-bold font-sans uppercase">Technical Arsenal</h3>
          </div>
          <div className="col-span-1 md:col-span-8">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-xl md:text-2xl font-sans hover:text-primary transition-colors cursor-default"
                >
                  {skill} <span className="text-gray-300 ml-4">/</span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Github Calendar */}
        <div className="w-full border-t border-black/10 pt-12">
           <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8">
              (002) <br/> Activity
            </h3>
            <div className="w-full overflow-x-auto pb-4">
              <GitHubCalendar
                username="KevMac19"
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                colorScheme="light"
                style={{ color: "#FF4D00" }}
              />
            </div>
        </div>

      </div>
    </section>
  );
}
