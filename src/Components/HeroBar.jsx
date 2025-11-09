import React from "react";
import { NavLink } from "react-router";

const HeroBar = () => {
  return (
    <div>
      <div className="hero bg-white min-h-[50vh] px-2">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          {/* Right side image */}
          <img
            src="https://plus.unsplash.com/premium_photo-1681885032909-8d645ac23be4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
            alt="Farmers working together"
            className="hero bg-white min-h-[50vh] px-5 sm:px-5 md:px-5 overflow-x-hidden"
          />

          {/* Left side text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 leading-tight">
              KrishiLink – Farmer’s Growth & Connection Platform
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              A modern platform empowering{" "}
              <span className="text-green-600 font-semibold">farmers</span>,
              <span className="text-green-600 font-semibold"> traders</span>,
              and
              <span className="text-green-600 font-semibold">
                {" "}
                consumers
              </span>{" "}
              to grow, sell, and connect directly — beyond traditional markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
             <h1 className="font-bold text-3xl">Explore The Website To Know About Our Sercives</h1>
            </div>
            <div>
              <NavLink to="/register"><button className="font-bold bg-violet-600 text-white px-3 py-2  rounded-md m-5">Register</button></NavLink>
              <NavLink to="/login"><button className="font-bold bg-violet-600 text-white px-3 py-2 rounded-md m-5">Log-In</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBar;
