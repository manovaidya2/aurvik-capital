import React from "react";
import { Heart, Award, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with complete transparency and ethical practices in all our client relationships.",
  },
  {
    icon: Award,
    title: "Compliance",
    description:
      "100% lawful and compliant solutions that stand up to any regulatory scrutiny.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Creative financial structures that optimize your global business potential.",
  },
  {
    icon: Target,
    title: "Wealth Creation",
    description:
      "Focused on building sustainable wealth for Indian entrepreneurs globally.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#002147] mb-3">
          Our Core Values
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          The principles that guide every decision we make
        </p>

        {/* Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl p-6 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-50 p-5 rounded-full">
                    <Icon className="text-[#0b3d91] w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#002147] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
