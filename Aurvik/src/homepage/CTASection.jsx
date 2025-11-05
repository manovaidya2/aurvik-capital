import React from "react";
import { ArrowRight } from "lucide-react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center gap-2 rounded-md bg-blue-900 text-white font-medium text-base sm:text-lg px-6 sm:px-10 py-2 sm:py-3 transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const CTASection = () => (
  <section className="py-16 sm:py-20 bg-white text-center text-blue">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-snug">
        Ready to Transform Your Business?
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg md:text-xl text-blue-900 mb-6 sm:mb-8 max-w-2xl mx-auto">
        Join our free orientation session and discover how UAE business
        structure can save you crores in taxes.
      </p>

      {/* Button */}
      <Button>
        Book Your Free Orientation Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  </section>
);

export default CTASection;
