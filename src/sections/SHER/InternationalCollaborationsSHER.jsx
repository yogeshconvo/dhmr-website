import React from "react";
import wfme from "../../assets/SHER/IC/1.png";
import amee from "../../assets/SHER/IC/2.png";
import mcgrawhill from "../../assets/SHER/IC/3.png";
import sydney from "../../assets/SHER/IC/4.png";

const InternationalCollaborations = () => {
  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="inline-block mb-8">
          <h2 className=" text-[#707070] text-4xl font-oswald-medium font-[500] uppercase tracking-wide">
            <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
            International <br /> Collaborations and Tie Up
          </h2>
        </div>

        {/* Logos */}
        <div className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap">
          {/* Logo + Divider */}
          <div className="flex items-center gap-10">
            <img src={wfme} alt="WFME" className="h-30 object-contain" />
            <div className="w-[1px] h-30 bg-gray-300 hidden md:block"></div>
          </div>

          <div className="flex items-center gap-8">
            <img src={amee} alt="AMEE" className="h-12 object-contain" />
            <div className="w-[1px] h-30 bg-gray-300 hidden md:block"></div>
          </div>

          <div className="flex items-center gap-8">
            <img
              src={mcgrawhill}
              alt="McGraw Hill"
              className="h-30 object-contain"
            />
            <div className="w-[1px] h-30 bg-gray-300 hidden md:block"></div>
          </div>

          <div className="flex items-center gap-8">
            <img
              src={sydney}
              alt="University of Sydney"
              className="h-30 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalCollaborations;
