"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-black text-white py-24">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col items-center justify-center mb-24">
          <h2 className="text-[12vw] font-bold font-sans uppercase leading-none text-center tracking-tighter hover:text-primary transition-colors duration-500 cursor-pointer">
            Let's Talk
          </h2>
          <a href="mailto:kevinmacwan@example.com" className="text-xl md:text-2xl font-mono mt-8 border-b border-white/30 pb-1 hover:border-primary hover:text-primary transition-colors">
            hello@kevinmacwan.dev
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-12 items-end">
          <div className="col-span-1 md:col-span-4">
            <span className="text-sm font-mono uppercase tracking-widest text-gray-500">
              © {year} Kevin Macwan
            </span>
          </div>

          <div className="col-span-1 md:col-span-4 flex justify-center">
            <span className="text-sm font-mono uppercase tracking-widest text-gray-500">
              Made with Next.js & Tailwind
            </span>
          </div>

          <div className="col-span-1 md:col-span-4 flex justify-end gap-6">
             <Link href="https://github.com/KevMac19" target="_blank" className="text-xl hover:text-primary transition-colors">
                <FaGithub />
             </Link>
             <Link href="https://twitter.com/KevinMacwan4" target="_blank" className="text-xl hover:text-primary transition-colors">
                <FaTwitter />
             </Link>
             <Link href="https://www.linkedin.com/in/kevin-macwan-3327701a0/" target="_blank" className="text-xl hover:text-primary transition-colors">
                <FaLinkedinIn />
             </Link>
             <Link href="https://www.instagram.com/kev_mac19/" target="_blank" className="text-xl hover:text-primary transition-colors">
                <FaInstagram />
             </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
