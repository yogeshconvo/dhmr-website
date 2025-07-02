// import React from "react";
// import DOCTOR from "../../assets/DMCP/AH.jpg";

// const AffiliatedHospital = () => {
//   return (
//     <div className="bg-[#fefaf3] w-full px-4 pt-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
//       <div className=" flex mx-auto gap-8">
//         {/* Left Content */}
//         <div className="w-full lg:w-[600px] pb-6 lg:pb-10">
//           {/* Heading */}
//           <div className="mb-2">
//             <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] mb-4 tracking-wider font-oswald-medium">
//               <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//               AFFILIATED HOSPITALS
//             </h2>
//             <h4 className="text-xl font-[Arial] sm:text-2xl md:text-3xl text-[#58595B] tracking-tight font-[400]">
//               Acharya Vinoba Bhave Rural Hospital (AVBRH)
//             </h4>
//             <h4 className="text-lg md:text-2xl font-[Arial] text-[#58595B] tracking-tight font-[400]">
//               Real-Time Clinical Learning
//             </h4>
//           </div>

//           {/* Subheading Paragraph */}
//           <p className="text-[#58595B] text-sm sm:text-base font-oswald font-[400] pb-2 tracking-normal">
//             Acharya Vinoba Bhave Rural Hospital (AVBRH), a multispecialty
//             teaching hospital under DMIHER, serves as the primary clinical
//             training center for the Pharm D program and internship site for
//             D.Pharm, B.Pharm, and M.Pharm students.
//           </p>
//           <p className="tracking-normal text-[#58595B] font-[600] text-sm sm:text-base pb-2">
//             Students gain hands-on experience in clinical pharmacy, patient
//             counselling, and drug management, supported by an in-house Clinical
//             Research Centre and Pharmacovigilance Unit. These advanced
//             facilities deepen competencies in evidence-based care, medication
//             safety, and pharmaceutical research—equipping students for impactful
//             careers in clinical practice, pharmacovigilance, and R&D.
//           </p>

//           {/* Stats */}
//         </div>

//         {/* Right Image Section */}
//         <div className="relative w-full lg:w-auto">
//           <img
//             src={DOCTOR}
//             alt="SPDC Building"
//             className="w-full max-w-full lg:h-[350px] h-auto object-cover rounded-sm mb-10 sm:mt-6"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AffiliatedHospital;
import React from "react";
import DOCTOR from "../../assets/DMCP/AH.jpg";

const AffiliatedHospital = () => {
  return (
    <div className="bg-[#fefaf3] w-full px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="w-full pb-6 lg:pb-10 text-center lg:text-left px-2 sm:px-0">
          {/* Heading */}
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[500] text-[#707070] mb-4 tracking-wider font-oswald-medium">
              <hr className="w-16 sm:w-20 border-[#F04E30] mx-auto lg:mx-0 mb-4 border-t-4" />
              AFFILIATED HOSPITALS
            </h2>
            <h4 className="text-lg sm:text-xl md:text-2xl font-[Arial] text-[#58595B] tracking-tight font-[400]">
              Acharya Vinoba Bhave Rural Hospital (AVBRH)
            </h4>
            <h4 className="text-base sm:text-lg md:text-2xl font-[Arial] text-[#58595B] tracking-tight font-[400]">
              Real-Time Clinical Learning
            </h4>
          </div>

          {/* Paragraphs */}
          <p className="text-[#58595B] text-sm sm:text-base font-oswald font-[400] pb-3 tracking-normal">
            Acharya Vinoba Bhave Rural Hospital (AVBRH), a multispecialty
            teaching hospital under DMIHER, serves as the primary clinical
            training center for the Pharm D program and internship site for
            D.Pharm, B.Pharm, and M.Pharm students.
          </p>
          <p className="tracking-normal text-[#58595B] font-[600] text-sm sm:text-base pb-2">
            Students gain hands-on experience in clinical pharmacy, patient
            counselling, and drug management, supported by an in-house Clinical
            Research Centre and Pharmacovigilance Unit. These advanced
            facilities deepen competencies in evidence-based care, medication
            safety, and pharmaceutical research—equipping students for impactful
            careers in clinical practice, pharmacovigilance, and R&D.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-md lg:w-auto flex justify-center">
          <img
            src={DOCTOR}
            alt="SPDC Building"
            className="w-full h-auto max-h-[350px] object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default AffiliatedHospital;
