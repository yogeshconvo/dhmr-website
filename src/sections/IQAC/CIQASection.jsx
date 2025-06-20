import React, { useState } from "react";

export default function CIQASection() {
  const [activeTab, setActiveTab] = useState("Annual");

  const reports = [
    { label: "2022-23 (ODL)", link: "#" },
    { label: "2022-23 (Online)", link: "#" },
    { label: "2023-24 (Online)", link: "#" },
  ];

  return (
    <section className="bg-white px-4 py-16 font-[Arial]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="w-14 h-1 bg-red-600 mb-3" />
          <h2 className="text-3xl font-bold text-gray-700 uppercase">CIQA</h2>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 text-gray-500 font-semibold border-b border-gray-300 mb-6">
          <button
            onClick={() => setActiveTab("Composition")}
            className={`pb-1 ${
              activeTab === "Composition"
                ? "text-[#0f2c5c] border-b-4 border-[#0f2c5c]"
                : ""
            }`}
          >
            Composition & Functions
          </button>
          <button
            onClick={() => setActiveTab("Annual")}
            className={`pb-1 ${
              activeTab === "Annual"
                ? "text-[#0f2c5c] border-b-4 border-[#0f2c5c]"
                : ""
            }`}
          >
            Annual CIQA Reports
          </button>
        </div>

        {/* Report Links */}
        <div className="flex flex-col gap-3">
          {reports.map((r, idx) => (
            <a
              key={idx}
              href={r.link}
              className="text-blue-600 hover:underline text-sm sm:text-base"
            >
              {r.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
