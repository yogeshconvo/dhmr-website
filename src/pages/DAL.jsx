import React from "react";
import HeroDAL from "../sections/DAL/HeroDAL";
import NurturingEcosystem from "../sections/DAL/NurturingEcosystem";
import KeyFunctionTabs from "../sections/DAL/KeyFunction";
import VisionMissionSectionDAL from "../sections/DAL/VisionMissionSectionDAL";
const DAL = () => {
  return (
    <div>
      <HeroDAL />
      <NurturingEcosystem />
      <KeyFunctionTabs />
      <VisionMissionSectionDAL />
    </div>
  );
};

export default DAL;
