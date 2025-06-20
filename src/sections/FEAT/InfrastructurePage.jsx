// import HLImg from "../../assets/FEAT/HL.png";
// import icon1 from "../../assets/FEAT/InfraIcons/1.png";
// import icon2 from "../../assets/FEAT/InfraIcons/2.png";
// import icon3 from "../../assets/FEAT/InfraIcons/3.png";
// import icon4 from "../../assets/FEAT/InfraIcons/4.png";
// import React, { useState } from "react";

// export default function HolisticLearningSection() {
//   const [activeIndex, setActiveIndex] = useState(0); // Set first section active by default

//   const sections = [
//     {
//       title: "Teaching–Learning Facilities:",
//       content:
//         "Tiered classrooms with smartboards, high-end projectors, Wi-Fi enabled campus. Digital learning tools: LMS, ERP, Academic Book, Notebook, LRM, Coursera",
//       image: HLImg,
//     },
//     {
//       title: "Laboratory & Computing Facilities:",
//       content: `24×7 access to computer labs with HP 285 Ryzen MT desktops (Ryzen-5 5600G, 8GB RAM, 512GB SSD, Wi-Fi & Bluetooth, Windows 11, HP 19.5” Monitor)

// High-end servers: Up to 2× Intel® Xeon® Scalable (20 cores max), 16× DDR4 DIMM slots, up to 1TB RAM, up to 14× 3.5” SAS/SATA HDDs (224TB max)

// Intel Server: Intel® Xeon® Silver 4310 (12 cores, 2.1GHz, 18MB cache), 128GB RAM, Software stack includes Ubuntu 18.04, Intel® oneAPI, AI Analytics Toolkit, Horovod, Intel® MPI, JupyterHub, Keras, Seaborn`,
//       image: null,
//     },
//     {
//       title: "Skill & Innovation Labs:",
//       content:
//         "IBM School of Emerging Technologies, Intel Unnati School of Emerging Technologies, AICTE IDEA-Lab, e-Yantra Lab (IIT Bombay), Language Lab, R&D Lab, Bio 3D Printing Lab, Tissue Engineering Lab, School of Experiential Learning (SEL), Incubation Centre",
//       image: null,
//     },
//     {
//       title: "Research & Project Lab:",
//       content:
//         "Dedicated space for student-led innovation and research initiatives",
//       image: null, // No image here
//     },
//   ];

//   return (
//     // <div className=" py-16 px-15">
//     //   <section className="max-w-7xl mx-auto px-4">
//     //     <h1 className="text-4xl font-[Oswald] font-medium text-[#707070] mb-8">
//     //       <span className="block border-t-4 border-[#F04E30] w-20 mb-3"></span>
//     //       HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
//     //     </h1>
//     //     <div className="flex flex-col md:flex-row gap-8">
//     //       {/* Left Text Column (40%) */}
//     //       <div className="w-full md:basis-[30%] text-gray-800">
//     //         {sections.map((section, index) => (
//     //           <div
//     //             key={index}
//     //             className="border-b pb-2 mb-2 cursor-pointer last:border-b-0"
//     //             onClick={() => setActiveIndex(index)}
//     //           >
//     //             <h2
//     //               className={`text-xl font-semibold ${
//     //                 activeIndex === index ? "text-blue-900" : "text-gray-700"
//     //               }`}
//     //             >
//     //               {section.title}
//     //             </h2>
//     //             <p className="text-sm whitespace-pre-line">{section.content}</p>
//     //           </div>
//     //         ))}
//     //       </div>

//     //       {/* Right Image Column (60%) */}
//     //       <div className="w-full md:basis-[60%] flex items-center justify-center">
//     //         {sections[activeIndex].image ? (
//     //           <img
//     //             src={sections[activeIndex].image}
//     //             alt={sections[activeIndex].title}
//     //             className="rounded-xl w-full h-auto shadow-lg object-contain"
//     //           />
//     //         ) : (
//     //           <div className="text-gray-400 italic text-center border p-10 rounded-lg shadow-inner">
//     //             No image available
//     //           </div>
//     //         )}
//     //       </div>
//     //     </div>
//     //   </section>

//     //   <section className="max-w-6xl mx-auto mt-16">
//     //     {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
//     //       <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow-2xl">
//     //         Transcripts – UG & PG
//     //       </button>
//     //       <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded shadow-2xl">
//     //         Electives Offered
//     //       </button>
//     //     </div> */}
//     //     <div className="flex flex-wrap font-oswald-medium tracking-wider justify-center gap-6 mb-8">
//     //       <button className="bg-[#F04E30] text-white text-lg font-[500] px-6 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)] tracking-wide">
//     //         Transcripts –  UG & PG
//     //       </button>
//     //       <button className="bg-[#102B64] text-white text-lg px-6 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)] tracking-wide">
//     //         Electives Offered
//     //       </button>
//     //     </div>

//     //     <div className="flex flex-wrap justify-center items-center gap-8">
//     //       <img
//     //         src={icon2}
//     //         alt="Johns Hopkins University"
//     //         className="h-22 object-contain border-r pr-6 last:border-r-0"
//     //       />
//     //       <img
//     //         src={icon3}
//     //         alt="University of Pennsylvania"
//     //         className="h-22 object-contain border-r pr-6 last:border-r-0"
//     //       />
//     //       <img
//     //         src={icon1}
//     //         alt="Stanford University"
//     //         className="h-22 object-cover border-r pr-6 last:border-r-0"
//     //       />
//     //       <img
//     //         src={icon4}
//     //         alt="University of Hong Kong"
//     //         className="h-13 object-contain pr-6"
//     //       />
//     //     </div>

//     //     <div className="text-center mt-6">
//     //       <a href="#" className="text-blue-500 underline text-sm">
//     //         Know more
//     //       </a>
//     //     </div>
//     //   </section>
//     // </div>
//     <div className="py-20 px-20">
//       <section className="max-w-7xl mx-auto px-4">
//         <h1 className="text-4xl font-oswald-medium text-[#707070] mb-8">
//           <span className="block border-t-4 border-[#F04E30] w-20 mb-3"></span>
//           HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
//         </h1>
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Text Column (40%) */}
//           <div className="w-full md:basis-[30%] text-gray-800">
//             {sections.map((section, index) => (
//               <div
//                 key={index}
//                 className="border-b pb-2 mb-2 cursor-pointer last:border-b-0"
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <h2
//                   className={`text-xl font-semibold ${
//                     activeIndex === index ? "text-blue-900" : "text-gray-700"
//                   }`}
//                 >
//                   {section.title}
//                 </h2>
//                 <p className="text-sm whitespace-pre-line">{section.content}</p>
//               </div>
//             ))}
//           </div>

//           {/* Right Image Column (60%) */}
//           <div className="w-full md:basis-[60%] ml-5 flex items-center justify-center">
//             {sections[activeIndex].image ? (
//               <img
//                 src={sections[activeIndex].image}
//                 alt={sections[activeIndex].title}
//                 className="rounded-xl w-full h-auto shadow-lg object-contain"
//               />
//             ) : (
//               <div className="text-gray-400 italic text-center border p-10 rounded-lg shadow-inner">
//                 No image available
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto mt-28 ml-10">
//         <div className="flex flex-wrap font-oswald-medium tracking-wider justify-center gap-6 mb-8">
//           <button className="bg-[#F04E30] text-white text-xl font-[500] px-8 py-2 min-w-[250px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)] tracking-wide">
//             Transcripts –  UG & PG
//           </button>
//           <button className="bg-[#102B64] text-white text-xl px-8 py-2 min-w-[250px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)] tracking-wide">
//             Electives Offered
//           </button>
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-8">
//           <img
//             src={icon2}
//             alt="Johns Hopkins University"
//             className="h-22 object-contain border-r pr-6 last:border-r-0"
//           />
//           <img
//             src={icon3}
//             alt="University of Pennsylvania"
//             className="h-22 object-contain border-r pr-6 last:border-r-0"
//           />
//           <img
//             src={icon1}
//             alt="Stanford University"
//             className="h-22 object-cover border-r pr-6 last:border-r-0"
//           />
//           <img
//             src={icon4}
//             alt="University of Hong Kong"
//             className="h-12 object-contain pr-6"
//           />
//         </div>

//         <div className="text-center mt-6">
//           <a href="#" className="text-blue-500 underline text-sm">
//             Know more
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

import HLImg from "../../assets/FEAT/HL.png";
import icon1 from "../../assets/FEAT/InfraIcons/1.png";
import icon2 from "../../assets/FEAT/InfraIcons/2.png";
import icon3 from "../../assets/FEAT/InfraIcons/3.png";
import icon4 from "../../assets/FEAT/InfraIcons/4.png";
import React, { useState } from "react";

export default function HolisticLearningSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Teaching–Learning Facilities:",
      content:
        "Tiered classrooms with smartboards, high-end projectors, Wi-Fi enabled campus. Digital learning tools: LMS, ERP, Academic Book, Notebook, LRM, Coursera",
      image: HLImg,
    },
    {
      title: "Laboratory & Computing Facilities:",
      content: `24×7 access to computer labs with HP 285 Ryzen MT desktops (Ryzen-5 5600G, 8GB RAM, 512GB SSD, Wi-Fi & Bluetooth, Windows 11, HP 19.5” Monitor)

High-end servers: Up to 2× Intel® Xeon® Scalable (20 cores max), 16× DDR4 DIMM slots, up to 1TB RAM, up to 14× 3.5” SAS/SATA HDDs (224TB max)

Intel Server: Intel® Xeon® Silver 4310 (12 cores, 2.1GHz, 18MB cache), 128GB RAM, Software stack includes Ubuntu 18.04, Intel® oneAPI, AI Analytics Toolkit, Horovod, Intel® MPI, JupyterHub, Keras, Seaborn`,
      image: null,
    },
    {
      title: "Skill & Innovation Labs:",
      content:
        "IBM School of Emerging Technologies, Intel Unnati School of Emerging Technologies, AICTE IDEA-Lab, e-Yantra Lab (IIT Bombay), Language Lab, R&D Lab, Bio 3D Printing Lab, Tissue Engineering Lab, School of Experiential Learning (SEL), Incubation Centre",
      image: null,
    },
    {
      title: "Research & Project Lab:",
      content:
        "Dedicated space for student-led innovation and research initiatives",
      image: null,
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-10 md:px-20">
      {/* Section 1: Text + Image */}
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-oswald-medium text-[#707070] mb-8">
          <span className="block border-t-4 border-[#F04E30] w-20 mb-3"></span>
          HOLISTIC LEARNING AND <br className="hidden sm:block" />
          INFRASTRUCTURE
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left - Text List */}
          <div className="w-full md:basis-[30%] text-gray-800">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border-b pb-2 mb-2 cursor-pointer last:border-b-0"
                onClick={() => setActiveIndex(index)}
              >
                <h2
                  className={`text-lg sm:text-xl font-semibold ${
                    activeIndex === index ? "text-blue-900" : "text-gray-700"
                  }`}
                >
                  {section.title}
                </h2>
                <p className="text-sm whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Right - Image or Placeholder */}
          <div className="w-full md:basis-[60%] md:ml-5 flex items-center justify-center">
            {sections[activeIndex].image ? (
              <img
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                className="rounded-xl w-full h-auto shadow-lg object-contain"
              />
            ) : (
              <div className="text-gray-400 italic text-center border p-10 rounded-lg shadow-inner w-full">
                No image available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Buttons + Icons */}
      <section className="max-w-6xl mx-auto mt-20">
        {/* Buttons */}
        <div className="flex flex-wrap font-oswald-medium justify-center gap-6 mb-8">
          <button className="bg-[#F04E30] text-white text-base sm:text-xl font-medium px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Transcripts – UG & PG
          </button>
          <button className="bg-[#102B64] text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Electives Offered
          </button>
        </div>

        {/* Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          <img
            src={icon2}
            alt="Johns Hopkins University"
            className="h-16 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={icon3}
            alt="University of Pennsylvania"
            className="h-16 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={icon1}
            alt="Stanford University"
            className="h-16 sm:h-20 object-cover border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={icon4}
            alt="University of Hong Kong"
            className="h-12 sm:h-16 object-contain pr-4 sm:pr-6"
          />
        </div>

        <div className="text-center mt-6">
          <a href="#" className="text-blue-500 underline text-sm">
            Know more
          </a>
        </div>
      </section>
    </div>
  );
}
