import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { skill: "JavaScript", duration: "2 Years" },
  { skill: "React.js", duration: "2 Years" },
  { skill: "Next.js", duration: "1.5 Years" },
  { skill: "Node.js & Express.js", duration: "1.5 Years" },
  { skill: "MongoDB", duration: "1 Year" },
  { skill: "Tailwind CSS", duration: "2 Years" },
  { skill: "AI Agents", duration: "6 Months" },
];

const ExperienceSection = () => {
  return (
    <div className="text-white ExperienceSection py-12">
      <motion.h2
        className="flex justify-center text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ always: true }}
      >
        My Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-[1.03] transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ always: true }}
          >
            <h3 className="text-xl font-semibold">{exp.skill}</h3>
            <p className="text-gray-400">{exp.duration} Experience</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
