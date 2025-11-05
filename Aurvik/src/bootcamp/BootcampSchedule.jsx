import React from "react";

export default function BootcampSchedule() {
  const schedule = [
    {
      day: "Day 1",
      title: "Understanding Tax Leakages",
      points: [
        "Current Indian tax landscape for MSMEs",
        "Hidden costs: GST, corporate tax, and compliance",
        "Case studies: Where businesses lose money",
        "Introduction to global tax structures",
      ],
    },
    {
      day: "Day 2",
      title: "UAE Business Structure Deep Dive",
      points: [
        "Mainland vs Free Zone vs Offshore comparison",
        "Legal compliance and regulatory framework",
        "Banking, visa, and operational setup",
        "Real-world implementation roadmap",
      ],
    },
    {
      day: "Day 3",
      title: "Your Personalized Roadmap",
      points: [
        "Financial assessment and tax analysis",
        "Customized UAE structure recommendation",
        "Implementation timeline and costs",
        "Q&A and next steps guidance",
      ],
    },
  ];

  return (
    <section className="bg-[#F8FBFF] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">
          3–Day Intensive Schedule
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A comprehensive journey from understanding tax leakages to creating
          your personalized UAE business roadmap
        </p>

        {/* Schedule Cards */}
        <div className="space-y-8">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-xl p-8 text-left flex items-start gap-6 border border-gray-100"
            >
              {/* Day Badge */}
              <div className="flex-shrink-0">
                <div className="bg-[#CDA349] text-white text-sm font-semibold w-16 h-16 rounded-full flex items-center justify-center">
                  {item.day}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#002147] mb-3">
                  {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
