import React from "react";
import HeroCDOE from "../sections/CDOE/HeroCDOE";
import CDOEInfoSection from "../sections/CDOE/infoCDOE";
import WhyChooseCDOE from "../sections/CDOE/WhyChooseCDOE";
import ProgramSectionCDOE from "../sections/CDOE/ProgramSection";
import FacultyCDOE from "../sections/CDOE/HolisticsCDOE";
// import LearningOpportunitieCDOE from "../sections/CDOE/learningOpportunitieSection";
import PlacementCDOE from "../sections/CDOE/PlacementSupportCDOE";
import DirectorsMessageCDOE from "../sections/CDOE/DirectorsMessage";
import TestimonialsSectionCDOE from "../sections/CDOE/TestimonialsCDOE";

const CDOE = () => {
  return (
    <div>
      <HeroCDOE />
      <CDOEInfoSection />
      <WhyChooseCDOE />
      <DirectorsMessageCDOE />
      <ProgramSectionCDOE />
      <FacultyCDOE />
      {/* <LearningOpportunitieCDOE /> */}
      <PlacementCDOE />
      {/* <TestimonialsSectionCDOE /> */}
    </div>
  );
};

export default CDOE;
