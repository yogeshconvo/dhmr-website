import React, { useState } from "react";
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

const Nursing = () => {
  const [showPlacementBtn, setShowPlacementBtn] = useState(true);
  return (
    <div>
      <HeroNursing />
      <AboutNursing />
      <AdventureNursing />
      <CollegeNursing setShowPlacementBtn={setShowPlacementBtn} />
      <NursingHolistic />
      <ButtonsNursing />
      <ReasearchNursing />
      <GlobalOppNursing showPlacementBtn={showPlacementBtn} />
      <StudentLifeNursing />
      <TestimonialsNursing />
    </div>
  );
};

export default Nursing;
