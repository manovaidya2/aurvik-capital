import React from "react";

const HeroAboutSection = () => {
  return (
    <section className="py-30 bg-gradient-to-br from-[#0B4DA1] to-[#0B4DA1]/90 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
          Aurevik Capital
        </h1>
        <p className="text-2xl md:text-3xl mb-4 font-body">
          Building Global Pathways for Indian Businesses
        </p>
        <p className="text-lg md:text-xl text-white/90 font-body leading-relaxed max-w-3xl mx-auto">
          Empowering Indian MSMEs to achieve financial freedom through compliant
          global business structures and strategic wealth management
        </p>
      </div>
    </section>
  );
};

export default HeroAboutSection;
