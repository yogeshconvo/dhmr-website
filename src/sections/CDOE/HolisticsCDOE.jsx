import React, { useState, useEffect, useRef } from "react";
import Img1 from "../../assets/CDOE/Holistic/1.jpg";
import Img2 from "../../assets/CDOE/Holistic/2.jpg";
import Img3 from "../../assets/CDOE/Holistic/3.jpg";
import Img4 from "../../assets/CDOE/Holistic/4.jpg";

const sections = [
  {
    id: 0,
    label: "Leading with Experience. Teaching with Purpose.",
    image: Img1,
    content: `Comprising of INTERNATIONAL and national experts, the CDOE faculty are industry veterans and impactful enablers of transformation. With a deep understanding of both academic frameworks and evolving industry dynamics, they foster a learning environment that is intellectually rigorous, professionally relevant, and personally empowering.`,
  },
  {
    id: 1,
    label: "Faculty Strength and Diversity",
    image: Img2,
    content: `165+ strong pool of faculty members<br/>National and international experts<br/>From tier-1 institutions (IIMs, IITs, XLRI, IMT, Symbiosis and more)<br/>Professors of Practice<br/>Seasoned industry professionals.`,
  },
  {
    id: 2,
    label: "Global Learning Opportunities",
    image: Img3,
    content: `Coursera Campus – 5000+ Certificate courses from top ranked colleges globally.<br/><br/>At CDOE, global learning is just a click away. Through Coursera Campus access, students engage with leading certificate courses from top-ranked universities worldwide—acquiring industry-relevant skills, AI-driven insights, and globally recognized credentials.<br/><br/>This seamless integration of international curricula empowers learners to stay competitive, future-ready, and connected to the world.`,
  },
  {
    id: 3,
    label: "Gain Industry-Relevant Skills & Global Certifications",
    image: Img4,
    content: `Certification Courses from top universities: Harvard, Stanford & more<br/>Certifications by industry leaders: Google, IBM, etc<br/>In-demand domains: Data Science, Healthcare, Business Analytics, AI<br/>Flexible, AI-powered, on-demand learning.`,
  },
];

// Add bullet before each <br/>-split item
const formatWithBullets = (content) => {
  return content
    .split("<br/>")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `• ${line}`)
    .join("<br/>");
};

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
    <div className="py-10 bg-[#f2f2f2]">
      <div className="container flex flex-wrap items-start justify-center gap-8">
        {/* Text Section */}
        <div ref={textRef} className="flex-2 min-w-[315px]">
          <h2 className="text-3xl font-[500] text-[#707070] mb-2 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h2>
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {sections.map((section) => (
              <div
                key={section.id}
                className="mb-2 pb-2 border-b border-[#707070] last:border-0"
              >
                <p>
                  <span
                    onClick={() => setActiveId(section.id)}
                    className={getHeadingClass(section.id)}
                  >
                    {section.label}
                  </span>
                  <br />
                  <span
                    className="text-sm text-[#707070] inline-block mt-1"
                    dangerouslySetInnerHTML={{
                      __html:
                        section.content.includes("<br/>") ||
                        section.content.includes("<br>")
                          ? formatWithBullets(section.content)
                          : section.content,
                    }}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="flex-3 min-w-[315px] w-full">
          {sections[activeId].image && (
            <img
              src={sections[activeId].image}
              alt={sections[activeId].label}
              className="w-full h-[500px] md:mt-25 object-cover rounded-md overflow-hidden shadow-lg flex-shrink-0"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HolisticSaS;
