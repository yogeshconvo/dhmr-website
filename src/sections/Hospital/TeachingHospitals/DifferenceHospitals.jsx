import React from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation CSS

function DifferenceHospitals({ data }) {
  return (
    <div className="container py-16 flex gap-8">
      <div className="flex-1 text-[#58595B]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight ">
          <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
          {data.title}
        </h2>
        <p className="text-[#122E5E] text-xl">{data.subTitle}</p>
        {data.desc}
      </div>
      <div className="flex-2 max-w-2xl flex justify-center items-center">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={24}
          style={{ paddingBottom: "3rem" }}
        >
          {data.imgs.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img.src}
                alt=""
                className="object-cover rounded-xl w-full h-[50vh]"
              />
              <p className="absolute bottom-8 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-xm py-2 px-4">
                {img.caption}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DifferenceHospitals;
