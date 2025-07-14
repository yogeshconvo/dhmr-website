import React from "react";
import HeroCF from "../sections/CampusFaclities/HeroFC";
import InfoCF from "../sections/CampusFaclities/InfoCF";
import ReasonsCF from "../sections/CampusFaclities/ReasonsCF";
import ImmersiveLearningCF from "../sections/CampusFaclities/ImmersiveLearningCF";
import AcademicFC from "../sections/CampusFaclities/AcademicFC";
import InfrastrucureFC from "../sections/CampusFaclities/InfrastrucureFC";
import WellbeingComfortFC from "../sections/CampusFaclities/WellbeingComfortFC";
import HostelFC from "../sections/CampusFaclities/HostelFC";

function CampusFacilities() {
  return (
    <div>
      <HeroCF />
      <InfoCF />
      <ReasonsCF />
      <ImmersiveLearningCF />
      <AcademicFC />
      <InfrastrucureFC />
      <WellbeingComfortFC />
      <HostelFC />
    </div>
  );
}

export default CampusFacilities;
