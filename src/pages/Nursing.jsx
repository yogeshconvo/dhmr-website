
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HeroNursing from "../sections/Nursing/HeroNursing";
import AboutNursing from "../sections/Nursing/AboutNursing";
import AdventureNursing from "../sections/Nursing/AdventureNursing";
import CollegeNursing from "../sections/Nursing/CollegeNursing/CollegeNursing";
import NursingHolistic from "../sections/Nursing/NursingHolistic";
import ButtonsNursing from "../sections/Nursing/ButtonsNursing";
import ReasearchNursing from "../sections/Nursing/ReasearchNursing";
import GlobalOppNursing from "../sections/Nursing/GlobalOppNursing";
import StudentLifeNursing from "../sections/Nursing/StudentLifeNursing";
import TestimonialsNursing from "../sections/Nursing/TestimonialsNursing";
import DepartmentsNursing from "../sections/Nursing/NursingDepartments";

const Nursing = () => {
  const location = useLocation();
  const [showPlacementBtn, setShowPlacementBtn] = useState(true);
  const [collegeTabNumber, setCollegeTabNumber] = useState(null); // initially null

  useEffect(() => {
    if (location.pathname.startsWith("/SRMMCON")) {
      setCollegeTabNumber(1);
    } else if (location.pathname.startsWith("/SMCON-W")) {
      setCollegeTabNumber(2);
    } else if (location.pathname.startsWith("/SMCON-N")) {
      setCollegeTabNumber(3);
    }
  }, [location.pathname]);

  if (!collegeTabNumber) return null; // or show a loader

  return (
    <div>
      <HeroNursing />
      <AboutNursing />
      <AdventureNursing />
      <CollegeNursing
        setShowPlacementBtn={setShowPlacementBtn}
        collegeTabNumber={collegeTabNumber}
        setCollegeTabNumber={setCollegeTabNumber}
      />
      <NursingHolistic />
      <ButtonsNursing />
      <ReasearchNursing />
      <DepartmentsNursing />
      <GlobalOppNursing showPlacementBtn={showPlacementBtn} />
      <StudentLifeNursing collegeTabNumber={collegeTabNumber} />
      <TestimonialsNursing />
    </div>
  );
};

export default Nursing;
