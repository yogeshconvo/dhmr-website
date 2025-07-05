import React, { useState, useRef } from "react";
import HLImg from "../../assets/Nursing/Nursing/Holistic Learning/1.jpg";
import HLImg2 from "../../assets/Nursing/Nursing/Holistic Learning/2.jpg";

export default function InfrastructureSAHS({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  const sectionswardha = [
    {
      title: "Teaching–Learning Facilities:",
      content:
        "ICT-enabled classrooms | Learning Management System | State-of-the-art auditorium",
      image: HLImg,
    },
    {
      title: "Advanced Skills & Simulation:",
      content: `Anukruti – Skill to Heal: Clinical Competency Training | Hands-on simulation-based learning for real-time decision-making | Bridge theory with real-world clinical scenarios.

Students actively train in:
• Emergency Medicine | Interventional Radiology (IR) | Operation Theatres (OT)
• Anesthesia Technology | Blood Bank Technology | Cardiopulmonary Bypass (CPB) Machine

School of Experiential Learning & Simulation Centre (SEL & SC): Immersive Simulation and Virtual Learning | Real-life scenario-based modules | Interprofessional learning | Diverse healthcare settings through structured, monitored exposure

JIGYASA – The Curious Brain (Central Museum): Self-Directed Learning | Life-size anatomical models, preserved specimens, charts, and digital learning tools | Integrated understanding of human structure and function across specialties`,
      image: null,
    },
    {
      title: "Hospital Facilities:",
      content: `1,500+ bedded Hospital (AVBRH), advanced ICUs, specialty OTs, diagnostic and interventional departments, extensive in-patient and out-patient exposure across departments, and hands-on experience under supervision of seasoned clinical faculty.

Students gain competencies in:
• Intensive Care | OT & Emergency | Yoga & Naturopathy | Clinical Labs & Diagnostics`,
      image: null,
    },
  ];

  const sectionswana = [
    {
      title: "Teaching–Learning Facilities:",
      content:
        "ICT-enabled classrooms | Learning Management System | Smart, self-directed academic spaces",
      image: HLImg2,
    },
    {
      title: "Advanced Skills & Simulation:",
      content: `Anubhuti – School of Experiential Learning & Simulation Centre: Centre of Excellence for clinical skills training | Hands-on simulation-based learning for real-world application | Bridge theory with practice through immersive, scenario-based modules

Students actively train in:
• Emergency Medicine | Dialysis | CT Scan | MRI Console

Svaadhyaay – The Integrated Museum: Self-learning ecosystem | Anatomical specimens, models, charts, and digital tools | Enables deep understanding of human structure and function across specialties`,
      image: null,
    },
    {
      title: "Hospital Facilities:",
      content: `Shalinitai Meghe Hospital & Research Centre (SMHRC) – Multi-super specialty, tech-enabled hospital | National and international standards | Broad in-patient and out-patient exposure | Advanced diagnostics and specialty care units | Immersive clinical learning under expert supervision

Students gain competencies in:
• Emergency Medicine | Diagnostic Imaging | Dialysis | MRI & CT Scan`,
      image: null,
    },
  ];

  const sections = activeTab === "wardha" ? sectionswardha : sectionswana;

  return (
    <div className="pb-20 pt-16 bg-[#f2f2f2]">
      <div className="container px-4 mx-auto ">
        <div className="flex flex-wrap items-start justify-center gap-12 ">
          {/* Text Section */}
          <div ref={textRef} className="flex-2 min-w-[300px] max-w-[500px]">
            <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
              HOLISTIC LEARNING
            </h2>
            <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {sections.map((section, index) => (
                <div key={index} className="mb-3">
                  <p>
                    <span
                      onClick={() => setActiveIndex(index)}
                      className={`cursor-pointer block mb-1 font-semibold ${
                        index === activeIndex
                          ? "text-[#2f55a0] font-bold"
                          : "text-[#58595B]"
                      }`}
                    >
                      {section.title}
                    </span>
                    <span className="text-sm text-[#707070] whitespace-pre-line">
                      {section.content}
                    </span>
                  </p>
                  <hr className="my-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            ref={imageRef}
            className="flex-3 min-w-[315px] md:mt-34 w-full max-w-[600px]"
          >
            {sections[activeIndex].image ? (
              <img
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                className="w-full h-[500px] object-cover rounded-md shadow-lg"
              />
            ) : (
              <div className="w-full h-[500px] bg-gray-300 flex items-center justify-center rounded-md shadow-inner text-[#707070] italic">
                No image available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
