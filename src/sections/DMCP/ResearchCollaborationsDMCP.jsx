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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
            <h3 className="text-xl font-bold text-[#e8502e] font-oswald-medium mb-2">
              Thrust Areas:
            </h3>
            <p className="text-sm text-[#58595B] leading-relaxed font-[Arial]">
              Formulation and development including NDDS, Herbal drug
              development, Nanocrystalline Cellulose in drug delivery,
              Microencapsulation, 3D bioprinting-based delivery system for
              management of skin diseases & cancer, Toxicity studies of various
              formulations, Neuropharmacology: Antidepressant, Anxiolytics,
              Memory enhancers…{" "}
              <a
                href="https://www.dmiher.edu.in/about-research-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0055FF] hover:underline"
              >
                Know More
              </a>
            </p>
          </div>
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden sm:grid grid-cols-3 py-8 gap-4">
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col  items-center text-center px-4 ${
                index % 3 !== 2 ? "border-r border-gray-300" : ""
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-24 h-24 mb-2"
              />
              <p className="text-[22px] font-oswald-medium text-orange-600">
                {item.value}
              </p>
              <p className="text-[#58595B] text-lg font-oswald-light">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="block sm:hidden mt-10">
        <Slider {...mobileSliderSettings}>
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-20 h-20 mb-2"
              />
              <p className="text-xl font-oswald-medium text-orange-600">
                {item.value}
              </p>
              <p className="text-[#58595B] text-base font-oswald-light">
                {item.label}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResearchCollaborationsDMCP;
