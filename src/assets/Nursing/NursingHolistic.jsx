import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Img1 from "../../assets/Nursing/holistics/slider1.png";
import Img2 from "../../assets/Nursing/holistics/slider2.png";
import Img3 from "../../assets/Nursing/holistics/slider3.jpg";

const slides = [
  {
    img: Img1,
    alt: "SRMMCON Campus",
  },
  {
    img: Img2,
    alt: "SRMMCON Labs",
  },
  {
    img: Img3,
    alt: "SRMMCON Students",
  },
];

function NursingHolistic() {
  return (
    <div className="mt-[125px] py-[100px] bg-[#f2f2f2]">
      <div className="container flex flex-wrap items-center justify-center gap-18">
        <div className="flex-2 min-w-[315px] holistic-text">
          <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            HOLISTIC LEARNING AND
            <br /> INFRASTRUCTURE
          </h2>
          <p className="">
            <span className="text-lg text-[#58595B]">
              Teaching-Learning Facilities
            </span>{" "}
            <br />
            Technology enabled classrooms, smart boards, high-end projectors,
            Wi-Fi enabled campus I Competency-Based Education I Simulation-based
            learning, VR/AR-enabled education, High-fidelity mannequins, LMS,
            mandatory modules, self-directed learning (SDL) I AETCOM modules I
            Coursera courses, electives, Standardized Patient Programs (SPP) I
            Research and Innovation Hubs
          </p>
          <hr className="my-1 " />
          <p>
            <b className="text-primary text-lg">
              Laboratory & Hospital Facilities
            </b>{" "}
            <br />
            Advanced Simulation Lab with lifelike mannequins I OSCE Lab I
            Nutrition Lab I Community Health Nursing Lab
          </p>
          <hr className="my-1 " />
          <p>
            <span className="text-lg text-[#58595B]">
              I Maternal and Child Health Lab I Pre-Clinical Lab School of
              Experiential Learning & Simulation Centre (SEL & SC) and Museum
            </span>{" "}
            <br />
            Simulations, skill stations, anatomical models, and historical and
            contemporary healthcare innovations.
          </p>
          <hr className="my-1 " />
          <p>
            <span className="text-lg text-[#58595B]">Library Facilities</span>
            <br /> Extensive collection of academic texts, research papers, and
            clinical guides I Digital access to journals, e-books, and research
            databases such as PubMed and others I Study zones, group workspaces,
            and computer stations I Access to DELNET’s vast repository of
            e-resources, research papers, and academic materials from multiple
            institutions I Digital Lab: Access to extensive e-resources
            including Springer, ProQuest, EBSCOHOST, NDLI, Shodhganga,
            E-Shodhsindhu, and the British Council Digital Library.
          </p>
          <hr className="my-1 " />
          <p>
            <span className="text-lg text-[#58595B]">
              Students Guidance and Counseling Center
            </span>{" "}
            <br />
            Providing mental health resources, stress management support, and
            wellness programs
          </p>
        </div>

        <div className="flex-3 min-w-[315px] h-full rounded-md overflow-hidden shadow-lg flex-shrink-0">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            navigation={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="object-fill w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default NursingHolistic;
