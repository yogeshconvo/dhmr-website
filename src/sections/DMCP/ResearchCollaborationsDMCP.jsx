import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import researchicon1 from "../../assets/FEAT/RC/1.svg";
import researchicon2 from "../../assets/FEAT/RC/2.svg";
import researchicon3 from "../../assets/FEAT/RC/3.svg";
import researchicon4 from "../../assets/FEAT/RC/4.svg";

const ResearchCollaborationsDMCP = () => {
  const mobileSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const researchData = [
    {
      icon: researchicon1,
      label: "Patents",
      value: "11",
    },
    {
      icon: researchicon2,
      label: "Copyrights",
      value: "75",
    },
    {
      icon: researchicon3,
      label: "Publications",
      value: "224 by Faculty | 258 by Students",
    },
    {
      icon: researchicon4,
      label: "Conference Presentations",
      value: "18 by Faculties | 54 by Students",
    },
    {
      icon: researchicon1,
      label: "Books Published",
      value: "9 Books | 38 Book Chapters",
    },
    {
      icon: researchicon2,
      label: "Grants Received",
      value: "₹522L Funded | ₹25L Consultancy",
    },
  ];

  return (
    <div className="px-10 py-20 bg-[rgba(18,46,94,0.05)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[36%_60%] gap-6">
        {/* Left Side */}
        <div className="max-w-full">
          <div className="h-1 w-16 bg-[#e8502e] mb-3"></div>
          <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] uppercase font-oswald-medium leading-tight">
            Research & <br /> Collaborations
          </h2>
          <p className="mt-3 text-xm text-[#707070] font-[Arial]">
            <span className="font-bold text-[#707070]">
              From Inception to Impact: Accelerating Breakthroughs Since 2019
            </span>
            <br />
            At DMCP, research is integral to academic excellence and societal
            impact. With active participation from both faculty and students,
            our work spans formulation science, herbal and nano-based drug
            delivery systems, and neuropharmacology. Supported by significant
            grants and industry collaborations, we foster a culture of inquiry,
            innovation, and translational research.
          </p>

          {/* Thrust Areas */}
          <div className="mt-6">
            <h3 className="text-xl font-[600] text-[#e8502e] font-oswald-medium mb-2">
              Thrust Areas:
            </h3>
            <p className="text-sm text-[#58595B] leading-relaxed font-[Arial]">
              Formulation and development including NDDS, Herbal drug
              development, Nanocrystalline Cellulose in drug delivery,
              Microencapsulation, 3D bioprinting-based delivery system for
              management of skin diseases & cancer, Toxicity studies of various
              formulations {""}
            </p>
              <button
                className="mt-2 mb-4 px-4 py-1 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]"
                onClick={() =>
                  window.open(
                    "https://www.dmiher.edu.in/about-research-1",
                    "_blank"
                  )
                }
              >
                Know More
              </button>
          </div>
        </div>

        {/* Right Side - Desktop View */}
        <div className="hidden sm:grid grid-cols-3 py-8 gap-x-4 gap-y-14">
          {researchData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-4 ${
                index % 3 !== 2 ? "border-r border-gray-300" : ""
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-24 h-24 mb-2"
              />
              <p className="  text-xl font-semibold  text-orange-600">
                {item.value}
              </p>
              <p className="text-[#58595B] text-lg font-semibold  ">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="block sm:hidden mt-10 w-full px-2 pb-6">
        <Slider {...mobileSliderSettings}>
          {researchData.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-col items-center text-center px-4 min-h-[200px]">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-25 h-25 mb-2"
                />
                <p className=" text-orange-600  text-xl font-semibold">
                  {item.value}
                </p>
                <p className="text-[#58595B] text-lg font-semibold ">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResearchCollaborationsDMCP;
