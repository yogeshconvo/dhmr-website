import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Img1 from "../../assets/sas/studentlife/1.jpg";
import Img2 from "../../assets/sas/studentlife/2.jpg";
import Img3 from "../../assets/sas/studentlife/3.jpg";
import Img4 from "../../assets/sas/studentlife/4.jpg";
import Img5 from "../../assets/sas/studentlife/5.jpg";
import Img6 from "../../assets/sas/studentlife/6.jpg";
import Img7 from "../../assets/sas/studentlife/7.jpeg";
import Img8 from "../../assets/sas/studentlife/8.jpg";
// Data array
const academicFacilities = [
  { title: "Cleanliness Drive", image: Img1 },
  { title: "Cultural Events", image: Img2 },
  { title: "Entrepreneurship Development", image: Img3 },
  { title: "Fashion Show", image: Img4 },
  { title: "IGNITRA 3.0", image: Img5 },
  { title: "Institutional Forum for Women", image: Img6 },
  { title: "Outdoor Learning Spaces", image: Img7 },
  { title: "Volleyball", image: Img8 },
];

// Header
const SectionHeader = ({ title }) => (
  <div className="mb-6">
    <div className="h-1 w-20 bg-red-500 mt-1" />
    <h2
      className="text-2xl sm:text-3xl mt-3 text-[#707070] uppercase"
      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
    >
      {title}
    </h2>
  </div>
);

// Main Component
function StudentLifeSAS() {
  const sliderRef = useRef(null);

  const chunkedSlides = [];
  for (let i = 0; i < academicFacilities.length; i += 6) {
    chunkedSlides.push(academicFacilities.slice(i, i + 6));
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-50 px-4 py-10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header + Arrows */}
        <div className="flex justify-between items-center mb-4">
          <SectionHeader title="STUDENT LIFE" />
          <div className="flex gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="border p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="border p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {chunkedSlides.map((slideGroup, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {slideGroup.map((item, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-md"
                    />
                    <p
                      className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-xm py-2 px-4"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default StudentLifeSAS;
