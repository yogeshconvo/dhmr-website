import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image1 from "../../assets/FEAT/DepartmentGrid/1.png";
import Image2 from "../../assets/FEAT/DepartmentGrid/2.png";
import Image3 from "../../assets/FEAT/DepartmentGrid/3.png";
import Image4 from "../../assets/FEAT/DepartmentGrid/4.png";
import Image5 from "../../assets/FEAT/DepartmentGrid/5.png";
import Image6 from "../../assets/FEAT/DepartmentGrid/6.png";

const SAHSCard = ({ image, title }) => {
  const lines = title.split("\n");
  return (
    <div
      className="relative h-28 md:h-40 w-28 sm:w-44 md:w-52 lg:w-56 xl:w-60 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-opacity-60 flex items-center justify-center text-center px-2"
        style={{
          fontFamily: '"Helvetica Neue", sans-serif',
          fontStretch: "condensed",
        }}
      >
        <h3 className="text-white text-sm sm:text-base md:text-2xl font-light">
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
      </div>
    </div>
  );
};

const wardhaData = [
  { image: Image1, title: "Radiology" },
  { image: Image2, title: "Radiotherapy" },
  { image: Image3, title: "Pathology" },
  { image: Image4, title: "Medicine" },
  { image: Image5, title: "Respiratory Medicine" },
  { image: Image6, title: "Dermatology" },
  { image: Image5, title: "Physiology" },
  { image: Image6, title: "Cardiology" },
  { image: Image1, title: "Cardio Vascular Surgery" },
  { image: Image2, title: "Nephology" },
  { image: Image3, title: "Neurosciences" },
  { image: Image4, title: "Surgery I Anaesthesia" },
  { image: Image5, title: "Emergency Medicine" },
  { image: Image6, title: "Orthopedics" },
  { image: Image5, title: "Anesthesia" },
  { image: Image6, title: "Ophthalmology" },
  { image: Image2, title: "MGAC" },
  { image: Image3, title: "AHS" },
  { image: Image4, title: "Clinical Nutrition and Dietetics" },
  { image: Image5, title: "Psychology" },
];

const nagpurData = [
  { image: Image1, title: "Radiology" },
  { image: Image2, title: "Pathology" },
  { image: Image3, title: "Medicine" },
  { image: Image4, title: "Respiratory Medicine" },
  { image: Image5, title: "Dermatology" },
  { image: Image6, title: "Physiology" },
  { image: Image5, title: "Cardiology" },
  { image: Image1, title: "Cardio Vascular Surgery" },
  { image: Image2, title: "Nephology" },
  { image: Image3, title: "Neurosciences" },
  { image: Image4, title: "Surgery I Anaesthesia" },
  { image: Image6, title: "Nephology" },
  { image: Image5, title: "Surgery" },
  { image: Image6, title: "Anaesthesia" },
  { image: Image5, title: "Emergency Medicine" },
  { image: Image6, title: "Orthopaedics" },
  { image: Image1, title: "Anaesthesia" },
  { image: Image2, title: "Ophthalmology" },
  { image: Image3, title: "AHS" },
  { image: Image4, title: "Clinical Nutrition and Dietetics" },
  { image: Image5, title: "Psychology" },
];

const TABS = [
  { key: "wardha", label: "SAHS Wardha" },
  { key: "nagpur", label: "SAHS Wana" },
];

function Departments() {
  const [activeTab, setActiveTab] = useState("wardha");
  const data = activeTab === "nagpur" ? nagpurData : wardhaData;

  // 8 per slide (4x2 grid)
  const slides = [];
  for (let i = 0; i < data.length; i += 8) {
    slides.push(data.slice(i, i + 8));
  }

  return (
    <div className="py-15 bg-white container">
      <div className="max-w-7xl mx-auto space-y-6 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-[500] font-oswald-medium tracking-wider mb-10 text-[#707070]">
          <hr className="w-12 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
          OUR DEPARTMENTS
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 mt-20">
          <div className="inline-flex bg-[#f5f5f5] rounded-full shadow-sm border border-[#ececec] p-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-7 py-2 rounded-full text-lg font-bold transition-all duration-200
                  ${
                    activeTab === tab.key
                      ? "bg-[#F04E30] text-white shadow-md"
                      : "text-[#58595B] hover:bg-[#fbe6e1] hover:text-[#F04E30]"
                  }
                `}
                style={{
                  minWidth: 160,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="pb-10"
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            pagination={{ clickable: true }}
          >
            {slides.map((slideData, idx) => (
              <SwiperSlide key={idx}>
                <div className="space-y-6 px-5 max-w-7x cursor-grab">
                  {/* First Row - 4 boxes */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                    {slideData.slice(0, 4).map((item, index) => (
                      <SAHSCard
                        key={`row1-${index}`}
                        image={item.image}
                        title={item.title}
                      />
                    ))}
                  </div>
                  {/* Second Row - 4 boxes */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                    {slideData.slice(4, 8).map((item, index) => (
                      <SAHSCard
                        key={`row2-${index}`}
                        image={item.image}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Departments;
