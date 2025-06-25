import React, { useState } from "react";

const DeansMessageSAHS = () => {
  const [activeCampus, setActiveCampus] = useState("wardha");

  const showLeadership = (campus) => {
    alert(`Opening ${campus.toUpperCase()} Leadership Page...`);
    // Navigate to leadership page if needed
  };

  return (
    <div className="bg-[#0C2C5B] text-white">
      {/* Dean's Message Section */}
      <div className="px-6 md:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-medium mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          DEAN'S MESSAGE
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-10 border-b border-gray-300">
          <button
            onClick={() => setActiveCampus("wardha")}
            className={`relative pb-2 text-lg font-bold transition-all duration-300 ${
              activeCampus === "wardha"
                ? "text-white after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]"
                : "text-gray-400"
            }`}
          >
            SASH Wardha
          </button>
          <button
            onClick={() => setActiveCampus("wana")}
            className={`relative pb-2 text-lg font-bold transition-all duration-300 ${
              activeCampus === "wana"
                ? "text-white after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]"
                : "text-gray-400"
            }`}
          >
            SASH Wana
          </button>
        </div>

        {/* Content based on tab */}
        <div className="animate-fadeIn">
          {activeCampus === "wardha" && (
            <p className="text-lg">
              Message content for <strong>SASH Wardha</strong> goes here...
            </p>
          )}
          {activeCampus === "wana" && (
            <p className="text-lg">
              Message content for <strong>SASH Wana</strong> goes here...
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default DeansMessageSAHS;
