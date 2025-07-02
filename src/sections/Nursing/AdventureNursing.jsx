// // // import React from "react";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Autoplay, Pagination } from "swiper/modules";
// // // import "swiper/css";
// // // import "swiper/css/autoplay";
// // // import "swiper/css/pagination";
// // // import adventureNursing01 from "../../assets/Nursing/adventure/adventure01.png";

// // // const cards = [
// // //   {
// // //     bg: "bg-[#122e5e]/90 text-[#E1CD67]",
// // //     content: (
// // //       <>
// // //         <p className="font-bold font-oswald-medium text-[24px]">
// // //           Hands-on exposure through CCHCP integrating preventive
// // //         </p>
// // //         <p className="text-2xl mt-2 font-oswald-medium font-light">
// // //           primary, mental, and social services for holistic nursing skills.
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     bg: "bg-[#FFFFFF] text-[#F04E30]",
// // //     content: (
// // //       <>
// // //         <p className="font-oswald-medium font-light text-[23px] leading-normal">
// // //           <span>
// // //             Advanced Skill Labs, OSCE Training, high-fidelity mannequins,
// // //           </span>
// // //           <span className="font-oswald-medium text-base font-bold text-[23px]">
// // //             and specialized maternal health labs for clinical excellence.
// // //           </span>
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     bg: "bg-[#269BFF] text-white",
// // //     content: (
// // //       <>
// // //         <img
// // //           src={adventureNursing01}
// // //           alt="NABH Logo"
// // //           className="mx-auto block w-40"
// // //         />
// // //         <p className="font-oswald-medium">
// // //           <span className="font-bold text-[28px]">
// // //             Multiple merit-based scholarships{" "}
// // //           </span>
// // //           <span className="font-light text-[25px]">
// // //             and financial assistance programs for eligible students.
// // //           </span>
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     bg: "bg-[#E1CD67] text-[#122E5E]",
// // //     content: (
// // //       <>
// // //         <p className="font-oswald-medium">
// // //           <span className="font-bold text-2xl">
// // //             Collaborations with 7 international and 6 national adjunct faculty,{" "}
// // //           </span>
// // //           <span className="font-light text-3xl">
// // //             driving innovation and research in nursing.
// // //           </span>
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     bg: "bg-[#F7941D] text-white",
// // //     content: (
// // //       <>
// // //         <p className="font-oswald-medium">
// // //           <span className="font-bold text-2xl">
// // //             International clinical externships and placements{" "}
// // //           </span>
// // //           <span className="font-light text-[25px]">
// // //             with renowned institutions like NIMHANS, Tata Memorial, and UKE
// // //             Hospital, Germany.
// // //           </span>
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     bg: "bg-[#F04E30]/90 text-white",
// // //     content: (
// // //       <>
// // //         <p className="font-bold text-[80px] font-oswald-medium">100%</p>
// // //         <p className="font-light text-[25px] font-oswald-medium">
// // //           placement assistance and job readiness support for seamless global
// // //           healthcare opportunities.
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     bg: "bg-[#E3F2FD]",
// // //     content: (
// // //       <>
// // //         <p className="font-oswald-medium">
// // //           <span className="text-[#F04E30] font-bold text-4xl">
// // //             Ph.D. qualified faculties with 15+ years{" "}
// // //           </span>
// // //           <span className="font-light text-2xl">
// // //             of teaching and clinical expertise, ensuring academic and practical
// // //             excellence.
// // //           </span>
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     bg: "bg-[#E1CD67] text-[#122E5E]",
// // //     content: (
// // //       <>
// // //         <p className="font-oswald-medium">
// // //           <span className="font-extrabold text-2xl">
// // //             Empowering meritorious students with{" "}
// // //           </span>
// // //           <span className="font-light text-[20px]">
// // //             academic and financial support with scholarships like TNAI, Lila
// // //             Poonawalla Foundation, and Rajshri Shahu Maharaj Scholarships.
// // //           </span>
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     bg: "bg-[#F7941D] text-[#FFFFFF]",
// // //     content: (
// // //       <>
// // //         <p className="font-oswald-medium">
// // //           <span className="font-extrabold text-[25px]">
// // //             Robust research culture with 1500+{" "}
// // //           </span>
// // //           <span className="font-light text-[20px]">
// // //             publications in reputed indexed journals like Scopus, PubMed, Web of
// // //             Science, BMJ, Medknow, Elsevier, Wiley and more.
// // //           </span>
// // //         </p>
// // //       </>
// // //     ),
// // //   },
// // // ];

// // // function AdventureNursing() {
// // //   return (
// // //     <div className="px-5 py-5 md:py-12 md:px-10 bg-[#FAFAF6] flex justify-center">
// // //       <div className="w-full max-w-6xl">
// // //         {/* Heading */}
// // //         <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[500] mb-10">
// // //           <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
// // //           THE DMIHER <br />
// // //           NURSING ADVANTAGE
// // //         </h2>

// // //         {/* Swiper */}
// // //         <Swiper
// // //           modules={[Autoplay, Pagination]}
// // //           autoplay={{ delay: 3000, disableOnInteraction: false }}
// // //           pagination={{ clickable: true }}
// // //           spaceBetween={10}
// // //           loop={true}
// // //           slidesPerView={1}
// // //           centeredSlides={true}
// // //           breakpoints={{
// // //             640: {
// // //               slidesPerView: 2,
// // //               centeredSlides: false,
// // //             },
// // //             1024: {
// // //               slidesPerView: 4,
// // //               centeredSlides: false,
// // //             },
// // //           }}
// // //           className="pb-10" // For spacing below cards so dots don't overlap
// // //         >
// // //           {cards.map((card, index) => (
// // //             <SwiperSlide key={index} className="!flex !justify-center">
// // //               <div
// // //                 className={`w-[250px] h-[320px] p-4 items-center rounded-xl shadow-md ${card.bg} font-oswald-light flex flex-col justify-center`}
// // //               >
// // //                 {card.content}
// // //               </div>
// // //             </SwiperSlide>
// // //           ))}
// // //         </Swiper>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AdventureNursing;

// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/autoplay";
// // import "swiper/css/pagination";
// // import adventureNursing01 from "../../assets/Nursing/adventure/adventure01.png";

// // const cards = [
// //   {
// //     bg: "bg-[#122e5e]/90 text-[#E1CD67]",
// //     content: (
// //       <>
// //         <p className="font-bold font-oswald-medium text-[24px]">
// //           Hands-on exposure through CCHCP integrating preventive
// //         </p>
// //         <p className="text-2xl mt-2 font-oswald-medium font-light">
// //           primary, mental, and social services for holistic nursing skills.
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     bg: "bg-[#FFFFFF] text-[#F04E30]",
// //     content: (
// //       <>
// //         <p className="font-oswald-medium font-light text-[23px] leading-normal">
// //           <span>
// //             Advanced Skill Labs, OSCE Training, high-fidelity mannequins,
// //           </span>
// //           <span className="font-oswald-medium text-base font-bold text-[23px]">
// //             and specialized maternal health labs for clinical excellence.
// //           </span>
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     bg: "bg-[#269BFF] text-white",
// //     content: (
// //       <>
// //         <img
// //           src={adventureNursing01}
// //           alt="NABH Logo"
// //           className="mx-auto block w-40"
// //         />
// //         <p className="font-oswald-medium">
// //           <span className="font-bold text-[28px]">
// //             Multiple merit-based scholarships{" "}
// //           </span>
// //           <span className="font-light text-[25px]">
// //             and financial assistance programs for eligible students.
// //           </span>
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     bg: "bg-[#E1CD67] text-[#122E5E]",
// //     content: (
// //       <>
// //         <p className="font-oswald-medium">
// //           <span className="font-bold text-2xl">
// //             Collaborations with 7 international and 6 national adjunct faculty,{" "}
// //           </span>
// //           <span className="font-light text-3xl">
// //             driving innovation and research in nursing.
// //           </span>
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     bg: "bg-[#F7941D] text-white",
// //     content: (
// //       <>
// //         <p className="font-oswald-medium">
// //           <span className="font-bold text-2xl">
// //             International clinical externships and placements{" "}
// //           </span>
// //           <span className="font-light text-[25px]">
// //             with renowned institutions like NIMHANS, Tata Memorial, and UKE
// //             Hospital, Germany.
// //           </span>
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     bg: "bg-[#F04E30]/90 text-white",
// //     content: (
// //       <>
// //         <p className="font-bold text-[80px] font-oswald-medium">100%</p>
// //         <p className="font-light text-[25px] font-oswald-medium">
// //           placement assistance and job readiness support for seamless global
// //           healthcare opportunities.
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     bg: "bg-[#E3F2FD]",
// //     content: (
// //       <>
// //         <p className="font-oswald-medium">
// //           <span className="text-[#F04E30] font-bold text-4xl">
// //             Ph.D. qualified faculties with 15+ years{" "}
// //           </span>
// //           <span className="font-light text-2xl">
// //             of teaching and clinical expertise, ensuring academic and practical
// //             excellence.
// //           </span>
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     bg: "bg-[#E1CD67] text-[#122E5E]",
// //     content: (
// //       <>
// //         <p className="font-oswald-medium">
// //           <span className="font-extrabold text-2xl">
// //             Empowering meritorious students with{" "}
// //           </span>
// //           <span className="font-light text-[20px]">
// //             academic and financial support with scholarships like TNAI, Lila
// //             Poonawalla Foundation, and Rajshri Shahu Maharaj Scholarships.
// //           </span>
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     bg: "bg-[#F7941D] text-[#FFFFFF]",
// //     content: (
// //       <>
// //         <p className="font-oswald-medium">
// //           <span className="font-extrabold text-[25px]">
// //             Robust research culture with 1500+{" "}
// //           </span>
// //           <span className="font-light text-[20px]">
// //             publications in reputed indexed journals like Scopus, PubMed, Web of
// //             Science, BMJ, Medknow, Elsevier, Wiley and more.
// //           </span>
// //         </p>
// //       </>
// //     ),
// //   },
// // ];

// // function AdventureNursing() {
// //   return (
// //     <div className="px-5 py-5 md:py-12 md:px-10 bg-[#FAFAF6] flex justify-center">
// //       <div className="w-full max-w-6xl">
// //         {/* Heading */}
// //         <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[500] mb-10">
// //           <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
// //           THE DMIHER <br />
// //           NURSING ADVANTAGE
// //         </h2>

// //         {/* Swiper */}
// //         <Swiper
// //           modules={[Autoplay, Pagination]}
// //           autoplay={{ delay: 3000, disableOnInteraction: false }}
// //           pagination={{ clickable: true }}
// //           spaceBetween={10}
// //           loop={true}
// //           slidesPerView={1}
// //           slidesPerGroup={1}
// //           centeredSlides={true}
// //           breakpoints={{
// //             640: {
// //               slidesPerView: 2,
// //               slidesPerGroup: 2,
// //               centeredSlides: false,
// //             },
// //             1024: {
// //               slidesPerView: 4,
// //               slidesPerGroup: 4,
// //               centeredSlides: false,
// //             },
// //           }}
// //           className="pb-12"
// //         >
// //           {cards.map((card, index) => (
// //             <SwiperSlide key={index} className="!flex !justify-center">
// //               <div
// //                 className={`w-[250px] h-[320px] p-4 items-center rounded-xl shadow-md ${card.bg} font-oswald-light flex flex-col justify-center`}
// //               >
// //                 {card.content}
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdventureNursing;

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import adventureNursing01 from "../../assets/Nursing/adventure/adventure01.png";

// const cards = [
//   {
//     bg: "bg-[#122e5e]/90 text-[#E1CD67]",
//     content: (
//       <>
//         <p className="font-bold font-oswald-medium text-[24px]">
//           Hands-on exposure through CCHCP integrating preventive
//         </p>
//         <p className="text-2xl mt-2 font-oswald-medium font-light">
//           primary, mental, and social services for holistic nursing skills.
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#FFFFFF] text-[#F04E30]",
//     content: (
//       <>
//         <p className="font-oswald-medium font-light text-[23px] leading-normal">
//           <span>
//             Advanced Skill Labs, OSCE Training, high-fidelity mannequins,
//           </span>
//           <span className="font-oswald-medium text-base font-bold text-[23px]">
//             and specialized maternal health labs for clinical excellence.
//           </span>
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#269BFF] text-white",
//     content: (
//       <>
//         <img
//           src={adventureNursing01}
//           alt="NABH Logo"
//           className="mx-auto block w-40"
//         />
//         <p className="font-oswald-medium">
//           <span className="font-bold text-[28px]">
//             Multiple merit-based scholarships{" "}
//           </span>
//           <span className="font-light text-[25px]">
//             and financial assistance programs for eligible students.
//           </span>
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#E1CD67] text-[#122E5E]",
//     content: (
//       <>
//         <p className="font-oswald-medium">
//           <span className="font-bold text-2xl">
//             Collaborations with 7 international and 6 national adjunct faculty,{" "}
//           </span>
//           <span className="font-light text-3xl">
//             driving innovation and research in nursing.
//           </span>
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#F7941D] text-white",
//     content: (
//       <>
//         <p className="font-oswald-medium">
//           <span className="font-bold text-2xl">
//             International clinical externships and placements{" "}
//           </span>
//           <span className="font-light text-[25px]">
//             with renowned institutions like NIMHANS, Tata Memorial, and UKE
//             Hospital, Germany.
//           </span>
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#F04E30]/90 text-white",
//     content: (
//       <>
//         <p className="font-bold text-[80px] font-oswald-medium">100%</p>
//         <p className="font-light text-[25px] font-oswald-medium">
//           placement assistance and job readiness support for seamless global
//           healthcare opportunities.
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#E3F2FD]",
//     content: (
//       <>
//         <p className="font-oswald-medium">
//           <span className="text-[#F04E30] font-bold text-4xl">
//             Ph.D. qualified faculties with 15+ years{" "}
//           </span>
//           <span className="font-light text-2xl">
//             of teaching and clinical expertise, ensuring academic and practical
//             excellence.
//           </span>
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#E1CD67] text-[#122E5E]",
//     content: (
//       <>
//         <p className="font-oswald-medium">
//           <span className="font-extrabold text-2xl">
//             Empowering meritorious students with{" "}
//           </span>
//           <span className="font-light text-[20px]">
//             academic and financial support with scholarships like TNAI, Lila
//             Poonawalla Foundation, and Rajshri Shahu Maharaj Scholarships.
//           </span>
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#F7941D] text-[#FFFFFF]",
//     content: (
//       <>
//         <p className="font-oswald-medium">
//           <span className="font-extrabold text-[25px]">
//             Robust research culture with 1500+{" "}
//           </span>
//           <span className="font-light text-[20px]">
//             publications in reputed indexed journals like Scopus, PubMed, Web of
//             Science, BMJ, Medknow, Elsevier, Wiley and more.
//           </span>
//         </p>
//       </>
//     ),
//   },
// ];

// function AdventureNursing() {
//   const swiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleDotClick = (index) => {
//     if (swiperRef.current) {
//       swiperRef.current.slideToLoop(index * 4);
//     }
//   };

//   return (
//     <div className="px-5 py-5 md:py-12 md:px-10 bg-[#FAFAF6] flex justify-center">
//       <div className="w-full max-w-6xl">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[500] mb-10">
//           <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
//           THE DMIHER <br />
//           NURSING ADVANTAGE
//         </h2>

//         {/* Swiper */}
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           slidesPerView={1}
//           slidesPerGroup={1}
//           centeredSlides={true}
//           loopFillGroupWithBlank={true}
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           onSlideChange={(swiper) => {
//             const group = Math.floor(swiper.realIndex / 4);
//             setActiveIndex(group);
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               slidesPerGroup: 2,
//               centeredSlides: false,
//             },
//             1024: {
//               slidesPerView: 4,
//               slidesPerGroup: 4,
//               centeredSlides: false,
//             },
//           }}
//           className="pb-16"
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index} className="!flex !justify-center">
//               <div
//                 className={`w-[250px] h-[320px] p-4 items-center rounded-xl shadow-md ${card.bg} font-oswald-light flex flex-col justify-center`}
//               >
//                 {card.content}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Dots */}
//         <div className="flex justify-center gap-3 mt-6">
//           {[...Array(Math.ceil(cards.length / 4))].map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleDotClick(idx)}
//               className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                 activeIndex === idx ? "bg-gray-500 scale-110" : "bg-gray-300"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdventureNursing;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import adventureNursing01 from "../../assets/Nursing/adventure/adventure01.png";
const cards = [
  {
    bg: "bg-[#122e5e]/90 text-[#E1CD67]",
    content: (
      <>
        <p className="font-bold font-oswald-medium text-[24px]">
          Hands-on exposure through CCHCP integrating preventive
        </p>
        <p className="text-2xl mt-2 font-oswald-medium font-light">
          primary, mental, and social services for holistic nursing skills.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FFFFFF] text-[#F04E30]",
    content: (
      <>
        <p className="font-oswald-medium font-light text-[23px] leading-normal">
          <span>
            Advanced Skill Labs, OSCE Training, high-fidelity mannequins,
          </span>
          <span className="font-oswald-medium text-base font-bold text-[23px]">
            and specialized maternal health labs for clinical excellence.
          </span>
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#269BFF] text-white",
    content: (
      <>
        <img
          src={adventureNursing01}
          alt="NABH Logo"
          className="mx-auto block w-40"
        />
        <p className="font-oswald-medium">
          <span className="font-bold text-[28px]">
            Multiple merit-based scholarships{" "}
          </span>
          <span className="font-light text-[25px]">
            and financial assistance programs for eligible students.
          </span>
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E1CD67] text-[#122E5E]",
    content: (
      <>
        <p className="font-oswald-medium">
          <span className="font-bold text-2xl">
            Collaborations with 7 international and 6 national adjunct faculty,{" "}
          </span>
          <span className="font-light text-3xl">
            driving innovation and research in nursing.
          </span>
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#F7941D] text-white",
    content: (
      <>
        <p className="font-oswald-medium">
          <span className="font-bold text-2xl">
            International clinical externships and placements{" "}
          </span>
          <span className="font-light text-[25px]">
            with renowned institutions like NIMHANS, Tata Memorial, and UKE
            Hospital, Germany.
          </span>
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#F04E30]/90 text-white",
    content: (
      <>
        <p className="font-bold text-[80px] font-oswald-medium">100%</p>
        <p className="font-light text-[25px] font-oswald-medium">
          placement assistance and job readiness support for seamless global
          healthcare opportunities.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <>
        <p className="font-oswald-medium">
          <span className="text-[#F04E30] font-bold text-4xl">
            Ph.D. qualified faculties with 15+ years{" "}
          </span>
          <span className="font-light text-2xl">
            of teaching and clinical expertise, ensuring academic and practical
            excellence.
          </span>
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E1CD67] text-[#122E5E]",
    content: (
      <>
        <p className="font-oswald-medium">
          <span className="font-extrabold text-2xl">
            Empowering meritorious students with{" "}
          </span>
          <span className="font-light text-[20px]">
            academic and financial support with scholarships like TNAI, Lila
            Poonawalla Foundation, and Rajshri Shahu Maharaj Scholarships.
          </span>
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#F7941D] text-[#FFFFFF]",
    content: (
      <>
        <p className="font-oswald-medium">
          <span className="font-extrabold text-[25px]">
            Robust research culture with 1500+{" "}
          </span>
          <span className="font-light text-[20px]">
            publications in reputed indexed journals like Scopus, PubMed, Web of
            Science, BMJ, Medknow, Elsevier, Wiley and more.
          </span>
        </p>
      </>
    ),
  },
];

function AdventureNursing() {
  return (
    <div className="px-5 py-5 md:py-12 md:px-10 bg-[#FAFAF6] flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[500] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          THE DMIHER <br />
          NURSING ADVANTAGE
        </h2>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 4, centeredSlides: false },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="!flex !justify-center">
                <div
                  className={`w-[250px] h-[320px] p-4 items-center rounded-xl shadow-md ${card.bg} font-oswald-light flex flex-col justify-center`}
                >
                  {card.content}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Dots */}
          <div className="custom-pagination mt-6 flex justify-center" />
        </div>
      </div>
    </div>
  );
}

export default AdventureNursing;
