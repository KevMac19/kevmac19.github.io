"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20">

      {/* Marquee Background */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between opacity-5 pointer-events-none select-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex overflow-hidden w-full">
            <div className={`flex whitespace-nowrap text-[10vw] font-bold font-sans uppercase leading-none text-foreground ${i % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
              <span className="mr-8">React Native — Next.js — TypeScript — Python — Django — GitHub Actions — Node.js — Firebase — UI/UX —</span>
              <span className="mr-8">React Native — Next.js — TypeScript — Python — Django — GitHub Actions — Node.js — Firebase — UI/UX —</span>
            </div>
            <div className={`flex whitespace-nowrap text-[10vw] font-bold font-sans uppercase leading-none text-foreground ${i % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`} aria-hidden="true">
              <span className="mr-8">React Native — Next.js — TypeScript — Python — Django — GitHub Actions — Node.js — Firebase — UI/UX —</span>
              <span className="mr-8">React Native — Next.js — TypeScript — Python — Django — GitHub Actions — Node.js — Firebase — UI/UX —</span>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

          {/* Main Typography */}
          <div className="col-span-1 md:col-span-8">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[8vw] leading-[0.9] font-bold font-sans tracking-tighter text-foreground uppercase"
            >
              Creative<br/>
              <span className="text-primary">Developer</span>
            </motion.h1>
          </div>

          {/* Intro Text & Image */}
          <div className="col-span-1 md:col-span-4 flex flex-col justify-end pb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[3/4] mb-6 grayscale hover:grayscale-0 transition-all duration-500"
            >
               {/* Replace with actual image path */}
              <Image
                src="/assets/hero-avatar.png"
                alt="Kevin Macwan"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 leading-relaxed text-justify"
            >
              Hi, I'm Kevin Macwan. I craft high-end digital experiences. Specializing in React Native and Next.js, I build applications that are as functional as they are beautiful.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4"
      >
        <div className="w-12 h-[1px] bg-foreground"></div>
        <span className="text-xs font-mono uppercase tracking-widest text-foreground">Scroll</span>
      </motion.div>

    </section>
  );
}
