import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CE1Img from "../../assets/About/Gallery/AboutGallery/Campus Life/1.webp";
import CE2Img from "../../assets/About/Gallery/AboutGallery/Campus Life/2.webp";
import CE3Img from "../../assets/About/Gallery/AboutGallery/Campus Life/3.webp";
import CE4Img from "../../assets/About/Gallery/AboutGallery/Campus Life/4.webp";
import CE5Img from "../../assets/About/Gallery/AboutGallery/Campus Life/5.webp";
import CE6Img from "../../assets/About/Gallery/AboutGallery/Campus Life/6.png";
import CE7Img from "../../assets/About/Gallery/AboutGallery/Campus Life/7.webp";
import CE8Img from "../../assets/About/Gallery/AboutGallery/Campus Life/8.webp";
import CE9Img from "../../assets/About/Gallery/AboutGallery/Campus Life/9.webp";

import ResearchImg1 from "../../assets/About/Gallery/AboutGallery/Research/1.webp";
import ResearchImg2 from "../../assets/About/Gallery/AboutGallery/Research/2.webp";
import ResearchImg3 from "../../assets/About/Gallery/AboutGallery/Research/3.webp";
import ResearchImg4 from "../../assets/About/Gallery/AboutGallery/Research/4.webp";
import ResearchImg5 from "../../assets/About/Gallery/AboutGallery/Research/5.webp";
import ResearchImg6 from "../../assets/About/Gallery/AboutGallery/Research/6.webp";
import ResearchImg7 from "../../assets/About/Gallery/AboutGallery/Research/7.webp";
import ResearchImg8 from "../../assets/About/Gallery/AboutGallery/Research/8.webp";
import ResearchImg9 from "../../assets/About/Gallery/AboutGallery/Research/9.webp";

import SportsImg1 from "../../assets/About/Gallery/AboutGallery/University Events/1.webp";
import SportsImg2 from "../../assets/About/Gallery/AboutGallery/University Events/2.webp";
import SportsImg3 from "../../assets/About/Gallery/AboutGallery/University Events/3.webp";
import SportsImg4 from "../../assets/About/Gallery/AboutGallery/University Events/4.webp";
import SportsImg5 from "../../assets/About/Gallery/AboutGallery/University Events/5.webp";
import SportsImg6 from "../../assets/About/Gallery/AboutGallery/University Events/6.webp";
import SportsImg7 from "../../assets/About/Gallery/AboutGallery/University Events/7.webp";
import SportsImg8 from "../../assets/About/Gallery/AboutGallery/University Events/8.webp";
import SportsImg9 from "../../assets/About/Gallery/AboutGallery/University Events/9.webp";

const imageData = {
  university: [
    CE1Img,
    CE2Img,
    CE3Img,
    CE4Img,
    CE5Img,
    CE6Img,
    CE7Img,
    CE8Img,
    CE9Img,
  ],
  research: [
    ResearchImg1,
    ResearchImg2,
    ResearchImg3,
    ResearchImg4,
    ResearchImg5,
    ResearchImg6,
    ResearchImg7,
    ResearchImg8,
    ResearchImg9,
  ],
  campus: [
    SportsImg1,
    SportsImg2,
    SportsImg3,
    SportsImg4,
    SportsImg5,
    SportsImg6,
    SportsImg7,
    SportsImg8,
    SportsImg9,
  ],
};

const sectionOrder = ["campus", "research", "university"];

export default function Gallery() {
  const [activeSection, setActiveSection] = useState("campus");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const visibleImages = imageData[activeSection];

  return (
    <div className="bg-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-4">
          <div>
            <hr className="w-16 sm:w-20 border-[#F04E30]  mb-2 border-t-4" />
            <h2 className="text-4xl font-[500] font-oswald-medium tracking-wider text-[#707070]">
              GALLERY
            </h2>
          </div>
          {/* <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                document.querySelector(".gallery-slider").slickPrev()
              }
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() =>
                document.querySelector(".gallery-slider").slickNext()
              }
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
            >
              <ArrowRight size={20} />
            </button>
            <button className="text-red-500 font-semibold ml-2">
              VIEW ALL
            </button>
          </div> */}
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center space-x-6 text-sm mb-6">
          {sectionOrder.map((section, idx) => (
            <React.Fragment key={section}>
              <button
                className={`${
                  activeSection === section
                    ? "text-red-500 font-semibold underline"
                    : "text-gray-500"
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {section === "university"
                  ? "University events"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              {idx < sectionOrder.length - 1 && (
                <div className="text-gray-500">|</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Gallery Grid 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleImages.slice(0, 9).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover rounded"
            />
          ))}
        </div>
        {/* Dots below grid */}
        {/* <div className="flex justify-center mt-6">
          {Array.from({ length: Math.ceil(visibleImages.length / 9) }).map(
            (_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${
                  i === 0 ? "bg-red-500" : "bg-gray-300"
                }`}
                // For now, only first page is active; add logic for pagination if needed
                aria-label={`Go to page ${i + 1}`}
                disabled
              />
            )
          )}
        </div> */}
      </div>
    </div>
  );
}
