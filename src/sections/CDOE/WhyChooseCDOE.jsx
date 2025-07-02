import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import WCF from "../../assets/FEAT/WCF+.png";
import GovImg from "../../assets/FEAT/Gov.png";
import { div } from "framer-motion/client";

const cards = [
  {
    bg: "bg-[#F7941D]/90 text-white",
    content: (
      <>
        <p className="font-[500] font-oswald-medium  text-[23px]">
          UGC-Entitled Degrees, <br /> Academic Rigor, Recognition & Advantage
        </p>
        <p className="text-sm mt-2">DMIHER (NAAC A++, NIRF Rank 42)</p>
        <p className="text-sm mt-2">
          Apprenticeship-embedded and flexible online formats
        </p>
        <p className="text-sm mt-2">
          Freedom to pursue online and offline programs simultaneously
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <p>
          <span className="text-[#F04E30] font-[600] font-oswald-medium  text-[26px] mt-5">
            {" "}
            Corporate Work-Integrated Programs (WIDP)
          </span>
          <br />
          <span className="text-[#122E5E] mt-5">
            Designed for working professionals and enterprise partners
          </span>
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <p>
          <span className=" font-[500] font-oswald-medium  text-5xl mt-10 text-[#E1CD67]">
            24×7 LMS Access
          </span>
          <br />
          <span className="text-sm mt-5">
            Includes Coursera, MOOCs, SWAYAM, 100+ ISBN-aligned books and more
          </span>
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#FFFFFF]",
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <p>
          <span className="text-[#F7941D] font-[500] font-oswald-medium  text-4xl">
            Industry-Ready Curriculum
          </span>
          <br />
          <span className="text-[15px] pb-10 text-[#707070]">
            Integrated tools: Power BI, Advanced Excel, AI, ML, Python, Data
            Science & more
          </span>
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#269BFF]",
    content: (
      <div className="flex flex-col items-center justify-center h-full ">
        <p>
          <span className="text-[#122E5E] font-[500] font-oswald-medium mb-5 text-4xl">
            Affordable Fee Structure
          </span>
          <br />
          <span className="text-[15px] mt-2 text-white">
            Quality education made accessible for all
          </span>
        </p>
      </div>
    ),
  },
];

const WhyChooseCDOE = () => {
  return (
    <div className="pt-10 px-6 bg-[#FAFAF6] flex justify-center">
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

export default WhyChooseCDOE;
