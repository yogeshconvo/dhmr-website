import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const cards = [
  {
    bg: "bg-[#F7941D]/90 text-white",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="font-oswald-medium font-bold text-[#132e5c] text-3xl">
          Impactful Industry Connect
        </p>
        <p className="font-oswald-medium text-base mt-1">
          Internships, live projects, and placement support with leading pharma
          and healthcare companies.
        </p>
      </div>
    ),
  },

  {
    bg: "bg-[#E3F2FD]",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="text-[#D3411E] text-[32px] font-oswald-medium text-3xl pb-2  font-bold">
          Teaching Hospital Access
        </p>
        <p className="text-red-500  font-oswald-medium text-base mt-1">
          Hands-on training in hospital pharmacy, patient care, and
          pharmacovigilance.
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="font-oswald-medium  font-bold text-[#F7D13D] text-3xl">
          Simulation Centre & Interactive Museum
        </p>
        <p className="font-oswald-medium text-base mt-1">
          ‘Anukruti’ for real-time practice and ‘Jigyasa’ for experiential
          learning beyond the classroom.
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#FFFFFF]",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="text-[#F7941D]  font-oswald-medium text-3xl pb-2  font-bold">
          Global Coursera Integration
        </p>
        <p className="text-[#707070] font-oswald-medium text-base mt-1">
          Access to certifications from top global universities in pharma tech
          and regulatory sciences.
        </p>
      </div>
    ),
  },

  {
    bg: "bg-[#F7941D]/90 text-white",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="font-oswald-medium text-3xl pb-2  font-bold text-[#132e5c] ">
          Preclinical & Clinical Labs
        </p>
        <p className="font-oswald-medium text-base mt-1">
          Real-world exposure to drug testing, toxicology, and clinical trials.
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#269BFF]",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="text-[#122E5E]  font-oswald-medium text-3xl pb-2  font-bold">
          Research-Driven from UG Level
        </p>
        <p className="text-[#122E5E]  font-oswald-medium text-base mt-1">
          Active UG participation in research projects, publications, and
          national conferences.
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#E3F2FD]",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="text-red-500 font-oswald-medium text-3xl pb-2  font-bold">
          Diverse Student Community
        </p>
        <p className="text-red-500 font-oswald-medium text-base mt-1">
          Learners from across India and countries like Ghana, Uganda, Cameroon,
          and Bangladesh.
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="font-oswald-medium text-3xl pb-2  font-bold ">
          Global Faculty Network
        </p>
        <p className="font-oswald-medium text-base mt-1">
          Renowned educators and industry experts from USA, Singapore, UK, UAE,
          and Germany.
        </p>
      </div>
    ),
  },
];

const WhyChooseDMCP = () => {
  return (
    <div className="py-16 px-10 bg-[#FAFAF6] flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl  md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[500] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          WHY CHOOSE DMCP ?
        </h2>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ el: ".custom-pagination", clickable: true }}
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
                  className={`w-[290px] h-[360px] sm:w-[260px] sm:h-[330px] mx-auto p-4 rounded-xl shadow-md ${card.bg} font-oswald-light flex flex-col justify-between`}
                >
                  {card.content}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination container */}
          <div className="custom-pagination mt-6 flex justify-center" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDMCP;
