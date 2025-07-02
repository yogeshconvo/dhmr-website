import React from "react";

const programs = [
  "D.Pharm ",
  "B.Pharm ",
  "M.Pharm ",
  "Pharm.D",
  "PhD",
  "Certificate ",
];

function ProgramsDMCP() {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-full max-w-7xl">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          OUR PROGRAMS
        </h2>
        <ul className="flex flex-col items-center gap-6">
          {/* Row 1 */}
          <div className="flex gap-20 justify-center flex-wrap">
            {programs.slice(0, 3).map((program) => (
              <li
                key={program}
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://www.dmiher.edu.in/courses", "_blank")
                }
              >
                <span className="clip-path-message">
                  <span className="clip-path-message-inner">
                    <span>{program}</span>
                  </span>
                </span>
              </li>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-20 justify-center flex-wrap">
            {programs.slice(3).map((program) => (
              <li
                key={program}
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://www.dmiher.edu.in/courses", "_blank")
                }
              >
                <span className="clip-path-message">
                  <span className="clip-path-message-inner">
                    <span>{program}</span>
                  </span>
                </span>
              </li>
            ))}
          </div>
        </ul>

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
    </div>
  );
}

export default ProgramsDMCP;
