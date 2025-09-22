import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:pt-30 px-2 pt-24 text-center space-y-8 md:w-1/2 mx-auto">
        <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug capitalize">
          Make your interior more minimalistic & modern
        </h1>

        <p className="text-2xl text-gray-300 font-normal lg:w-2xl mx-auto">
          Turn your room with panto into a lot more minimalistand modern with
          ease and speed
        </p>

        {/* Search button design */}
        <div className="relative inline-block border-x-blue-300">
          <input className="bg-white/15 w-80 px-6 py-2 rounded-full border border-gray-300 focus:outline-none" type="text" placeholder="Search furniture" />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-full cursor-pointer hover:bg-white hover:text-primary transition-colors duration-300 ease-in-out">
          <FaSearch />
        </div>
        </div>
        {/* blur shadow bottom background */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2
         bg-gradient-to-t from-white via-transparent to-transparent blur=sm"/>
        
      </div>
    </section>
  );
};

export default Hero;
