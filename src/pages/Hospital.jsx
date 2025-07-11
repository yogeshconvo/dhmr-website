import React from "react";
import HeroHospital from "../sections/Hospital/HeroHospital";
import AboutHospital from "../sections/Hospital/AboutHospital";
import TeachingHospitals from "../sections/Hospital/TeachingHospitals/TeachingHospitals";
function Hospital() {
  return (
    <div>
      <HeroHospital />
      <AboutHospital />
      <TeachingHospitals />
    </div>
  );
}

export default Hospital;
