import { useState } from "react";

const tabs = [
  {
    name: "Enhanced<br/> Teaching-Learning",
    content:
      "Promote evidence-based, student-centred methodologies I Improve dental education",
  },
  {
    name: "Faculty Development",
    content:
      "Support continuous faculty development in pedagogy, assessment, and research.",
  },
  {
    name: "Curriculum Innovation",
    content:
      "Implement integrated, competency-based curriculum aligned with global standards.",
  },
  {
    name: "Assessment & Evaluation",
    content:
      "Develop fair, effective strategies to assess student learning and competency.",
  },
  {
    name: "Educational Research",
    content: "Promote research in dental education to improve outcomes.",
  },
  {
    name: "Student Support & Mentoring",
    content:
      "Foster peer mentoring, guidance, and supportive learning environment.",
  },
];

export default function DentalEducationTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-[#f0efef] px-5 py-5 md:py-25 md:px-25 font-[Arial]">
      <h1 className="text-3xl font-[500] mb-3 text-gray-500 font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30]  mb-3 border-t-4" />
        DENTAL EDUCATION UNIT
      </h1>

      <p className="text-gray-600 text-sm font-light max-w-4xl">
        Competency-Based Dental Education (CBDE): patient-centered, technology-{" "}
        <br />
        driven curriculum aimed at enhancing professional competency.
      </p>
      <div className="border-b border-gray-400 flex flex-wrap gap-10 text-lg justify-start font-[300] font-oswald-medium text-gray-600 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 transition-all duration-300 relative w-[7.9rem] ml-4 text-left ${
              activeTab.name === tab.name ? "text-[#0a2c61] font-[500]" : ""
            }`}
          >
            <span dangerouslySetInnerHTML={{ __html: tab.name }} />
            {activeTab.name === tab.name && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0a2c61]" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 text-gray-800 text-base font-light">
        {activeTab.content}
      </div>
    </div>
  );
}
