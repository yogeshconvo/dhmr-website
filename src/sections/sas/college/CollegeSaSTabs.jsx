import React from "react";

function CollegeSaSTabs({ collegeTabNumber, setCollegeTabNumber }) {
  return (
    <ul className="container flex items-center font-oswald-medium justify-center gap-[8%] border-b my-8 w-fit m-auto max-sm:flex-col">
      <li
        onClick={() => setCollegeTabNumber(1)}
        className={`cursor-pointer text-center py-4 max-w-[400px]  ${
          collegeTabNumber == 1
            ? "font-bold text-[#122E5E] border-b-4 text-xl  border-[#F04E30]"
            : "text-[#58595B] text-xl"
        }`}
      >
        Faculty of Commerce and Management Sciences
      </li>
      <li
        onClick={() => setCollegeTabNumber(2)}
        className={`cursor-pointer text-center text-xl py-4 max-w-[400px]  ${
          collegeTabNumber == 2
            ? "font-bold text-[#122E5E] border-b-4   border-[#F04E30]"
            : "text-[#58595B]"
        }`}
      >
        Faculty of Science and Technology
      </li>
      <li
        onClick={() => setCollegeTabNumber(3)}
        className={`cursor-pointer text-center py-4 max-w-[400px]  ${
          collegeTabNumber == 3
            ? "font-bold text-[#122E5E] text-xl border-b-4  border-[#F04E30]"
            : "text-[#58595B] text-xl"
        }`}
      >
        Faculty of Liberal Arts, Humanities & Social Sciences
      </li>
    </ul>
  );
}

export default CollegeSaSTabs;
