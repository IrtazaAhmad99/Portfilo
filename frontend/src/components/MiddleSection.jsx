import React from 'react'
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiExpress, SiBootstrap, SiFigma } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdDesignServices, MdSearch } from "react-icons/md";


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MiddleSection = () => {
  return (
    <div className="text-white middsection py-12" id= "skills">
      {/* Section Title */}
      <motion.h2
        className="flex justify-center text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // animate only once
      >
        My Skills
      </motion.h2>

      {/* Skill Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ always: true, amount: 0.2 }}
      >
        {[
          { icon: <FaHtml5 size={50} className="text-orange-500" />, label: "HTML5" },
          { icon: <FaCss3Alt size={50} className="text-blue-400" />, label: "CSS3" },
          { icon: <FaJs size={50} className="text-yellow-400" />, label: "JavaScript" },
          { icon: <FaReact size={50} className="text-cyan-400" />, label: "React" },
          { icon: <SiNextdotjs size={50} />, label: "Next.js" },
          { icon: <FaNodeJs size={50} className="text-green-500" />, label: "Node.js" },
          { icon: <SiExpress size={50} />, label: "Express.js" },
          { icon: <SiMongodb size={50} className="text-green-400" />, label: "MongoDB" },
          { icon: <SiTailwindcss size={50} className="text-sky-400" />, label: "Tailwind CSS" },
          { icon: <FaWordpress size={50} className="text-blue-500" />, label: "WordPress" },
          { icon: <GiArtificialIntelligence size={50} className="text-purple-500" />, label: "AI Agents" },
          { icon: <SiBootstrap size={50} className="text-violet-500" />, label: "Bootstrap" },
          { icon: <FaGithub size={50} />, label: "Git & GitHub" },
          { icon: <span className="text-4xl">🔗</span>, label: "REST APIs" },
          { icon: <SiFigma size={50} className="text-pink-400" />, label: "Figma (UI/UX)" },
          { icon: <MdDesignServices size={50} className="text-teal-400" />, label: "Responsive Design" },
          { icon: <MdSearch size={50} className="text-yellow-500" />, label: "SEO Optimization" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            {skill.icon}
            <p className="mt-2">{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MiddleSection;
