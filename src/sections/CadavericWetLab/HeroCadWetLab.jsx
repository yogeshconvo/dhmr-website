import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import your banner images
import Banner1 from "../../assets/CadavericWetLab/cadaveric1.png";
import Banner2 from "../../assets/CadavericWetLab/wetlab1.png";
import Banner3 from "../../assets/CadavericWetLab/cadaveric2.png";
import Banner4 from "../../assets/CadavericWetLab/wetlab2.png";

// Helper for colored highlights in titles
const parseTitle = (title) => {
  // [[color]]text[[/color]]
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

const slides = [
  {
    img: Banner1,
    title:
      "REALISTIC SURGICAL TRAINING WITH [[#E1CD67]]CADAVERIC PRECISION[[/#E1CD67]]",
    highlight: "Cadaveric Surgical Skill Lab – Wanadongri, Nagpur",
  },
  {
    img: Banner2,
    title:
      "BRIDGING KNOWLEDGE AND PRACTICE IN [[#E1CD67]]REALISTIC WET LAB SETTINGS[[/#E1CD67]]",
    highlight: "Wet Lab – Wanadongri, Nagpur",
  },
  {
    img: Banner3,
    title:
      "REFINING SURGICAL EXPERTISE WITH [[#E1CD67]]REAL-LIFE ANATOMICAL PRACTICE[[/#E1CD67]]",
    highlight: "Cadaveric Surgical Skill Lab – Wardha",
  },
  {
    img: Banner4,
    title:
      "MASTER SURGICAL TECHNIQUES IN [[#E1CD67]]HIGH-FIDELITY WET LAB SIMULATIONS[[/#E1CD67]]",
    highlight: "Wet Lab – Wardha",
  },
];

const HeroCadWetLab = () => {
  return (
    <div className="relative w-full h-[87vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <img
              src={slide.img}
              alt="Cadaveric/Wet Lab"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent" />
            <div className="lg:hidden absolute inset-0 bg-opacity-60 bg-gradient-to-b from-black/20 to-transparent z-10" />

            {/* Text Content */}
            <div
              className={`absolute px-4 sm:px-6 
                top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
                text-white w-full sm:w-full lg:w-[48%] max-w-none z-20 text-left
                ${idx % 2 === 0 ? "sm:left-8" : "sm:right-8"}`}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-oswald-medium font-medium leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)]">
                {parseTitle(slide.title)}
              </h1>
              <p className="text-base sm:text-xl mt-3 font-[300] whitespace-pre-line">
                {slide.highlight}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCadWetLab;
