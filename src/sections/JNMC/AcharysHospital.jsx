import React from "react";
import buildingImage from "../../assets/JNMC/slider1.png"; // Replace with actual path

const AcharysHospitalJNMC = () => {
  return (
    <div className="bg-[#122E5E]/10 px-6 md:px-10 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] tracking-wider font-oswald-medium mb-2">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
            ACHARYA VINOBA BHAVE <br /> RURAL HOSPITAL
          </h2>

          <h4 className="font-[Arial] text-[26px] text-[#58595B] font-light ">
            A Hub Of Quality Care
          </h4>

          {/* Subheading Paragraph */}
          <p className="text-gray-500 text-base font-oswald font-[400] mb-2">
            Acharya Vinoba Bhave Rural Hospital (AVBRH) is the heart of our
            clinical training, the largest teaching hospital in Central India,
            with comprehensive healthcare services: Broad Specialties across all
            key domains, Super-Specialty Services like Endoscopy, Minimal Access
            Surgery, Robotic surgery, Dialysis, Infertility Treatment, Joint
            Replacements, Arthroscopy, Limb Deformity Correction, and the Wound
            Care Clinic (Regenerative Medicine Division). Famed for delivering
            affordable, high-quality healthcare, AVBRH is a trusted destination
            for patients across the region.
          </p>

          {/* Stats */}
          <ul className="text-xm text-gray-500 space-y-2 mb-6 font-oswald-medium">
            <li className="border-b w-60 pb-2">
              <span className="text-yellow-500 font-semibold">
                30+ Specialities
              </span>
            </li>
            <li className="border-b w-60 pb-2">
              <span className="text-[#F25022] font-semibold">1500+ Beds</span>
            </li>
            <li className="border-b w-60 pb-2">
              <span className="text-[#122E5E] font-semibold">
                50 Lac+ Lives{" "}
              </span>
              <span> Touched</span>
            </li>
            <li className="border-b w-60 pb-2">
              <span className="text-[#269BFF] font-semibold">
                5 Lac+ Complex Surgeries{" "}
              </span>
              <span className="font-light">Performed</span>
            </li>
            <li className="border-b w-60 pb-2">
              Robotic Surgery with Advanced Cancer Care{" "}
              <span className="font-light">& Minimal Invasive Surgery</span>
            </li>
            <li className="font-light">State of the Art Facility</li>
          </ul>

          {/* Know More Link */}
          <a href="#" className="text-sky-500 text-[15px] underline">
            Know more about Acharya Vinoba Bhave Rural Hospital
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-30 rounded-lg overflow-hidden shadow-lg relative w-full">
          <img
            src={buildingImage}
            alt="AVBRH Building"
            className="w-full h-auto object-cover"
          />
      
         
        </div>
      </div>
    </div>
  );
};

export default AcharysHospitalJNMC;
