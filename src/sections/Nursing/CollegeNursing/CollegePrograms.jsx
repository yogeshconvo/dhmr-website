import React from "react";

const messages = [
  ["Undergraduate", "Postgraduate", "Diploma", "PhD"],
  ["Undergraduate"],
  ["Undergraduate"],
];

const collegeData = [
  {
    college: 1,
    messages: messages[0],
    linkTitle: "Check all Mandatory Disclosures ",
    linkHref: "#",
  },
  {
    college: 2,
    messages: messages[1],
    linkTitle: "Check all Mandatory Disclosures ",
    linkHref: "#",
  },
  {
    college: 3,
    messages: messages[2],
    linkTitle: "Check all Mandatory Disclosures ",
    linkHref: "#",
  },
];
function CollegePrograms({ collegeTabNumber }) {
  let currentCollegeData = collegeData.filter(
    (data) => data.college == collegeTabNumber
  )[0];

  if (currentCollegeData)
    return (
      <div className="container py-20">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          OUR PROGRAMS
        </h2>

        <ul className="flex flex-wrap justify-center gap-20">
          {currentCollegeData.messages.map((message, idx) => (
            <li key={idx}>
              <span
                className="clip-path-message group cursor-pointer"
                onClick={() =>
                  window.open("https://www.dmiher.edu.in/courses", "_blank")
                }
              >
                <span className="clip-path-message-inner">
                  <span className="cursor-pointer">{message}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        <h2 className="text-3xl font-[500] text-[#707070] pt-20 mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          MANDATORY DISCLOSURES
        </h2>
        {/* Bottom Link */}
        <div className="sm:flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex justify-center">
            {/* <a
              href="#"
              className="text-[19px] bg-[#E3F2FD] text-[#F04E30] font-oswald-medium px-8 py-2 tracking-wide rounded-md font-[300] hover:bg-blue-100 transition"
            >
              Check all Mandatory Disclosures{" "}
              <span className="font-[400] underline">Click Here</span>
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
      </div>
    );
}

export default CollegePrograms;
