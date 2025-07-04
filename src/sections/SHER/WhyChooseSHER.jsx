import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Img1 from "../../assets/SHER/card1.png";
import Img2 from "../../assets/SHER/card2.png";
import Img3 from "../../assets/SHER/card3.png";

const cards = [
  {
    bg: "bg-[#269BFF]",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="text-[#FFFF] font-light text-[28px] font-oswald-medium">
          Centre of excellence recognized by
        </p>
        <p className="font-bold text-[##122E5E] font-oswald-medium mt-1 text-[30px]">
          AMEE and McGraw Hill
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#E1CD67]/90 text-white",
    content: (
      <div className="flex flex-col justify-center h-full">
        <img src={Img1} alt="NABH Logo" className="mx-auto block w-20" />
        <p className="font-bold font-oswald-medium text-[25px]">
          <span className="text-[#122E5E]">
            Internationally acclaimed faculties{" "}
          </span>
        </p>
        <p className="text-[25px] mt-1 font-light font-oswald-medium text-[#122E5E]">
          with additional qualifications in higher education{" "}
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#122E5E] text-white",
    content: (
      <div className="flex flex-col justify-center h-full">
        <p className="text-[#FFF] font-bold text-[28px] font-oswald-medium">
          Masters and Doctoral Programs
        </p>
        <p className="text-[26px] mt-1 font-oswald-medium font-extralight">
          with academic flexibility, credit recognition and <br />
          transfer as per NEP 2020
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#F7941D]",
    content: (
      <div className="flex flex-col justify-center h-full font-oswald-medium">
        <img src={Img2} alt="NABH Logo" className="w-20 self-end" />
        {/* Text Content */}
        <p className="text-white font-light text-[22px]">
          Significant <br />
          contribution in framing <br />
          policies by <span className="font-semibold">apical</span> <br />
          <span className="font-semibold">
            councils like NMC <br /> and NCISM
          </span>
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#707070]",
    content: (
      <div className="flex flex-col justify-center h-full text-white font-oswald-medium">
        <p className="font-light text-[30px]">
          <span className="">
            Nodal and <br /> regional centres <br /> for{" "}
            <span className="font-bold">national</span>
          </span>
        </p>
        <p className="text-[30px] font-bold">faculty development</p>
      </div>
    ),
  },
  {
    bg: "bg-[#F04E30]",
    content: (
      <div className="flex flex-col justify-center h-full font-oswald-medium text-white">
        <img src={Img3} alt="NABH Logo" className="w-20 self-end" />
        {/* Text Content */}
        <p className="font-light text-[22px]">
          Hub of evidence-based education with{" "}
          <span className="font-semibold">
            500+ indexed publications in higher education
          </span>
        </p>
      </div>
    ),
  },
  {
    bg: "bg-[#FFFF]",
    content: (
      <div className="flex flex-col justify-center h-full font-oswald-medium">
        {/* Text Content */}
        <p className="font-bold text-[50px] text-[#F7941D] text-center">
          1000+
        </p>
        <p className="text-[#58595B] text-[20px]">
          <span className="font-bold">Literary copyrights</span>{" "}
          <span className="font-light">
            in educational innovation, examination reforms, educational modules
            and academic concept papers which are institutionalized <br /> and
            shared with peers
          </span>
        </p>
      </div>
    ),
  },
];

const WhyChooseSHER = () => {
  return (
    <div className="pt-16 px-6 flex justify-center bg-blue-50">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[600] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          THE SHER DIFFERENCE
        </h2>

        {/* Swiper */}
        {/* <Swiper
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
                className={`w-[250px] h-[320px] p-4 rounded-xl shadow-md ${card.bg} font-oswaldLight  justify-between`}
              >
                {card.content}
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
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

export default WhyChooseSHER;
