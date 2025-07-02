import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import YellowStrip from "../../components/UI/YellowStrap";
import Banner1 from "../../assets/FEAT/Banner1.png";
import Banner2 from "../../assets/FEAT/Banner2.png";
import Banner3 from "../../assets/FEAT/Banner3.1.jpg";
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

const HeroFEAT = () => {
  const navigate = useNavigate();

  const slides = [
    {
      img: Banner2,
      title:
        "TECHNOLOGY TO MAKE HEALTHCARE SMARTER:[[#E1CD67]] WELCOME TO TECHNO-[[/#E1CD67]]\n[[#E1CD67]]HEALTH AT FEAT[[/#E1CD67]]",
      highlight:
        "AI-powered diagnostics. Biomedical \ninnovation. Real-world clinical engineering",
    },
    {
      img: Banner3,
      title: "ACE CLINICAL\nENGINEERING [[#E1CD67]]AT FEAT[[/#E1CD67]]",
      highlight:
        "Where technology meets patient care and \ncareers take flight.",
    },
    {
      img: Banner1,
      title:
        "WHERE TOMORROW’S\nENGINEERS[[#E1CD67]] BEGIN THEIR JOURNEY[[/#E1CD67]]",
      highlight:
        "Global exposure. Interdisciplinary learning.\nA campus built for innovation.",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
  
      <YellowStrip />
   
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-oswald-medium font-medium leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)]">
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

export default HeroFEAT;
