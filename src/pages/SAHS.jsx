import React from "react";
import Hero from "../sections/SAHS/HeroSAHS";
import SAHSInfoSection from "../sections/SAHS/SAHSinfoSection";
import WhyChooseSAHS from "../sections/SAHS/WhyChooseSAHS";
import DeanMessageSAHS from "../sections/SAHS/DeanMessage";
import ProgramSectionSAHS from "../sections/SAHS/ProgramSectionSAHS";
import AssociatedHospitalSAHS from "../sections/SAHS/AssociatedHospital";
import InfrastructureSAHS from "../sections/SAHS/InfrastructureSAHS";
import Departments  from "../sections/SAHS/Departments";
import Collaborations from "../sections/SAHS/Collaborations";
import GlobalOpportunities from "../sections/SAHS/GlobalOpportunities";
import PlacementsSAHS from "../sections/SAHS/PlacementsSAHS";
import StudentLifeSAHS from "../sections/SAHS/StudentLifeSAHS";
import TestimonialVideSAHS from "../sections/SAHS/Testimonial";

const SAHS = () => {
  return (
    <div>
      <Hero />
      <SAHSInfoSection />
      <WhyChooseSAHS />
      <DeanMessageSAHS />
      <ProgramSectionSAHS />
      <AssociatedHospitalSAHS />
      <InfrastructureSAHS />
      <Departments  />
      <Collaborations />
      <GlobalOpportunities />
      <PlacementsSAHS />
      <StudentLifeSAHS />
      <TestimonialVideSAHS />
    </div>
  );
};

export default SAHS; 