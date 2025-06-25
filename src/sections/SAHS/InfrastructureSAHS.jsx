<<<<<<< HEAD
import React, { useState, useRef } from "react";
import HLImg from "../../assets/Nursing/Nursing/Holistic Learning/1.jpg";
import HLImg2 from "../../assets/Nursing/Nursing/Holistic Learning/2.jpg";

export default function InfrastructureSAHS() {
  const [activeCampus, setActiveCampus] = useState("wardha");
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

  const sections = activeCampus === "wardha" ? sectionswardha : sectionswana;

  return (
    <div className="py-20 bg-[#f2f2f2]">
      <div className="container px-4 mx-auto">
        {/* Toggle Campus */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => {
              setActiveCampus("wardha");
              setActiveIndex(0);
            }}
            className={`px-4 py-2 font-semibold rounded ${
              activeCampus === "wardha"
                ? "bg-[#F04E30] text-white"
                : "bg-white text-[#F04E30] border border-[#F04E30]"
            }`}
          >
            Wardha
          </button>
          <button
            onClick={() => {
              setActiveCampus("wana");
              setActiveIndex(0);
            }}
            className={`px-4 py-2 font-semibold rounded ${
              activeCampus === "wana"
                ? "bg-[#F04E30] text-white"
                : "bg-white text-[#F04E30] border border-[#F04E30]"
            }`}
          >
            Wana
          </button>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-12">
          {/* Text Section */}
          <div ref={textRef} className="flex-2 min-w-[315px] max-w-[500px]">
            <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
              HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
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
=======
import React, { useState } from "react";
import HLImg from "../../assets/SAHS/holistic_learning.jpg";
import HLImg2 from "../../assets/SAHS/holistic_learning2.jpeg";
import icon1 from "../../assets/FEAT/InfraIcons/1.png";
import icon2 from "../../assets/FEAT/InfraIcons/2.png";
import icon3 from "../../assets/FEAT/InfraIcons/3.png";
import icon4 from "../../assets/FEAT/InfraIcons/4.png";

export default function InfrastructureSAHS() {
    const [activeCampus, setActiveCampus] = useState('wardha');
    const [activeHospital, setActiveHospital] = useState('wardha-hospital');

    const showLeadership = (campus) => {
        alert(`Opening ${campus.toUpperCase()} Leadership Page...`);
        // In real application: navigate to leadership page
    };

    const [activeIndexwardha, setActiveIndexwardha] = useState(0); // Set first section active by default

    const sectionswardha = [
        {
            title: "Teaching–Learning Facilities:",
            content:
                "ICT-enabled classrooms I Learning Management System I State-of-the-art auditorium",
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



    const [activeIndexwana, setActiveIndexwana] = useState(1); // Set first section active by default

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



    return (

        <div className="py-20 px-20">
            <section className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-[Oswald] font-medium text-[#707070] mb-8">
                    <span className="block border-t-4 border-[#F04E30] w-20 mb-3"></span>
                    HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
                </h1>
                {/* Custom Tabs Like Image */}
                <div className="flex justify-center space-x-6 mb-10 border-b border-gray-200">
                    <button
                        className={`relative pb-2 text-lg font-bold transition-all duration-300 ${activeCampus === 'wardha'
                            ? 'text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]'
                            : 'text-gray-400'
                            }`}
                        onClick={() => setActiveCampus('wardha')}
                    >
                        SASH Wardha
                    </button>
                    <button
                        className={`relative pb-2 text-lg font-bold transition-all duration-300 ${activeCampus === 'wana'
                            ? 'text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]'
                            : 'text-gray-400'
                            }`}
                        onClick={() => setActiveCampus('wana')}
                    >
                        SASH Wana
                    </button>
                </div>

                {activeCampus === 'wardha' && (
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Text Column (40%) */}
                        <div className="w-full md:basis-[30%] text-gray-800">
                            {sectionswardha.map((section, index) => (
                                <div
                                    key={index}
                                    className="border-b pb-2 mb-2 cursor-pointer last:border-b-0"
                                    onClick={() => setActiveIndexwardha(index)}
                                >
                                    <h2
                                        className={`text-xl font-semibold ${activeIndexwardha === index ? "text-blue-900" : "text-gray-700"
                                            }`}
                                    >
                                        {section.title}
                                    </h2>
                                    <p className="text-sm whitespace-pre-line">{section.content}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Image Column (60%) */}
                        <div className="w-full md:basis-[40%] ml-5 flex items-center justify-center">
                            {sectionswardha[activeIndexwardha].image ? (
                                <img
                                    src={sectionswardha[activeIndexwardha].image}
                                    alt={sectionswardha[activeIndexwardha].title}

                                    className="rounded-xl w-full h-auto shadow-lg object-contain"
                                />
                            ) : (
                                <div className="text-gray-400 italic text-center border p-10 rounded-lg shadow-inner">
                                    No image available
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeCampus === 'wana' && (
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Text Column (40%) */}
                        <div className="w-full md:basis-[30%] text-gray-800">
                            {sectionswana.map((section, index) => (
                                <div
                                    key={index}
                                    className="border-b pb-2 mb-2 cursor-pointer last:border-b-0"
                                    onClick={() => setActiveIndexwana(index)}
                                >
                                    <h2
                                        className={`text-xl font-semibold ${activeIndexwana === index ? "text-blue-900" : "text-gray-700"
                                            }`}
                                    >
                                        {section.title}
                                    </h2>
                                    <p className="text-sm whitespace-pre-line">{section.content}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Image Column (60%) */}
                        <div className="w-full md:basis-[40%] ml-5 flex items-center justify-center">
                            {sectionswana[activeIndexwana].image ? (
                                <img
                                    src={sectionswana[activeIndexwana].image}
                                    alt={sectionswana[activeIndexwana].title}

                                    className="rounded-xl w-full h-auto shadow-lg object-contain"
                                />
                            ) : (
                                <div className="text-gray-400 italic text-center border p-10 rounded-lg shadow-inner">
                                    No image available
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </section>

            <section className="max-w-6xl mx-auto mt-28 ml-10">
                    <div className="flex flex-wrap font-oswald-medium tracking-wider justify-center gap-6 mb-8">
                      <button className="bg-[#F04E30] text-white text-xl font-[500] px-8 py-2 min-w-[250px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)] tracking-wide">
                        Transcripts –  UG & PG
                      </button>
                      <button className="bg-[#102B64] text-white text-xl px-8 py-2 min-w-[250px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)] tracking-wide">
                        Electives Offered
                      </button>
                    </div>
            
                    <div className="flex flex-wrap justify-center items-center gap-8">
                      <img
                        src={icon2}
                        alt="Johns Hopkins University"
                        className="h-22 object-contain border-r pr-6 last:border-r-0"
                      />
                      <img
                        src={icon3}
                        alt="University of Pennsylvania"
                        className="h-22 object-contain border-r pr-6 last:border-r-0"
                      />
                      <img
                        src={icon1}
                        alt="Stanford University"
                        className="h-22 object-cover border-r pr-6 last:border-r-0"
                      />
                      <img
                        src={icon4}
                        alt="University of Hong Kong"
                        className="h-12 object-contain pr-6"
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
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
