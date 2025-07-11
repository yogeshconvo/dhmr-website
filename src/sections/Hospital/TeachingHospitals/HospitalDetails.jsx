import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function HospitalDetails({ data }) {
  return (
    <div
      className="container
        grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
    >
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

      <div className="text-white space-y-6">
        <h2 className="text-2xl max-w-[400px] font-bold text-[#122E5E] mb-6">
          {data.about.title}
        </h2>
        <div className="text-sm  leading-relaxed text-[#58595B]">
          {data.about.desc}
        </div>
        <div className=" leading-relaxed text-[#58595B]">
          {data.about.features}
        </div>
      </div>
    </div>
  );
}

export default HospitalDetails;
