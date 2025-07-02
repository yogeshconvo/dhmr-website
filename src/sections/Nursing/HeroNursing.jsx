import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import NursingBanner1 from "../../assets/Nursing/Nursing/Banner/Banner 1.jpeg";
import NursingBanner2 from "../../assets/Nursing/Nursing/Banner/Banner 2.jpg";
import NursingBanner3 from "../../assets/Nursing/Nursing/Banner/Banner 3.jpg";
import NursingBanner4 from "../../assets/Nursing/Nursing/Banner/banner6.jpg";
import FloatingButtons from "../../components/FloatingButtons";

const slides = [
  {
    img: NursingBanner1,
    title: "WHERE NURSING",
    highlight: " SKILLS MEET SCALE",
    paragraph:
      "Hands-On Nursing Training from Primary Care to<br/> Super Speciality with 3000+ Bedded Hospitals",
    textPosition: "left",
  },
  {
    img: NursingBanner2,
    title: "MASTER CLINICAL<br/>",
    highlight: "EXCELLENCE",
    paragraph:
      "Advanced Skill Labs, OSCE Training, High-Fidelity Mannequins & Specialized Maternal Health Labs",
    textPosition: "right",
  },
  {
    img: NursingBanner3,
    title: "FROM INDIA",
    highlight: " TO ABROAD",
    paragraph:
      "International Externships and Placements at Renowned Institutions like NIMHANS, Tata Memorial, and UKE Hospital, Germany",
    textPosition: "left",
  },
  {
    img: NursingBanner4,
    title: "YOUR MERIT,",
    highlight: "OUR SUPPORT",
    paragraph: "Multiple Merit-Based Scholarships and Financial Assistance ",
    textPosition: "left",
  },
];

const HeroNursing = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* Background Image */}
            <img
              src={slide.img}
              alt="Nursing"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t ${
                slide.textPosition === "right"
                  ? "right-0 md:bg-gradient-to-l"
                  : "hidden lg:block left-0 md:bg-gradient-to-r"
              }`}
            />
            {idx === 3 && (
              <div
                className={`absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-l from-black/40 to-transparent`}
              />
            )}
            {idx === 2 && (
              <div
                className={`absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-r from-black/20 to-transparent`}
              />
            )}

            {/* Mobile dim overlay for left-side slides */}
            {slide.textPosition !== "right" && (
              <div className="lg:hidden absolute inset-0 bg-opacity-60" />
            )}

            {/* Text Content */}
            <div
              className={`absolute
    bottom-12 p-5 md:p-15 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
    text-white w-full sm:w-full lg:w-[40%] max-w-none z-20
    ${
      idx === 3
        ? "text-left mt-26 sm:right-0 sm:mr-30"
        : slide.textPosition === "right"
        ? "text-left mt-26 sm:right-0 sm:mr-30"
        : idx === 0 && 3
        ? "text-left sm:left-8 mt-28"
        : "text-left sm:left-0 sm:ml-10"
    }`}
            >
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-oswald-medium font-medium leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)] text-left ${
                  idx === 3 ? "ml-35 mt-30" : ""
                }`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: slide.title + (idx !== 1 ? "<br/>" : ""),
                  }}
                />
                <span className="text-[#E1CD67] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]">
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
        ))}
      </Swiper>
      <FloatingButtons />
    </div>
  );
};

export default HeroNursing;
