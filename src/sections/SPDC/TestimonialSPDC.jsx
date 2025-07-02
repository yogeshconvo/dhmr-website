import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tabOptions = ["Students", "Parents", "Alumni", "Faculty"];
const testimonialsData = {
  Students: [
    {
      name: "Rohan Khetan ",
      year: "BDS | 2019",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "It is of immense pleasure to be a part of DMIHER University. I am very proud that it is one of the renowned NAAC-accredited multi-Disciplinary deemed to be University in India. It’s amazing to see how the university has excelled in deepening its academic offerings and research focus over a period and how it strives to sharpen the skills of budding doctors towards competency building. I believe our faculties are truly a prized asset of our institution. My institution goes the extra mile to provide its students with varied opportunities in academics, research and co- curricular making the journey at DMIHER a holistic treat!",
    },
    {
      name: "Rahul Joshi",
      year: "Student | 2021",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
      text: "The teachers and mentors are dedicated and also really helpful. DMIHER university is one of the renowned N.A.A.C. accredited deemed to be University in India. It gives me immense pleasure to say with pride that I have completed my B.P.T from this University.",
    },
  ],
  Parents: [
    {
      name: "Mrs. Alka Singh",
      year: "Parent of 2022 batch",
      img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=150&h=150&fit=crop&crop=face",
      text: "I am thankful to SPDC for giving my daughter the right exposure...",
    },
    {
      name: "Mr. Vijay Patil",
      year: "Parent of 2021 batch",
      img: "https://images.unsplash.com/photo-1589571894960-20bbe2828cdd?w=150&h=150&fit=crop&crop=face",
      text: "My son has become more confident and skilled after joining SPDC...",
    },
  ],
  Alumni: [
    {
      name: "Dr Nitin Bhola",
      year: "(PG 2005) MDS (OMFS), PhD...",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
      text: "The Director of Central India’s Largest Cancer Hospital and a passionate Maxillofacial Surgeon with a blend of fine surgical skills and knowledge. Dr. Nitin Bhola is a PG Alumnus of SPDC. He is a widely acclaimed teacher and a versatile surgeon.",
    },
    {
      name: "Dr. Abhishek More",
      year: "Alumni | 2019",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "A Fellow at the International Congress of oral implantologists Dr. Rikin Gogri, is a Fellow & Diplomate of the ISOI (INDIAN SOCIETY OF ORAL IMPLANTOLOGISTS). He is in charge of the National Study club of the Indian Society of Oral Implantologists and also is the head of Dental department, Maru Hospital, Parel.",
    },
  ],
  Faculty: [
    {
      name: "Prof. Meera Shinde",
      year: "Faculty | Department of Physics",
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
      text: "Teaching at SPDC is a fulfilling experience...",
    },
    {
      name: "Dr. Nikhil Bansode",
      year: "Faculty | Department of Chemistry",
      img: "https://images.unsplash.com/photo-1545992336-0e3c9e8c7558?w=150&h=150&fit=crop&crop=face",
      text: "SPDC fosters a culture of research and innovation...",
    },
  ],
};

const TestimonialSPDC = () => {
  const [activeTab, setActiveTab] = useState("Students");

  return (
    <div className="px-4 py-10 bg-[#F4F4F4]">
      <div className="md:w-full max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          TESTIMONIALS
        </h2>
        <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
          {tabOptions.map((tabName, index) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`px-3 py-1 text-sm sm:text-base transition-all ${
                activeTab === tabName
                  ? "underline text-black"
                  : "text-gray-500 hover:text-gray-700"
              } ${
                index < tabOptions.length - 1
                  ? "border-r border-gray-300 pr-4"
                  : ""
              }`}
            >
              {tabName}
            </button>
          ))}
        </div>

        <div className="mt-5">
          <Swiper
            style={{ paddingBottom: 80 }}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {testimonialsData[activeTab]?.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex-center gap-12 max-sm:flex-col text-center sm:text-left">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-36 h-36 object-cover rounded-full mx-auto sm:mx-0"
                  />
                  <div className="max-w-xl font-[Arial] text-base">
                    <p className="mb-4">{testimonial.text}</p>
                    <p className="font-semibold text-base mt-1">
                      {testimonial.name}
                    </p>
                    <p className="text-[#707070] mt-1">{testimonial.year}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSPDC;
