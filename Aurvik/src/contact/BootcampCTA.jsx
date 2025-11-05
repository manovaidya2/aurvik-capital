import React from "react";
import { ArrowRight } from "lucide-react";

export default function BootcampCTA() {
  return (
    <section className="bg-[#184C8A] text-white text-center py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prefer to Start with a Bootcamp?
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
          Join our 3-day Beyond Borders Bootcamp and get comprehensive knowledge
          before making any commitments
        </p>

        {/* Button */}
        <button className="bg-[#1E63C5] hover:bg-[#1956AB] text-white font-medium px-8 py-3 rounded-md shadow-md flex items-center justify-center gap-2 mx-auto transition-all">
          View Bootcamp Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
