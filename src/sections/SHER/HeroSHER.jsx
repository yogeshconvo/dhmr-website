import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import Banner1 from "../../assets/SHER/1.png";
import Banner2 from "../../assets/SHER/2.png";
import Banner3 from "../../assets/SHER/3.png";
import Banner4 from "../../assets/SHER/4.png";

// Parser for [[color]]text[[/color]]
const parseTitle = (title) => {
  const regex = /\[\[([^\]]+)\]\](.*?)\[\[\/\1\]\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) {
      parts.push(title.substring(lastIndex, match.index));
    }
    parts.push(
      <span
        key={match.index}
        className="font-semibold"
        style={{ color: match[1] }}
      >
        {match[2]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < title.length) {
    parts.push(title.substring(lastIndex));
  }

  return parts;
};

const HeroSHER = () => {
  const navigate = useNavigate();

  const slides = [
    {
      img: Banner1,
      title:
        "UNIFIED FRAMEWORKS. GLOBAL STANDARDS.[[#E1CD67]] ACADEMIC EXCELLENCE.[[/#E1CD67]]",
      highlight:
        "Faculty and leadership of the School of Higher Education and Research, driving global standards and academic integrity.",
      textPosition: "left",
    },
    {
      img: Banner2,
      title:
        "[[#E1CD67]]COLLABORATIONS THAT REDEFINE[[/#E1CD67]] HIGHER EDUCATION.",
      highlight:
        "Welcoming academic leaders from the University of Sydney to SHER, fostering global partnerships in health professions education.",
      textPosition: "right",
    },
    {
      img: Banner3,
      title:
        "COMPETENCY-BASED CURRICULUM[[#E1CD67]] FACULTY EXCELLENCE. NATIONAL IMPACT[[/#E1CD67]]",
      highlight:
        "Dr. Aruna V. Vanikar, President of UG-MEB, NMC, with SHER faculty at the CBME compendium release, marking a national milestone.",
      textPosition: "left",
    },
    {
      img: Banner4,
      title:
        "GLOBAL PERSPECTIVES. [[#E1CD67]] ACADEMIC EXCHANGE. SHARED VISION.[[/#E1CD67]]",
      highlight:
        "Dr. Shailendra Sawleshwarkar , Director of Academic Education, and Dr. Jocelyne Basseal, Associate Director, Sydney Medical School, Faculty of Medicine and Health, University of Sydney during their visit to SHER",
      textPosition: "right",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Top Strip */}
      <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
        <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>
        <div className="flex items-center gap-x-5 gap-y-1">
          <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
            <span className="font-semibold text-xl">APPLY NOW</span>
          </div>
          <span className="text-base sm:text-sm text-gray-800">
            for Admission 2025-26
          </span>
        </div>
      </div>

      {/* Helpline */}
      <div className="absolute right-4 xl:right-[6%] z-20 hidden lg:block">
        <a href="tel:+918888040999">
          <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
            Helpline: <span>+91 8888040999</span>
          </button>
        </a>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            {/* Background image */}
            <img
              src={slide.img}
              alt="Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 sm:bg-black/30 z-10" />

            {/* Text content */}
            <div
              className={`absolute z-20 px-4 sm:px-6 top-1/2 transform -translate-y-1/2
              text-white w-full sm:w-1/2 max-w-2xl ${
                slide.textPosition === "right"
                  ? "right-0 sm:text-left text-center sm:mr-10"
                  : "left-0 sm:text-left text-center sm:ml-10"
              }`}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-oswald-medium font-medium leading-snug whitespace-pre-line">
                {parseTitle(slide.title)}
              </h1>
              <p className="text-base sm:text-xl mt-3 font-light whitespace-pre-line">
                {slide.highlight}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Side Buttons */}
      <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%] right-[22px] font-[500] pointer-events-none z-50">
        <div className="transform -rotate-90 origin-right pointer-events-auto">
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
          >
            Announcements
          </a>
        </div>
        <div className="transform -rotate-90 origin-right pointer-events-auto">
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.dmiher.edu.in/lp/national-admission",
                "_blank"
              )
            }
            className="bg-[#122E5E] text-white text-sm px-6 py-3"
          >
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSHER;
