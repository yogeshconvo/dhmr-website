import React, { useState } from "react";
import Img1 from "../../assets/RNPC/holistic/1.png";
import Img2 from "../../assets/RNPC/holistic/2.png";
import Img3 from "../../assets/RNPC/holistic/3.png";
import Img4 from "../../assets/RNPC/holistic/4.png";
import Img5 from "../../assets/RNPC/holistic/5.png";
import Img6 from "../../assets/RNPC/holistic/6.png";

const sections = [
  {
    id: 0,
    label: "Teaching-Learning Facilities",
    image: Img1,
    content: (
      <>
        <b>
          6 ICT-enabled classrooms, WiFi campus, Learning Management System
          (LMS) and Learning resources materials
        </b>
        <br />
        Innovative teaching methods include Seminars, Problem-based learning,
        Simulation-based learning, Integrated teaching program, Case-based
        learning, Flipped classroom, Early Clinical exposure, AETCOM, SISA,
        IDCD, JC, SPP. Electives in various specialities. Coursera campus
      </>
    ),
  },
  {
    id: 1,
    label: "ADCC Courses",
    image: Img2,
    content: (
      <>
        Get set go | Advanced Get Set Go | Presenter in Me | Researcher in Me |
        Group Discussion, Personal Interview and Resume writing | AI apps for
        physiotherapy practice | Financial Literacy | Advanced EXCEL | AETCOM |
        Good Clinical Practice
      </>
    ),
  },
  {
    id: 2,
    label: "Hospital Facilities (OPD)",
    image: Img3,
    content: (
      <>
        Musculoskeletal, Neuro, Pulmonary rehabilitation, Community, and
        Oncology
      </>
    ),
  },
  {
    id: 3,
    label: "Advanced Teaching Facilities, Museum & Skilllab",
    image: Img4,
    content: (
      <>
        <b>“Anubhuti” Museum:</b> Interactive exhibits bridging theory and
        practice in physiotherapy <br />
        <b>Dedicated Research House:</b> Mentorship and resources for innovation
        and discovery <br />
        <b>Advanced Digital Skill Lab:</b> Simulation-based training in movement
        analysis, rehabilitation techniques, and patient care <br />
        Kinesiotherapy Lab, Electrotherapy Lab, Therapeutic gymnasium, Yoga Lab,
        Centre for Advanced Physiotherapy Education and Research (CAPER)
      </>
    ),
  },
  {
    id: 4,
    label: "Library Facilities",
    image: Img5,
    content: (
      <>
        Books: 3444, Journals: 69, Reading room facility with a seating capacity
        of 200, with various Library services of Circulation, Reprography
        services, Library automation services, Current awareness services, book
        bank facilities and archive section. Digital Library with rich and
        diverse access.
      </>
    ),
  },
  {
    id: 5,
    label: "Technology-Enabled Digital Learning",
    image: Img6,
    content: (
      <>
        Anatomage | Advanced Skill Lab (High fidelity mannequin simulators,
        Sim-Man, Sim-Mom, Nursing Anne simulator, Trauma Man and many more) |
        Centre for Advanced Physiotherapy Education and Research (CAPER)
      </>
    ),
  },
  {
    id: 6,
    label: "Other Facilities",
    image: Img1,
    content: <>MAI Physiotherapy Clinic, everyday community visits, etc.</>,
  },
];

const eduUnit = [
  {
    label: "Physiotherapy Education Unit",
    content: (
      <>
        <b>
          Driving academic excellence through structured curriculum, innovative
          pedagogy, and robust evaluation.
        </b>
        <br />
        <br />
        <b>Departments</b>
        <ul className="list-disc pl-5">
          <li>
            <b>Curriculum:</b> Designs and updates a competency-based,
            patient-focused academic framework
          </li>
          <li>
            <b>Teaching & Learning:</b> Implements diverse instructional methods
            to enhance engagement
          </li>
          <li>
            <b>Assessment & Evaluation:</b> Develops fair, outcome-aligned
            evaluation strategies
          </li>
          <li>
            <b>Capacity Building:</b> Focuses on faculty development,
            educational research, and academic growth
          </li>
        </ul>
        <br />
        <b>Key Highlights</b>
        <ul className="list-disc pl-5">
          <li>Competency-Based Curriculum</li>
          <li>1,645+ Learning Resource Materials (LRMs)</li>
          <li>52,720+ Electronic Question Bank (EQBs)</li>
          <li>15 Publications | 5 Copyrights</li>
          <li>Active Educational Research & Innovation</li>
        </ul>
      </>
    ),
  },
];

function HolisticRNPC() {
  const [activeId, setActiveId] = useState(0);

  return (
    <div className="py-20 bg-[#f2f2f2]">
      <div className="container flex flex-wrap items-start justify-center gap-18">
        {/* Text & Tabs */}
        <div className="flex-2 min-w-[315px] ">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h2>
          <div className="max-h-[500px]  pr-2 ">
            <div className="flex flex-wrap gap-2 mb-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveId(section.id)}
                  className={`px-3 py-1 rounded-full border text-xs font-oswald-medium transition ${
                    activeId === section.id
                      ? "bg-[#F04E30] text-white border-[#F04E30]"
                      : "bg-white text-[#707070] border-[#F04E30] hover:bg-[#F04E30]/80 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
            <div className="text-[#58595B] text-sm mb-2">
              {sections[activeId].content}
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-3 min-w-[315px] w-full">
          <img
            src={sections[activeId].image}
            alt={sections[activeId].label}
            className="w-full h-[400px] object-cover rounded-md overflow-hidden shadow-lg flex-shrink-0"
          />
        </div>
      </div>

      {/* Next Section: Physiotherapy Education Unit */}
      <div className="container mt-20">
        <h2 className="text-2xl font-[500] text-[#707070] mb-4 tracking-wider font-oswald-medium">
          PHYSIOTHERAPY EDUCATION UNIT
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 text-[#58595B] text-sm">
          {eduUnit[0].content}
        </div>
      </div>
    </div>
  );
}

export default HolisticRNPC;
