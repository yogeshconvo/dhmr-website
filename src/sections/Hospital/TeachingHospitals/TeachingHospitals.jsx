import React, { useState } from "react";

import HospitalDetails from "./HospitalDetails";
import OurHospitals from "./OurHospitals";

const hospitals = ["HOSPITALS AT MAIN CAMPUS", "HOSPITALS AT OFF-CAMPUS"];
import { hospitalsData } from "./../data";
import DifferenceHospitals from "./DifferenceHospitals";

function TeachingHospitals() {
  const [hospitalIndex, setHospitalIndex] = useState(0);
  const data = hospitalsData[`hospital_${hospitalIndex}`];
  return (
    <>
      <div className="pt-16 mt-16">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight ">
            <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
            TEACHING HOSPITALS
          </h2>

          <div className="flex gap-4 justify-center py-8 text-xl mt-8 ">
            <span
              className={`flex-1 text-center md:text-right text-[#58595B] cursor-pointer transition ${
                hospitalIndex == 0 ? "text-[#F04E30] font-bold underline " : ""
              }`}
              onClick={() => setHospitalIndex(0)}
            >
              {hospitals[0]}
            </span>
            |
            <span
              className={`flex-1 text-[#58595B] text-center md:text-left cursor-pointer transition ${
                hospitalIndex == 1 ? "text-[#F04E30] font-bold underline " : ""
              }`}
              onClick={() => setHospitalIndex(1)}
            >
              {hospitals[1]}
            </span>
          </div>
        </div>
      </div>

      <section className={`${data.bg} py-16`}>
        <HospitalDetails data={data} />
        <OurHospitals data={data} />
        <DifferenceHospitals data={data.differenceSection} />
      </section>
    </>
  );
}

export default TeachingHospitals;
