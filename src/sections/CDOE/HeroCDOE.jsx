<<<<<<< HEAD
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { useNavigate } from "react-router-dom";

// import Banner1 from "../../assets/FEAT/Banner1.png";
// import Banner2 from "../../assets/FEAT/Banner2.png";
// import Banner3 from "../../assets/FEAT/Banner3.jpg";

// // Parser for [[color]]text[[/color]]
// const parseTitle = (title) => {
//     const regex = /\[\[([^\]]+)\]\](.*?)\[\[\/\1\]\]/g;
//     const parts = [];
//     let lastIndex = 0;
//     let match;

//     while ((match = regex.exec(title)) !== null) {
//         if (match.index > lastIndex) {
//             parts.push(title.substring(lastIndex, match.index));
//         }
//         parts.push(
//             <span
//                 key={match.index}
//                 className="font-semibold"
//                 style={{ color: match[1] }}
//             >
//                 {match[2]}
//             </span>
//         );
//         lastIndex = regex.lastIndex;
//     }

//     if (lastIndex < title.length) {
//         parts.push(title.substring(lastIndex));
//     }

//     return parts;
// };

// const HeroCDOE = () => {
//     const navigate = useNavigate();

// const slides = [
//     {
//         img: Banner1,
//         title:
//             "Learn on Your Terms \n[[#E1CD67]] Excel on Your Timeline.[[/#E1CD67]]",
//         highlight:
//             "Designed for flexibility, affordability, and future-ready \ncareers—backed by a strong academic legacy of\n DMIHER (NAAC A++) ",
//         textPosition: "right",
//     },
//     {
//         img: Banner2,
//         title:
//             "Global Classrooms \n[[#E1CD67]] Career-Class Credentials.[[/#E1CD67]]",
//         highlight:
//             "In-demand certifications from Coursera, with 5000+\n courses by leading universities and industry giants.",
//         textPosition: "left",
//     },
//     {
//         img: Banner3,
//         title: "The Power of Two\n Degrees [[#E1CD67]]The Freedom of Choice.[[/#E1CD67]]",
//         highlight:
//             "Earn an online degree while pursuing\n another in offline mode. ",
//         textPosition: "right",
//     },
// ];

//     return (
//         <div className="relative w-full h-[90vh] overflow-hidden">
//             {/* Top Strip */}
//             <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
//                 <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>
//                 <div className="flex items-center gap-x-5 gap-y-1">
//                     <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
//                         <span className="font-semibold text-xl">APPLY NOW</span>
//                     </div>
//                     <span className="text-base sm:text-sm text-gray-800">
//                         for Admission 2025-26
//                     </span>
//                 </div>
//             </div>

//             {/* Helpline */}
//             <div className="absolute right-4 xl:right-[6%] z-20 hidden lg:block">
//                 <a href="tel:+918888040999">
//                     <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
//                         Helpline: <span>+91 8888040999</span>
//                     </button>
//                 </a>
//             </div>

//             <Swiper
//                 modules={[Autoplay, Pagination]}
//                 autoplay={{ delay: 5000, disableOnInteraction: false }}
//                 className="w-full h-full"
//             >
//                 {slides.map((slide, idx) => (
//                     <SwiperSlide key={idx} className="relative w-full h-full">
//                         {/* Background image */}
//                         <img
//                             src={slide.img}
//                             alt="Campus"
//                             className="absolute inset-0 w-full h-full object-cover"
//                         />

//                         {/* Overlay for text readability */}
//                         <div className="absolute inset-0 bg-black/40 sm:bg-black/30 z-10" />

//                         {/* Text content */}
//                         <div
//                             className={`absolute z-20 px-4 sm:px-6 top-1/2 transform -translate-y-1/2
//               text-white w-full sm:w-1/2 max-w-2xl ${slide.textPosition === "right"
//                                     ? "right-0 sm:text-left text-center sm:mr-1"
//                                     : "left-0 sm:text-left text-center sm:ml-10"
//                                 }`}
//                         >
//                             <h1 className="text-2xl sm:text-4xl md:text-5xl font-oswald-medium font-medium leading-snug whitespace-pre-line">
//                                 {parseTitle(slide.title)}
//                             </h1>
//                             <p className="text-base sm:text-xl mt-3 font-light whitespace-pre-line">
//                                 {slide.highlight}
//                             </p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Side Buttons */}
//             <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%] right-[22px] font-[500] pointer-events-none z-50">
//                 <div className="transform -rotate-90 origin-right pointer-events-auto">
//                     <a
//                         href="https://dmiher.edu.in/admissionform"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-[#122E5E] text-white text-sm px-6 py-3 inline-block"
//                     >
//                         Announcements
//                     </a>
//                 </div>
//                 <div className="transform -rotate-90 origin-right pointer-events-auto">
//                     <button
//                         type="button"
//                         onClick={() =>
//                             window.open(
//                                 "https://www.dmiher.edu.in/lp/national-admission",
//                                 "_blank"
//                             )
//                         }
//                         className="bg-[#122E5E] text-white text-sm px-6 py-3"
//                     >
//                         Admission Enquiry
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroCDOE;
=======
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
<<<<<<< HEAD

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
                <h1 className="text-3xl md:text-4xl font-oswald-medium font-medium uppercase leading-snug whitespace-pre-line drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)] text-left">
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
=======
import { useNavigate } from "react-router-dom";

import Banner1 from "../../assets/FEAT/Banner1.png";
import Banner2 from "../../assets/FEAT/Banner2.png";
import Banner3 from "../../assets/FEAT/Banner3.jpg";

// Parser for [[color]]text[[/color]]
const parseTitle = (title) => {
    const regex = /\[\[([^\]]+)\]\](.*?)\[\[\/\1\]\]/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(title)) !== null) {
        if (match.index > lastIndex) {
            parts.push(title.substring(lastIndex, match.index));
        }
        parts.push(
            <span
                key={match.index}
                className="font-semibold"
                style={{ color: match[1] }}
            >
                {match[2]}
            </span>
        );
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < title.length) {
        parts.push(title.substring(lastIndex));
    }

    return parts;
};

const HeroCDOE = () => {
    const navigate = useNavigate();

    const slides = [
        {
            img: Banner1,
            title:
                "Learn on Your Terms \n[[#E1CD67]] Excel on Your Timeline.[[/#E1CD67]]",
            highlight:
                "Designed for flexibility, affordability, and future-ready \ncareers—backed by a strong academic legacy of\n DMIHER (NAAC A++) ",
            textPosition: "right",
        },
        {
            img: Banner2,
            title:
                "Global Classrooms \n[[#E1CD67]] Career-Class Credentials.[[/#E1CD67]]",
            highlight:
                "In-demand certifications from Coursera, with 5000+\n courses by leading universities and industry giants.",
            textPosition: "left",
        },
        {
            img: Banner3,
            title: "The Power of Two\n Degrees [[#E1CD67]]The Freedom of Choice.[[/#E1CD67]]",
            highlight:
                "Earn an online degree while pursuing\n another in offline mode. ",
            textPosition: "right",
        },
    ];

    return (
        <div className="relative w-full h-[90vh] overflow-hidden">
            {/* Top Strip */}
            <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-6.8%-300px)] bg-[#E1CD67] text-gray-600 text-[11px] sm:text-sm px-3 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center z-20 gap-y-2">
                <span className="text-sm sm:ml-20">Admissions open for 2025-26</span>
                <div className="flex items-center gap-x-5 gap-y-1">
                    <div className="bg-[#F04E30] text-white px-4 py-1 sm:px-5 sm:py-2 w-fit">
                        <span className="font-semibold text-xl">APPLY NOW</span>
                    </div>
                    <span className="text-base sm:text-sm text-gray-800">
                        for Admission 2025-26
                    </span>
                </div>
            </div>

            {/* Helpline */}
            <div className="absolute right-4 xl:right-[6%] z-20 hidden lg:block">
                <a href="tel:+918888040999">
                    <button className="bg-[#F04E30] text-white h-[60px] px-4 py-3 uppercase font-semibold text-xl font-sans whitespace-nowrap">
                        Helpline: <span>+91 8888040999</span>
                    </button>
                </a>
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-full"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx} className="relative w-full h-full">
                        {/* Background image */}
                        <img
                            src={slide.img}
                            alt="Campus"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay for text readability */}
                        <div className="absolute inset-0 bg-black/40 sm:bg-black/30 z-10" />

                        {/* Text content */}
                        <div
                            className={`absolute z-20 px-4 sm:px-6 top-1/2 transform -translate-y-1/2
              text-white w-full sm:w-1/2 max-w-2xl ${slide.textPosition === "right"
                                    ? "right-0 sm:text-left text-center sm:mr-1"
                                    : "left-0 sm:text-left text-center sm:ml-10"
                                }`}
                        >
                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-oswald-medium font-medium leading-snug whitespace-pre-line">
                                {parseTitle(slide.title)}
                            </h1>
                            <p className="text-base sm:text-xl mt-3 font-light whitespace-pre-line">
                                {slide.highlight}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Side Buttons */}
            <div className="flex flex-col gap-32 fixed top-[23%] max-sm:top-[30%] right-[22px] font-[500] pointer-events-none z-50">
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
                        onClick={() =>
                            window.open(
                                "https://www.dmiher.edu.in/lp/national-admission",
                                "_blank"
                            )
                        }
                        className="bg-[#122E5E] text-white text-sm px-6 py-3"
                    >
                        Admission Enquiry
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCDOE;
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
