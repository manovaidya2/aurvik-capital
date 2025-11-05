import React from "react";
import {
  Building2,
  Calculator,
  Globe2,
  TrendingUp,
  Shield,
  ArrowRight,
  Briefcase,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "UAE Business Setup",
      description:
        "Complete mainland, free zone, and offshore company formation with licensing and banking support.",
    },
    {
      icon: Calculator,
      title: "Tax Planning",
      description:
        "Strategic tax optimization and leakage analysis to maximize your savings legally and compliantly.",
    },
    {
      icon: Globe2,
      title: "Global Banking",
      description:
        "Corporate and personal UAE bank accounts setup with multi-currency support.",
    },
    {
      icon: TrendingUp,
      title: "Wealth Consolidation",
      description:
        "Family office services, investments, and succession planning for long-term wealth.",
    },
    {
      icon: Shield,
      title: "Virtual Operations",
      description:
        "Remote business management with legal compliance and operational support.",
    },
  ];

  return (
    <section className="py-10 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 flex items-center gap-3">
          <div className="p-3 bg-[#eef2f7] rounded-xl">
            <Briefcase className="w-8 h-8 text-[#0f2145]" />
          </div>
          <div>
            <h2 className="text-4xl font-heading font-bold text-[#0f2145] mb-2">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl font-body">
              End-to-end solutions for your UAE business journey
            </p>
          </div>
        </div>

        {/* Service Cards (Compact Layout) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left group h-[240px] flex flex-col justify-start"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-block p-3 bg-[#eef2f7] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#0f2145] transition-colors duration-300 group-hover:text-[#c9a650]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0f2145] mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button (Centered) */}
        <div className="mt-16 flex justify-center">
          <button className="inline-flex items-center gap-2 bg-[#0f2145] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#1a2d5d] transition group">
            Explore All Services
            <ArrowRight className="w-5 h-5 text-white group-hover:text-[#c9a650] transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
