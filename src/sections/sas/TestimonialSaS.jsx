import React, { useState } from "react";

import testimonial1 from "../../assets/Testimonials/SAS/picture1.png";
import testimonial2 from "../../assets/Testimonials/SAS/picture2.jpg";
import testimonial3 from "../../assets/Testimonials/SAS/picture3.png";
import testimonial4 from "../../assets/Testimonials/SAS/picture4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tabs = ["Students", "Alumni"];

const data = {
  Students: [
    {
      img: testimonial1,
      para: "Akshit Yadav	MBA	2024-2026	The School of Allied Sciences (SAS), DMIHER (DU), provided me with incredible opportunities to grow beyond the classroom. Through SAS, I had the privilege of participating in the International Immersion Program at UCSI University, Malaysia, where I gained global business insights, industry exposure, and cross-cultural learning experiences. Additionally, the exceptional faculty at DMIHER played a crucial role in shaping my knowledge and skills, offering both academic excellence and real-world perspectives. I truly appreciate the learning environment and the mentorship I received at SAS.",
      name: `Mr. Akshit Yadav`,
      info: "MBA (FoCMS, SAS) | International Immersion Program Participant, UCSI University, Malaysia",
      batch: "2024-2026",
    },
    {
      img: testimonial2,
      para: "The School of Allied Sciences (SAS), DMIHER (DU), provided me with an invaluable opportunity to participate in the Global Immersion Program at NUS Singapore, where I gained world-class entrepreneurial insights and business strategies. The experience, along with the mentorship and practical learning at SAS, has played a crucial role in helping me support my father in reviving and expanding our family business. I am truly grateful to SAS for equipping me with the skills, exposure, and confidence to take on real-world business challenges.",
      name: `Mr, Aaryan Kale`,
      info: "BBA Final Year | Global Immersion Program Participant, NUS Singapore ",
      batch: "2022-2025",
    },
  ],
  Alumni: [
    {
      img: testimonial3,
      para: "My journey at the School of Allied Sciences (SAS), DMIHER (DU), was truly transformative. The holistic education, leadership opportunities, and industry exposure I received shaped my entrepreneurial mindset. The support from faculty and the enriching academic environment played a pivotal role in my success. Today, as I run a thriving furniture business in Wardha, I credit SAS for equipping me with the skills, confidence, and vision to lead and grow in the business world",
      name: `Mr. Indrajit Chudiwale`,
      info: "MBA (Gold Medalist, 2020-21) | Entrepreneur",
      batch: "2020-2022",
    },
    {
      img: testimonial4,
      para: "The School of Allied Sciences (SAS), DMIHER (DU), provided me with the perfect blend of academic excellence, practical exposure, and leadership opportunities. The faculty’s guidance and the industry-focused curriculum helped me build a strong foundation in management. Today, as a Floor Manager at DMMC, Nagpur, I apply the skills and knowledge I gained at SAS every day. I am grateful to my alma mater for shaping my professional journey and preparing me for real-world challenges.",
      name: "Miss. Mansi Malelar",
      batch: "2021- 23",
    },
  ],
};

function TestimonialsSAS() {
  const [tab, setTab] = useState("Students");

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
      <h2 className="text-3xl sm:text-4xl ml-4 sm:ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
        <hr className="border-red-500 border-2 w-12 mb-2" />
        TESTIMONIALS
      </h2>

      <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
        {tabs.map((tabName, index) => (
          <button
            key={tabName}
            onClick={() => handleTabClick(tabName)}
            className={`px-3 py-1 text-sm sm:text-base transition-all ${
              tab === tabName
                ? "underline text-black"
                : "text-gray-500 hover:text-gray-700"
            } ${
              index < tabs.length - 1 ? "border-r border-gray-300 pr-4" : ""
            }`}
          >
            {tabName}
          </button>
        ))}
      </div>

      <div className="my-10 ">
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
                  className="w-45 h-45 object-cover rounded-full"
                />

                <div className="max-w-2xl font-[Arial] text-base">
                  {" "}
                  <p className="mb-4">{testimonial.para}</p>
                  <p className="font-[600] text-xm mt-1">{testimonial.name}</p>
                  <pre className="font-[Arial]  text-[#707070] leading-5 mt-2">
                    {testimonial.info}
                  </pre>
                  <p className="font-[Arial]  text-[#707070] leading-5 mt-2">{testimonial.batch}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialsSAS;
