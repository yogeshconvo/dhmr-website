import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Images (shared & individual)
import AcedemicFacilitesImg1 from "../../assets/Nursing/studentLife/facilitiesimg1.png";
import AcedemicFacilitesImg2 from "../../assets/Nursing/studentLife/facilitiesimg2.png";
import AcedemicFacilitesImg3 from "../../assets/Nursing/studentLife/facilitiesimg3.png";
import AcedemicFacilitesImg4 from "../../assets/Nursing/studentLife/facilitiesimg4.png";
import AcedemicFacilitesImg5 from "../../assets/Nursing/studentLife/facilitiesimg5.png";
import AcedemicFacilitesImg6 from "../../assets/Nursing/studentLife/facilitiesimg6.png";
import AcedemicFacilitesImg7 from "../../assets/Nursing/studentLife/facilitiesimg7.png";
import AcedemicFacilitesImg8 from "../../assets/Nursing/studentLife/facilitiesimg8.png";
import AcedemicFacilitesImg9 from "../../assets/Nursing/studentLife/facilitiesimg9.png";
import AcedemicFacilitesImg10 from "../../assets/Nursing/studentLife/facilitiesimg10.png";
import AcedemicFacilitesImg12 from "../../assets/Nursing/studentLife/facilitiesimg12.png";

import CoCurricularImg1 from "../../assets/Nursing/Nursing/student Life/co-curricular activities.jpg";
import CoCurricularImg2 from "../../assets/Nursing/Nursing/student Life/Cristimas Day.jpg";
import CoCurricularImg3 from "../../assets/Nursing/Nursing/student Life/lamp lighting.jpg";
import CoCurricularImg4 from "../../assets/Nursing/Nursing/student Life/research.jpg";
import CoCurricularImg5 from "../../assets/Nursing/Nursing/student Life/Sports.jpg";
import CoCurricularImg6 from "../../assets/Nursing/Nursing/student Life/Walkathon.jpg";
import CoCurricularImg7 from "../../assets/Nursing/Nursing/student Life/Yoga Day.jpg";

// Section header component
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

// Main component
function StudentLifeNursing({ collegeTabNumber }) {
  const sliderRef = useRef(null);

  // Dynamic content based on college tab number
  const contentByCollege = {
    1: [
      { title: "Co-Curricular Activities", image: CoCurricularImg1 },
      { title: "Christmas Day", image: CoCurricularImg2 },
      { title: "Lamp Lighting", image: CoCurricularImg3 },
      { title: "Research", image: CoCurricularImg4 },
      { title: "Sports", image: CoCurricularImg5 },
      { title: "Walkathon", image: CoCurricularImg6 },
      { title: "Yoga Day", image: CoCurricularImg7 },
      {
        title: "School of Experiential Learning",
        image: AcedemicFacilitesImg9,
      },
      { title: "Museum", image: AcedemicFacilitesImg10 },
      { title: "Clinical Training", image: AcedemicFacilitesImg12 },
    ],
    2: [
      { title: "Hi-Tech Classes", image: AcedemicFacilitesImg3 },
      { title: "Brainstorming Rooms", image: AcedemicFacilitesImg1 },
      { title: "Herbal Garden", image: AcedemicFacilitesImg2 },
      { title: "Animal House", image: AcedemicFacilitesImg4 },
      { title: "Lecture Halls", image: AcedemicFacilitesImg5 },
      { title: "Computer Labs", image: AcedemicFacilitesImg6 },
      { title: "Library & Digital Library", image: AcedemicFacilitesImg7 },
      { title: "Reading Rooms", image: AcedemicFacilitesImg8 },
    ],
    3: [
      { title: "Yoga Day", image: CoCurricularImg7 },
      { title: "Christmas Day", image: CoCurricularImg2 },
      { title: "Research Activities", image: CoCurricularImg4 },
      { title: "Museum", image: AcedemicFacilitesImg10 },
      { title: "Computer Labs", image: AcedemicFacilitesImg6 },
      { title: "Lecture Halls", image: AcedemicFacilitesImg5 },
    ],
  };

  // Fallback if no match
  const academicFacilities = contentByCollege[collegeTabNumber] || [];

  // Break into groups of 9
  const chunkedSlides = [];
  for (let i = 0; i < academicFacilities.length; i += 9) {
    chunkedSlides.push(academicFacilities.slice(i, i + 9));
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
                      className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-sm py-2 px-4"
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

export default StudentLifeNursing;
