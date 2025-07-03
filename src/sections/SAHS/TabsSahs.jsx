import React from "react";
const TABS = [
  { key: "wardha", label: "SAHS Wardha" },
  { key: "nagpur", label: "SAHS Nagpur" },
];
function TabsSahs({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center mb-10 mt-20 ">
      <div className="inline-flex bg-[#f5f5f5] rounded-full shadow-sm border border-[#ececec] p-1">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 md:px-7 py-2 rounded-full text-md md:text-lg font-bold transition-all duration-200
          ${
            activeTab === tab.key
              ? "bg-[#F04E30] text-white shadow-md"
              : "text-[#58595B] hover:bg-[#fbe6e1] hover:text-[#F04E30]"
          }
        `}
            style={
              {
                // minWidth: 160,
              }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TabsSahs;
