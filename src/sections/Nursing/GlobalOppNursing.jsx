// import React from "react";
// import hamburg from "../../assets/Nursing/opportunities/hamburg.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Img1 from "../../assets/Nursing/opportunities/slider1.png";
// import Img2 from "../../assets/Nursing/opportunities/slider2.png";
// import Img3 from "../../assets/Nursing/opportunities/slider3.jpg";

// const slides = [
//   {
//     img: Img1,
//     alt: "SRMMCON Campus",
//   },
//   {
//     img: Img2,
//     alt: "SRMMCON Labs",
//   },
//   {
//     img: Img3,
//     alt: "SRMMCON Students",
//   },
// ];
// export default function GlobalOppNursing() {
//   return (
//     <>
//       <div className="bg-[#fcfaf1] mt-[125px] py-[100px]">
//         <div className="container flex flex-wrap gap-12">
//           <div className="flex-1 min-w-[315px]">
//             <h2 className="text-3xl font-[500] text-[#707070] mb-2 tracking-wider font-oswald-medium">
//               <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//               GLOBAL OPPORTUNITIES
//             </h2>
//             <p className="text-[#58595B]">
//               Through partnerships with institutions like UKE Hospital, Hamburg,
//               students gain global exposure and placements. Over 25 SRMMCON
//               students have already secured conditional appointments in Germany,
//               marking the beginning of their international healthcare journeys.
//             </p>

//             <div>
//               <img src={hamburg} alt="" />
//             </div>
//           </div>

//           <div className="flex-2 min-w-[315px] h-full rounded-md overflow-hidden shadow-lg flex-shrink-0">
//             <Swiper
//               modules={[Autoplay, Pagination, Navigation]}
//               navigation={true}
//               autoplay={{ delay: 3500, disableOnInteraction: false }}
//               pagination={{ clickable: true }}
//               spaceBetween={0}
//               loop={true}
//               slidesPerView={1}
//               className="w-full h-full"
//             >
//               {slides.map((slide, idx) => (
//                 <SwiperSlide key={idx} className="!h-auto">
//                   <img
//                     src={slide.img}
//                     alt={slide.alt}
//                     className="object-fill w-full h-full"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>

//       <button className="btn primary-btn m-auto block mt-6">
//         <a href="#">Higher education and Placement</a>
//       </button>
//     </>
//   );
// }

import React from "react";
import hamburg from "../../assets/Nursing/opportunities/hamburg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Img1 from "../../assets/Nursing/opportunities/slider1.png";
import Img2 from "../../assets/Nursing/opportunities/slider2.png";
import Img3 from "../../assets/Nursing/opportunities/slider3.jpg";

const slides = [
  { img: Img1, alt: "SRMMCON Campus" },
  { img: Img2, alt: "SRMMCON Labs" },
  { img: Img3, alt: "SRMMCON Students" },
];
export default function GlobalOppNursing({ showPlacementBtn }) {
  return (
    <>
      <div className="bg-[#fcfaf1]  py-20">
        <div className="container flex flex-wrap gap-12">
          <div className="flex-1 min-w-[315px]">
            <h2 className="text-3xl font-[500] text-[#707070] mb-2 tracking-wider font-oswald-medium">
              <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
              GLOBAL OPPORTUNITIES
            </h2>
            <p className="text-[#58595B]">
              Through partnerships with institutions like UKE Hospital, Hamburg,
              students gain global exposure and placements. Over 25 SRMMCON
              students have already secured conditional appointments in Germany,
              marking the beginning of their international healthcare journeys.
            </p>

            <div>
              <img src={hamburg} alt="Hamburg" />
            </div>
          </div>

          <div className="flex-2 min-w-[315px] h-full rounded-md overflow-hidden shadow-lg flex-shrink-0">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              navigation={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              spaceBetween={0}
              loop={true}
              slidesPerView={1}
              className="w-full h-full"
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx} className="!h-auto">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="object-fill w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {showPlacementBtn ? (
        <button className="btn primary-btn my-[100px] m-auto block">
          <a href="#">Higher education and Placement</a>
        </button>
      ) : null}
    </>
  );
}
