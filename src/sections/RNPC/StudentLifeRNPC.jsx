import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Img1 from "../../assets/rnpc/StudentLife/1.png";
import Img2 from "../../assets/rnpc/StudentLife/2.png";
import Img3 from "../../assets/rnpc/StudentLife/3.png";
import Img4 from "../../assets/rnpc/StudentLife/4.png";
import Img5 from "../../assets/rnpc/StudentLife/5.png";
import Img6 from "../../assets/rnpc/StudentLife/6.png";

const allClubs = [
  { title: "Canteen", image: Img1 },
  { title: "Computer Centre", image: Img2 }, // (British English: Centre / American: Center – choose as per your usage)
  { title: "Library", image: Img3 },
  { title: "Garba Night", image: Img4 },
  { title: "Ganesh Festival Celebration", image: Img5 },
  { title: "Sports", image: Img6 },
];
function StudentLifeRNPC() {
  // Split into slides of 3 images each
  const slides = [];
  for (let i = 0; i < allClubs.length; i += 3) {
    slides.push(allClubs.slice(i, i + 3));
  }

  return (
    <section className="bg-[#e3f2fe] py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="container">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-medium font-['Oswald'] text-[#707070] uppercase leading-snug">
            <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
            Student Life
          </h2>
          <div className="mt-4 text-[#707070] max-w-4xl text-xm">
            <p>
              At RNPC, student life is a blend of learning, creativity, and
              connection. A variety of clubs—Academic, Quiz, Literacy, Art,
              Dance, Music, Theatre, Yoga, and Sports—offer space to explore
              interests and express individuality. Socially driven groups like
              the NSS, Youth Red Club, and Social Welfare Club foster empathy
              and civic engagement. Cultural events, festivals, and performances
              keep the campus vibrant year-round. Our hostels aren’t just places
              to stay—they’re hubs of friendship, shared experiences, and
              personal growth. At RNPC, every student finds their rhythm—on
              campus, in community.
            </p>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="mt-6"
        >
          {slides.map((group, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {group.map((club, index) => (
                  <div
                    key={index}
                    className="relative h-64 sm:h-72 md:h-80 lg:h-80 rounded-xl overflow-hidden shadow-md bg-gray-200"
                  >
                    {club.image ? (
                      <img
                        src={club.image}
                        alt={club.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                        Image Placeholder
                      </div>
                    )}
                    <div className="absolute inset-0 bg-opacity-30 flex w-full items-end">
                      <p
                        className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-xm py-2 px-4"
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        {club.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default StudentLifeRNPC;
