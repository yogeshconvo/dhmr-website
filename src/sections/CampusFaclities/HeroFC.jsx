import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import Banner1 from "../../assets/SPDC/b1.jpg";
import Banner2 from "../../assets/SPDC/b2.jpg";
import Banner3 from "../../assets/SPDC/b3.jpg";
import FloatingButtons from "../../components/FloatingButtons";
import YellowStrap from "../../components/UI/YellowStrap";

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

const HeroCF = () => {
  const navigate = useNavigate();

  const slides = [
    {
      img: Banner1,
      title: "LEARNING COMES\n [[#E1CD67]] ALIVE HERE[[/#E1CD67]]",
      highlight: "Amongst companions and safe serene spaces,",

      textPosition: "left",
    },
    {
      img: Banner2,
      title: "FACILITIES THAT  \n [[#E1CD67]]EMPOWER LEAP [[/#E1CD67]]",

      highlight: "Space planning that inspires learning",

      textPosition: "left",
    },
    {
      img: Banner3,
      title: "INFRASTRUCTURE,\n[[#E1CD67]]  THAT THINKS AHEAD [[/#E1CD67]]",
      highlight:
        "A kaleidoscope of clubs, fests, and community initiatives for every passion.",
      textPosition: "left",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Top Strip */}
      <YellowStrap />

      {/* Swiper */}
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
      <FloatingButtons />
    </div>
  );
};

export default HeroCF;
