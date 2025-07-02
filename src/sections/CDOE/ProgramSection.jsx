import React from "react";
import CiqaPDF from "../../assets/CDOE/MD/V4-CIQA Report 2023-24 DMIMS NU OL.pdf";
import CdoePDF from "../../assets/CDOE/MD/CDOE Notification 2025-26 updated.pdf";
import { FileText } from "lucide-react";

const programs = [
  "BBA",
  "BCA",
  "MBA",
  "MBA Hospital & Healthcare Management",
  "MCA",
];

function ProgramsSaS() {
  const firstRow = programs.slice(0, 2);
  const secondRow = programs.slice(2);

  return (
    <div className="w-full flex justify-center px-5 py-20">
      <div className="w-full max-w-7xl">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          OUR PROGRAMS
        </h2>

        {/* First Row - 2 items */}
        <ul className="flex justify-center gap-20 mb-10 flex-wrap">
          {firstRow.map((program) => (
            <li
              key={program}
              className="clip-path-message group cursor-pointer"
              onClick={() =>
                window.open("https://www.dmiher.edu.in/courses", "_blank")
              }
            >
              <span>
                <span className="clip-path-message-inner">
                  <span className="cursor-pointer">{program}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* Second Row - 3 items */}
        <ul className="flex justify-center gap-20 flex-wrap">
          {secondRow.map((program) => (
            <li
              key={program}
              className="clip-path-message group"
              onClick={() =>
                window.open("https://www.dmiher.edu.in/courses", "_blank")
              }
            >
              <span>
                <span className="clip-path-message-inner">
                  <span className="cursor group-hover:cursor-pointer cursor-default text-center break-words block w-[180px]">
                    {program}
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* Mandatory Disclosures */}

        <h2 className="text-3xl font-[500] text-[#707070] pt-20 mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          MANDATORY DISCLOSURES
        </h2>

        <div className="sm:flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex justify-center gap-4 flex-wrap">
              {/* <button
                onClick={() => window.open(CiqaPDF, "_blank")}
                className="flex items-center gap-2 bg-[#F04E30] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#d84428] transition font-oswald-medium"
              >
                <FileText className="w-5 h-5 text-[#AEE0FF]" />
                CIQA Report
              </button>

              <button
                onClick={() => window.open(CdoePDF, "_blank")}
                className="flex items-center gap-2 bg-[#F04E30] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#d84428] transition font-oswald-medium"
              >
                <FileText className="w-5 h-5 text-[#AEE0FF]" />
                CDOE Admission Notification
              </button> */}
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => window.open(CiqaPDF, "_blank")}
                  className="flex items-center gap-2 bg-sky-200 text-[#F04E30] hover:bg-[#F04E30] hover:text-white px-6 py-3 rounded-md shadow-md  transition font-oswald-medium"
                >
                  <FileText className="w-5 h-5 text-[#0B2A6D]" />
                  CIQA Report
                </button>

                <button
                  onClick={() => window.open(CdoePDF, "_blank")}
                  className="flex items-center gap-2 bg-sky-200 text-[#F04E30] px-6 py-3 rounded-md shadow-md hover:bg-[#F04E30] hover:text-white transition font-oswald-medium"
                >
                  <FileText className="w-5 h-5 text-[#0B2A6D]" />
                  CDOE Admission Notification
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramsSaS;
