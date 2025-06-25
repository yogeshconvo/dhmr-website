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
      <div className="container">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          OUR PROGRAMS
        </h2>

        <ul className="flex flex-wrap justify-center gap-20">
          {currentCollegeData.messages.map((message) => (
            <li>
              <span className="clip-path-message">
                <span className="clip-path-message-inner">
                  <span>{message}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-14 ml-auto w-fit">
          <a href={currentCollegeData.linkHref} className="text-[#269BFF]">
            {currentCollegeData.linkTitle}
            <span className="underline">Here</span>
          </a>
        </div>
      </div>
    );
}

export default CollegePrograms;
