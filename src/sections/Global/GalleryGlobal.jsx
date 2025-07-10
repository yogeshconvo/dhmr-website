import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css/grid";

import Gallery1 from "../../assets/global/gallery/Gallery1.png";
import Gallery2 from "../../assets/global/gallery/Gallery2.png";
import Gallery3 from "../../assets/global/gallery/Gallery3.png";
import Gallery4 from "../../assets/global/gallery/Gallery1.png";
import Gallery5 from "../../assets/global/gallery/Gallery2.png";
import Gallery6 from "../../assets/global/gallery/Gallery3.png";

const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
];

function GalleryGlobal() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="container py-20 ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight ">
        <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
        GALLERY
      </h2>
      <div className="flex items-center justify-end mb-4 gap-2">
        <button
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          onClick={() => swiperRef && swiperRef.slidePrev()}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          onClick={() => swiperRef && swiperRef.slideNext()}
        >
          <ArrowRight size={18} />
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.dmiher.edu.in/photoGallery/2"
          className="text-red-500 text-xs font-semibold ml-2"
        >
          VIEW ALL
        </a>
      </div>
      <Swiper
        modules={[Pagination, Grid]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={24}
        onSwiper={setSwiperRef}
        className="rounded-xl gallery-global-swiper"
        style={{ paddingBottom: "3rem" }}
        grid={{
          rows: 3,
          fill: "row", // or "column" depending on your preference
        }}
        breakpoints={{
          320: { slidesPerView: 1, grid: { rows: 2 } },
          640: { slidesPerView: 2, grid: { rows: 2 } },
          1024: { slidesPerView: 3, grid: { rows: 3 } },
        }}
      >
        {galleryImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default GalleryGlobal;
