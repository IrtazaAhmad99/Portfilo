import React from "react";
import Hero from "./Hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white/10 backdrop-blur-md">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl px-4 py-2 rounded-lg font-bold text-white border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
          >
            Irtaza
          </Link>

          {/* Nav Links */}
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="px-4 py-2 rounded-lg text-white border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="px-4 py-2 rounded-lg text-white border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <a
                href="#skills"
                className="px-4 py-2 rounded-lg text-white border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="flex items-center justify-center h-full">
          <Hero />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
