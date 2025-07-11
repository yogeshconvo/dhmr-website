import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import your museum banner images
import Banner1 from "../../assets/museum/hero/Banner1.png";
import Banner2 from "../../assets/museum/hero/Banner2.png";
import Banner3 from "../../assets/museum/hero/Banner3.png";
import Banner4 from "../../assets/museum/hero/Banner4.png";

const slides = [
  {
    img: Banner1,
    title: (
      <span>
        SWADHYAY –{" "}
        <span className="text-[#E1CD67]">WHERE LEARNING COMES ALIVE</span>
      </span>
    ),
    highlight:
      "A state-of-the-art hub integrating anatomy, pathology, and more with interactive e-learning resources.",
  },
  {
    img: Banner2,
    title: (
      <span>
        JIGYASA –{" "}
        <span className="text-[#E1CD67]">WHERE CURIOSITY MEETS DISCOVERY</span>
      </span>
    ),
    highlight:
      "India’s first integrated medical museum bringing 8 departments under one roof, featuring live surgical feeds, interactive QR-coded specimens, and dedicated innovation areas.",
  },
  {
    img: Banner3,
    title: (
      <span>
        <span className="text-[#E1CD67]">A JOURNEY THROUGH MEDICINE</span> UNDER
        ONE ROOF
      </span>
    ),
    highlight:
      "Experience the future of self-directed learning in Central India’s pioneering museum space.",
  },
  {
    img: Banner4,
    title: (
      <span>
        <span className="text-[#E1CD67]">
          A LIVING LAB OF
          <br />
        </span>{" "}
        MEDICAL LEARNING
      </span>
    ),
    highlight:
      "Explore plastinated specimens, crime scene simulations, and a green herbarium, transforming theory into practice at the heart of DMIHER.",
  },
];

const HeroMuseum = () => {
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
              alt="Museum Banner"
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

export default HeroMuseum;
