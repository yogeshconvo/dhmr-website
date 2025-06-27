import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Banner1 from "../../assets/CDOE/banner1.jpg";
import Banner2 from "../../assets/CDOE/banner2.jpg";
import Banner3 from "../../assets/CDOE/banner3.jpg";
import FloatingButtons from "../../components/FloatingButtons";

const slides = [
  {
    img: Banner1,
    title: "Learn on Your Terms",
    highlight: "Excel on Your Timeline.",
    paragraph: `Signed for flexibility, affordability, and future-ready careers—backed by a strong academic legacy of DMIHER (NAAC A++)`,
    textPosition: "right",
  },
  {
    img: Banner2,
    title: "The Power of Two Degrees ",
    highlight: "The Freedom of Choice.",
    paragraph: "Earn an online degree while pursuing another in offline mode.",
    textPosition: "right",
  },
  {
    img: Banner3,
    title: "",
    highlight: "",
    textPosition: "left",
  },
];

const HeroNursing = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="relative w-full h-[90vh] ">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => {
          const customMarginTop =
            idx === 0 ? "mt-[25px]" : idx === 1 ? "mt-[150px]" : "";

          return (
            <SwiperSlide key={idx}>
              {/* Background Image */}
              <img
                src={slide.img}
                alt={`Slide ${idx}`}
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

              {/* Mobile Dim Overlay */}
              {slide.textPosition !== "right" && (
                <div className="lg:hidden absolute inset-0 bg-black bg-opacity-60" />
              )}

              {/* Text Content */}
              <div
                className={`absolute
                  top-auto bottom-12 p-5 md:p-15 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
                  text-white w-full sm:w-full lg:w-[40%] max-w-none z-20
                  ${
                    slide.textPosition === "right"
                      ? "text-left sm:right-0 sm:mr-10"
                      : "text-left sm:left-0 sm:ml-10"
                  }
                  ${customMarginTop}
                `}
              >
                <h1 className="text-3xl md:text-5xl font-oswald-medium font-medium uppercase leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)] text-left">
                  {slide.title}
                  <span className="text-[#E1CD67] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] block mt-2">
                    {slide.highlight}
                  </span>
                </h1>
                <p
                  className={`${
                    idx !== 2 ? "mt-2" : ""
                  } text-base sm:text-lg font-[400] whitespace-pre-line drop-shadow-lg max-w-[545px] ${
                    slide.textPosition === "right" ? "text-left" : "text-left"
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

export default HeroNursing;
