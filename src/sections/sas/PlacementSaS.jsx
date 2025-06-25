// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // Logo Imports
// import tcs from "../../assets/sas/Placements/tcs.svg";
// import infosys from "../../assets/sas/placements/info.png";
// import axisBank from "../../assets/sas/placements/axis.svg";
// import dmart from "../../assets/sas/placements/dm.png";
// import ceinsys from "../../assets/sas/placements/cs.avif";
// import nci from "../../assets/sas/placements/nci.svg";
// import max from "../../assets/sas/placements/max.svg";

// const logos = [
//   { src: max, alt: "Max Healthcare" },
//   // { src: tcs, alt: "TCS" },
//   // { src: infosys, alt: "Infosys" },
//   { src: axisBank, alt: "Axis Bank" },
//   { src: dmart, alt: "DMart" },
//   { src: ceinsys, alt: "Ceinsys Tech AI" },
//   { src: nci, alt: "National Cancer Institute" },
// ];

// function PlacementSaS() {
//   return (
//     <section className="bg-white px-6 py-16 container my-[60px]">
//       <div className="max-w-7xl mx-auto font-[Arial]">
// <h2 className="text-3xl font-oswald-medium sm:text-4xl font-[500] text-[#707070] mb-4 uppercase relative">
//   <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
//   Placement Opportunities
// </h2>

// <p className="text-gray-600 text-xm max-w-5xl tracking-normal leading-relaxed mb-8">
//   SAS offers <b>100% placement assistance</b> with a strong network of
//   industry partners across healthcare, IT, retail, and banking sectors.
//   Students have been placed with leading organizations such as Max
//   Healthcare, TCS, Infosys, and Axis Bank, among others. With
//   opportunities ranging from paid internships to full-time roles, the
//   institute ensures hands-on industry exposure and career-ready
//   training.
//   <br />
//   <span className="inline-block mt-2 text-[#269BFF] font-bold">
//     Highest package offered: ₹12 LPA
//   </span>
// </p>

//         {/* Slider for Logos */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           loop={true}
//           slidesPerView={6}
//           spaceBetween={20}
//           slidesPerGroup={2}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             320: { slidesPerView: 2, slidesPerGroup: 2 },
//             640: { slidesPerView: 3, slidesPerGroup: 2 },
//             1024: { slidesPerView: 5, slidesPerGroup: 2 },
//             1280: { slidesPerView: 6, slidesPerGroup: 2 },
//           }}
//           className="mb-10"
//         >
//           {logos.map((logo, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="w-full h-full flex items-center py-12 justify-center">
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="max-h-30 max-w-full object-cover"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Stats Boxes */}
//         <div className="flex flex-wrap gap-8 justify-center mt-8">
//           <div className="bg-[#E3F2FD] rounded-xl px-8 py-6 text-center shadow">
//             <div className="text-3xl font-bold text-[#269BFF]">₹12 LPA</div>
//             <div className="text-xs text-[#58595B] mt-1">Highest Package</div>
//           </div>
//           <div className="bg-[#FFF7E6] rounded-xl px-8 py-6 text-center shadow">
//             <div className="text-3xl font-bold text-[#F7941D]">100%</div>
//             <div className="text-xs text-[#58595B] mt-1">
//               Placement Assistance
//             </div>
//           </div>
//           <div className="bg-[#F0F6FF] rounded-xl px-8 py-6 text-center shadow">
//             <div className="text-3xl font-bold text-[#122E5E]">Paid</div>
//             <div className="text-xs text-[#58595B] mt-1">
//               Internships & Training
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PlacementSaS;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import your logo images
import hexaware from "../../assets/sas/Logos/1.png";
import paytm from "../../assets/sas/Logos/2.jpg";
import justdial from "../../assets/sas/Logos/3.webp";
import hcl from "../../assets/sas/Logos/4.png";
import wipro from "../../assets/sas/Logos/5.png";
import bayone from "../../assets/sas/Logos/6.png";
import ge from "../../assets/sas/Logos/7.png";
import cap from "../../assets/sas/Logos/8.jpg";
// import cap from "../../assets/FEAT/HEP/8.png";
// import tcs from "../../assets/sas/Placements/tcs.svg";
// import infosys from "../../assets/sas/placements/info.png";
// import axisBank from "../../assets/sas/placements/axis.svg";
// import dmart from "../../assets/sas/placements/dm.png";
// import ceinsys from "../../assets/sas/placements/cs.avif";
// import nci from "../../assets/sas/placements/nci.svg";
// import max from "../../assets/sas/placements/max.svg";

export default function HigherEduPlacement() {
  const logos = [hexaware, paytm, justdial, cap, hcl, wipro, bayone, ge];

  return (
    <div className="bg-[#FAF8F0] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-oswald-medium sm:text-4xl font-[500] text-[#707070] mb-4 uppercase relative">
          <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
          Placement Opportunities
        </h2>

        <p className="text-gray-600 text-xm max-w-5xl tracking-normal leading-relaxed mb-8">
          SAS offers <b>100% placement assistance</b> with a strong network of
          industry partners across healthcare, IT, retail, and banking sectors.
          Students have been placed with leading organizations such as Max
          Healthcare, TCS, Infosys, and Axis Bank, among others. With
          opportunities ranging from paid internships to full-time roles, the
          institute ensures hands-on industry exposure and career-ready
          training.
          <br />
          <span className="inline-block mt-2 text-[#269BFF] font-bold">
            Highest package offered: ₹12 LPA
          </span>
        </p>

        {/* Swiper Slider */}
        {/* <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={6}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex items-center py-10 justify-center">
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="max-h-20  max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={6}
          spaceBetween={40}
          loop={true}
          loopedSlides={logos.length}
          watchSlidesProgress={true}
          slidesPerGroup={Math.ceil(logos.length /4)}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex items-center py-10 justify-center">
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          slidesPerView={6}
          spaceBetween={40} // Increased from 20 to 40
          slidesPerGroup={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, slidesPerGroup: 2, spaceBetween: 30 },
            1024: { slidesPerView: 5, slidesPerGroup: 2, spaceBetween: 35 },
            1280: { slidesPerView: 6, slidesPerGroup: 2, spaceBetween: 40 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex items-center py-12 justify-center">
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-wrap gap-8 justify-center mt-8">
          <div className="bg-[#E3F2FD] rounded-xl px-8 py-6 text-center shadow">
            <div className="text-3xl font-bold text-[#269BFF]">₹12 LPA</div>
            <div className="text-xs text-[#58595B] mt-1">Highest Package</div>
          </div>
          <div className="bg-[#FFF7E6] rounded-xl px-8 py-6 text-center shadow">
            <div className="text-3xl font-bold text-[#F7941D]">100%</div>
            <div className="text-xs text-[#58595B] mt-1">
              Placement Assistance
            </div>
          </div>
          <div className="bg-[#F0F6FF] rounded-xl px-8 py-6 text-center shadow">
            <div className="text-3xl font-bold text-[#122E5E]">Paid</div>
            <div className="text-xs text-[#58595B] mt-1">
              Internships & Training
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
