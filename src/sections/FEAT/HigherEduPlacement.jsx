import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import your logo images
import hexaware from "../../assets/FEAT/HEP/1.png";
import paytm from "../../assets/FEAT/HEP/2.png";
import justdial from "../../assets/FEAT/HEP/3.png";
import hcl from "../../assets/FEAT/HEP/4.png";
import wipro from "../../assets/FEAT/HEP/5.png";
import bayone from "../../assets/FEAT/HEP/6.png";
import ge from "../../assets/FEAT/HEP/7.png";
import cap from "../../assets/FEAT/HEP/8.png";

export default function HigherEduPlacement() {
  const logos = [hexaware, paytm, justdial, hcl, wipro, bayone, ge, cap];

  return (
    <div className="bg-[#FAF8F0] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-[500] text-[ text-[#707070] font-oswald-medium mb-3">
          <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
          HIGHER EDUCATION AND PLACEMENT <br />
          (NATIONAL & INTERNATIONAL)
        </h2>
        <p className="text-md text-gray-500 font-[500] ">
          Some of our recruiters logos:
        </p>
        <p className="text-gray-600 mb-6">100% internships and placement</p>

        {/* Swiper Slider */}
        {/* <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={6}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex items-center py-10 justify-center">
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="max-h-20  max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={6}
          spaceBetween={40}
          loop={true}
          loopedSlides={logos.length}
          watchSlidesProgress={true}
          slidesPerGroup={Math.ceil(logos.length /4)}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex items-center py-10 justify-center">
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          slidesPerView={6}
          spaceBetween={20}
          slidesPerGroup={2} // 8 logos / 4 dots = 2 logos per group
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2, slidesPerGroup: 2 },
            640: { slidesPerView: 3, slidesPerGroup: 2 },
            1024: { slidesPerView: 5, slidesPerGroup: 2 },
            1280: { slidesPerView: 6, slidesPerGroup: 2 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex items-center py-12 justify-center">
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
