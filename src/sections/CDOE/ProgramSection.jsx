import React from "react";
import program1 from "../../assets/FEAT/program1.png";
import program2 from "../../assets/FEAT/program2.png";
import program3 from "../../assets/FEAT/program3.png";
import program4 from "../../assets/FEAT/program4.png";

const programs = [
  {
    src: program1,
    alt: "Undergraduate",
  },
  {
    src: program3,
    alt: "Postgraduate",
  },
  {
    src: program2,
    alt: "Certificate program/ EDP",
  },
  {
    src: program4,
    alt: "PhD",
  },
];

const ProgramsSection = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto py-16 text-[#666]">
      {/* Heading */}
      <h2 className="text-3xl px-10 md:px-0 md:text-4xl font-oswald-medium mb-12 relative">
        <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
        OUR PROGRAMS
      </h2>

      {/* Images & Button Side by Side */}
      <div className="flex flex-col px-10 md:flex-row items-start gap-8 mb-12">
        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-25 gap-y-28 max-w-3xl w-full">
          {programs.map((program, index) => (
            <div key={index} className="text-center">
              <img
                src={program.src}
                alt={program.alt}
                className="h-[90px] object-contain cursor-pointer hover:opacity-90 transition"
                onClick={() =>
                  window.open("https://www.dmiher.edu.in/courses", "_blank")
                }
              />
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="md:ml-0 mt-4 md:mt-30">
          <button
            onClick={() =>
              window.open("https://www.dmiher.edu.in/courses", "_blank")
            }
            className="bg-[#F25022] text-white text-sm font-oswaldMedium px-8 py-2"
          >
            EXPLORE PROGRAMS
          </button>
        </div>
        <div className=" md:hidden flex-col justify-end sm:flex-row sm:items-center">
          <a
            href="#"
            className="text-xs py-1 px-2 rounded-sm bg-[#E3F2FD] text-[#F04E30] underline"
          >
            Check all Mandatory Disclosures{" "}
            <span className="font-bold">Here</span>
          </a>
        </div>
      </div>
      <h2 className="text-3xl px-10 md:px-0 md:text-4xl font-oswald-medium mb-12 relative">
        <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
        MANDATORY DISCLOSURES
      </h2>
      {/* Bottom Link */}
      <div className="hidden sm:flex flex-col sm:flex-row sm:items-center gap-4">
        {/* <a
          href="#"
          className="text-xl tracking-wide font-oswald-medium bg-[#E3F2FD] text-[#F04E30]  px-4 py-2 rounded-md font-[300] hover:bg-blue-100 transition"
        >
          Check all Mandatory Disclosures{" "}
          <span className="font-[400] underline">Here</span>
        </a> */}
        <a
          href="#"
          className="text-xl tracking-wide font-oswald-medium  text-gray-600  rounded-md font-[300] hover:bg-blue-100 transition"
        >
          Check all Mandatory Disclosures{" "}
          <span className="font-[400] underline">Click Here</span>
        </a>
      </div>
    </div>
  );
};

export default ProgramsSection;
