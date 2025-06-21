import React from "react";

const programs = ["Undergraduate", "Postgraduate", "Ph.D"];

function ProgramsSaS() {
  return (
    <div className="container mt-[125px]">
      <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        OUR PROGRAMS
      </h2>

      <ul className="flex flex-wrap justify-center gap-20">
        {programs.map((program) => (
          <li key={program}>
            <span className="clip-path-message">
              <span className="clip-path-message-inner">
                <span>{program}</span>
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-14 ml-auto w-fit">
        <a href="#" className="text-[#269BFF]">
          Check all Mandatory Disclosures{" "}
          <span className="underline">Here</span>
        </a>
      </div>
    </div>
  );
}

export default ProgramsSaS;
