import React from "react";
import { Target, Lightbulb } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-[#F9FBFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-[#FFF8E7] rounded-full p-5 flex items-center justify-center">
              <Target className="text-[#C6A44F]" size={36} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0B3764] mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To make 100,000 Indian MSMEs financially free by 2030 through
                global business expansion, tax optimization, and wealth
                consolidation strategies that are 100% legal and compliant.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-[#E9F2FF] rounded-full p-5 flex items-center justify-center">
              <Lightbulb className="text-[#0B4DA1]" size={36} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0B3764] mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver comprehensive, lawful global business structures and
                tax optimization solutions that help Indian entrepreneurs scale
                their businesses internationally while maximizing wealth
                creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
