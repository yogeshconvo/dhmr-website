import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Banner1 from "../../assets/RNPC/hero/1.png";
import Banner2 from "../../assets/RNPC/hero/2.jpg";
import Banner3 from "../../assets/RNPC/hero/3.jpg";
import Banner4 from "../../assets/RNPC/hero/4.jpg";
import YellowStrap from "../../components/UI/YellowStrap";
import FloatingButtons from "../../components/FloatingButtons";

const slides = [
  {
    img: Banner2,
    part1: "Awarded Excellence:",
    part2: "Recognized as Best Institute 2024",
    textPosition: "right",
  },
  {
    img: Banner3,
    part1: "Elite Sports Physiotherapy:",
    part2: "Where science meets performance!",
    textPosition: "left",
  },
  {
    img: Banner4,
    part1: "From expert hands to empathetic care",
    part2: "Physiotherapy clinical teaching in a 1500+ bedded hospital",
    textPosition: "right",
  },
];

function HeroRNPC() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <YellowStrap />
      <FloatingButtons />
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="w-full h-full"
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, idx) => {
          const mobilePosition =
            idx % 2 === 0 ? " bottom-10" : "top-auto bottom-10";

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

              <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
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
                <h1 className=" text-4xl md:text-5xl font-oswald-medium font-[500] leading-[1.1] max-w-full uppercase text-left drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
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
