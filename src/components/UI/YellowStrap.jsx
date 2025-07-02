import React from "react";

const YellowStrap = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
        <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>
        <div className="flex items-center gap-x-5 gap-y-1">
          <a
            href="https://dmiher-apply.mastersofterp.com/ApplicationLandingPage/Index/DMIHER"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm bg-[#F04E30] text-white px-5 py-2 sm:px-5 sm:py-2 space-x-3"
          >
            <span className="font-semibold">APPLY NOW</span>
          </a>
          <span className="text-base sm:text-sm text-gray-800">
            for Admission 2025-26
          </span>
        </div>
      </div>
      <div className="absolute right-4 xl:right-[6%] top-0 z-20 hidden lg:block">
        <a href="tel:+918888040999">
          <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
            Helpline: <span>+91 8888040999</span>
          </button>
        </a>
      </div>

      {/* Helpline */}
    </div>
  );
};

export default YellowStrap;
