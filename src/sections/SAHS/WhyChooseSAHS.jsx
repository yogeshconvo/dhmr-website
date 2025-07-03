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
        <p className="font-bold font-oswald-medium text-[22px] mt-10">
          Maharashtra Paramedical Council approved programs
        </p>
        <p className="text-base mt-2 font-oswald-medium">
          NEP aligned curriculum with Lateral Entry/Exit Options
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
      <>
        <p className="font-bold font-oswald-medium text-[22px] mt-10">
          Skill based training through Internship & Apprenticeship
        </p>
        <p className="text-base mt-2 font-oswald-medium">
          Collaborations with top hospitals of the country <br />
          Super specialist and Specialist Doctors for teaching and training
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <>
        <p className="font-bold font-oswald-medium text-[22px] text-[#F04E30] mt-10">
          State of the art Simulation Lab for skill training
        </p>
        <p className="text-base text-[#122E5E] font-oswald-medium mt-2">
          Multispecialty and super specialty hospital for training <br />
          SAHS Wardha has 1500+ bedded multispecialty and super specialty
          hospital for training
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FFFFFF]",
    content: (
      <>
        <p className="font-bold font-oswald-medium text-[22px] text-[#269BFF] mt-10">
          Real-time training at Hospitals, Diagnostic Centres, Skill labs
        </p>
        <p className="text-base text-[#707070] font-oswald-medium mt-2">
          Advanced lab equipment, simulation tools, and clinical mentorship
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#269BFF] text-white",
    content: (
      <>
        <p className="font-bold font-oswald-medium text-[22px] mt-10">
          International exposure
        </p>
        <p className="text-base font-oswald-medium mt-2">
          Pathway and semester abroad <br />
          100% placement assistance
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
                className={`w-[250px] h-[320px] p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-start gap-4`}
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
