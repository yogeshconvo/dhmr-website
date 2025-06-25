import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Banner1 from "../../assets/RNPC/hero/Banner01.png";
import Banner2 from "../../assets/RNPC/hero/Banner02.png";
import Banner3 from "../../assets/RNPC/hero/Banner03.png";
import Banner4 from "../../assets/RNPC/hero/Banner04.png";
import Banner5 from "../../assets/RNPC/hero/Banner05.png";
import Banner6 from "../../assets/RNPC/hero/Banner06.png";
import Banner7 from "../../assets/RNPC/hero/Banner07.png";
import Banner8 from "../../assets/RNPC/hero/Banner08.png";
import Banner9 from "../../assets/RNPC/hero/Banner09.png";
import Banner10 from "../../assets/RNPC/hero/Banner10.png";

const slides = [
  {
    img: Banner1,
    part1: "Gait and motion analysis via X-sens,",
    part2: "Center for Advanced Physiotherapy Education and Research",
    textPosition: "right",
  },
  {
    img: Banner2,
    part1: "Cutting-Edge",
    part2: "Neurorehabilitation",
    textPosition: "left",
  },
  {
    img: Banner3,
    part1: "Cutting- Edge",
    part2: "Neurorehabilitation",
    textPosition: "right",
  },
  {
    img: Banner4,
    part1: "Elite Sports Physiotherapy:",
    part2: "Where science meets performance!",
    textPosition: "left",
  },
  {
    img: Banner5,
    part1: "Awarded Excellence:",
    part2: "Recognized as Best Institute 2024",
    textPosition: "right",
  },
  {
    img: Banner6,
    part1: "Shaping minds, refining techniques —",
    part2: "where every classroom becomes a launchpad for clinical excellence.",
    textPosition: "left",
  },
  {
    img: Banner7,
    part1:
      "From expert hands to empathetic care — our clinic is where learning meets life-changing treatment.",
    part2: "(Physiotherapy clinical teaching in a 1500+ bedded hospital)",
    textPosition: "right",
  },
  {
    img: Banner8,
    part1: "Where Movement Meets Measurement:",
    part2: "Sports Physiotherapy",
    textPosition: "left",
  },
  {
    img: Banner9,
    part1: "Where Healing Meets Harmony-",
    part2: "A Campus that Celebrates Culture, Compassion & Community",
    textPosition: "right",
  },
  {
    img: Banner10,
    part1: "Our library is more than books —",
    part2: "it’s a gateway to research, reflection, and revolutionary ideas.",
    textPosition: "left",
  },
];

function HeroRNPC() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="w-full h-full"
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, idx) => {
          // في الموبايل: حتى = فوق، فردي = تحت
          const mobilePosition =
            idx % 2 === 0 ? "top-10 bottom-auto" : "top-auto bottom-10";

          // في الديسكتوب: يمين أو شمال حسب textPosition
          const desktopPosition =
            slide.textPosition === "right"
              ? "sm:right-0 sm:text-right sm:mr-10 sm:items-end"
              : "sm:left-0 sm:text-left sm:ml-10 sm:items-start";

          return (
            <SwiperSlide key={idx}>
              <img
                src={slide.img}
                alt="RNPC Banner"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay يغطي كل الخلفية */}
              <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
              {/* Text Content */}
              <div
                className={`
          absolute flex flex-col justify-center
          px-4 sm:px-6 w-full sm:w-1/2 lg:w-[50%] max-w-none z-20
          text-white
          ${mobilePosition} sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2
          ${desktopPosition}
        `}
                style={{
                  left: slide.textPosition === "left" ? 0 : "auto",
                  right: slide.textPosition === "right" ? 0 : "auto",
                }}
              >
                <h1 className="text-4xl sm:text-5xl font-oswald-medium font-[500] leading-[1.1] max-w-full uppercase  text-left">
                  <span className="text-white">
                    {slide.part1.toUpperCase()}
                  </span>
                  <br />
                  <span className="text-[#E1CD67]">
                    {slide.part2.toUpperCase()}
                  </span>
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HeroRNPC;
