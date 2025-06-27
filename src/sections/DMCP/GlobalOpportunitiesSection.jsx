import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function GlobalOpportunitiesSectionDMCP() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl font-[Arial] mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-oswald-medium sm:text-4xl font-[500] text-[#707070] mb-4 uppercase relative">
            <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
            Global Opportunities <br /> at DMCP
          </h2>
          <p className="text-gray-600 text-xm max-w-5xl tracking-normal leading-relaxed">
            <b>Global Exposure. World-Class Edge.</b> <br />
            DMCP opens global doors through prestigious joint degree programs,
            internationally certified Coursera pathways, and mentorship by
            adjunct faculty from leading global institutions. From the
            University of Pennsylvania to Imperial College London, our students
            gain future-ready skills and global credentials—ensuring they don’t
            just learn pharmacy, they lead it on a global stage.
          </p>
        </div>

        {/* Swiper Slider */}
  
        {/* Optional Static Image */}
      
      </div>
    </section>
  );
}
