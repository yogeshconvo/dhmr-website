import React, { useEffect, useState } from "react";
import Img1 from "../../assets/SAHS/student-life/1.png";
import Img2 from "../../assets/SAHS/student-life/2.png";
import Img3 from "../../assets/SAHS/student-life/3.png";
import Img4 from "../../assets/SAHS/student-life/4.jpg";
import Img5 from "../../assets/SAHS/student-life/5.jpg";
import Img6 from "../../assets/SAHS/student-life/6.jpg";

const allClubs = [
  { title: "", image: Img1 },
  { title: "", image: Img2 },
  { title: "", image: Img3 },
  { title: "", image: Img4 },
  { title: "", image: Img5 },
  { title: "", image: Img6 },
];

const StudentLifeSAHS = () => {
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
        <div className="border-t-4 border-[#EE4B2B] w-10 mb-2"></div>
        <h2 className="text-3xl sm:text-4xl font-medium font-['Oswald'] text-[#707070] uppercase leading-snug">
          Student Life <br /> at FEAT
        </h2>
        <div className="mt-4 text-[#707070] max-w-4xl">
          <p className="  text-xs">
            At SAHS, student life goes far beyond the classroom. A vibrant mix of
            academic clubs, cultural forums, and wellness initiatives ensures
            holistic growth and community engagement. From literary circles and
            quiz clubs to sports, music, art, and theatre—every student finds a
            space to express, lead, and thrive.
          </p>

          <p className="mt-6 mb-4  text-xs">
            Workshops, fests, intercollegiate competitions, and national celebrations
            like Bharatiya Bhasha Utsav or Self-Defence Drives add depth to campus
            life—instilling confidence, creativity, and collaboration. The National
            Service Scheme and Social Welfare Clubs foster a strong sense of
            responsibility and purpose, shaping not just healthcare professionals,
            but compassionate citizens.
          </p>

        </div>
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
            className={`w-3 h-3 rounded-full ${idx === slide ? "bg-[#EE4B2B]" : "bg-gray-300"
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default StudentLifeSAHS;
