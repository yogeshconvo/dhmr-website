import React, { useState, useEffect, useRef } from "react";
import HLImg from "../../assets/DMCP/holistic/Teaching-Learning.jpg";
import Img2 from "../../assets/DMCP/holistic/Laboratory.jpeg";
import Img3 from "../../assets/DMCP/holistic/Advanced Skill Labs.jpg";
import Img4 from "../../assets/DMCP/holistic/Museum.jpg";
import Img5 from "../../assets/DMCP/holistic/6.jpeg";

const sections = [
  {
    id: 0,
    label: "Teaching–Learning Facilities",
    content: `• Competency-Based Pharmacy Curriculum focusing on hands-on training, clinical proficiency, and patient care.
• Integrated AETCOM (Attitude, Ethics, and Communication) modules to build responsible, ethical, and empathetic pharmacy professionals.
• ICT-enabled classrooms, Learning Management System (LMS), and ERP system for academic and lifecycle management.`,
    image: HLImg,
  },
  {
    id: 1,
    label: "Laboratory & Hospital Facilities",
    content: `• Subject-specific labs: Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, Pharmacy Practice, Pharmaceutical Analysis, Biotechnology, and Molecular Biology.
• In-house hospital access for clinical exposure.
• FDA-approved herbal drug manufacturing unit for real-time production training.`,
    image: Img2,
  },
  {
    id: 2,
    label: "Advanced Skill Labs",
    content: `PharmaCare Simulation | Clinical Pharmacy | Pharmaceutical Compounding | Drug Discovery & Formulation | Patient Counseling & Communication | Pharmacovigilance & Drug Safety | PharmaTech & Innovation | Hospital & Community Pharmacy | Therapeutic Drug Monitoring | Advanced Nanotechnology Lab | State-of-the-art Animal House for preclinical research | Pilot Plant for formulation manufacturing | Advanced Analytical Lab with HPLC, GC, HPTLC, Flash Chromatography, DSC, SEM, and more.`,
    image: Img3,
  },
  {
    id: 3,
    label: "Museum & Interactive Learning Spaces",
    content: `• Jigyasa Museum showcases drug formulation evolution, compounding techniques, pharmacology, herbal medicine, and toxicology.
• Visual and experiential learning aids in bridging theory with practice, reinforcing pharmaceutical science concepts.`,
    image: Img4,
  },
  {
    id: 4,
    label: "Library Facilities",
    content: `• Thousands of books and leading national/international journals.
• E-library access to databases: DELNET, EBSCOHOST, UPTODATE, INFLIBNET, SHODHGANGA, SHODH SINDHU, SCOPUS, and more.
• Turnitin for plagiarism checks.
• Book bank facility for meritorious students.`,
    image: Img5,
  },
//   {
//     id: 5,
//     label: "Other Facilities",
//     content: `• 100% assistance for internship & placement across D.Pharm, B.Pharm, M.Pharm, and Pharm D.
// • Industrial/hospital internships: 6 months (M.Pharm), 2 months (B.Pharm), 1 year (Pharm D).
// • Earn while you learn support system for financially needy students.
// • Strong industry network with Wockhardt, Glaxo, Pfizer, Sun Pharma, Lupin, Glenmark, Dr. Reddy’s, Merck, Zydus, Torrent, Apollo, IQVIA, TCS, and more for training, internships, and placements.`,
//     image: Img5,
//   },
];

function HolisticsDMCP() {
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
        {/* Text Section */}
        <div ref={textRef} className="flex-2 min-w-[315px]">
          <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND <br /> INFRASTRUCTURE
          </h2>
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {sections.map((section) => (
              <div
                key={section.id}
                className="mb-1 border-b pb-2 border-[#707070] last:border-0"
              >
                <p>
                  <span
                    onClick={() => setActiveId(section.id)}
                    className={getHeadingClass(section.id)}
                  >
                    {section.label}
                  </span>
                  <br />
                  <span className="text-sm text-[#707070] whitespace-pre-line">
                    {section.content}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="flex-3 min-w-[315px] w-full md:w-[50%]">
          {sections[activeId].image ? (
            <img
              src={sections[activeId].image}
              alt={sections[activeId].label}
              className="w-full h-[500px] md:mt-32 object-cover rounded-md overflow-hidden shadow-lg flex-shrink-0"
            />
          ) : (
            <div className="w-full h-[500px] md:mt-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-center">
              No Image Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HolisticsDMCP;
