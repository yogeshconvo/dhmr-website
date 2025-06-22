import React, { useEffect, useState } from "react";
import CollegeTabs from "./CollegeTabs";
import CollegeBrief from "./CollegeBrief";
import CollegeMessage from "./CollegeMessage";
import CollegePrograms from "./CollegePrograms";
import CollegeHospitals from "./CollegeHospitals";
import NursingHolistic from "../NursingHolistic";

const CollegeNursing = ({ setShowPlacementBtn }) => {
  const [collegeTabNumber, setCollegeTabNumber] = useState(1);

  useEffect(() => {
    if (collegeTabNumber != 1) {
      setShowPlacementBtn(false);
    }
  }, [collegeTabNumber]);
  return (
    <div className=" mt-[125px]">
      <div className="container">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          THE DMIHER
          <br /> NURSING ADVANTAGE
        </h2>
      </div>

      <CollegeTabs
        collegeTabNumber={collegeTabNumber}
        setCollegeTabNumber={setCollegeTabNumber}
      />

      <CollegeBrief collegeTabNumber={collegeTabNumber} />
      <CollegeMessage collegeTabNumber={collegeTabNumber} />
      <CollegePrograms collegeTabNumber={collegeTabNumber} />
      <CollegeHospitals collegeTabNumber={collegeTabNumber} />
    </div>
  );
};

export default CollegeNursing;
