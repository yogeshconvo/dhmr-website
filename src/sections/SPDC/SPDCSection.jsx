// import React from "react";
// import buildingImage from "../../assets/SPDC/SPDC-Building.png";

// const SPDCSection = () => {
//   return (
//     <div className="bg-[#fefaf3] px-6 md:px-35 py-20 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
//       {/* Left Content */}
//       <div className="lg:w-1/2 pb-10">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl text-[#707070] tracking-wide font-oswald-medium leading-tight mb-4">
//           <span className="block border-t-4 border-[#F25022] w-16 mb-3"></span>
//           SHARAD PAWAR DENTAL <br /> COLLEGE & HOSPITAL
//         </h2>

//         {/* Subheading Paragraph */}
// <p className="text-gray-500 text-base font-oswald font-[400] leading-relaxed mb-6">
//   One of Central India’s largest and most reputed teaching hospitals,
//   SPDC is committed to promotive, preventive, and therapeutic dental
//   care of the highest quality. Continuously evolving to meet the growing
//   needs of Vidarbha and neighboring states, the hospital stands as a
//   pillar of accessible oral healthcare. Notably, it remained fully
//   operational during the COVID-19 pandemic, ensuring uninterrupted
//   service to the community—guided by its vision of “Optimal Oral Health
//   through Quality Care.”
// </p>

//         {/* Stats */}
// <ul className="text-sm text-gray-500 space-y-2 mb-6">
//   <li>
//     <span className="text-[#F25022] font-semibold">34+ years</span> of
//     legacy in dental care
//   </li>
//   <li>
//     <span className="text-blue-600 font-semibold">400+ patients</span>{" "}
//     served daily
//   </li>
//   <li>
//     <span className="text-yellow-500 font-semibold">
//       325+ dental chairs
//     </span>
//   </li>
//   <li>
//     Attached{" "}
//     <span className="text-[#F25022] font-semibold">
//       1,500+ bed hospital, multi-specialty and cancer
//     </span>{" "}
//     hospital
//   </li>
//   <li>
//     <span className="text-[#F25022] font-semibold">
//       20 dedicated beds
//     </span>{" "}
//     for dental care with advanced diagnostics and treatment facilities
//   </li>
// </ul>

//         {/* Know More Link */}
//         <a href="#" className="text-blue-300 text-[10px] underline">
//           Know more about SPDC
//         </a>
//       </div>

//       {/* Right Image Section */}
// <div className="lg:w-1/2">
//   <div className="rounded-lg overflow-hidden shadow-lg relative">
// <img
//   src={buildingImage}
//   alt="SPDC Building"
//   className="w-full h-auto object-cover"
// />
//   </div>
// </div>
//     </div>
//   );
// };

// export default SPDCSection;

import React from "react";
import buildingImage from "../../assets/SPDC/SPDC-Building.png";
const AffiliatedHospital = () => {
  return (
    <div className="bg-[#fefaf3] px-4 justify-center pt-10">
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-[510px] pb-6 lg:pb-10">
          {/* Heading */}
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
              <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2"></span>
              SHARAD PAWAR DENTAL <br /> COLLEGE & HOSPITAL
            </h2>
          </div>

          {/* Subheading Paragraph */}
          <p className="text-gray-500 text-base font-oswald font-[400]  mb-3">
            One of Central India’s largest and most reputed teaching hospitals,
            SPDC is committed to promotive, preventive, and therapeutic dental
            care of the highest quality. Continuously evolving to meet the
            growing needs of Vidarbha and neighboring states, the hospital
            stands as a pillar of accessible oral healthcare. Notably, it
            remained fully operational during the COVID-19 pandemic, ensuring
            uninterrupted service to the community—guided by its vision of
            “Optimal Oral Health through Quality Care.”
          </p>

          {/* Stats */}
          <ul className="text-lg text-gray-500 divide-y divide-gray-300">
            <li className="py-2">
              <span className="text-[#F25022] font-semibold">34+ years</span> of
              legacy in dental care
            </li>
            <li className="py-2">
              <span className="text-blue-600 font-semibold">400+ patients</span>{" "}
              served daily
            </li>
            <li className="py-2">
              <span className="text-yellow-500 font-semibold">
                325+ dental chairs
              </span>
            </li>
            <li className="py-2">
              Attached to a{" "}
              <span className="text-[#F25022] font-semibold">
                1,500+ bed multi-specialty and cancer hospital
              </span>
            </li>
            <li className="py-2">
              <span className="text-[#F25022] font-semibold">
                20 dedicated beds
              </span>{" "}
              for dental care with advanced diagnostics and treatment facilities
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="relative  w-full lg:w-[670px]">
          <img
            src={buildingImage}
            alt="SPDC Building"
            className="h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AffiliatedHospital;
