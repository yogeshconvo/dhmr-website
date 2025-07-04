import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import examinationAnnouncementsDoc1 from "../../assets/ImportantAnnouncementDoc/1. THEORY & PRACTICALTT_Final  POST BASIC NURSING - Summer 25.pdf";
import examinationAnnouncementsDoc2 from "../../assets/ImportantAnnouncementDoc/TIME TABLE OF B-PHARMA - Summer 25 1st and 2nd sem Pharm D.pdf";
import examinationAnnouncementsDoc3 from "../../assets/ImportantAnnouncementDoc/EXAM NOTIFICATION D-PHARMACY (PART-II) Summer 25.pdf";
import examinationAnnouncementsDoc4 from "../../assets/ImportantAnnouncementDoc/Exam Notification of Nursing Course_S-25 ( 3rd Bsc (Basic), MSc-1st and Final, PBBsc -1st and Final).pdf";
import examinationAnnouncementsDoc5 from "../../assets/ImportantAnnouncementDoc/EXAM NOTIFICATION B-PHARMACY 1 and 2 sem, Pharm D Summer 25.pdf";
import examinationAnnouncementsDoc6 from "../../assets/ImportantAnnouncementDoc/result_1 sem_mcom-S2025-20.06.2025.pdf";
import examinationAnnouncementsDoc7 from "../../assets/ImportantAnnouncementDoc/result-2 sem m. com-s2025-19.06.2025.pdf";
import examinationAnnouncementsDoc8 from "../../assets/ImportantAnnouncementDoc/result_4 sem_mcom-S2025-20.06.2025.pdf";

import examinationAnnouncementsDoc9 from "../../assets/ImportantAnnouncementDoc/THEORY + PRACTICAL TIME TABLE OF 1 MSC_SUMMER 2025.pdf";
import examinationAnnouncementsDoc10 from "../../assets/ImportantAnnouncementDoc/THEORY + PRACTICAL TIME TABLE OF 2 MSC_SUMMER 2025.pdf";
import examinationAnnouncementsDoc11 from "../../assets/ImportantAnnouncementDoc/THEORY + PRACTICAL TIME TABLE OF 3 MSC_SUMMER 2025.pdf";
import examinationAnnouncementsDoc12 from "../../assets/ImportantAnnouncementDoc/THEORY + PRACTICAL TIME TABLE OF 4 MSC_SUMMER 2025.pdf";
import examinationAnnouncementsDoc13 from "../../assets/ImportantAnnouncementDoc/THEORY + PRACTICAL TIME TABLE OF MPH ( 1 2 3 4 SEMESTER)_SUMMER 2025.pdf";
import examinationAnnouncementsDoc14 from "../../assets/ImportantAnnouncementDoc/THEORY + PRACTICAL TIME TABLE OF MHA ( 1 2 3 4 SEMESTER)_SUMMER 2025.pdf";
import examinationAnnouncementsDoc15 from "../../assets/ImportantAnnouncementDoc/THEORY + PRACTICAL TIME TABLE OF M-OPTOMETRY ( 1 2 SEMESTER)_SUMMER 2025.pdf";

// Update on 25/06
import examinationAnnouncementsDoc16 from "../../assets/ImportantAnnouncementDoc/result-3 sem b pharm-s2025-23.06.2025-1 stud chall to eval.pdf";
import examinationAnnouncementsDoc17 from "../../assets/ImportantAnnouncementDoc/result-4 sem b pharm-s2025-23.06.2025.pdf";
import examinationAnnouncementsDoc18 from "../../assets/ImportantAnnouncementDoc/result-5 sem b pharm-s2025-23.06.2025.pdf";
import examinationAnnouncementsDoc19 from "../../assets/ImportantAnnouncementDoc/result-6 sem b pharm-s2025-23.06.2025.pdf";

import examinationAnnouncementsDoc20 from "../../assets/ImportantAnnouncementDoc/result-1 sem b sc aids-s2025-23.06.2025.pdf";
import examinationAnnouncementsDoc21 from "../../assets/ImportantAnnouncementDoc/result-6 sem b sc aids-s2025-23.06.2025.pdf";
import examinationAnnouncementsDoc22 from "../../assets/ImportantAnnouncementDoc/result-6 sem_bba-s2025-23.06.2025.pdf";

// Update on 25/06
import examinationAnnouncementsDoc23 from "../../assets/ImportantAnnouncementDoc/Examination Notification _Second MBBS(CBME+OLD)_S-25.pdf";
// Update on 27/06
import examinationAnnouncementsDoc24 from "../../assets/ImportantAnnouncementDoc/TH & PR_TT_Second MBBS_Summer -25.pdf";

// Update on 01/07
import examinationAnnouncementsDoc25 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-3 sem mca-s2025-27.06.2025-online.pdf";
import examinationAnnouncementsDoc26 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-4 sem ma-s2025-27.06.2025.pdf";
import examinationAnnouncementsDoc27 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-3 sem ma-s2025-27.06.2025.pdf";
import examinationAnnouncementsDoc28 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-3 sem mca-s2025-27.06.2025.pdf";
import examinationAnnouncementsDoc29 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-2 sem m lib-s2025-27.06.2025.pdf";
import examinationAnnouncementsDoc30 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-1 sem mca-s2025-27.06.2025.pdf";
import examinationAnnouncementsDoc31 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/TIME TABLE - SAS-Summer 25 BBA 1.pdf";
import examinationAnnouncementsDoc32 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/TIME TABLE - SAS-Summer 25 MBA 1 .pdf";

import examinationAnnouncementsDoc33 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/FINAL_EXAM NOTIFICATION OF (DIP in VT-1 SEM)_SUMMER 2025.pdf";
import examinationAnnouncementsDoc34 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/FINAL_EXAM NOTIFICATION OF (B-OPTOMETRY-1 SEM)_SUMMER 2025.pdf";
import examinationAnnouncementsDoc35 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/FINAL_EXAM NOTIFICATION OF (B.Sc. in AHS_1 SEM) (ALL BRANCH).pdf";
import examinationAnnouncementsDoc36 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/FINAL_EXAM NOTIFICATION OF (AHS-BVOC-1 SEM)_SUMMER 2025.pdf";

// update on 03/07
import examinationAnnouncementsDoc37 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-4 sem ba-w2024-27.06.2025- odl.pdf";

import examinationAnnouncementsDoc38 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-6 sem ba-w2024-27.06.2025- odl.pdf";
import examinationAnnouncementsDoc39 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-1 sem ba-s2025-27.06.2025- odl.pdf";
import examinationAnnouncementsDoc40 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-4 sem ba-s2025-27.06.2025.pdf";
import examinationAnnouncementsDoc41 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/result-6 sem bca-s2025-27.06.2025.pdf";
// update on 03/07
import examinationAnnouncementsDoc42 from "../../assets/ImportantAnnouncementDoc/JulyAnnouncements/1. THEORY & PRACTICAL _TT_FINAL_BAMS _W-24 - Resit.pdf";

const ImportantAnnouncements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("admissions");
  const [itemsPerPage, setItemsPerPage] = useState(5);

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

  const ResultAnnouncements = [
    // update on 03/07
    {
      text: "4 SEM B.A. -WINTER,2024-ODL MODE",
      college: "Centre for Distance and Online Education",
      url: examinationAnnouncementsDoc37,
    },
    {
      text: "6 SEM B.A. -WINTER,2024-ODL MODE",
      college: "Centre for Distance and Online Education",
      url: examinationAnnouncementsDoc38,
    },
    {
      text: "1 SEM B.A. -SUMMER,2025-ODL MODE",
      college: "Centre for Distance and Online Education",
      url: examinationAnnouncementsDoc39,
    },

    {
      text: "4 SEM B.A. -SUMMER,2025-REGULAR MODE",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc40,
    },
    {
      text: "6 SEM B.C.A.-SUMMER,2025-REGULAR MODE OLD COURSE",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc41,
    },

    // update on 01/07
    {
      text: "3 SEM MCA-SUMMER,2025-ONLINE",
      college: "Centre for Distance and Online Education",
      url: examinationAnnouncementsDoc25,
    },
    {
      text: "4 SEM MA-SUMMER,2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc26,
    },
    {
      text: "3 SEM MA-SUMMER,2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc27,
    },
    {
      text: "3 SEM MCA-SUMMER,2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc28,
    },
    {
      text: "2 SEM M LIB-SUMMER,2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc29,
    },
    {
      text: "1 SEM MCA-SUMMER,2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc30,
    },
    //update on 25/06
    {
      text: "3 Semester B. Pharm-Summer,2025",
      college: "Datta Meghe College of Pharmacy, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc16,
    },
    {
      text: "4 Semester B. Pharm-Summer,2025",
      college: "Datta Meghe College of Pharmacy, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc17,
    },
    {
      text: "5 Semester B. Pharm-Summer,2025",
      college: "Datta Meghe College of Pharmacy, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc18,
    },
    {
      text: "6 Semester B. Pharm-Summer,2025",
      college: "Datta Meghe College of Pharmacy, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc19,
    },

    {
      text: "1 Semester B.Sc. -AIDS- Summer,2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc20,
    },

    {
      text: "6 Semester B.Sc. -AIDS- Summer,2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc21,
    },
    {
      text: "6 Semester BBA- Summer,2025-Regular Mode",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc22,
    },

    /////////////////////////////////////////////////////////////////////

    {
      text: "FIRST SEMESTER MASTER OF COMMERCE (M.COM)- SUMMER, 2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc6,
    },
    {
      text: "SECOND SEMESTER MASTER OF COMMERCE (M.COM)- SUMMER, 2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc7,
    },
    {
      text: "FOURTH SEMESTER MASTER OF COMMERCE (M.COM)- SUMMER, 2025",
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
      url: examinationAnnouncementsDoc8,
    },
  ];
  const examinationAnnouncements = [
    // update on 01/07
    {
      text: "EXAM Time table FO FINAL BAMS_WINTER RESIT 2024",
      url: examinationAnnouncementsDoc42,
      // college: "School of Allied Health Sciences, Sawangi (Meghe), Wardha",
    },
    // update on 01/07
    {
      text: " 1 Semester DIPLOMA IN VT",
      url: examinationAnnouncementsDoc33,
      college: "School of Allied Health Sciences, Sawangi (Meghe), Wardha",
    },

    {
      text: "1 Semester AHS - B-VOC ",
      url: examinationAnnouncementsDoc36,
      college: "School of Allied Health Sciences, Sawangi (Meghe), Wardha",
    },

    {
      text: "1 Semester B-OPTOMETRY",
      url: examinationAnnouncementsDoc34,
      college: "School of Allied Health Sciences, Sawangi (Meghe), Wardha",
    },

    {
      text: "1 Semester AHS-BSC (All Branch) ",
      url: examinationAnnouncementsDoc35,
      college: "School of Allied Health Sciences, Sawangi (Meghe), Wardha",
    },

    // update on 01/07
    {
      text: "TIME TABLE - Summer 25 BBA 1",
      url: examinationAnnouncementsDoc31,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },

    {
      text: "TIME TABLE - Summer 25 MBA 1 ",
      url: examinationAnnouncementsDoc32,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },

    // update on 27/06
    {
      text: "Examination Time Table Second MBBS(CBME+OLD) Summer 2025",
      url: examinationAnnouncementsDoc24,
      college: "Datta Meghe College of Pharmacy, Sawangi (Meghe), Wardha",
    },

    //update on 25/06
    {
      text: "Examination of Summer 2025, SECOND MBBS (CBME) AND SECOND MBBS (OLD)",
      url: examinationAnnouncementsDoc23,
      college: `Jawaharlal Nehru Medical College, Sawangi (Meghe), Wardha, and Datta
Meghe Medical College, Wanadongri (Hingna), Nagpur`,
    },
    /*--------- */
    {
      text: "THEORY + PRACTICAL TIME TABLE OF MPH ( 1 2 3 4 SEMESTER)_SUMMER 2025",
      url: examinationAnnouncementsDoc13,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },
    {
      text: "THEORY + PRACTICAL TIME TABLE OF MHA ( 1 2 3 4 SEMESTER)_SUMMER 2025",
      url: examinationAnnouncementsDoc14,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },
    {
      text: "THEORY + PRACTICAL TIME TABLE OF M-OPTOMETRY ( 1 2 SEMESTER)_SUMMER 2025",
      url: examinationAnnouncementsDoc15,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },

    {
      text: "THEORY + PRACTICAL TIME TABLE OF 1 MSC_SUMMER 2025",
      url: examinationAnnouncementsDoc9,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },
    {
      text: "THEORY + PRACTICAL TIME TABLE OF 2 MSC_SUMMER 2025",
      url: examinationAnnouncementsDoc10,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },
    {
      text: "THEORY + PRACTICAL TIME TABLE OF 3 MSC_SUMMER 2025",
      url: examinationAnnouncementsDoc11,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },
    {
      text: "THEORY + PRACTICAL TIME TABLE OF 4 MSC_SUMMER 2025",
      url: examinationAnnouncementsDoc12,
      college: "School of Allied Sciences, Sawangi (Meghe), Wardha",
    },

    {
      text: "Exam Time Table of Nursing Course_S-25 PBBSc Final",
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
      : activeTab === "result"
      ? ResultAnnouncements
      : universityAnnouncements;

  // Adjust pagination based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      const isDesktop = window.innerWidth >= 1024; // Tailwind's `lg`
      setItemsPerPage(isDesktop ? 5 : announcements.length);
      setCurrentIndex(0);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [activeTab, announcements.length]);

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

        <div className="flex flex-col sm:flex-row items-center md:ml-[12%] justify-between mt-6 text-sm text-gray-600 gap-4">
          <div className="text-center order-2 sm:order-1 sm:ml-auto sm:mr-auto space-x-2">
            {[
              { key: "admissions", label: "Admissions 2025-26" },
              { key: "university", label: "University" },
              { key: "examination", label: "Examination" },
              { key: "result", label: "Result" },
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
                } ${index < 3 ? "border-r border-gray-400" : ""}`}
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
                // className={`${
                //   currentIndex === 0 ? "text-gray-400" : "text-gray-500"
                // }`}
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
              {item.college && (
                <p className="text-xs mt-1 text-gray-500">{item.college}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImportantAnnouncements;
