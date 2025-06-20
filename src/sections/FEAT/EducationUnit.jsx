// import { useState } from "react";

// const tabs = [
//   {
//     name: "Educational Research",
//     content: "",
//   },
//   {
//     name: "Teaching–Learning",
//     content: `
//     - Learning Resource Materials, Academic Books, and Notebooks uploaded to LMS every semester.
//     - 240 Electronic Question Banks developed per subject with 10% yearly updates.
//     - Additional publication support for advanced learners; remedial and review classes for slow learners.
//     `,
//   },
//   {
//     name: "Assessment & Evaluation",
//     content: "",
//   },
//   {
//     name: "Curriculum Design and Updation",
//     content: "",
//   },
//   {
//     name: "Faculty Development & Capacity Building",
//     content: "",
//   },
// ];

// export default function EducationUnitTabs() {
//   const [activeTab, setActiveTab] = useState(tabs[1]);

//   return (
//     <div className="p-8 bg-[#f9f9f9] font-[Oswald]">
//       {/* Title and Description */}
//       <div className="border-l-8 border-[#eb4a2d] pl-4 mb-4">
//         <h1 className="text-4xl font-medium text-gray-900">EDUCATION UNIT</h1>
//       </div>
//       <p className="text-gray-600 text-sm font-light max-w-4xl mb-6">
//         Part of the School of Higher Educational Research (SHER), the
//         Educational Unit advances teaching excellence and academic best
//         practices through regular sensitization and orientation workshops,
//         ensuring continuous improvement in pedagogy and curriculum delivery.
//       </p>

//       {/* Tabs */}
//       <div className="border-b border-gray-300 flex flex-wrap gap-6 text-lg font-light text-gray-600">
//         {tabs.map((tab) => (
//           <button
//             key={tab.name}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 transition-all duration-300 relative ${
//               activeTab.name === tab.name ? "text-[#0a2c61] font-bold" : ""
//             }`}
//           >
//             {tab.name}
//             {activeTab.name === tab.name && (
//               <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0a2c61]" />
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="mt-6 text-gray-800 text-base font-light whitespace-pre-line">
//         {activeTab.content || "Content will be available soon."}
//       </div>

//       {/* Footer Link */}
//       {activeTab.name === "Teaching–Learning" && (
//         <div className="mt-6 text-[#0a2c61] font-semibold text-sm underline">
//           <a href="#" className="hover:text-blue-900">
//             Unique teaching learning assessment initiatives
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }import { useState } from "react";

import { useState } from "react";

const tabs = [
  {
    name: "Educational<br/>Research",
    content: `
      - Promote student and faculty research with a target of 10% educational research publications.<br/>
      - 08 copyrights and 12 conference papers published by students and faculty.
    `,
  },
  {
    name: "Teaching<br/>–Learning",
    content: `
      - Learning Resource Materials, Academic Books, and Notebooks uploaded to LMS every semester.<br/>
      - 240 Electronic Question Banks developed per subject with 10% yearly updates.<br/>
      - Additional publication support for advanced learners; remedial and review classes for slower learners.
    `,
  },
  {
    name: "Assessment & Evaluation",
    content: `
      - Assessments aligned with Course and Program Outcomes.<br/>
      - Internal question papers validated using Bloom’s Taxonomy across institutional levels.<br/>
      - Multiple assessment methods: offline/online tests, practicals, viva, project demos—all contributing to attainment metrics.
    `,
  },
  {
    name: "Curriculum Design and Updation",
    content: `
      - Workshops on curriculum design and revision conducted using structured 8-step and 11-step models.<br/>
      - Faculty-recorded video lectures disseminated via LMS.<br/>
      - Subject-wise theory/practical orientation sessions conducted before each semester.
    `,
  },
  {
    name: "Faculty Development & Capacity Building",
    content: `
      - Minimum two Faculty Development Programs (FDPs) per year per faculty on emerging technologies.<br/>
      - Faculty deliver expert lectures on AI in Healthcare and Data Analytics at medical institutions, aligned with NEP 2020 goals.<br/>
      - Active participation in national-level teaching enhancement platforms such as SWAYAM, NPTEL, and ARPIT, with certification encouraged.
    `,
  },
];

export default function DentalEducationTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    // <div className="bg-[#f0efef] py-16 px-4 font-[Arial]">
    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-3xl font-[500] mb-3  font-oswald-medium text-[#707070] text-center lg:text-left">
    //       <hr className="w-16 sm:w-20 border-[#F04E30] mb-3 border-t-4 mx-auto lg:mx-0" />
    //       EDUCATION UNIT
    //     </h1>

    //     <p className="text-gray-600 text-sm font-light max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
    //       Part of the School of Higher Educational Research (SHER), the
    //       Educational Unit advances teaching excellence and academic best
    //       practices through regular sensitization and orientation workshops,
    //       ensuring continuous improvement in pedagogy and curriculum delivery.
    //     </p>

    //     <div className="border-b border-gray-400 flex flex-wrap justify-center lg:justify-start gap-10 md:gap-25 mt-6 text-lg font-[300] font-oswald-medium text-gray-600">
    //       {tabs.map((tab, index) => (
    //         <div key={index} className="relative">
    //           <button
    //             onClick={() => setActiveTab(tab)}
    //             dangerouslySetInnerHTML={{ __html: tab.name }}
    //             className={`pb-2 transition-all font-[300] font-oswald-medium duration-300 max-w-[10rem] text-center lg:text-left break-words ${
    //               activeTab.name === tab.name ? "text-[#0a2c61] font-[600]" : ""
    //             }`}
    //           />
    //           {activeTab.name === tab.name && (
    //             <div className="absolute bottom-0 left-1/2 font-[400] font-oswald-medium transform -translate-x-1/2 lg:left-[0.3rem] lg:translate-x-0 w-[80%] h-[3px] bg-[#0a2c61]" />
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //     {/*
    //     <div
    //       className="mt-6 text-gray-800 text-base font-light max-w-4xl  mx-auto lg:mx-0 text-center lg:text-left"
    //       dangerouslySetInnerHTML={{ __html: activeTab.content }}
    //     /> */}
    //     <div
    //       className="mt-6 text-gray-800 text-base font-light leading-10 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left"
    //       dangerouslySetInnerHTML={{ __html: activeTab.content }}
    //     />

    //     {/* ✅ Missing "Know More" Section from Image */}
    //     <div className="mt-13 text-center lg:text-left">
    //       <p className="text-[#0a2c61] text-[16px] font-bold font-oswaldMedium">
    //         Unique teaching learning assessment initiatives
    //       </p>
    //       <a
    //         href="#"
    //         className="text-[#004AAD] text-sm underline font-[400] font-oswaldMedium"
    //       >
    //         Know more
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#f0efef] font-[Arial] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-[500] mb-3 font-oswald-medium text-[#707070] text-center lg:text-left">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-3 border-t-4 mx-auto lg:mx-0" />
          EDUCATION UNIT
        </h1>

        <p className="text-gray-600 text-sm font-light max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
          Part of the School of Higher Educational Research (SHER), the
          Educational Unit advances teaching excellence and academic best
          practices through regular sensitization and orientation workshops,
          ensuring continuous improvement in pedagogy and curriculum delivery.
        </p>

        {/* Tabs */}
        <div className="border-b border-gray-400 flex flex-wrap justify-center lg:justify-start gap-10 md:gap-20 mt-6 text-lg font-[300] font-oswald-medium text-gray-600">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="relative w-[10rem] text-center lg:text-left break-words"
            >
              <button
                onClick={() => setActiveTab(tab)}
                className={`pb-2 w-full whitespace-normal break-words transition-all duration-300 min-h-[3.5rem] ${
                  activeTab.name === tab.name ? "text-[#0a2c61] font-[600]" : ""
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: tab.name }} />
              </button>
              {activeTab.name === tab.name && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-[0.3rem] lg:translate-x-0 w-[90%] h-[3px] bg-[#0a2c61]" />
              )}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div
          className="mt-6 text-gray-800 text-base font-light leading-10 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left"
          dangerouslySetInnerHTML={{ __html: activeTab.content }}
        />

        {/* Know More Section */}
        <div className="mt-13 text-center lg:text-left">
          {/* <p className="text-[#0a2c61] text-[16px] font-bold font-oswaldMedium">
            Unique teaching learning assessment initiatives
          </p> */}
          <a
            href="#"
            className="text-[#004AAD] text-sm underline font-[400] font-oswaldMedium"
          >
            Know more
          </a>
        </div>
      </div>
    </div>
  );
}
