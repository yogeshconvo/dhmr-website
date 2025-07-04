import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nevada from "../../assets/rnpc/Opportunities/1.png";
import berkeley from "../../assets/rnpc/Opportunities/2.png";
import sydney from "../../assets/rnpc/Opportunities/3.png";
import wollongong from "../../assets/rnpc/Opportunities/4.png";
import yeshiva from "../../assets/rnpc/Opportunities/5.png";
import deusto from "../../assets/rnpc/Opportunities/6.png";
import kazan from "../../assets/rnpc/Opportunities/7.png";
import plymouth from "../../assets/rnpc/Opportunities/8.png";

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
function GlobalOpportunitiesRNPC() {
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
    <section className="bg-white  py-24">
      <div className="max-w-7xl font-[Arial] mx-auto">
        <div className="mb-8 px-5">
          <h2 className="text-3xl font-oswald-medium sm:text-4xl font-[500] text-[#707070] mb-4 uppercase relative">
            <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
            Global Opportunities
          </h2>
          <p className="text-gray-600 text-xm max-w-5xl  tracking-normal leading-relaxed">
            With alumni thriving across 10+ countries—including the USA, UK,
            Australia, Canada, Germany, and Singapore—RNPC’s influence extends
            far beyond India. From healthcare innovation and research to
            national security and entrepreneurship, our graduates are making a
            meaningful mark on global platforms. Their journeys reflect the
            strength of RNPC’s academic foundation, clinical training, and
            future-ready approach to physiotherapy education.
          </p>
        </div>

        {/* Mobile: Slick Slider */}
        {/* <div className="sm:hidden">
          <Slider {...settings}>
            {logos.map((logo, idx) => (
              <div key={idx} className="flex justify-center items-center h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain max-h-20 mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div> */}

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

export default GlobalOpportunitiesRNPC;
