import React from "react";
import HeroIQAC from "../sections/IQAC/HeroIQAC";
import FunctionalUnits from "../sections/IQAC/FunctionalUnits";
import IQACInfoSection from "../sections/IQAC/IQACInfo";
import IQACSection from "../sections/IQAC/IQACSection";
import CIQASection from "../sections/IQAC/CIQASection";

const IQAC = () => {
  return (
    <div>
      <HeroIQAC />
      <IQACInfoSection />
      <FunctionalUnits />
      <IQACSection />
      <CIQASection />
    </div>
  );
};

export default IQAC;
