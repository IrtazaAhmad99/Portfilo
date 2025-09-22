import React from "react";
import { motion } from "framer-motion";
import irtaza from "../assets/irtaza.png"

const AboutSection = () => {
  return (
    <div className="text-white py-16 bg-gray-900" id="about">
      {/* Section Title */}
      <motion.h2
        className="flex justify-center text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Profile Image */}
        <motion.img
          src={irtaza} // replace with your image path
          alt="Profile"
          className="w-60 h-60 object-cover rounded-2xl shadow-lg border-4 border-gray-700"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hi, I’m <span className="font-bold text-cyan-400">Irtaza Ahmad</span>, 
            a passionate <span className="font-semibold">Full-Stack Developer</span> 
            with 2+ years of experience building modern web applications.
            I specialize in React, Next.js, Node.js, and MongoDB, and I enjoy 
            crafting clean, responsive, and user-friendly solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My goal is to help businesses and individuals bring their ideas to life 
            through modern web development and AI-powered solutions. 
            I love problem-solving, designing intuitive interfaces, 
            and delivering projects that exceed client expectations.
          </p>

          <a
            href="/resume.pdf" // optional resume link
            download="irtazaCV.pdf"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
