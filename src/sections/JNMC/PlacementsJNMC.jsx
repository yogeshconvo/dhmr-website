import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function PlacementsJNMC() {

    return (
        <div className="bg-[#FAF8F0] px-6 md:px-40 py-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-[500] text-[ text-[#707070] font-oswald-medium mb-3">
                    <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
                    HIGHER EDUCATION AND PLACEMENT <br />
                    (NATIONAL & INTERNATIONAL)
                </h2>
                <p className="text-sm text-gray-500 font-[400] w-150">
                    Jawaharlal Nehru Medical College (JNMC) shapes healthcare leaders who excel
                    in higher education and global healthcare careers. Backed by state-of-the-art
                    facilities and global collaborations, JNMC graduates become clinicians, educators,
                    and researchers at national and international centres of excellence.
                </p>
            </div>
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 font-oswald-medium">
                {/* Box 1 */}
                <div className="text-[#58595B] text-2xl font-[300] px-4 border-r-2 border-gray-300">
                    <span className="text-[#F04E30] font-bold">Propelling students</span>{" "}
                    into higher education and global healthcare careers.
                </div>

                {/* Box 2 */}
                <div className="text-[#58595B] text-2xl font-[300] px-4 border-r-2 border-gray-300">
                    <span className="text-[#269BFF] font-bold">80% MBBS students placed</span>,{" "}
                    28% advancing into higher studies.
                </div>

                {/* Box 3 */}
                <div className="text-[#58595B] text-2xl font-[300] px-4">
                    <span className="text-[#707070]">100% MD/MS placements - </span>
                    <span className="text-[#102B64] font-bold">
                        14% selection into super-specialty courses, PhDs, postdoctoral research, and fellowships.
                    </span>
                </div>
            </div>

        </div>
    );
}
