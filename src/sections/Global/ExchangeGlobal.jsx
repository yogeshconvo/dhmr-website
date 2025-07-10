import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Placeholder images from gallery folder
import Gallery1 from "../../assets/global/exchange/Gallery1.png";
import Gallery2 from "../../assets/global/exchange/Gallery2.png";
import Gallery3 from "../../assets/global/exchange/Gallery3.png";
import Gallery4 from "../../assets/global/exchange/Gallery1.png";
import Gallery5 from "../../assets/global/exchange/Gallery2.png";
import Gallery6 from "../../assets/global/exchange/Gallery3.png";

const galleryImages = [
  {
    src: Gallery1,
    title: "Imperial College, London",
  },
  {
    src: Gallery2,
    title: "NUS, Singapore",
  },
  {
    src: Gallery3,
    title: "UCSI, Malaysia",
  },
  {
    src: Gallery4,
    title: "Imperial College, London",
  },
  {
    src: Gallery5,
    title: "Imperial College, London",
  },
  {
    src: Gallery6,
    title: "Imperial College, London",
  },
];

function ExchangeGlobal() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="container py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-8 font-oswald-medium font-[500] tracking-tight leading-tight ">
        <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
        STUDENT EXCHANGE
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={24}
        onSwiper={setSwiperRef}
        className="rounded-xl "
        style={{ paddingBottom: "3rem" }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {galleryImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img.src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
            <p className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-xm py-2 px-4">
              {img.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ExchangeGlobal;
