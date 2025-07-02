import React from "react";

const programs = [
  "Undergraduate",
  "Postgraduate",
  "Certificate program/ EDP",
  "PhD",
];

const ProgramsSection = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto py-16 text-[#666]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        OUR PROGRAMS
      </h2>

      {/* Images & Button Side by Side */}
      <div className="flex flex-col px-10 md:flex-row items-start gap-8 mb-12">
        {/* Images Grid */}
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-40 gap-y-8 justify-items-center w-full md:w-auto">
          {programs.map((program) => (
            <li
              key={program}
              className="cursor-pointer w-full"
              onClick={() =>
                window.open("https://www.dmiher.edu.in/courses", "_blank")
              }
            >
              <span className="clip-path-message  block w-full">
                <span className="clip-path-message-inner block w-full">
                  <span className="curser group-hover:cursor-pointer cursor-default w-full h-full flex items-center justify-center text-center text-base sm:text-lg md:text-2xl text-gray-600 transition-all duration-300 ease-in-out">
                    {program}
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul> */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-40 gap-y-8 justify-items-center w-full md:w-auto">
          {programs.map((program) => (
            <li
              key={program}
              className="cursor-pointer w-fit md:w-full"
              onClick={() =>
                window.open("https://www.dmiher.edu.in/courses", "_blank")
              }
            >
              <span className="clip-path-message block w-fit md:w-full">
                <span className="clip-path-message-inner block w-fit md:w-full">
                  <span className="curser group-hover:cursor-pointer cursor-default w-full h-full flex items-center justify-center text-center text-base sm:text-lg md:text-2xl text-gray-600 transition-all duration-300 ease-in-out px-4">
                    {program}
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* Explore Button */}
        <div className="md:ml-50 mt-4 md:mt-30">
          <button
            onClick={() =>
              window.open("https://www.dmiher.edu.in/courses", "_blank")
            }
            className="bg-[#F25022] text-white text-sm font-oswaldMedium px-8 py-2"
          >
            EXPLORE PROGRAMS
          </button>
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
      <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        MANDATORY DISCLOSURES
      </h2>
      {/* Bottom Link */}
      {/* Desktop link only */}
      <div className="hidden sm:flex flex-col sm:flex-row sm:items-center gap-4">
        <a
          href="#"
          className="text-xl tracking-wide font-oswald-medium text-gray-600 rounded-md font-[300] hover:bg-blue-100 transition"
        >
          Check all Mandatory Disclosures{" "}
          <span className="font-[400] underline">Click Here</span>
        </a>
      </div>

      {/* Mobile link only */}
      <div className="flex sm:hidden justify-center mt-4">
        <a
          href="#"
          className="text-xs py-1 px-2 rounded-sm bg-[#E3F2FD] text-[#F04E30] underline"
        >
          Check all Mandatory Disclosures{" "}
          <span className="font-bold">Here</span>
        </a>
      </div>
    </div>
  );
};

export default ProgramsSection;
