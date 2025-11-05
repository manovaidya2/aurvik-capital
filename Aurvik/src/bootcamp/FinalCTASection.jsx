import React from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="bg-[#1E4D8E] text-white py-14 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading - force single line */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
          Ready to Transform Your Business?
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-200 mb-2">
          Limited seats available. Next batch starts{" "}
          <span className="font-medium text-white">May 15, 2025</span>
        </p>

        {/* Highlighted Line */}
        <p className="text-[#E5B54C] font-semibold text-lg mb-10">
          Only 12 spots remaining at Early Bird price!
        </p>

        {/* CTA Button */}
        <button
          className="relative bg-[#0E6FFF] hover:bg-[#0c5ed9] text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(14,111,255,0.4)] transition-all duration-300 flex items-center justify-center mx-auto gap-2"
        >
          Secure Your Spot Now - ₹9,999
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Guarantee Text */}
        <p className="text-gray-300 text-sm mt-6">
          30-day money-back guarantee if you're not completely satisfied
        </p>
      </div>
    </section>
  );
}
