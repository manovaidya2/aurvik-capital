import React from "react";
import taxComparison from "../images/tax-comparison.jpg";

const ProblemSection = () => (
  <section className="py-20 bg-secondary">
    <div className="section-container px-6 lg:px-16"> {/* ✅ Added padding on sides */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up lg:pl-8"> {/* ✅ Added left padding on large screens */}
       <h2
  className="text-4xl font-heading font-bold text-foreground mb-6"
>
  The Problem: You're Growing, But So Are Your Taxes
</h2>

          <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
           As an Indian MSME, you're facing increasing tax burdens, complex GST compliance, and limited global expansion opportunities. Your hard-earned profits are being consumed by taxation, leaving less for reinvestment and growth.
          </p>
          <ul className="space-y-3 font-body">
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span> Corporate tax up to 30% + GST 18% in India
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span> Limited global market access and currency exposure
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span> Complex compliance and regulatory burdens
            </li>
          </ul>
        </div>

        <div className="animate-fade-in">
          <img
            src={taxComparison}
            alt="Tax Comparison India vs UAE"
            className="rounded-lg shadow-lg lg:ml-8" // ✅ Added margin-left for spacing
          />
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
