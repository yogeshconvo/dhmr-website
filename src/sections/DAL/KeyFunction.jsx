import { useState } from "react";

const tabs = [
  {
    name: ["Ph.D. Programs", "Management"],
    content: `No content available.`,
  },
  {
    name: ["Fellowship", "Programs"],
    content: `
       - Administration of university and external fellowships.
       - Facilitating funding opportunities for research scholars.
       - Supporting meritorious students through grants and scholarships.
    `,
  },
  {
    name: ["Post-Doctoral", "Research"],
    content: `No content available.`,
  },
  {
    name: ["Research Policy and", "Quality Assurance"],
    content: `No content available.`,
  },
  {
    name: ["Academic Support &", "Collaboration"],
    content: `No content available.`,
  },
  {
    name: ["Funding & Grants", "Management"],
    content: `No content available.`,
  },
];

export default function KeyFunctionTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-[#f0efef] font-[Arial] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-[500] mb-3 font-oswald-medium text-[#707070] text-center lg:text-left">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-3 border-t-4 mx-auto lg:mx-0" />
          KEY FUNCTIONS AND <br /> RESPONSIBILITIES
        </h1>

        <p className="text-gray-600 text-sm font-light max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
          Part of the School of Higher Educational Research (SHER), the
          Educational Unit advances teaching excellence and academic best
          practices through regular sensitization and orientation workshops,
          ensuring continuous improvement in pedagogy and curriculum delivery.
        </p>

        {/* Tabs */}
        <div className="border-b border-gray-400 flex flex-wrap justify-center lg:justify-start gap-10 md:gap-20 mt-6 text-lg font-[300] font-oswald-medium text-gray-600">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="relative w-[9rem] text-center lg:text-left break-words"
            >
              <button
                onClick={() => setActiveTab(tab)}
                className={`pb-2 w-full whitespace-normal break-words transition-all duration-300 min-h-[3.5rem] ${
                  activeTab.name[0] === tab.name[0]
                    ? "text-[#0a2c61] font-[600]"
                    : ""
                }`}
              >
                {tab.name.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </button>

              {activeTab.name === tab.name && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-[0.3rem] lg:translate-x-0 w-[90%] h-[3px] bg-[#0a2c61]" />
              )}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div
          className="mt-6 text-gray-800 text-base font-light leading-10 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left"
          dangerouslySetInnerHTML={{ __html: activeTab.content }}
        />

        {/* Know More Section */}
        <div className="mt-13 text-center lg:text-left">
          {/* <p className="text-[#0a2c61] text-[16px] font-bold font-oswaldMedium">
            Unique teaching learning assessment initiatives
          </p> */}
          <a
            href="#"
            className="text-[#004AAD] text-sm underline font-[400] font-oswaldMedium"
          >
            Know more
          </a>
        </div>
      </div>
    </div>
  );
}
