// import React, { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const ImportantAnnouncements = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState("admissions");
//   const itemsPerPage = 5;

//   const admissionsAnnouncements = [
//     {
//       text: "Notification for DMIHER-Common Entrance Test (CET-2) 2025",
//       url: "https://www.dmiher.edu.in/uploads/topics/admission-25/Notification-DMIHER-CET-2-new.pdf",
//     },
//     {
//       text: "SOP for NBEMS Candidate Registration Procedure",
//       url: "https://www.dmiher.edu.in/uploads/topics/admission-24/SOP%20for%20NBEMS%20candidate%20registration%20procedure.pdf",
//     },
//     {
//       text: "Registering for the Skill Based Courses for NBEMS",
//       url: "https://docs.google.com/forms/d/e/1FAIpQLSejtMI9lKD767XeZpsMPpMITSymISgP9oCF5JGup2sdpxSpNw/viewform",
//     },
//   ];

//   const universityAnnouncements = [
//     {
//       text: "Final Year Project Submission Guidelines 2024-25",
//       url: "#",
//     },
//     {
//       text: "Summer Internship Program Registration Open",
//       url: "#",
//     },
//     {
//       text: "Library Extended Hours During Exam Period",
//       url: "#",
//     },
//     {
//       text: "New Academic Calendar 2025-26 Released",
//       url: "#",
//     },
//     {
//       text: "Campus Placement Drive Schedule 2025",
//       url: "#",
//     },
//     {
//       text: "Research Paper Publication Guidelines Updated",
//       url: "#",
//     },
//     {
//       text: "International Student Exchange Program 2025",
//       url: "#",
//     },
//     {
//       text: "Annual Sports Meet Registration Notice",
//       url: "#",
//     },
//   ];

//   const announcements =
//     activeTab === "admissions"
//       ? admissionsAnnouncements
//       : universityAnnouncements;

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0
//         ? Math.max(0, announcements.length - itemsPerPage)
//         : Math.max(0, prev - itemsPerPage)
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev + itemsPerPage >= announcements.length ? 0 : prev + itemsPerPage
//     );
//   };

//   const visibleAnnouncements = announcements.slice(
//     currentIndex,
//     currentIndex + itemsPerPage
//   );

//   return (
//     <>
//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");
//       `}</style>

//       <div className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white text-gray-500">
//         <h2
//           className="text-2xl sm:text-3xl lg:text-4xl font-medium ml-2"
//           style={{ fontFamily: "Oswald, sans-serif" }}
//         >
//           <span className="inline-block w-12 h-1 bg-red-500 mb-2" />
//           <br />
//           IMPORTANT ANNOUNCEMENTS
//         </h2>

//         <div className="flex flex-col sm:flex-row items-center ml-[12%] justify-between mt-6 text-sm text-gray-600 gap-4">
//           <div className="text-center order-2  sm:order-1 sm:ml-auto sm:mr-auto">
//             <span
//               onClick={() => {
//                 setActiveTab("admissions");
//                 setCurrentIndex(0);
//               }}
//               className={`cursor-pointer text-base sm:text-lg transition-colors ${
//                 activeTab === "admissions"
//                   ? "underline text-gray-800 font-semibold"
//                   : "hover:text-gray-500"
//               }`}
//             >
//               Admissions 2025-26
//             </span>
//             <span className="text-base sm:text-lg mx-2"> | </span>
//             <span
//               onClick={() => {
//                 setActiveTab("university");
//                 setCurrentIndex(0);
//               }}
//               className={`cursor-pointer text-base sm:text-lg transition-colors ${
//                 activeTab === "university"
//                   ? "underline text-gray-800 font-semibold"
//                   : "hover:text-gray-500"
//               }`}
//             >
//               University
//             </span>
//           </div>

//           <div className="hidden items-center space-x-3 order-1 sm:order-2 sm:flex">
//             <button
//               onClick={handlePrev}
//               className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors"
//               disabled={currentIndex === 0}
//             >
//               <ArrowLeft
//                 size={16}
//                 className={`${
//                   currentIndex === 0 ? "text-gray-300" : "text-gray-400"
//                 }`}
//               />
//             </button>
//             <button
//               onClick={handleNext}
//               className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors"
//               disabled={currentIndex + itemsPerPage >= announcements.length}
//             >
//               <ArrowRight
//                 size={16}
//                 className={`${
//                   currentIndex + itemsPerPage >= announcements.length
//                     ? "text-gray-300"
//                     : "text-gray-500"
//                 }`}
//               />
//             </button>

//             <a
//               className="text-[#F04E30] ml-2 font-[600] sm:text-base cursor-pointer hover:underline whitespace-nowrap"
//               href="https://dmiher.edu.in/admissionform"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
//                 fontSize: "12px",
//               }}
//             >
//               VIEW ALL
//             </a>
//           </div>
//         </div>

//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 pt-6 sm:pt-8">
//           {visibleAnnouncements.map((item, i) => (
//             <div
//               key={currentIndex + i}
//               className="text-[#707070] border-b sm:border-b-0 sm:border-r border-gray-300 last:border-b-0 sm:last:border-r-0 pr-6 pl-6 pb-4 sm:pb-0 transition-opacity duration-300"
//             >
//               <a
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-base sm:text-sm leading-relaxed hover:text-gray-900 hover:underline transition-colors cursor-pointer block"
//               >
//                 {item.text}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImportantAnnouncements;

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import examinationAnnouncementsDoc1 from "../../assets/ImportantAnnouncementDoc/1. THEORY & PRACTICALTT_Final  POST BASIC NURSING - Summer 25.pdf";
import examinationAnnouncementsDoc2 from "../../assets/ImportantAnnouncementDoc/TIME TABLE OF B-PHARMA - Summer 25 1st and 2nd sem Pharm D.pdf";
import examinationAnnouncementsDoc3 from "../../assets/ImportantAnnouncementDoc/EXAM NOTIFICATION D-PHARMACY (PART-II) Summer 25.pdf";
import examinationAnnouncementsDoc4 from "../../assets/ImportantAnnouncementDoc/Exam Notification of Nursing Course_S-25 ( 3rd Bsc (Basic), MSc-1st and Final, PBBsc -1st and Final).pdf";
import examinationAnnouncementsDoc5 from "../../assets/ImportantAnnouncementDoc/EXAM NOTIFICATION B-PHARMACY 1 and 2 sem, Pharm D Summer 25.pdf";

const ImportantAnnouncements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("admissions");
  const itemsPerPage = 5;

  const admissionsAnnouncements = [
    {
      text: "Notification for DMIHER-Common Entrance Test (CET-2) 2025",
      url: "https://www.dmiher.edu.in/uploads/topics/admission-25/Notification-DMIHER-CET-2-new.pdf",
    },
    {
      text: "SOP for NBEMS Candidate Registration Procedure",
      url: "https://www.dmiher.edu.in/uploads/topics/admission-24/SOP%20for%20NBEMS%20candidate%20registration%20procedure.pdf",
    },
    {
      text: "Registering for the Skill Based Courses for NBEMS",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSejtMI9lKD767XeZpsMPpMITSymISgP9oCF5JGup2sdpxSpNw/viewform",
    },
  ];

  const examinationAnnouncements = [
    {
      text: " Exam Time Table of Nursing Course_S-25 PBBSc Final",
      url: examinationAnnouncementsDoc1,
    },
    {
      text: "EXAM TIME TABLE B-PHARMACY 1 and 2 sem, Pharm D Summer 25",
      url: examinationAnnouncementsDoc2,
    },
    {
      text: "EXAM Notification D-PHARMACY Part 2 (old Syllabus), Summer 25",
      url: examinationAnnouncementsDoc3,
    },
    {
      text: "Exam Notification of Nursing Course_S-25 ( 3rd Bsc (Basic), MSc-1st and Final, PBBsc -1st and Final)",
      url: examinationAnnouncementsDoc4,
    },
    {
      text: "EXAM NOTIFICATION B-PHARMACY 1 and 2 sem, Pharm D Summer 25",
      url: examinationAnnouncementsDoc5,
    },
  ];

  const universityAnnouncements = [
    { text: "Final Year Project Submission Guidelines 2024-25", url: "#" },
    { text: "Summer Internship Program Registration Open", url: "#" },
    { text: "Library Extended Hours During Exam Period", url: "#" },
    { text: "New Academic Calendar 2025-26 Released", url: "#" },
    { text: "Campus Placement Drive Schedule 2025", url: "#" },
    { text: "Research Paper Publication Guidelines Updated", url: "#" },
    { text: "International Student Exchange Program 2025", url: "#" },
    { text: "Annual Sports Meet Registration Notice", url: "#" },
  ];

  const announcements =
    activeTab === "admissions"
      ? admissionsAnnouncements
      : activeTab === "examination"
      ? examinationAnnouncements
      : universityAnnouncements;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, announcements.length - itemsPerPage)
        : Math.max(0, prev - itemsPerPage)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= announcements.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleAnnouncements = announcements.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");
      `}</style>

      <div className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white text-gray-500">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-medium ml-2"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          <span className="inline-block w-12 h-1 bg-red-500 mb-2" />
          <br />
          IMPORTANT ANNOUNCEMENTS
        </h2>

        {/* <div className="flex flex-col sm:flex-row items-center ml-[12%] justify-between mt-6 text-sm text-gray-600 gap-4">
          <div className="text-center order-2 sm:order-1 sm:ml-auto sm:mr-auto space-x-2">
            {[
              { key: "admissions", label: "Admissions 2025-26" },
              { key: "examination", label: "Examination" },
              { key: "university", label: "University" },
            ].map(({ key, label }) => (
              <span
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setCurrentIndex(0);
                }}
                className={`cursor-pointer text-base sm:text-lg transition-colors ${
                  activeTab === key
                    ? "underline text-gray-800 font-semibold"
                    : "hover:text-gray-500"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="hidden items-center space-x-3 order-1 sm:order-2 sm:flex">
            <button
              onClick={handlePrev}
              className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex === 0}
            >
              <ArrowLeft
                size={16}
                className={`${
                  currentIndex === 0 ? "text-gray-300" : "text-gray-400"
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex + itemsPerPage >= announcements.length}
            >
              <ArrowRight
                size={16}
                className={`${
                  currentIndex + itemsPerPage >= announcements.length
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              />
            </button>

            <a
              className="text-[#F04E30] ml-2 font-[600] sm:text-base cursor-pointer hover:underline whitespace-nowrap"
              href="https://dmiher.edu.in/admissionform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
                fontSize: "12px",
              }}
            >
              VIEW ALL
            </a>
          </div>
        </div> */}

        <div className="flex flex-col sm:flex-row items-center ml-[12%] justify-between mt-6 text-sm text-gray-600 gap-4">
          <div className="text-center order-2 sm:order-1 sm:ml-auto sm:mr-auto space-x-2">
            {[
              { key: "admissions", label: "Admissions 2025-26" },
              { key: "examination", label: "Examination" },
              { key: "university", label: "University" },
            ].map(({ key, label }, index) => (
              <span
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setCurrentIndex(0);
                }}
                className={`cursor-pointer text-base sm:text-lg transition-colors px-2 ${
                  activeTab === key
                    ? "underline text-gray-800 font-semibold"
                    : "hover:text-gray-500"
                } ${index < 2 ? "border-r border-gray-400" : ""}`}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="hidden items-center space-x-3 order-1 sm:order-2 sm:flex">
            <button
              onClick={handlePrev}
              className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex === 0}
            >
              <ArrowLeft
                size={16}
                className={`${
                  currentIndex === 0 ? "text-gray-300" : "text-gray-400"
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex + itemsPerPage >= announcements.length}
            >
              <ArrowRight
                size={16}
                className={`${
                  currentIndex + itemsPerPage >= announcements.length
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              />
            </button>

            <a
              className="text-[#F04E30] ml-2 font-[600] sm:text-base cursor-pointer hover:underline whitespace-nowrap"
              href="https://dmiher.edu.in/admissionform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
                fontSize: "12px",
              }}
            >
              VIEW ALL
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {visibleAnnouncements.map((item, i) => (
            <div
              key={currentIndex + i}
              className="text-[#707070] border-b sm:border-b-0 sm:border-r border-gray-300 last:border-b-0 sm:last:border-r-0 pr-6 pl-6 pb-4 sm:pb-0 transition-opacity duration-300"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-sm leading-relaxed hover:text-gray-900 hover:underline transition-colors cursor-pointer block"
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImportantAnnouncements;
