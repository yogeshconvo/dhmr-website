import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import learning from "../../assets/global/factors/learning.png";
import network from "../../assets/global/factors/network.png";
import partenership from "../../assets/global/factors/partenership.png";
const cards = [
  {
    bg: "bg-[#269BFF] text-white",
    title: (
      <span className="text-[#122E5E]">
        Global
        <br /> Learning Hubs
      </span>
    ),
    subtitle:
      "10+ international centers including Simulation, Standardized Patient Programs, Case-Based Learning, and Blockchain in Healthcare.",
    icon: learning,
  },
  {
    bg: "bg-[#F7941D] text-white",
    title: <span className="text-[#122E5E]">Global Mobility</span>,
    subtitle:
      "Robust programs enabling students and faculty to participate in international exchanges, observerships, and study tours to leading institutions.",
    icon: undefined,
  },
  {
    bg: "bg-[#E1CD67] text-[#122E5E]",
    title: <span className="text-[#F04E30]">Strategic Partnerships</span>,
    subtitle:
      "Collaborations with top-tier global institutions including Johns Hopkins, Mayo Clinic, University of Sydney, and QS-ranked universities.",
    icon: partenership,
  },
  {
    bg: "bg-[#F04E30] text-white",
    title: <span className="text-[#E1CD67]">International Admissions</span>,
    subtitle:
      "Dedicated pathways for international students supported by a dynamic global admissions process and inquiry support.",
    icon: undefined,
  },
  {
    bg: "bg-[#6C757D] text-white",
    title: <span className="text-[#F7941D]">Research & Innovation</span>,
    subtitle:
      "Joint research programs, global consultancy initiatives, and high-impact academic collaborations driving knowledge creation.",
    icon: undefined,
  },
  {
    bg: "bg-[#122E5E] text-white",
    title: <span className="text-[#F7941D]">Global Service Programs</span>,
    subtitle:
      "Extending expertise through health tourism, teleconsultancy, and international faculty development.",
    icon: undefined,
  },
  {
    bg: "bg-[#FFFFFF] text-[#6C757D] border border-gray-200",
    title: (
      <>
        Worldwide <br />
        Alumni Network
      </>
    ),
    subtitle:
      "Active alumni chapters across USA, UK, Europe, Asia, Australia, Gulf, SAARC, and Africa, fostering lifelong connections and mentorship.",
    icon: network,
  },
];

function FactorsGlobal() {
  return (
    <div className="px-5 py-8 md:py-20 md:px-10 bg-[#fef5eb] flex justify-center">
      <div className="w-full container">
        {/* Heading */}
        <div className="mb-10">
          <div className="border-t-4 border-[#F04E30] w-20 mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[500]">
            7 KEY FACTORS
          </h2>
          <p className="text-xl text-[#122E5E] font-oswald-light mt-2">
            That drive our global impact
          </p>
        </div>

        {/* Swiper for all screen sizes */}
        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            style={{ paddingBottom: "3rem" }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`p-6 rounded-lg shadow-md ${card.bg} min-h-[300px] flex flex-col justify-center relative `}
                >
                  {card.icon && (
                    <div className="text-3xl mb-4 absolute right-2 top-2 w-18">
                      <img src={card.icon} alt="" />
                    </div>
                  )}

                  <div>
                    <h3 className="font-oswald-medium font-bold text-3xl mb-3">
                      {card.title}
                    </h3>
                    <p className="font-oswald-light text-sm leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default FactorsGlobal;
