import React, { useState } from "react";
// استبدل الصور المؤقتة لاحقاً بالصور الحقيقية
import Img1 from "../../assets/sas/holistics/teaching.png";
import Img2 from "../../assets/sas/holistics/lab.jpg";
import Img3 from "../../assets/sas/holistics/hospital.png";
import Img4 from "../../assets/sas/holistics/skill.png";
import Img5 from "../../assets/sas/holistics/research.jpg";
import Img6 from "../../assets/sas/holistics/library.png";

const tabs = [
  {
    label: "Teaching–Learning Facilities",
    img: Img1,
    content: (
      <>
        <b className="text-lg text-[#58595B]">Teaching–Learning Facilities</b>
        <br />
        Classrooms with smartboards, high-end projectors, Wi-Fi enabled campus.
        <br />
        Digital learning tools: LMS, ERP, Academic Book, Notebook, LRM,
        Coursera.
      </>
    ),
  },
  {
    label: "Laboratory Facilities",
    img: Img2,
    content: (
      <>
        <b className="text-lg text-[#58595B]">Laboratory Facilities</b>
        <br />
        24x7 access to well-equipped computer labs with high-end machines.
      </>
    ),
  },
  {
    label: "Associated Hospitals",
    img: Img3,
    content: (
      <>
        <b className="text-lg text-[#58595B]">Associated Hospitals</b>
        <br />
        Acharya Vinoba Bhave Rural Hospital, Shalinitai Meghe Hospital and
        Research Centre, Shalinitai Meghe Superspeciality Centre, Nelson Mother
        and Child Care Hospital, Siddharth Gupta Memorial Cancer Hospital.
      </>
    ),
  },
  {
    label: "Skill & Innovation Labs",
    img: Img4,
    content: (
      <>
        <b className="text-lg text-[#58595B]">Skill & Innovation Labs</b>
        <br />
        Programs based on Attitude Ethics and Communication, Life and essential
        skills trainings, GET-SET-GO Employability Training, CPR Courses (Basic
        life-saving trainings), IDEA LAB (Startup Incubator), BIONEST
        (Health-related Start-up Incubator).
      </>
    ),
  },
  {
    label: "Research Facilities",
    img: Img5,
    content: (
      <>
        <b className="text-lg text-[#58595B]">Research Facilities</b>
        <br />
        Research guidance, financial support for publications, Free access to
        IEEE Research Articles, Free access to Turnitin Software for Students
        and Staff is available.
      </>
    ),
  },
  {
    label: "Library Facilities",
    img: Img6,
    content: (
      <>
        <b className="text-lg text-[#58595B]">Library Facilities</b>
        <br />
        Over 6131 books, 302 journal subscriptions, and Digital Library with 20
        Computers having 2 GBPS speed.
      </>
    ),
  },
];

function HolisticSaS() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-[125px] py-[100px] bg-[#f2f2f2]">
      <div className="container flex flex-wrap items-center justify-center gap-18">
        {/* Tabs and Content */}
        <div className="flex-2 min-w-[315px] holistic-text">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND
            <br /> INFRASTRUCTURE
          </h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`px-4 py-2 rounded-full font-oswald-medium text-sm transition-all ${
                  activeTab === idx
                    ? "bg-[#269BFF] text-white"
                    : "bg-[#e3f2fd] text-[#269BFF] hover:bg-[#269BFF] hover:text-white"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md min-h-[120px] text-[#58595B]">
            {tabs[activeTab].content}
          </div>
        </div>
        {/* Image */}
        <div className="flex-3 min-w-[315px] h-full rounded-md overflow-hidden shadow-lg flex-shrink-0 flex items-center justify-center">
          <img
            src={tabs[activeTab].img}
            alt={tabs[activeTab].label}
            className="object-fill w-full h-full max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HolisticSaS;
