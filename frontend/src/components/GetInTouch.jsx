import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // clear form
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <div className="text-white py-16 bg-gray-900" id="contact">
      {/* Section Title */}
      <motion.h2
        className="flex justify-center text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
        />

        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold text-white shadow-md transition-colors"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-gray-300 mt-4">{status}</p>
        )}
      </motion.form>
    </div>
  );
};

export default ContactSection;
