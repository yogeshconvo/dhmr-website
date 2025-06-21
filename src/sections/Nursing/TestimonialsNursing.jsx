import React, { useState } from "react";

import testimonial1 from "../../assets/Nursing/testimonials/slider1.png";
import testimonial2 from "../../assets/Nursing/testimonials/slider2.png";
import testimonial3 from "../../assets/Nursing/testimonials/slider3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tabs = ["Students", "Parents"];

const data = {
  Students: [
    {
      img: testimonial1,
      para: "SRMMCON stands out as a beacon of excellence in nursing education, and my journey within its corridors has been nothing short of transformative. The faculty at SRMMCON comprises some of the most knowledgeable and supportive mentors, their unwavering dedication to our growth and success is palpable in every lecture, clinical session, and interaction. They not only impart theoretical knowledge but also instill in us the values of compassion, empathy, and integrity that are the hallmark of nursing practice.",
      info: `Darshan Vidhate\nBSc Nursing\n2020-2024`,
    },
    {
      img: testimonial2,
      para: "SRMMCON stands out as a beacon of excellence in nursing education, and my journey within its corridors has been nothing short of transformative. The faculty at SRMMCON comprises some of the most knowledgeable and supportive mentors, their unwavering dedication to our growth and success is palpable in every lecture, clinical session, and interaction. They not only impart theoretical knowledge but also instill in us the values of compassion, empathy, and integrity that are the hallmark of nursing practice.",
      info: `Darshan Vidhate\nBSc Nursing\n2020-2024`,
    },
    {
      img: testimonial3,
      para: "SRMMCON stands out as a beacon of excellence in nursing education, and my journey within its corridors has been nothing short of transformative. The faculty at SRMMCON comprises some of the most knowledgeable and supportive mentors, their unwavering dedication to our growth and success is palpable in every lecture, clinical session, and interaction. They not only impart theoretical knowledge but also instill in us the values of compassion, empathy, and integrity that are the hallmark of nursing practice.",
      info: `Darshan Vidhate\nBSc Nursing\n2020-2024`,
    },
  ],
  Parents: [
    {
      img: testimonial2,
      para: "SRMMCON stands out as a beacon of excellence in nursing education, and my journey within its corridors has been nothing short of transformative. The faculty at SRMMCON comprises some of the most knowledgeable and supportive mentors, their unwavering dedication to our growth and success is palpable in every lecture, clinical session, and interaction. They not only impart theoretical knowledge but also instill in us the values of compassion, empathy, and integrity that are the hallmark of nursing practice.",
      info: `Darshan Vidhate\nBSc Nursing\n2020-2024`,
    },
    {
      img: testimonial1,
      para: "SRMMCON stands out as a beacon of excellence in nursing education, and my journey within its corridors has been nothing short of transformative. The faculty at SRMMCON comprises some of the most knowledgeable and supportive mentors, their unwavering dedication to our growth and success is palpable in every lecture, clinical session, and interaction. They not only impart theoretical knowledge but also instill in us the values of compassion, empathy, and integrity that are the hallmark of nursing practice.",
      info: `Darshan Vidhate\nBSc Nursing\n2020-2024`,
    },
    {
      img: testimonial3,
      para: "SRMMCON stands out as a beacon of excellence in nursing education, and my journey within its corridors has been nothing short of transformative. The faculty at SRMMCON comprises some of the most knowledgeable and supportive mentors, their unwavering dedication to our growth and success is palpable in every lecture, clinical session, and interaction. They not only impart theoretical knowledge but also instill in us the values of compassion, empathy, and integrity that are the hallmark of nursing practice.",
      info: `Darshan Vidhate\nBSc Nursing\n2020-2024`,
    },
  ],
};

function TestimonialsNursing() {
  const [tab, setTab] = useState("Students");
  return (
    <div className="container my-[125px] ">
      <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        TESTIMONIALS
      </h2>

      <ul className="flex gap-2 mx-auto w-fit -mt-2">
        {tabs.map((tabItem, idx) => (
          <>
            <li
              key={idx}
              onClick={() => setTab(tabItem)}
              className="cursor-pointer hover:underline border-b-2 border-b-transparent"
              style={{
                textDecoration: tabItem == tab ? "underline" : undefined,
              }}
            >
              {tabItem}
            </li>
            {idx < tabs.length - 1 && <span>|</span>}
          </>
        ))}
      </ul>

      <div className="my-24 lg:ml-[20%]">
        <Swiper
          style={{
            paddingBottom: 80,
          }}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data[tab]?.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex-center gap-12 max-sm:flex-col">
                <img
                  src={testimonial.img}
                  alt=""
                  className="w-[200px] h-[200px] rounded-full"
                />
                <div>
                  {" "}
                  <p className="text-[#707070]">{testimonial.para}</p>
                  <pre className="font-bold text-[#707070] leading-5 mt-2">
                    {testimonial.info}
                  </pre>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialsNursing;
