import React from "react";
import HeroCDOE from "../sections/CDOE/HeroCDOE";
import CDOEInfoSection from "../sections/CDOE/infoCDOE";
import WhyChooseCDOE from "../sections/CDOE/WhyChooseCDOE";
import ProgramSectionCDOE from "../sections/CDOE/ProgramSection";
import FacultyCDOE from "../sections/CDOE/Faculty";
import LearningOpportunitieCDOE from "../sections/CDOE/learningOpportunitieSection";
import PlacementCDOE from "../sections/CDOE/PlacementSupportCDOE";
import DirectorsMessageCDOE from "../sections/CDOE/DirectorsMessage";

const CDOE = () => {
  return (
    <div>
      <HeroCDOE />
      <CDOEInfoSection />
      <WhyChooseCDOE />
      <ProgramSectionCDOE />
      <FacultyCDOE />
      <LearningOpportunitieCDOE />
      <PlacementCDOE />
      <DirectorsMessageCDOE />
    </div>
  );
}; 

export default CDOE;