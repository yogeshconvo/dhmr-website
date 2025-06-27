import React, { useState, useEffect, useRef } from "react";
import Img1 from "../../assets/sas/holistics/1.jpeg";
import Img2 from "../../assets/sas/holistics/2.jpeg";

import Img3 from "../../assets/sas/holistics/research.jpg";
import Img4 from "../../assets/sas/holistics/4.jpeg";
import Img5 from "../../assets/sas/holistics/5.jpeg";
import Img6 from "../../assets/sas/holistics/6.jpeg";
import Img7 from "../../assets/sas/holistics/3.jpg";

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
    label: "Collaborative Learning & Discussion Zones",
    image: Img5,
    content: `Our institute fosters a dynamic and interactive learning environment through dedicated collaborative zones. These modern spaces are designed to encourage group discussions, case study analyses, and project collaborations—essential for business and management education.`,
  },
  {
    id: 5,
    label: "Entrepreneurship Development",
    image: Img7,
    content: `We encourage entrepreneurial thinking and practical exposure through student-led events like food fests, marketing fairs, and innovation bazaars. These interactive platforms allow students to showcase their business acumen, engage in live selling, and test real-world business models—right from ideation to customer interaction. It cultivates leadership, teamwork, and a spirit of enterprise among budding business professionals.`,
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
      <div className="container flex flex-wrap items-start justify-center gap-8">
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
