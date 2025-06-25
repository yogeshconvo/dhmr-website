import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import WCF from "../../assets/FEAT/WCF+.png";
import GovImg from "../../assets/FEAT/Gov.png";
import { div } from "framer-motion/client";

const cards = [
  {
    bg: "bg-[#F7941D]/90 text-white",
    content: (
      <>
<<<<<<< HEAD
        <p className="font-[500] font-oswald-medium  text-[23px]">
          UGC-Entitled Degrees, <br /> Academic Rigor, Recognition & Advantage
        </p>
        <p className="text-sm mt-2">DMIHER (NAAC A++, NIRF Rank 42)</p>
=======
        <p className="font-bold text-[23px]">
          UGC-Entitled Degrees | Academic Rigor, Recognition & Advantage
        </p>
        <p className="text-sm mt-2">
          DMIHER (NAAC A++, NIRF Rank 42)
        </p>
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
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
<<<<<<< HEAD
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
=======
        <p >
          <span className="text-[#F04E30] font-bold text-2xl mt-5"> Corporate Work-Integrated Programs (WIDP)</span>
          <br />
          <span className="text-[#122E5E] mt-5">Designed for working professionals and enterprise partners</span>
        </p>

>>>>>>> c0b206998fde489064a735526d2847598df56a7b
      </div>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
<<<<<<< HEAD
      <div className="flex flex-col items-center justify-center h-full">
        <p>
          <span className=" font-[500] font-oswald-medium  text-5xl mt-10 text-[#E1CD67]">
=======
       <div className="flex flex-col items-center justify-center h-full">
        <p>
          <span className="font-bold text-3xl mt-10 text-[#E1CD67]">
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
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
<<<<<<< HEAD
      <div className="flex flex-col items-center justify-center h-full">
        <p>
          <span className="text-[#F7941D] font-[500] font-oswald-medium  text-4xl">
            Industry-Ready Curriculum
          </span>
          <br />
          <span className="text-[15px] pb-10 text-[#707070]">
            Integrated tools: Power BI, Advanced Excel, AI, ML, Python, Data
            Science & more
=======
      
      <div className="flex flex-col items-center justify-center h-full">
        <p>
          <span className="text-[#F7941D] font-bold text-2xl">
            Industry-Ready Curriculum
          </span>
          <br/>
          <span className="text-[15px] pb-10 text-[#707070]">
            Integrated tools: Power BI, Advanced Excel, AI, ML, Python, Data Science & more
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
          </span>
        </p>
      </div>
    ),
  },
  {
<<<<<<< HEAD
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

=======
  bg: "bg-[#269BFF]",
  content: (
    <div className="flex flex-col items-center justify-center h-full py-8">
      <p>
        <span className="text-[#122E5E] font-bold text-3xl">
          Affordable Fee Structure
        </span>
        <br />
        <span className="text-[15px] mt-2 text-white">
          Quality education made accessible for all
        </span>
      </p>
    </div>
  ),
}

];



>>>>>>> c0b206998fde489064a735526d2847598df56a7b
const WhyChooseCDOE = () => {
  return (
    <div className="py-16 px-6 bg-[#FAFAF6] flex justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-wide text-[#707070] font-[600]  mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          WHY CHOOSE CDOE
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={10}
          dots={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center sm:justify-center"
            >
              <div
                className={`w-[250px] h-[320px] p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-between`}
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

export default WhyChooseCDOE;
