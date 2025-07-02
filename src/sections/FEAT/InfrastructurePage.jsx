import HLImg1 from "../../assets/FEAT/HL.png";
import HLImg2 from "../../assets/FEAT/h4.png";
import HLImg3 from "../../assets/FEAT/h3.jpg";
import HLImg4 from "../../assets/FEAT/h2.jpg";
import icon1 from "../../assets/FEAT/InfraIcons/1.png";
import icon2 from "../../assets/FEAT/InfraIcons/2.png";
import icon3 from "../../assets/FEAT/InfraIcons/3.png";
import icon4 from "../../assets/FEAT/InfraIcons/4.png";
import React, { useState } from "react";

export default function HolisticLearningSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Teaching–Learning Facilities:",
      content:
        "Tiered classrooms with smartboards, high-end projectors, Wi-Fi enabled campus. Digital learning tools: LMS, ERP, Academic Book, Notebook, LRM, Coursera",
      image: HLImg1,
    },
    {
      title: "Laboratory & Computing Facilities:",
      content: `24×7 access to computer labs with HP 285 Ryzen MT desktops (Ryzen-5 5600G, 8GB RAM, 512GB SSD, Wi-Fi & Bluetooth, Windows 11, HP 19.5” Monitor)

High-end servers: Up to 2× Intel® Xeon® Scalable (20 cores max), 16× DDR4 DIMM slots, up to 1TB RAM, up to 14× 3.5” SAS/SATA HDDs (224TB max)

Intel Server: Intel® Xeon® Silver 4310 (12 cores, 2.1GHz, 18MB cache), 128GB RAM, Software stack includes Ubuntu 18.04, Intel® oneAPI, AI Analytics Toolkit, Horovod, Intel® MPI, JupyterHub, Keras, Seaborn`,
      image: HLImg2,
    },
    {
      title: "Skill & Innovation Labs:",
      content:
        "IBM School of Emerging Technologies, Intel Unnati School of Emerging Technologies, AICTE IDEA-Lab, e-Yantra Lab (IIT Bombay), Language Lab, R&D Lab, Bio 3D Printing Lab, Tissue Engineering Lab, School of Experiential Learning (SEL), Incubation Centre",
      image: HLImg3,
    },
    {
      title: "Research & Project Lab:",
      content:
        "Dedicated space for student-led innovation and research initiatives",
      image: HLImg4,
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-10 md:px-20">
      {/* Section 1: Text + Image */}
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-oswald-medium text-[#707070] mb-8">
          <span className="block border-t-4 border-[#F04E30] w-20 mb-3"></span>
          HOLISTIC LEARNING AND <br className="hidden sm:block" />
          INFRASTRUCTURE
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left - Text List */}
          <div className="w-full md:basis-[30%] text-gray-800">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border-b pb-2 mb-2 cursor-pointer last:border-b-0"
                onClick={() => setActiveIndex(index)}
              >
                <h2
                  className={`text-lg sm:text-xl font-semibold ${
                    activeIndex === index ? "text-blue-900" : "text-gray-700"
                  }`}
                >
                  {section.title}
                </h2>
                <p className="text-sm whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Right - Image or Placeholder */}
          <div className="w-full md:basis-[60%] md:ml-5 flex items-center justify-center">
            {sections[activeIndex].image ? (
              <img
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                className="rounded-xl w-full h-auto shadow-lg object-contain"
              />
            ) : (
              <div className="text-gray-400 italic text-center border p-10 rounded-lg shadow-inner w-full">
                No image available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Buttons + Icons */}
      <section className="max-w-6xl mx-auto mt-20">
        {/* Buttons */}
        <div className="flex flex-wrap font-oswald-medium justify-center gap-6 mb-8">
          <button className="bg-[#F04E30] text-white text-base sm:text-xl font-medium px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Transcripts – UG & PG
          </button>
          <button className="bg-[#102B64] text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Electives Offered
          </button>
        </div>

        {/* Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          <img
            src={icon2}
            alt="Johns Hopkins University"
            className="h-16 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={icon3}
            alt="University of Pennsylvania"
            className="h-16 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={icon1}
            alt="Stanford University"
            className="h-16 sm:h-20 object-cover border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={icon4}
            alt="University of Hong Kong"
            className="h-12 sm:h-16 object-contain pr-4 sm:pr-6"
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
