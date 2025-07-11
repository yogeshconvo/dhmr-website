import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    content:
      "An excellent setup. Have never seen such a museum. Have thought of every possible thing. Kudos to all as the college for this.",
    name: "Dr. Sunjeev Misra",
    designation: "Vice Chancellor",
    organization: "Atal Bihari Vajpayee Medical University, UP, Lucknow",
  },
  {
    content:
      "Very Good Museum. It maintained well and very informative to students. I congratulate to the persons who have done it and management for good support.",
    name: "Dr. Bhagwat Karad",
    designation: "MBBS, MS, MCh, FCPS (Ped Surgeon), MOS",
    organization: "Finance, Govt. of India",
  },
  {
    content:
      "Students and seekers of knowledge are lucky to have this amazing faculty for immersive learning. Compliments to the leadership and the team for this fantastic museum.",
    name: "Lt. Gen M kamalkar (Retd.)",
    designation: "VC MUHS",
    organization: "",
  },
  // Duplicate testimonials to make swiper work smoothly
  {
    content:
      "An excellent setup. Have never seen such a museum. Have thought of every possible thing. Kudos to all as the college for this.",
    name: "Dr. Sunjeev Misra",
    designation: "Vice Chancellor",
    organization: "Atal Bihari Vajpayee Medical University, UP, Lucknow",
  },
  {
    content:
      "Very Good Museum. It maintained well and very informative to students. I congratulate to the persons who have done it and management for good support.",
    name: "Dr. Bhagwat Karad",
    designation: "MBBS, MS, MCh, FCPS (Ped Surgeon), MOS",
    organization: "Finance, Govt. of India",
  },
  {
    content:
      "Students and seekers of knowledge are lucky to have this amazing faculty for immersive learning. Compliments to the leadership and the team for this fantastic museum.",
    name: "Lt. Gen M kamalkar (Retd.)",
    designation: "VC MUHS",
    organization: "",
  },
];

function TestimonialsMuseum() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-12 font-oswald-medium font-[500] tracking-tight leading-tight">
        <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
        TESTIMONIALS
      </h2>

      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          style={{ paddingBottom: "3rem" }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between min-h-[280px]">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
                    {testimonial.content}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-[#122e5e] text-base md:text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium mb-1">
                    {testimonial.designation}
                  </p>
                  {testimonial.organization && (
                    <p className="text-gray-400 text-xs">
                      {testimonial.organization}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsMuseum;
