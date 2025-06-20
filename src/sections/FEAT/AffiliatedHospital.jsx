// import React from "react";
// import DOCTOR from "../../assets/FEAT/AH.png";
// const AffiliatedHospital = () => {
//   return (
//     <div className="bg-[#fefaf3] px-6 md:px-35 pt-15 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
//       {/* Left Content */}
//       <div className="lg:w-[510px] pb-10">
//         {/* Heading */}
//         <div className="mb-2">
//           {" "}
//           <h2 className="text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
//             <span className="block border-t-4 border-[#F04E30] w-25 mb-2"></span>
//             AFFILIATED HOSPITALS
//           </h2>
//           <h4 className="text-3xl  text-[#58595B] tracking-tight font-oswald font-[400] ">
//             {/* <span className="block border-t-4 border-[#F25022] w-10 mb-3"></span> */}
//             Clinical Learning Goes
//             <br /> Beyond Classrooms
//           </h4>
//         </div>
//         {/* Subheading Paragraph */}
//         <p className="text-[#58595B] text-xm font-oswald font-[400] pb-1 tracking-normal">
//           “At FEAT, students gain hands-on experience at the forefront of
//           healthcare. Strategic partnerships with AVBRH, RNPC, SPDC, and MGAC
//           Techno Health provide exceptional clinical exposure through
//           internships, collaborative projects, and immersive learning programs.”{" "}
//         </p>
//         <p className="tracking-normal text-[#58595B] font-[600] pb-1 ">
//           Hands-on Learning: A 1500+ bedded teaching hospital enables real
//           life-based research in diagnostics, precision medicine, and AI-powered
//           care.{" "}
//         </p>{" "}
//         <p className="text-[#58595B] text-xm font-oswald font-[400] border-b  pb-1 tracking-normal">
//           The School of Experiential Learning (SEL) and Simulation Centre (SC)
//           sharpen practical skills through advanced simulations and technical
//           modules
//         </p>
//         {/* Stats */}
//         <ul className=" text-gray-500 text-xm mb-4">
//           <li className="border-b pb-1 pt-1">
//             <span className="text-[#269BFF] text-xm  font-semibold">
//               {" "}
//               Electives in Clinical Engineering. Techno-health research. Access
//               to live data.
//             </span>{" "}
//             Integrated teaching that connects engineering with the evolving
//             world of healthcare.
//           </li>
//           <li>
//             <span className="text-[#F7941D] text-xm font-semibold">
//               Students Immersion Program:
//             </span>{" "}
//             <br />
//             <span className="text-xm">
//               Internship at Hospital (AVBRH, Nelson, DMMC) <br />
//               Life Saving Skills: <br /> - SEL <br /> - Medical Device
//               Development - Neck Posture Monitoring Device <br /> - Assistive
//               Wearable Device to suppress hand tremor in Parkinson’s
//             </span>
//           </li>

//           {/* <li>
//             <span className="text-yellow-500 font-semibold">
//               325+ dental chairs
//             </span>

//           </li> */}
//         </ul>
//       </div>
//       {/* Right Image Section */}
//       <div className="">
//         <img
//           src={DOCTOR}
//           alt="SPDC Building"
//           className="w-full h-[600px] mt-14 ml-3 rounded-xl object-contain"
//         />

//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//           <span className="w-3 h-3 bg-white rounded-full"></span>
//           <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
//           <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
//         </div>
//         <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
//           <svg
//             className="w-4 h-4 text-black"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M7.05 4.55a1 1 0 0 0 0 1.4L10.1 9.1 7.05 12.15a1 1 0 1 0 1.4 1.4l4-4a1 1 0 0 0 0-1.4l-4-4a1 1 0 0 0-1.4 0z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AffiliatedHospital;

import React from "react";
import DOCTOR from "../../assets/FEAT/AH.png";

const AffiliatedHospital = () => {
  return (
    <div className="bg-[#fefaf3] px-4 md:px-30 pt-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
      {/* Left Content */}
      <div className="w-full lg:w-[510px] pb-6 lg:pb-10">
        {/* Heading */}
        <div className="mb-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
            <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2"></span>
            AFFILIATED HOSPITALS
          </h2>
          <h4 className="text-xl font-[Arial] sm:text-2xl md:text-3xl text-[#58595B] tracking-tight font-[400]">
            Clinical Learning Goes
            <br className="hidden sm:block" /> Beyond Classrooms
          </h4>
        </div>

        {/* Subheading Paragraph */}
        <p className="text-[#58595B] text-sm sm:text-base font-oswald font-[400] pb-2 tracking-normal">
          “At FEAT, students gain hands-on experience at the forefront of
          healthcare. Strategic partnerships with AVBRH, RNPC, SPDC, and MGAC
          Techno Health provide exceptional clinical exposure through
          internships, collaborative projects, and immersive learning programs.”
        </p>
        <p className="tracking-normal text-[#58595B] font-[600] text-sm sm:text-base pb-2">
          Hands-on Learning: A 1500+ bedded teaching hospital enables real
          life-based research in diagnostics, precision medicine, and AI-powered
          care.
        </p>
        <p className="text-[#58595B] text-sm sm:text-base font-oswald font-[400] border-b pb-2 tracking-normal">
          The School of Experiential Learning (SEL) and Simulation Centre (SC)
          sharpen practical skills through advanced simulations and technical
          modules
        </p>

        {/* Stats */}
        <ul className="text-gray-500 text-sm sm:text-base mt-2 mb-4 space-y-2">
          <li className="border-b pb-2 pt-1">
            <span className="text-[#269BFF] font-semibold">
              Electives in Clinical Engineering. Techno-health research. Access
              to live data.
            </span>{" "}
            Integrated teaching that connects engineering with the evolving
            world of healthcare.
          </li>
          <li>
            <span className="text-[#F7941D] font-semibold">
              Students Immersion Program:
            </span>
            <br />
            <span>
              Internship at Hospital (AVBRH, Nelson, DMMC) <br />
              Life Saving Skills:
              <br /> - SEL
              <br /> - Medical Device Development - Neck Posture Monitoring
              Device
              <br /> - Assistive Wearable Device to suppress hand tremor in
              Parkinson’s
            </span>
          </li>
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-auto">
        <img
          src={DOCTOR}
          alt="SPDC Building"
          className="w-full max-w-full lg:h-[600px] h-auto object-contain rounded-xl md:mt-15 sm:mt-6"
        />

        {/* Dots for slider UI (static for now) */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-white rounded-full opacity-70"></span>
          <span className="w-2.5 h-2.5 bg-white rounded-full opacity-70"></span>
        </div> */}

        {/* Right Arrow (static for now) */}
        {/* <div className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
          <svg
            className="w-4 h-4 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M7.05 4.55a1 1 0 0 0 0 1.4L10.1 9.1 7.05 12.15a1 1 0 1 0 1.4 1.4l4-4a1 1 0 0 0 0-1.4l-4-4a1 1 0 0 0-1.4 0z" />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default AffiliatedHospital;
