// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// import Img1 from "../../assets/SPDC/WCS/1.png";
// import Img2 from "../../assets/SPDC/WCS/2.png";
// import Img3 from "../../assets/SPDC/WCS/3.png";
// import Img4 from "../../assets/SPDC/WCS/4.png";
// import Img5 from "../../assets/SPDC/WCS/5.png";
// import Img6 from "../../assets/SPDC/WCS/6.png";
// import Img7 from "../../assets/SPDC/WCS/7.png";

// const cards = [
//   { content: <img src={Img1} alt="Img1" className="pb-5 mx-auto block" /> },
//   { content: <img src={Img2} alt="Img2" className="pb-5 mx-auto block" /> },
//   { content: <img src={Img3} alt="Img3" className="pb-5 mx-auto block" /> },
//   { content: <img src={Img4} alt="Img4" className="pb-5 mx-auto block" /> },
//   { content: <img src={Img5} alt="Img5" className="pb-5 mx-auto block" /> },
//   { content: <img src={Img6} alt="Img6" className="pb-5 mx-auto block" /> },
//   { content: <img src={Img7} alt="Img7" className="pb-5 mx-auto block" /> },
// ];

// const WhyChooseSpdch = () => {
//   return (
//     <div className="py-16 bg-[#FAFAF6] flex justify-center md:px-40">
//       <div className="w-full max-w-7xl">
//         <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
//           <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//           WHY CHOOSE SPDCH
//         </h2>

//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           spaceBetween={10}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//           loop={true}
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center">
//                 <div className="w-[260px] sm:w-[280px] md:w-[300px] h-[350px] rounded-xl font-oswaldLight flex flex-col justify-between">
//                   {card.content}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseSpdch;
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import Img1 from "../../assets/SPDC/WCS/1.png";
import Img2 from "../../assets/SPDC/WCS/2.png";
import Img3 from "../../assets/SPDC/WCS/3.png";
import Img4 from "../../assets/SPDC/WCS/4.png";
import Img5 from "../../assets/SPDC/WCS/5.png";
import Img6 from "../../assets/SPDC/WCS/6.png";
import Img7 from "../../assets/SPDC/WCS/7.png";

const cards = [
  { content: <img src={Img1} alt="Img1" className="pb-5 mx-auto block" /> },
  { content: <img src={Img2} alt="Img2" className="pb-5 mx-auto block" /> },
  { content: <img src={Img3} alt="Img3" className="pb-5 mx-auto block" /> },
  { content: <img src={Img4} alt="Img4" className="pb-5 mx-auto block" /> },
  { content: <img src={Img5} alt="Img5" className="pb-5 mx-auto block" /> },
  { content: <img src={Img6} alt="Img6" className="pb-5 mx-auto block" /> },
  { content: <img src={Img7} alt="Img7" className="pb-5 mx-auto block" /> },
];

const WhyChooseSpdch = () => {
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // ensures custom pagination container exists before swiper init
  }, []);

  return (
    <div className="py-16 bg-[#FAFAF6] flex justify-center md:px-40">
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          WHY CHOOSE SPDCH
        </h2>

        {swiperReady && (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
            }}
            spaceBetween={5}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <div className="w-[260px] sm:w-[280px] md:w-[300px] h-[350px] rounded-xl font-oswaldLight flex flex-col justify-between">
                    {card.content}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Your custom pagination container */}
        <div className="custom-swiper-pagination flex justify-center mt-6 gap-2" />
      </div>
    </div>
  );
};

export default WhyChooseSpdch;
