import React from "react";
import HeroAboutSection from "../about/HeroAboutSection";
import VisionMissionSection from "../about/VisionMissionSection";
import FoundersSection from "../about/FoundersSection";
import CoreValuesSection from "../about/CoreValuesSection";
import JourneySection from "../about/JourneySection";

function About() {
  return (
    <div className="font-sans">
    <HeroAboutSection />
    <VisionMissionSection />
    <FoundersSection />
    <CoreValuesSection />
    <JourneySection />
 
    </div>
  );
}

export default About;
