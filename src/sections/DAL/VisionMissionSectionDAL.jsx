import React from "react";
import VisionImg from "../../assets/About/Vision.png";
import Mission from "../../assets/About/Mission.png";

const VisionMissionSectionDAL = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-15 lg:px-35 py-10 sm:py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-md:gap-0">
        {/* Vision */}
        <div className="bg-[#F7941D] p-5 sm:p-8 md:p-12 shadow-md min-h-[370px] text-white">
          {/* Heading + Icon */}
          <div className="flex justify-between items-start mb-2">
            <div className="pt-5 sm:pt-12">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide font-oswald-medium">
                Vision
              </h2>
            </div>
            <img
              src={VisionImg}
              className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
              alt="Vision Icon"
            />
          </div>

          {/* Vision Text */}
          <p className="text-lg leading-relaxed block sm:hidden">
            “To be a global beacon of research and innovation, recognised as one
            of the most vibrant academic ecosystems where knowledge thrives and
            scholars make a lasting impact on society —creating a legacy where
            the pursuit of excellence is a way of life.”
          </p>

          <p className="text-lg leading-relaxed hidden sm:block">
            “To be a global beacon of research and innovation,
         
            recognised as one of the most vibrant academic ecosystems
         
            where knowledge thrives and scholars make a lasting impact
         
            on society — creating a legacy where the pursuit of excellence
         
            is a way of life.”
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#707070] p-6 sm:p-8 text-white shadow-md min-h-[360px]">
          {/* Heading + Icon */}
          <div className="flex justify-between items-start mb-2">
            <div className="pt-5 sm:pt-16">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide font-oswald-medium">
                Mission
              </h2>
            </div>
            <img
              src={Mission}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
              alt="Mission Icon"
            />
          </div>

          {/* Mission Text */}
          <p className="text-lg leading-relaxed block sm:hidden">
            “To nurture a dynamic and inclusive research culture grounded in
            interdisciplinary collaboration, ethical integrity, and academic
            rigor. We strive to cultivate passionate minds, foster innovation,
            and provide a global platform for transformative research. Every
            day, we empower scholars to push boundaries, advance knowledge, and
            shape a future defined by excellence and impact.”
          </p>

          <p className="text-lg leading-relaxed hidden sm:block">
            “To nurture a dynamic and inclusive research culture
         
            grounded in interdisciplinary collaboration, ethical integrity,
         
            and academic rigor. We strive to cultivate passionate minds,
         
            foster innovation, and provide a global platform for
         
            transformative research. Every day, we empower scholars
         
            to push boundaries, advance knowledge, and shape a future
         
            defined by excellence and impact.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSectionDAL;
