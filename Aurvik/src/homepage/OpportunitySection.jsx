import React from "react";

const OpportunitySection = () => (
  <section className="py-20 bg-[#f9fafb]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
          The UAE Opportunity: Your Gateway to Global Growth
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
          Discover how a legally structured UAE business can transform your financial future
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { value: "0-9%", label: "Corporate Tax", note: "Compared to 30%+ in India" },
          { value: "0%", label: "GST/VAT on Exports", note: "No indirect taxes on international sales" },
          { value: "100%", label: "Foreign Ownership", note: "Full control of your business entity" },
          { value: "Stable", label: "Currency", note: "AED pegged to USD for stability" },
          { value: "Global", label: "Banking Access", note: "Multi-currency accounts worldwide" },
          { value: "Legal", label: "& Compliant", note: "100% lawful tax optimization" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center p-10"
          >
            <div className="text-4xl font-bold text-[#c9a650] mb-2">{item.value}</div>
            <div className="text-[#0f2145] font-semibold text-lg mb-2">{item.label}</div>
            <p className="text-gray-500 text-sm">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OpportunitySection;
