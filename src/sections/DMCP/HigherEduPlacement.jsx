import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Img1 from "../../assets/DMCP/HE/1.png";
import Img2 from "../../assets/DMCP/HE/2.jpg";
import Img3 from "../../assets/DMCP/HE/3.png";
import Img4 from "../../assets/DMCP/HE/4.png";
import Img5 from "../../assets/DMCP/HE/5.png";
import Img6 from "../../assets/DMCP/HE/6.png";
import Img7 from "../../assets/DMCP/HE/7.png";
import Img8 from "../../assets/DMCP/Placement/1.png";
import Img9 from "../../assets/DMCP/Placement/2.png";
import Img10 from "../../assets/DMCP/Placement/3.png";
import Img11 from "../../assets/DMCP/Placement/4.png";
import Img12 from "../../assets/DMCP/Placement/5.png";
import Img13 from "../../assets/DMCP/Placement/6.png";
import Img14 from "../../assets/DMCP/Placement/7.png";
import Img15 from "../../assets/DMCP/Placement/8.png";
import Img16 from "../../assets/DMCP/Placement/9.png";
import Img17 from "../../assets/DMCP/Placement/10.png";
import Img18 from "../../assets/DMCP/Placement/11.png";
import Img19 from "../../assets/DMCP/Placement/12.png";
import Img20 from "../../assets/DMCP/Placement/13.png";
import Img21 from "../../assets/DMCP/Placement/14.png";

const logos = [
  { src: Img1, alt: "" },
  { src: Img2, alt: "" },
  { src: Img3, alt: "" },
  { src: Img4, alt: "" },
  { src: Img5, alt: "" },
  { src: Img6, alt: "" },
  { src: Img7, alt: "" },
  { src: Img16, alt: "" },
];

const logosForTab = [
  { src: Img8, alt: "" },
  { src: Img9, alt: "" },
  { src: Img10, alt: "" },
  { src: Img11, alt: "" },
  { src: Img12, alt: "" },
  { src: Img13, alt: "" },
  { src: Img14, alt: "" },
  { src: Img15, alt: "" },
  { src: Img16, alt: "" },
  { src: Img17, alt: "" },
  { src: Img18, alt: "" },
  { src: Img19, alt: "" },
  { src: Img20, alt: "" },
  { src: Img21, alt: "" },
];

const autoplayConfig = {
  delay: 2000,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,
};

export default function HigherEduPlacementDMCP() {
  return (
    <div className="bg-[#FAF8F0] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-[500] text-[#707070] font-oswald-medium mb-3">
          <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
          HIGHER EDUCATION AND PLACEMENT
          <br />
          (NATIONAL & INTERNATIONAL)
        </h2>
        <p className="text-md text-gray-500 font-[500]">
          From Campus to Career:
        </p>
        <p className="text-gray-600 mb-6">
          National & Global Pathways <br /> DMCP graduates are placed in some of
          the most respected names in the pharmaceutical and healthcare
          industries— ranging from Alembic, Macleods, and GSK to IQVIA, TCS, and
          Meditab. Our strong placement record and deep industry connect ensure
          our students step into roles across manufacturing, research, clinical
          practice, and healthcare tech. PG students benefit from one-semester
          internship opportunities with top companies like Dr. Reddy’s, Lupin,
          Mylan, Sun Pharma, and more. With a growing reputation and a robust
          recruiter network, our students are shaping careers not just in India,
          but on global platforms.
        </p>

        <p className="text-2xl uppercase font-oswald-medium tracking-wide mt-15 text-[#707070] font-[500]">
          Our Prominent Recruiters :
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={autoplayConfig}
          breakpoints={{
            320: { slidesPerView: 2, slidesPerGroup: 2 },
            640: { slidesPerView: 3, slidesPerGroup: 2 },
            1024: { slidesPerView: 5, slidesPerGroup: 2 },
            1280: { slidesPerView: 6, slidesPerGroup: 2 },
          }}
          spaceBetween={20}
        >
          {logosForTab.map((logo, index) => (
            <SwiperSlide key={`tab-${index}`}>
              <div className="flex items-center py-20 justify-center h-[100px]">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[60px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={autoplayConfig}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2, slidesPerGroup: 2 },
            640: { slidesPerView: 3, slidesPerGroup: 2 },
            1024: { slidesPerView: 5, slidesPerGroup: 2 },
            1280: { slidesPerView: 6, slidesPerGroup: 2 },
          }}
          spaceBetween={20}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={`logo-${index}`}>
              <div className="flex items-center py-20 justify-center h-[100px]">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[60px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
