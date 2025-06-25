import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import FloatingButtons from "../../components/FloatingButtons";
import "swiper/css";
import "swiper/css/pagination";
// Replace with your Nursing banner images
import Banner1 from "../../assets/sas/sas website content pics/Banner1.jpeg";
import Banner2 from "../../assets/sas/college/Banner2.jpg";
import Banner3 from "../../assets/sas/college/Banner3.jpg";


const slides = [
  {
    img: Banner1,
    title: "Where Industry ".toUpperCase(),
    highlight: "Meets Education ".toUpperCase(),
    paragraph: `Future-ready UG & PG programs in AI, Healthcare Management, and Emerging Technologies.`,
    textPosition: "right",
  },
  {
    img: Banner2,
    title: "Global Immersion ".toUpperCase(),
    highlight: "& Internship Ecosystem".toUpperCase(),
    paragraph: "Global immersion programs at NUS Singapore & UCSI Malaysia. ",
    textPosition: "right",
  },
  {
    img: Banner3,
    // title: "Lead the".toUpperCase(),
    // highlight: "  Change".toUpperCase(),
    // paragraph: "MBA in Hospital & Healthcare Management",
    textPosition: "right",
  },
];

function HeroSaS() {
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

            {/* Mobile dim overlay for left-side slides */}
            {slide.textPosition !== "right" && (
              <div className="lg:hidden absolute inset-0 bg-opacity-60" />
            )}

            {/* Text Content */}
            <div
              className={`absolute
              top-auto bottom-12 p-5 md:p-15 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
              text-white w-full sm:w-full lg:w-[40%] max-w-none z-20
              ${
                slide.textPosition === "right"
                  ? "text-left mt-30 sm:right-0 sm:mr-10"
                  : idx === 0
                  ? "text-left sm:left-8"
                  : "text-left  sm:left-0  sm:ml-10 "
              }`}
            >
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-oswald-medium font-medium  leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)] ${
                  slide.textPosition === "right" ? "text-left" : "text-left"
                }`}
              >
                {slide.title}
                {idx !== 1 && <br />}
                <span className="text-[#E1CD67] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.4)]">
                  {slide.highlight}
                </span>
              </h1>

              <p
                className={`${
                  idx !== 2 ? "mt-2" : ""
                } text-base sm:text-xl font-[400] whitespace-pre-line drop-shadow-lg max-w-[545px] ${
                  slide.textPosition === "right" ? "text-left" : "text-left"
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
}

export default HeroSaS;
