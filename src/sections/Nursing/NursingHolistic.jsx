

import React, { useState, useEffect, useRef } from "react";
import Img1 from "../../assets/Nursing/Nursing/Holistic Learning/1.jpg";
import Img2 from "../../assets/Nursing/Nursing/Holistic Learning/2.jpg";
import Img3 from "../../assets/Nursing/Nursing/Holistic Learning/3.jpg";
import Img4 from "../../assets/Nursing/Nursing/Holistic Learning/4.jpg";
import Img5 from "../../assets/Nursing/Nursing/Holistic Learning/5.jpg";

const sections = [
  {
    id: 0,
    label: "Teaching-Learning Facilities",
    image: Img1,
    content: `Technology enabled classrooms, smart boards, high-end projectors, Wi-Fi enabled campus | Competency-Based Education | Simulation-based learning, VR/AR-enabled education, High-fidelity mannequins, LMS, mandatory modules, self-directed learning (SDL) | AETCOM modules | Coursera courses, electives, Standardized Patient Programs (SPP) | Research and Innovation Hubs`,
  },
  {
    id: 1,
    label: "Laboratory & Hospital Facilities",
    image: Img2,
    content: `Advanced Simulation Lab with lifelike mannequins | OSCE Lab | Nutrition Lab | Community Health Nursing Lab`,
  },
  {
    id: 2,
    label: "Maternal and Child Health Lab",
    image: Img3,
    content: `Maternal and Child Health Lab | Pre-Clinical Lab | School of Experiential Learning & Simulation Centre (SEL & SC) and Museum: Simulations, skill stations, anatomical models, and healthcare innovations.`,
  },
  {
    id: 3,
    label: "Library Facilities",
    image: Img4,
    content: `Extensive collection of academic texts, research papers, and clinical guides | Digital access to journals and databases such as PubMed, Springer, ProQuest, NDLI, EBSCOHOST, DELNET, Shodhganga, and British Council Digital Library | Study zones, group workspaces, and computer stations.`,
  },
  {
    id: 4,
    label: "Students Guidance and Counseling Center",
    image: Img5,
    content: `Providing mental health resources, stress management support, and wellness programs.`,
  },
];

function NursingHolistic() {
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
        {/* Text */}
        <div ref={textRef} className="flex-2 min-w-[315px] ">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h2>

          {/* {sections.map((section, idx) => (
            <div key={idx} className="mb-1">
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
              <hr className="my-1 last:not-last:" />
            </div>
          ))} */}
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {sections.map((section, idx) => (
              <div key={idx} className="mb-1">
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
                <hr className="my-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
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

export default NursingHolistic;
