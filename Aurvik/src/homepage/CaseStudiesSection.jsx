import React from "react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      company: "Manufacturing MSME",
      industry: "Industrial Equipment",
      savings: "₹2.4 Cr",
      result: "Saved annually through UAE structure",
    },
    {
      company: "IT Services Firm",
      industry: "Software Development",
      savings: "₹1.8 Cr",
      result: "Tax optimization in first year",
    },
    {
      company: "Export Business",
      industry: "Textiles",
      savings: "₹3.2 Cr",
      result: "Global expansion with 0% GST",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0f2145] mb-4">
          Success Stories: Real Results for Real Businesses
        </h2>
        <p className="text-lg text-gray-500 mb-16">
          See how we've helped Indian MSMEs transform their financial future
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-left"
            >
              <div className="text-[#c9a650] text-3xl font-bold mb-3">
                {study.savings}
              </div>
              <div className="text-[#0f2145] font-semibold text-lg mb-1">
                {study.company}
              </div>
              <div className="text-gray-500 text-sm mb-3">{study.industry}</div>
              <p className="text-[#0f2145] text-sm font-medium">
                {study.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
