import React, { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: 0,
    label: "Leading with Experience. Teaching with Purpose.",
    image: "",
    content: `Comprising of global INTERNATIONAL and national experts, the CDOE faculty are industry veterans and impactful enablers of transformation. With a deep understanding of both academic frameworks and evolving industry dynamics, they foster a learning environment that is intellectually rigorous, professionally relevant, and personally empowering.`,
  },
  {
    id: 1,
    label: "Faculty Strength and Diversity",
    image: "",
    content: `2165+ strong pool of faculty members | National and international experts | From tier-1 institutions (IIMs, IITs, XLRI, IMT, Symbiosis and more) | Professors of Practice | Seasoned industry professionals.`,
  },
  {
    id: 2,
    label: "Global Learning Opportunities",
    image: "",
    content: `Coursera Campus – 5000+ Certificate courses from top ranked colleges globally.
  
  At CDOE, global learning is just a click away. Through Coursera Campus access, students engage with leading certificate courses from top-ranked universities worldwide—acquiring industry-relevant skills, AI-driven insights, and globally recognized credentials.
  
  This seamless integration of international curricula empowers learners to stay competitive, future-ready, and connected to the world.`,
  },
  {
    id: 3,
    label: "Gain Industry-Relevant Skills & Global Certifications",
    image: "", // Add image if needed
    content: `Certification Courses from top universities: Harvard, Stanford & more | Certifications by industry leaders: Google, IBM, etc | In-demand domains: Data Science, Healthcare, Business Analytics, AI | Flexible, AI-powered, on-demand learning.`,
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
    <div className="py-20 w-full  bg-[#f2f2f2]">
      <div className="  max-w-7xl mx-auto flex flex-wrap items-start justify-center gap-18">
        {/* Text Section */}
        <div ref={textRef} className="flex-2 min-w-[315px]">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h2>
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {sections.map((section) => (
              <div
                key={section.id}
                className="mb-2 border-b pb-2 border-[#707070] last:border-0  "
              >
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
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="flex-3 min-w-[315px] w-full">
          {sections[activeId].image ? (
            <img
              src={sections[activeId].image}
              alt={sections[activeId].label}
              className="w-full h-[500px] md:mt-32 object-cover rounded-md overflow-hidden shadow-lg flex-shrink-0"
            />
          ) : (
            <div className="w-full h-[500px] md:mt-32 flex items-center justify-center bg-gray-200 rounded-md shadow-lg text-gray-500 text-xl">
              No image available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HolisticSaS;
