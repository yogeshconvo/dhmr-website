import React, { useState } from "react";
import Hero from "../sections/SAHS/HeroSAHS";
import SAHSInfoSection from "../sections/SAHS/SAHSinfoSection";
import WhyChooseSAHS from "../sections/SAHS/WhyChooseSAHS";
import DeanMessageSAHS from "../sections/SAHS/DeanMessage";
import ProgramSectionSAHS from "../sections/SAHS/ProgramSectionSAHS";
import AssociatedHospitalSAHS from "../sections/SAHS/AssociatedHospital";
import InfrastructureSAHS from "../sections/SAHS/InfrastructureSAHS";
import Departments from "../sections/SAHS/Departments";
import Collaborations from "../sections/SAHS/Collaborations";
import GlobalOpportunities from "../sections/SAHS/GlobalOpportunities";
import PlacementsSAHS from "../sections/SAHS/PlacementsSAHS";
import StudentLifeSAHS from "../sections/SAHS/StudentLifeSAHS";
import TestimonialVideSAHS from "../sections/SAHS/Testimonial";
import TabsSahs from "../sections/SAHS/TabsSahs";
import AdmissionsSAHS from "../sections/SAHS/AdmissionsSAHS";

const SAHS = () => {
  const [activeTab, setActiveTab] = useState("wardha");

  return (
    <div>
      <Hero />
      <SAHSInfoSection />
      <WhyChooseSAHS />

      <TabsSahs activeTab={activeTab} setActiveTab={setActiveTab} />
      <DeanMessageSAHS activeTab={activeTab} />
      <ProgramSectionSAHS activeTab={activeTab} />
      <AssociatedHospitalSAHS activeTab={activeTab} />
      <InfrastructureSAHS activeTab={activeTab} />
      <Departments activeTab={activeTab} />

      <Collaborations />
      <GlobalOpportunities />
      <PlacementsSAHS />
      <AdmissionsSAHS />
      <StudentLifeSAHS activeTab={activeTab} />
      <TestimonialVideSAHS activeTab={activeTab} />
    </div>
  );
};

export default SAHS;
