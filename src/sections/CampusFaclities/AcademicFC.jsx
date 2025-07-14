import React, { useState } from "react";
import AcademicIMG from "../../assets/ResearchGrid/Research Opportunities/1.png";
import AYR from "../../assets/ResearchGrid/Research Opportunities/3.png";
import ROImg from "../../assets/ResearchGrid/Research Opportunities/3.png";
import { Library } from "lucide-react";

const AcademicFC = () => {
  const [activeTab, setActiveTab] = useState("academic");

  const tabsData = {
    academic: {
      title: "Academic Infrastructure",
      items: [
        "Tiered classrooms with smartboards",
        "25+ seminar rooms across departments",
        "Flipped classroom support",
        "AETCOM and NEP-compliant learning spaces",
        "LMS, ERP, e-question banks, and assessment systems",
        "Department-specific demo rooms",
      ],
      image: AcademicIMG,
    },
    research: {
      title: "Research & Innovation Infrastructure",
      items: [
        "Anukruti (Wardha) – High-fidelity clinical simulation lab with mannequins, robotic surgery, and wet lab modules",
        "Swadhyay (Wana) - SSDL museum with simulation across departments including Lung Museum",
        "Task Trainer Zones – Suturing, airway management, central lines",
        "ICU, OT & Emergency Simulations - Life-saving response modules",
        "Obstetrics Simulations – Labour, delivery, IUD procedures",
        "Cadaveric & Wet Labs – Human dissection, soft tissue practice",
        "Standardized Patient Programs – Across IPD/OPD/ICU cases",
      ],
      image: ROImg,
    },
    library: {
      title: "Libraries & Digital Access",
      items: [
        "24x7 digital library access",
        "Comprehensive medical databases",
        "E-journals and research publications",
        "Digital learning resources",
        "Online catalog systems",
        "Study spaces and reading rooms",
      ],
      image: AYR,
    },
    computing: {
      title: "Computing & Digital Labs",
      items: [
        "State-of-the-art computer labs",
        "High-speed internet connectivity",
        "Digital simulation software",
        "Programming and development tools",
        "Virtual reality learning environments",
        "AI and machine learning platforms",
      ],
      image: AcademicIMG,
    },
  };

  return (
    <section className="px-4 sm:px-10 md:px-20 py-12 bg-[#122E5E] font-sans text-white ">
      <div className="container">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {/* Accordion Panel */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-oswald-medium font-medium uppercase relative inline-block">
                <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
                ACADEMIC & <br />
                INNOVATION FACILITIES
              </h2>
              <p className="text-base font-oswald-medium font-light mt-2">
                DMIHER’s academic and innovation ecosystem integrates advanced
                classrooms, tech-enabled learning platforms, cutting-edge
                research labs, and 24x7 digital access—creating an environment
                where knowledge is built, applied, and evolved through
                continuous inquiry and exploration.
              </p>
            </div>

            {/* Dynamic Accordion Tabs */}
            <div className="space-y-0">
              {Object.entries(tabsData).map(([key, tab]) => (
                <div key={key} className="border-t border-gray-300">
                  <button
                    onClick={() =>
                      setActiveTab((prev) => (prev === key ? null : key))
                    }
                    className={`w-full text-left py-3 font-semibold flex justify-between items-center transition-all duration-200 ${
                      activeTab === key
                        ? "text-white font-bold"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {tab.title}
                    <span className="text-lg">
                      {activeTab === key ? "-" : "+"}
                    </span>
                  </button>
                  {activeTab === key && (
                    <div className="pl-4 text-sm text-white space-y-2 py-4 animate-in slide-in-from-top duration-300">
                      {tab.items.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-[#F04E30] mr-2">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer Links */}
            <div className="mt-6 text-sm">
              <a
                href="#"
                className="text-[#F04E30] hover:underline font-medium block transition-colors duration-200"
              >
                Know more about academic opportunities
              </a>
              <p className="mt-1">
                <strong>Contact Us</strong> @{" "}
                <a
                  href="mailto:academic@dmiher.edu.in"
                  className="text-[#F04E30] hover:underline transition-colors duration-200"
                >
                  academic@dmiher.edu.in
                </a>
              </p>
            </div>
          </div>

          {/* Image Panel */}
          <div className="w-full h-[400px] max-h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
            {activeTab && tabsData[activeTab] ? (
              <img
                src={tabsData[activeTab].image}
                alt={tabsData[activeTab].title}
                className="w-full h-full object-cover transition-all duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#122E5E] to-[#1a3a70] flex items-center justify-center">
                <div className="text-center">
                  <Library className="w-16 h-16 text-[#F04E30] mx-auto mb-4" />
                  <span className="text-white text-lg font-medium">
                    Select a section to view details
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicFC;
