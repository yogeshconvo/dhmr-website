// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// // import WCF from "../../assets/images/wcf.png"; // adjust as needed

// const cards = [
//   {
//     bg: "bg-[#F7941D]/90 text-white",
//     content: (
//       <>
//         <p className="#">
//           <span className="text-[#122E5E] text-[23px] mb-4 font-bold">Skill based training through Internship</span>
//         </p>
//           <p className="mt-5 text-[17px] font-medium">
//             And Apprenticeship I Collaborations with top hospitals of the country
//           </p>
//       </>
//     ),
//   },

//   {
//     bg: "bg-[#122E5E] text-white",
//     content: (
//       <>
//         <p className="text-sm">
//           <span className="text-[28px] text-[#E1CD67] font-bold">
//             Real-time training at Hospitals,
//           </span>
//         </p>
//         <p>
//           diagnostic Centres Skill labs, advanced lab equipment, simulation tools, and clinical mentorship
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#E3F2FD]",
//     content: (
//       <>
//         <p className="text-sm pb-0 mt-2 text-[#F04E30] text-xl font-bold">
//           <span className="text-4xl">
//             International exposure through
//           </span>
//         </p>
//         <p className="text-sm text-[#122E5E]">
//           <span className="text-lg font-medium text-[17px]">
//             Pathway and semester abroad I 100 % placement assistance
//           </span>
//         </p>
//       </>
//     ),
//   },
//   {
//     bg: "bg-[#FFFFFF]",
//     content: (
//       <>
//         <p className="text-sm">
//           <span className="text-[#F7941D] text-3xl font-bold pb-12">
//             Super specialist and Specialist
//           </span>

//         </p>
//           <p className="mt-12 text-[#707070] font-semibold text-[20px]">
//             Doctors for teaching and training
//           </p>

//       </>
//     ),
//   },
//   {
//     bg: "bg-[#269BFF]",
//     content: (
//       <>
//         <p className="text-sm pb-12 mt-2">
//           <span className="text-[20px] font-medium">
//             Skill based training through Internship and Apprenticeship
//           </span>
//           {/* <br/><br/>
//           <span>

//           </span> */}
//         </p>
//       </>
//     ),
//   },
// ];

// const WhyChooseSAHS = () => {
//   return (
//     <div className="py-16 px-6 bg-[#FAFAF6] flex justify-center">
//       <div className="w-full max-w-6xl">
//         <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-wide text-[#707070] font-[600]  mb-10">
//           <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
//           WHY CHOOSE SAHS
//         </h2>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           // pagination={{ clickable: true }}
//           spaceBetween={10}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//           loop={true}
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <div
//                 className={`w-[250px] h-[320px] p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-between`}
//               >
//                 {card.content}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseSAHS;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const cards = [
  {
    bg: "bg-[#F7941D]/90 text-white",
    content: (
      <>
        <p className="font-bold font-oswald-medium text-[23px] mt-15">
          <span className="text-[#122E5E]">Skill based training</span> through
          Internship
        </p>
        <p className="text-base mt-1 font-light font-oswald-medium">
          Apprenticeship | Collaborations <br /> with top hospitals of the
          country
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
      <>
        <p className="text-[#E1CD67] font-bold text-2xl mt-15 font-oswald-medium">
          Real-time training at Hospitals
        </p>
        <p className="text-base mt-1 font-oswald-medium font-light">
          Diagnostic Centres, Skill labs, <br /> simulation tools, mentorship
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <>
        <p className="text-[#F04E30] font-oswald-medium tracking-wide font-bold text-[20px] leading-normal mt-15">
          <span className="text-4xl font-oswald-medium">
            International exposure
          </span>
        </p>
        <p className="text-base text-[#122E5E] font-oswald-medium mt-1">
          Pathway & semester abroad | <br /> 100% placement assistance
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FFFFFF]",
    content: (
      <>
        <p className="text-[#F7941D] font-bold text-3xl font-oswald-medium mt-15">
          Super specialist & Specialist
        </p>
        <p className="text-[17px] mt-1 font-oswald-medium text-[#707070]">
          Doctors for teaching & training
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#269BFF]",
    content: (
      <>
        <p className="text-[#122E5E] font-bold text-2xl pt-10 font-oswald-medium">
          Skill-based training
        </p>
        <p className="text-base font-oswald-medium mt-1">
          via Internship & Apprenticeship programs
        </p>
      </>
    ),
  },
];

const WhyChooseSAHS = () => {
  return (
    <div className="py-16 px-6 bg-[#FAFAF6] flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[600] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          WHY CHOOSE SAHS
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={10}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`w-[250px] h-[320px] p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight  justify-between`}
              >
                {card.content}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhyChooseSAHS;
