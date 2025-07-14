import React, { useState } from "react";
import SkillLabIMG from "../../assets/ResearchGrid/Research Opportunities/1.png";
import AYR from "../../assets/ResearchGrid/Research Opportunities/3.png";
import ROImg from "../../assets/ResearchGrid/Research Opportunities/3.png";

const ImmersiveLearningCF = () => {
  const [activeTab, setActiveTab] = useState("SkillLab");

  const items = {
    SkillLab: [
      " Anukruti (Wardha) – High-fidelity clinical simulation lab with mannequins, robotic surgery, and wet lab modules ",
      " Swadhyay (Wana) - SSDL museum with simulation across departments including Lung Museum",
      "Task Trainer Zones – Suturing, airway management, central lines",
      " ICU, OT & Emergency Simulations - Life-saving response modules",
      "Obstetrics Simulations – Labour, delivery, IUD procedures",
      "Cadaveric & Wet Labs – Human dissection, soft tissue practice ",
      "Standardized Patient Programs – Across IPD/OPD/ICU cases",
    ],
    external: ["No Content Available"],
  };

  return (
    <section className="px-4 sm:px-10 md:px-20 py-12 bg-white font-sans text-gray-700 max-w-screen-xl mx-auto">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Accordion Panel */}
        <div>
          {/* Section Heading */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-oswald-medium font-medium uppercase relative inline-block text-[#707070]">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
              IMMERSIVE LEARNING ENVIRONMENTS
            </h2>
            <p className="text-base font-oswald-medium font-light mt-2">
              SkillLab’s simulation labs and self-learning museums empower
              students with hands-on experiences across clinical, surgical, and
              interdisciplinary domains—replicating real-world complexity with
              precision.
            </p>
          </div>
          <div className="border-t border-gray-300">
            <button
              onClick={() =>
                setActiveTab((prev) =>
                  prev === "SkillLab" ? null : "SkillLab"
                )
              }
              className={`w-full text-left py-2 font-semibold flex justify-between items-center ${
                activeTab === "SkillLab" ? "text-blue-800" : "text-gray-700"
              }`}
            >
              Skill Labs, Simulation & Experiential Learning
              <span className="text-lg">
                {activeTab === "SkillLab" ? "-" : "+"}
              </span>
            </button>
            {activeTab === "SkillLab" && (
              <div className="pl-4 text-sm text-gray-700 space-y-1 py-4">
                {items.SkillLab.map((item, idx) => (
                  <div key={idx}>- {item}</div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-300">
            <button
              onClick={() =>
                setActiveTab((prev) =>
                  prev === "external" ? null : "external"
                )
              }
              className={`w-full text-left py-4 font-semibold flex justify-between items-center ${
                activeTab === "external" ? "text-blue-800" : "text-gray-700"
              }`}
            >
              Museums & Self-Learning Spaces.
              <span className="text-lg">
                {activeTab === "external" ? "-" : "+"}
              </span>
            </button>
            {activeTab === "external" && (
              <div className="pl-4 text-sm text-gray-700 space-y-1">
                {items.external.map((item, idx) => (
                  <div key={idx}>- {item}</div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-sm">
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium block"
            >
              Know more about research opportunities
            </a>
            <p className="mt-1">
              <strong>Contact Us</strong> @{" "}
              <a
                href="mailto:rd@SkillLab.edu.in"
                className="text-blue-700 hover:underline"
              >
                rd@SkillLab.edu.in
              </a>
            </p>
          </div>
        </div>

        {/* Image Panel */}
        <div className="self-end w-full h-[400px] max-h-[400px] rounded-xl overflow-hidden shadow-md border border-gray-200">
          {activeTab === "external" ? (
            <img
              src={ROImg}
              alt="Research Discussion"
              className="w-full h-full object-cover"
            />
          ) : activeTab === "SkillLab" ? (
            <img
              src={SkillLabIMG}
              alt="SkillLab"
              className="w-full h-full object-cover"
            />
          ) : activeTab === "advance" ? (
            <img
              src={AYR}
              alt="Advance Your Research"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">No image available</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImmersiveLearningCF;
