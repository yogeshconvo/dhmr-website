import React from "react";

export default function NurturingEcosystem() {
  return (
    <div className="bg-white text-center px-4 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-oswald-medium text-[#4B4B4B]">
        A NURTURING ECOSYSTEM
      </h2>
      <p className="text-lg md:text-xl text-[#9E9E9E] mt-2 mb-6">
        Collaborations, mentorship, and global partnerships at the heart of
        advanced learning.
      </p>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-[#4B4B4B] text-sm md:text-base leading-relaxed">
        <p className="font-semibold mb-2">
          Directorate of Advanced Learning – Pioneering Academic Growth
        </p>
        <p>
          The Directorate of Advanced Learning is the university’s hub for
          higher academic pursuits— a dedicated academic body responsible for
          overseeing and managing Ph.D., fellowships, and post-doctoral
          programs. It plays a crucial role in fostering a research culture
          through rigorous academic support, robust policy frameworks, and an
          unwavering commitment to quality and innovation. From nurturing
          individual scholars to building global research collaborations, it
          empowers transformative impact by ensuring quality education, research
          excellence, and supporting scholars in their academic and professional
          growth.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <button className="w-60 bg-[#F05423] text-white text-xl font-oswald-medium px-8 py-4 rounded-md shadow-md hover:scale-105 transition">
          Fellowship
        </button>
        <button className="w-60 bg-[#0B2A6D] text-white text-xl font-oswald-medium px-8 py-4 rounded-md shadow-md hover:scale-105 transition">
          Ph.D.
        </button>
        <button className="w-60 bg-[#0B2A6D] text-white text-xl font-oswald-medium px-8 py-4 rounded-md shadow-md hover:scale-105 transition">
          Post Doc (DSc. & DLit.)
        </button>
      </div>
    </div>
  );
}
