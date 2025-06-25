<<<<<<< HEAD
import React, { useState } from "react";
=======

import React, { useState } from 'react';
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
import program1 from "../../assets/ProgramSPDC/1.png";
import program2 from "../../assets/ProgramSPDC/2.png";
import program4 from "../../assets/ProgramSPDC/4.png";

<<<<<<< HEAD
const wardha = [
  { src: program1, alt: "Undergraduate" },
  { src: program2, alt: "Postgraduate" },
  { src: program4, alt: "PhD" },
];

const wana = [
  { src: program1, alt: "Undergraduate" },
  { src: program2, alt: "Postgraduate" },
];

const ProgramSectionSAHS = () => {
  const [activeCampus, setActiveCampus] = useState("wardha");

  const programData = activeCampus === "wardha" ? wardha : wana;

  return (
    <div className="bg-white max-w-7xl mx-auto px-6 md:px-20 py-16 text-[#666]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-oswald-medium mb-10 relative">
        <span className="block border-t-4 border-[#F25022] w-10 mb-2"></span>
        OUR PROGRAMS
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10 border-b border-gray-200">
        {["wardha", "wana"].map((campus) => (
          <button
            key={campus}
            className={`relative pb-2 text-lg font-bold transition-all duration-300 ${
              activeCampus === campus
                ? "text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveCampus(campus)}
          >
            {`SASH ${campus.charAt(0).toUpperCase() + campus.slice(1)}`}
          </button>
        ))}
      </div>

      {/* Shared Section Layout */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8 px-10">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-28 mt-5 w-full md:w-3/4">
          {programData.map((program, index) => (
            <div key={index} className="text-center">
              <img
                src={program.src}
                alt={program.alt}
                className="h-[70px] object-contain cursor-pointer hover:opacity-90 transition"
                onClick={() =>
                  window.open("https://www.dmiher.edu.in/courses", "_blank")
                }
              />
            </div>
          ))}
        </div>

        {/* Button on the right */}
        <div className="flex flex-col items-center md:items-start md:w-1/4 mt-10 md:mt-30">
          <button
            onClick={() =>
              window.open("https://www.dmiher.edu.in/courses", "_blank")
            }
            className="bg-[#F25022] text-white text-sm font-oswaldMedium px-8 py-2"
          >
            EXPLORE PROGRAMS
          </button>

          {/* Mobile Disclosure Link */}
        </div>
      </div>
      {/* Images & Button Side by Side */}

      <h2 className="text-3xl px-10 md:px-0 md:text-4xl font-oswald-medium mb-12 relative">
        <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
        MANDATORY DISCLOSURES
      </h2>
      {/* Bottom Link */}
      <div className="hidden sm:flex flex-col sm:flex-row sm:items-center gap-4">
        <a
          href="#"
          className="text-xl tracking-wide font-oswald-medium  text-gray-600  rounded-md font-[300] hover:bg-blue-100 transition"
        >
          Check all Mandatory Disclosures{" "}
          <span className="font-[400] underline">Click Here</span>
        </a>
      </div>
    </div>
  );
};

export default ProgramSectionSAHS;
=======

const wardha = [
    {
        src: program1,
        alt: "Undergraduate",
    },
    {
        src: program2,
        alt: "Postgraduate",
    },
    {
        src: program4,
        alt: "PhD",
    },
];

const wana = [
    {
        src: program1,
        alt: "Undergraduate",
    },
    {
        src: program2,
        alt: "Postgraduate",
    },
];

const ProgramSectionSAHS = () => {
    const [activeCampus, setActiveCampus] = useState('wardha');
    const [activeHospital, setActiveHospital] = useState('wardha-hospital');

    const showLeadership = (campus) => {
        alert(`Opening ${campus.toUpperCase()} Leadership Page...`);
        // In real application: navigate to leadership page
    };
    return (
        <div className="bg-white max-w-7xl mx-auto px-6 md:px-20 py-16 text-[#666]">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-oswald-medium mb-10 relative">
                <span className="block border-t-4 border-[#F25022] w-10 mb-2"></span>
                OUR PROGRAMS
            </h2>
            {/* Custom Tabs Like Image */}
            <div className="flex justify-center space-x-6 mb-10 border-b border-gray-200">
                <button
                    className={`relative pb-2 text-lg font-bold transition-all duration-300 ${activeCampus === 'wardha'
                        ? 'text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]'
                        : 'text-gray-400'
                        }`}
                    onClick={() => setActiveCampus('wardha')}
                >
                    SASH Wardha
                </button>
                <button
                    className={`relative pb-2 text-lg font-bold transition-all duration-300 ${activeCampus === 'wana'
                        ? 'text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]'
                        : 'text-gray-400'
                        }`}
                    onClick={() => setActiveCampus('wana')}
                >
                    SASH Wana
                </button>
            </div>

            {/* Images & Button Side by Side */}
            {activeCampus === 'wardha' && (
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 max-w-3xl w-full">
                        {wardha.map((program, index) => (
                            <div
                                key={index}
                                className="w-[180px] h-[180px] mx-auto text-center"
                            >
                                <img
                                    src={program.src}
                                    alt={program.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Explore Button */}
                    <div className="mt-40">
                        <button
                            onClick={() =>
                                window.open("https://www.dmiher.edu.in/courses", "_blank")
                            }
                            className="bg-[#F25022] text-white text-sm font-oswaldMedium px-10 py-2"
                        >
                            EXPLORE PROGRAMS
                        </button>
                    </div>
                </div>
            )}

            {activeCampus === 'wana' && (
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 max-w-3xl w-full">
                        {wana.map((program, index) => (
                            <div
                                key={index}
                                className="w-[180px] h-[180px] mx-auto text-center"
                            >
                                <img
                                    src={program.src}
                                    alt={program.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Explore Button */}
                    <div className="mt-40">
                        <button
                            onClick={() =>
                                window.open("https://www.dmiher.edu.in/courses", "_blank")
                            }
                            className="bg-[#F25022] text-white text-sm font-oswaldMedium px-10 py-2"
                        >
                            EXPLORE PROGRAMS
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgramSectionSAHS;
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
