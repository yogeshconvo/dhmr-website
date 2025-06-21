// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// import slideImg from "../../assets/dm3.png";
// import slide2 from "../../assets/heroslide2.png";
// import slide1 from "../../assets/heroslide1.png";
// import HeroMobile from "../../assets/HomeMobile.jpg";

// const HeroSection = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://bot-wframe.geta.ai/output.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.on) {
//         window.on(
//           "STExdkZMNTdwZnpLM3JSVDo0MTA2MjMzODMyZDZkYjEzZjA3NDhmZWJjOTJkMmEyMDYyNzc5MDg5ODQwYjc5MTI4YTJmMWQ1OWM3NTA1Y2NkNmEyNjIwNGQwZjUyNTVlNzJiOWRmMzdjZWJiMTg4ZDk=",
//           243,
//           "a4fbba8e-09e2-4411-8509-7fb158b27a7c"
//         );

//         const interval = setInterval(() => {
//           const bubble = document.querySelector("[id^='geta-bubble']");
//           if (bubble) {
//             bubble.style.bottom = "100px";
//             clearInterval(interval);
//           }
//         }, 500);
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="">
//       {/* Hero Slider */}
//       <div className="relative w-full hero-slider-hight overflow-hidden">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           loop={true}
//           className="w-full h-full"
//         >
//           {/* <SwiperSlide>
//             <div className="relative w-full hero-slider-hight">
//               <img
//                 src={slideImg}
//                 alt="Campus"
//                 className="absolute inset-0 w-full h-full object-cover object-[42%]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-l md:from-black/30 to-transparent" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
//               <div className="absolute left-[0%] sm:left-auto sm:right-[40%] md:right-[3%] md:top-[55%] top-[80%] transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
//                 <h1 className="font-oswald-medium tracking-wider text-4xl md:text-5xl font-[500]">
//                   WORLD-CLASS INFRASTRUCTURE,
//                 </h1>
//                 <p className="font-oswald-medium text-4xl md:text-5xl font-[500]">
//                   OFFERING{" "}
//                   <span className="text-[#E1CD67] tracking-wider font-bold">
//                     15+ <br />
//                     STREAMS
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide> */}
//           <SwiperSlide>
//             <div className="relative w-full hero-slider-hight">
//               {/* Desktop / tablet image */}
//               <img
//                 src={slideImg}
//                 alt="Campus"
//                 className="absolute inset-0 w-full h-full object-cover object-[42%] hidden sm:block"
//               />
//               {/* Mobile image */}
//               <img
//                 src={HeroMobile}
//                 alt="Campus Mobile"
//                 className="absolute inset-0 w-full h-full object-cover sm:hidden"
//               />

//               <div className="absolute inset-0 bg-gradient-to-l md:from-black/30 to-transparent" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
//               <div className="absolute left-[0%] sm:left-auto sm:right-[40%] md:right-[3%] md:top-[55%] top-[80%] transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
//                 <h1 className="font-oswald-medium tracking-wider text-4xl md:text-5xl font-[500]">
//                   WORLD-CLASS INFRASTRUCTURE,
//                 </h1>
//                 <p className="font-oswald-medium text-4xl md:text-5xl font-[500]">
//                   OFFERING{" "}
//                   <span className="text-[#E1CD67] tracking-wider font-bold">
//                     15+ <br />
//                     STREAMS
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="flex flex-col-reverse items-center justify-between md:justify-center lg:flex-row hero-slider-hight p-2 md:p-8 hero-slider-bg md:gap-10">
//               <div className="hidden md:flex w-full lg:w-2/7 items-center justify-start xl:justify-center mt-2 lg:mt-0 excellence-wrod">
//                 <div>
//                   <h1 className="text-3xl sm:text-4xl xl:text-5xl text-secondary md:text-primary font-bold">
//                     EXCELLENCE
//                   </h1>
//                   <h2 className="text-3xl sm:text-4xl xl:text-5xl text-white md:text-secondary mt-2 font-bold !m-0">
//                     SHINES
//                   </h2>
//                 </div>
//               </div>

//               <div className="hidden md:flex items-center justify-center flex-1">
//                 <img src={slide2} alt="" className="w-[92%]" />
//               </div>

//               <div className="flex md:hidden items-center justify-center flex-1 w-full h-full">
//                 <img src={slide1} alt="" className="h-[100%]" />
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>

//         {/* Vertical Sticky Buttons */}
//         <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%] right-[22px] font-[500] pointer-events-none z-50">
//           <div className="transform -rotate-90 origin-right pointer-events-auto">
//             <a
//               href="https://dmiher.edu.in/admissionform"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
//             >
//               Announcements
//             </a>
//           </div>
//           <div className="transform -rotate-90 origin-right pointer-events-auto">
//             <button
//               type="button"
//               onClick={() =>
//                 window.open(
//                   "https://www.dmiher.edu.in/lp/national-admission",
//                   "_blank"
//                 )
//               }
//               className="bg-[#122E5E] text-white text-sm px-6 py-3"
//             >
//               Admission Enquiry
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Yellow Strip */}
//       <div className="w-full sm:h-[60px] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center z-20">
//         <span className="mb-2 sm:mb-0 text-sm sm:ml-25">
//           Admissions open for 2025-26
//         </span>
//         <div className="flex flex-row flex-wrap items-center mr-10 text-center sm:text-left gap-x-4 gap-y-1">
//           <div className="hidden md:flex font-bold border-r-2 border-gray-600 pr-3 h-8 items-center">
//             Admission Helpline: <span>+91 8888040999</span>
//           </div>
//           <a
//             href="https://dmiher-apply.mastersofterp.com/ApplicationLandingPage/Index/DMIHER"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center text-sm bg-[#F04E30] text-white px-5 py-2 sm:px-5 sm:py-2 space-x-3"
//           >
//             <span className="font-semibold">APPLY NOW</span>
//           </a>
//           <span className="text-base sm:text-sm text-gray-800">
//             for Admission 2025-26
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slideImg from "../../assets/dm3.png";
import slide2 from "../../assets/heroslide2.png";
import slide1 from "../../assets/heroslide1.png";
import HeroMobile from "../../assets/HomeMobile.jpg";
import PopupModal from "./PopupModal";
import FloatingButtons from "../../components/FloatingButtons";
const NoPaperFormWidget = () => {
  useEffect(() => {
    console.log("[NoPaperForm] useEffect triggered - injecting script");

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";

    script.onload = () => {
      console.log("[NoPaperForm] Script loaded successfully.");
      console.log("[NoPaperForm] window.npf:", window.npf);
    };

    script.onerror = (e) => {
      console.error("[NoPaperForm] Failed to load the script:", e);
    };
    fetch("https://widgets.in6.nopaperforms.com/emwgts.js");

    document.body.appendChild(script);
    console.log("[NoPaperForm] Script appended to document.body:", script.src);

    return () => {
      document.body.removeChild(script);
      console.log("[NoPaperForm] Script removed on unmount.");
    };
  }, []);

  useEffect(() => {
    const observerInterval = setInterval(() => {
      const container = document.querySelector(".npf_wgts");
      console.log("[NoPaperForm] Widget container exists:", !!container);

      if (container) {
        console.log("[NoPaperForm] Widget container attributes:");
        console.log("data-height:", container.getAttribute("data-height"));
        console.log("data-width:", container.getAttribute("data-width"));
        console.log("data-w:", container.getAttribute("data-w"));
        clearInterval(observerInterval);
      }
    }, 1000);

    return () => clearInterval(observerInterval);
  }, []);

  return (
    // <div
    //   className="npf_wgts"
    //   data-height="400px"
    //   data-width="full"
    //   data-w="e07589d3e4cb30c4c23ee47924975ec8"
    //   style={{ minHeight: "400px" }}
    // ></div>
    <div
      className="npf_wgts w-[500px] "
      data-height="420px"
      data-width="full"
      data-w="e07589d3e4cb30c4c23ee47924975ec8"
      style={{ width: "400px", minHeight: "420px" }}
    ></div>
  );
};
const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://bot-wframe.geta.ai/output.js";
    script.async = true;
    script.onload = () => {
      if (window.on) {
        window.on(
          "STExdkZMNTdwZnpLM3JSVDo0MTA2MjMzODMyZDZkYjEzZjA3NDhmZWJjOTJkMmEyMDYyNzc5MDg5ODQwYjc5MTI4YTJmMWQ1OWM3NTA1Y2NkNmEyNjIwNGQwZjUyNTVlNzJiOWRmMzdjZWJiMTg4ZDk=",
          243,
          "a4fbba8e-09e2-4411-8509-7fb158b27a7c"
        );

        const interval = setInterval(() => {
          const bubble = document.querySelector("[id^='geta-bubble']");
          if (bubble) {
            bubble.style.bottom = "100px";
            clearInterval(interval);
          }
        }, 500);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="">
      {/* Hero Slider */}
      <div className="relative w-full hero-slider-hight overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {/* <SwiperSlide>
            <div className="relative w-full hero-slider-hight">
              <img
                src={slideImg}
                alt="Campus"
                className="absolute inset-0 w-full h-full object-cover object-[42%]"
              />
              <div className="absolute inset-0 bg-gradient-to-l md:from-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
              <div className="absolute left-[0%] sm:left-auto sm:right-[40%] md:right-[3%] md:top-[55%] top-[80%] transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
                <h1 className="font-oswald-medium tracking-wider text-4xl md:text-5xl font-[500]">
                  WORLD-CLASS INFRASTRUCTURE,
                </h1>
                <p className="font-oswald-medium text-4xl md:text-5xl font-[500]">
                  OFFERING{" "}
                  <span className="text-[#E1CD67] tracking-wider font-bold">
                    15+ <br />
                    STREAMS
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="relative w-full hero-slider-hight">
              {/* Desktop / tablet image */}
              <img
                src={slideImg}
                alt="Campus"
                className="absolute inset-0 w-full h-full object-cover object-[42%] hidden sm:block"
              />
              {/* Mobile image */}
              <img
                src={HeroMobile}
                alt="Campus Mobile"
                className="absolute inset-0 w-full h-full object-cover sm:hidden"
              />

              <div className="absolute inset-0 bg-gradient-to-l md:from-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
              <div className="absolute left-[0%] sm:left-auto sm:right-[40%] md:right-[3%] md:top-[55%] top-[80%] transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
                <h1 className="font-oswald-medium tracking-wider text-4xl md:text-5xl font-[500]">
                  WORLD-CLASS INFRASTRUCTURE,
                </h1>
                <p className="font-oswald-medium text-4xl md:text-5xl font-[500]">
                  OFFERING{" "}
                  <span className="text-[#E1CD67] tracking-wider font-bold">
                    15+ <br />
                    STREAMS
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col-reverse items-center justify-between md:justify-center lg:flex-row hero-slider-hight p-2 md:p-8 hero-slider-bg md:gap-10">
              <div className="hidden md:flex w-full lg:w-2/7 items-center justify-start xl:justify-center mt-2 lg:mt-0 excellence-wrod">
                <div>
                  <h1 className="text-3xl sm:text-4xl xl:text-5xl text-secondary md:text-primary font-bold">
                    EXCELLENCE
                  </h1>
                  <h2 className="text-3xl sm:text-4xl xl:text-5xl text-white md:text-secondary mt-2 font-bold !m-0">
                    SHINES
                  </h2>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center flex-1">
                <img src={slide2} alt="" className="w-[92%]" />
              </div>

              <div className="flex md:hidden items-center justify-center flex-1 w-full h-full">
                <img src={slide1} alt="" className="h-[100%]" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Vertical Sticky Buttons */}
        {/* <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%] right-[22px] font-[500] pointer-events-none z-50">
          <div className="transform -rotate-90 origin-right pointer-events-auto">
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
              // onClick={() =>
              //   window.open(
              //     "https://www.dmiher.edu.in/lp/national-admission",
              //     "_blank"
              //   )
              // }
              onClick={() => setShowModal(true)}
              className="bg-[#122E5E] text-white text-sm px-6 py-3 "
            >
              Admission Enquiry
            </button>
          </div>
        </div> */}
      </div>
      {/* <PopupModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Admission Enquiry"
      >
        <div className="flex-grow p-0 m-0 overflow-auto">
          <NoPaperFormWidget />
        </div>
      </PopupModal> */}
      {/* Yellow Strip */}
      <FloatingButtons />
      <div className="w-full sm:h-[60px] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center z-20">
        <span className="mb-2 sm:mb-0 text-sm sm:ml-25">
          Admissions open for 2025-26
        </span>
        <div className="flex flex-row flex-wrap items-center mr-10 text-center sm:text-left gap-x-4 gap-y-1">
          <div className="hidden md:flex font-bold border-r-2 border-gray-600 pr-3 h-8 items-center">
            Admission Helpline: <span>+91 8888040999</span>
          </div>
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
    </div>
  );
};

export default HeroSection;
