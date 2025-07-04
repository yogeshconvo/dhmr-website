import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../../assets/JNMC/Departments/1.png";
import Image2 from "../../assets/JNMC/Departments/2.png";
import Image3 from "../../assets/JNMC/Departments/3.png";
import Image4 from "../../assets/JNMC/Departments/4.png";
import Image5 from "../../assets/JNMC/Departments/5.png";
import Image6 from "../../assets/JNMC/Departments/6.png";
import Image7 from "../../assets/JNMC/Departments/7.png";
import Image8 from "../../assets/JNMC/Departments/8.png";
import Image9 from "../../assets/JNMC/Departments/9.png";
import Image10 from "../../assets/JNMC/Departments/10.png";

import Image11 from "../../assets/JNMC/Departments/11.png";
import Image12 from "../../assets/JNMC/Departments/12.png";
import Image13 from "../../assets/JNMC/Departments/13.png";
import Image14 from "../../assets/JNMC/Departments/14.png";
import Image15 from "../../assets/JNMC/Departments/15.png";
import Image16 from "../../assets/JNMC/Departments/16.png";
import Image17 from "../../assets/JNMC/Departments/17.png";
import Image18 from "../../assets/JNMC/Departments/18.png";
import Image19 from "../../assets/JNMC/Departments/19.png";
import Image20 from "../../assets/JNMC/Departments/20.png";

import Image21 from "../../assets/JNMC/Departments/21.png";
import Image22 from "../../assets/JNMC/Departments/22.png";
import Image23 from "../../assets/JNMC/Departments/23.png";
import Image24 from "../../assets/JNMC/Departments/24.png";
import Image25 from "../../assets/JNMC/Departments/25.png";
import Image26 from "../../assets/JNMC/Departments/26.png";
import Image27 from "../../assets/JNMC/Departments/27.png";
import Image28 from "../../assets/JNMC/Departments/28.png";
import Image29 from "../../assets/JNMC/Departments/29.png";
import Image30 from "../../assets/JNMC/Departments/30.png";

const SAHSCard = ({ image, title }) => {
  const lines = title.split("\n");

  return (
    <div className="p-2">
      <div
        className="relative h-28 md:h-40  w-full rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center px-2">
          <h3 className="text-white text-sm sm:text-base md:text-2xl font-light font-oswald-medium">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Departments = () => {
  const departmentData = [
    { image: Image1, title: "Anatomy" },
    { image: Image2, title: "Physiology" },
    { image: Image3, title: "Biochemistry" },
    { image: Image4, title: "Pathology" },
    { image: Image5, title: "Microbiology" },
    { image: Image6, title: "Pharmacology" },
    { image: Image7, title: "Forensic Medicine & Toxicology" },
    { image: Image8, title: "Community Medicine" },
    { image: Image9, title: "General Surgery Anaesthesiology" },
    { image: Image10, title: "Medicine" },
    { image: Image11, title: "Obstetrics and Gynaecology" },
    { image: Image12, title: "Paediatrics" },
    { image: Image13, title: "Orthopaedics" },
    { image: Image14, title: "Ophthalmology" },
    { image: Image15, title: "ENT" },
    { image: Image16, title: "Dermatology" },
    { image: Image17, title: "Psychiatry" },
    { image: Image18, title: "Radio-Diagnosis" },
    { image: Image19, title: "Respiratory Medicine" },
    { image: Image20, title: "Emergency Medicine" },
    { image: Image12, title: "Critical Care" },
    { image: Image22, title: "Cardiology" },
    { image: Image23, title: "Nephrology Department" },
    { image: Image24, title: "Intervention Radiology" },
    { image: Image25, title: "Neurology" },
    { image: Image26, title: "Neurosurgery" },
    { image: Image27, title: "Urology" },
    { image: Image28, title: "Gastroenterology" },
    { image: Image29, title: "Neonatology" },
    { image: Image30, title: "Medical Oncology" },
  ];

  // Split into chunks of 8 (4x2 grid per slide)
  const slides = [];
  for (let i = 0; i < departmentData.length; i += 8) {
    slides.push(departmentData.slice(i, i + 8));
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => <div className="w-3 h-3 rounded-full bg-gray-300" />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="py-20 bg-white px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-[500] font-oswald-medium tracking-wider mb-10 text-[#707070]">
          <hr className="w-12 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
          OUR DEPARTMENTS
        </h2>

        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 px-4">
                {slide.map((item, idx) => (
                  <SAHSCard key={idx} image={item.image} title={item.title} />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Departments;
