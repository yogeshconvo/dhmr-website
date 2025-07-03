import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// International NHS photos (replace with your actual images)
import nhs1 from "../../assets/sahs/placements/nhs1.png";
import nhs2 from "../../assets/sahs/placements/nhs2.png";
import nhs3 from "../../assets/sahs/placements/nhs3.png";

// National placement logos (replace with your actual images)
import logo1 from "../../assets/sahs/placements/nat1.png";
import logo2 from "../../assets/sahs/placements/nat2.png";
import logo3 from "../../assets/sahs/placements/nat3.png";
import logo4 from "../../assets/sahs/placements/nat4.png";
import logo5 from "../../assets/sahs/placements/nat5.png";
import logo6 from "../../assets/sahs/placements/nat6.png";
import logo7 from "../../assets/sahs/placements/nat7.png";
import logo8 from "../../assets/sahs/placements/nat8.png";

export default function PlacementsSAHS() {
  const international = [nhs1, nhs2, nhs3];
  const national = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <section className="bg-[#FAF8F0] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-oswald-medium text-[#707070] mb-6">
          <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
          Placements – National and International
        </h2>
        <p className="text-gray-600 mb-4 max-w-3xl">
          SAHS graduates are recruited by leading healthcare institutions in
          India and abroad, with prominent international placements through NHS
          trusts in the UK. Backed by hands-on clinical training and
          industry-aligned programs, our students are prepared for high-impact
          roles from day one.
        </p>
        <p className="text-md text-gray-500 mb-10">
          The median package for international placements currently stands at{" "}
          <span className="font-bold text-[#F04E30]">₹35,00,000</span>,
          reflecting the global value of a DMIHER Allied Health Sciences
          education.
        </p>

        {/* International Placements */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#269BFF] mb-6">
            International Placements
          </h3>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {international.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-48 sm:h-56 md:h-60 flex items-center justify-center bg-white rounded-lg shadow">
                  <img
                    src={img}
                    alt={`NHS Placement ${idx + 1}`}
                    className="max-h-40 sm:max-h-48 md:max-h-56 max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* National Placements */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#122E5E] mb-6">
            National Placements
          </h3>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {national.map((logo, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-28 sm:h-36 md:h-40 flex items-center justify-center bg-white rounded-lg shadow cursor-grab">
                  <img
                    src={logo}
                    alt={`Placement Logo ${idx + 1}`}
                    className="max-h-20 sm:max-h-28 md:max-h-32 max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
