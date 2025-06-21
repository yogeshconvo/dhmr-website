// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import AboutBanner1 from "../../assets/About/AboutBanner1.png";
// import AboutBanner2 from "../../assets/About/AboutBanner2.jpg";
// import AboutBanner3 from "../../assets/About/AboutBanner3.png";
// import PopupModal from "../Home/PopupModal";

// const slides = [
//   {
//     img: AboutBanner1,
//     title: "EMPOWERING MINDS.",
//     highlight: "TRANSFORMING FUTURES.",
//     textPosition: "right",
//   },
//   {
//     img: AboutBanner2,
//     title: "EXPANDING HORIZONS.",
//     highlight: "SHAPING TOMORROW.",
//     textPosition: "left",
//   },
//   {
//     img: AboutBanner3,
//     title: "INNOVATING TODAY.",
//     highlight: "ENGINEERING THE FUTURE.",
//     textPosition: "right",
//   },
// ];

// const HeroAbout = () => {
//   const navigate = useNavigate();

//   const [currentSlide, setCurrentSlide] = React.useState(0);

//   return (
//     <div className="relative w-full h-[90vh] overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         // pagination={{ clickable: fsld }}
//         onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
//         className="w-full h-full"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx}>
//             {/* Background Image */}
//             <img
//               src={slide.img}
//               alt="Campus"
//               className="absolute inset-0 w-full h-full object-cover"
//             />

//             {/* Gradient Overlay */}
//             <div
//               className={` absolute top-auto md:top-0 bottom-0  w-full  h-1/2 md:h-full z-10 bg-gradient-to-t ${
//                 slide.textPosition === "right"
//                   ? "right-0 md:bg-gradient-to-l md:from-black/70 md:to-transparent"
//                   : "hidden lg:block left-0 md:bg-gradient-to-r"
//               }`}
//             />

//             {/* Text Content */}
//             {!(slide.textPosition === "right") && (
//               <div className="lg:hidden absolute inset-0  bg-opacity-60 bg-gradient-to-b from-black/50 to-transparent text-white" />
//             )}
//             <div
//               className={`absolute px-4 sm:px-6 ${
//                 slide.textPosition === "right"
//                   ? "lg:right-0 text-right mr-6 sm:mr-10 lg:mr-20"
//                   : "left-0 text-left ml-6 sm:ml-10 max-lg:bottom-[65%]"
//               }
//       top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
//       text-white sm:w-1/2 w-[60%] lg:w-[50%] max-w-none z-20`}
//             >
//               <h1
//                 className={`text-5xl text-left font-oswald-medium font-[500] leading-[1.1] max-w-full ${
//                   slide.textPosition === "right" ? "lg:ml-30" : ""
//                 } `}
//               >
//                 {slide.title}
//                 <br />
//                 <span className="text-[#E1CD67]">{slide.highlight}</span>
//               </h1>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="flex absolute top-1/6 max-sm:top-1/5 right-[22px] font-[500] h-full z-20 flex-col gap-32">
//         <div className="transform -rotate-90 origin-right">
//           <a
//             href="https://dmiher.edu.in/admissionform"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
//           >
//             Announcements
//           </a>
//         </div>
//         <div className="transform -rotate-90 origin-right pointer-events-auto">
//           <button
//             type="button"
//             onClick={() => <PopupModal />}
//             className="bg-[#122E5E] text-white text-sm px-6 py-3"
//           >
//             Admission Enquiry
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AboutBanner1 from "../../assets/About/AboutBanner1.png";
import AboutBanner2 from "../../assets/About/AboutBanner2.jpg";
import AboutBanner3 from "../../assets/About/AboutBanner3.png";
import PopupModal from "../Home/PopupModal";

const slides = [
  {
    img: AboutBanner1,
    title: "EMPOWERING MINDS.",
    highlight: "TRANSFORMING FUTURES.",
    textPosition: "right",
  },
  {
    img: AboutBanner2,
    title: "EXPANDING HORIZONS.",
    highlight: "SHAPING TOMORROW.",
    textPosition: "left",
  },
  {
    img: AboutBanner3,
    title: "INNOVATING TODAY.",
    highlight: "ENGINEERING THE FUTURE.",
    textPosition: "right",
  },
];

// Inline NoPaperFormWidget (can also move to separate file)
const NoPaperFormWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";

    script.onload = () => {
      console.log("[NoPaperForm] Script loaded successfully.");
    };

    script.onerror = (e) => {
      console.error("[NoPaperForm] Failed to load script:", e);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="npf_wgts w-[500px]"
      data-height="420px"
      data-width="full"
      data-w="e07589d3e4cb30c4c23ee47924975ec8"
      style={{ width: "400px", minHeight: "420px" }}
    ></div>
  );
};

const HeroAbout = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={slide.img}
              alt="Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={`absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t ${
                slide.textPosition === "right"
                  ? "right-0 md:bg-gradient-to-l md:from-black/70 md:to-transparent"
                  : "hidden lg:block left-0 md:bg-gradient-to-r"
              }`}
            />
            {!(slide.textPosition === "right") && (
              <div className="lg:hidden absolute inset-0 bg-opacity-60 bg-gradient-to-b from-black/50 to-transparent text-white" />
            )}
            <div
              className={`absolute px-4 sm:px-6 ${
                slide.textPosition === "right"
                  ? "lg:right-0 text-right mr-6 sm:mr-10 lg:mr-20"
                  : "left-0 text-left ml-6 sm:ml-10 max-lg:bottom-[65%]"
              }
              top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
              text-white sm:w-1/2 w-[60%] lg:w-[50%] max-w-none z-20`}
            >
              <h1
                className={`text-5xl text-left font-oswald-medium font-[500] leading-[1.1] max-w-full ${
                  slide.textPosition === "right" ? "lg:ml-30" : ""
                }`}
              >
                {slide.title}
                <br />
                <span className="text-[#E1CD67]">{slide.highlight}</span>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating buttons on the right */}
      <div className="flex absolute top-1/6 max-sm:top-1/5 right-[22px] font-[500] h-full z-20 flex-col gap-32">
        <div className="transform -rotate-90 origin-right">
          <a
            href="https://dmiher.edu.in/admissionform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
          >
            Announcements
          </a>
        </div>
        <div className="transform -rotate-90 origin-right pointer-events-auto">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-[#122E5E] text-white text-sm px-6 py-3"
          >
            Admission Enquiry
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <PopupModal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Admission Enquiry"
        >
          <div className="flex-grow p-0 m-0 overflow-auto">
            <NoPaperFormWidget />
          </div>
        </PopupModal>
      )}
    </div>
  );
};

export default HeroAbout;
