import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Banner1 from "../../assets/CDOE/banner1.jpg";
import Banner2 from "../../assets/CDOE/banner2.jpg";
import Banner3 from "../../assets/CDOE/banner3.jpg";
import FloatingButtons from "../../components/FloatingButtons";
import YellowStrap from "../../components/UI/YellowStrap";

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

  // return (
  //   <>
  //     <YellowStrap />
  //     <div className="relative w-full h-[90vh] ">
  //       <Swiper
  //         modules={[Autoplay, Pagination]}
  //         autoplay={{ delay: 5000, disableOnInteraction: false }}
  //         loop={true}
  //         onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
  //         className="w-full h-full"
  //       >
  //         {slides.map((slide, idx) => {
  //           const customMarginTop =
  //             idx === 0 ? "mt-[25px]" : idx === 1 ? "mt-[150px]" : "";

  //           return (
  //             <SwiperSlide key={idx}>
  //               {/* Background Image */}

  //               <img
  //                 src={slide.img}
  //                 alt={`Slide ${idx}`}
  //                 className="absolute inset-0 w-full h-full object-cover"
  //               />

  //               {/* Gradient Overlay */}
  //               <div
  //                 className={`absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t ${
  //                   slide.textPosition === "right"
  //                     ? "right-0 md:bg-gradient-to-l"
  //                     : "hidden lg:block left-0 md:bg-gradient-to-r"
  //                 }`}
  //               />

  //               {/* Mobile Dim Overlay */}
  //               {slide.textPosition !== "right" && (
  //                 <div className="lg:hidden absolute inset-0 bg-black bg-opacity-60" />
  //               )}

  //               {/* Text Content */}
  //               <div
  //                 className={`absolute
  //   top-auto bottom-12 p-5 md:p-15 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
  //   text-white w-full sm:w-full lg:w-[45%] max-w-none z-20
  //   ${
  //     slide.textPosition === "right"
  //       ? `text-left sm:right-0 ${idx === 1 ? "sm:mr-20" : ""}`
  //       : "text-left sm:left-0 sm:ml-10"
  //   }
  //   ${customMarginTop}
  // `}
  //               >
  //                 <h1 className="text-3xl md:text-5xl font-oswald-medium font-medium uppercase leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)] text-left">
  //                   {slide.title}
  //                   <span className="text-[#E1CD67] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] block mt-2">
  //                     {slide.highlight}
  //                   </span>
  //                 </h1>
  //                 <p
  //                   className={`${
  //                     idx !== 2 ? "mt-2" : ""
  //                   } text-base sm:text-lg font-[400] whitespace-pre-line drop-shadow-lg max-w-[545px] ${
  //                     slide.textPosition === "right" ? "text-left" : "text-left"
  //                   }`}
  //                   dangerouslySetInnerHTML={{ __html: slide.paragraph }}
  //                 />
  //               </div>
  //             </SwiperSlide>
  //           );
  //         })}
  //       </Swiper>

  //       <FloatingButtons />
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="relative w-full h-[90vh] ">
        <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
          <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>

          <div className="flex items-center gap-x-5 gap-y-1">
            <a
              className="text-sm font-[500] px-5 py-2  bg-[#441df1] text-white  hover:bg-[#3a15c9] transition duration-300 flex items-center justify-center whitespace-nowrap uppercase "
              href="https://dmiheronline.edu.in/abc-registration"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABC Registration
            </a>
            <a
              href="https://dmiher-apply.mastersofterp.com/ApplicationLandingPage/Index/DMIHER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm bg-[#F04E30] text-white px-5 py-2 sm:px-5 sm:py-2 space-x-3"
            >
              <span className="font-semibold">APPLY NOW</span>
            </a>
            <span className="text-base sm:text-sm text-gray-800">
              for Admission 2025-26
            </span>
          </div>
        </div>
        <div className="absolute right-4 xl:right-[6%] top-0 z-20 hidden lg:block">
          <a href="tel:+918888040999">
            <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
              Helpline: <span>+91 8888040999</span>
            </button>
          </a>
        </div>
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
      text-white w-full sm:w-full lg:w-[45%] max-w-none z-20
      ${
        slide.textPosition === "right"
          ? `text-left sm:right-0 ${idx === 1 ? "sm:mr-20" : ""}`
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
    </>
  );
};

export default HeroNursing;
