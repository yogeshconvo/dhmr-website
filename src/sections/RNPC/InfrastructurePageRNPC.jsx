import React, { useState } from "react";
import Img1 from "../../assets/RNPC/holistic/1.png";
import Img2 from "../../assets/RNPC/holistic/2.png";
import Img3 from "../../assets/RNPC/holistic/3.png";
import Img4 from "../../assets/RNPC/holistic/4.png";
import Img5 from "../../assets/RNPC/holistic/5.png";
import Img6 from "../../assets/RNPC/holistic/6.png";
// If you have logos, import them here
import logo1 from "../../assets/RNPC/holistic/logo1.png";
import logo2 from "../../assets/RNPC/holistic/logo2.png";
import logo3 from "../../assets/RNPC/holistic/logo3.png";
import logo4 from "../../assets/RNPC/holistic/logo4.png";

const sections = [
  {
    title: "Teaching-Learning Facilities",
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
    title: "ADCC Courses",
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
    title: "Hospital Facilities (OPD)",
    image: Img3,
    content: (
      <>
        Musculoskeletal, Neuro, Pulmonary rehabilitation, Community, and
        Oncology
      </>
    ),
  },
  {
    title: "Advanced Teaching Facilities, Museum & Skilllab",
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
    title: "Library Facilities",
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
    title: "Technology-Enabled Digital Learning",
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
    title: "Other Facilities",
    image: Img1,
    content: <>MAI Physiotherapy Clinic, everyday community visits, etc.</>,
  },
];

const eduUnit = {
  title: "Physiotherapy Education Unit",
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
          <b>Capacity Building:</b> Focuses on faculty development, educational
          research, and academic growth
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
};

export default function InfrastructurePageRNPC() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16  bg-[#f2f2f2]">
      {/* Section 1: Tabs + Visual */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl font-oswald-medium text-[#707070] mb-8">
          <span className="block border-t-4 border-[#F04E30] w-20 mb-3"></span>
          HOLISTIC LEARNING AND <br className="hidden sm:block" />
          INFRASTRUCTURE
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left - Tabs & Text */}
          <div className="w-full md:basis-[30%] text-gray-800 custom-scrollbar max-h-[500px] overflow-y-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`border-b pb-2 mb-2 cursor-pointer last:border-b-0 transition-all ${
                  activeIndex === index ? "" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h2
                  className={`text-lg sm:text-xl font-semibold ${
                    activeIndex === index ? "text-[#F04E30]" : "text-gray-700"
                  }`}
                >
                  {section.title}
                </h2>
                <p className="text-sm whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="w-full md:basis-[60%] md:ml-5 flex items-center justify-center">
            <img
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              className="rounded-xl w-full h-[350px] sm:h-[400px] object-contain "
            />
          </div>
        </div>
      </section>

      {/* Section 2: Physiotherapy Education Unit */}
      <section className="max-w-6xl mx-auto mt-20 px-6 sm:px-10 md:px-20">
        <h2 className="text-2xl font-[500] text-[#707070] mb-4 tracking-wider font-oswald-medium">
          {eduUnit.title}
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 text-[#58595B] text-sm">
          {eduUnit.content}
        </div>
      </section>

      {/* Section 3: Visual Buttons + Logos */}
      <section className="w-full mx-auto mt-20  py-12">
        <div className="flex flex-wrap font-oswald-medium justify-center gap-6 mb-8">
          <button className="bg-[#F04E30] text-white text-base sm:text-xl font-medium px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Transcripts – UG & PG
          </button>
          <button className="bg-[#102B64] text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Electives Offered
          </button>
        </div>

        {/* Logos - replace src with your actual logo paths */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          <img
            src={logo1}
            alt="Logo 1"
            className="h-16 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="h-16 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="h-16 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={logo4}
            alt="Logo 4"
            className="h-16 sm:h-20 object-contain pr-4 sm:pr-6"
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
