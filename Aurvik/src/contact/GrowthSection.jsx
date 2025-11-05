import React from "react";

export default function GrowthSection() {
  return (
    <section className="bg-[#1E4D8E] text-white text-center py-20 sm:py-24 px-4 sm:px-6 mt-10 sm:mt-16 md:mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Let's Talk About Your Growth
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Book your free orientation session and discover how we can help your
          business expand globally.
        </p>
      </div>
    </section>
  );
}
