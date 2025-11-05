import React from "react";
import heroImage from "../images/hero-dubai.jpg"; // Ensure correct path

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-28 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight">
          Expand Beyond Borders — <br className="hidden sm:block" />
          Build, Grow & Protect <br className="hidden sm:block" /> Your Business in the UAE
        </h1>

        {/* Subheading */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 px-2 sm:px-0">
          Helping Indian MSMEs save taxes, scale globally & achieve financial freedom legally.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button className="w-full sm:w-auto bg-blue-800 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium transition">
            Book Free Orientation →
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md text-lg font-medium transition">
            Join Bootcamp
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
