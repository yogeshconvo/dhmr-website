import React from "react";
import HeroDMCP from "../sections/DMCP/HeroDMCP";
import DMCPInfoSection from "../sections/DMCP/InfoSection";
import WhyChooseDMCP from "../sections/DMCP/WhyChooseDMCP";
import DeansMessageDMCP from "../sections/DMCP/DeanMessage";
import ProgramsDMCP from "../sections/DMCP/ProgramsSectionDMCP";
import AffiliatedHospital from "../sections/DMCP/AffiliatedHospital";
import HolisticLearningSection from "../sections/DMCP/InfrastructurePage";
import DepartmentsDMCP from "../sections/DMCP/DMCP-Departments";
import ResearchCollaborationsDMCP from "../sections/DMCP/ResearchCollaborationsDMCP";
import TestimonialsDMCP from "../sections/DMCP/Testimonial";
import StudentLifeDMCP from "../sections/DMCP/StudentLifeDMCP";
import GlobalOpportunitiesSectionDMCP from "../sections/DMCP/GlobalOpportunitiesSection";
import HigherEduPlacementDMCP from "../sections/DMCP/HigherEduPlacement";

const DMCP = () => {
  return (
    <div>
      <HeroDMCP />
      <DMCPInfoSection />
      <WhyChooseDMCP />
      <DeansMessageDMCP />
      <ProgramsDMCP />
      <AffiliatedHospital />
      <HolisticLearningSection />
      <DepartmentsDMCP />
      <GlobalOpportunitiesSectionDMCP />
      <HigherEduPlacementDMCP />
      <ResearchCollaborationsDMCP />
      <StudentLifeDMCP />
      <TestimonialsDMCP />
    </div>
  );
};

export default DMCP;
