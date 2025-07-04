import React, { useState, useEffect, useRef } from "react";
import Img1 from "../../assets/JNMC/Holistic/Teaching Learning.jpg";
import Img2 from "../../assets/sas/holistics/2.jpeg";

import Img3 from "../../assets/JNMC/Biochemistry Laboratory.png";
import Img4 from "../../assets/JNMC/Holistic/Library.png";
import Img5 from "../../assets/sas/holistics/5.jpeg";
import Img6 from "../../assets/sas/holistics/6.jpeg";
import Img7 from "../../assets/sas/holistics/3.jpg";

const sections = [
  {
    id: 0,
    label: "Teaching–Learning Facilities",
    image: Img1,
    content: `Air-conditioned lecture theatres with audio-visual aids and live
                procedure broadcasts, Demo rooms (25–50 capacity) with smart boards, Largest tertiary care hospital 
                with attached super-specialty centre, Dedicated AETCOM sessions, Structured self-directed learning 
                (SSDL) modules, Flipped classrooms, Integrated modules`,
  },
  {
    id: 1,
    label: "Technology-Enabled Digital Learning",
    image: Img2,
    content: `LMS with 
                  resource sharing, quizze s, assignments, National & international immersion programs`,
  },
  {
    id: 2,
    label: "Laboratory & Hospital Facilities",
    image: Img3,
    content: `Histology, Haematology, Histopathology ,  Biochemistry, Mirobiology labs, OSPE/OSCE ward for skill 
                 training & assessment, CRL with high-end equipment and integrated research`,
  },
  {
    id: 3,
    label: " Advanced Teaching, Museum & Skilllab",
    image: Img5,
    content: `“Jigyasa” digital   museum (15,000+ sq. ft.), QR-coded, self-learning hub, “Anukriti” Simulation 
            Centre with high-fidelity mannequins, AHA & National Board accreditation, Mayo Clinic-backed Standardized 
            Patient Program (SPP), Cadaveric skill ab with soft-embalmed specimens, Wet lab for basic to advanced surgical 
            skills `,
  },
  {
    id: 4,
    label: "Library Facilities",
    image: Img4,
    content: `Fully air-conditioned central resource, Books, journals for all departments, Subscriptions: 
        Access Medicine, UpToDate, Royal Society of Medicine, BMJ, Digital library with 100+ computers and Wi-Fi`,
  },
];

function InfrastructureJNMC() {
  const [activeId, setActiveId] = useState(2);
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
        ? "text-primary font-bold font-oswald-medium"
        : "text-[#58595B] hover:text-primary"
    }`;

  return (
    <div className="py-20 bg-white px-6 md:px-40 py-20">
      <div className="flex flex-wrap items-start justify-center gap-8">
        {/* Text Section */}
        <div ref={textRef} className="flex-2 min-w-[315px]">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h2>
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar ">
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

export default InfrastructureJNMC;
