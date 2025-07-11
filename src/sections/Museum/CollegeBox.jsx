import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CollegeBox({ data }) {
  return (
    <div className={`${data.bg} py-16 w-full mt-2`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-3xl font-bold text-[#E1CD67] mb-6">
              {data.titleOne}
            </h2>
            <div className="text-sm  leading-relaxed ">{data.paraOne}</div>
          </div>

          {/* Right Image Swiper */}
          <div className="relative h-full">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              navigation={true}
              loop={true}
              className=" rounded-lg overflow-hidden"
              style={{
                height: "100%",
              }}
            >
              {data.imgs.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="aspect-video w-full h-full ">
                    <img
                      src={img}
                      alt={`Museum ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-16">
          <h3 className="text-3xl  font-bold text-[#E1CD67] mb-8">
            {data.titleTwo}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {data.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className={`  p-6 text-white ${
                  idx + 1 < data.highlights.length
                    ? "max-lg:border-b lg:border-r border-white/20 "
                    : "max-lg:border-b border-b-white/20"
                }`}
              >
                <div className="text-sm md:text-base leading-relaxed">
                  {highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeBox;
