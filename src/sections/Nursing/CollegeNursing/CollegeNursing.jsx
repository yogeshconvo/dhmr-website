// import React, { useState } from "react";
// import CollegeTabs from "./CollegeTabs";
// import CollegeBrief from "./CollegeBrief";
// import CollegeMessage from "./CollegeMessage";
// import CollegePrograms from "./CollegePrograms";
// import CollegeHospitals from "./CollegeHospitals";
// import NursingHolistic from "../NursingHolistic";

// const CollegeNursing = () => {
//   const [collegeTabNumber, setCollegeTabNumber] = useState(1);
//   return (
//     <div className=" py-10">
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
import React, { useState } from "react";
import CollegeTabs from "./CollegeTabs";
import CollegeBrief from "./CollegeBrief";
import CollegeMessage from "./CollegeMessage";
import CollegePrograms from "./CollegePrograms";
import CollegeHospitals from "./CollegeHospitals";
import GlobalOppNursing from "../GlobalOppNursing";

const CollegeNursing = () => {
  const [collegeTabNumber, setCollegeTabNumber] = useState(1);

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
      />

      <CollegeBrief collegeTabNumber={collegeTabNumber} />
      <CollegeMessage collegeTabNumber={collegeTabNumber} />
      <CollegePrograms collegeTabNumber={collegeTabNumber} />
      <CollegeHospitals collegeTabNumber={collegeTabNumber} />

      {collegeTabNumber === 1 && (
        <GlobalOppNursing collegeTabNumber={collegeTabNumber} />
      )}
    </div>
  );
};

export default CollegeNursing;
