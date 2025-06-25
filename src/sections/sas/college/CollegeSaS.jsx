import React, { useState } from "react";
import CollegeBrief from "../../Nursing/CollegeNursing/CollegeBrief";
import CollegeSaSTabs from "./CollegeSaSTabs";
import CollegeSaSBrief from "./CollegeSaSBrief";

function CollegeSaS() {
  const [collegeTabNumber, setCollegeTabNumber] = useState(1);
  return (
    <div className=" py-10">
      <div className="container">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          OUR FACULTIES
          <br /> UNDER SAS
        </h2>
      </div>

      <CollegeSaSTabs
        collegeTabNumber={collegeTabNumber}
        setCollegeTabNumber={setCollegeTabNumber}
      />

      <CollegeSaSBrief collegeTabNumber={collegeTabNumber} />
    </div>
  );
}

export default CollegeSaS;
