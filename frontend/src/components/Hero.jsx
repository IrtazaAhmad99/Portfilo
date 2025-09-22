import React from "react";
import heroImg from "../assets/new.png"; 
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const ToGetPage = () => {
    navigate("/getintouch");
  };

  return (
    <div className=" flex flex-row items-center justify-between text-white px-2 sm:px-4 md:px-12 lg:px-20 min-h-[70vh]">
      
     
      <div className="w-1/2 flex justify-center">
        <img
          src={heroImg}
          alt="Hero"
          className="w-[80%] sm:w-[70%] md:w-[75%] lg:w-[65%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg imagesection"
        />
      </div>

   
      <div className="w-1/2 flex flex-col items-start space-y-3 sm:space-y-4 md:space-y-6 text-left px-2 sm:px-4">
        <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
          Hey there, I am <span className="text-violet-400">Irtaza</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-md">
          I am a web developer specializing in modern React, Tailwind,
          and Next.js projects. I build fast, responsive, and user-friendly
          websites for businesses and individuals.
        </p>
        <button
          onClick={ToGetPage}
          className="px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-violet-600 hover:bg-violet-500 rounded-lg shadow-md hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Hero;

