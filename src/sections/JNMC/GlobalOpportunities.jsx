import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nevada from "../../assets/FEAT/Opportunities/1.png";
import berkeley from "../../assets/FEAT/Opportunities/2.png";
import sydney from "../../assets/FEAT/Opportunities/3.png";
import wollongong from "../../assets/FEAT/Opportunities/4.png";
import yeshiva from "../../assets/FEAT/Opportunities/5.png";
import deusto from "../../assets/FEAT/Opportunities/6.png";
import kazan from "../../assets/FEAT/Opportunities/7.png";
import plymouth from "../../assets/FEAT/Opportunities/8.png";
import GO from "../../assets/GO.png";

const logos = [
  { src: nevada, alt: "University of Nevada" },
  { src: berkeley, alt: "UC Berkeley" },
  { src: sydney, alt: "University of Sydney" },
  { src: wollongong, alt: "University of Wollongong" },
  { src: yeshiva, alt: "Yeshiva University" },
  { src: deusto, alt: "University of Deusto" },
  { src: kazan, alt: "Kazan Federal University" },
  { src: plymouth, alt: "Plymouth Marjon University" },
];

export default function GlobalOpportunities() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 400, // for very small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white px-6 md:px-40 py-20">
      <div className=" font-[Arial] mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-oswald-medium sm:text-4xl font-[500] text-[#707070] mb-4 uppercase relative">
            <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
            Global Opportunities
          </h2>
          <p className="text-gray-600 text-xm max-w-5xl tracking-normal leading-relaxed">
            Excellent global opportunities through collaborations with renowned
            foreign universities like the University of California, Berkeley,
            the University of Sydney, Yeshiva University, and others. These
            partnerships facilitate faculty exchange, student exchange programs,
            joint research projects, academic trainings and international
            exposure, enhancing students’ learning experience and career
            prospects. Four B.Tech. Students have been selected for the emersion
            program at the University of California Berkeley, USA which is fully
            sponsored by the Management.
          </p>
        </div>

        {/* Mobile: Slick Slider */}
       

        {/* <div className="hidden sm:grid grid-cols-4 gap-y-8 items-center justify-items-stretch">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center  border-r   max-h-20 px-4 last:border-r-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain max-h-20"
              />
            </div>
          ))}
        </div> */}
      
      </div>
    </section>
  );
}
