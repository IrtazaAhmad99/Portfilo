import React, { useState } from "react";
import Hero from "./Hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       
        <nav className="w-full bg-white/10 backdrop-blur-md px-6 sm:px-8 py-4">
          <div className="flex items-center justify-between">
           
            <Link
              to="/"
              className="text-xl sm:text-2xl px-3 py-2 rounded-lg font-bold text-white border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
            >
              Irtaza
            </Link>

            
            <ul className="hidden md:flex space-x-6 text-base lg:text-lg font-medium">
              <li>
                <Link
                  to="/"
                  className="px-3 py-2 rounded-lg text-white border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="px-3 py-2 rounded-lg text-white border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#skills"
                  className="px-3 py-2 rounded-lg text-white border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
                >
                  Skills
                </a>
              </li>
            </ul>

          
            <button
              className="md:hidden text-white p-2 rounded-lg border border-transparent hover:border-violet-500 hover:bg-violet-300 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          
          {menuOpen && (
            <ul className="flex flex-col mt-4 space-y-4 text-lg font-medium md:hidden">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 text-white rounded-lg hover:bg-violet-300 hover:text-black transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 text-white rounded-lg hover:bg-violet-300 hover:text-black transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 text-white rounded-lg hover:bg-violet-300 hover:text-black transition-all duration-300"
                >
                  Skills
                </a>
              </li>
            </ul>
          )}
        </nav>

        
        <div className="flex items-center justify-center h-full pt-10 sm:pt-16 md:pt-24">
          <Hero />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
