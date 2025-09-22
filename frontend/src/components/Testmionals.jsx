import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jose ",
    role: "Startup Founder",
    feedback:
      "Working with Irtaza was a great experience. He delivered our website on time with clean, modern design and amazing performance.",
  },
  {
    name: "Sarah Smith",
    role: "E-commerce Owner",
    feedback:
      "Irtaza built my online store and integrated payment systems smoothly. My sales have grown since launching the new site!",
  },
  {
    name: "Michael Johnson",
    role: "Agency Manager",
    feedback:
      "Professional, reliable, and creative! He quickly understood our requirements and exceeded expectations with the final product.",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="text-white py-16 bg-gray-900">
      {/* Section Title */}
      <motion.h2
        className="flex justify-center text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 italic mb-4">“{test.feedback}”</p>
            <h4 className="text-lg font-semibold">{test.name}</h4>
            <p className="text-gray-400 text-sm">{test.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
