import React from "react";

export default function InvestmentSection() {
  const inclusions = [
    "Lifetime access to bootcamp materials",
    "Private community of like-minded entrepreneurs",
    "Monthly Q&A sessions with founders",
    "Exclusive discounts on our services",
    "Priority support for implementation",
    "Bonus: Tax calculation toolkit",
  ];

  const breakdown = [
    { label: "3-Day Live Training", price: "₹15,000" },
    { label: "Course Materials & Tools", price: "₹5,000" },
    { label: "Community Access", price: "₹3,000" },
    { label: "Ongoing Support", price: "₹7,000" },
  ];

  return (
    <section className="bg-[#F8FBFF] py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">
            What's Included in Your Investment
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Beyond the 3-day intensive training, you get lifetime access to
            resources, community, and ongoing support to ensure your success.
          </p>

          <ul className="space-y-3 text-gray-700">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#CDA349] text-lg leading-6">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-8 border border-gray-100 w-full max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-[#002147] mb-6 text-center">
            Investment Breakdown
          </h3>

          <div className="divide-y divide-gray-200 text-gray-700 mb-6">
            {breakdown.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 text-sm md:text-base"
              >
                <span>{item.label}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}

            <div className="flex justify-between py-3 font-semibold text-[#CDA349]">
              <span>Total Value</span>
              <span>₹30,000</span>
            </div>
          </div>

          {/* Price Box */}
          <div className="bg-[#FFF8E7] rounded-xl py-5 px-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Early Bird Price</div>
            <div className="text-3xl font-bold text-[#CDA349] mb-1">
              ₹9,999
            </div>
            <div className="text-sm text-gray-500">Save ₹20,000</div>
          </div>
        </div>
      </div>
    </section>
  );
}
