import React from "react";
import heroImg from "../assets/new.png"; 
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
  const ToGetPage=()=>{
    navigate("/getintouch");
  }
  return (
    <div className="heroMain flex items-center justify-between px-12 py-16  text-white">
      <div className="w-1/2 flex justify-center imagediv">
        <img
          src={heroImg}
          alt="Hero"
          className="w-2/4 shadow-lg imagesection"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start space-y-6">
        <h1 className="text-5xl font-extrabold">
          Hey there I am Irtaza
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a web developer specializing in modern React, Tailwind,
          and Next.js projects. I build fast, responsive, and user-friendly
          websites for businesses and individuals.
        </p>
        <button className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg shadow-md hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300"
        onClick={ToGetPage}>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Hero;
