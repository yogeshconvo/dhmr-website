import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import SPDCBanner1 from "../../assets/SPDC/b1.jpg";
import SPDCBanner2 from "../../assets/SPDC/b2.jpg";
import SPDCBanner3 from "../../assets/SPDC/b3.jpg";
import Floatingbuttons from "../../components/FloatingButtons";
import YellowStrip from "../../components/UI/YellowStrap";
import { title } from "framer-motion/client";

const HeroSPDC = () => {
  const navigate = useNavigate();

  const slides = [
    {
      img: SPDCBanner1,
      title: "325+ DENTAL CHAIRS",
      highlight: `Affiliated To 1,500+ Bedded \nMulti-Specialty Hospital`,
      paragraph:
        "Sharad Pawar Dental College & Hospital —\nA Landmark of Dental Excellence",
      textPosition: "left",
    },
    {
      img: SPDCBanner2,
      title: "Ranked among  India’s Top 25 dental institutions (NIRF)",
      highlight: " for 5 consecutive years – 24th rank in NIRF 2024",
      paragraph: "",
      textPosition: "left",
    },
    // {
    //   img: SPDCBanner2,
    //   title: "75% DOCTORAL FACULTY ",
    //   highlight: "850+ YEARS OF TEACHING EXPERIENCE",
    //   paragraph:
    //     "Learning by Doing — Hands-On Skill Training\nin a Simulated Environment",
    //   textPosition: "left",
    // },
    {
      img: SPDCBanner3,
      title: "First NABH-accredited",
      highlight: "Dental hospital In Maharashtra",
      // paragraph:
      //   "Postgraduate Precision — Advanced Clinical Exposure from Day One",
      textPosition: "left",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Top Strip */}
      <YellowStrip />

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => {
          const customMarginTop = idx === 0 ? "" : idx === 1 ? "" : "";

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
        : "bg-gradient-to-tr from-black/30 to-transparent"
    }
    ${
      slide.textPosition === "right"
        ? "right-0 md:bg-gradient-to-l"
        : "hidden lg:block left-0 md:bg-gradient-to-r"
    }`}
              />
              {/* Mobile Dim Overlay */}
              {slide.textPosition !== "right" && (
                <div className="lg:hidden absolute inset-0 bg-opacity-60" />
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
                <h1
                  className={`${
                    idx === 0
                      ? "text-3xl md:text-4xl md:mt-[-220px]"
                      : idx === 1
                      ? "text-3xl md:text-4xl"
                      : "text-5xl md:text-5xl"
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

      <Floatingbuttons />
    </div>
  );
};

export default HeroSPDC;
