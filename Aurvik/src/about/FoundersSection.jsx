import React from "react";
import img1 from "../images/founder-rakesh-CbGoKjwl.jpg";

const founders = [
  {
    name: "Dr. Rakesh Aggarwal",
    title: "Co-Founder & CEO",
    description:
      "With over 20 years in international business consulting and financial planning, Dr. Aggarwal brings deep expertise in cross-border tax optimization and wealth structuring for Indian businesses expanding globally.",
    image: img1,
  },
  {
    name: "Anant Aggarwal",
    title: "Co-Founder & COO",
    description:
      "A dynamic entrepreneur with expertise in UAE business establishment and modern financial technologies. Anant leads our operations team and drives innovation in our service delivery model.",
    image: img1,
  },
];

const FoundersSection = () => {
  return (
    <section className="py-12 bg-[#F6F8FA]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3764] mb-3">
          Meet Our Founders
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-[15px]">
          Visionary leaders with decades of combined experience in international
          business and finance
        </p>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {founders.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-[#0B3764]">
                {person.name}
              </h3>
              <p className="text-[#C6A44F] font-semibold mt-1 mb-3 text-sm">
                {person.title}
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
