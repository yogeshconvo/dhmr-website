// import React, { useState } from "react";
// // استبدل الصور المؤقتة لاحقاً بالصور الحقيقية
// import Img1 from "../../assets/sas/holistics/teaching.png";
// import Img2 from "../../assets/sas/holistics/lab.jpg";
// import Img3 from "../../assets/sas/holistics/hospital.png";
// import Img4 from "../../assets/sas/holistics/skill.png";
// import Img5 from "../../assets/sas/holistics/research.jpg";
// import Img6 from "../../assets/sas/holistics/library.png";

// const tabs = [
//   {
//     label: "Teaching–Learning Facilities",
//     img: Img1,
//     content: (
//       <>
//         <b className="text-lg text-[#58595B]">Teaching–Learning Facilities</b>
//         <br />
//         Classrooms with smartboards, high-end projectors, Wi-Fi enabled campus.
//         <br />
//         Digital learning tools: LMS, ERP, Academic Book, Notebook, LRM,
//         Coursera.
//       </>
//     ),
//   },
//   {
//     label: "Laboratory Facilities",
//     img: Img2,
//     content: (
//       <>
//         <b className="text-lg text-[#58595B]">Laboratory Facilities</b>
//         <br />
//         24x7 access to well-equipped computer labs with high-end machines.
//       </>
//     ),
//   },
//   {
//     label: "Associated Hospitals",
//     img: Img3,
//     content: (
//       <>
//         <b className="text-lg text-[#58595B]">Associated Hospitals</b>
//         <br />
//         Acharya Vinoba Bhave Rural Hospital, Shalinitai Meghe Hospital and
//         Research Centre, Shalinitai Meghe Superspeciality Centre, Nelson Mother
//         and Child Care Hospital, Siddharth Gupta Memorial Cancer Hospital.
//       </>
//     ),
//   },
//   {
//     label: "Skill & Innovation Labs",
//     img: Img4,
//     content: (
//       <>
//         <b className="text-lg text-[#58595B]">Skill & Innovation Labs</b>
//         <br />
//         Programs based on Attitude Ethics and Communication, Life and essential
//         skills trainings, GET-SET-GO Employability Training, CPR Courses (Basic
//         life-saving trainings), IDEA LAB (Startup Incubator), BIONEST
//         (Health-related Start-up Incubator).
//       </>
//     ),
//   },
//   {
//     label: "Research Facilities",
//     img: Img5,
//     content: (
//       <>
//         <b className="text-lg text-[#58595B]">Research Facilities</b>
//         <br />
//         Research guidance, financial support for publications, Free access to
//         IEEE Research Articles, Free access to Turnitin Software for Students
//         and Staff is available.
//       </>
//     ),
//   },
//   {
//     label: "Library Facilities",
//     img: Img6,
//     content: (
//       <>
//         <b className="text-lg text-[#58595B]">Library Facilities</b>
//         <br />
//         Over 6131 books, 302 journal subscriptions, and Digital Library with 20
//         Computers having 2 GBPS speed.
//       </>
//     ),
//   },
// ];

// function HolisticSaS() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="mt-[125px] py-[100px] bg-[#f2f2f2]">
//       <div className="container flex flex-wrap items-center justify-center gap-18">
//         {/* Tabs and Content */}
//         <div className="flex-2 min-w-[315px] holistic-text">
//           <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
//             <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//             HOLISTIC LEARNING AND
//             <br /> INFRASTRUCTURE
//           </h2>
//           <div className="mb-6 flex flex-wrap gap-2">
//             {tabs.map((tab, idx) => (
//               <button
//                 key={tab.label}
//                 className={`px-4 py-2 rounded-full font-oswald-medium text-sm transition-all ${
//                   activeTab === idx
//                     ? "bg-[#269BFF] text-white"
//                     : "bg-[#e3f2fd] text-[#269BFF] hover:bg-[#269BFF] hover:text-white"
//                 }`}
//                 onClick={() => setActiveTab(idx)}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//           <div className="bg-white rounded-lg p-4 shadow-md min-h-[120px] text-[#58595B]">
//             {tabs[activeTab].content}
//           </div>
//         </div>
//         {/* Image */}
//         <div className="flex-3 min-w-[315px] h-full rounded-md overflow-hidden shadow-lg flex-shrink-0 flex items-center justify-center">
//           <img
//             src={tabs[activeTab].img}
//             alt={tabs[activeTab].label}
//             className="object-fill w-full h-full max-h-[400px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HolisticSaS;

import React, { useState, useEffect, useRef } from "react";
import Img1 from "../../assets/sas/holistics/teaching.png";
import Img2 from "../../assets/sas/holistics/lab.jpg";
import Img3 from "../../assets/sas/holistics/hospital.png";
import Img4 from "../../assets/sas/holistics/skill.png";
import Img5 from "../../assets/sas/holistics/research.jpg";
import Img6 from "../../assets/sas/holistics/library.png";

const sections = [
  {
    id: 0,
    label: "Teaching–Learning Facilities",
    image: Img1,
    content: `Classrooms with smartboards, high-end projectors, Wi-Fi enabled campus | Digital learning tools: LMS, ERP, Academic Book, Notebook, LRM, Coursera.`,
  },
  {
    id: 1,
    label: "Laboratory Facilities",
    image: Img2,
    content: `24x7 access to well-equipped computer labs with high-end machines.`,
  },
  {
    id: 2,
    label: "Associated Hospitals",
    image: Img3,
    content: `Acharya Vinoba Bhave Rural Hospital, Shalinitai Meghe Hospital and Research Centre, Shalinitai Meghe Superspeciality Centre, Nelson Mother and Child Care Hospital, Siddharth Gupta Memorial Cancer Hospital.`,
  },
  {
    id: 3,
    label: "Skill & Innovation Labs",
    image: Img4,
    content: `Programs based on Attitude Ethics and Communication, Life and essential skills trainings, GET-SET-GO Employability Training, CPR Courses (Basic life-saving trainings), IDEA LAB (Startup Incubator), BIONEST (Health-related Start-up Incubator).`,
  },
  {
    id: 4,
    label: "Research Facilities",
    image: Img5,
    content: `Research guidance, financial support for publications, Free access to IEEE Research Articles, Free access to Turnitin Software for Students and Staff is available.`,
  },
  {
    id: 5,
    label: "Library Facilities",
    image: Img6,
    content: `Over 6131 books, 302 journal subscriptions, and Digital Library with 20 Computers having 2 GBPS speed.`,
  },
];

function HolisticSaS() {
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
    <div className="py-20 bg-[#f2f2f2]">
      <div className="container flex flex-wrap items-start justify-center gap-18">
        {/* Text Section */}
        <div ref={textRef} className="flex-2 min-w-[315px]">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h2>
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {sections.map((section) => (
              <div key={section.id} className="mb-3">
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
                <hr className="my-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="flex-3 min-w-[315px] w-full">
          <img
            src={sections[activeId].image}
            alt={sections[activeId].label}
            className="w-full h-[500px] md:mt-32 object-cover rounded-md overflow-hidden shadow-lg flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

export default HolisticSaS;
