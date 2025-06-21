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
        <p className="font-bold font-oswald-medium text-[26px] mt-8">
          Industry-Ready UG & PG Programs
        </p>
        <p className="text-lg mt-2 font-oswald-medium">
          Healthcare Management, AI, Data Science, and Emerging Technologies.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <>
        <p className="text-[#F04E30] font-oswald-medium font-bold text-[26px] leading-normal">
          Hands-on Training & Placement Tie-ups
        </p>
        <p className="text-[#122E5E] font-oswald-medium text-base mt-2">
          National Cancer Institute, Max Healthcare, TCS, Axis Bank, DMart,
          Ceinsys Tech AI, and more.
        </p>
        <p className="text-[#122E5E] font-oswald-medium text-base mt-1">
          Paid internships, on-the-job training, 100% placement (Avg: ₹4.5 LPA,
          Highest: ₹12 LPA)
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
      <>
        <p className="font-bold text-[#E1CD67] text-4xl my-4">
          In-House Internship Ecosystem
        </p>
        <p>
          Paid internships across healthcare, IT, banking, and education within
          Meghe Group institutions.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FFFFFF]",
    content: (
      <>
        <p className="text-[#F7941D] font-bold text-3xl font-oswald-medium my-4">
          Global Immersion & Certifications
        </p>
        <p className="text-[18px] font-oswald-medium text-[#707070]">
          NUS Singapore, UCSI Malaysia, Coursera Campus (5000+ global
          certifications: Harvard, Stanford, Google, IBM, etc.)
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#269BFF]",
    content: (
      <>
        <p className="text-[#122E5E] font-bold text-2xl py-4">
          AI-driven Research & Innovation
        </p>
        <p className="text-base mt-2">
          Startup incubation, 157+ papers, 24+ copyrights, 6 patents, 81+ books,
          120+ PhD scholars.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#F04E30]/90 text-white",
    content: (
      <>
        <p className="font-bold text-2xl my-4">
          Scholarships & Loan Assistance
        </p>
        <p className="text-base mt-2">
          Merit-based scholarships and easy education loan assistance.
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <>
        <p className="text-[#F04E30] font-bold text-4xl my-4">
          Dual Degree Advantage
        </p>
        <p className="text-base mt-2">
          Pursue two degrees simultaneously through DMIHER’s dual-mode education
          system.
        </p>
      </>
    ),
  },
];

function WhyChooseSaS() {
  return (
    <div className="py-16 px-15 bg-[#FAFAF6] flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[600] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          WHY CHOOSE SCHOOL OF ALLIED SCIENCES
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
                className={`w-[250px] h-[320px] p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-center`}
              >
                {card.content}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WhyChooseSaS;
