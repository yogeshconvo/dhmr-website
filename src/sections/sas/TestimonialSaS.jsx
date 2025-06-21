import React, { useState } from "react";
import student1 from "../../assets/sas/testimonials/student1.png";
import student2 from "../../assets/sas/testimonials/student2.png";
import parent1 from "../../assets/sas/testimonials/parent1.png";
import faculty1 from "../../assets/sas/testimonials/faculty1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tabs = ["Students", "Parents", "Faculty"];

const data = {
  Students: [
    {
      img: student1,
      para: "SAS gave me the confidence and skills to pursue my dream career in AI. The hands-on projects and global exposure were truly life-changing!",
      info: `Aarav Sharma\nB.Sc. Data Science\nBatch 2024`,
    },
    {
      img: student2,
      para: "The placement support and industry tie-ups at SAS are outstanding. I landed a paid internship at Max Healthcare and secured a full-time job before graduation.",
      info: `Priya Deshmukh\nMBA Healthcare Management\nBatch 2023`,
    },
  ],
  Parents: [
    {
      img: parent1,
      para: "I am grateful to SAS for nurturing my son’s talents and providing a safe, inspiring environment. The faculty is supportive and the campus is vibrant.",
      info: `Mrs. Sunita Patil\nParent of Rohan Patil (B.Sc. IT 2025)`,
    },
    {
      img: parent1,
      para: "I am grateful to SAS for nurturing my son’s talents and providing a safe, inspiring environment. The faculty is supportive and the campus is vibrant.",
      info: `Mrs. Sunita Patil\nParent of Rohan Patil (B.Sc. IT 2025)`,
    },
  ],
  Faculty: [
    {
      img: faculty1,
      para: "At SAS, we focus on holistic student development—academics, research, and life skills. It’s rewarding to see our students excel globally.",
      info: `Dr. Meenal Joshi\nFaculty, Allied Sciences`,
    },
    {
      img: faculty1,
      para: "At SAS, we focus on holistic student development—academics, research, and life skills. It’s rewarding to see our students excel globally.",
      info: `Dr. Meenal Joshi\nFaculty, Allied Sciences`,
    },
    {
      img: faculty1,
      para: "At SAS, we focus on holistic student development—academics, research, and life skills. It’s rewarding to see our students excel globally.",
      info: `Dr. Meenal Joshi\nFaculty, Allied Sciences`,
    },
  ],
};

function TestimonialSaS() {
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
                textDecoration: tabItem === tab ? "underline" : undefined,
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
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
                <div>
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

export default TestimonialSaS;
