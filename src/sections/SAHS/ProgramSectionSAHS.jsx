import React, { useState } from "react";
import program1 from "../../assets/ProgramSPDC/1.png";
import program2 from "../../assets/ProgramSPDC/2.png";
import program4 from "../../assets/ProgramSPDC/4.png";

const programData = {
  wardha: {
    programs: [
      { src: program1, alt: "Undergraduate" },
      { src: program2, alt: "Postgraduate" },
      { src: program4, alt: "PhD" },
    ],
    linkTitle: "Check all Mandatory Disclosures ",
    linkHref: "#",
  },
  nagpur: {
    programs: [
      { src: program1, alt: "Undergraduate" },
      { src: program2, alt: "Postgraduate" },
    ],
    linkTitle: "Check all Mandatory Disclosures ",
    linkHref: "#",
  },
};

const ProgramSectionSAHS = ({ activeTab }) => {
  const current = programData[activeTab] || programData.wardha;

  return (
    <div className="bg-white container  mx-auto px-6 md:px-20 pt-16 pb-10 text-[#666]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        OUR PROGRAMS
      </h2>

      {/* Shared Section Layout */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8 px-10">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-28 mt-5 w-full ">
          {current.programs.map((program, index) => (
            <div key={index} className="text-center">
              <img
                src={program.src}
                alt={program.alt}
                className="h-[70px] object-contain cursor-pointer hover:opacity-90 transition"
                onClick={() =>
                  window.open("https://www.dmiher.edu.in/courses", "_blank")
                }
              />
            </div>
          ))}
        </div>

        {/* Button on the right */}
        {/* <div className="flex flex-col items-center md:items-start md:w-1/4 mt-10 md:mt-30">
          <button
            onClick={() =>
              window.open("https://www.dmiher.edu.in/courses", "_blank")
            }
            className="bg-[#F25022] text-white text-sm font-oswaldMedium px-8 py-2"
          >
            EXPLORE PROGRAMS
          </button>

        </div> */}
      </div>
      {/* Images & Button Side by Side */}
    </div>
  );
};

export default ProgramSectionSAHS;
