import React, { useEffect, useState } from "react";
import Img1 from "../../assets/SHER/StudentLife/1.png";
import Img2 from "../../assets/SHER/StudentLife/2.png";
import Img3 from "../../assets/SHER/StudentLife/3.png";
import Img4 from "../../assets/SHER/StudentLife/4.png";
import Img5 from "../../assets/SHER/StudentLife/5.png";
import Img6 from "../../assets/SHER/StudentLife/6.png";

const allClubs = [
  { title: "Academic Club", image: Img1 },
  { title: "Arts Club", image: Img2 },
  { title: "Dance Club", image: Img3 },
  { title: "Music Club", image: Img4 },
  { title: "NSS", image: Img5 },
  { title: "Social Welfare", image: Img6 },
];

const StudentLife = () => {
  const [slide, setSlide] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(allClubs.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentItems = allClubs.slice(
    slide * itemsPerSlide,
    slide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="bg-[#e3f2fe] py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="mb-6">
        <div className="border-t-4 border-[#EE4B2B] w-15 mb-2"></div>
        <h2 className="text-3xl sm:text-4xl font-medium font-['Oswald'] text-[#707070] uppercase leading-snug">
          Student Life
        </h2>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {currentItems.map((club, index) => (
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
              <p className="text-white  text-xs bg-gradient-to-r from-black to-transparent  font-medium p-3">
                {club.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === slide ? "bg-[#EE4B2B]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default StudentLife;
