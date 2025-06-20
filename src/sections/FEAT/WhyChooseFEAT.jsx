

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import WCF from "../../assets/FEAT/WCF+.png";

const cards = [
  {
    bg: "bg-[#F7941D]/90 text-white",
    content: (
      <>
        <p className="font-bold font-oswald-medium text-[23px] mt-10">
          <span className="text-[#122E5E]">Faculties</span> from IITs, NITs and{" "}
          <span className="text-[#122E5E]">
            top <br />
            medical institutions{" "}
          </span>
        </p>
        <p className="text-base mt-1 font-light font-oswald-medium">
          <span className="font-[600]">Internship:</span> ISRO, IITs, VNIT,
          <br />
          leading Med-Tech firms
        </p>
        <p className="text-base font-light font-oswald-medium">
          <span className="font-[600]">
            International exchange <br /> programs:
          </span>{" "}
          UC Berkeley,
          <br /> University of Sydney & more
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <>
        <p className="text-[#F04E30] font-oswald-medium tracking-wide font-bold text-[20px] leading-normal">
          <span className="text-4xl font-oswald-medium"> AI-driven</span>{" "}
          Healthcare projects, Telemedicine, <br /> Wearables & IoT applications
        </p>
        <p className=" text-[#122E5E] tracking-wide font-oswald-medium text-base ">
          Advanced Technical Courses via School of Experiential Learning (SEL) &
          Simulation Centre (SC)
        </p>
        <p className="text-base tracking-wide font-oswald-medium text-[#122E5E]">
          High-tech skill labs
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
      <>
        <img className="h-20 w-20 ml-35" src={WCF} alt="WCF" />
        <p className="font-bold text-[#E1CD67] text-5xl">1500+ Bedded</p>
        <p>
          Largest teaching hospital in central India for real-time patient data
          research
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FFFFFF]",
    content: (
      <>
        <div className="flex">
          <p className="text-[#F7941D] font-bold text-4xl font-oswald-medium mt-5">
            Government-funded research
          </p>
        </div>
        <p className="text-[15px] pb-17 font-oswald-medium text-[#707070]">
          DST-TIDE, ICMR, DRDO & others <br />
          <span className=" font-oswald-medium">Memberships:</span> IEEE, IETE,
          CSI, ISTE, IE(I), GDG, C4GT, GeeksforGeeks
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#269BFF]",
    content: (
      <>
        <p className="text-[#122E5E] font-bold text-3xl pt-15">
          Faculty-led projects
        </p>
        <p className="text-xm pb-13 mt-2">
          supported by DST-TIDE, DRDO and ICMR, published in Q1 journals
          (Springer Nature & more)
        </p>
      </>
    ),
  },
];

const WhyChooseFEAT = () => {
  return (
    <div className="py-16 px-15 bg-[#FAFAF6] flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[600] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          WHY CHOOSE FEAT
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={10}
          loop={true}
          slidesPerView={1}
          centeredSlides={true} // Only useful for mobile
          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: false, // Desktop/tablet doesn't center
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

export default WhyChooseFEAT;
