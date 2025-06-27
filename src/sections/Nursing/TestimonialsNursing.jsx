import React, { useState } from "react";

import testimonial1 from "../../assets/Testimonials/Nursing/picture1.jpg";
import testimonial2 from "../../assets/Testimonials/Nursing/picture2.jpg";
import testimonial3 from "../../assets/Testimonials/Nursing/picture3.jpg";
import testimonial4 from "../../assets/Testimonials/Nursing/picture4.png";
import testimonial5 from "../../assets/Testimonials/Nursing/picture5.jpg";
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
      name: `Mr. Darshan Vidhate`,
      info: "BSc Nursing 2020-2024",
    },
    {
      img: testimonial2,
      para: "I am Vaishnavi  Kirme  very thankful to Datta Meghe institute of Higher education and research to My experience with the Smt. Radhikabai Meghe memorial college of nursing has positively impacted me personally and professionally. It is a great institution for any student who wants to pursue Nursing as a career. The teachers were fantastic and they really helped me understand the basic concepts of patient care so well. I am so proud to be a better person after studying at this Institute and making my professional career bright.",
      name: `Ms. Vaishnavi  Kirme`,
      info: "BSc Nursing 2020-2024",
    },
    {
      img: testimonial3,
      para: "I am incredibly proud to be an alumna of SRMMCON, Sawangi (Meghe), Wardha, where I received exceptional education and training in Mental Health Nursing. The strong academic curriculum, practical exposure, and guidance from dedicated faculty played a crucial role in shaping my expertise and confidence as a mental health professional.I am deeply grateful to my mentors and institution for their continuous support, which has helped me excel in my career and serve the healthcare community with compassion and dedication.",
      name: `Ms. Shrushti Gawande`,
      info: "MSc Nursing 2022-2024",
    },
  ],
  Parents: [
    {
      img: testimonial4,
      para: "I am writing to express my profound appreciation for SRM College of Nursing (SRMMCON) and the transformative experience it has provided for my son, [Darshan Sanjay Vidhate]. SRMMCON's dedicated faculty and exceptional curriculum have nurtured his passion for nursing, fostering both professional growth and personal development. The institution's emphasis on practical training and compassionate care has equipped him with the skills and values necessary to thrive in the healthcare industry. As a proud father, I wholeheartedly endorse SRMMCON for its commitment to excellence in nursing education.",
      name: "Mr. Sanjay Vidhate",
      info: "Parent of Mr. Darshan Vidhate\nBatch-2020",
    },
    {
      img: testimonial5,
      para: "My daughter Supriya, is currently doing Nursing from your prestigious University I'm very happy with her decision. SRMMCON is one of the most reputed universities in India and the quality that it provides in teaching is excellent. I regularly talk to my daughter and she always says that campus is good and we are learning every day. Seminars, conclaves and various value added activities are happening on regular basis. I'm delighted that teachers are making our children socially responsible and crafting them for future.",
      name: "Mrs. Priti Dhale",
      info: "Parents of Mr. Supriya Dhale 2021",
    },
  ],
};

function TestimonialsNursing() {
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

                <div className="max-w-xl font-[Arial] text-base">
                  {" "}
                  <p className="mb-4">{testimonial.para}</p>
                  <p className="font-[600] text-xm mt-1">{testimonial.name}</p>
                  <pre className="font-[Arial]  text-[#707070] leading-5 mt-2">
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
