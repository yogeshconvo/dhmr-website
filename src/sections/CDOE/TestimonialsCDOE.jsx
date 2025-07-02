import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Placeholder images – replace with real image imports
import testimonial1 from "../../assets/Testimonials/CDOE/picture1.png";
import testimonial2 from "../../assets/Testimonials/CDOE/picture2.png";
import testimonial3 from "../../assets/Testimonials/CDOE/picture3.jpg";
import testimonial4 from "../../assets/Testimonials/CDOE/picture4.png";

const tabs = ["Students", "Alumni"];

const data = {
  Students: [
    {
      img: testimonial1,
      para: `As an Online MBA student at DMIHER(DU) - Online, I've benefited immensely from the flexible, self-paced learning that fits my busy schedule. The industry-relevant curriculum and live sessions with experts have significantly enhanced my business acumen. The support from faculty and the comprehensive online resources have been outstanding, preparing me for real-world professional challenges.`,
      name: "Mridulesh Dubey",
      info: "MBA, July 2022",
    },
    {
      img: testimonial2,
      para: `As an Online BCA student at DMIHER(DU)-Online, I've found the program to be incredibly enriching. The programs have UGC and AICTE approval which is great for us foreign students. Regular live sessions and hands-on case studies have greatly improved my technical skills. The affordability and flexibility make it accessible, and the quality of education is also good.`,
      name: "Ahmad Zakari",
      info: "BCA, July 2022",
    },
    {
      img: testimonial3,
      para: `Hie, my name is Paxton Munthali, enrolled in MCA at DMIHER. I've benefited from great professors and experienced faculty with real-world insight. I've connected with a global network of students and professionals and gained deep practical and theoretical knowledge in Computer Applications. I highly recommend this program to anyone seeking to thrive in the digital age.`,
      name: "Paxton Munthali",
      info: "MCA, July 2022",
    },
  ],
  Alumni: [
    {
      img: testimonial4,
      para: `Enrolling in the MBA program at DMIHER (Batch: Jan 2021) has been a truly enriching experience. The well-structured curriculum, experienced faculty, and dynamic learning environment have significantly enhanced my knowledge and professional skills. The practical approach to management education helped me develop a strategic mindset essential for leadership roles.`,
      name: "Dr. Vipakshi Wasnik",
      info: "MBA, Jan 2021",
    },
  ],
};

function TestimonialsSectionCDOE() {
  const [tab, setTab] = useState("Students");

  return (
    <div className="px-4 py-10 bg-[#F4F4F4]">
      <div className="md:w-full max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          TESTIMONIALS
        </h2>

        <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
          {tabs.map((tabName, index) => (
            <button
              key={tabName}
              onClick={() => setTab(tabName)}
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

        <div className="">
          <Swiper
            style={{ paddingBottom: 80 }}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data[tab]?.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex-center gap-12 max-sm:flex-col">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-45 h-45 object-cover rounded-full"
                  />
                  <div className="max-w-xl font-[Arial] text-base">
                    <p className="mb-4">{testimonial.para}</p>
                    <p className="font-[600] text-xm mt-1">
                      {testimonial.name}
                    </p>
                    <pre className="font-[Arial] text-[#707070] leading-5 mt-2">
                      {testimonial.info}
                    </pre>
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

export default TestimonialsSectionCDOE;
