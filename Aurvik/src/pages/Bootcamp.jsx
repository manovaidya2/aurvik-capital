import React from "react";
import BootcampSection from "../bootcamp/BootcampSection";
import BootcampSchedule from "../bootcamp/BootcampSchedule";
import InvestmentSection from "../bootcamp/InvestmentSection";
import TestimonialsSection from "../bootcamp/TestimonialsSection";
import FinalCTASection from "../bootcamp/FinalCTASection";

function Bootcamp() {
  return (
    <div className="font-sans">
   <BootcampSection />
   <BootcampSchedule />
   <InvestmentSection />
   <TestimonialsSection />
   <FinalCTASection />
    </div>
  );
}

export default Bootcamp;
