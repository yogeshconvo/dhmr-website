import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const cards = [
  {
    bg: "bg-[#F04E30]/90 text-white",
    content: (
      <>
        <p className="font-bold tracking-wide font-oswald-medium text-[25px] ">
          Constituent of DMIHER (Deemed to be University), NAAC A++,{" "}
          <span className="text-200">Category-I</span>
        </p>
        <p className="text-base mt-2 font-[400] font-oswald-medium">
          Attached 1500+ bed multi-specialty hospital for clinical training
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#E1CD67] text-[#122E5E]",
    content: (
      <>
        <p className="font-[600] font-oswald-medium uppercase text-[30px]">
          First In India to Adopt
        </p>
        <p className="text-base font-oswald-medium">
          Competency-Based Physiotherapy Education (CBPE)
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#122E5E] font-oswald-medium text-white",
    content: (
      <>
        <p className="font-bold text-xl  mt-8">
          Early research exposure with APC funding, workshops, and UG support
        </p>
        <p className="text-base font-oswald-medium mt-2">
          Interdisciplinary research through Master’s & PhD programs
          <br />
          Research writing workshops & mentorship for indexed journal
          publication
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#FFFFFF] text-[#F04E30]",
    content: (
      <>
        <p
          className="font-oswald-medium font-[600]
         text-2xl "
        >
          Academic tie-ups: Plymouth Institute (UK), Sports Authority of India
        </p>
        <p className="text-base font-oswald-medium text-[#707070] mt-2">
          Exchange programs, global research collaborations, and advanced
          training
        </p>
      </>
    ),
  },
  {
    bg: "bg-[#F7941D]/90 text-white",
    content: (
      <>
        <p className="font-oswald-medium font-[600] text-xl">
          Skill-building courses
        </p>
        <p className="text-base font-oswald-medium mt-1">
          Get Set Go, BLS & ACLS, Presenter/Researcher in Me
        </p>
        <p className="text-base font-oswald-medium mt-1">
          Career readiness: GD, PI, Resume Writing, Financial Literacy, Excel
        </p>
        <p className="text-base font-oswald-medium mt-2">
          AI Apps for PT, AETCOM, GCP modules
        </p>
      </>
    ),
  },
  // {
  //   bg: "bg-[#269BFF] text-white",
  //   content: (
  //     <>
  //       <p className="font-oswald-medium font-[500] text-2xl mt-8">
  //         Coursera courses
  //       </p>
  //       <p className="text-base font-oswald-medium mt-2">
  //         Students have completed 2,800+ courses from Harvard University,
  //         Stanford University, Johns Hopkins University, University of London
  //         and many more
  //       </p>
  //     </>
  //   ),
  // },
];

function WhyChooseRNPC() {
  return (
    <div className="py-16 px-4 bg-[#FAFAF6] flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[600] mb-10">
          <div className="border-t-4 border-[#F04E30] w-20 mb-2"></div>
          WHY CHOOSE RNPC?
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
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
            <SwiperSlide
              key={index}
              className="flex justify-center m-auto w-fit items-center"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className={`w-[250px] h-[320px] p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-center gap-1`}
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

export default WhyChooseRNPC;
