import React, { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Manufacturing MSME, Mumbai",
      text: `"The bootcamp opened my eyes to opportunities I never knew existed. Within 6 months of implementing their recommendations, we saved ₹1.8 Cr in taxes legally."`,
    },
    {
      name: "Priya Sharma",
      role: "IT Services, Bangalore",
      text: `"Incredibly detailed and practical. The team doesn’t just teach theory – they show you exactly how to implement it. Best investment I made for my business."`,
    },
    {
      name: "Amit Patel",
      role: "Export Business, Ahmedabad",
      text: `"From skeptical to convinced in 3 days. The bootcamp is packed with real insights and the follow-up support is exceptional. Highly recommended!"`,
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="bg-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-3">
          What Participants Say
        </h2>
        <p className="text-gray-600 mb-12">
          Join hundreds of successful MSMEs who transformed their businesses
        </p>

        {/* --- Slider Wrapper --- */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full flex justify-center items-stretch"
              >
                <div className="grid md:grid-cols-3 gap-8 w-full">
                  {testimonials.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F9FBFF] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-left flex flex-col justify-between"
                    >
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array(5)
                          .fill(0)
                          .map((_, star) => (
                            <span
                              key={star}
                              className="text-[#CDA349] text-lg"
                            >
                              ★
                            </span>
                          ))}
                      </div>

                      <p className="text-gray-600 italic mb-6 leading-relaxed">
                        {item.text}
                      </p>

                      <div>
                        <h4 className="font-semibold text-[#002147] text-lg">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* --- Dots --- */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  current === idx ? "bg-[#002147]" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
