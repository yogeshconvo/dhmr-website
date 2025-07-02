import React from "react";
import HeroSHER from "../sections/SHER/HeroSHER";
import SherInfo from "../sections/SHER/SherInfo";
import DirectorMessage from "../sections/SHER/DirectorMessage";
import InternationalCollaborations from "../sections/SHER/InternationalCollaborationsSHER";
import ProgramsGrid from "../sections/SHER/OurDepartment";
import StudentLife from "../sections/SHER/StudentLife";
import CollabarationSHER from "../sections/SHER/CollabarationSHER";
import WhyChooseSHER from "../sections/SHER/WhyChooseSHER";

const SHER = () => {
  return (
    <div>
      <HeroSHER />
      <SherInfo />
      <WhyChooseSHER />
      <DirectorMessage />
      <InternationalCollaborations />
      <CollabarationSHER />
      <ProgramsGrid />
      <StudentLife />
    </div>
  );
};

export default SHER;
