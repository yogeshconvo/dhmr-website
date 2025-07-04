// import React, { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";

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
//   const [swiperReady, setSwiperReady] = useState(false);

//   useEffect(() => {
//     setSwiperReady(true); // ensures custom pagination container exists before swiper init
//   }, []);

//   return (
//     <div className="py-16 bg-[#FAFAF6] flex justify-center md:px-40">
//       <div className="w-full max-w-7xl">
//         <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
//           <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//           WHY CHOOSE SPDCH
//         </h2>

//         {swiperReady && (
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             pagination={{
//               el: ".custom-swiper-pagination",
//               clickable: true,
//             }}
//             spaceBetween={5}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 4 },
//             }}
//             loop={true}
//           >
//             {cards.map((card, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex justify-center">
//                   <div className="w-[260px] sm:w-[280px] md:w-[300px] h-[350px] rounded-xl font-oswaldLight flex flex-col justify-between">
//                     {card.content}
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}

//         {/* Your custom pagination container */}
//         <div className="custom-swiper-pagination flex justify-center mt-6 gap-2" />
//       </div>
//     </div>
//   );
// };

// export default WhyChooseSpdch;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Img1 from "../../assets/Group.png";
import Img2 from "../../assets/Clinik/National/NL2.png";
import Img3 from "../../assets/SPDC/card1.png";
// import Img2 from "../../assets/SPDC/WCS/2.png";
// import Img3 from "../../assets/SPDC/WCS/3.png";
// import Img4 from "../../assets/SPDC/WCS/4.png";
// import Img5 from "../../assets/SPDC/WCS/5.png";
// import Img6 from "../../assets/SPDC/WCS/6.png";
// import Img7 from "../../assets/SPDC/WCS/7.png";

const cards = [
  {
    bg: "bg-[#F5F0D6]",
    content: (
      // <img src={Img1} alt="NABH Logo" className=" pb-5 mx-auto block" />
      <>
        <p className="text-4xl pt-4 tracking-wider text-gray-700 font-oswald-medium">
          {/* <img src={Img1} alt="NIRF Logo" className="w-25 pb-5 mx-auto block" /> */}
          <span className="text-[#D3411E] font-bold ">
            {" "}
            75% DOCTORAL FACULTY
          </span>{" "}
          <br />
          <span className="mb-5"> 850+ YEARS OF TEACHING EXPERIENCE</span>
        </p>
      </>
    ),
  },
  {
    bg: "bg-white",
    content: (
      // <img src={Img2} alt="NABH Logo" className=" pb-5 mx-auto block" />
      <>
        <p className="font-oswald-medium mt-15">
          {/* <img src={Img2} alt="NABH Logo" className="w-25 pb-5 mx-auto block" /> */}
          <span className="text-[#007BFF] font-medium text-4xl">
            8 PG PROGRAMS
            {/* First NABH-accredited */}
          </span>
          <br />
          <span className="text-4xl font-light">
            2880+ GRADUATES
            {/* Dental hospital in <br /> Maharashtra */}
          </span>
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#092C5C]",
    content: (
      // <img src={Img3} alt="NABH Logo" className=" pb-5 mx-auto block" />
      <div className="flex items-center h-70 font-oswald-medium">
        {" "}
        {/* Adjust height as needed */}
        <div>
          <p className="text-[#F7D13D] font-bold text-4xl">
            Advanced Simulation & Digital Skill Lab:
          </p>
          <p className="text-white text-xl font-light mt-2">
            high-fidelity mannequins, CAD-CAM, 3D theater, skill labs,
            self-learning museums
          </p>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-[#FFA726]",
    content: (
      // <img src={Img4} alt="NABH Logo" className=" pb-5 mx-auto block" />
      <div className="flex items-center h-70 font-oswald-medium">
        <div>
          <p className="text-[#132e5c]">
            <span className="text-5xl font-bold"> ₹10+ crore</span>
            <br />
            <span className="text-2xl"> Research funding</span>
          </p>
          <p className="text-lg text-white font-light mt-2">
            from ICMR, SERB, DST, Erasmus EU, Smile Train, NewGen IEDC, NSTEDB –
            100+ International Adjunct Faculty
          </p>

          <p className="mt-5">
            <span className="text-lg font-semibold text-[#132e5c] ">
              Research collaborations:
            </span>
            <br />
            <span className="text-sm text-white">IISC Bengaluru, IITs</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-[#DCEEFF]",
    content: (
      // <img src={Img5} alt="NABH Logo" className=" pb-5 mx-auto block" />
      <>
        <p className="text-[#F25022] font-bold text-4xl font-oswald-medium">
          <img src={Img3} alt="Logo" className="w-25 mb-2 mx-auto block" />
          Academic partnerships
        </p>
        <p className="text-2xl font-oswald-medium font-light text-[#132e5c]">
          Johns Hopkins University
          <br />
          University of Adelaide, and others
        </p>
      </>
    ),
  },
  // {
  //   bg: "bg-[#FBE7C1]",
  //   content: (

  //     <>
  //       <p className="text-[#F25022] font-bold text-3xl font-oswald-medium">
  //         <img src={Img3} alt="Logo" className="w-25 mb-2 mx-auto block" />
  //         Multiple national and international student awards:
  //       </p>
  //       <p className="text-xl mt-2 font-extralight font-oswald-medium text-gray-800">
  //         ICMR CNMC STS, Pierre <br /> Fauchard Academy (5 years, consecutively)
  //       </p>
  //     </>
  //   ),
  // },
  {
    bg: "bg-[#007BFF]/90 text-white",
    content: (
      // <img src={Img7} alt="NABH Logo" className=" pb-5 mx-auto block" />
      <>
        <p className="font-bold text-[#092C5C] text-2xl font-oswald-medium">
          Comprehensive Oral Cancer Therapy Unit experience –
        </p>
        <ul className="text-base list-none list-inside mt-1 space-y-1 font-light ">
          <li>- Smile Train for cleft care</li>
          <li>- Head & neck cancer surgeries, microvascular surgeries</li>
          <li>
            - Pioneers in Micro-Endodontics, Lingual Orthodontics, Full Mouth
            Implants, Maxillofacial Prosthesis, Orthognathic Surgery
          </li>
          <li>- Aesthetic Surgeries</li>
        </ul>
      </>
    ),
  },
];

const WhyChooseSpdch = () => {
  return (
    <div className="pt-10 bg-[#FAFAF6] px-6 md:px-10 flex justify-center">
      <div className="w-full mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-wide text-[#707070] font-[600] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          WHY CHOOSE CDOE ?
        </h2>

        <div className="relative pb-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={10}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            loop={true}
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
                  className={`w-[250px] h-[320px] mx-auto p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-between`}
                >
                  {card.content}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination container BELOW Swiper */}
          <div className="custom-swiper-pagination flex justify-center mt-6" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSpdch;
