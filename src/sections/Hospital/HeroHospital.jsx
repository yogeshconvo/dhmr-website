import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    gradient: "bg-gradient-to-r from-black to-[#122E5E]",
    title: (
      <span>
        <span className="text-[#E1CD67]">ONE VISION. </span>
        COUNTLESS LIVES TOUCHED.
      </span>
    ),
    highlight:
      "From rural reach to urban precision—DMIHER's hospitals redefine inclusive, high-quality care across Central India.",
  },
  {
    gradient: "bg-gradient-to-l from-black to-[#122E5E]",
    title: (
      <span>
        SERVING LIVES. SCALING IMPACT.{" "}
        <span className="text-[#E1CD67]">SETTING NEW BENCHMARKS.</span>
      </span>
    ),
    highlight: "Reflecting a future-forward approach grounded in empathy.",
  },
  {
    gradient: "bg-gradient-to-r from-black to-[#122E5E]",
    title: (
      <span>
        <span className="text-[#E1CD67]">ROOTED IN REACH. </span>
        BUILT FOR EXCELLENCE.
      </span>
    ),
    highlight:
      "Home to one of India's largest rural hospitals - delivering global-standard care.",
  },
];

const HeroHospital = () => {
  return (
    <div className="relative w-full h-[87.5vh] md:h-[89vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 w-full h-full ${slide.gradient}`}
            />

            {/* Text Content */}
            <div
              className={`absolute px-4 sm:px-6 
                top-[70%] md:top-1/2 transform md:-translate-y-1/2
                text-white w-full sm:w-full lg:w-[48%] max-w-none z-20 text-left
                ${idx % 2 === 0 ? "sm:left-8" : "sm:right-8"}`}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl max-w-[550px] font-oswald-medium font-medium leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)]">
                {slide.title}
              </h1>
              <p className="text-base sm:text-xl mt-3 font-[300] max-w-[450px] whitespace-pre-line">
                {slide.highlight}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroHospital;
