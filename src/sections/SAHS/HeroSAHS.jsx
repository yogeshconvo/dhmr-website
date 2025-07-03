import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import Banner1 from "../../assets/SAHS/Images/New folder/Banner1.jpeg";
import Banner2 from "../../assets/SAHS/Images/New folder/Banner2.jpg";
import Banner3 from "../../assets/SAHS/Images/New folder/Banner3.jpg";
import Banner4 from "../../assets/SAHS/Images/New folder/Banner4.jpg";
import FloatingButtons from "../../components/FloatingButtons";

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
        "Learning Where Lives Are Being Saved.\n[[#E1CD67]]Real-time training inside ICUs and dialysis units[[/#E1CD67]]",
      textPosition: "right",
    },
    {
      img: Banner2,
      title:
        "Hands-on Diagnostic & Lab Learning\n[[#E1CD67]]Diagnostic acumen through advanced lab equipment, simulation tools, and clinical mentorship[[/#E1CD67]]",
      textPosition: "left",
    },
    {
      img: Banner3,
      title:
        "Academic Excellence Meets Real-World Readiness\n[[#E1CD67]]Students are immersed in active healthcare environments—bridging theory with life-saving practice.[[/#E1CD67]]",
      textPosition: "right",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Top Strip */}
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

      {/* Helpline */}
      <div className="absolute right-4 xl:right-[6%] z-20 hidden lg:block">
        <a href="tel:+918888040999">
          <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
            Helpline: <span>+91 8888040999</span>
          </button>
        </a>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <img
              src={slide.img}
              alt="Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t md:bg-gradient-to-r from-black/20 to-transparent" />
            <div className="lg:hidden absolute inset-0 bg-opacity-60 bg-gradient-to-b from-black/20 to-transparent z-10" />

            <div
              className={`absolute px-4 sm:px-6 
    top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
    text-white w-full sm:w-full lg:w-[40%] max-w-none z-20 text-left
    ${
      idx === 2
        ? "sm:right-0 sm:mr-10"
        : idx === 0
        ? "sm:left-8 mt-28"
        : "sm:left-0 sm:ml-10 mt-5"
    }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-oswald-medium font-medium leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)] uppercase">
                {parseTitle(slide.title)}
              </h1>
              <p className="text-base sm:text-xl mt-3 font-[300] whitespace-pre-line">
                {slide.highlight}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <FloatingButtons />
    </div>
  );
};

export default HeroSAHS;
