import React from "react";

function CollegeTabs({ collegeTabNumber, setCollegeTabNumber }) {
  return (
    <ul className="container flex items-center font-oswald-medium justify-center gap-[8%] border-b my-8 w-fit m-auto max-sm:flex-col">
      <li
        onClick={() => setCollegeTabNumber(1)}
        className={`cursor-pointer text-center text-xl py-4 max-w-[410px]  ${
          collegeTabNumber == 1
            ? "font-[500] text-[#122E5E] border-b-4  border-[#F04E30]"
            : "text-[#58595B]"
        }`}
      >
        Smt. Radhikabai Meghe Memorial College of Nursing, Wardha
      </li>
      <li
        onClick={() => setCollegeTabNumber(2)}
        className={`cursor-pointer text-center text-xl py-4 max-w-[300px]  ${
          collegeTabNumber == 2
            ? "font-[500] text-[#122E5E] border-b-4   border-[#F04E30]"
            : "text-[#58595B]"
        }`}
      >
        Shalinitai Meghe College of Nursing, Salod (Hirapur), Wardha
      </li>
      <li
        onClick={() => setCollegeTabNumber(3)}
        className={`cursor-pointer text-xl text-center py-4 max-w-[300px]  ${
          collegeTabNumber == 3
            ? "font-[500] text-[#122E5E] border-b-4  border-[#F04E30]"
            : "text-[#58595B]"
        }`}
      >
        Shalinitai Meghe College of Nursing, Nagpur
      </li>
    </ul>
  );
}

export default CollegeTabs;
