import React from 'react'
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Store",
    desc: "A full-stack online store with cart, checkout, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
  
   
  },
  {
    title: "Food Ordering App",
    desc: "Order food online with real-time tracking and authentication.",
    tech: ["Next.js", "Express", "MongoDB"],
   
  },
  {
    title: "Chat Application",
    desc: "Real-time chat app with WebSocket and JWT authentication.",
    tech: ["React", "Node.js", "Socket.io"],
   
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProjectSection = () => {
  return (
    <div className="text-white projectsection py-12">
      {/* Title */}
      <motion.h2
        className="flex justify-center text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-gray-700 px-2 py-1 rounded text-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
