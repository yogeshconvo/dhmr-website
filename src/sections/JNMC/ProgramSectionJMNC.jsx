import React from "react";

const programs = [
  "Undergraduate",
  "Postgraduate",
  "Certificate/ EDP ",
  "Ph.D",
  "Super Speciality",
  "Fellowship",
  "Certificate Program/ EDP",
  "MNC",
];

function ProgramsSaS() {
  return (
    <>
      <div className="px-6 md:px-40 py-20">
        <h2 className="text-3xl md:text-4xl pt-20 font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          OUR PROGRAMS
        </h2>
        <div className="container">
          <ul className="flex flex-wrap justify-center gap-20">
            {programs.map((program) => (
              <li
                key={program}
                className="clip-path-message group"
                onClick={() =>
                  window.open("https://www.dmiher.edu.in/courses", "_blank")
                }
              >
                <span>
                  <span className="clip-path-message-inner">
                    <span className="curser group-hover:cursor-pointer cursor-default w-full h-full flex items-center justify-center text-center text-xl md:text-2xl  text-gray-600 transition-all duration-300 ease-in-out">
                      {program}
                    </span>
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="text-3xl md:text-4xl pt-20 font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          MANDATORY DISCLOSURES
        </h2>
        {/* Bottom Link */}
        <div className="hidden sm:flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href="#"
            className="text-xl tracking-wide font-oswald-medium  text-gray-600  rounded-md font-[300] hover:bg-blue-100 transition"
          >
            Check all Mandatory Disclosures{" "}
            <span className="font-[400] underline">Click Here</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProgramsSaS;
