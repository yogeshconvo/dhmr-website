import React, { useState } from "react";

export default function IQACSection() {
  const [active, setActive] = useState("NAAC");

  const buttons = [
    "Composition",
    "Institutional Development Plan",
    "Quality Policy",
    "Minutes of Meeting",
    "NAAC",
    "NIRF",
    "Accreditations, Rankings & Recognitions",
  ];

  return (
    <section className="bg-[#eaf3fb] py-16 px-4 font-[Arial]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-10 text-left">
          <div className="w-14 h-1 bg-red-600 mb-3" />
          <h2 className="text-3xl font-bold text-gray-700 uppercase">IQAC</h2>
        </div>

        {/* Button Grid */}
        <div className="space-y-4">
          {/* First row */}
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.slice(0, 3).map((btn, idx) => (
              <button
                key={idx}
                onClick={() => setActive(btn)}
                className={`py-3 w-92 text-white text-sm sm:text-base rounded shadow-md transition-all duration-200 text-center ${
                  active === btn
                    ? "bg-[#f04e30] font-semibold"
                    : "bg-[#0f2c5c] hover:bg-[#183c72]"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Second row */}
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.slice(3, 6).map((btn, idx) => (
              <button
                key={idx + 3}
                onClick={() => setActive(btn)}
                className={`py-3 w-92 text-white text-sm sm:text-base rounded shadow-md transition-all duration-200 text-center ${
                  active === btn
                    ? "bg-[#f04e30] font-semibold"
                    : "bg-[#0f2c5c] hover:bg-[#183c72]"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Last row - Centered Single Button */}
          <div className="flex justify-center">
            {buttons[6] && (
              <button
                onClick={() => setActive(buttons[6])}
                className={`py-3 w-92 text-white text-sm sm:text-base rounded shadow-md transition-all duration-200 text-center ${
                  active === buttons[6]
                    ? "bg-[#f04e30] font-semibold"
                    : "bg-[#0f2c5c] hover:bg-[#183c72]"
                }`}
              >
                {buttons[6]}
              </button>
            )}
          </div>
        </div>

        {/* Annual Reports Tabs */}
        <div className="mt-16 text-left">
          <h3 className="text-[#0f2c5c] font-bold text-base mb-3">
            Annual Reports
          </h3>
          <div className="flex gap-8 text-sm font-semibold text-[#0f2c5c] border-b border-gray-300 pb-1">
            <div className="border-b-4 border-[#0f2c5c]">IQAC</div>
            <div className="text-blue-600 hover:underline cursor-pointer">
              SDG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
