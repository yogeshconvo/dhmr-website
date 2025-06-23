import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import Banner1 from "../../assets/SAHS/Banner1.jpg";
import Banner2 from "../../assets/SAHS/Banner2.jpg";
import Banner3 from "../../assets/SAHS/Banner3.jpg";

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

const HeroSAHS = () => {
  const navigate = useNavigate();

  const slides = [
    {
      img: Banner1,
      title:
        "Affiliated to 3000+ Multispecialty and super [[#E1CD67]] specialty hospital for training[[/#E1CD67]]",
      // highlight:
      //   "Global exposure. Interdisciplinary learning.\nA campus built for innovation.",
      textPosition: "right",
    },
    {
      img: Banner2,
      title:
        "Maharashtra Paramedical [[#E1CD67]] Council Approved Programs [[/#E1CD67]]",
      // highlight:
      //   "AI-powered diagnostics. Biomedical \ninnovation. Real-world clinical engineering",
      textPosition: "left",
    },
    {
      img: Banner3,
      title: "24 UG, 15 PG Programs and  [[#E1CD67]]2500+ Allied Health Students enrolled[[/#E1CD67]]",
      // highlight:
      //   "Where technology meets patient care and \ncareers take flight.",
      textPosition: "right",
    },
     {
      img: Banner1,
      title: "NEP aligned curriculum with  [[#E1CD67]]Academic Flexibility[[/#E1CD67]]",
      // highlight:
      //   "Where technology meets patient care and \ncareers take flight.",
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
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.img}
              alt="Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="relative w-full h-[90vh] bg-cover bg-center flex items-center"
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40 sm:bg-black/30 z-10" />

              {/* Text content */}
              <div
                className={`absolute z-20 px-4 sm:px-6 top-1/2 transform -translate-y-1/2
              text-white w-full sm:w-1/2 max-w-2xl ${slide.textPosition === "right"
                    ? "right-0 sm:text-left text-center sm:mr-1"
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

export default HeroSAHS;
