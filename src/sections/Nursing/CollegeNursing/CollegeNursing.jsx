// import React, { useEffect, useState } from "react";
// import CollegeTabs from "./CollegeTabs";
// import CollegeBrief from "./CollegeBrief";
// import CollegeMessage from "./CollegeMessage";
// import CollegePrograms from "./CollegePrograms";
// import CollegeHospitals from "./CollegeHospitals";
// import GlobalOppNursing from "../GlobalOppNursing";

// const CollegeNursing = ({ setShowPlacementBtn }) => {
//   const [collegeTabNumber, setCollegeTabNumber] = useState(1);

//   useEffect(() => {
//     if (collegeTabNumber != 1) {
//       setShowPlacementBtn(false);
//     }
//   }, [collegeTabNumber]);
//   return (
//     <div className="py-10">
//       <div className="container">
//         <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
//           <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//           OUR NURSING COLLEGES
//         </h2>
//       </div>

//       <CollegeTabs
//         collegeTabNumber={collegeTabNumber}
//         setCollegeTabNumber={setCollegeTabNumber}
//       />

//       <CollegeBrief collegeTabNumber={collegeTabNumber} />
//       <CollegeMessage collegeTabNumber={collegeTabNumber} />
//       <CollegePrograms collegeTabNumber={collegeTabNumber} />
//       <CollegeHospitals collegeTabNumber={collegeTabNumber} />

//     </div>
//   );
// };

// export default CollegeNursing;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CollegeTabs from "./CollegeTabs";
import CollegeBrief from "./CollegeBrief";
import CollegeMessage from "./CollegeMessage";
import CollegePrograms from "./CollegePrograms";
import CollegeHospitals from "./CollegeHospitals";

const CollegeNursing = ({ setShowPlacementBtn }) => {
  const [collegeTabNumber, setCollegeTabNumber] = useState(1);
  const [manualNavigation, setManualNavigation] = useState(false);
  const location = useLocation();

  // Scroll to top only if not navigated manually (tab click)
  useEffect(() => {
    if (!manualNavigation) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setManualNavigation(false); // reset after render
  }, [location.pathname]);

  // Show/hide placement button
  useEffect(() => {
    if (collegeTabNumber !== 1) {
      setShowPlacementBtn(false);
    }
  }, [collegeTabNumber]);

  return (
    <div className="py-10">
      <div className="container">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          OUR NURSING COLLEGES
        </h2>
      </div>

      <CollegeTabs
        collegeTabNumber={collegeTabNumber}
        setCollegeTabNumber={setCollegeTabNumber}
        setManualNavigation={setManualNavigation}
      />

      <CollegeBrief collegeTabNumber={collegeTabNumber} />
      <CollegeMessage collegeTabNumber={collegeTabNumber} />
      <CollegePrograms collegeTabNumber={collegeTabNumber} />
      <CollegeHospitals collegeTabNumber={collegeTabNumber} />
    </div>
  );
};

export default CollegeNursing;
