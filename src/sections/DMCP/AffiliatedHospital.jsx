import React from "react";
import DOCTOR from "../../assets/FEAT/AH.png";

const AffiliatedHospital = () => {
  return (
    <div className="bg-[#fefaf3] w-full px-4 pt-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
      <div className="max-w-7xl flex mx-auto gap-8">
      {/* Left Content */}
        <div className="w-full lg:w-[500px] pb-6 lg:pb-10">
          {/* Heading */}
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
              <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2"></span>
              AFFILIATED HOSPITALS
            </h2>
            <h4 className="text-xl font-[Arial] sm:text-2xl md:text-3xl text-[#58595B] tracking-tight font-[400]">
              Acharya Vinoba Bhave Rural Hospital (AVBRH)
            </h4>
            <h4 className="text-lg md:text-2xl font-[Arial] text-[#58595B] tracking-tight font-[400]">
              Real-Time Clinical Learning
            </h4>
          </div>

          {/* Subheading Paragraph */}
          <p className="text-[#58595B] text-sm sm:text-base font-oswald font-[400] pb-2 tracking-normal">
            Acharya Vinoba Bhave Rural Hospital (AVBRH), a multispecialty
            teaching hospital under DMIHER, serves as the primary clinical
            training center for the Pharm D program and internship site for
            D.Pharm, B.Pharm, and M.Pharm students.
          </p>
          <p className="tracking-normal text-[#58595B] font-[600] text-sm sm:text-base pb-2">
            Students gain hands-on experience in clinical pharmacy, patient
            counselling, and drug management, supported by an in-house Clinical
            Research Centre and Pharmacovigilance Unit. These advanced
            facilities deepen competencies in evidence-based care, medication
            safety, and pharmaceutical research—equipping students for impactful
            careers in clinical practice, pharmacovigilance, and R&D.
          </p>

          {/* Stats */}
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-auto">
          <img
            src={DOCTOR}
            alt="SPDC Building"
            className="w-full max-w-full lg:h-[400px] h-auto object-contain rounded-xl md:mt-15 sm:mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default AffiliatedHospital;
