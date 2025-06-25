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


export default function PlacementSAHS() {
    const logos = [hexaware, paytm, justdial, hcl, wipro, bayone, ge];

    return (
        <div className="bg-[#FAF8F0] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-[ text-[#707070] font-oswald-medium mb-3">
                    <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
                    PLACEMENT <br />
                    (NATIONAL & INTERNATIONAL)
                </h2>

                <p className="text-gray-600 mb-5">
                    SAHS graduates are recruited by leading healthcare institutions in
                    India and abroad, with prominent international placements through
                    NHS trusts in the UK. Backed by hands-on clinical training and industry-aligned
                    programs, our students are prepared for high-impact roles from day one.
                </p>
                <p className="text-md text-gray-500 mb-7">
                    The median package for international placements currently stands at ₹35,00,000,
                    reflecting the global value of a DMIHER Allied Health Sciences education.
                </p>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={6}
                    spaceBetween={30}
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
                            <div className="w-full h-full flex items-center justify-center">
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