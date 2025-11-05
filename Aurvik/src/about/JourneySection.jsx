import React from "react";

const timeline = [
  {
    year: "2017",
    title: "Research & Development",
    description: "Deep dive into UAE business structures",
  },
  {
    year: "2021",
    title: "Aurevik Capital Founded",
    description: "Launched with vision to help 100,000 MSMEs",
  },
  {
    year: "2023",
    title: "300+ Successful Clients",
    description: "Growing community of successful businesses",
  },
  {
    year: "2025",
    title: "Expansion Phase",
    description: "New services and partnerships launched",
  },
  {
    year: "2030",
    title: "Goal: 100,000 MSMEs",
    description: "Making 100,000 businesses financially free",
  },
];

const JourneySection = () => {
  return (
    <section className="bg-[#F6F8FA] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3764] mb-3">
          Our Journey
        </h2>
        <p className="text-gray-600 mb-12">
          From vision to transformation
        </p>

        {/* Timeline */}
        <div className="space-y-8 text-left">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start md:items-center gap-6">
              {/* Year Circle */}
              <div className="flex-shrink-0 w-16 h-16 bg-[#C6A44F] text-white rounded-full flex items-center justify-center text-lg font-bold">
                {item.year}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#0B3764]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
