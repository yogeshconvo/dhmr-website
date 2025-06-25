import React from "react";
import HeroFEAT from "../sections/FEAT/HeroFEAT";
import FEATInfoSection from "../sections/FEAT/FEATInfoSection";
import EducationUnitTabs from "../sections/FEAT/EducationUnit";
import InfrastructurePageFEAT from "../sections/FEAT/InfrastructurePage";
import DeansMessageFEAT from "../sections/FEAT/DeanMessage";
import WhyChooseFEAT from "../sections/FEAT/WhyChooseFEAT";
import AffiliatedHospital from "../sections/FEAT/AffiliatedHospital";
import ResearchCollaborationsFEAT from "../sections/FEAT/ResearchCollaborationsFEAT";
import StudentLifeFEATFEAT from "../sections/FEAT/StudentLifeFEAT";
import HigherEduPlacement from "../sections/FEAT/HigherEduPlacement";
import GlobalOpportunitiesSection from "../sections/FEAT/GlobalOpportunitiesSection";
import TestimonialVideoFEAT from "../sections/FEAT/Testimonial";
import FEATDepartments from "../sections/FEAT/FEAT-Departments";
import ProgramSection from "../sections/FEAT/ProgramsSection";

const FEAT = () => {
  return (
    <div className="min-w-screen">
      <HeroFEAT />
      <FEATInfoSection />
      <WhyChooseFEAT />
      <DeansMessageFEAT />
      <ProgramSection />
      <AffiliatedHospital />
      <InfrastructurePageFEAT />
      <EducationUnitTabs />
      <FEATDepartments />
      <ResearchCollaborationsFEAT />
      <GlobalOpportunitiesSection />
      <HigherEduPlacement />
      <StudentLifeFEATFEAT />
      <TestimonialVideoFEAT />
    </div>
  );
};

export default FEAT;
