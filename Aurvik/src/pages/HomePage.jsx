import React from "react";

import HeroSection from "../Homepage/HeroSection";
import ProblemSection from "../homepage/ProblemSection";
import OpportunitySection from "../homepage/OpportunitySection";
import ServicesSection from "../homepage/ServicesSection";
import CaseStudiesSection from "../homepage/CaseStudiesSection";
import QuoteBanner from "../homepage/QuoteBanner";
import CTASection from "../homepage/CTASection";

function App() {
  return (
    <div className="font-sans">
    
      <HeroSection />
      <ProblemSection />
      <OpportunitySection />
      <ServicesSection />
      <CaseStudiesSection />
      <QuoteBanner />
      <CTASection />
    </div>
  );
}

export default App;
