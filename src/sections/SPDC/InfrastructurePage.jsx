// import React, { useState, useEffect, useRef } from "react";
// import Img1 from "../../assets/SPDC/Holistic/1.png";
// import Img2 from "../../assets/SPDC/Holistic/2.png";
// import Img3 from "../../assets/SPDC/Holistic/3.jpg";
// import Img4 from "../../assets/SPDC/Holistic/4.jpg";
// import Img5 from "../../assets/SPDC/Holistic/5.jpg";
// import Img6 from "../../assets/SPDC/Holistic/6.jpg";

// import icon5 from "../../assets/SPDC/Icons/icon5.png";
// import icon7 from "../../assets/SPDC/Icons/icon7.png";
// import icon8 from "../../assets/SPDC/Icons/icon8.png";
// import icon9 from "../../assets/SPDC/Icons/icon9.png";
// import { img } from "framer-motion/client";

// const sections = [
//   {
//     id: 0,
//     label: "Teaching-Learning Facilities:",
//     image: Img1,
//     content: `12 classrooms and seminar room – ICT-enabled, WiFi campus, Learning Management System (LMS)`,
//   },
//   {
//     id: 1,
//     label: "Laboratory/Hospital Facilities:",
//     image: Img2,
//     content: `325+ dental chairs, affiliated with 1500+ bedded hospital, 20 dedicated beds for dental care with advanced diagnostics and treatment facilities. Oral Cancer Unit (SGM Cancer Hospital), Smile Train Center, CBCT, CAD-CAM with ceramic printing, mobile dental van, implant and laser unit, advanced micro-endodontic clinic.`,
//   },
//   {
//     id: 2,
//     label: "Advanced Teaching, Museum & Skilllab:",
//     image: Img3,
//     content: `“Anubhuti” – Special Dental Museum, Advanced Digital Skill Lab – Exo CAD Lab with state-of-the-art facilities, 3D theatre, 5 preclinical labs including simulation lab`,
//   },
//   {
//     id: 3,
//     label: "Library Facilities:",
//     image: Img4,
//     content: `Rich collection of books, journals, digital data, subscriptions; ICT-enabled, digital access with remote connectivity`,
//   },
//   {
//     id: 4,
//     label: "Technology-Enabled Digital Learning",
//     image: Img5,
//     content: `Anatomage, EXOCAD, Advanced Skill Lab, CBCT, Nemoceph, EXOCAD, CAD CAM, Endomicroscope`,
//   },
//   {
//     id: 5,
//     label: "Other Facilities:",
//     image: Img6,
//     content: `Comprehensive dental clinics, satellite centers, tobacco cessation center, orofacial pain clinic, etc`,
//   },
// ];

// function InfrastructurePage() {
//   const [activeId, setActiveId] = useState(0);
//   const textRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     if (textRef.current && imageRef.current) {
//       imageRef.current.style.height = `${textRef.current.offsetHeight}px`;
//     }
//   }, [activeId]);

//   const getHeadingClass = (id) =>
//     `text-lg cursor-pointer transition ${
//       activeId === id
//         ? "text-primary font-bold"
//         : "text-[#58595B] hover:text-primary"
//     }`;

//   return (
//     <div className="py-20 bg-white">
//       <div className=" w-full max-w-7xl mx-auto flex flex-wrap items-start justify-center gap-8">
//         {/* Text Section */}
//         <div ref={textRef} className="flex-2 min-w-[315px]">
//           <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
//             <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//             HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
//           </h2>
//           <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
//             {sections.map((section) => (
//               <div key={section.id} className="mb-3">
//                 <p>
//                   <span
//                     onClick={() => setActiveId(section.id)}
//                     className={getHeadingClass(section.id)}
//                   >
//                     {section.label}
//                   </span>
//                   <br />
//                   <span className="text-sm text-[#707070]">
//                     {section.content}
//                   </span>
//                 </p>
//                 <hr className="my-2" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Image Section */}
//         <div ref={imageRef} className="flex-3 min-w-[315px] w-full">
//           <img
//             src={sections[activeId].image}
//             alt={sections[activeId].label}
//             className="w-[670px] h-[500px] md:mt-32 object-cover rounded-md overflow-hidden shadow-lg flex-shrink-0"
//           />
//         </div>
//       </div>

//       <section className="max-w-6xl mx-auto mt-16">
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           <button className="bg-[#F04E30] text-white text-base sm:text-xl font-medium px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
//             Transcripts – UG & PG
//           </button>
//           <button className="bg-[#102B64] text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
//             Electives Offered
//           </button>
//           <button className="bg-blue-900 hover:bg-blue-800 text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
//             CHCP Program
//           </button>
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-10">
//           <img
//             src={icon5}
//             alt="Johns Hopkins University"
//             className="h-25 object-contain border-r pr-6 last:border-r-0"
//           />
//           <img
//             src={icon7}
//             alt="University of Pennsylvania"
//             className="h-25 object-contain border-r pr-6 last:border-r-0"
//           />
//           <img
//             src={icon8}
//             alt="Stanford University"
//             className="h-25 object-cover border-r pr-6 last:border-r-0"
//           />
//           <img
//             src={icon9}
//             alt="University of Hong Kong"
//             className="h-13 object-contain pr-6"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default InfrastructurePage;
import React, { useState, useEffect, useRef } from "react";
import Img1 from "../../assets/SPDC/Holistic/1.png";
import Img2 from "../../assets/SPDC/Holistic/2.png";
import Img3 from "../../assets/SPDC/Holistic/3.jpg";
import Img4 from "../../assets/SPDC/Holistic/4.jpg";
import Img5 from "../../assets/SPDC/Holistic/5.jpg";
import Img6 from "../../assets/SPDC/Holistic/6.jpg";

import icon5 from "../../assets/SPDC/Icons/icon5.png";
import icon7 from "../../assets/SPDC/Icons/icon7.png";
import icon8 from "../../assets/SPDC/Icons/icon8.png";
import icon9 from "../../assets/SPDC/Icons/icon9.png";

const sections = [
  {
    id: 0,
    label: "Teaching-Learning Facilities:",
    image: Img1,
    content: `12 classrooms and seminar room – ICT-enabled, WiFi campus, Learning Management System (LMS)`,
  },
  {
    id: 1,
    label: "Laboratory/Hospital Facilities:",
    image: Img2,
    content: `325+ dental chairs, affiliated with 1500+ bedded hospital, 20 dedicated beds for dental care with advanced diagnostics and treatment facilities. Oral Cancer Unit (SGM Cancer Hospital), Smile Train Center, CBCT, CAD-CAM with ceramic printing, mobile dental van, implant and laser unit, advanced micro-endodontic clinic.`,
  },
  {
    id: 2,
    label: "Advanced Teaching, Museum & Skilllab:",
    image: Img3,
    content: `“Anubhuti” – Special Dental Museum, Advanced Digital Skill Lab – Exo CAD Lab with state-of-the-art facilities, 3D theatre, 5 preclinical labs including simulation lab`,
  },
  {
    id: 3,
    label: "Library Facilities:",
    image: Img4,
    content: `Rich collection of books, journals, digital data, subscriptions; ICT-enabled, digital access with remote connectivity`,
  },
  {
    id: 4,
    label: "Technology-Enabled Digital Learning",
    image: Img5,
    content: `Anatomage, EXOCAD, Advanced Skill Lab, CBCT, Nemoceph, EXOCAD, CAD CAM, Endomicroscope`,
  },
  {
    id: 5,
    label: "Other Facilities:",
    image: Img6,
    content: `Comprehensive dental clinics, satellite centers, tobacco cessation center, orofacial pain clinic, etc`,
  },
];

function InfrastructurePage() {
  const [activeId, setActiveId] = useState(0);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      imageRef.current.style.height = `${textRef.current.offsetHeight}px`;
    }
  }, [activeId]);

  const getHeadingClass = (id) =>
    `text-lg cursor-pointer transition ${
      activeId === id
        ? "text-primary font-bold"
        : "text-[#58595B] hover:text-primary"
    }`;

  return (
    <div className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 px-4">
        {/* Text Section */}
        <div ref={textRef} className="w-full lg:w-[50%] min-w-[300px]">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h2>
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {sections.map((section) => (
              <div
                key={section.id}
                className="mb-3 border-b border-gray-500 pb-3 last:border-b-0"
              >
                <p>
                  <span
                    onClick={() => setActiveId(section.id)}
                    className={getHeadingClass(section.id)}
                  >
                    {section.label}
                  </span>
                  <br />
                  <span className="text-sm text-[#707070]">
                    {section.content}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="w-full  md:w-[50%] min-w-[300px]">
          <img
            src={sections[activeId].image}
            alt={sections[activeId].label}
            className="w-full  max-h-[500px] md:mt-32 object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Buttons */}
      <section className="max-w-6xl mx-auto md:mt-16 px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-[#F04E30] text-white text-base sm:text-xl font-medium px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Transcripts – UG & PG
          </button>
          <button className="bg-[#102B64] text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Electives Offered
          </button>
          <button className="bg-blue-900 hover:bg-blue-800 text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            CHCP Program
          </button>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="pr-4 border-r border-gray-300 h-[100px] flex items-center">
            <img
              src={icon5}
              alt="Johns Hopkins University"
              className="max-h-[100px] w-auto object-contain"
            />
          </div>
          <div className="pr-4 border-r border-gray-300 h-[100px] flex items-center">
            <img
              src={icon7}
              alt="University of Pennsylvania"
              className="max-h-[100px] w-auto object-contain"
            />
          </div>
          <div className="pr-4 border-r border-gray-300 h-[100px] flex items-center">
            <img
              src={icon8}
              alt="Stanford University"
              className="max-h-[100px] w-auto object-contain"
            />
          </div>
          <div className="h-[100px] flex items-center">
            <img
              src={icon9}
              alt="University of Hong Kong"
              className="max-h-[60px] w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfrastructurePage;
