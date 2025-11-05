import React from "react";

const QuoteBanner = () => (
  <section
    className="py-24 text-center bg-gradient-to-r from-[#0f3b7a] via-[#1b4d96] to-[#c9a650]"
  >
    <div className="max-w-5xl mx-auto px-6">
      <blockquote className="text-3xl lg:text-4xl font-heading font-bold text-white max-w-4xl mx-auto animate-fade-in">
        "We're not escaping the system — we're redesigning it legally and
        ethically for global success."
      </blockquote>
      <p className="text-white/80 mt-6 text-lg font-body">— Aurevik Capital Team</p>
    </div>
  </section>
);

export default QuoteBanner;
