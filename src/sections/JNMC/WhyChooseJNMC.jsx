// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay, Pagination } from "swiper/modules";
// import WCF from "../../assets/FEAT/WCF+.png";
// import India from "../../assets/india.png";
// import Group from "../../assets/group.png";
// import Icon from "../../assets/JNMC/card-icon.png";

// const cards = [
//   {
//     bg: "bg-[#269BFF]",
//     content: (
//       <div className="flex flex-col  text-white font-oswald-medium">
//         {/* Top Heading */}
//         <p className="text-[#122E5E] font-bold text-3xl font-oswald-medium text-left">
//           Ranked Among India’s Top 25 Medical Colleges
//         </p>

//         {/* Logos and NIRF rank */}
//         <div className="flex items-center justify-center gap-6 mt-4">
//           <img src={India} alt="india" className="w-20 h-20 object-contain" />
//           <div className="text-white text-left text-[18px]">
//             <p className="font-extrabold">23rd</p>
//             <p className="font-light">in NIRF</p>
//             <p className="font-light">2024</p>
//           </div>
//         </div>

//         <div className="w-full border-t border-white my-4"></div>

//         {/* Bottom NAAC and NIRF */}
//         <div className="flex items-center justify-between w-full px-4">
//           <div className="text-left text-white text-base">
//             <p className="font-light">NAAC</p>
//             <p className="font-light">Re-accredited</p>
//             <p className="font-semibold">A++</p>
//           </div>
//           <img src={Group} alt="Group" className="w-21 h-21 object-contain" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-[#E3F2FD]",
//     content: (
//       <div className="font-oswald-medium text-[#122E5E]">
//         <p className="text-[#F04E30]  font-bold text-[18px] tracking-tighter mb-2">
//           <span className="text-3xl">
//             One of Central India’s largest teaching hospitals
//           </span>
//         </p>
//         <div className="space-y-1 text-base font-light mb-3">
//           <p>- NABH & NABL Accredited</p>
//           <p>- 3+ decades</p>
//           <p>- 30+ clinical specialties</p>
//           <p>- 11+ Super-specialties</p>
//         </div>
//         <p className="tracking-wide font-light">
//           <span className="font-medium">Integrated care:</span> Cardiology,
//           Neurosurgery & more, Advanced Diagnostics, Robotic Surgery OTs
//         </p>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-[#F7941D]/90 text-white",
//     content: (
//       <div className="font-oswald-medium text-[#122E5E]">
//         <p className="font-bold text-5xl mb-3">ICT-Driven Teaching</p>
//         <div className="space-y-1 text-base font-light">
//           <p>- Smart Classrooms</p>
//           <p>- Virtual Learning Platforms</p>
//           <p>- Interactive Tools</p>
//           <p>- Digital E-Museum</p>
//           <p>- Simulation Modules</p>
//           <p>- Real-time Case Discussions</p>
//           <p>- AETCOM Phase-wise Integration</p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-[#FFFFFF]",
//     content: (
//       <div className="font-oswald-medium">
//         <p className="text-[#F04E30] font-bold text-4xl ">
//           Experiential Learning
//         </p>
//         <div className="text-[17px] text-[#707070] font-light mt-5 space-y-1">
//           <p>- Anukriti Skill Lab</p>
//           <p>- High-Fidelity Mannequins</p>
//           <p>- Cadaveric Labs, Wet Labs</p>
//           <p>- Hands-on Simulation-Based Training</p>
//         </div>
//         <div className="flex justify-end mt-6">
//           <img src={Icon} alt="Group" className="w-20 h-20 object-contain" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-[#FDF8F3] text-[#1F2937]", // Light warm background with dark slate text
//     content: (
//       <div className="font-oswald-medium">
//         <p className="font-[500] text-4xl mb-3 text-[#B03060]">
//           Global Collaborations. <br />
//           <span className="text-[#E29500]">Local Impact.</span>
//         </p>
//         <div className="text-[16px] font-[400] space-y-1 text-[#3D3D3D]">
//           <p>• National & International Research & academic partnerships</p>
//           <p>• Study abroad programs</p>
//           <p>• Innovation for rural healthcare</p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-[#F04E30] text-white",
//     content: (
//       <div className="font-oswald-medium">
//         <p className="font-bold text-[#E1CD67] text-4xl mb-3">
//           Research & Innovation
//         </p>
//         <div className="text-[16px] font-[400] ">
//           <p>State-of-the-art Research Labs</p>
//           <p>
//             Focus: Health Tech, Regenerative Medicine, Bone Tissue Engineering,
//           </p>
//           <p>Integration of Clinical Practice, Research & Entrepreneurship,</p>
//           <p>
//             International Research & Academic Exchange, Rural Health Innovation
//           </p>
//         </div>
//       </div>
//     ),
//   },

//   {
//     bg: "bg-[#F0F0F0] text-[#707070]",
//     content: (
//       <div className="font-oswald-medium">
//         <p className="font-[500]  text-4xl mb-3">
//           Committed to Rural Health & Social Responsibility
//         </p>
//         <div className="text-[16px] font-[400] space-y-1">
//           <p>• Community-based clinical outreach</p>
//           <p>• Training socially responsible healthcare providers</p>
//           <p>• Arogya Setu – Bridging the Gap – Antodaya</p>
//         </div>
//       </div>
//     ),
//   },
// ];

// const WhyChooseJNMC = () => {
//   return (
//     <div className="bg-gray-100 flex justify-center px-6 md:px-40 py-20">
//       <div className="w-full max-w-6xl">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[600] mb-10">
//           <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
//           WHY CHOOSE JNMC
//         </h2>

//         <div className="">
//           {/* Swiper Slider */}
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             pagination={{
//               clickable: true,
//               el: ".custom-swiper-pagination",
//             }}
//             spaceBetween={10}
//             loop={true}
//             centeredSlides={true}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//                 centeredSlides: true,
//               },
//               640: {
//                 slidesPerView: 2,
//                 centeredSlides: false,
//               },
//               1024: {
//                 slidesPerView: 4,
//                 centeredSlides: false,
//               },
//             }}
//           >
//             {cards.map((card, index) => (
//               <SwiperSlide key={index} className="flex justify-center">
//                 <div
//                   className={`w-[260px] h-[360px] mx-auto p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-between`}
//                 >
//                   {card.content}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Swiper Pagination */}
//           <div className="custom-swiper-pagination flex justify-center mt-6 space-x-2"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseJNMC;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // ✅ Required for dots
import { Autoplay, Pagination } from "swiper/modules";

import WCF from "../../assets/FEAT/WCF+.png";
import India from "../../assets/india.png";
import Group from "../../assets/group.png";
import Icon from "../../assets/JNMC/card-icon.png";

const cards = [
  {
    bg: "bg-[#269BFF]",
    content: (
      <div className="flex flex-col text-white font-oswald-medium">
        <p className="text-[#122E5E] font-bold text-3xl text-left">
          Ranked Among India’s Top 25 Medical Colleges
        </p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <img src={India} alt="india" className="w-20 h-20 object-contain" />
          <div className="text-white text-left text-[18px]">
            <p className="font-extrabold">23rd</p>
            <p className="font-light">in NIRF</p>
            <p className="font-light">2024</p>
          </div>
        </div>
        <div className="w-full border-t border-white my-4"></div>
        <div className="flex items-center justify-between w-full px-4">
          <div className="text-left text-white text-base">
            <p className="font-light">NAAC</p>
            <p className="font-light">Re-accredited</p>
            <p className="font-semibold">A++</p>
          </div>
          <img src={Group} alt="Group" className="w-21 h-21 object-contain" />
        </div>
      </div>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <div className="font-oswald-medium text-[#122E5E]">
        <p className="text-[#F04E30] font-bold text-[18px] tracking-tighter mb-2">
          <span className="text-3xl">
            One of Central India’s largest teaching hospitals
          </span>
        </p>
        <div className="space-y-1 text-base font-light mb-3">
          <p>- NABH & NABL Accredited</p>
          <p>- 3+ decades</p>
          <p>- 30+ clinical specialties</p>
          <p>- 11+ Super-specialties</p>
        </div>
        <p className="tracking-wide font-light">
          <span className="font-medium">Integrated care:</span> Cardiology,
          Neurosurgery & more, Advanced Diagnostics, Robotic Surgery OTs
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#F7941D]/90 text-white",
    content: (
      <div className="font-oswald-medium text-[#122E5E]">
        <p className="font-bold text-5xl mb-3">ICT-Driven Teaching</p>
        <div className="space-y-1 text-base font-light">
          <p>- Smart Classrooms</p>
          <p>- Virtual Learning Platforms</p>
          <p>- Interactive Tools</p>
          <p>- Digital E-Museum</p>
          <p>- Simulation Modules</p>
          <p>- Real-time Case Discussions</p>
          <p>- AETCOM Phase-wise Integration</p>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-[#FFFFFF]",
    content: (
      <div className="font-oswald-medium">
        <p className="text-[#F04E30] font-bold text-4xl ">
          Experiential Learning
        </p>
        <div className="text-[17px] text-[#707070] font-light mt-5 space-y-1">
          <p>- Anukriti Skill Lab</p>
          <p>- High-Fidelity Mannequins</p>
          <p>- Cadaveric Labs, Wet Labs</p>
          <p>- Hands-on Simulation-Based Training</p>
        </div>
        <div className="flex justify-end mt-6">
          <img src={Icon} alt="Group" className="w-20 h-20 object-contain" />
        </div>
      </div>
    ),
  },
  {
    bg: "bg-[#FDF8F3] text-[#1F2937]",
    content: (
      <div className="font-oswald-medium">
        <p className="font-[500] text-4xl mb-3 text-[#B03060]">
          Global Collaborations. <br />
          <span className="text-[#E29500]">Local Impact.</span>
        </p>
        <div className="text-[16px] font-[400] space-y-1 text-[#3D3D3D]">
          <p>• National & International Research & academic partnerships</p>
          <p>• Study abroad programs</p>
          <p>• Innovation for rural healthcare</p>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-[#F04E30] text-white",
    content: (
      <div className="font-oswald-medium">
        <p className="font-bold text-[#E1CD67] text-4xl mb-3">
          Research & Innovation
        </p>
        <div className="text-[16px] font-[400] ">
          <p>State-of-the-art Research Labs</p>
          <p>
            Focus: Health Tech, Regenerative Medicine, Bone Tissue Engineering,
          </p>
          <p>Integration of Clinical Practice, Research & Entrepreneurship,</p>
          <p>
            International Research & Academic Exchange, Rural Health Innovation
          </p>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-[#F0F0F0] text-[#707070]",
    content: (
      <div className="font-oswald-medium">
        <p className="font-[500] text-4xl mb-3">
          Committed to Rural Health & Social Responsibility
        </p>
        <div className="text-[16px] font-[400] space-y-1">
          <p>• Community-based clinical outreach</p>
          <p>• Training socially responsible healthcare providers</p>
          <p>• Arogya Setu – Bridging the Gap – Antodaya</p>
        </div>
      </div>
    ),
  },
];

const WhyChooseJNMC = () => {
  return (
    <div className="bg-gray-100 flex justify-center px-6 md:px-40 py-20">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[600] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          WHY CHOOSE JNMC ?
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          loop={true}
          spaceBetween={30} // increased to prevent card merging
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="px-2 sm:px-4 lg:px-10"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`w-[260px] h-[360px] mx-auto p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-between`}
              >
                {card.content}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Pagination Dots */}
        <div className="custom-swiper-pagination flex justify-center mt-6 space-x-2"></div>
      </div>
    </div>
  );
};

export default WhyChooseJNMC;
