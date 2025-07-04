import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import Banner1 from "../../assets/DMCP/banners/banner1.jpg";
import Banner2 from "../../assets/DMCP/banners/banner2.jpg";
import Banner3 from "../../assets/DMCP/banners/banner3.jpg";
import FloatingButtons from "../../components/FloatingButtons";
import YellowStrap from "../../components/UI/YellowStrap";

const HeroDMCP = () => {
  const navigate = useNavigate();

  // const slides = [
  //   {
  //     img: Banner1,
  //     title: "Accelerating Innovation",
  //     highlight: "Shaping Global Pharma Leaders.",
  //     paragraph: `Redefining pharmacy education through innovation, integrity, and impact`,
  //     textPosition: "left",
  //   },
  //   {
  //     img: Banner2,
  //     title: "Real-world Readiness with Hands-on",
  //     highlight: "Immersive Learning",
  //     paragraph:
  //       "‘Anukruti’ Simulation Centre, ‘Jigyasa’ Interactive Museum, and world-class labs for immersive learning.",
  //     textPosition: "left",
  //   },
  //   {
  //     img: Banner3,
  //     title: "Research-Driven",
  //     highlight: "Future-Ready",
  //     paragraph:
  //       "500+ research outputs, 11 patents, and placements across global pharma giants.",
  //     textPosition: "left",
  //   },
  // ];
  const slides = [
    {
      img: Banner1,
      title: "Bridging Medicines and Lives:",
      highlight: "Hospital-Based Learning for Future Pharmacists ",
      paragraph: ``,
      textPosition: "left",
    },
    {
      img: Banner2,
      title: "Industry Connect:",
      highlight: "  Driving Growth,\nBuilding Futures",
      paragraph: "",
      textPosition: "left",
    },
    {
      img: Banner3,
      title: "Research-Driven",
      highlight: "Future-Ready",
      paragraph:
        "500+ research outputs, 11 patents, and placements across global pharma giants.",
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
        {slides.map((slide, idx) => {
          const customMarginTop =
            idx === 0 ? "mt-[]" : idx === 1 ? "" : "";

          return (
            <SwiperSlide key={idx}>
              {/* Background Image */}
              <img
                src={slide.img}
                alt={`Slide ${idx}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className={`absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 
    ${
      idx === 0
        ? "bg-gradient-to-tr from-black/10 to-transparent"
        : idx === 1
        ? "bg-gradient-to-tr from-black/30 to-transparent"
        : "bg-gradient-to-t"
    }
    ${
      slide.textPosition === "right"
        ? "right-0 md:bg-gradient-to-l"
        : "hidden lg:block left-0 md:bg-gradient-to-r"
    }`}
              />
              {/* Mobile Dim Overlay */}
              {slide.textPosition !== "right" && (
                <div className="lg:hidden absolute inset-0 bg-black bg-opacity-60" />
              )}
              {/* Text Content */}
              <div
                className={`absolute
            top-auto bottom-12 p-5 md:p-15 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
            text-white w-full sm:w-full lg:w-[45%] max-w-none z-20
            ${
              slide.textPosition === "right"
                ? `text-left sm:right-0 ${idx === 1 ? "sm:mr-20" : ""}`
                : "text-left sm:left-0"
            }
            ${customMarginTop}
          `}
              >
                {/* <h1 className="text-3xl md:text-5xl font-oswald-medium font-medium uppercase leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)] text-left">
                  {slide.title}
                  <span className="text-[#E1CD67] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] block mt-2">
                    {slide.highlight}
                  </span>
                </h1> */}
                <h1
  className={`${
    idx === 0 ? "text-[42px]" : "text-3xl md:text-5xl"
  } font-oswald-medium font-medium uppercase leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)] text-left`}
>
  {slide.title}
  <span className="text-[#E1CD67] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] block mt-2">
    {slide.highlight}
  </span>
</h1>

                <p
                  className={`${
                    idx !== 2 ? "mt-2" : ""
                  } text-base sm:text-xl font-[400] whitespace-pre-line drop-shadow-lg max-w-[545px] ${
                    idx === 3 ? "text-left ml-35 text-amber-50" : "text-left"
                  }`}
                  dangerouslySetInnerHTML={{ __html: slide.paragraph }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <FloatingButtons />
    </div>
  );
};

export default HeroDMCP;
