import React from "react";
import Img1 from "../../assets/SHER/Departments/1.png";
import Img2 from "../../assets/SHER/Departments/2.png";
import Img3 from "../../assets/SHER/Departments/3.png";
import Img4 from "../../assets/SHER/Departments/4.png";
import Img5 from "../../assets/SHER/Departments/5.png";

import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Curriculum Design and Mapping (including OBE)",
    img: Img1,
  },
  {
    title: "Academic Innovations",
    img: Img2,
    internal: true,
  },
  {
    title: "Skill Training",
    img: Img3,
    // url: "https://www.dmiher.edu.in/international-admission/",
  },
  {
    title: "Program Evaluation",
    img: Img4,
    // url: "https://www.dmiheronline.edu.in/",
  },
  {
    title: "Education Research",
    img: Img5,
  },
];

export default function ProgramsGrid() {
  const navigate = useNavigate();

  return (
    <>
      <div className="m-20">
        {" "}
        <div className="max-w-8xl mx-auto justify-center items-center bg-white px-4 py-10 sm:px-8 md:px-12">
          <div className=" mb-10 ">
            <hr className="w-16 sm:w-20 border-[#F04E30]  mb-2 border-t-4" />
            <h2 className="text-4xl font-[500] font-oswald-medium tracking-wider text-[#707070]">
              OUR DEPARTMENTS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative group w-full aspect-[3/2] sm:aspect-[4/3] md:aspect-[5/3] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => {
                  if (card.internal) {
                    navigate(card.url);
                  } else if (card.url) {
                    window.open(card.url, "_blank");
                  }
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-90 group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <h2 className="text-white text-lg sm:text-xl font-[300] text-center px-2 transform group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">
                    {card.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
